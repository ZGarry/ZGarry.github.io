/* ============================================================
 * game.js — 主逻辑:回合 / 经济 / 炸弹 / 伤害 / HUD / 主循环
 * ============================================================ */
'use strict';

const Game = (() => {
  const V = THREE.Vector3;
  const W = Weapons.WEAPONS;

  /* ---------------- 常量 ---------------- */
  const FREEZE_TIME = 5;
  const ROUND_TIME = 115;
  const BOMB_TIME = 40;
  const ROUNDEND_TIME = 5;
  const PLANT_TIME = 3.2;
  const BUY_WINDOW = 15;       // 冻结+开局可购买秒数
  const START_MONEY = 800;
  const MAX_MONEY = 16000;
  const KILL_REWARD = { default: 300, knife: 1500, awp: 100 };
  const WIN_ELIM = 3250, WIN_BOMB = 3500, WIN_DEFUSE = 3500, WIN_TIME = 3250;
  const LOSS_BONUS = [1400, 1900, 2400, 2900, 3400];
  const PLANT_BONUS = 300;

  const CT_NAMES = ['Steel', 'Hawk', 'Pierce', 'Stone', 'Vitaliy'];
  const T_NAMES = ['Cliffe', 'Minh', 'Crusher', 'Quinn', 'Ringo'];

  /* ---------------- 状态 ---------------- */
  let scene, camera, renderer;
  let viewModel;
  const entities = [];
  let player = null;
  let phase = 'menu';          // menu | freeze | live | planted | roundend | matchend
  let phaseT = 0;
  let roundTimer = 0;
  let time = 0;
  let timeScale = 1;
  let roundNum = 0;
  const score = { CT: 0, T: 0 };
  let lossStreak = { CT: 0, T: 0 };
  let halftimeDone = false;
  const bomb = { planted: false, pos: new V(), timer: 0, beepT: 0, blinkOn: false, defuser: null, planter: null };
  const droppedItems = [];     // {key, ammo, reserve, mesh, pos}
  let spectateIdx = 0;
  let autopilot = false;
  let autoBrain = null;
  let matchOver = false;
  let killsThisRound = [];

  const settings = {
    difficulty: 'normal',
    sensitivity: 1.0,
    volume: 0.5,
    shadows: true,
    maxRounds: 24,             // MR24: 先到 13 胜
    fov: 75,
  };
  const winsNeeded = () => Math.floor(settings.maxRounds / 2) + 1;

  /* ---------------- DOM 引用 ---------------- */
  const $ = id => document.getElementById(id);
  let dom = {};

  /* ---------------- 实体 ---------------- */
  let nextId = 1;
  function createEntity(name, team, isPlayer) {
    const e = {
      id: nextId++, name, team, isPlayer,
      pos: new V(), vel: new V(), yaw: 0, pitch: 0,
      radius: 0.4, heightStand: 1.8, heightCrouch: 1.2, curHeight: 1.8,
      crouch: false, crouchWish: false, onGround: true, walkSlow: false,
      hp: 100, armor: 0, helmet: false, alive: true,
      money: START_MONEY, kills: 0, deaths: 0,
      inv: null, slot: 'secondary',
      reloading: false, reloadT: 0,
      nextFire: 0, sprayIdx: 0, lastFireT: -9,
      hasC4: false, defuseKit: false,
      planting: false, plantT: 0,
      defusing: false, defuseT: 0,
      scoped: false, scopedWish: false, scopeLevel: 0,
      flashEnd: 0,
      wishX: 0, wishZ: 0, wantJump: false,
      footAcc: 0,
      viewPunch: 0,
      model: null, brain: null,
      deathTime: 0,
    };
    resetLoadout(e);
    if (!isPlayer) {
      e.model = new CharacterModel(scene, team);
      e.brain = new BotBrain(e, api);
      if (team === player?.team) {
        const tag = makeNameSprite(name, '#7fd47f');
        tag.position.y = 2.1;
        e.model.root.add(tag);
        e.nameTag = tag;
      }
    }
    return e;
  }

  function defaultPistol(team) { return team === 'CT' ? 'usp' : 'glock'; }

  function resetLoadout(e) {
    const pk = defaultPistol(e.team);
    e.inv = {
      primary: null,
      secondary: { key: pk, ammo: W[pk].mag, reserve: W[pk].reserve },
      grenades: { he: 0, flash: 0, smoke: 0 },
    };
    e.slot = 'secondary';
    e.armor = 0; e.helmet = false; e.defuseKit = false;
    e.sprayIdx = 0; e.reloading = false;
  }

  function curWeaponState(e) {
    if (e.slot === 'primary' && e.inv.primary) return { ...e.inv.primary, def: W[e.inv.primary.key], ref: e.inv.primary };
    if (e.slot === 'secondary' && e.inv.secondary) return { ...e.inv.secondary, def: W[e.inv.secondary.key], ref: e.inv.secondary };
    if (e.slot === 'knife') return { key: 'knife', def: W.knife, ref: null };
    if (e.slot === 'c4') return { key: 'c4', def: W.c4, ref: null };
    if (e.slot && e.slot.startsWith('nade_')) {
      const nk = e.slot.slice(5);
      return { key: nk, def: W[nk], ref: null };
    }
    return { key: 'knife', def: W.knife, ref: null };
  }

  function entityEye(e) {
    return new V(e.pos.x, e.pos.y + (e.crouch ? 1.06 : 1.62), e.pos.z);
  }
  function entityFwd(e) {
    const cp = Math.cos(e.pitch);
    return new V(-Math.sin(e.yaw) * cp, Math.sin(e.pitch), -Math.cos(e.yaw) * cp);
  }

  /* ---------------- 可见性 ---------------- */
  function canSee(a, b) {
    const eyeA = entityEye(a);
    const targets = [entityEye(b), new V(b.pos.x, b.pos.y + 0.9, b.pos.z)];
    for (const t of targets) {
      if (Physics.segmentClear(eyeA, t) && !Effects.smokeBlocks(eyeA, t)) return true;
    }
    return false;
  }

  /* ---------------- 射击 ---------------- */
  function tryFire(e) {
    const ws = curWeaponState(e);
    const w = ws.def;
    if (time < e.nextFire || e.reloading || !e.alive) return false;
    if (phase !== 'live' && phase !== 'planted' && phase !== 'roundend') return false;
    if (e.planting || e.defusing) return false;

    if (w.type === 'knife') {
      e.nextFire = time + 60 / w.rpm;
      AudioSys.knifeSwing(e.isPlayer ? null : e.pos);
      if (e.isPlayer) viewModel.kick(1.5);
      meleeAttack(e, w.dmg);
      return true;
    }
    if (w.type === 'grenade') {
      const g = e.inv.grenades;
      if ((g[ws.key] || 0) <= 0) return false;
      g[ws.key]--;
      e.nextFire = time + 1.0;
      const eye = entityEye(e);
      const dir = entityFwd(e);
      Effects.throwGrenade(ws.key, eye.clone().addScaledVector(dir, 0.4), dir, e, 1);
      if (e.isPlayer) {
        viewModel.kick(1);
        setTimeout(() => { if ((g[ws.key] || 0) <= 0) switchAwayFromEmptyNade(e, ws.key); }, 350);
      } else if ((g[ws.key] || 0) <= 0) {
        e.slot = bestSlot(e);
      }
      return true;
    }
    if (w.type === 'c4') return false;

    const ref = ws.ref;
    if (!ref) return false;
    if (ref.ammo <= 0) {
      if (e.isPlayer) AudioSys.empty();
      startReload(e);
      return false;
    }
    // 射速
    e.nextFire = time + 60 / w.rpm;
    ref.ammo--;
    // 连发索引
    if (time - e.lastFireT > 0.35) e.sprayIdx = 0;
    e.lastFireT = time;

    const eye = entityEye(e);
    let dir = entityFwd(e);
    // 后坐力弹道
    const po = Weapons.patternOffset(ws.key, e.sprayIdx);
    const spread = Weapons.computeSpread(e, w, e.scoped);
    const errX = (po.x + (Math.random() - .5) * spread) * Math.PI / 180;
    const errY = (po.y * 0.55 + (Math.random() - .5) * spread * 0.8) * Math.PI / 180;
    dir = applyAngularOffset(dir, errX, errY);
    e.sprayIdx++;

    // 命中检测
    const result = hitscan(e, eye, dir, 200);

    // 特效与声音
    const isSelf = e.isPlayer;
    AudioSys.shot(ws.key, isSelf ? null : e.pos);
    let muzzle;
    if (isSelf) {
      muzzle = viewModel.muzzleWorld();
      Effects.muzzleFlash(muzzle, w.type === 'sniper');
      viewModel.kick(w.kick);
      e.viewPunch = Math.min(0.12, e.viewPunch + w.recoilV * 0.012);
      const right = new V(Math.cos(e.yaw), 0, -Math.sin(e.yaw));
      Effects.casing(muzzle.clone().addScaledVector(right, 0.1), right);
    } else {
      muzzle = entityEye(e).addScaledVector(dir, 0.6);
      muzzle.y -= 0.15;
      Effects.muzzleFlash(muzzle, w.type === 'sniper');
    }
    if (!w.silenced) Effects.tracer(muzzle, result.point);
    if (result.entity) {
      const dmgDir = dir;
      Effects.blood(result.point, dmgDir);
      applyDamage(e, result.entity, w, result.region, eye.distanceTo(result.point));
    } else if (result.hitWall) {
      Effects.impact(result.point, result.normal, true);
    }
    // 通知附近机器人(听声辨位)
    if (!w.silenced) {
      for (const o of entities) {
        if (o.brain && o.alive && o.team !== e.team) o.brain.onHeardShot(e.pos, e);
      }
    }
    // AWP 拉栓 & 自动退出开镜
    if (w.scope && e.isPlayer) {
      viewModel.startBolt(w.boltTime);
      e.scoped = false; e.scopeLevel = 0;
    }
    return true;
  }

  function applyAngularOffset(dir, yawOff, pitchOff) {
    const d = dir.clone();
    // 绕世界 Y 轴偏航
    const cy = Math.cos(yawOff), sy = Math.sin(yawOff);
    const x = d.x * cy - d.z * sy, z = d.x * sy + d.z * cy;
    d.x = x; d.z = z;
    // 俯仰:绕右轴
    const right = new V(-d.z, 0, d.x).normalize();
    d.applyAxisAngle(right, pitchOff);
    return d.normalize();
  }

  function hitscan(shooter, origin, dir, maxDist) {
    // 静态世界
    const wallHit = Physics.rayWorld(origin, dir, maxDist);
    let bestT = wallHit ? wallHit.t : maxDist;
    let bestEnt = null, region = null;
    for (const o of entities) {
      if (o === shooter || !o.alive) continue;
      if (o.team === shooter.team) continue; // 无友伤
      const headY = o.pos.y + (o.crouch ? 1.18 : 1.62);
      const tHead = Physics.raySphere(origin, dir, new V(o.pos.x, headY, o.pos.z), 0.17, bestT);
      if (tHead !== null && tHead < bestT) { bestT = tHead; bestEnt = o; region = 'head'; continue; }
      const bodyTop = o.pos.y + (o.crouch ? 1.05 : 1.5);
      const bodyBot = o.pos.y + (o.crouch ? 0.5 : 0.8);
      const tBody = Physics.rayCylinder(origin, dir, o.pos.x, o.pos.z, 0.30, bodyBot, bodyTop, bestT);
      if (tBody !== null && tBody < bestT) { bestT = tBody; bestEnt = o; region = 'body'; continue; }
      const tLegs = Physics.rayCylinder(origin, dir, o.pos.x, o.pos.z, 0.24, o.pos.y, bodyBot, bestT);
      if (tLegs !== null && tLegs < bestT) { bestT = tLegs; bestEnt = o; region = 'legs'; }
    }
    const point = origin.clone().addScaledVector(dir, bestT);
    return {
      entity: bestEnt, region, point,
      hitWall: !bestEnt && !!wallHit,
      normal: wallHit ? wallHit.normal : new V(0, 1, 0),
      t: bestT,
    };
  }

  function meleeAttack(e, dmg) {
    const eye = entityEye(e);
    const dir = entityFwd(e);
    const res = hitscan(e, eye, dir, W.knife.range);
    if (res.entity) {
      AudioSys.knifeHit(e.isPlayer ? null : res.point);
      Effects.blood(res.point, dir);
      applyDamage(e, res.entity, W.knife, res.region === 'head' ? 'head' : 'body', 1);
    } else if (res.hitWall && res.t < W.knife.range) {
      Effects.impact(res.point, res.normal, true);
      AudioSys.thud(res.point, 0.3, 250);
    }
  }

  /* ---------------- 伤害 ---------------- */
  function applyDamage(attacker, victim, w, region, dist) {
    if (!victim.alive) return;
    let dmg = w.dmg;
    if (w.rangeMod) dmg *= Math.pow(w.rangeMod, dist / 15);
    if (region === 'head') dmg *= 4;
    else if (region === 'legs') dmg *= 0.75;
    // 护甲
    const armored = (region === 'head') ? victim.helmet : (victim.armor > 0 && region === 'body');
    if (armored && w.type !== 'knife') {
      const absorbed = dmg * 0.5;
      dmg -= absorbed;
      victim.armor = Math.max(0, victim.armor - absorbed * 0.5);
      if (victim.armor <= 0) victim.helmet = false;
    }
    dmg = Math.round(dmg);
    if (dmg <= 0) return;
    victim.hp -= dmg;
    // 反馈
    if (attacker.isPlayer) {
      if (region === 'head' && victim.helmet) AudioSys.dink(victim.pos);
      else AudioSys.hitConfirm();
      showHitmarker(region === 'head');
    }
    if (victim.isPlayer) {
      AudioSys.hurt();
      damageVignette(attacker.pos);
    }
    if (victim.brain) victim.brain.onDamaged(attacker);
    if (victim.hp <= 0) kill(attacker, victim, w, region === 'head');
  }

  function kill(attacker, victim, w, headshot) {
    victim.hp = 0;
    victim.alive = false;
    victim.deaths++;
    victim.deathTime = time;
    victim.planting = false;
    victim.defusing = false;
    if (victim.isPlayer) {
      player.scoped = false;
      announceSub(`你被 ${attacker.name} 击杀了`);
      spectateIdx = 0;
    }
    if (attacker !== victim && attacker.team !== victim.team) {
      attacker.kills++;
      const reward = KILL_REWARD[w.key] !== undefined ? KILL_REWARD[w.key] : KILL_REWARD.default;
      giveMoney(attacker, reward);
    }
    killsThisRound.push(victim.id);
    addKillfeed(attacker, victim, w, headshot);
    // 掉落武器与 C4
    dropWeaponOnDeath(victim);
    if (victim.hasC4) {
      victim.hasC4 = false;
      dropItem('c4', 0, 0, victim.pos);
      if (!entities.some(o => o.alive && o.team === 'T' && o.hasC4)) {
        announceSub('炸弹已掉落!');
      }
    }
    checkRoundWin();
  }

  /* ---------------- 掉落物 ---------------- */
  function dropWeaponOnDeath(e) {
    if (e.inv.primary) {
      dropItem(e.inv.primary.key, e.inv.primary.ammo, e.inv.primary.reserve, e.pos);
      e.inv.primary = null;
    }
  }
  function dropItem(key, ammo, reserve, pos) {
    const mesh = Weapons.buildModel(key);
    mesh.position.set(pos.x + (Math.random() - .5) * 0.6, 0.1, pos.z + (Math.random() - .5) * 0.6);
    mesh.rotation.z = Math.PI / 2 * 0.9;
    mesh.rotation.y = Math.random() * Math.PI;
    scene.add(mesh);
    droppedItems.push({ key, ammo, reserve, mesh, pos: mesh.position });
  }
  function updatePickups() {
    for (let i = droppedItems.length - 1; i >= 0; i--) {
      const it = droppedItems[i];
      for (const e of entities) {
        if (!e.alive) continue;
        const d = Math.hypot(e.pos.x - it.pos.x, e.pos.z - it.pos.z);
        if (d > 1.1) continue;
        if (it.key === 'c4') {
          if (e.team !== 'T') continue;
          e.hasC4 = true;
          if (e.isPlayer) announceSub('你拾取了 C4 炸弹');
          scene.remove(it.mesh); droppedItems.splice(i, 1);
          break;
        } else {
          if (e.inv.primary) continue;
          e.inv.primary = { key: it.key, ammo: it.ammo, reserve: it.reserve };
          if (e.isPlayer) { AudioSys.pickup(); switchSlot(e, 'primary'); }
          scene.remove(it.mesh); droppedItems.splice(i, 1);
          break;
        }
      }
    }
  }
  function clearDropped() {
    for (const it of droppedItems) scene.remove(it.mesh);
    droppedItems.length = 0;
  }

  /* ---------------- 金钱 ---------------- */
  function giveMoney(e, amt) { e.money = Math.min(MAX_MONEY, e.money + amt); }
  function teamMoney(team, amt) { for (const e of entities) if (e.team === team) giveMoney(e, amt); }

  /* ---------------- 换弹 / 切枪 ---------------- */
  function startReload(e) {
    const ws = curWeaponState(e);
    const w = ws.def;
    if (!ws.ref || !w.mag || e.reloading) return;
    if (ws.ref.ammo >= w.mag || ws.ref.reserve <= 0) return;
    e.reloading = true;
    e.reloadT = w.reloadTime;
    if (e.isPlayer) viewModel.startReload(w.reloadTime);
    AudioSys.reloadSound(0, e.isPlayer ? null : e.pos);
    setTimeout(() => { if (e.reloading) AudioSys.reloadSound(1, e.isPlayer ? null : e.pos); }, w.reloadTime * 500);
  }
  function finishReload(e) {
    const ws = curWeaponState(e);
    if (!ws.ref) { e.reloading = false; return; }
    const w = ws.def;
    const need = w.mag - ws.ref.ammo;
    const take = Math.min(need, ws.ref.reserve);
    ws.ref.ammo += take;
    ws.ref.reserve -= take;
    e.reloading = false;
    AudioSys.reloadSound(2, e.isPlayer ? null : e.pos);
  }

  function bestSlot(e) {
    if (e.inv.primary) return 'primary';
    if (e.inv.secondary) return 'secondary';
    return 'knife';
  }
  function switchSlot(e, slot) {
    if (slot === 'primary' && !e.inv.primary) return;
    if (slot === 'c4' && !e.hasC4) return;
    if (slot.startsWith('nade_')) {
      const nk = slot.slice(5);
      if ((e.inv.grenades[nk] || 0) <= 0) return;
    }
    if (e.slot === slot) return;
    e.slot = slot;
    e.reloading = false;
    e.scoped = false; e.scopeLevel = 0;
    e.sprayIdx = 0;
    e.nextFire = Math.max(e.nextFire, time + 0.25);
    if (e.isPlayer) {
      viewModel.cancelReload();
      viewModel.setWeapon(curWeaponState(e).key);
      updateHud();
    } else if (e.model) {
      e.model.setWeapon(curWeaponState(e).key);
    }
  }
  function switchAwayFromEmptyNade(e, nk) {
    if (e.slot === 'nade_' + nk && (e.inv.grenades[nk] || 0) <= 0) switchSlot(e, bestSlot(e));
  }

  /* ---------------- 购买 ---------------- */
  function canBuy(e) {
    if (phase !== 'freeze' && !(phase === 'live' && roundTimer > ROUND_TIME - (BUY_WINDOW - FREEZE_TIME))) return false;
    return e.alive && MapSys.inRect(e.pos.x, e.pos.z, MapSys.buyZones[e.team]);
  }
  function buy(e, key) {
    if (!canBuy(e)) { if (e.isPlayer) announceSub('不在购买时间或购买区内'); return false; }
    if (key === 'kevlar') {
      if (e.money < 650 || (e.armor >= 100 && !0)) return false;
      if (e.armor >= 100) return false;
      e.money -= 650; e.armor = 100;
      AudioSys.pickup(); updateHud(); return true;
    }
    if (key === 'kevlarHelmet') {
      const cost = e.armor >= 100 ? 350 : 1000;
      if (e.money < cost || (e.armor >= 100 && e.helmet)) return false;
      e.money -= cost; e.armor = 100; e.helmet = true;
      AudioSys.pickup(); updateHud(); return true;
    }
    if (key === 'defuser') {
      if (e.team !== 'CT' || e.defuseKit || e.money < 400) return false;
      e.money -= 400; e.defuseKit = true;
      AudioSys.pickup(); updateHud(); return true;
    }
    const w = W[key];
    if (!w || !w.price) return false;
    if (w.team && w.team !== e.team) return false;
    if (e.money < w.price) { if (e.isPlayer) announceSub('资金不足'); return false; }
    if (w.type === 'grenade') {
      const cur = e.inv.grenades[key] || 0;
      if (cur >= w.max) return false;
      e.money -= w.price;
      e.inv.grenades[key] = cur + 1;
      AudioSys.pickup(); updateHud(); return true;
    }
    if (w.type === 'pistol') {
      if (e.inv.secondary && e.inv.secondary.key === key) return false;
      e.money -= w.price;
      e.inv.secondary = { key, ammo: w.mag, reserve: w.reserve };
      if (e.isPlayer) { e.slot = 'x'; switchSlot(e, 'secondary'); }
      AudioSys.pickup(); updateHud(); return true;
    }
    // 主武器
    if (e.inv.primary && e.inv.primary.key === key) return false;
    if (e.inv.primary) dropItem(e.inv.primary.key, e.inv.primary.ammo, e.inv.primary.reserve, e.pos);
    e.money -= w.price;
    e.inv.primary = { key, ammo: w.mag, reserve: w.reserve };
    if (e.isPlayer) { e.slot = 'x'; switchSlot(e, 'primary'); }
    AudioSys.pickup(); updateHud();
    return true;
  }

  function botBuy(e) {
    // 机器人自动经济
    if (e.armor < 100 && e.money >= 1000) buyForce(e, 'kevlarHelmet');
    if (!e.inv.primary) {
      const rifle = e.team === 'T' ? 'ak47' : 'm4';
      if (e.money >= W[rifle].price + 300) buyForce(e, rifle);
      else if (e.money >= W.awp.price + 500 && Math.random() < 0.2) buyForce(e, 'awp');
      else if (e.money >= W.mp5.price + 200) buyForce(e, 'mp5');
      else if (e.money >= W.deagle.price + 100 && e.inv.secondary.key !== 'deagle') buyForce(e, 'deagle');
    }
    if (e.team === 'CT' && !e.defuseKit && e.money >= 800) buyForce(e, 'defuser');
    if (e.money >= 700 && (e.inv.grenades.flash || 0) < 1) buyForce(e, 'flash');
    if (e.money >= 900 && (e.inv.grenades.he || 0) < 1) buyForce(e, 'he');
    if (e.money >= 1100 && (e.inv.grenades.smoke || 0) < 1 && Math.random() < 0.5) buyForce(e, 'smoke');
    e.slot = bestSlot(e);
    if (e.model) e.model.setWeapon(curWeaponState(e).key);
  }
  function buyForce(e, key) {
    // 跳过区域检查的内部购买(机器人在冻结期出生点内)
    if (key === 'kevlarHelmet') {
      const cost = e.armor >= 100 ? 350 : 1000;
      if (e.money < cost) return;
      e.money -= cost; e.armor = 100; e.helmet = true; return;
    }
    if (key === 'defuser') { if (e.money < 400) return; e.money -= 400; e.defuseKit = true; return; }
    const w = W[key];
    if (!w || e.money < w.price) return;
    if (w.type === 'grenade') {
      const cur = e.inv.grenades[key] || 0;
      if (cur >= w.max) return;
      e.money -= w.price; e.inv.grenades[key] = cur + 1; return;
    }
    if (w.type === 'pistol') { e.money -= w.price; e.inv.secondary = { key, ammo: w.mag, reserve: w.reserve }; return; }
    e.money -= w.price;
    e.inv.primary = { key, ammo: w.mag, reserve: w.reserve };
  }

  /* ---------------- 炸弹 ---------------- */
  function plantBomb(e) {
    if (!e.hasC4) return;
    e.hasC4 = false;
    bomb.planted = true;
    bomb.pos.set(e.pos.x, e.pos.y, e.pos.z);
    bomb.timer = BOMB_TIME;
    bomb.beepT = 0;
    bomb.planter = e;
    Effects.plantC4(bomb.pos);
    setPhase('planted');
    roundTimer = 0;
    giveMoney(e, PLANT_BONUS);
    announce('炸弹已被安放', '#ff7043');
    AudioSys.bombPlantedAnnounce();
    if (e.isPlayer) switchSlot(e, bestSlot(e));
  }

  function defuseBomb(e) {
    bomb.planted = false;
    Effects.removeC4();
    endRound('CT', 'defuse');
  }

  function explodeBomb() {
    bomb.planted = false;
    const p = bomb.pos.clone();
    Effects.removeC4();
    Effects.explosionFX(p, 3);
    AudioSys.explosion(p);
    // 范围伤害
    for (const e of entities) {
      if (!e.alive) continue;
      const d = e.pos.distanceTo(p);
      if (d < 22) {
        if (e.isPlayer && e._god) continue;
        const dmg = Math.round(Math.max(0, 1 - d / 22) * 250);
        e.hp -= dmg;
        if (e.isPlayer && dmg > 0) damageVignette(p);
        if (e.hp <= 0) {
          e.alive = false; e.deaths++;
          addKillfeedText(`${e.name} 被炸弹炸死`);
          if (e.isPlayer) announceSub('你被炸弹炸死了');
        }
      }
    }
    endRound('T', 'bomb');
  }

  /* ---------------- 回合流程 ---------------- */
  function setPhase(p) { phase = p; phaseT = 0; }

  function startMatch() {
    score.CT = 0; score.T = 0;
    lossStreak.CT = 0; lossStreak.T = 0;
    roundNum = 0;
    halftimeDone = false;
    matchOver = false;
    for (const e of entities) {
      e.money = START_MONEY;
      e.kills = 0; e.deaths = 0;
      resetLoadout(e);
    }
    startRound();
  }

  function startRound() {
    roundNum++;
    killsThisRound = [];
    Effects.clearRound();
    clearDropped();
    bomb.planted = false;
    bomb.planter = null;
    // 重置实体
    const spawnsCT = MapSys.spawns.CT.slice(), spawnsT = MapSys.spawns.T.slice();
    let c4Given = false;
    const ts = entities.filter(e => e.team === 'T');
    const c4Holder = ts[Math.floor(Math.random() * ts.length)];
    for (const e of entities) {
      const sp = (e.team === 'CT' ? spawnsCT : spawnsT).shift() || { x: 0, z: e.team === 'CT' ? -40 : 36 };
      e.pos.set(sp.x, 0, sp.z);
      e.vel.set(0, 0, 0);
      e.yaw = e.team === 'CT' ? Math.PI : 0;
      e.pitch = 0;
      e.hp = 100;
      e.alive = true;
      e.crouch = false; e.curHeight = e.heightStand;
      e.planting = false; e.defusing = false;
      e.scoped = false; e.scopeLevel = 0;
      e.flashEnd = 0;
      e.hasC4 = false;
      e.reloading = false;
      e.sprayIdx = 0;
      e.nextFire = 0;
      // 死亡者重置装备(存活者保留)
      if (killedLastRound.has(e.id)) resetLoadout(e);
      // 补满弹药
      for (const k of ['primary', 'secondary']) {
        if (e.inv[k]) { const w = W[e.inv[k].key]; e.inv[k].ammo = w.mag; e.inv[k].reserve = w.reserve; }
      }
      if (e.brain) e.brain.resetRound();
      if (e.isPlayer && autoBrain) autoBrain.resetRound();
      if (e.model) {
        e.model.deathT = -1;
        e.model.update(e, 0);
        e.model.setVisible(true);
      }
    }
    c4Holder.hasC4 = true;
    if (c4Holder.isPlayer) announceSub('你携带了 C4 炸弹,前往 A 或 B 包点安放!');
    // 机器人购买
    for (const e of entities) if (!e.isPlayer) botBuy(e);
    if (autopilot) botBuy(player);
    // 玩家武器显示
    player.slot = 'x';
    switchSlot(player, bestSlot(player));
    setPhase('freeze');
    roundTimer = ROUND_TIME;
    AudioSys.roundStart();
    announce(`第 ${roundNum} 回合`, '#ffd34d');
    if (player.team === 'T') announceSub(c4Holder.isPlayer ? '' : '掩护队友安放炸弹,或歼灭所有 CT');
    else announceSub('守住包点,阻止恐怖分子安放炸弹');
    updateHud();
    updateScoreboard();
  }

  let killedLastRound = new Set();

  function endRound(winTeam, reason) {
    if (phase === 'roundend' || phase === 'matchend') return;
    setPhase('roundend');
    score[winTeam]++;
    // 经济
    const loser = winTeam === 'CT' ? 'T' : 'CT';
    let winAmt = WIN_ELIM;
    if (reason === 'bomb') winAmt = WIN_BOMB;
    else if (reason === 'defuse') winAmt = WIN_DEFUSE;
    else if (reason === 'time') winAmt = WIN_TIME;
    teamMoney(winTeam, winAmt);
    lossStreak[winTeam] = 0;
    const lb = LOSS_BONUS[Math.min(lossStreak[loser], LOSS_BONUS.length - 1)];
    teamMoney(loser, lb);
    lossStreak[loser]++;
    // 记录死亡者
    killedLastRound = new Set(entities.filter(e => !e.alive).map(e => e.id));
    // 播报
    const reasonText = {
      elim: winTeam === 'CT' ? '恐怖分子已被歼灭' : '反恐精英已被歼灭',
      bomb: '炸弹已爆炸',
      defuse: '炸弹已被拆除',
      time: '回合时间结束',
    }[reason];
    const winText = winTeam === 'CT' ? '反恐精英获胜' : '恐怖分子获胜';
    const playerWon = player.team === winTeam;
    announce(winText, playerWon ? '#7fd47f' : '#ff7043');
    announceSub(reasonText);
    if (playerWon) AudioSys.roundWin(); else AudioSys.roundLose();
    updateHud();
    updateScoreboard();
  }

  function afterRoundEnd() {
    // 胜负判定
    if (score.CT >= winsNeeded() || score.T >= winsNeeded() || roundNum >= settings.maxRounds) {
      matchEnd();
      return;
    }
    // 半场换边
    if (!halftimeDone && roundNum === settings.maxRounds / 2) {
      halftimeDone = true;
      swapSides();
      announce('半场换边!', '#ffd34d');
    }
    startRound();
  }

  function swapSides() {
    const tmp = score.CT; score.CT = score.T; score.T = tmp;
    lossStreak.CT = 0; lossStreak.T = 0;
    for (const e of entities) {
      e.team = e.team === 'CT' ? 'T' : 'CT';
      e.money = START_MONEY;
      resetLoadout(e);
      if (e.model) {
        // 重建模型换队服
        const had = e.nameTag;
        e.model.dispose();
        e.model = new CharacterModel(scene, e.team);
        if (e.team === player.team && !e.isPlayer) {
          const tag = makeNameSprite(e.name, '#7fd47f');
          tag.position.y = 2.1;
          e.model.root.add(tag);
          e.nameTag = tag;
        }
      }
    }
    killedLastRound.clear();
    updateTeamUI();
  }

  function matchEnd() {
    setPhase('matchend');
    matchOver = true;
    const us = score[player.team], them = score[player.team === 'CT' ? 'T' : 'CT'];
    AudioSys.matchWin();
    showEndScreen(us > them ? 'win' : us === them ? 'draw' : 'lose');
  }

  function checkRoundWin() {
    if (phase !== 'live' && phase !== 'planted') return;
    const ctAlive = entities.some(e => e.team === 'CT' && e.alive);
    const tAlive = entities.some(e => e.team === 'T' && e.alive);
    if (!ctAlive && !tAlive) { endRound('CT', 'elim'); return; }
    if (!ctAlive) { endRound('T', 'elim'); return; }
    if (!tAlive) {
      // T 全灭但炸弹已安放则继续(包炸赢)
      if (!bomb.planted) endRound('CT', 'elim');
    }
  }

  /* ---------------- 闪光/手雷回调 ---------------- */
  function onGrenadeDetonate(type, pos, owner) {
    if (type === 'he') {
      for (const e of entities) {
        if (!e.alive) continue;
        const d = e.pos.distanceTo(pos) ;
        if (d > 13) continue;
        const eyeP = entityEye(e);
        const blocked = !Physics.segmentClear(new V(pos.x, pos.y + 0.2, pos.z), eyeP);
        let dmg = Math.max(0, 1 - d / 13) * 98;
        if (blocked) dmg *= 0.3;
        if (e.armor > 0) dmg *= 0.6;
        dmg = Math.round(dmg);
        if (dmg <= 0) continue;
        if (e.team === owner.team && e !== owner) continue; // 无友伤
        if (e.isPlayer && e._god) continue;
        e.hp -= dmg;
        if (e.isPlayer) { AudioSys.hurt(); damageVignette(pos); }
        if (e.brain) e.brain.onDamaged(owner);
        if (e.hp <= 0) kill(owner, e, W.he, false);
      }
      Effects.addShake(0.3);
    } else if (type === 'flash') {
      for (const e of entities) {
        if (!e.alive) continue;
        const eyeP = entityEye(e);
        const gp = new V(pos.x, pos.y + 0.1, pos.z);
        const d = eyeP.distanceTo(gp);
        if (d > 28) continue;
        if (!Physics.segmentClear(gp, eyeP)) continue;
        // 朝向因子
        const fwd = entityFwd(e);
        const toG = gp.clone().sub(eyeP).normalize();
        const facing = Math.max(0, fwd.dot(toG));
        const amount = (0.3 + facing * 0.7) * Math.max(0.25, 1 - d / 28);
        const dur = 3.5 * amount;
        e.flashEnd = Math.max(e.flashEnd, time + dur);
        if (e.isPlayer) {
          flashWhiteout(dur);
          AudioSys.flashRing(amount);
        }
      }
    }
    // 烟雾在 Effects 内部处理
  }

  /* ---------------- 移动 ---------------- */
  function applyMovement(e, dt) {
    if (!e.alive) return;
    const ws = curWeaponState(e);
    const wSpeed = (ws.def.speed || 250) / 250;
    let maxSpd = 4.6 * wSpeed;
    if (e.crouch) maxSpd *= 0.45;
    else if (e.walkSlow) maxSpd *= 0.52;
    if (e.planting || e.defusing) maxSpd = 0;
    if (phase === 'freeze') maxSpd = 0;

    // 蹲起平滑
    const targetH = (e.crouchWish || e.crouch) && (e.crouchWish) ? e.heightCrouch : e.heightStand;
    e.crouch = e.crouchWish;
    e.curHeight += (targetH - e.curHeight) * Math.min(1, dt * 10);

    // 期望速度(局部 → 世界)
    let wx = e.wishX, wz = e.wishZ;
    const wl = Math.hypot(wx, wz);
    if (wl > 1) { wx /= wl; wz /= wl; }
    const sin = Math.sin(e.yaw), cos = Math.cos(e.yaw);
    const fwdX = -sin, fwdZ = -cos;
    const rightX = cos, rightZ = -sin;
    const wantX = (fwdX * wz + rightX * wx) * maxSpd;
    const wantZ = (fwdZ * wz + rightZ * wx) * maxSpd;
    const accel = e.onGround ? 12 : 2.2;
    e.vel.x += (wantX - e.vel.x) * Math.min(1, dt * accel);
    e.vel.z += (wantZ - e.vel.z) * Math.min(1, dt * accel);

    if (e.wantJump && e.onGround && phase !== 'freeze') {
      e.vel.y = 6.2;
      e.onGround = false;
    }
    e.wantJump = false;

    Physics.moveEntity(e, dt);

    // 脚步声
    const spd = Math.hypot(e.vel.x, e.vel.z);
    if (e.onGround && spd > 2.2 && !e.walkSlow && !e.crouch) {
      e.footAcc += spd * dt;
      if (e.footAcc > 2.6) {
        e.footAcc = 0;
        AudioSys.footstep(e.isPlayer ? null : e.pos, spd > 3.6);
        // 机器人听脚步
        if (!e.walkSlow) for (const o of entities) {
          if (o.brain && o.alive && o.team !== e.team && o.pos.distanceTo(e.pos) < 12) o.brain.onHeardShot(e.pos, e);
        }
      }
    }
  }

  /* ---------------- 玩家输入处理 ---------------- */
  function handlePlayerInput(dt) {
    const e = player;
    if (autopilot) {
      if (e.alive && autoBrain) {
        autoBrain.update(dt);
        // 自动驾驶下的下包/拆包
        if (e.planting) { autoBrain.doPlant ? null : null; }
      }
      return;
    }
    if (!e.alive) {
      // 观战切换
      if (Input.consumeFirePressed()) spectateIdx++;
      return;
    }
    const buyOpen = dom.buymenu.style.display === 'flex';
    const k = Input.keys;
    const { dx, dy } = Input.consumeMouse();
    const sensScale = e.scoped ? (e.scopeLevel === 2 ? 0.12 : 0.3) : 1;
    e.yaw -= dx * 0.0022 * sensScale;
    e.pitch -= dy * 0.0022 * sensScale;
    e.pitch = Math.max(-1.45, Math.min(1.45, e.pitch));
    viewMouse.dx = dx; viewMouse.dy = dy;

    e.wishX = (k.KeyD ? 1 : 0) - (k.KeyA ? 1 : 0);
    e.wishZ = (k.KeyW ? 1 : 0) - (k.KeyS ? 1 : 0);
    e.walkSlow = !!k.ShiftLeft;
    e.crouchWish = !!k.ControlLeft;
    if (k.Space) { e.wantJump = true; }

    // 按键事件(购买菜单打开时数字键归菜单)
    const presses = Input.consumePressed();
    if (buyOpen) { Input.consumeFirePressed(); Input.consumeRmbPressed(); return; }
    for (const code of presses) {
      switch (code) {
        case 'Digit1': switchSlot(e, 'primary'); break;
        case 'Digit2': switchSlot(e, 'secondary'); break;
        case 'Digit3': switchSlot(e, 'knife'); break;
        case 'Digit4': {
          // 循环投掷物
          const order = ['he', 'flash', 'smoke'];
          let cur = e.slot.startsWith('nade_') ? order.indexOf(e.slot.slice(5)) : -1;
          for (let i = 1; i <= 3; i++) {
            const nk = order[(cur + i) % 3];
            if ((e.inv.grenades[nk] || 0) > 0) { switchSlot(e, 'nade_' + nk); break; }
          }
          break;
        }
        case 'Digit5': switchSlot(e, 'c4'); break;
        case 'KeyR': startReload(e); break;
        case 'KeyB': toggleBuyMenu(); break;
        case 'KeyG': dropCurrentWeapon(e); break;
        case 'WheelUp': case 'WheelDown': {
          const slots = ['primary', 'secondary', 'knife'];
          const avail = slots.filter(s => s === 'knife' || e.inv[s]);
          let idx = avail.indexOf(e.slot);
          if (idx < 0) idx = 0;
          idx = (idx + (code === 'WheelDown' ? 1 : avail.length - 1)) % avail.length;
          switchSlot(e, avail[idx]);
          break;
        }
      }
    }

    // 开火
    const ws = curWeaponState(e);
    if (ws.def.auto ? Input.fireHeld : Input.consumeFirePressed()) {
      tryFire(e);
    }
    if (!Input.fireHeld && time - e.lastFireT > 0.3) e.sprayIdx = 0;

    // 右键:AWP 开镜 / 刀重击
    if (Input.consumeRmbPressed()) {
      if (ws.def.scope) {
        if (!e.scoped) { e.scoped = true; e.scopeLevel = 1; }
        else if (e.scopeLevel === 1) e.scopeLevel = 2;
        else { e.scoped = false; e.scopeLevel = 0; }
        AudioSys.uiClick();
      } else if (ws.def.type === 'knife') {
        if (time >= e.nextFire) {
          e.nextFire = time + 1.0;
          AudioSys.knifeSwing(null);
          viewModel.kick(2.2);
          meleeAttack(e, W.knife.dmg2);
        }
      }
    }

    // E 键交互(下包/拆包)
    const useHeld = !!k.KeyE;
    handleUseKey(e, useHeld, dt);
  }
  const viewMouse = { dx: 0, dy: 0 };

  function dropCurrentWeapon(e) {
    if (e.slot === 'primary' && e.inv.primary) {
      dropItem(e.inv.primary.key, e.inv.primary.ammo, e.inv.primary.reserve, e.pos);
      e.inv.primary = null;
      switchSlot(e, 'secondary');
    } else if (e.slot === 'secondary' && e.inv.secondary && e.inv.secondary.key !== defaultPistol(e.team)) {
      e.inv.secondary = { key: defaultPistol(e.team), ammo: W[defaultPistol(e.team)].mag, reserve: W[defaultPistol(e.team)].reserve };
      updateHud();
    }
  }

  function handleUseKey(e, held, dt) {
    // 下包
    if (e.team === 'T' && e.hasC4 && (phase === 'live')) {
      const inSite = MapSys.inRect(e.pos.x, e.pos.z, MapSys.sites.A) || MapSys.inRect(e.pos.x, e.pos.z, MapSys.sites.B);
      if (inSite && e.onGround) {
        showTip(held ? '' : '按住 E 安放炸弹');
        if (held) {
          e.planting = true;
          e.plantT += dt;
          showProgress('正在安放炸弹...', e.plantT / PLANT_TIME);
          if (Math.floor(e.plantT * 5) !== Math.floor((e.plantT - dt) * 5)) AudioSys.defuseTick(null);
          if (e.plantT >= PLANT_TIME) {
            e.planting = false; e.plantT = 0;
            hideProgress();
            plantBomb(e);
          }
          return;
        }
      }
      if (!held || !inSite) { e.planting = false; e.plantT = 0; hideProgress(); }
      if (!inSite) hideTipIf('按住 E 安放炸弹');
      return;
    }
    // 拆包
    if (e.team === 'CT' && bomb.planted && phase === 'planted') {
      const d = Math.hypot(e.pos.x - bomb.pos.x, e.pos.z - bomb.pos.z);
      if (d < 1.6) {
        showTip(held ? '' : (e.defuseKit ? '按住 E 拆除炸弹 (有拆弹器)' : '按住 E 拆除炸弹'));
        if (held) {
          e.defusing = true;
          e.defuseT += dt;
          const need = e.defuseKit ? 5 : 10;
          showProgress('正在拆除炸弹...', e.defuseT / need);
          if (Math.floor(e.defuseT * 4) !== Math.floor((e.defuseT - dt) * 4)) AudioSys.defuseTick(null);
          if (e.defuseT >= need) {
            e.defusing = false; e.defuseT = 0;
            hideProgress();
            defuseBomb(e);
          }
          return;
        }
      }
      if (!held || d >= 1.6) { e.defusing = false; e.defuseT = 0; hideProgress(); hideTipIf('按住 E 拆除炸弹'); }
      return;
    }
    e.planting = false; e.defusing = false;
  }

  /* ---------------- 相机 ---------------- */
  function updateCamera(dt) {
    let target = player;
    if (!player.alive) {
      const mates = entities.filter(o => o.alive && o.team === player.team);
      if (mates.length > 0) {
        target = mates[spectateIdx % mates.length];
        dom.spectate.style.display = 'block';
        dom.spectate.textContent = `正在观战: ${target.name}  (点击切换)`;
      } else {
        // 全灭:固定俯瞰
        dom.spectate.style.display = 'block';
        dom.spectate.textContent = '等待回合结束...';
        camera.position.set(0, 55, 10);
        camera.rotation.set(-1.35, 0, 0);
        return;
      }
    } else {
      dom.spectate.style.display = 'none';
    }
    const eyeY = target.pos.y + (target.crouch ? 1.06 : 1.62);
    camera.position.set(target.pos.x, eyeY, target.pos.z);
    // 震屏
    const shake = Effects.getShake();
    let punch = target.isPlayer ? target.viewPunch : 0;
    camera.rotation.set(
      target.pitch + punch + (Math.random() - .5) * shake * 0.1,
      target.yaw + (Math.random() - .5) * shake * 0.1,
      (Math.random() - .5) * shake * 0.05,
      'YXZ'
    );
    // FOV(开镜)
    let fov = settings.fov;
    if (target.isPlayer && target.scoped) fov = target.scopeLevel === 2 ? 9 : 26;
    if (camera.fov !== fov) { camera.fov = fov; camera.updateProjectionMatrix(); }
    dom.scope.style.display = (target.isPlayer && target.scoped) ? 'block' : 'none';
    // viewPunch 回落
    player.viewPunch = Math.max(0, player.viewPunch - dt * 0.35);
  }

  /* ---------------- 主更新 ---------------- */
  function update(dt) {
    time += dt;
    phaseT += dt;

    if (phase === 'menu' || phase === 'matchend') return;

    // 阶段推进
    if (phase === 'freeze') {
      if (phaseT >= FREEZE_TIME) {
        setPhase('live');
        announce('开始行动!', '#ffd34d');
      }
    } else if (phase === 'live') {
      roundTimer -= dt;
      if (roundTimer <= 0) {
        // 时间到:CT 胜
        endRound('CT', 'time');
      }
    } else if (phase === 'planted') {
      bomb.timer -= dt;
      bomb.beepT -= dt;
      const beepInterval = bomb.timer > 20 ? 1.0 : bomb.timer > 10 ? 0.5 : bomb.timer > 5 ? 0.25 : 0.13;
      if (bomb.beepT <= 0) {
        bomb.beepT = beepInterval;
        AudioSys.bombBeep(bomb.pos);
        bomb.blinkOn = !bomb.blinkOn;
        Effects.c4Blink(bomb.blinkOn);
      }
      if (bomb.timer <= 0) explodeBomb();
    } else if (phase === 'roundend') {
      if (phaseT >= ROUNDEND_TIME) afterRoundEnd();
    }

    if (phase === 'menu' || phase === 'matchend') return;

    // 玩家
    handlePlayerInput(dt);

    // 机器人
    for (const e of entities) {
      if (e.brain && e.alive && (phase === 'live' || phase === 'planted' || phase === 'roundend')) {
        e.brain.update(dt);
        // 机器人 AWP 开镜状态
        e.scoped = !!e.scopedWish; e.scopedWish = false;
      }
    }

    // 换弹计时
    for (const e of entities) {
      if (e.reloading) {
        e.reloadT -= dt;
        if (e.reloadT <= 0) finishReload(e);
      }
    }

    // 移动
    for (const e of entities) applyMovement(e, dt);

    // 拾取
    updatePickups();

    // 手雷
    Effects.updateGrenades(dt, onGrenadeDetonate);

    // 模型
    for (const e of entities) {
      if (e.model) {
        e.model.update(e, dt);
        if (e.nameTag) e.nameTag.visible = e.alive;
      }
    }

    // 闪光过期
    // (视觉淡出由 CSS 过渡处理)

    // HUD 高频更新
    updateHudFast();
  }

  /* ---------------- HUD ---------------- */
  function fmtTime(s) {
    s = Math.max(0, Math.ceil(s));
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  }
  function updateHudFast() {
    // 计时
    if (phase === 'freeze') dom.timer.textContent = fmtTime(FREEZE_TIME - phaseT);
    else if (phase === 'live') dom.timer.textContent = fmtTime(roundTimer);
    else if (phase === 'planted') { dom.timer.textContent = '💣'; }
    else dom.timer.textContent = '0:00';
    dom.timer.style.color = (phase === 'planted') ? '#ff5544' : (phase === 'live' && roundTimer < 15 ? '#ff9944' : '#fff');
    // 血量
    dom.hp.textContent = Math.max(0, Math.ceil(player.hp));
    dom.armor.textContent = Math.ceil(player.armor);
    dom.hpbar.style.width = Math.max(0, player.hp) + '%';
    dom.hpbar.style.background = player.hp > 50 ? '#7fd47f' : player.hp > 25 ? '#ffb144' : '#ff5544';
    // 弹药
    const ws = curWeaponState(player);
    if (ws.def.mag && ws.ref) {
      dom.ammo.textContent = ws.ref.ammo;
      dom.ammoReserve.textContent = '/ ' + ws.ref.reserve;
    } else if (ws.def.type === 'grenade') {
      dom.ammo.textContent = player.inv.grenades[ws.key] || 0;
      dom.ammoReserve.textContent = '';
    } else {
      dom.ammo.textContent = '—';
      dom.ammoReserve.textContent = '';
    }
    dom.weaponName.textContent = ws.def.cnName || ws.def.name;
    dom.money.textContent = '$ ' + player.money;
    // C4 指示
    dom.c4ind.style.display = player.hasC4 ? 'block' : 'none';
    // 准星扩散
    const spread = Weapons.computeSpread(player, ws.def, player.scoped);
    const gap = 4 + spread * 6 + (time - player.lastFireT < 0.12 ? 7 : 0);
    document.documentElement.style.setProperty('--ch-gap', gap + 'px');
    dom.crosshair.style.display = (player.alive && !player.scoped) ? 'block' : 'none';
    // 雷达
    drawRadar();
    // 购买提示
    dom.buyHint.style.display = (canBuy(player) && dom.buymenu.style.display !== 'flex') ? 'block' : 'none';
  }

  function updateHud() {
    dom.scoreCT.textContent = score.CT;
    dom.scoreT.textContent = score.T;
    dom.roundInfo.textContent = `回合 ${roundNum}/${settings.maxRounds}`;
    updateBuyMoney();
  }

  function updateTeamUI() {
    dom.teamLabel.textContent = player.team === 'CT' ? '反恐精英 (CT)' : '恐怖分子 (T)';
    dom.teamLabel.style.color = player.team === 'CT' ? '#7fb3ff' : '#ffce54';
    buildBuyMenu();
  }

  /* ---- 击杀提示 ---- */
  function addKillfeed(att, vic, w, hs) {
    const div = document.createElement('div');
    div.className = 'kf-entry';
    const wname = w.cnName || w.name;
    div.innerHTML = `<span class="${att.team === 'CT' ? 'kf-ct' : 'kf-t'}">${att.name}</span>` +
      ` <span class="kf-w">[${wname}${hs ? ' · 爆头' : ''}]</span> ` +
      `<span class="${vic.team === 'CT' ? 'kf-ct' : 'kf-t'}">${vic.name}</span>`;
    if (att.isPlayer || vic.isPlayer) div.style.background = 'rgba(160,40,40,0.55)';
    dom.killfeed.appendChild(div);
    while (dom.killfeed.children.length > 5) dom.killfeed.removeChild(dom.killfeed.firstChild);
    setTimeout(() => { if (div.parentNode) div.parentNode.removeChild(div); }, 6000);
  }
  function addKillfeedText(text) {
    const div = document.createElement('div');
    div.className = 'kf-entry';
    div.textContent = text;
    dom.killfeed.appendChild(div);
    while (dom.killfeed.children.length > 5) dom.killfeed.removeChild(dom.killfeed.firstChild);
    setTimeout(() => { if (div.parentNode) div.parentNode.removeChild(div); }, 6000);
  }

  /* ---- 中央播报 ---- */
  let announceTimeout = null, subTimeout = null;
  function announce(text, color) {
    dom.announce.textContent = text;
    dom.announce.style.color = color || '#fff';
    dom.announce.style.opacity = 1;
    clearTimeout(announceTimeout);
    announceTimeout = setTimeout(() => { dom.announce.style.opacity = 0; }, 2600);
  }
  function announceSub(text) {
    if (!text) return;
    dom.subannounce.textContent = text;
    dom.subannounce.style.opacity = 1;
    clearTimeout(subTimeout);
    subTimeout = setTimeout(() => { dom.subannounce.style.opacity = 0; }, 3200);
  }

  /* ---- 命中/受伤反馈 ---- */
  let hitmarkerT = null;
  function showHitmarker(head) {
    dom.hitmarker.style.opacity = 1;
    dom.hitmarker.style.borderColor = head ? '#ff4444' : '#ffffff';
    clearTimeout(hitmarkerT);
    hitmarkerT = setTimeout(() => dom.hitmarker.style.opacity = 0, 90);
  }
  let vignetteT = null;
  function damageVignette(fromPos) {
    dom.vignette.style.opacity = 0.85;
    clearTimeout(vignetteT);
    vignetteT = setTimeout(() => dom.vignette.style.opacity = 0, 350);
  }
  function flashWhiteout(dur) {
    dom.flash.style.transition = 'none';
    dom.flash.style.opacity = 1;
    requestAnimationFrame(() => {
      dom.flash.style.transition = `opacity ${dur}s ease-in`;
      dom.flash.style.opacity = 0;
    });
  }

  /* ---- 进度条/提示 ---- */
  function showProgress(label, frac) {
    dom.progressWrap.style.display = 'block';
    dom.progressLabel.textContent = label;
    dom.progressBar.style.width = Math.min(100, frac * 100) + '%';
  }
  function hideProgress() { dom.progressWrap.style.display = 'none'; }
  function showTip(text) { if (text) { dom.tip.textContent = text; dom.tip.style.display = 'block'; } else dom.tip.style.display = 'none'; }
  function hideTipIf(text) { if (dom.tip.textContent.startsWith(text.slice(0, 4))) dom.tip.style.display = 'none'; }

  /* ---- 雷达 ---- */
  let radarCtx = null;
  function drawRadar() {
    const cv = dom.radar;
    if (!radarCtx) radarCtx = cv.getContext('2d');
    const g = radarCtx;
    const S = cv.width;
    g.clearRect(0, 0, S, S);
    g.save();
    g.beginPath(); g.arc(S / 2, S / 2, S / 2 - 2, 0, Math.PI * 2); g.clip();
    g.fillStyle = 'rgba(10,16,12,0.78)';
    g.fillRect(0, 0, S, S);
    const scale = 2.0; // px per meter
    const cx = player.alive ? player.pos.x : 0, cz = player.alive ? player.pos.z : 0;
    const yaw = player.yaw;
    g.translate(S / 2, S / 2);
    g.rotate(yaw); // 地图随视角旋转,玩家前方朝上
    // 墙
    g.fillStyle = 'rgba(150,160,150,0.5)';
    for (const wRect of MapSys.radarWalls) {
      g.fillRect((wRect.x - cx) * scale, (wRect.z - cz) * scale, wRect.w * scale, wRect.d * scale);
    }
    // 包点
    g.fillStyle = 'rgba(230,170,40,0.8)';
    g.font = 'bold 13px Arial';
    g.textAlign = 'center';
    for (const key of ['A', 'B']) {
      const s = MapSys.sites[key];
      g.fillText(key, (s.cx - cx) * scale, (s.cz - cz) * scale + 5);
    }
    // 炸弹
    if (bomb.planted || entities.some(e => e.alive && e.hasC4)) {
      let bp = bomb.planted ? bomb.pos : entities.find(e => e.alive && e.hasC4).pos;
      g.fillStyle = '#ff5544';
      g.beginPath(); g.arc((bp.x - cx) * scale, (bp.z - cz) * scale, 4, 0, 7); g.fill();
    }
    // 实体
    for (const e of entities) {
      if (!e.alive || e.isPlayer) continue;
      const isMate = e.team === player.team;
      let visible = isMate;
      if (!isMate) {
        // 被任意队友看到 2 秒内显示
        visible = (e.spottedUntil || 0) > time;
      }
      if (!visible) continue;
      g.fillStyle = isMate ? '#7fd47f' : '#ff5544';
      const ex = (e.pos.x - cx) * scale, ez = (e.pos.z - cz) * scale;
      g.beginPath(); g.arc(ex, ez, 3.5, 0, 7); g.fill();
    }
    g.restore();
    // 玩家箭头(中心,固定朝上 — 地图随视角旋转)
    g.save();
    g.translate(S / 2, S / 2);
    g.fillStyle = '#ffffff';
    g.beginPath();
    g.moveTo(0, -6); g.lineTo(4.5, 5); g.lineTo(-4.5, 5);
    g.closePath(); g.fill();
    g.restore();
  }

  // 索敌标记(雷达)
  function updateSpotting() {
    for (const e of entities) {
      if (!e.alive || e.team === player.team) continue;
      for (const mate of entities) {
        if (!mate.alive || mate.team !== player.team) continue;
        const d = mate.pos.distanceTo(e.pos);
        if (d < 50 && canSee(mate, e)) { e.spottedUntil = time + 2; break; }
      }
    }
  }

  /* ---- 购买菜单 ---- */
  const BUY_ITEMS = [
    { cat: '手枪', items: [['deagle', 'Desert Eagle', 700]] },
    { cat: '微型冲锋枪', items: [['mp5', 'MP5-SD', 1500]] },
    {
      cat: '步枪', items: [
        ['ak47', 'AK-47 (仅T)', 2700],
        ['m4', 'M4A4 (仅CT)', 3100],
        ['awp', 'AWP', 4750],
      ]
    },
    {
      cat: '装备', items: [
        ['kevlar', '防弹衣', 650],
        ['kevlarHelmet', '防弹衣 + 头盔', 1000],
        ['defuser', '拆弹器 (仅CT)', 400],
      ]
    },
    {
      cat: '投掷物', items: [
        ['he', '高爆手雷', 300],
        ['flash', '闪光弹', 200],
        ['smoke', '烟雾弹', 300],
      ]
    },
  ];
  function buildBuyMenu() {
    const root = dom.buyItems;
    root.innerHTML = '';
    let idx = 1;
    for (const cat of BUY_ITEMS) {
      const h = document.createElement('div');
      h.className = 'buy-cat';
      h.textContent = cat.cat;
      root.appendChild(h);
      for (const [key, label, price] of cat.items) {
        const w = W[key];
        const div = document.createElement('div');
        div.className = 'buy-item';
        const disabled = (w && w.team && w.team !== player.team) ||
          (key === 'defuser' && player.team !== 'CT');
        if (disabled) div.classList.add('disabled');
        div.innerHTML = `<span class="buy-key">${idx}</span> <span class="buy-name">${label}</span><span class="buy-price">$${price}</span>`;
        const k = key;
        div.addEventListener('click', () => { AudioSys.init(); if (buy(player, k)) updateBuyMoney(); });
        div.dataset.idx = idx;
        div.dataset.key = key;
        root.appendChild(div);
        idx++;
      }
    }
  }
  function toggleBuyMenu() {
    const show = dom.buymenu.style.display !== 'flex';
    if (show && !canBuy(player)) { announceSub('现在无法购买(需在出生点购买区且处于购买时间)'); return; }
    if (show) {
      dom.buymenu.style.display = 'flex';
      if (!autopilot) Input.unlock();
    } else closeBuyMenu();
    updateBuyMoney();
  }
  function closeBuyMenu() {
    dom.buymenu.style.display = 'none';
    if (phase !== 'menu' && phase !== 'matchend' && !autopilot) Input.lock(renderer.domElement);
  }
  function updateBuyMoney() {
    if (dom.buyMoney) dom.buyMoney.textContent = '$ ' + player.money;
  }
  function buyMenuKey(code) {
    if (dom.buymenu.style.display !== 'flex') return false;
    if (code === 'Escape' || code === 'KeyB') { closeBuyMenu(); return true; }
    const m = code.match(/^Digit(\d)$/) || (code === 'Digit0' ? ['', '10'] : null);
    if (m) {
      const idx = m[1] === '0' ? 10 : parseInt(m[1]);
      const el = dom.buyItems.querySelector(`[data-idx="${idx}"]`);
      if (el) { buy(player, el.dataset.key); updateBuyMoney(); }
      return true;
    }
    return false;
  }

  /* ---- 记分板 ---- */
  function updateScoreboard() {
    const mk = (team) => {
      const rows = entities.filter(e => e.team === team)
        .sort((a, b) => b.kills - a.kills)
        .map(e => `<tr class="${e.alive ? '' : 'sb-dead'} ${e.isPlayer ? 'sb-me' : ''}">
          <td>${e.name}${e.isPlayer ? ' (你)' : ''}</td><td>${e.kills}</td><td>${e.deaths}</td><td>$${e.money}</td></tr>`).join('');
      return rows;
    };
    dom.sbCT.innerHTML = mk('CT');
    dom.sbT.innerHTML = mk('T');
    dom.sbScore.textContent = `CT ${score.CT} : ${score.T} T`;
  }

  /* ---- 结算 ---- */
  function showEndScreen(result) {
    dom.endTitle.textContent = result === 'win' ? '胜 利' : result === 'draw' ? '平 局' : '失 败';
    dom.endTitle.style.color = result === 'win' ? '#7fd47f' : result === 'draw' ? '#ffd34d' : '#ff5544';
    dom.endScore.textContent = `${score.CT} : ${score.T}`;
    const mvp = entities.slice().sort((a, b) => b.kills - a.kills)[0];
    dom.endStats.innerHTML =
      `<div>你的战绩: <b>${player.kills}</b> 击杀 / <b>${player.deaths}</b> 死亡</div>` +
      `<div>全场最佳: <b>${mvp.name}</b> (${mvp.kills} 击杀)</div>`;
    dom.endscreen.style.display = 'flex';
    Input.unlock();
  }

  /* ---------------- 初始化 ---------------- */
  function setupScene() {
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xd8cfae, 70, 260);
    camera = new THREE.PerspectiveCamera(settings.fov, innerWidth / innerHeight, 0.05, 500);
    camera.rotation.order = 'YXZ';
    scene.add(camera);
    renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(Math.min(1.5, devicePixelRatio));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;
    $('game-container').appendChild(renderer.domElement);

    // 光照
    const hemi = new THREE.HemisphereLight(0xbfd4e8, 0x8a7a55, 0.55);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xfff1d6, 0.95);
    sun.position.set(60, 90, 30);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -75; sun.shadow.camera.right = 75;
    sun.shadow.camera.top = 75; sun.shadow.camera.bottom = -75;
    sun.shadow.camera.far = 250;
    sun.shadow.bias = -0.0006;
    scene.add(sun);
    const amb = new THREE.AmbientLight(0x8a8474, 0.25);
    scene.add(amb);

    MapSys.build(scene);
    Effects.init(scene, camera);
    viewModel = new Weapons.ViewModel(camera);

    addEventListener('resize', () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    });
  }

  function setupEntities() {
    player = createEntity('Garry', 'CT', true);
    entities.push(player);
    for (let i = 0; i < 4; i++) entities.push(createEntity(CT_NAMES[i], 'CT', false));
    for (let i = 0; i < 5; i++) entities.push(createEntity(T_NAMES[i], 'T', false));
  }

  function cacheDom() {
    dom = {
      timer: $('timer'), scoreCT: $('score-ct'), scoreT: $('score-t'), roundInfo: $('round-info'),
      hp: $('hp-num'), armor: $('armor-num'), hpbar: $('hp-bar-fill'),
      ammo: $('ammo-num'), ammoReserve: $('ammo-reserve'), weaponName: $('weapon-name'),
      money: $('money'), c4ind: $('c4-indicator'),
      crosshair: $('crosshair'), hitmarker: $('hitmarker'),
      killfeed: $('killfeed'),
      announce: $('announce'), subannounce: $('subannounce'),
      vignette: $('dmg-vignette'), flash: $('flash-overlay'), scope: $('scope-overlay'),
      progressWrap: $('progress-wrap'), progressBar: $('progress-bar'), progressLabel: $('progress-label'),
      tip: $('interact-tip'), spectate: $('spectate-info'),
      radar: $('radar'),
      buymenu: $('buymenu'), buyItems: $('buy-items'), buyMoney: $('buy-money'), buyHint: $('buy-hint'),
      scoreboard: $('scoreboard'), sbCT: $('sb-ct'), sbT: $('sb-t'), sbScore: $('sb-score'),
      menu: $('menu'), endscreen: $('endscreen'),
      endTitle: $('end-title'), endScore: $('end-score'), endStats: $('end-stats'),
      teamLabel: $('team-label'),
      pausemenu: $('pausemenu'),
    };
  }

  function setupMenu() {
    $('btn-start-ct').addEventListener('click', () => beginMatch('CT'));
    $('btn-start-t').addEventListener('click', () => beginMatch('T'));
    $('btn-help').addEventListener('click', () => {
      $('help-panel').style.display = $('help-panel').style.display === 'block' ? 'none' : 'block';
      $('settings-panel').style.display = 'none';
    });
    $('btn-settings').addEventListener('click', () => {
      $('settings-panel').style.display = $('settings-panel').style.display === 'block' ? 'none' : 'block';
      $('help-panel').style.display = 'none';
    });
    $('set-difficulty').addEventListener('change', e => settings.difficulty = e.target.value);
    $('set-rounds').addEventListener('change', e => { settings.maxRounds = parseInt(e.target.value); });
    $('set-sens').addEventListener('input', e => { Input.sensitivity = parseFloat(e.target.value); $('sens-val').textContent = e.target.value; });
    $('set-vol').addEventListener('input', e => { settings.volume = parseFloat(e.target.value); AudioSys.setVolume(settings.volume); $('vol-val').textContent = e.target.value; });
    $('btn-restart').addEventListener('click', () => {
      dom.endscreen.style.display = 'none';
      dom.menu.style.display = 'flex';
      setPhase('menu');
    });
    $('btn-resume').addEventListener('click', () => {
      dom.pausemenu.style.display = 'none';
      Input.lock(renderer.domElement);
    });
    $('btn-quit').addEventListener('click', () => {
      dom.pausemenu.style.display = 'none';
      dom.menu.style.display = 'flex';
      setPhase('menu');
    });
    // 点击画布锁定鼠标
    renderer.domElement.addEventListener('click', () => {
      if (phase !== 'menu' && phase !== 'matchend' && !autopilot) {
        AudioSys.init();
        Input.lock(renderer.domElement);
      }
    });
  }

  function beginMatch(team) {
    AudioSys.init();
    AudioSys.setVolume(settings.volume);
    dom.menu.style.display = 'none';
    // 设定玩家阵营
    if (player.team !== team) {
      // 互换:把玩家与一个对面机器人互换阵营
      const swapBot = entities.find(e => !e.isPlayer && e.team === team);
      if (swapBot) {
        swapBot.team = player.team;
        swapBot.model.dispose();
        swapBot.model = new CharacterModel(scene, swapBot.team);
      }
      player.team = team;
    }
    // 重建队友名牌
    for (const e of entities) {
      if (e.isPlayer || !e.model) continue;
      if (e.nameTag) { e.model.root.remove(e.nameTag); e.nameTag = null; }
      if (e.team === player.team) {
        const tag = makeNameSprite(e.name, '#7fd47f');
        tag.position.y = 2.1;
        e.model.root.add(tag);
        e.nameTag = tag;
      }
    }
    updateTeamUI();
    startMatch();
    if (!autopilot) Input.lock(renderer.domElement);
  }

  /* ---------------- 主循环 ---------------- */
  const STEP = 1 / 60;
  let acc = 0, lastT = 0;
  let spotT = 0;
  function frame(tms) {
    requestAnimationFrame(frame);
    const now = tms / 1000;
    let dt = Math.min(0.3, now - lastT || 0.016);
    lastT = now;
    dt *= timeScale;
    acc += dt;
    let n = 0;
    const maxSub = timeScale > 1 ? 90 : 30;
    while (acc >= STEP && n < maxSub) {
      update(STEP);
      acc -= STEP; n++;
    }
    if (n >= maxSub) acc = 0;

    if (phase !== 'menu') {
      spotT -= dt;
      if (spotT <= 0) { spotT = 0.3; updateSpotting(); }
      updateCamera(dt);
      const spd = player.alive ? Math.hypot(player.vel.x, player.vel.z) : 0;
      viewModel.update(dt, viewMouse.dx, viewMouse.dy, spd, player.onGround, player.scoped || !player.alive);
      viewMouse.dx = 0; viewMouse.dy = 0;
      Effects.update(dt);
      AudioSys.updateListener(camera.position, entityFwd(player.alive ? player : player));
      // 第一人称隐藏自己模型(玩家无第三人称模型,无需处理)
    }
    renderer.render(scene, camera);
  }

  /* ---------------- 全局键(Tab/Esc/B 菜单) ---------------- */
  function setupGlobalKeys() {
    document.addEventListener('keydown', e => {
      if (phase === 'menu' || phase === 'matchend') return;
      if (e.code === 'Tab') {
        e.preventDefault();
        updateScoreboard();
        dom.scoreboard.style.display = 'flex';
      }
      if (buyMenuKey(e.code)) { e.preventDefault(); return; }
    });
    document.addEventListener('keyup', e => {
      if (e.code === 'Tab') dom.scoreboard.style.display = 'none';
    });
    // Esc 由 pointerlockchange 处理
  }

  function onLockChange(locked) {
    if (!locked && phase !== 'menu' && phase !== 'matchend' && !autopilot) {
      if (dom.buymenu.style.display === 'flex') return; // 购买菜单使用鼠标
      dom.pausemenu.style.display = 'flex';
    } else if (locked) {
      dom.pausemenu.style.display = 'none';
    }
  }

  /* ---------------- 启动 ---------------- */
  function init() {
    cacheDom();
    setupScene();
    setupEntities();
    Input.init(renderer.domElement, onLockChange);
    setupMenu();
    setupGlobalKeys();
    buildBuyMenu();
    updateTeamUI();
    requestAnimationFrame(t => { lastT = t / 1000; requestAnimationFrame(frame); });
  }

  /* ---------------- 对外 API(机器人/测试用) ---------------- */
  const api = {
    get entities() { return entities; },
    get bomb() { return bomb; },
    get phase() { return phase; },
    get time() { return time; },
    get settings() { return settings; },
    get score() { return score; },
    get roundNum() { return roundNum; },
    get player() { return player; },
    canSee, tryFire, curWeaponState, startReload, plantBomb, defuseBomb,
    buy, switchSlot,
  };

  /* ---------------- 测试钩子 ---------------- */
  function installTestApi() {
    window.__TEST = {
      api,
      getState() {
        return {
          phase, roundNum, time: Math.round(time * 10) / 10,
          score: { ...score },
          bomb: { planted: bomb.planted, timer: Math.round(bomb.timer * 10) / 10 },
          player: {
            alive: player.alive, hp: player.hp, money: player.money, team: player.team,
            pos: { x: Math.round(player.pos.x * 10) / 10, y: Math.round(player.pos.y * 100) / 100, z: Math.round(player.pos.z * 10) / 10 },
            slot: player.slot, hasC4: player.hasC4,
            kills: player.kills, deaths: player.deaths,
            primary: player.inv.primary ? player.inv.primary.key : null,
            secondaryAmmo: player.inv.secondary ? player.inv.secondary.ammo : 0,
            armor: player.armor,
            grenades: { ...player.inv.grenades },
          },
          aliveCT: entities.filter(e => e.team === 'CT' && e.alive).length,
          aliveT: entities.filter(e => e.team === 'T' && e.alive).length,
          matchOver,
        };
      },
      begin(team) { beginMatch(team || 'CT'); },
      setTimeScale(s) { timeScale = s; },
      setAutopilot(on, skill) {
        autopilot = on;
        if (on && !autoBrain) autoBrain = new BotBrain(player, api);
        if (on && skill) autoBrain.skillOverride = skill;
        if (on) player.brain = null;
      },
      setRounds(n) { settings.maxRounds = n; },
      setDifficulty(d) { settings.difficulty = d; },
      teleport(x, z) { player.pos.set(x, 0, z); player.vel.set(0, 0, 0); },
      lookAt(x, y, z) {
        const eye = entityEye(player);
        const dx = x - eye.x, dz = z - eye.z, dy = y - eye.y;
        player.yaw = Math.atan2(-dx, -dz);
        player.pitch = Math.atan2(dy, Math.hypot(dx, dz));
      },
      fire() { return tryFire(player); },
      pressKey(slot) { switchSlot(player, slot); },
      buyItem(k) { return buy(player, k); },
      giveMoney(amt) { giveMoney(player, amt); },
      giveC4() {
        for (const e of entities) e.hasC4 = false;
        if (player.team === 'T') player.hasC4 = true;
      },
      killEnemies(leave) {
        const enemies = entities.filter(e => e.team !== player.team && e.alive);
        for (let i = 0; i < enemies.length - (leave || 0); i++) {
          enemies[i].hp = 1;
          applyDamage(player, enemies[i], W.ak47, 'body', 1);
        }
      },
      god(on) { player._god = on; },
      skipPhase() { phaseT = 1e6; if (phase === 'live') roundTimer = 0.01; if (phase === 'planted') bomb.timer = 0.01; },
      throwNade(type) {
        player.inv.grenades[type] = (player.inv.grenades[type] || 0) + 1;
        switchSlot(player, 'nade_' + type);
        player.nextFire = 0;
        return tryFire(player);
      },
      plantHere() {
        if (player.hasC4) { plantBomb(player); return true; }
        return false;
      },
      defuseNow() { if (bomb.planted) { defuseBomb(player); return true; } return false; },
      endRoundForce(team, reason) { endRound(team, reason || 'elim'); },
      getEntities() {
        return entities.map(e => ({
          name: e.name, team: e.team, alive: e.alive, hp: e.hp,
          pos: { x: Math.round(e.pos.x), z: Math.round(e.pos.z) },
          weapon: curWeaponState(e).key, money: e.money, kills: e.kills,
        }));
      },
    };
  }

  // god mode 钩子:包装 applyDamage 前检查
  const _applyDamage = applyDamage;
  applyDamage = function (att, vic, w, region, dist) {
    if (vic.isPlayer && vic._god) return;
    _applyDamage(att, vic, w, region, dist);
  };

  return {
    init: () => { init(); installTestApi(); },
    get settings() { return settings; },
  };
})();

window.addEventListener('DOMContentLoaded', () => Game.init());
