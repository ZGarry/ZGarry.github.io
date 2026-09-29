/* ============================================================
 * bots.js — 机器人 AI:感知 / 状态机 / 战斗 / 下包拆包
 * ============================================================ */
'use strict';

const DIFFICULTY = {
  easy: { reaction: 0.7, aimStart: 7.5, aimMin: 2.4, aimDecay: 2.4, burstMax: 4, fireErrMul: 1.5 },
  normal: { reaction: 0.42, aimStart: 5.0, aimMin: 1.2, aimDecay: 3.2, burstMax: 6, fireErrMul: 1.0 },
  hard: { reaction: 0.22, aimStart: 3.2, aimMin: 0.55, aimDecay: 4.5, burstMax: 9, fireErrMul: 0.65 },
};

class BotBrain {
  constructor(ent, game) {
    this.e = ent;
    this.game = game;
    this.state = 'objective';
    this.path = null;
    this.pathIdx = 0;
    this.goal = null;          // {x,z}
    this.repathT = 0;
    this.target = null;        // 敌方实体
    this.sightTime = 0;        // 连续看到目标的时间
    this.reactT = 0;
    this.lostT = 0;
    this.lastKnown = null;     // V3
    this.burstLeft = 0;
    this.burstCd = 0;
    this.holdT = 0;            // 驻守倒计时
    this.holdPos = null;
    this.strafeDir = 1;
    this.strafeT = 0;
    this.stuckT = 0;
    this.lastPos = new THREE.Vector3();
    this.aimYaw = ent.yaw; this.aimPitch = 0;
    this.scanYaw = ent.yaw;
    this.plantT = 0;
    this.defuseT = 0;
    this.thinkT = Math.random() * 0.2;
    this.flinchT = 0;
    this.nadeCd = 0;
  }

  // 向目标点投掷手雷(有库存且冷却完毕)
  tryThrowNade(targetPos, prefer) {
    const e = this.e, g = this.game;
    if (this.nadeCd > 0) return false;
    const order = prefer === 'flash' ? ['flash', 'he'] : ['he', 'flash'];
    let nk = null;
    for (const k of order) if ((e.inv.grenades[k] || 0) > 0) { nk = k; break; }
    if (!nk) return false;
    e.inv.grenades[nk]--;
    this.nadeCd = 12 + Math.random() * 8;
    const eye = new THREE.Vector3(e.pos.x, e.pos.y + 1.62, e.pos.z);
    const d = new THREE.Vector3(targetPos.x - e.pos.x, 0, targetPos.z - e.pos.z);
    const dist = Math.max(1, d.length());
    d.normalize();
    d.y = Math.min(0.65, 0.25 + dist * 0.012); // 抛物线仰角
    d.normalize();
    Effects.throwGrenade(nk, eye.addScaledVector(d, 0.4), d, e, Math.min(1.2, 0.5 + dist / 28));
    return true;
  }

  get diff() {
    if (this.skillOverride) return DIFFICULTY[this.skillOverride];
    return DIFFICULTY[this.game.settings.difficulty] || DIFFICULTY.normal;
  }

  onDamaged(attacker) {
    this.flinchT = 0.25;
    if (attacker && attacker.alive && attacker.team !== this.e.team) {
      this.lastKnown = attacker.pos.clone();
      if (!this.target) { this.target = attacker; this.reactT = this.diff.reaction * 0.5; this.sightTime = 0; }
    }
  }
  onHeardShot(pos, shooter) {
    if (shooter.team === this.e.team) return;
    if (this.e.pos.distanceTo(pos) < 30) this.lastKnown = pos.clone();
  }

