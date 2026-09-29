/* ============================================================
 * map.js — Dust2 风格地图:几何体、程序化纹理、碰撞、A* 导航
 * ============================================================ */
'use strict';

const MapSys = (() => {
  const CELL = 4;            // 每格 4 米
  const HALF = 12;           // 网格中心偏移 (25x25)
  // # 墙  . 地面  C CT出生  T T出生  A A包点  B B包点
  const GRID = [
    "#########################",
    "#BBBBB###CCCCCCC###AAAAA#",
    "#BBBBB...CCCCCCC...AAAAA#",
    "#BBBBB...CCCCCCC...AAAAA#",
    "#BBBBB#####...#####AAAAA#",
    "##..#######...#######..##",
    "##..#######...#######..##",
    "##.....................##",
    "##..#######...#######..##",
    "##..#######...#######..##",
    "##..#######...#######..##",
    "##..#######...#######..##",
    "##..#######...#######..##",
    "##..#######...#######..##",
    "##..#######...#######..##",
    "##..#######...#######..##",
    "##.....................##",
    "##.....................##",
    "#######TTTTTTTTTTT#######",
    "#######TTTTTTTTTTT#######",
    "#######TTTTTTTTTTT#######",
    "#######TTTTTTTTTTT#######",
    "#######TTTTTTTTTTT#######",
    "#######TTTTTTTTTTT#######",
    "#########################",
  ];
  const ROWS = GRID.length, COLS = GRID[0].length;

  function cellToWorld(c, r) { return { x: (c - HALF) * CELL, z: (r - HALF) * CELL }; }
  function worldToCell(x, z) { return { c: Math.round(x / CELL + HALF), r: Math.round(z / CELL + HALF) }; }
  function walkable(c, r) {
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return false;
    return GRID[r][c] !== '#';
  }

  /* ---------------- 程序化纹理 ---------------- */
  function canvasTex(w, h, draw) {
    const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
    draw(cv.getContext('2d'), w, h);
    const t = new THREE.CanvasTexture(cv);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = 4;
    t.encoding = THREE.sRGBEncoding;
    return t;
  }
  function noiseOver(ctx, w, h, n, alpha, dark) {
    for (let i = 0; i < n; i++) {
      const v = Math.random();
      ctx.fillStyle = dark ? `rgba(40,30,15,${alpha * v})` : `rgba(255,250,230,${alpha * v})`;
      ctx.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 3, 1 + Math.random() * 3);
    }
  }

  function makeWallTex() {
    return canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#c8b184'; g.fillRect(0, 0, w, h);
      // 砖块横纹
      g.strokeStyle = 'rgba(120,95,55,0.35)'; g.lineWidth = 2;
      for (let y = 0; y < h; y += 42) {
        g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke();
        for (let x = (y / 42) % 2 ? 32 : 0; x < w; x += 64) {
          g.beginPath(); g.moveTo(x, y); g.lineTo(x, y + 42); g.stroke();
        }
      }
      noiseOver(g, w, h, 900, 0.18, true);
      noiseOver(g, w, h, 400, 0.10, false);
      // 底部污渍
      const gr = g.createLinearGradient(0, h * 0.7, 0, h);
      gr.addColorStop(0, 'rgba(70,55,30,0)'); gr.addColorStop(1, 'rgba(70,55,30,0.45)');
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
    });
  }
  function makeFloorTex() {
    return canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#cdb88c'; g.fillRect(0, 0, w, h);
      noiseOver(g, w, h, 1400, 0.22, true);
      noiseOver(g, w, h, 500, 0.12, false);
      // 石板缝
      g.strokeStyle = 'rgba(110,88,50,0.3)'; g.lineWidth = 2;
      for (let i = 0; i <= 2; i++) {
        g.beginPath(); g.moveTo(i * 128, 0); g.lineTo(i * 128, h); g.stroke();
        g.beginPath(); g.moveTo(0, i * 128); g.lineTo(w, i * 128); g.stroke();
      }
      // 随机裂纹
      g.strokeStyle = 'rgba(90,70,40,0.35)'; g.lineWidth = 1;
      for (let i = 0; i < 6; i++) {
        let x = Math.random() * w, y = Math.random() * h;
        g.beginPath(); g.moveTo(x, y);
        for (let k = 0; k < 5; k++) { x += (Math.random() - .5) * 40; y += (Math.random() - .5) * 40; g.lineTo(x, y); }
        g.stroke();
      }
    });
  }
  function makeCrateTex() {
    return canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#9a7340'; g.fillRect(0, 0, w, h);
      // 木板
      for (let y = 0; y < h; y += 52) {
        g.fillStyle = `rgba(60,40,15,${0.25 + Math.random() * 0.15})`;
        g.fillRect(0, y, w, 4);
        for (let i = 0; i < 30; i++) {
          g.strokeStyle = `rgba(70,48,20,${0.08 + Math.random() * 0.12})`;
          const yy = y + 6 + Math.random() * 42;
          g.beginPath(); g.moveTo(Math.random() * w * .4, yy); g.lineTo(w * .5 + Math.random() * w * .5, yy + (Math.random() - .5) * 4); g.stroke();
        }
      }
      // 边框加固条
      g.fillStyle = 'rgba(50,35,12,0.55)';
      g.fillRect(0, 0, 14, h); g.fillRect(w - 14, 0, 14, h);
      g.fillRect(0, 0, w, 12); g.fillRect(0, h - 12, w, 12);
      // 编号印字
      g.fillStyle = 'rgba(35,25,10,0.7)'; g.font = 'bold 38px monospace'; g.textAlign = 'center';
      g.fillText('CARGO', w / 2, h / 2 + 12);
      noiseOver(g, w, h, 350, 0.12, true);
    });
  }
  function makeMetalTex() {
    return canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#5d6e5d'; g.fillRect(0, 0, w, h);
      noiseOver(g, w, h, 800, 0.15, true);
      g.strokeStyle = 'rgba(30,40,30,0.5)'; g.lineWidth = 3;
      g.strokeRect(8, 8, w - 16, h - 16);
      // 铆钉
      g.fillStyle = 'rgba(220,225,215,0.45)';
      for (const x of [20, w - 20]) for (let y = 20; y < h; y += 36) { g.beginPath(); g.arc(x, y, 4, 0, 7); g.fill(); }
      for (const y of [20, h - 20]) for (let x = 56, ex = w - 36; x < ex; x += 36) { g.beginPath(); g.arc(x, y, 4, 0, 7); g.fill(); }
      g.fillStyle = 'rgba(200,180,60,0.55)'; g.font = 'bold 30px Arial'; g.textAlign = 'center';
      g.fillText('▲', w / 2, h / 2 + 10);
    });
  }
  function makeDoorTex() {
    return canvasTex(128, 256, (g, w, h) => {
      g.fillStyle = '#4a5a66'; g.fillRect(0, 0, w, h);
      for (let x = 0; x < w; x += 16) { g.fillStyle = 'rgba(20,30,38,0.4)'; g.fillRect(x, 0, 2, h); }
      noiseOver(g, w, h, 300, 0.2, true);
      g.fillStyle = 'rgba(160,60,40,0.5)';
      for (let i = 0; i < 8; i++) g.fillRect(Math.random() * w, Math.random() * h, 4 + Math.random() * 14, 3 + Math.random() * 8);
    });
  }
  function makeSiteTex(letter) {
    return canvasTex(256, 256, (g, w, h) => {
      g.clearRect(0, 0, w, h);
      g.strokeStyle = 'rgba(230,170,40,0.85)'; g.lineWidth = 10;
      g.setLineDash([28, 18]);
      g.beginPath(); g.arc(w / 2, h / 2, 105, 0, Math.PI * 2); g.stroke();
      g.setLineDash([]);
      g.fillStyle = 'rgba(230,170,40,0.9)';
      g.font = 'bold 150px Arial Black, Arial'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(letter, w / 2, h / 2 + 8);
    });
  }
  function makeSkyTex() {
    return canvasTex(64, 512, (g, w, h) => {
      const gr = g.createLinearGradient(0, 0, 0, h);
      gr.addColorStop(0.0, '#3f6fae');
      gr.addColorStop(0.35, '#7ba3cf');
      gr.addColorStop(0.62, '#cfd9c9');
      gr.addColorStop(0.75, '#e8dcb2');
      gr.addColorStop(1.0, '#d9c79a');
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
    });
  }

  /* ---------------- 碰撞体 ---------------- */
  const colliders = [];   // {min:{x,y,z}, max:{x,y,z}}
  function addCollider(cx, cz, w, d, h, baseY) {
    baseY = baseY || 0;
    colliders.push({
      min: { x: cx - w / 2, y: baseY, z: cz - d / 2 },
      max: { x: cx + w / 2, y: baseY + h, z: cz + d / 2 },
    });
    return colliders[colliders.length - 1];
  }

  const radarWalls = []; // 2D 矩形供雷达绘制 {x,z,w,d}

  /* ---------------- 道具(箱子等)定义 ---------------- */
  // {x,z,w,d,h,mat:'wood'|'metal', base} —— 轴对齐
  const CRATES = [
    // A 包点 (东北)
    { x: 36, z: -40, w: 3.2, d: 3.2, h: 1.6, mat: 'metal' },
    { x: 30, z: -34, w: 2.4, d: 2.4, h: 1.2, mat: 'wood' },
    { x: 30, z: -34, w: 1.8, d: 1.8, h: 1.0, mat: 'wood', base: 1.2 },
    { x: 41, z: -32, w: 2.4, d: 2.4, h: 1.2, mat: 'wood' },
    { x: 27, z: -42, w: 2.0, d: 2.0, h: 1.1, mat: 'wood' },
    // B 包点 (西北)
    { x: -36, z: -40, w: 3.2, d: 3.2, h: 1.6, mat: 'metal' },
    { x: -30, z: -34, w: 2.4, d: 2.4, h: 1.2, mat: 'wood' },
    { x: -30, z: -34, w: 1.8, d: 1.8, h: 1.0, mat: 'wood', base: 1.2 },
    { x: -41, z: -32, w: 2.4, d: 2.4, h: 1.2, mat: 'wood' },
    { x: -27, z: -42, w: 2.0, d: 2.0, h: 1.1, mat: 'wood' },
    // 中路掩体
    { x: -3.4, z: -2, w: 1.8, d: 1.8, h: 1.2, mat: 'wood' },
    { x: 3.4, z: 8, w: 1.8, d: 1.8, h: 1.2, mat: 'wood' },
    { x: -3.4, z: 22, w: 1.8, d: 1.8, h: 1.2, mat: 'metal' },
    // 十字横廊 (z≈-20)
    { x: 16, z: -19, w: 2.2, d: 2.2, h: 1.3, mat: 'wood' },
    { x: -16, z: -21, w: 2.2, d: 2.2, h: 1.3, mat: 'wood' },
    // A 大 (东侧长廊)
    { x: 41.5, z: 4, w: 2.0, d: 2.0, h: 1.2, mat: 'wood' },
    { x: 34.5, z: -8, w: 2.0, d: 2.0, h: 1.2, mat: 'metal' },
    // B 通 (西侧)
    { x: -41.5, z: 4, w: 2.0, d: 2.0, h: 1.2, mat: 'wood' },
    { x: -34.5, z: -8, w: 2.0, d: 2.0, h: 1.2, mat: 'metal' },
    // T 出生
    { x: -14, z: 36, w: 2.4, d: 2.4, h: 1.3, mat: 'wood' },
    { x: 14, z: 40, w: 2.4, d: 2.4, h: 1.3, mat: 'wood' },
    { x: 0, z: 44, w: 3.0, d: 1.6, h: 1.2, mat: 'metal' },
    // T 横廊 (z≈30 出口附近)
    { x: 24, z: 26, w: 2.0, d: 2.0, h: 1.2, mat: 'wood' },
    { x: -24, z: 28, w: 2.0, d: 2.0, h: 1.2, mat: 'wood' },
    // CT 出生
    { x: -10, z: -44, w: 2.4, d: 2.4, h: 1.2, mat: 'metal' },
    { x: 10, z: -44, w: 2.4, d: 2.4, h: 1.2, mat: 'metal' },
  ];

  // 中门(双开留缝)
  const DOORS = [
    { x: -4.2, z: -24, w: 3.6, d: 0.35, h: 3.4 },
    { x: 4.2, z: -24, w: 3.6, d: 0.35, h: 3.4 },
  ];

  /* ---------------- 区域 ---------------- */
  const sites = {
    A: { minX: 26, maxX: 47, minZ: -47, maxZ: -30, cx: 36, cz: -38 },
    B: { minX: -47, maxX: -26, minZ: -47, maxZ: -30, cx: -36, cz: -38 },
  };
  const buyZones = {
    CT: { minX: -15, maxX: 15, minZ: -47, maxZ: -33 },
    T: { minX: -19, maxX: 19, minZ: 23, maxZ: 47 },
  };
  const spawns = {
    CT: [{ x: 0, z: -42 }, { x: -5, z: -40 }, { x: 5, z: -40 }, { x: -9, z: -42 }, { x: 9, z: -42 }, { x: 0, z: -38 }],
    T: [{ x: 0, z: 36 }, { x: -5, z: 38 }, { x: 5, z: 38 }, { x: -9, z: 34 }, { x: 9, z: 34 }, { x: 0, z: 40 }],
  };

  /* ---------------- 场景构建 ---------------- */
  function build(scene) {
    const wallTex = makeWallTex();
    const floorTex = makeFloorTex();
    const crateTex = makeCrateTex();
    const metalTex = makeMetalTex();
    const doorTex = makeDoorTex();

    // 地面
    floorTex.repeat.set(25, 25);
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(COLS * CELL, ROWS * CELL),
      new THREE.MeshLambertMaterial({ map: floorTex })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // 地图外圈大地面(远景)
    const outer = new THREE.Mesh(
      new THREE.PlaneGeometry(900, 900),
      new THREE.MeshLambertMaterial({ color: 0xc4ae80 })
    );
    outer.rotation.x = -Math.PI / 2; outer.position.y = -0.05;
    scene.add(outer);

    // 墙体:按行合并 '#'
    const wallMat = new THREE.MeshLambertMaterial({ map: wallTex });
    const wallGroup = new THREE.Group();
    for (let r = 0; r < ROWS; r++) {
      let c = 0;
      while (c < COLS) {
        if (GRID[r][c] === '#') {
          let c2 = c;
          while (c2 + 1 < COLS && GRID[r][c2 + 1] === '#') c2++;
          const isPerimeter = (r === 0 || r === ROWS - 1 || c === 0 || c2 === COLS - 1);
          const h = isPerimeter ? 9 : 5;
          const w = (c2 - c + 1) * CELL, d = CELL;
          const p0 = cellToWorld(c, r), p1 = cellToWorld(c2, r);
          const cx = (p0.x + p1.x) / 2, cz = p0.z;
          const tex = wallTex.clone(); tex.needsUpdate = true;
          tex.repeat.set(Math.max(1, w / 4), Math.max(1, h / 4));
          const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshLambertMaterial({ map: tex }));
          m.position.set(cx, h / 2, cz);
          m.castShadow = true; m.receiveShadow = true;
          wallGroup.add(m);
          addCollider(cx, cz, w, d, h);
          radarWalls.push({ x: cx - w / 2, z: cz - d / 2, w, d });
          c = c2 + 1;
        } else c++;
      }
    }
    scene.add(wallGroup);

    // 箱子
    for (const cr of CRATES) {
      const tex = (cr.mat === 'wood' ? crateTex : metalTex);
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(cr.w, cr.h, cr.d),
        new THREE.MeshLambertMaterial({ map: tex })
      );
      m.position.set(cr.x, (cr.base || 0) + cr.h / 2, cr.z);
      m.castShadow = true; m.receiveShadow = true;
      scene.add(m);
      addCollider(cr.x, cr.z, cr.w, cr.d, cr.h, cr.base || 0);
    }

    // 中门
    for (const dr of DOORS) {
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(dr.w, dr.h, dr.d),
        new THREE.MeshLambertMaterial({ map: doorTex })
      );
      m.position.set(dr.x, dr.h / 2, dr.z);
      m.castShadow = true; m.receiveShadow = true;
      scene.add(m);
      addCollider(dr.x, dr.z, dr.w, dr.d, dr.h);
      radarWalls.push({ x: dr.x - dr.w / 2, z: dr.z - dr.d / 2, w: dr.w, d: dr.d });
    }

    // 油桶点缀
    const barrelGeo = new THREE.CylinderGeometry(0.45, 0.45, 1.1, 12);
    const barrelMats = [new THREE.MeshLambertMaterial({ color: 0x7a2e22 }), new THREE.MeshLambertMaterial({ color: 0x3e4f63 })];
    [[-20, -36], [20, -36], [38, 14], [-38, 14], [7, 30], [-44, -18], [44, -18]].forEach(([x, z], i) => {
      const b = new THREE.Mesh(barrelGeo, barrelMats[i % 2]);
      b.position.set(x, 0.55, z); b.castShadow = true; b.receiveShadow = true;
      scene.add(b);
      addCollider(x, z, 0.9, 0.9, 1.1);
    });

    // 包点字母
    for (const key of ['A', 'B']) {
      const s = sites[key];
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(7, 7),
        new THREE.MeshBasicMaterial({ map: makeSiteTex(key), transparent: true, depthWrite: false })
      );
      m.rotation.x = -Math.PI / 2;
      m.position.set(s.cx, 0.02, s.cz);
      scene.add(m);
    }

    // 天空球
    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(420, 24, 16),
      new THREE.MeshBasicMaterial({ map: makeSkyTex(), side: THREE.BackSide, fog: false })
    );
    scene.add(sky);

    // 太阳光球(视觉)
    const sun = new THREE.Mesh(new THREE.SphereGeometry(14, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xfff3cc, fog: false }));
    sun.position.set(180, 260, 90);
    scene.add(sun);

    return { colliders, radarWalls };
  }

  /* ---------------- A* 寻路 ---------------- */
  function findPath(sx, sz, ex, ez) {
    const s = worldToCell(sx, sz), e = worldToCell(ex, ez);
    if (!walkable(s.c, s.r)) { const f = nearestWalkable(s.c, s.r); s.c = f.c; s.r = f.r; }
    if (!walkable(e.c, e.r)) { const f = nearestWalkable(e.c, e.r); e.c = f.c; e.r = f.r; }
    const key = (c, r) => r * COLS + c;
    const open = [{ c: s.c, r: s.r, g: 0, f: 0, parent: null }];
    const gScore = new Map([[key(s.c, s.r), 0]]);
    const closed = new Set();
    let found = null;
    while (open.length) {
      let bi = 0;
      for (let i = 1; i < open.length; i++) if (open[i].f < open[bi].f) bi = i;
      const cur = open.splice(bi, 1)[0];
      const ck = key(cur.c, cur.r);
      if (closed.has(ck)) continue;
      closed.add(ck);
      if (cur.c === e.c && cur.r === e.r) { found = cur; break; }
      const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
      for (const [dc, dr] of dirs) {
        const nc = cur.c + dc, nr = cur.r + dr;
        if (!walkable(nc, nr)) continue;
        if (dc && dr && (!walkable(cur.c + dc, cur.r) || !walkable(cur.c, cur.r + dr))) continue; // 防切角
        const nk = key(nc, nr);
        if (closed.has(nk)) continue;
        const g = cur.g + ((dc && dr) ? 1.414 : 1);
        if (gScore.has(nk) && gScore.get(nk) <= g) continue;
        gScore.set(nk, g);
        const hH = Math.hypot(nc - e.c, nr - e.r);
        open.push({ c: nc, r: nr, g, f: g + hH, parent: cur });
      }
    }
    if (!found) return null;
    const cells = [];
    for (let n = found; n; n = n.parent) cells.push(n);
    cells.reverse();
    // 平滑:能直线到达就跳过中间点
    const pts = cells.map(n => cellToWorld(n.c, n.r));
    const out = [];
    let i = 0;
    while (i < pts.length) {
      out.push(pts[i]);
      let j = pts.length - 1;
      for (; j > i + 1; j--) if (gridLineClear(pts[i].x, pts[i].z, pts[j].x, pts[j].z)) break;
      i = Math.max(j, i + 1);
    }
    if (out.length === 0 || out[out.length - 1] !== pts[pts.length - 1]) out.push(pts[pts.length - 1]);
    out.push({ x: ex, z: ez });
    return out;
  }

  function gridLineClear(x0, z0, x1, z1) {
    const d = Math.hypot(x1 - x0, z1 - z0);
    const steps = Math.ceil(d / 1.0);
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const cc = worldToCell(x0 + (x1 - x0) * t, z0 + (z1 - z0) * t);
      if (!walkable(cc.c, cc.r)) return false;
      // 留出 0.6m 边距,避免贴墙
      const x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t;
      for (const [ox, oz] of [[0.7, 0], [-0.7, 0], [0, 0.7], [0, -0.7]]) {
        const c2 = worldToCell(x + ox, z + oz);
        if (!walkable(c2.c, c2.r)) return false;
      }
    }
    return true;
  }

  function nearestWalkable(c, r) {
    for (let rad = 0; rad < 12; rad++)
      for (let dc = -rad; dc <= rad; dc++)
        for (let dr = -rad; dr <= rad; dr++)
          if (walkable(c + dc, r + dr)) return { c: c + dc, r: r + dr };
    return { c: 12, r: 12 };
  }

  function randomInRect(rect) {
    return {
      x: rect.minX + 1.5 + Math.random() * (rect.maxX - rect.minX - 3),
      z: rect.minZ + 1.5 + Math.random() * (rect.maxZ - rect.minZ - 3),
    };
  }
  function inRect(x, z, rect) { return x >= rect.minX && x <= rect.maxX && z >= rect.minZ && z <= rect.maxZ; }

  return {
    CELL, GRID, ROWS, COLS,
    build, colliders, radarWalls, sites, buyZones, spawns,
    findPath, walkable, worldToCell, cellToWorld, randomInRect, inRect, gridLineClear,
  };
})();

