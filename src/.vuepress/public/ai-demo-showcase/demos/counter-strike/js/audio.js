/* ============================================================
 * audio.js — WebAudio 全合成音效(无外部资源)
 * ============================================================ */
'use strict';

const AudioSys = (() => {
  let ctx = null, master = null, noiseBuf = null;
  let volume = 0.5;
  const listener = { pos: new THREE.Vector3(), fwd: new THREE.Vector3(0, 0, -1) };

  function init() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) { return; }
    master = ctx.createGain();
    master.gain.value = volume;
    master.connect(ctx.destination);
    // 预生成白噪声
    const len = ctx.sampleRate * 1.5;
    noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  }
  function setVolume(v) { volume = v; if (master) master.gain.value = v; }
  function updateListener(pos, fwd) { listener.pos.copy(pos); listener.fwd.copy(fwd); }

  // 空间化:返回接到 master 的入口节点;pos 为 null 表示自身(无空间化)
  function spatialIn(pos, baseGain, maxDist) {
    maxDist = maxDist || 70;
    const g = ctx.createGain();
    if (!pos) {
      g.gain.value = baseGain;
      g.connect(master);
      return { node: g, dist: 0 };
    }
    const dx = pos.x - listener.pos.x, dz = pos.z - listener.pos.z;
    const dist = Math.sqrt(dx * dx + dz * dz + (pos.y - listener.pos.y) ** 2);
    const att = Math.max(0, 1 - dist / maxDist) ** 1.4;
    g.gain.value = baseGain * att;
    if (att <= 0.001) { g.connect(master); return { node: g, dist, silent: true }; }
    // 立体声方位
    const fx = listener.fwd.x, fz = listener.fwd.z;
    const rightX = -fz, rightZ = fx;
    const dlen = Math.max(0.001, Math.sqrt(dx * dx + dz * dz));
    const pan = Math.max(-1, Math.min(1, (dx * rightX + dz * rightZ) / dlen)) * Math.min(1, dist / 4);
    if (ctx.createStereoPanner) {
      const p = ctx.createStereoPanner();
      p.pan.value = pan;
      g.connect(p); p.connect(master);
    } else g.connect(master);
    return { node: g, dist };
  }

  function noiseSrc(dur) {
    const s = ctx.createBufferSource();
    s.buffer = noiseBuf;
    s.loop = true;
    s.start(ctx.currentTime, Math.random() * 0.8, dur + 0.05);
    return s;
  }
  function env(g, t0, peak, dur, curve) {
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001, peak), t0 + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  }

  /* ---------- 枪声 ---------- */
  const GUN_PROFILES = {
    knife: null,
    glock: { bp: 2200, q: 0.8, body: 140, dur: 0.16, vol: 0.55, crack: 0.4 },
    usp: { bp: 1200, q: 1.2, body: 110, dur: 0.12, vol: 0.32, crack: 0.2 }, // 消音
    deagle: { bp: 1500, q: 0.7, body: 90, dur: 0.3, vol: 0.85, crack: 0.7 },
    mp5: { bp: 2400, q: 0.9, body: 150, dur: 0.13, vol: 0.5, crack: 0.4 },
    ak47: { bp: 1800, q: 0.7, body: 100, dur: 0.22, vol: 0.75, crack: 0.7 },
    m4: { bp: 2100, q: 0.8, body: 120, dur: 0.19, vol: 0.68, crack: 0.6 },
    awp: { bp: 900, q: 0.6, body: 60, dur: 0.5, vol: 1.0, crack: 1.0 },
  };

  function shot(wkey, pos) {
    if (!ctx) return;
    const p = GUN_PROFILES[wkey] || GUN_PROFILES.ak47;
    if (!p) return;
    const t0 = ctx.currentTime;
    const { node, dist, silent } = spatialIn(pos, p.vol, wkey === 'awp' ? 110 : 80);
    if (silent) return;
    // 主体噪声
    const n = noiseSrc(p.dur);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = dist > 25 ? p.bp * 0.45 : p.bp; // 远处低闷
    bp.Q.value = p.q;
    const ng = ctx.createGain();
    env(ng, t0, 1.0, p.dur);
    n.connect(bp); bp.connect(ng); ng.connect(node);
    // 低频炮膛感
    const o = ctx.createOscillator();
    o.type = 'triangle';
    o.frequency.setValueAtTime(p.body, t0);
    o.frequency.exponentialRampToValueAtTime(Math.max(30, p.body * 0.4), t0 + p.dur);
    const og = ctx.createGain();
    env(og, t0, 0.9, p.dur * 1.1);
    o.connect(og); og.connect(node);
    o.start(t0); o.stop(t0 + p.dur + 0.1);
    // 高频脆响
    if (p.crack > 0 && dist < 30) {
      const c = noiseSrc(0.03);
      const hp = ctx.createBiquadFilter();
      hp.type = 'highpass'; hp.frequency.value = 5000;
      const cg = ctx.createGain();
      env(cg, t0, p.crack * 0.7, 0.035);
      c.connect(hp); hp.connect(cg); cg.connect(node);
    }
  }

  function knifeSwing(pos) {
    if (!ctx) return;
    const t0 = ctx.currentTime;
    const { node } = spatialIn(pos, 0.25, 20);
    const n = noiseSrc(0.12);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(900, t0);
    bp.frequency.exponentialRampToValueAtTime(2600, t0 + 0.1);
    bp.Q.value = 2;
    const g = ctx.createGain(); env(g, t0, 1, 0.12);
    n.connect(bp); bp.connect(g); g.connect(node);
  }
  function knifeHit(pos) { thud(pos, 0.5, 300); }
  function thud(pos, vol, f) {
    if (!ctx) return;
    const t0 = ctx.currentTime;
    const { node } = spatialIn(pos, vol, 30);
    const o = ctx.createOscillator();
    o.type = 'sine'; o.frequency.setValueAtTime(f, t0);
    o.frequency.exponentialRampToValueAtTime(f * 0.4, t0 + 0.08);
    const g = ctx.createGain(); env(g, t0, 1, 0.09);
    o.connect(g); g.connect(node);
    o.start(t0); o.stop(t0 + 0.12);
  }

  function footstep(pos, runFast) {
    if (!ctx) return;
    const t0 = ctx.currentTime;
    const { node, silent } = spatialIn(pos, runFast ? 0.18 : 0.1, 26);
    if (silent) return;
    const n = noiseSrc(0.07);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.value = 500 + Math.random() * 250;
    const g = ctx.createGain(); env(g, t0, 1, 0.06 + Math.random() * 0.02);
    n.connect(lp); lp.connect(g); g.connect(node);
  }

  function click(pos, f, vol, dur) {
    if (!ctx) return;
    const t0 = ctx.currentTime;
    const { node } = spatialIn(pos, vol || 0.25, 22);
    const o = ctx.createOscillator();
    o.type = 'square'; o.frequency.value = f;
    const g = ctx.createGain(); env(g, t0, 0.6, dur || 0.03);
    o.connect(g); g.connect(node);
    o.start(t0); o.stop(t0 + (dur || 0.03) + 0.05);
  }

  function reloadSound(stage, pos) {
    // stage: 0 退弹匣 1 上弹匣 2 拉栓
    if (stage === 0) click(pos, 420, 0.3, 0.04);
    else if (stage === 1) click(pos, 300, 0.35, 0.05);
    else { click(pos, 700, 0.3, 0.03); setTimeout(() => click(pos, 520, 0.3, 0.04), 70); }
  }
  function empty() { click(null, 900, 0.2, 0.025); }
  function pickup() { click(null, 600, 0.25, 0.04); }

  function hitConfirm() { // 命中音
    if (!ctx) return;
    const t0 = ctx.currentTime;
    const { node } = spatialIn(null, 0.22);
    const o = ctx.createOscillator();
    o.type = 'sine'; o.frequency.value = 1100;
    const g = ctx.createGain(); env(g, t0, 1, 0.05);
    o.connect(g); g.connect(node);
    o.start(t0); o.stop(t0 + 0.08);
  }
  function dink(pos) { // 爆头金属声
    if (!ctx) return;
    const t0 = ctx.currentTime;
    const { node } = spatialIn(pos, 0.4, 50);
    for (const [f, d] of [[1865, 0.12], [2794, 0.18]]) {
      const o = ctx.createOscillator();
      o.type = 'triangle'; o.frequency.value = f;
      const g = ctx.createGain(); env(g, t0, 0.7, d);
      o.connect(g); g.connect(node);
      o.start(t0); o.stop(t0 + d + 0.05);
    }
  }
  function hurt() { thud(null, 0.35, 180); }

  function bombBeep(pos, fast) {
    if (!ctx) return;
    const t0 = ctx.currentTime;
    const { node } = spatialIn(pos, 0.35, 90);
    const o = ctx.createOscillator();
    o.type = 'square'; o.frequency.value = 2093;
    const g = ctx.createGain(); env(g, t0, 0.5, fast ? 0.05 : 0.08);
    o.connect(g); g.connect(node);
    o.start(t0); o.stop(t0 + 0.12);
  }
  function plantBeeps(pos) {
    bombBeep(pos, true);
    setTimeout(() => bombBeep(pos, true), 120);
    setTimeout(() => bombBeep(pos, true), 240);
  }
  function defuseTick(pos) { click(pos, 1500, 0.22, 0.02); }

  function explosion(pos) {
    if (!ctx) return;
    const t0 = ctx.currentTime;
    const { node } = spatialIn(pos, 1.4, 160);
    const n = noiseSrc(1.0);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(900, t0);
    lp.frequency.exponentialRampToValueAtTime(80, t0 + 0.9);
    const g = ctx.createGain(); env(g, t0, 1, 1.0);
    n.connect(lp); lp.connect(g); g.connect(node);
    const o = ctx.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(70, t0);
    o.frequency.exponentialRampToValueAtTime(28, t0 + 0.8);
    const og = ctx.createGain(); env(og, t0, 1.2, 0.9);
    o.connect(og); og.connect(node);
    o.start(t0); o.stop(t0 + 1.0);
  }

  function flashRing(amount) { // 自己被闪
    if (!ctx || amount <= 0) return;
    const t0 = ctx.currentTime;
    const { node } = spatialIn(null, 0.25 * Math.min(1, amount));
    const o = ctx.createOscillator();
    o.type = 'sine'; o.frequency.value = 3400;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.4, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.2 * amount);
    o.connect(g); g.connect(node);
    o.start(t0); o.stop(t0 + 1.3 * amount);
  }
  function flashPop(pos) {
    if (!ctx) return;
    const t0 = ctx.currentTime;
    const { node } = spatialIn(pos, 0.7, 90);
    const n = noiseSrc(0.15);
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass'; hp.frequency.value = 1500;
    const g = ctx.createGain(); env(g, t0, 1, 0.15);
    n.connect(hp); hp.connect(g); g.connect(node);
  }
  function smokePop(pos) {
    if (!ctx) return;
    const t0 = ctx.currentTime;
    const { node } = spatialIn(pos, 0.4, 60);
    const n = noiseSrc(0.5);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.value = 1200;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.5, t0 + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.5);
    n.connect(lp); lp.connect(g); g.connect(node);
  }
  function bounce(pos) { click(pos, 350, 0.3, 0.03); }

  function tone(f, dur, vol, type, delay) {
    if (!ctx) return;
    const t0 = ctx.currentTime + (delay || 0);
    const g = ctx.createGain();
    g.connect(master);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    const o = ctx.createOscillator();
    o.type = type || 'sine'; o.frequency.value = f;
    o.connect(g);
    o.start(t0); o.stop(t0 + dur + 0.05);
  }
  function roundStart() { tone(660, 0.12, 0.25); tone(880, 0.2, 0.25, 'sine', 0.13); }
  function roundWin() { tone(523, 0.12, 0.3); tone(659, 0.12, 0.3, 'sine', 0.12); tone(784, 0.25, 0.3, 'sine', 0.24); }
  function roundLose() { tone(392, 0.15, 0.28); tone(330, 0.15, 0.28, 'sine', 0.15); tone(262, 0.3, 0.28, 'sine', 0.3); }
  function matchWin() { [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.22, 0.3, 'sine', i * 0.16)); }
  function bombPlantedAnnounce() { tone(220, 0.3, 0.3, 'sawtooth'); tone(220, 0.3, 0.3, 'sawtooth', 0.35); }
  function uiClick() { click(null, 800, 0.15, 0.02); }

  return {
    init, setVolume, updateListener,
    shot, knifeSwing, knifeHit, footstep, reloadSound, empty, pickup,
    hitConfirm, dink, hurt,
    bombBeep, plantBeeps, defuseTick, explosion, flashRing, flashPop, smokePop, bounce, thud,
    roundStart, roundWin, roundLose, matchWin, bombPlantedAnnounce, uiClick,
    get ctx() { return ctx; },
  };
})();