  /* ---------- 主更新 ---------- */
  update(dt) {
    const e = this.e, g = this.game;
    if (!e.alive) return;
    e.wishX = 0; e.wishZ = 0; e.wantJump = false; e.walkSlow = false; e.crouchWish = false;

    // 被闪
    const blinded = e.flashEnd > g.time;

    // 感知
    this.thinkT -= dt;
    if (this.thinkT <= 0) {
      this.thinkT = 0.1;
      if (!blinded) this.perceive();
    }

    // 目标有效性
    if (this.target && (!this.target.alive)) { this.target = null; this.sightTime = 0; }

    // 状态决策
    const bomb = g.bomb;
    if (this.target && !blinded) {
      this.combat(dt);
    } else if (e.planting) {
      this.doPlant(dt);
    } else if (e.defusing) {
      this.doDefuse(dt);
    } else if (this.lastKnown && this.state !== 'plant' && this.state !== 'defuse') {
      this.hunt(dt);
    } else {
      this.objective(dt);
    }

    // 卡死检测
    const moved = this.lastPos.distanceTo(e.pos);
    const wantsMove = (e.wishX !== 0 || e.wishZ !== 0);
    if (wantsMove && moved < 0.25 * dt * 4.2) {
      this.stuckT += dt;
      if (this.stuckT > 0.7) { e.wantJump = true; }
      if (this.stuckT > 1.6) { this.path = null; this.repathT = 0; this.stuckT = 0; }
    } else this.stuckT = Math.max(0, this.stuckT - dt);
    this.lastPos.copy(e.pos);

    this.nadeCd = Math.max(0, this.nadeCd - dt);

    // 平滑转向
    const turnSpeed = this.target ? 14 : 6;
    e.yaw = lerpAngle(e.yaw, this.aimYaw, Math.min(1, dt * turnSpeed));
    e.pitch += (this.aimPitch - e.pitch) * Math.min(1, dt * turnSpeed);

    this.flinchT = Math.max(0, this.flinchT - dt);

    // 自动换弹
    const ws = g.curWeaponState(e);
    if (ws && ws.def.mag && ws.ammo === 0 && !e.reloading) g.startReload(e);
  }

  /* ---------- 感知 ---------- */
  perceive() {
    const e = this.e, g = this.game;
    let best = null, bestD = 1e9;
    for (const o of g.entities) {
      if (!o.alive || o.team === e.team || o === e) continue;
      const d = e.pos.distanceTo(o.pos);
      if (d > 70) continue;
      // FOV 检查(交战中放宽)
      if (!this.target || this.target !== o) {
        const dx = o.pos.x - e.pos.x, dz = o.pos.z - e.pos.z;
        const angTo = Math.atan2(-dx, -dz);
        let dy = Math.abs(normAngle(angTo - e.yaw));
        if (dy > 1.1 && d > 3) continue; // ~126° FOV
      }
      if (!g.canSee(e, o)) continue;
      if (d < bestD) { bestD = d; best = o; }
    }
    if (best) {
      if (this.target !== best) {
        if (!this.target) this.reactT = this.diff.reaction * (0.7 + Math.random() * 0.6);
        this.target = best;
        this.sightTime = 0;
      }
      this.lostT = 0;
      this.lastKnown = best.pos.clone();
    } else if (this.target) {
      this.lostT += 0.1;
      if (this.lostT > 1.6) {
        this.lastKnown = this.target.pos.clone();
        this.target = null;
        this.sightTime = 0;
      }
    }
  }

