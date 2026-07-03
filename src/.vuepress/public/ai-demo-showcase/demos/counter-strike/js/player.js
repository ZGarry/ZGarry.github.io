/* ============================================================
 * player.js — 输入控制 + 人形角色模型(第三人称)
 * ============================================================ */
'use strict';

/* ---------------- 输入 ---------------- */
const Input = (() => {
  const keys = {};
  let mouseDX = 0, mouseDY = 0;
  let locked = false;
  let fireHeld = false, firePressed = false;
  let rmbHeld = false, rmbPressed = false;
  let sensitivity = 1.0;
  const pressQueue = [];

  function init(el, onLockChange) {
    document.addEventListener('keydown', e => {
      if (e.repeat) return;
      keys[e.code] = true;
      pressQueue.push(e.code);
      if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space', 'Tab', 'KeyB', 'KeyR', 'KeyE'].includes(e.code)) e.preventDefault();
    });
    document.addEventListener('keyup', e => { keys[e.code] = false; });
    document.addEventListener('mousemove', e => {
      if (!locked) return;
      mouseDX += e.movementX * sensitivity;
      mouseDY += e.movementY * sensitivity;
    });
    document.addEventListener('mousedown', e => {
      if (!locked) return;
      if (e.button === 0) { fireHeld = true; firePressed = true; }
      if (e.button === 2) { rmbHeld = true; rmbPressed = true; }
    });
    document.addEventListener('mouseup', e => {
      if (e.button === 0) fireHeld = false;
      if (e.button === 2) rmbHeld = false;
    });
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('pointerlockchange', () => {
      locked = document.pointerLockElement === el;
      onLockChange && onLockChange(locked);
    });
    document.addEventListener('wheel', e => {
      if (!locked) return;
      pressQueue.push(e.deltaY > 0 ? 'WheelDown' : 'WheelUp');
    }, { passive: true });
  }

  function lock(el) {
    if (document.pointerLockElement === el) return;
    try { const p = el.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch (e) { }
  }
  function unlock() { try { document.exitPointerLock(); } catch (e) { } }

  function consumeMouse() { const r = { dx: mouseDX, dy: mouseDY }; mouseDX = 0; mouseDY = 0; return r; }
  function consumePressed() { const q = pressQueue.slice(); pressQueue.length = 0; return q; }
  function consumeFirePressed() { const r = firePressed; firePressed = false; return r; }
  function consumeRmbPressed() { const r = rmbPressed; rmbPressed = false; return r; }

  return {
    keys, init, lock, unlock, consumeMouse, consumePressed, consumeFirePressed, consumeRmbPressed,
    get locked() { return locked; },
    get fireHeld() { return fireHeld; },
    get rmbHeld() { return rmbHeld; },
    set sensitivity(v) { sensitivity = v; },
    get sensitivity() { return sensitivity; },
  };
})();

/* ---------------- 角色模型 ---------------- */
class CharacterModel {
  constructor(scene, team) {
    this.scene = scene;
    this.team = team;
    this.root = new THREE.Group();
    const mat = (c) => new THREE.MeshLambertMaterial({ color: c });
    const isCT = team === 'CT';
    const cloth = mat(isCT ? 0x3b4a63 : 0x8a7a4d);
    const clothDark = mat(isCT ? 0x2a3548 : 0x6b5d39);
    const skin = mat(0xc9a37e);
    const vest = mat(isCT ? 0x222c3d : 0x4a4031);

    const mk = (w, h, d, m, x, y, z) => {
      const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
      b.position.set(x, y, z);
      b.castShadow = true;
      return b;
    };

    // 腿(髋部为支点)
    this.legL = new THREE.Group(); this.legL.position.set(-0.11, 0.85, 0);
    this.legL.add(mk(0.16, 0.85, 0.18, clothDark, 0, -0.425, 0));
    this.legR = new THREE.Group(); this.legR.position.set(0.11, 0.85, 0);
    this.legR.add(mk(0.16, 0.85, 0.18, clothDark, 0, -0.425, 0));
    // 躯干
    this.torso = new THREE.Group(); this.torso.position.set(0, 0.85, 0);
    this.torso.add(mk(0.44, 0.6, 0.26, cloth, 0, 0.3, 0));
    this.torso.add(mk(0.36, 0.4, 0.3, vest, 0, 0.32, 0)); // 防弹背心
    // 头
    this.head = new THREE.Group(); this.head.position.set(0, 0.62, 0);
    this.head.add(mk(0.24, 0.26, 0.24, skin, 0, 0.13, 0));
    if (isCT) {
      this.head.add(mk(0.27, 0.12, 0.27, mat(0x1f2733), 0, 0.24, 0)); // 头盔
      this.head.add(mk(0.25, 0.06, 0.02, mat(0x111111), 0, 0.12, -0.12)); // 护目镜
    } else {
      this.head.add(mk(0.25, 0.1, 0.25, mat(0x2e2519), 0, 0.25, 0)); // 头发/帽
      this.head.add(mk(0.25, 0.08, 0.02, mat(0x443322), 0, 0.08, -0.12)); // 面巾
    }
    this.torso.add(this.head);
    // 手臂(肩部支点)
    this.armL = new THREE.Group(); this.armL.position.set(-0.27, 0.52, 0);
    this.armL.add(mk(0.12, 0.55, 0.14, cloth, 0, -0.25, 0));
    this.armL.add(mk(0.11, 0.12, 0.13, skin, 0, -0.56, 0));
    this.armR = new THREE.Group(); this.armR.position.set(0.27, 0.52, 0);
    this.armR.add(mk(0.12, 0.55, 0.14, cloth, 0, -0.25, 0));
    this.armR.add(mk(0.11, 0.12, 0.13, skin, 0, -0.56, 0));
    this.torso.add(this.armL); this.torso.add(this.armR);
    // 持枪
    this.gunHolder = new THREE.Group();
    this.gunHolder.position.set(0.12, 0.35, -0.35);
    this.torso.add(this.gunHolder);
    this.gunMesh = null;

    this.root.add(this.legL, this.legR, this.torso);
    scene.add(this.root);

    this.walkT = 0;
    this.deathT = -1;
    this.deathYaw = 0;
    this.aimArms(true);
  }

  aimArms(aim) {
    // 双手举枪姿态
    this.armR.rotation.x = -1.35;
    this.armR.rotation.z = -0.15;
    this.armL.rotation.x = -1.2;
    this.armL.rotation.z = 0.55;
  }

  setWeapon(key) {
    if (this.gunMesh) this.gunHolder.remove(this.gunMesh);
    this.gunMesh = key ? Weapons.buildModel(key) : null;
    if (this.gunMesh) {
      this.gunMesh.scale.setScalar(0.95);
      this.gunHolder.add(this.gunMesh);
    }
  }

  update(ent, dt) {
    const r = this.root;
    if (!ent.alive) {
      // 倒地动画
      if (this.deathT < 0) { this.deathT = 0; this.deathYaw = ent.yaw + (Math.random() - .5); }
      this.deathT = Math.min(1, this.deathT + dt * 3.5);
      const t = this.deathT;
      r.position.set(ent.pos.x, ent.pos.y + 0.1 * (1 - t), ent.pos.z);
      r.rotation.y = this.deathYaw;
      r.rotation.x = -Math.PI / 2 * t;
      return;
    }
    this.deathT = -1;
    r.rotation.x = 0;
    r.position.copy(ent.pos);
    r.rotation.y = ent.yaw + Math.PI; // 模型 -Z 面朝前
    // 蹲
    const crouchK = ent.crouch ? 0.72 : 1;
    r.scale.y = crouchK;
    // 走路摆动
    const spd = Math.sqrt(ent.vel.x ** 2 + ent.vel.z ** 2);
    if (spd > 0.4 && ent.onGround) this.walkT += dt * spd * 2.2;
    else this.walkT *= 0.8;
    const sw = Math.sin(this.walkT) * Math.min(0.6, spd * 0.14);
    this.legL.rotation.x = sw;
    this.legR.rotation.x = -sw;
    // 上身俯仰跟随
    this.torso.rotation.x = -ent.pitch * 0.4;
  }

  setVisible(v) { this.root.visible = v; }
  dispose() { this.scene.remove(this.root); }
}

/* ---------------- 名牌 ---------------- */
function makeNameSprite(name, color) {
  const cv = document.createElement('canvas');
  cv.width = 256; cv.height = 64;
  const g = cv.getContext('2d');
  g.font = 'bold 34px Arial';
  g.textAlign = 'center';
  g.fillStyle = color;
  g.strokeStyle = 'rgba(0,0,0,0.8)';
  g.lineWidth = 5;
  g.strokeText(name, 128, 42);
  g.fillText(name, 128, 42);
  const tex = new THREE.CanvasTexture(cv);
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
  const sp = new THREE.Sprite(mat);
  sp.scale.set(1.6, 0.4, 1);
  return sp;
}
