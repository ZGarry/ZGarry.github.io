/* ============================================================
 * weapons.js — 武器数据、弹道、过程化枪模、视角模型动画
 * ============================================================ */
'use strict';

const Weapons = (() => {

  /* ---------------- 武器数据(贴近 CS 数值) ---------------- */
  const WEAPONS = {
    knife: {
      key: 'knife', name: '军刀', cnName: '军刀', type: 'knife', slot: 2,
      dmg: 40, dmg2: 65, range: 2.2, rpm: 120, rpm2: 60,
      speed: 250, price: 0,
    },
    glock: {
      key: 'glock', name: 'Glock-18', type: 'pistol', slot: 1,
      dmg: 28, mag: 20, reserve: 120, rpm: 400, reloadTime: 2.2,
      speed: 240, price: 200, rangeMod: 0.84, baseSpread: 0.45, moveSpread: 2.2,
      kick: 1.1, recoilV: 1.2, recoilH: 0.4, auto: false, team: 'T',
    },
    usp: {
      key: 'usp', name: 'USP-S', type: 'pistol', slot: 1,
      dmg: 35, mag: 12, reserve: 24, rpm: 352, reloadTime: 2.2,
      speed: 240, price: 200, rangeMod: 0.86, baseSpread: 0.35, moveSpread: 2.0,
      kick: 1.2, recoilV: 1.3, recoilH: 0.4, auto: false, silenced: true, team: 'CT',
    },
    deagle: {
      key: 'deagle', name: 'Desert Eagle', cnName: '沙漠之鹰', type: 'pistol', slot: 1,
      dmg: 53, mag: 7, reserve: 35, rpm: 267, reloadTime: 2.2,
      speed: 230, price: 700, rangeMod: 0.91, baseSpread: 0.55, moveSpread: 3.5,
      kick: 2.6, recoilV: 3.2, recoilH: 0.9, auto: false,
    },
    mp5: {
      key: 'mp5', name: 'MP5-SD', type: 'smg', slot: 0,
      dmg: 27, mag: 30, reserve: 120, rpm: 750, reloadTime: 2.6,
      speed: 235, price: 1500, rangeMod: 0.80, baseSpread: 0.55, moveSpread: 1.4,
      kick: 0.65, recoilV: 0.7, recoilH: 0.5, auto: true, silenced: true,
    },
    ak47: {
      key: 'ak47', name: 'AK-47', type: 'rifle', slot: 0,
      dmg: 36, mag: 30, reserve: 90, rpm: 600, reloadTime: 2.5,
      speed: 215, price: 2700, rangeMod: 0.92, baseSpread: 0.35, moveSpread: 3.6,
      kick: 1.1, recoilV: 1.55, recoilH: 0.85, auto: true, team: 'T',
    },
    m4: {
      key: 'm4', name: 'M4A4', type: 'rifle', slot: 0,
      dmg: 33, mag: 30, reserve: 90, rpm: 666, reloadTime: 3.1,
      speed: 225, price: 3100, rangeMod: 0.94, baseSpread: 0.32, moveSpread: 3.2,
      kick: 0.95, recoilV: 1.3, recoilH: 0.7, auto: true, team: 'CT',
    },
    awp: {
      key: 'awp', name: 'AWP', type: 'sniper', slot: 0,
      dmg: 115, mag: 5, reserve: 30, rpm: 41, reloadTime: 3.7,
      speed: 200, price: 4750, rangeMod: 0.99, baseSpread: 5.0, scopedSpread: 0.04, moveSpread: 8.0,
      kick: 4.0, recoilV: 5.0, recoilH: 0.4, auto: false, scope: true, boltTime: 1.2,
    },
    he: { key: 'he', name: '高爆手雷', type: 'grenade', slot: 3, price: 300, max: 1, speed: 245 },
    flash: { key: 'flash', name: '闪光弹', type: 'grenade', slot: 3, price: 200, max: 2, speed: 245 },
    smoke: { key: 'smoke', name: '烟雾弹', type: 'grenade', slot: 3, price: 300, max: 1, speed: 245 },
    c4: { key: 'c4', name: 'C4 炸弹', type: 'c4', slot: 4, speed: 250 },
  };

  /* ---------------- 弹道后坐力模式 ---------------- */
  const patterns = {};
  function genPattern(key, seed, vScale, hScale) {
    const arr = [];
    let x = 0, y = 0;
    let rng = seed;
    const rand = () => { rng = (rng * 9301 + 49297) % 233280; return rng / 233280; };
    for (let i = 0; i < 35; i++) {
      const climb = i < 4 ? 0.55 : i < 9 ? 1.0 : 0.35;
      y += vScale * climb * (0.85 + rand() * 0.3);
      if (i >= 8) x += Math.sin(i * 0.55 + seed) * hScale * (0.7 + rand() * 0.6);
      else x += (rand() - 0.5) * hScale * 0.35;
      arr.push({ x, y });
    }
    return arr;
  }
  patterns.ak47 = genPattern('ak47', 7, 0.32, 0.30);
  patterns.m4 = genPattern('m4', 13, 0.26, 0.22);
  patterns.mp5 = genPattern('mp5', 5, 0.15, 0.14);
  patterns.glock = genPattern('glock', 3, 0.25, 0.1);
  patterns.usp = genPattern('usp', 4, 0.28, 0.1);
  patterns.deagle = genPattern('deagle', 9, 0.8, 0.25);
  patterns.awp = genPattern('awp', 11, 1.2, 0.1);

  function patternOffset(wkey, idx) {
    const p = patterns[wkey];
    if (!p) return { x: 0, y: 0 };
    return p[Math.min(idx, p.length - 1)];
  }

  /* ---------------- 扩散计算(度) ---------------- */
  function computeSpread(ent, w, scoped) {
    if (w.type === 'knife' || w.type === 'grenade') return 0;
    let s = w.baseSpread;
    if (w.scope) s = scoped ? w.scopedSpread : w.baseSpread;
    const speed = Math.sqrt(ent.vel.x * ent.vel.x + ent.vel.z * ent.vel.z);
    const maxSpd = (w.speed / 250) * 5.0;
    s += (speed / Math.max(0.1, maxSpd)) * w.moveSpread * 0.45;
    if (!ent.onGround) s += 3.2;
    if (ent.crouch) s *= 0.65;
    return s;
  }

  /* ---------------- 过程化枪模 ---------------- */
  const M = (c, opts) => new THREE.MeshLambertMaterial(Object.assign({ color: c }, opts || {}));
  const COL = {
    gunmetal: 0x2c2c30, dark: 0x1b1b1e, wood: 0x7a4a23, woodDark: 0x5d3517,
    green: 0x4e5b3c, silver: 0xb8babd, grip: 0x252528, blade: 0xc9ced4,
  };
  function box(w, h, d, c, x, y, z, ry, rz) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), M(c));
    m.position.set(x || 0, y || 0, z || 0);
    if (ry) m.rotation.y = ry;
    if (rz) m.rotation.z = rz;
    return m;
  }
  function cyl(r, len, c, x, y, z, axis) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 10), M(c));
    m.position.set(x || 0, y || 0, z || 0);
    if (axis === 'z') m.rotation.x = Math.PI / 2;
    if (axis === 'x') m.rotation.z = Math.PI / 2;
    return m;
  }

  // 所有模型:+Z 朝后(持枪者方向),-Z 朝前(枪口)
  function buildModel(key) {
    const g = new THREE.Group();
    switch (key) {
      case 'ak47': {
        g.add(box(0.055, 0.07, 0.5, COL.gunmetal, 0, 0, 0.02));            // 机匣
        g.add(box(0.05, 0.055, 0.22, COL.wood, 0, -0.005, -0.3));          // 木护木
        g.add(cyl(0.012, 0.3, COL.dark, 0, 0.005, -0.5, 'z'));             // 枪管
        g.add(box(0.012, 0.03, 0.02, COL.dark, 0, 0.035, -0.62));          // 准星
        const mag = box(0.035, 0.18, 0.07, COL.gunmetal, 0, -0.1, -0.04);
        mag.rotation.x = 0.45; g.add(mag);                                  // 弯弹匣
        g.add(box(0.045, 0.085, 0.2, COL.woodDark, 0, -0.015, 0.32));      // 木枪托
        g.add(box(0.03, 0.09, 0.05, COL.grip, 0, -0.07, 0.12, 0, 0));      // 握把
        break;
      }
      case 'm4': {
        g.add(box(0.055, 0.075, 0.46, COL.dark, 0, 0, 0));
        g.add(box(0.05, 0.05, 0.2, COL.gunmetal, 0, 0, -0.32));
        g.add(cyl(0.011, 0.26, COL.dark, 0, 0.005, -0.52, 'z'));
        g.add(box(0.018, 0.035, 0.1, COL.dark, 0, 0.055, 0.0));            // 提把/瞄具
        g.add(box(0.032, 0.16, 0.06, COL.gunmetal, 0, -0.1, -0.02));       // 直弹匣
        g.add(box(0.04, 0.06, 0.18, COL.dark, 0, 0.0, 0.3));               // 枪托
        g.add(box(0.03, 0.085, 0.05, COL.grip, 0, -0.07, 0.12));
        break;
      }
      case 'awp': {
        g.add(box(0.055, 0.08, 0.5, COL.green, 0, 0, 0.04));
        g.add(cyl(0.013, 0.46, COL.dark, 0, 0.01, -0.5, 'z'));
        g.add(cyl(0.032, 0.2, COL.dark, 0, 0.075, -0.05, 'z'));            // 瞄准镜
        g.add(cyl(0.036, 0.02, COL.dark, 0, 0.075, -0.16, 'z'));
        g.add(box(0.035, 0.12, 0.06, COL.green, 0, -0.09, 0.0));
        g.add(box(0.045, 0.075, 0.22, COL.green, 0, -0.01, 0.34));
        g.add(box(0.018, 0.018, 0.05, COL.silver, 0.04, 0.03, 0.1));       // 拉栓
        break;
      }
      case 'mp5': {
        g.add(box(0.05, 0.07, 0.34, COL.dark, 0, 0, -0.02));
        g.add(cyl(0.018, 0.2, COL.dark, 0, 0.005, -0.3, 'z'));             // 消音管
        const mag = box(0.03, 0.15, 0.055, COL.gunmetal, 0, -0.09, -0.05);
        mag.rotation.x = 0.25; g.add(mag);
        g.add(box(0.035, 0.05, 0.12, COL.dark, 0, 0.0, 0.2));
        g.add(box(0.028, 0.08, 0.045, COL.grip, 0, -0.06, 0.08));
        break;
      }
      case 'deagle': {
        g.add(box(0.045, 0.05, 0.26, COL.silver, 0, 0.02, -0.04));
        g.add(box(0.04, 0.04, 0.24, COL.gunmetal, 0, -0.012, -0.03));
        g.add(box(0.035, 0.1, 0.05, COL.grip, 0, -0.07, 0.06, 0, -0.18));
        break;
      }
      case 'usp': {
        g.add(box(0.04, 0.045, 0.2, COL.gunmetal, 0, 0.02, -0.0));
        g.add(cyl(0.016, 0.12, COL.dark, 0, 0.02, -0.16, 'z'));            // 消音器
        g.add(box(0.033, 0.095, 0.05, COL.grip, 0, -0.05, 0.05, 0, -0.15));
        break;
      }
      case 'glock': {
        g.add(box(0.04, 0.045, 0.2, COL.dark, 0, 0.02, -0.02));
        g.add(box(0.033, 0.095, 0.05, COL.grip, 0, -0.05, 0.05, 0, -0.15));
        break;
      }
      case 'knife': {
        const blade = box(0.012, 0.045, 0.22, COL.blade, 0, 0.01, -0.16);
        blade.rotation.x = -0.06;
        g.add(blade);
        g.add(box(0.025, 0.055, 0.02, COL.dark, 0, 0, -0.04));             // 护手
        g.add(box(0.028, 0.04, 0.11, 0x3a2c20, 0, -0.005, 0.04));          // 柄
        break;
      }
      case 'he': { g.add(new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), M(0x3a4a30))); break; }
      case 'flash': { g.add(cyl(0.045, 0.13, 0x8b9398, 0, 0, 0)); break; }
      case 'smoke': { g.add(cyl(0.05, 0.16, 0x4d6448, 0, 0, 0)); break; }
      case 'c4': {
        g.add(box(0.22, 0.08, 0.15, 0xb5a06a, 0, 0, 0));
        const scr = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.02, 0.06), new THREE.MeshBasicMaterial({ color: 0x33ff55 }));
        scr.position.set(0, 0.05, 0); g.add(scr);
        break;
      }
    }
    g.traverse(o => { if (o.isMesh) { o.castShadow = true; } });
    return g;
  }

  /* ---------------- 视角模型(第一人称) ---------------- */
  class ViewModel {
    constructor(camera) {
      this.camera = camera;
      this.root = new THREE.Group();
      camera.add(this.root);
      this.root.position.set(0.32, -0.32, -0.55);
      this.current = null;
      this.curKey = null;
      this.bobT = 0;
      this.swayX = 0; this.swayY = 0;
      this.kickZ = 0; this.kickRot = 0;
      this.lower = 1;          // 1=完全收起 0=就位
      this.targetKey = null;
      this.reloading = 0;      // 剩余换弹时间
      this.reloadTotal = 1;
      this.bolting = 0;
      // 手臂
      this.armMat = new THREE.MeshLambertMaterial({ color: 0xc9a37e });
      this.sleeveMat = new THREE.MeshLambertMaterial({ color: 0x3d4a36 });
    }
    setWeapon(key) {
      if (key === this.curKey) return;
      this.targetKey = key;
    }
    forceWeapon(key) {
      if (this.current) this.root.remove(this.current);
      this.current = key ? buildModel(key) : null;
      if (this.current) {
        // 手臂(简化:一截袖子+手)
        const hand = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.08), this.armMat);
        hand.position.set(0, -0.06, 0.05);
        const sleeve = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 0.22), this.sleeveMat);
        sleeve.position.set(0.02, -0.1, 0.22);
        sleeve.rotation.x = 0.5;
        this.current.add(hand); this.current.add(sleeve);
        this.current.traverse(o => { if (o.isMesh) o.castShadow = false; });
        this.root.add(this.current);
      }
      this.curKey = key;
    }
    kick(amount) {
      this.kickZ = Math.min(0.14, this.kickZ + amount * 0.045);
      this.kickRot = Math.min(0.5, this.kickRot + amount * 0.12);
    }
    startReload(dur) { this.reloading = dur; this.reloadTotal = dur; }
    startBolt(dur) { this.bolting = dur; }
    cancelReload() { this.reloading = 0; }
    update(dt, mouseDX, mouseDY, moveSpeed, onGround, scoped) {
      // 切枪
      if (this.targetKey !== null && this.targetKey !== this.curKey) {
        this.lower = Math.min(1, this.lower + dt * 7);
        if (this.lower >= 1) { this.forceWeapon(this.targetKey); this.targetKey = null; }
      } else {
        this.lower = Math.max(0, this.lower - dt * 6);
      }
      // 摆动
      this.swayX += ((-mouseDX * 0.00018) - this.swayX) * Math.min(1, dt * 10);
      this.swayY += ((mouseDY * 0.00018) - this.swayY) * Math.min(1, dt * 10);
      // 走路摆动
      if (onGround && moveSpeed > 0.5) this.bobT += dt * Math.min(10, moveSpeed * 1.9);
      const bobAmt = Math.min(1, moveSpeed / 4.5) * 0.012;
      const bobX = Math.sin(this.bobT) * bobAmt;
      const bobY = -Math.abs(Math.cos(this.bobT)) * bobAmt;
      // 回弹
      this.kickZ = Math.max(0, this.kickZ - dt * 0.6);
      this.kickRot = Math.max(0, this.kickRot - dt * 2.4);
      if (!this.current) return;
      const r = this.root;
      const hidden = scoped; // 开镜时隐藏枪模
      r.visible = !hidden;
      r.position.set(
        0.32 + this.swayX + bobX,
        -0.32 + this.swayY + bobY - this.lower * 0.45,
        -0.55 + this.kickZ
      );
      r.rotation.set(this.kickRot * 0.4 + this.lower * 0.8, this.swayX * 2.4, 0);
      // 换弹动画
      if (this.reloading > 0) {
        this.reloading -= dt;
        const ph = 1 - Math.max(0, this.reloading) / this.reloadTotal; // 0..1
        const dip = Math.sin(Math.min(1, ph) * Math.PI);
        r.rotation.x += dip * 0.9;
        r.position.y -= dip * 0.12;
      }
      // 拉栓动画 (AWP)
      if (this.bolting > 0) {
        this.bolting -= dt;
        const ph = 1 - Math.max(0, this.bolting) / 1.2;
        const dip = Math.sin(Math.min(1, ph) * Math.PI);
        r.rotation.z += dip * 0.12;
        r.position.x += dip * 0.03;
      }
    }
    // 枪口世界坐标
    muzzleWorld(out) {
      out = out || new THREE.Vector3();
      if (!this.current) return out.copy(this.camera.position);
      out.set(0.32, -0.28, -1.15);
      return this.camera.localToWorld(out);
    }
  }

  return { WEAPONS, patternOffset, computeSpread, buildModel, ViewModel };
})();