  /* ---------- 交战 ---------- */
  combat(dt) {
    const e = this.e, g = this.game, t = this.target;
    const d = e.pos.distanceTo(t.pos);
    this.sightTime += dt;
    this.reactT -= dt;

    // 瞄准点(身体中心,高手偶尔打头)
    const aimHead = Math.random() < (this.game.settings.difficulty === 'hard' ? 0.35 : 0.12);
    const targetY = t.pos.y + (t.crouch ? 0.7 : (aimHead ? 1.55 : 1.1));
    // 瞄准误差
    let err = Math.max(this.diff.aimMin, this.diff.aimStart - this.sightTime * this.diff.aimDecay);
    if (this.flinchT > 0) err += 3.5;
    if (e.flashEnd > g.time) err += 20;
    const errRad = err * Math.PI / 180;
    const ex = (Math.random() - .5) * errRad;
    const ey = (Math.random() - .5) * errRad * 0.7;
    const dx = t.pos.x - e.pos.x, dz = t.pos.z - e.pos.z;
    this.aimYaw = Math.atan2(-dx, -dz) + ex;
    const eyeY = e.pos.y + (e.crouch ? 1.06 : 1.62);
    this.aimPitch = Math.atan2(targetY - eyeY, Math.sqrt(dx * dx + dz * dz)) + ey;

    // 移动:中距离横向走位,近距离逼近,远距离找掩护蹲
    this.strafeT -= dt;
    if (this.strafeT <= 0) { this.strafeT = 0.5 + Math.random() * 0.7; this.strafeDir = Math.random() < 0.5 ? -1 : 1; }
    const ws = g.curWeaponState(e);
    const wdef = ws ? ws.def : null;
    if (wdef && wdef.type === 'knife') {
      // 持刀冲锋
      this.moveTowards(t.pos.x, t.pos.z, 1);
      if (d < 2.0 && this.reactT <= 0) g.tryFire(e);
      return;
    }
    if (d > 38 && wdef && wdef.type !== 'sniper') {
      this.moveTowards(t.pos.x, t.pos.z, 1);
    } else if (d < 6) {
      // 后撤拉枪线
      e.wishX = this.strafeDir * 0.8; e.wishZ = -0.6;
    } else {
      e.wishX = this.strafeDir * 0.7;
      e.wishZ = (Math.random() < 0.3 ? -0.3 : 0);
      if (wdef && wdef.type === 'sniper') { e.wishX = 0; e.crouchWish = true; }
    }

    // AWP 开镜
    if (wdef && wdef.scope) e.scopedWish = true;

    // 开火控制
    if (this.reactT > 0 || e.reloading) return;
    this.burstCd -= dt;
    if (this.burstLeft <= 0 && this.burstCd <= 0) {
      const maxB = wdef && wdef.auto ? this.diff.burstMax : 1;
      this.burstLeft = 1 + Math.floor(Math.random() * maxB);
      this.burstCd = 0.25 + Math.random() * 0.5 + (d > 25 ? 0.3 : 0);
    }
    if (this.burstLeft > 0) {
      // 检查友军火线
      if (this.friendlyInLine(t)) return;
      const fired = g.tryFire(e);
      if (fired) this.burstLeft--;
    }
  }

  friendlyInLine(target) {
    const e = this.e, g = this.game;
    const eye = new THREE.Vector3(e.pos.x, e.pos.y + 1.62, e.pos.z);
    const to = new THREE.Vector3(target.pos.x, target.pos.y + 1.1, target.pos.z);
    const dir = to.clone().sub(eye); const len = dir.length(); dir.normalize();
    for (const o of g.entities) {
      if (o === e || !o.alive || o.team !== e.team) continue;
      const t = Physics.rayCylinder(eye, dir, o.pos.x, o.pos.z, 0.5, o.pos.y, o.pos.y + 1.8, len);
      if (t !== null) return true;
    }
    return false;
  }

  /* ---------- 追击 ---------- */
  hunt(dt) {
    const e = this.e;
    const lk = this.lastKnown;
    if (!lk) return;
    const dLk = Math.hypot(lk.x - e.pos.x, lk.z - e.pos.z);
    if (dLk < 2.5) {
      this.lastKnown = null;
      this.path = null;
      return;
    }
    // 接近可疑位置时丢雷
    if (dLk > 8 && dLk < 22 && Math.random() < dt * 0.5) this.tryThrowNade(lk, Math.random() < 0.5 ? 'flash' : 'he');
    this.followPathTo(lk.x, lk.z, dt, 1);
    this.faceMoveDir();
  }

