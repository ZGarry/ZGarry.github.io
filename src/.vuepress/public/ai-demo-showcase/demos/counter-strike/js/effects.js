/* ============================================================
 * effects.js — 弹道/粒子/弹孔/弹壳/手雷/烟雾/爆炸/C4
 * ============================================================ */
'use strict';

const Effects = (() => {
  let scene = null, camera = null;
  const tracers = [];     // {mesh, life}
  const particles = [];   // {mesh, vel, life, maxLife, grav, fade}
  const decals = [];      // mesh 队列(上限)
  const casings = [];     // {mesh, vel, life, spin}
  const grenades = [];    // 活动手雷 {type, mesh, vel, fuse, owner, rest, light}
  const smokes = [];      // {pos, r, t, maxT, puffs:[]}
  let shake = 0;

  const V = THREE.Vector3;

  /* 材质与几何缓存 */
  let mats = {};
  function init(sc, cam) {
    scene = sc; camera = cam;
    mats.tracer = new THREE.MeshBasicMaterial({ color: 0xffd890, transparent: true, opacity: 0.9 });
    mats.spark = new THREE.MeshBasicMaterial({ color: 0xffcc66, transparent: true });
    mats.dust = new THREE.MeshBasicMaterial({ color: 0xcbb287, transparent: true });
    mats.blood = new THREE.MeshBasicMaterial({ color: 0x991111, transparent: true });
    mats.decal = new THREE.MeshBasicMaterial({ color: 0x222222, transparent: true, opacity: 0.85, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
    mats.casing = new THREE.MeshBasicMaterial({ color: 0xd1a937 });
    mats.smoke = new THREE.MeshLambertMaterial({ color: 0xb9bdb9, transparent: true, opacity: 0.92, depthWrite: false });
    mats.fire = new THREE.MeshBasicMaterial({ color: 0xff8830, transparent: true });
    geo = {
      tracer: new THREE.BoxGeometry(0.025, 0.025, 1),
      particle: new THREE.PlaneGeometry(0.08, 0.08),
      bigParticle: new THREE.PlaneGeometry(0.3, 0.3),
      decal: new THREE.CircleGeometry(0.045, 8),
      casing: new THREE.BoxGeometry(0.02, 0.02, 0.05),
      smoke: new THREE.SphereGeometry(1, 10, 8),
      sphereS: new THREE.SphereGeometry(0.07, 8, 6),
    };
  }
  let geo = {};

  /* ---------- 曳光 ---------- */
  function tracer(from, to) {
    const len = from.distanceTo(to);
    if (len < 1.5) return;
    const m = new THREE.Mesh(geo.tracer, mats.tracer.clone());
    m.position.copy(from).lerp(to, 0.5);
    m.scale.z = len;
    m.lookAt(to);
    scene.add(m);
    tracers.push({ mesh: m, life: 0.06 });
  }

  /* ---------- 通用粒子 ---------- */
  function spawnParticles(pos, baseVel, count, mat, opts) {
    opts = opts || {};
    for (let i = 0; i < count; i++) {
      const m = new THREE.Mesh(opts.big ? geo.bigParticle : geo.particle, mat.clone());
      m.position.copy(pos);
      const v = new V(
        baseVel.x + (Math.random() - .5) * (opts.spread || 3),
        baseVel.y + Math.random() * (opts.up || 2),
        baseVel.z + (Math.random() - .5) * (opts.spread || 3)
      );
      const life = (opts.life || 0.4) * (0.6 + Math.random() * 0.8);
      scene.add(m);
      particles.push({ mesh: m, vel: v, life, maxLife: life, grav: opts.grav !== undefined ? opts.grav : 9, fade: true, scaleRate: opts.scaleRate || 0 });
    }
  }

  function impact(point, normal, isWall) {
    // 火花 + 尘土
    const nv = new V(normal.x, normal.y, normal.z).multiplyScalar(2);
    spawnParticles(point, nv, 4, mats.spark, { spread: 2.5, up: 1.5, life: 0.25 });
    spawnParticles(point, nv.multiplyScalar(0.4), 3, mats.dust, { spread: 1.2, up: 0.8, life: 0.5, grav: 2, big: true, scaleRate: 2 });
    if (isWall) decal(point, normal);
  }

  function blood(point, dir) {
    const v = new V(dir.x, dir.y, dir.z).multiplyScalar(1.2);
    spawnParticles(point, v, 7, mats.blood, { spread: 2.2, up: 1.2, life: 0.45 });
  }

  /* ---------- 弹孔 ---------- */
  function decal(point, normal) {
    const m = new THREE.Mesh(geo.decal, mats.decal);
    m.position.copy(point).addScaledVector(normal, 0.012);
    m.lookAt(point.x + normal.x, point.y + normal.y, point.z + normal.z);
    scene.add(m);
    decals.push(m);
    if (decals.length > 120) { const old = decals.shift(); scene.remove(old); }
  }

  /* ---------- 弹壳 ---------- */
  function casing(pos, rightDir) {
    const m = new THREE.Mesh(geo.casing, mats.casing);
    m.position.copy(pos);
    scene.add(m);
    casings.push({
      mesh: m,
      vel: new V(rightDir.x * (1.5 + Math.random()), 2 + Math.random() * 1.5, rightDir.z * (1.5 + Math.random())),
      life: 4,
      spin: new V(Math.random() * 20, Math.random() * 20, Math.random() * 20),
    });
    if (casings.length > 40) { const old = casings.shift(); scene.remove(old.mesh); }
  }

  /* ---------- 枪口火光 ---------- */
  let flashLight = null, flashT = 0;
  function muzzleFlash(pos, big) {
    if (!flashLight) {
      flashLight = new THREE.PointLight(0xffb155, 0, 14);
      scene.add(flashLight);
    }
    flashLight.position.copy(pos);
    flashLight.intensity = big ? 2.6 : 1.7;
    flashT = 0.05;
  }

  /* ---------- 手雷 ---------- */
  function makeGrenadeMesh(type) {
    let m;
    if (type === 'he') {
      m = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), new THREE.MeshLambertMaterial({ color: 0x3a4a30 }));
    } else if (type === 'flash') {
      m = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.16, 10), new THREE.MeshLambertMaterial({ color: 0x8b9398 }));
    } else {
      m = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.2, 10), new THREE.MeshLambertMaterial({ color: 0x4d6448 }));
      const band = new THREE.Mesh(new THREE.CylinderGeometry(0.072, 0.072, 0.04, 10), new THREE.MeshLambertMaterial({ color: 0xcccccc }));
      m.add(band); band.position.y = 0.06;
    }
    m.castShadow = true;
    return m;
  }

  function throwGrenade(type, from, dir, owner, power) {
    const m = makeGrenadeMesh(type);
    m.position.copy(from);
    scene.add(m);
    const speed = 13 * (power || 1);
    grenades.push({
      type, mesh: m, owner,
      vel: new V(dir.x * speed, dir.y * speed + 2.2, dir.z * speed),
      fuse: type === 'smoke' ? 999 : 1.7,
      restTime: 0,
      pos: m.position,
    });
  }

  function updateGrenades(dt, onDetonate) {
    for (let i = grenades.length - 1; i >= 0; i--) {
      const g = grenades[i];
      g.fuse -= dt;
      // 物理
      g.vel.y -= 14 * dt;
      const o = g.mesh.position.clone();
      const d = g.vel.clone().multiplyScalar(dt);
      const len = d.length();
      if (len > 1e-6) {
        const dir = d.clone().normalize();
        const hit = Physics.rayWorld(o, dir, len + 0.09);
        if (hit && hit.t <= len + 0.09) {
          // 反弹
          const n = hit.normal;
          const dot = g.vel.dot(n);
          g.vel.addScaledVector(n, -1.6 * dot);
          g.vel.multiplyScalar(0.45);
          g.mesh.position.copy(hit.point).addScaledVector(n, 0.1);
          if (g.vel.length() > 1.5) AudioSys.bounce(g.mesh.position);
        } else {
          g.mesh.position.add(d);
        }
      }
      if (g.mesh.position.y < 0.09) { g.mesh.position.y = 0.09; g.vel.y = Math.abs(g.vel.y) * 0.4; g.vel.x *= 0.85; g.vel.z *= 0.85; }
      g.mesh.rotation.x += g.vel.length() * dt * 2;
      // 烟雾:静止后引爆
      if (g.type === 'smoke') {
        if (g.vel.length() < 0.8) g.restTime += dt; else g.restTime = 0;
        if (g.restTime > 0.3 || g.fuse < 996.3) { /* 兜底 3.7s */ }
        if (g.restTime > 0.3 || (999 - g.fuse) > 3.5) {
          detonate(g, onDetonate); grenades.splice(i, 1); continue;
        }
      } else if (g.fuse <= 0) {
        detonate(g, onDetonate); grenades.splice(i, 1); continue;
      }
    }
  }

  function detonate(g, onDetonate) {
    const p = g.mesh.position.clone();
    scene.remove(g.mesh);
    if (g.type === 'he') {
      explosionFX(p, 1);
      AudioSys.explosion(p);
    } else if (g.type === 'flash') {
      flashFX(p);
      AudioSys.flashPop(p);
    } else {
      spawnSmoke(p);
      AudioSys.smokePop(p);
    }
    onDetonate && onDetonate(g.type, p, g.owner);
  }

  /* ---------- 爆炸 ---------- */
  function explosionFX(pos, scale) {
    scale = scale || 1;
    const l = new THREE.PointLight(0xffaa44, 5 * scale, 30 * scale);
    l.position.copy(pos).add(new V(0, 0.5, 0));
    scene.add(l);
    setTimeout(() => scene.remove(l), 180);
    spawnParticles(pos, new V(0, 4, 0), 16, mats.fire, { spread: 8, up: 5, life: 0.45, big: true, grav: 4, scaleRate: 3 });
    spawnParticles(pos, new V(0, 3, 0), 14, mats.dust, { spread: 6, up: 4, life: 1.1, big: true, grav: 1.5, scaleRate: 4 });
    addShake(0.5 * scale / (1 + pos.distanceTo(camera.position) * 0.08));
  }

  /* ---------- 闪光 ---------- */
  function flashFX(pos) {
    const l = new THREE.PointLight(0xffffff, 8, 40);
    l.position.copy(pos);
    scene.add(l);
    setTimeout(() => scene.remove(l), 120);
  }

  /* ---------- 烟雾 ---------- */
  function spawnSmoke(pos) {
    const puffs = [];
    for (let i = 0; i < 13; i++) {
      const m = new THREE.Mesh(geo.smoke, mats.smoke.clone());
      const a = Math.random() * Math.PI * 2, rr = Math.random() * 2.2;
      m.position.set(pos.x + Math.cos(a) * rr, 0.5 + Math.random() * 2.2, pos.z + Math.sin(a) * rr);
      m.scale.setScalar(0.3);
      m.userData.targetScale = 1.6 + Math.random() * 1.4;
      m.userData.rotSpeed = (Math.random() - .5) * 0.4;
      scene.add(m);
      puffs.push(m);
    }
    smokes.push({ pos: pos.clone(), r: 4.2, t: 0, maxT: 16, puffs });
  }

  function smokeBlocks(a, b) {
    // 线段是否穿过烟雾球
    for (const s of smokes) {
      if (s.t < 0.7 || s.t > s.maxT - 1.5) continue;
      const c = new V(s.pos.x, Math.min(Math.max(a.y, 0.4), 2.5), s.pos.z);
      const ab = new V().subVectors(b, a);
      const t = Math.max(0, Math.min(1, new V().subVectors(c, a).dot(ab) / Math.max(1e-6, ab.lengthSq())));
      const closest = new V().copy(a).addScaledVector(ab, t);
      if (closest.distanceTo(c) < s.r * 0.8) return true;
    }
    return false;
  }

  /* ---------- C4 ---------- */
  let c4Mesh = null, c4Light = null;
  function plantC4(pos) {
    removeC4();
    c4Mesh = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.1, 0.2), new THREE.MeshLambertMaterial({ color: 0xb5a06a }));
    const screen = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.02, 0.07), new THREE.MeshBasicMaterial({ color: 0x33ff55 }));
    screen.position.set(0, 0.06, 0);
    c4Mesh.add(body); c4Mesh.add(screen);
    c4Light = new THREE.PointLight(0xff3322, 0, 8);
    c4Light.position.set(0, 0.4, 0);
    c4Mesh.add(c4Light);
    c4Mesh.position.set(pos.x, Math.max(0.06, pos.y + 0.05), pos.z);
    scene.add(c4Mesh);
    return c4Mesh;
  }
  function c4Blink(on) { if (c4Light) c4Light.intensity = on ? 1.5 : 0; }
  function removeC4() { if (c4Mesh) { scene.remove(c4Mesh); c4Mesh = null; c4Light = null; } }

  /* ---------- 震屏 ---------- */
  function addShake(amt) { shake = Math.min(0.6, shake + amt); }
  function getShake() { return shake; }

  /* ---------- 帧更新 ---------- */
  const _camQuat = new THREE.Quaternion();
  function update(dt) {
    // 曳光
    for (let i = tracers.length - 1; i >= 0; i--) {
      const t = tracers[i];
      t.life -= dt;
      t.mesh.material.opacity = Math.max(0, t.life / 0.06) * 0.9;
      if (t.life <= 0) { scene.remove(t.mesh); tracers.splice(i, 1); }
    }
    // 粒子
    camera.getWorldQuaternion(_camQuat);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.life -= dt;
      if (p.life <= 0) { scene.remove(p.mesh); particles.splice(i, 1); continue; }
      p.vel.y -= p.grav * dt;
      p.mesh.position.addScaledVector(p.vel, dt);
      if (p.mesh.position.y < 0.02) { p.mesh.position.y = 0.02; p.vel.y = 0; p.vel.x *= 0.9; p.vel.z *= 0.9; }
      p.mesh.quaternion.copy(_camQuat);
      if (p.fade) p.mesh.material.opacity = Math.max(0, p.life / p.maxLife);
      if (p.scaleRate) { const s = 1 + (p.maxLife - p.life) * p.scaleRate; p.mesh.scale.setScalar(s); }
    }
    // 弹壳
    for (let i = casings.length - 1; i >= 0; i--) {
      const c = casings[i];
      c.life -= dt;
      if (c.life <= 0) { scene.remove(c.mesh); casings.splice(i, 1); continue; }
      c.vel.y -= 12 * dt;
      c.mesh.position.addScaledVector(c.vel, dt);
      if (c.mesh.position.y < 0.02) {
        c.mesh.position.y = 0.02;
        if (Math.abs(c.vel.y) > 0.5) AudioSys.bounce(c.mesh.position);
        c.vel.y = Math.abs(c.vel.y) * 0.3;
        c.vel.x *= 0.7; c.vel.z *= 0.7;
        c.spin.multiplyScalar(0.5);
      }
      c.mesh.rotation.x += c.spin.x * dt;
      c.mesh.rotation.y += c.spin.y * dt;
    }
    // 枪口光
    if (flashT > 0) { flashT -= dt; if (flashT <= 0 && flashLight) flashLight.intensity = 0; }
    // 烟雾
    for (let i = smokes.length - 1; i >= 0; i--) {
      const s = smokes[i];
      s.t += dt;
      const fadeIn = Math.min(1, s.t / 1.2);
      const fadeOut = Math.min(1, Math.max(0, (s.maxT - s.t) / 2.5));
      for (const m of s.puffs) {
        const ts = m.userData.targetScale * fadeIn;
        m.scale.setScalar(Math.max(0.05, ts));
        m.material.opacity = 0.92 * fadeIn * fadeOut;
        m.rotation.y += m.userData.rotSpeed * dt;
      }
      if (s.t >= s.maxT) {
        for (const m of s.puffs) scene.remove(m);
        smokes.splice(i, 1);
      }
    }
    // 震屏衰减
    shake = Math.max(0, shake - dt * 2.2);
  }

  function clearRound() {
    for (const g of grenades) scene.remove(g.mesh);
    grenades.length = 0;
    for (const s of smokes) for (const m of s.puffs) scene.remove(m);
    smokes.length = 0;
    removeC4();
  }

  return {
    init, update, clearRound,
    tracer, impact, blood, decal, casing, muzzleFlash,
    throwGrenade, updateGrenades, smokes, smokeBlocks,
    explosionFX, flashFX,
    plantC4, c4Blink, removeC4,
    addShake, getShake,
  };
})();