/* ============================================================
 * Physics — 实体移动、碰撞、射线
 * ============================================================ */
const Physics = (() => {
  const GRAV = 20;
  const STEP_H = 0.55;

  function overlapXZ(x, z, r, c) {
    return x + r > c.min.x && x - r < c.max.x && z + r > c.min.z && z - r < c.max.z;
  }

  function moveEntity(e, dt) {
    const cols = MapSys.colliders;
    const r = e.radius, h = e.curHeight;
    // 垂直
    e.vel.y -= GRAV * dt;
    let ny = e.pos.y + e.vel.y * dt;
    let ground = 0;
    for (const c of cols) {
      if (!overlapXZ(e.pos.x, e.pos.z, r * 0.85, c)) continue;
      if (c.max.y <= e.pos.y + 0.05 && c.max.y > ground) ground = c.max.y;
      if (e.vel.y > 0 && c.min.y >= e.pos.y + h - 0.1 && c.min.y < ny + h) { ny = c.min.y - h; e.vel.y = 0; }
    }
    if (ny <= ground + 0.001) { ny = ground; if (e.vel.y < 0) e.vel.y = 0; e.onGround = true; }
    else e.onGround = false;
    e.pos.y = ny;
    // 水平分轴
    moveAxis(e, 'x', dt, cols);
    moveAxis(e, 'z', dt, cols);
    // 地图边界保险
    e.pos.x = Math.max(-49, Math.min(49, e.pos.x));
    e.pos.z = Math.max(-49, Math.min(49, e.pos.z));
  }

  function moveAxis(e, axis, dt, cols) {
    const delta = e.vel[axis] * dt;
    if (delta === 0) return;
    let np = e.pos[axis] + delta;
    const r = e.radius, h = e.curHeight;
    let blocked = false;
    for (let pass = 0; pass < 3; pass++) {
      blocked = false;
      for (const c of cols) {
        if (e.pos.y >= c.max.y - 0.01 || e.pos.y + h <= c.min.y + 0.01) continue;
        const ox = axis === 'x' ? np : e.pos.x;
        const oz = axis === 'z' ? np : e.pos.z;
        if (!overlapXZ(ox, oz, r, c)) continue;
        // 台阶
        if (e.onGround && c.max.y - e.pos.y <= STEP_H && c.max.y - e.pos.y > 0 && headroom(ox, oz, r, c.max.y, h, cols)) {
          e.pos.y = c.max.y + 0.001;
          continue;
        }
        if (delta > 0) np = (axis === 'x' ? c.min.x : c.min.z) - r - 0.001;
        else np = (axis === 'x' ? c.max.x : c.max.z) + r + 0.001;
        blocked = true;
      }
      if (!blocked) break;
    }
    e.pos[axis] = np;
    if (blocked) e.vel[axis] = 0;
  }

  function headroom(x, z, r, y, h, cols) {
    for (const c of cols) {
      if (!overlapXZ(x, z, r, c)) continue;
      if (c.min.y < y + h && c.max.y > y + 0.1) return false;
    }
    return true;
  }

  // 射线 vs 所有静态 AABB,返回 {t, point:V3, normal:V3} 或 null
  function rayWorld(o, d, maxT) {
    let best = null, bestT = maxT;
    for (const c of MapSys.colliders) {
      const hit = rayAABB(o, d, c, bestT);
      if (hit && hit.t < bestT) { bestT = hit.t; best = hit; }
    }
    // 地面
    if (d.y < -1e-6) {
      const t = -o.y / d.y;
      if (t > 0 && t < bestT) {
        best = { t, normal: new THREE.Vector3(0, 1, 0) };
        bestT = t;
      }
    }
    if (best) {
      best.point = new THREE.Vector3(o.x + d.x * best.t, o.y + d.y * best.t, o.z + d.z * best.t);
    }
    return best;
  }

  function rayAABB(o, d, box, maxT) {
    let tmin = 0, tmax = maxT, axis = -1, sign = 0;
    const oArr = [o.x, o.y, o.z], dArr = [d.x, d.y, d.z];
    const mn = [box.min.x, box.min.y, box.min.z], mx = [box.max.x, box.max.y, box.max.z];
    for (let i = 0; i < 3; i++) {
      if (Math.abs(dArr[i]) < 1e-9) {
        if (oArr[i] < mn[i] || oArr[i] > mx[i]) return null;
        continue;
      }
      const inv = 1 / dArr[i];
      let t1 = (mn[i] - oArr[i]) * inv;
      let t2 = (mx[i] - oArr[i]) * inv;
      let s = -1;
      if (t1 > t2) { const tmp = t1; t1 = t2; t2 = tmp; s = 1; }
      if (t1 > tmin) { tmin = t1; axis = i; sign = s; }
      tmax = Math.min(tmax, t2);
      if (tmin > tmax) return null;
    }
    if (axis < 0) return null;
    const n = new THREE.Vector3();
    n.setComponent(axis, sign);
    return { t: tmin, normal: n };
  }

  // 两点间是否无墙(用于 LOS),a/b 为 V3
  const _dir = new THREE.Vector3();
  function segmentClear(a, b) {
    _dir.subVectors(b, a);
    const len = _dir.length();
    if (len < 1e-5) return true;
    _dir.multiplyScalar(1 / len);
    const hit = rayWorld(a, _dir, len);
    return !hit;
  }

  // 射线 vs 竖直圆柱
  function rayCylinder(o, d, cx, cz, rr, y0, y1, maxT) {
    const ox = o.x - cx, oz = o.z - cz;
    const a = d.x * d.x + d.z * d.z;
    if (a < 1e-9) {
      if (ox * ox + oz * oz > rr * rr) return null;
      // 垂直射线
      if (Math.abs(d.y) < 1e-9) return null;
      const t = ((d.y > 0 ? y0 : y1) - o.y) / d.y;
      if (t < 0 || t > maxT) return null;
      return t;
    }
    const b = 2 * (ox * d.x + oz * d.z);
    const c = ox * ox + oz * oz - rr * rr;
    const disc = b * b - 4 * a * c;
    if (disc < 0) return null;
    const sq = Math.sqrt(disc);
    let t = (-b - sq) / (2 * a);
    if (t < 0) t = (-b + sq) / (2 * a);
    if (t < 0 || t > maxT) return null;
    const y = o.y + d.y * t;
    if (y < y0 || y > y1) return null;
    return t;
  }

  function raySphere(o, d, center, r, maxT) {
    const lx = center.x - o.x, ly = center.y - o.y, lz = center.z - o.z;
    const tca = lx * d.x + ly * d.y + lz * d.z;
    if (tca < 0) return null;
    const d2 = lx * lx + ly * ly + lz * lz - tca * tca;
    if (d2 > r * r) return null;
    const thc = Math.sqrt(r * r - d2);
    const t = tca - thc;
    if (t < 0 || t > maxT) return null;
    return t;
  }

  return { moveEntity, rayWorld, rayAABB, segmentClear, rayCylinder, raySphere, GRAV };
})();