  /* ---------- 任务目标 ---------- */
  objective(dt) {
    const e = this.e, g = this.game;
    const bomb = g.bomb;

    if (e.team === 'T') {
      if (bomb.planted) {
        // 守包
        if (!this.holdPos || this.holdT <= 0) {
          const a = Math.random() * Math.PI * 2;
          this.holdPos = { x: bomb.pos.x + Math.cos(a) * (5 + Math.random() * 6), z: bomb.pos.z + Math.sin(a) * (5 + Math.random() * 6) };
          this.holdT = 4 + Math.random() * 5;
        }
        this.holdT -= dt;
        this.guardAt(this.holdPos, dt, bomb.pos);
        return;
      }
      if (e.hasC4) {
        // 去包点下包
        const site = this.goalSite || (this.goalSite = MapSys.sites[Math.random() < 0.5 ? 'A' : 'B']);
        const dSite = Math.hypot(e.pos.x - site.cx, e.pos.z - site.cz);
        if (dSite > 14 && dSite < 26 && Math.random() < dt * 0.35) this.tryThrowNade({ x: site.cx, z: site.cz }, 'flash');
        if (MapSys.inRect(e.pos.x, e.pos.z, site) && Math.hypot(e.pos.x - site.cx, e.pos.z - site.cz) < 7) {
          // 开始下包
          if (g.phase === 'live') { e.planting = true; this.plantT = 0; }
          return;
        }
        this.followPathTo(site.cx + (Math.random() - .5) * 3, site.cz + (Math.random() - .5) * 3, dt, 1);
        this.faceMoveDir();
        return;
      }
      // 跟随炸弹携带者或推进包点
      const carrier = g.entities.find(o => o.alive && o.team === 'T' && o.hasC4);
      if (carrier && carrier !== e && Math.random() < 0.6) {
        const d = e.pos.distanceTo(carrier.pos);
        if (d > 6) { this.followPathTo(carrier.pos.x, carrier.pos.z, dt, 1); this.faceMoveDir(); }
        else this.idleScan(dt);
        return;
      }
      // 自行推进
      if (!this.goal || this.repathT <= 0) {
        const site = MapSys.sites[Math.random() < 0.5 ? 'A' : 'B'];
        this.goal = MapSys.randomInRect(site);
        this.repathT = 18;
      }
      this.repathT -= dt;
      if (Math.hypot(this.goal.x - e.pos.x, this.goal.z - e.pos.z) < 3) { this.idleScan(dt); this.repathT -= dt * 3; }
      else { this.followPathTo(this.goal.x, this.goal.z, dt, 1); this.faceMoveDir(); }
      return;
    }

    /* CT */
    if (bomb.planted) {
      // 冲向炸弹并拆除
      const d = Math.hypot(bomb.pos.x - e.pos.x, bomb.pos.z - e.pos.z);
      if (d < 1.6) {
        e.defusing = true;
        return;
      }
      this.followPathTo(bomb.pos.x, bomb.pos.z, dt, 1);
      this.faceMoveDir();
      return;
    }
    // 防守:分配包点驻守 + 偶尔游走
    if (!this.holdPos || this.holdT <= 0) {
      const site = MapSys.sites[this.defendSite || (this.defendSite = Math.random() < 0.5 ? 'A' : 'B')];
      if (Math.random() < 0.25) this.defendSite = this.defendSite === 'A' ? 'B' : 'A';
      const p = MapSys.randomInRect(site);
      this.holdPos = p;
      this.holdT = 6 + Math.random() * 8;
    }
    this.holdT -= dt;
    this.guardAt(this.holdPos, dt, null);
  }

  guardAt(p, dt, watchPos) {
    const e = this.e;
    const d = Math.hypot(p.x - e.pos.x, p.z - e.pos.z);
    if (d > 2.2) {
      this.followPathTo(p.x, p.z, dt, 1);
      this.faceMoveDir();
    } else {
      this.idleScan(dt, watchPos);
    }
  }

  idleScan(dt, watchPos) {
    // 站定环视
    if (watchPos) {
      const dx = watchPos.x - this.e.pos.x, dz = watchPos.z - this.e.pos.z;
      this.aimYaw = Math.atan2(-dx, -dz) + Math.sin(this.game.time * 0.7 + this.e.id) * 0.8;
    } else {
      this.aimYaw = this.scanYaw + Math.sin(this.game.time * 0.5 + this.e.id * 2) * 1.4;
    }
    this.aimPitch = 0;
  }

  /* ---------- 下包/拆包 ---------- */
  doPlant(dt) {
    const e = this.e, g = this.game;
    e.wishX = 0; e.wishZ = 0;
    e.crouchWish = true;
    if (this.target) { e.planting = false; return; } // 被打断转交战
    this.plantT += dt;
    if (this.plantT >= 3.2) {
      e.planting = false;
      g.plantBomb(e);
    }
  }
  doDefuse(dt) {
    const e = this.e, g = this.game;
    e.wishX = 0; e.wishZ = 0;
    e.crouchWish = true;
    if (this.target) { e.defusing = false; this.defuseT = 0; return; }
    if (!g.bomb.planted) { e.defusing = false; this.defuseT = 0; return; }
    this.defuseT += dt;
    const need = e.defuseKit ? 5 : 10;
    if (this.defuseT >= need) {
      e.defusing = false;
      g.defuseBomb(e);
    }
  }

  /* ---------- 寻路移动 ---------- */
  followPathTo(x, z, dt, speedK) {
    const e = this.e;
    this.repathCheck(x, z);
    if (!this.path || this.path.length === 0) {
      this.moveTowards(x, z, speedK);
      return;
    }
    let wp = this.path[this.pathIdx];
    while (wp && Math.hypot(wp.x - e.pos.x, wp.z - e.pos.z) < 1.4) {
      this.pathIdx++;
      wp = this.path[this.pathIdx];
    }
    if (!wp) { this.path = null; this.moveTowards(x, z, speedK); return; }
    this.moveTowards(wp.x, wp.z, speedK);
  }

  repathCheck(x, z) {
    if (this.path && this.pathTarget && Math.hypot(this.pathTarget.x - x, this.pathTarget.z - z) < 3) return;
    const path = MapSys.findPath(this.e.pos.x, this.e.pos.z, x, z);
    this.path = path;
    this.pathIdx = 0;
    this.pathTarget = { x, z };
  }

  moveTowards(x, z, k) {
    const e = this.e;
    const dx = x - e.pos.x, dz = z - e.pos.z;
    const len = Math.hypot(dx, dz);
    if (len < 0.05) return;
    // 转到实体局部坐标(yaw 朝向 -Z;wishZ 正 = 前进)
    const sin = Math.sin(e.yaw), cos = Math.cos(e.yaw);
    const wishX = (dx * cos - dz * sin) / len;
    const wishZ = -(dx * sin + dz * cos) / len;
    e.wishX = wishX * (k || 1);
    e.wishZ = wishZ * (k || 1);
    this._moveDir = { x: dx / len, z: dz / len };
  }

  faceMoveDir() {
    if (!this._moveDir) return;
    this.aimYaw = Math.atan2(-this._moveDir.x, -this._moveDir.z);
    this.aimPitch = 0;
    this.scanYaw = this.aimYaw;
  }

  resetRound() {
    this.state = 'objective';
    this.path = null; this.goal = null; this.target = null;
    this.lastKnown = null; this.sightTime = 0;
    this.holdPos = null; this.holdT = 0;
    this.goalSite = null; this.defendSite = null;
    this.plantT = 0; this.defuseT = 0;
    this.aimYaw = this.e.yaw; this.aimPitch = 0; this.scanYaw = this.e.yaw;
  }
}

function normAngle(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}
function lerpAngle(a, b, t) {
  return a + normAngle(b - a) * t;
}
