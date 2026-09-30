// Isolated prototype controller based on main.js at commit 046b2a8.
"use strict";

const PARTIFUL_URL = "https://partiful.com/e/hP1leVmkRh3KnoxlHdvB?c=jjT7uuTz";

const EYE_TRAVEL = [0.36, 0.22];   // metres the virtual camera slides at full tilt
const MAX_TILT_DEG = 25;           // phone tilt that reaches full travel
const ZOOM = 1.1;                  // crop a little so the frame edges never show
const LIFT = 0.06;                 // preferred clip-space nudge up, when the screen has room
const TOP_MARGIN = 6;              // CSS px kept clear above the heading
const DATE_GAP = 10;               // CSS px kept clear between the date and the RSVP button
const LAYERS = ["room", "chars", "lamp", "sign"];   // back to front
const GROUPS = ["heading", "title", "prefix", "floor"];
const BULB_COLOR = [1.0, 0.75, 0.35];
const DARK = 0.1;                  // ambient brightness while the bulb is off
const BULB_ON = [[0, 0.6], [0.05, 0.1], [0.13, 0.9], [0.2, 0.3], [0.3, 1]];   // sputter after the pull
const BULB_DELAY = 2000;
const FLICK_ON = [[0, 0.4], [0.05, 0], [0.12, 0.8], [0.18, 0.2], [0.27, 1]];
const FLICK_OFF = [[0, 0.2], [0.04, 0.8], [0.1, 0], [0.16, 0.3], [0.22, 0]];
const STUTTER = [[0, 0.25], [0.04, 1], [0.1, 0], [0.14, 0.8], [0.2, 1]];

// Stepped [seconds, level] keys after the tap, echoing the Blender flicker timing.
const REVEAL = {
  heading: [[0.4, 0.5], [0.47, 0], [0.6, 1], [0.7, 0.2], [0.78, 1]],
  title:   [[1.1, 0.7], [1.16, 0], [1.35, 1]],
  prefix:  [[3.0, 1], [3.12, 0], [3.5, 1], [3.58, 0], [4.1, 1], [4.2, 0.3], [4.8, 1]],
  floor:   [[5.0, 0.27], [5.04, 0], [5.08, 0.64], [5.12, 0.18], [5.17, 1]],
};
const RSVP_AT = 5.8;

const canvas = document.getElementById("scene");
const loadingEl = document.getElementById("loading");
const rsvp = document.getElementById("rsvp");
const chain = document.getElementById("chain");
const atmosphereCanvas = document.getElementById("atmosphere");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
let atmosphere = null;
let firstDustAt = Infinity;
let effectsMaxY = innerHeight;

const stage = new ThreeStage(canvas);
const gl = stage.renderer.getContext();

// ---- assets -----------------------------------------------------------------

function loadImage(src, signal) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const abort = () => { img.src = ""; reject(new Error("cancelled image " + src)); };
    const cleanup = () => signal?.removeEventListener("abort", abort);
    img.onload = () => { cleanup(); resolve(img); };
    img.onerror = () => { cleanup(); reject(new Error("failed to load " + src)); };
    if (signal?.aborted) return abort();
    signal?.addEventListener("abort", abort, { once: true });
    img.src = src;
  });
}

async function optionalAssets(load, message) {
  const controller = new AbortController();
  let timer;
  try {
    return await Promise.race([
      load(controller.signal),
      new Promise((_, reject) => {
        timer = setTimeout(() => {
          reject(new Error("Optional assets took too long to load"));
          controller.abort();
        }, 12000);
      }),
    ]);
  } catch (err) {
    controller.abort();
    console.warn(message, err);
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function setupAtmosphere() {
  if (typeof Atmosphere === "undefined") return;
  atmosphere = new Atmosphere(atmosphereCanvas, scene.m, reducedMotion.matches);
}

async function loadScene() { return stage.load(); }

// ---- swinging lamp ----------------------------------------------------------

async function setupSwing(lighting) {
  const tex = await stage.loadLighting(lighting);
  return { tex, ready: true, angle: 0.2, velocity: -0.12, input: null };
}

function driveLamp(x) {
  if (!swing) return;
  if (swing.input !== null) Motion.nudge(swing, clamp((x - swing.input) * 0.55, -0.25, 0.25));
  swing.input = x;
}

let nodStart = -Infinity;
let characterScreen = null;
let nodAngle = 0;
let headDrop = null;
let headMask = null;
let headMesh = null;
let otherHeadScreen = null;
let otherBodyScreen = null;

function hitsLooseHead(x, y) {
  return headDrop?.active && !headDrop.reduced && headDrop.alpha === 1 && otherHeadScreen && Math.hypot(x-otherHeadScreen[0],y-otherHeadScreen[1]) <= otherHeadScreen[2];
}

function hitsNoah(x, y) {
  return [otherHeadScreen, otherBodyScreen].some(hit => hit && Math.hypot(x - hit[0], y - hit[1]) <= hit[2]);
}

function nod(now = performance.now()) {
  if (now - nodStart < 1100) return;
  nodStart = now;
}

function rotateAround(p, pivot, k, a) {
  const v = [p[0] - pivot[0], p[1] - pivot[1], p[2] - pivot[2]];
  const c = Math.cos(a), s = Math.sin(a), d = dot(k, v) * (1 - c), x = cross(k, v);
  return [0, 1, 2].map(i => pivot[i] + v[i] * c + x[i] * s + k[i] * d);
}

// ---- camera -----------------------------------------------------------------

function mul(a, b) {
  const o = new Float32Array(16);
  for (let c = 0; c < 4; c++) {
    for (let r = 0; r < 4; r++) {
      let s = 0;
      for (let k = 0; k < 4; k++) s += a[k * 4 + r] * b[c * 4 + k];
      o[c * 4 + r] = s;
    }
  }
  return o;
}

function lookAt(e, t) {
  const f = norm([t[0] - e[0], t[1] - e[1], t[2] - e[2]]);
  const s = norm(cross(f, [0, 1, 0]));
  const up = cross(s, f);
  return new Float32Array([
    s[0], up[0], -f[0], 0,
    s[1], up[1], -f[1], 0,
    s[2], up[2], -f[2], 0,
    -dot(s, e), -dot(up, e), dot(f, e), 1,
  ]);
}

function perspective(tanX, tanY, n, f) {
  return new Float32Array([
    1 / tanX, 0, 0, 0,
    0, 1 / tanY, 0, 0,
    0, 0, (f + n) / (n - f), -1,
    0, 0, (2 * f * n) / (n - f), 0,
  ]);
}

const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = a => { const l = Math.hypot(...a); return [a[0] / l, a[1] / l, a[2] / l]; };
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

// ---- tilt input -------------------------------------------------------------

const tilt = { x: 0, y: 0, tx: 0, ty: 0, lastInput: -1e9 };
let baseline = null;

function onOrientation(e) {
  if (gesture && gesture.kind !== "scene") return;
  if (!Number.isFinite(e.gamma) || !Number.isFinite(e.beta)) return;
  const now = performance.now();
  if (revealStart !== null) atmosphere?.sense(e.gamma, e.beta, now);
  if (!baseline) baseline = { g: e.gamma, b: e.beta };
  // Slowly re-centre on however they're holding the phone.
  baseline.g += (e.gamma - baseline.g) * 0.0015;
  baseline.b += (e.beta - baseline.b) * 0.0015;
  tilt.tx = clamp(-(e.gamma - baseline.g) / MAX_TILT_DEG, -1, 1);
  tilt.ty = clamp((e.beta - baseline.b) / MAX_TILT_DEG, -1, 1);
  driveLamp(tilt.tx);
  tilt.lastInput = now;
}

function onPointer(e) {
  if (e.isPrimary === false || (gesture && gesture.kind !== "scene")) return;
  if (e.pointerType === "touch" && e.buttons === 0) return;
  tilt.tx = clamp((e.clientX / innerWidth) * 2 - 1, -1, 1);
  tilt.ty = clamp((e.clientY / innerHeight) * 2 - 1, -1, 1);
  driveLamp(tilt.tx);
  tilt.lastInput = performance.now();
}

// iOS only exposes motion to https pages, and only asks for permission from inside a tap
// (the chain pull); everywhere else listens from page load.
function setupMotion(fromTap) {
  const DOE = window.DeviceOrientationEvent;
  if (!window.isSecureContext || !DOE) return;
  const ask = typeof DOE.requestPermission === "function";
  if (ask !== fromTap) return;
  (ask ? DOE.requestPermission() : Promise.resolve("granted"))
    .then(state => { if (state === "granted") addEventListener("deviceorientation", onOrientation); })
    .catch(() => {});
}

let bulbOn = false;
let bulbChange = null;
let bulbScreen = null;
let tugAnimation = null;

function bulbLevelAt(now) {
  return bulbChange ? stepped(bulbChange.keys, (now - bulbChange.start) / 1000, bulbChange.before) : 0;
}

function toggleBulb() {
  const now = performance.now(), before = bulbLevelAt(now);
  bulbOn = !bulbOn;
  if (swing) Motion.nudge(swing, swing.angle > 0 ? -0.5 : 0.5);
  bulbChange = { start: now, before, keys: bulbOn ? BULB_ON : FLICK_OFF };
}

function pull(tugFrom = 0) {
  const now = performance.now();
  tugAnimation?.cancel();
  tugAnimation = chain.querySelector(".pull").animate([
    { transform: `translateY(${tugFrom}px)` }, { transform: "translateY(14px)", offset: 0.3 },
    { transform: "translateY(-3px)", offset: 0.65 }, { transform: "translateY(0)" },
  ], { duration: 450, easing: "ease-out" });
  if (revealStart === null) {
    revealStart = now;
    firstDustAt = now + 2200;
    neonOn = true;
    bulbOn = true;
    bulbChange = { start: now + BULB_DELAY, keys: BULB_ON, before: 0 };
    chain.classList.add("pulled");
    if (swing) Motion.nudge(swing, 0.35);
    setupMotion(true);
  } else {
    atmosphere?.emit(now);
    const before = neonLevelAt(now);
    neonOn = !neonOn;
    neonChange = { start: now, before, keys: neonOn ? FLICK_ON : FLICK_OFF };
    glitch = null;
    nextGlitchAt = Infinity;
  }
  chain.setAttribute("aria-label", neonOn ? "Pull the chain to turn off the neon" : "Pull the chain to turn on the neon");
  chain.setAttribute("aria-pressed", String(neonOn));
}

let gesture = null;
let suppressClickUntil = 0;
let cordScreen = null;
let signScreen = null;
let lampPull = 0;
let lampPullTarget = 0;
const PULL_DISTANCE = 26;

function hitsLamp(x, y) {
  if (!bulbScreen || !cordScreen) return false;
  if (signScreen && x >= signScreen[0] && x <= signScreen[2] && y >= signScreen[1] && y <= signScreen[3]) return false;
  if (Math.hypot(x - bulbScreen[0], y - bulbScreen[1]) <= 60) return true;
  const [a, b] = cordScreen;
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const t = clamp(((x - a[0]) * dx + (y - a[1]) * dy) / Math.max(1, dx * dx + dy * dy), 0, 1);
  return Math.hypot(x - a[0] - t * dx, y - a[1] - t * dy) <= 22;
}

function hitsSign(x, y) {
  return signScreen && x >= signScreen[0] && x <= signScreen[2] &&
    y >= signScreen[1] && y <= signScreen[3];
}

function beginGesture(e, kind) {
  if (!e.isPrimary || e.button !== 0 || gesture) return;
  suppressClickUntil = 0;
  gesture = { id: e.pointerId, kind, element: e.currentTarget, x: e.clientX, y: e.clientY, dx: 0, dy: 0, moved: false };
  e.currentTarget.setPointerCapture(e.pointerId);
  if (kind !== "scene") {
    tilt.tx = tilt.x; tilt.ty = tilt.y;
    if (kind === "head") { headDrop.grab(performance.now()); canvas.style.cursor = "grabbing"; }
    else if (kind === "lamp") { swing.velocity = 0; canvas.style.cursor = "grabbing"; }
    else if (kind === "chain") tugAnimation?.cancel();
  }
}

function moveGesture(e) {
  if (!gesture || e.pointerId !== gesture.id) return;
  gesture.dx = e.clientX - gesture.x;
  gesture.dy = e.clientY - gesture.y;
  gesture.moved ||= Math.hypot(gesture.dx, gesture.dy) > 10;
  const amount = Math.min(24, Math.max(0, gesture.dy) * 0.45);
  if (gesture.kind === "head") {
    const z = -headDrop.grabOrigin[2];
    headDrop.drag(gesture.dx/innerWidth*2*scene.m.tanX*z/cover[0],
      -gesture.dy/innerHeight*2*scene.m.tanY*z/cover[1],performance.now());
  }
  if (gesture.kind === "lamp") lampPullTarget = amount;
  if (gesture.kind === "chain") chain.querySelector(".pull").style.transform = `translateY(${amount}px)`;
}

function finishGesture(e, cancelled = false) {
  if (!gesture || e.pointerId !== gesture.id) return;
  const g = gesture;
  gesture = null;
  lampPullTarget = 0;
  canvas.style.cursor = "";
  const amount = Math.min(24, Math.max(0, g.dy) * 0.45);
  const pulled = !cancelled && g.dy >= PULL_DISTANCE && g.dy > Math.abs(g.dx);
  if (cancelled || g.moved || g.kind === "noah" || g.kind === "head") suppressClickUntil = performance.now() + 500;
  if (g.kind === "head") {
    headDrop.release(performance.now());
  } else if (g.kind === "noah") {
    if (!cancelled && !g.moved) headDrop?.play(performance.now());
  } else if (g.kind === "chain") {
    chain.querySelector(".pull").style.transform = "";
    if (pulled) pull(amount);
    else if (g.moved || cancelled) {
      tugAnimation = chain.querySelector(".pull").animate([
        { transform: `translateY(${amount}px)` }, { transform: "translateY(0)" },
      ], { duration: 180, easing: "ease-out" });
    }
  } else if (g.kind === "lamp" && pulled) {
    if (revealStart === null) pull(); else toggleBulb();
  }
  if (g.element.hasPointerCapture(g.id)) g.element.releasePointerCapture(g.id);
}

function tapScene(e) {
  if (revealStart === null) { pull(); return; }
  if (hitsNoah(e.clientX, e.clientY)) { headDrop.play(performance.now()); return; }
  if (hitsLamp(e.clientX, e.clientY)) {
    toggleBulb();
    return;
  }
  if (characterScreen && Math.hypot(e.clientX - characterScreen[0], e.clientY - characterScreen[1]) <= characterScreen[2]) {
    nod();
    return;
  }
  if (hitsSign(e.clientX, e.clientY)) {
    const now = performance.now();
    atmosphere?.emit(now);
    if (neonOn) glitch = { groups: ["heading", "title", "prefix"], keys: STUTTER, start: now };
    return;
  }
  if (!neonOn) return;
  const { width: W, height: H, hotspots } = scene.m;
  const nx = (2 * e.clientX / innerWidth - 1) / cover[0];
  const ny = (1 - 2 * e.clientY / innerHeight - lift) / cover[1];
  const x = (nx + 1) / 2 * W, y = (1 - ny) / 2 * H;
  const r = hotspots.floor;
  if (x >= r[0] && x <= r[0] + r[2] && y >= r[1] && y <= r[1] + r[3]) {
    glitch = { groups: ["floor"], keys: STUTTER, start: performance.now() };
  }
}

addEventListener("pointermove", onPointer);

// ---- neon state -------------------------------------------------------------

const levels = { heading: 0, title: 0, prefix: 0, floor: 0 };
let revealStart = null;
let neonOn = false;
let neonChange = null;
let glitch = null;

function neonLevelAt(now) {
  return neonChange ? stepped(neonChange.keys, (now - neonChange.start) / 1000, neonChange.before) : Number(neonOn);
}
let nextGlitchAt = Infinity;

function stepped(keys, t, before) {
  let v = before;
  for (const [kt, kv] of keys) {
    if (t >= kt) v = kv; else break;
  }
  return v;
}

function scheduleGlitch(now) {
  nextGlitchAt = now + 3500 + Math.random() * 6000;
}

function startGlitch(now) {
  const r = Math.random();
  if (r < 0.2) {
    // The S' gives out for a moment: back to plain "Care Bear".
    glitch = { groups: ["prefix"], start: now,
               keys: [[0, 0.3], [0.05, 0], [1.4, 0.6], [1.46, 0], [1.6, 1]] };
  } else if (r < 0.35) {
    glitch = { groups: GROUPS, power: true, start: now,
               keys: [[0, 0.45], [0.07, 1], [0.16, 0.6], [0.22, 1]] };
  } else {
    const group = GROUPS[Math.floor(Math.random() * GROUPS.length)];
    glitch = { groups: [group], start: now, keys: STUTTER };
  }
}

function updateNeon(now) {
  if (revealStart === null) return 1;
  const t = (now - revealStart) / 1000;
  for (const g of GROUPS) levels[g] = stepped(REVEAL[g], t, 0) * neonLevelAt(now);

  if (t > RSVP_AT) rsvp.classList.add("on");
  if (neonOn && t > RSVP_AT && nextGlitchAt === Infinity) scheduleGlitch(now);
  if (neonOn && !glitch && now >= nextGlitchAt) startGlitch(now);

  let power = 1;
  if (glitch) {
    const gt = (now - glitch.start) / 1000;
    const last = glitch.keys[glitch.keys.length - 1][0];
    if (gt > last) {
      glitch = null;
      scheduleGlitch(now);
    } else {
      const v = stepped(glitch.keys, gt, 1);
      if (glitch.power) power = v;
      for (const g of glitch.groups) levels[g] *= v;
    }
  }
  return power;
}

// ---- render loop ------------------------------------------------------------

let scene = null;
let swing = null;
let lampMesh = null;
let proj = null;
let cover = [1, 1];
let lift = LIFT;
let dprCap = 2;
let slowFrames = 0;
let lastFrame = 0;

function resize() {
  const cw = innerWidth, ch = innerHeight;
  const dpr = Math.min(devicePixelRatio || 1, dprCap);
  stage.resize(Math.round(cw * dpr), Math.round(ch * dpr));
  atmosphere?.resize(cw, ch, dpr);

  // Fill the screen, then zoom out and shift only as much as it takes to keep the heading
  // below the notch and the date above the RSVP button. Very short screens get thin side bars.
  const { width: W, height: H, keep: [top, bottom] } = scene.m;
  const minY = document.getElementById("safe-top").getBoundingClientRect().height + TOP_MARGIN;
  const maxY = rsvp.getBoundingClientRect().top - DATE_GAP;
  effectsMaxY = maxY;
  const fitted = Math.min(Math.max(cw / W, ch / H) * ZOOM, (maxY - minY) / (bottom - top));
  const k = cw > ch ? fitted : Math.max(fitted, (cw / W) * 0.8);
  const rowY = row => ch / 2 + (row - H / 2) * k;
  const lo = rowY(bottom) - maxY, hi = rowY(top) - minY;
  lift = (lo > hi ? lo : clamp(LIFT * ch / 2, lo, hi)) / (ch / 2);
  cover = [(k * W) / cw, (k * H) / ch];


}

function toCanvas(viewProj, p) {
  const c = [0, 1, 2, 3].map(r => viewProj[r] * p[0] + viewProj[4 + r] * p[1] + viewProj[8 + r] * p[2] + viewProj[12 + r]);
  const x = (c[0] * cover[0]) / c[3], y = (c[1] * cover[1]) / c[3] + lift;
  return [(x + 1) / 2 * canvas.width, (y + 1) / 2 * canvas.height];
}

function placeChain(viewProj) {
  const { anchor, down, length } = scene.m.chain;
  const end = anchor.map((v, i) => v + down[i] * length);
  const [a, b] = [anchor, end].map(p => {
    const [x, y] = toCanvas(viewProj, p);
    return [x * innerWidth / canvas.width, innerHeight - y * innerHeight / canvas.height];
  });
  chain.style.height = `${Math.hypot(b[0] - a[0], b[1] - a[1])}px`;
  chain.style.transform = `translate(${a[0]}px, ${a[1]}px) rotate(${Math.atan2(a[0] - b[0], b[1] - a[1])}rad)`;
}

function frame(now) {
  // With no recent input, drift gently so the room never looks frozen.
  const dt = Math.min(0.1, lastFrame ? (now - lastFrame) / 1000 : 1 / 60);
  lastFrame = now;
  // Step resolution down if the phone can't hold 60fps; lag reads worse than softness.
  slowFrames = dt > 0.022 ? slowFrames + 1 : Math.max(0, slowFrames - 1);
  if (slowFrames > 45 && dprCap > 1.25) {
    dprCap -= 0.25;
    slowFrames = 0;
    resize();
  }

  if (gesture && gesture.kind !== "scene") tilt.lastInput = now;
  lampPull += (lampPullTarget - lampPull) * (1 - Math.exp(-dt / (gesture ? 0.035 : 0.075)));
  const idle = now - tilt.lastInput > 2500;
  if (idle) {
    tilt.tx = Math.sin(now / 2300) * 0.35;
    tilt.ty = Math.sin(now / 3100) * 0.2;
  }
  // Follow real input almost immediately; ease into and out of the idle drift.
  const follow = 1 - Math.exp(-dt / (idle ? 0.6 : 0.04));
  tilt.x += (tilt.tx - tilt.x) * follow;
  tilt.y += (tilt.ty - tilt.y) * follow;

  const sw = scene.m.swing;
  const angle = gesture?.kind === "lamp" ? swing.angle : Motion.step(swing, dt);
  const character = scene.m.motion.character;
  nodAngle = Motion.sample(character.nod, character.fps, (now - nodStart) / 1000);
  headDrop?.update(now);
  const lit = !!(swing && swing.ready);

  const eye = [tilt.x * EYE_TRAVEL[0], -tilt.y * EYE_TRAVEL[1], 0];
  const viewProj = mul(proj, lookAt(eye, [0, 0, -scene.m.focus]));
  const head = rotateAround(character.hit, character.pivot, character.axis, nodAngle);
  const center = toCanvas(viewProj, head);
  const side = toCanvas(viewProj, [head[0] + character.radius, head[1], head[2]]);
  characterScreen = [center[0] * innerWidth / canvas.width,
                     innerHeight - center[1] * innerHeight / canvas.height,
                     Math.abs(side[0] - center[0]) * innerWidth / canvas.width];
  if (headDrop) {
    const m = headDrop.data;
    const hit = m.hit.map((v, i) => v + headDrop.translation[i]);
    const projectHit = (p, radius) => {
      const a = toCanvas(viewProj, p), b = toCanvas(viewProj, [p[0] + radius, p[1], p[2]]);
      return [a[0] * innerWidth / canvas.width, innerHeight - a[1] * innerHeight / canvas.height,
              Math.max(22, Math.abs(b[0] - a[0]) * innerWidth / canvas.width)];
    };
    otherHeadScreen = headDrop.alpha > 0.1 ? projectHit(hit, m.radius) : null;
    otherBodyScreen = projectHit(m.bodyHit, m.bodyRadius);
  }
  const power = updateNeon(now);
  const bulb = 1 + Math.sin(now / 170) * 0.012 + Math.sin(now / 47) * 0.008;
  const bulbLevel = bulbLevelAt(now);
  if (sw) {
    const [bx, by] = toCanvas(viewProj, rotateAround(sw.bulb, sw.pivot, sw.axis, angle));
    bulbScreen = [bx * innerWidth / canvas.width, innerHeight - by * innerHeight / canvas.height + lampPull];
    const [px, py] = toCanvas(viewProj, sw.pivot);
    cordScreen = [[px * innerWidth / canvas.width, innerHeight - py * innerHeight / canvas.height], bulbScreen];
    const [x, y, w, h] = scene.m.hotspots.sign, z = -scene.m.chain.anchor[2];
    const corners = [[x, y], [x + w, y], [x, y + h], [x + w, y + h]].map(([ix, iy]) => {
      const p = [(ix / scene.m.width * 2 - 1) * scene.m.tanX * z,
                 (1 - iy / scene.m.height * 2) * scene.m.tanY * z, -z];
      const [sx, sy] = toCanvas(viewProj, p);
      return [sx * innerWidth / canvas.width, innerHeight - sy * innerHeight / canvas.height];
    });
    signScreen = [Math.min(...corners.map(p => p[0])), Math.min(...corners.map(p => p[1])),
                  Math.max(...corners.map(p => p[0])), Math.max(...corners.map(p => p[1]))];
  }

  stage.draw({ viewProj, cover, lift, eye, angle, pull: lampPull*2/innerHeight,
    bulb: rotateAround(sw.bulb,sw.pivot,sw.axis,angle), bulbLevel:bulbLevel*power,
    power:power*bulb*(DARK+(1-DARK)*bulbLevel), levels, now, nodAngle,
    reaction:headDrop, lightBlend:Motion.blend(scene.m.motion.lighting.angles,angle),
    haloLevel:power*bulb*bulbLevel,
    bulbScreen:bulbScreen && [bulbScreen[0]*canvas.width/innerWidth,(innerHeight-bulbScreen[1])*canvas.height/innerHeight] });
  if (scene.m.chain) placeChain(viewProj);
  if (atmosphere) {
    if (now >= firstDustAt) {
      atmosphere.emit(now);
      firstDustAt = Infinity;
    }
    const context = {
      project: p => {
        const [x, y] = toCanvas(viewProj, p);
        return [x * innerWidth / canvas.width, innerHeight - y * innerHeight / canvas.height];
      },
      started: revealStart !== null,
      bulbLevel: bulbLevel * power,
      neonLevel: Math.max(levels.heading, levels.title, levels.prefix),
      tiltX: tilt.x,
      tiltY: tilt.y,
      bulbScreen,
      signScreen,
      maxY: effectsMaxY,
    };
    atmosphere.update(now, dt, context);
    atmosphere.draw(now, context);
  }
  requestAnimationFrame(frame);
}

async function loadHeadAssets(signal) {
  const response = await fetch("assets/head-drop-physics.json", { signal });
  if (!response.ok) throw new Error("Head reaction unavailable");
  const data = await response.json();
  if (![data.pivot, data.hit, data.bodyHit, data.axis, data.floor?.point, data.floor?.normal].every(p => Array.isArray(p) && p.length === 3 && p.every(Number.isFinite)) ||
      ![data.axis,data.floor.normal].every(p => Math.abs(Math.hypot(...p)-1) < 0.001) ||
      !(data.radius > 0 && data.bodyRadius > 0)) throw new Error("Invalid head reaction controls");
  const metadataResponse = await fetch("assets/head-mesh-packed.json", { signal });
  if (!metadataResponse.ok) throw new Error("Head geometry unavailable");
  const metadata = await metadataResponse.json();
  const [mask, image, albedo, meshResponse] = await Promise.all([
    loadImage("assets/" + data.mask, signal), loadImage("assets/head-light.webp", signal), loadImage("assets/" + metadata.texture.file, signal),
    fetch("assets/" + metadata.binary, { signal }),
  ]);
  if (!meshResponse.ok) throw new Error("Head geometry unavailable");
  const binary = metadata.compression === "gzip"
    ? await new Response(meshResponse.body.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()
    : await meshResponse.arrayBuffer();
  if (!metadata.pivot.every((v,i) => Math.abs(v-data.pivot[i]) < 0.00001)) throw new Error("Head geometry pivot mismatch");
  return { data, metadata, mask, image, albedo, binary };
}

async function waitForGpu() {
  const fence = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
  gl.flush();
  try {
    while (true) {
      const status = gl.clientWaitSync(fence, 0, 0);
      if (status === gl.WAIT_FAILED) throw new Error("Scene preparation failed");
      if (status !== gl.TIMEOUT_EXPIRED) return;
      await new Promise(requestAnimationFrame);
    }
  } finally {
    gl.deleteSync(fence);
  }
}

async function prepareMeshes() {
  const eye=[0,0,0], sw=scene.m.swing;
  stage.draw({viewProj:mul(proj,lookAt(eye,[0,0,-scene.m.focus])), cover,lift,eye,
    angle:swing.angle,pull:0,bulb:rotateAround(sw.bulb,sw.pivot,sw.axis,swing.angle),
    bulbLevel:1,power:1,levels:{heading:1,title:1,prefix:1,floor:1},now:0,nodAngle:0,
    reaction:headDrop && {data:headDrop.data,active:true,reduced:false,alpha:1,translation:[0,-0.8,0],rotation:[0,0,0,1]},
    lightBlend:Motion.blend(scene.m.motion.lighting.angles,swing.angle),haloLevel:1,
    bulbScreen:toCanvas(mul(proj,lookAt(eye,[0,0,-scene.m.focus])),sw.bulb)});
}

async function main() {
  canvas.style.visibility = "hidden";
  // Download together, but keep mesh construction and first-use uploads under the loader.
  const lampAssets = optionalAssets(async signal => {
    const response = await fetch("assets/lamp-mesh.json", { signal });
    if (!response.ok) throw new Error("Lamp mesh unavailable");
    return response.json();
  }, "Using rendered lamp fallback");
  const headAssets = optionalAssets(loadHeadAssets, "The head reaction could not load; the invitation is still ready.");
  scene = await loadScene();
  proj = perspective(scene.m.tanX, scene.m.tanY, 0.1, 50);
  swing = await setupSwing(scene.m.motion.lighting);
  const [lampData, headData] = await Promise.all([lampAssets, headAssets]);
  if (lampData) {
    try { lampMesh = stage.createLamp(lampData); }
    catch (err) { console.warn("Using rendered lamp fallback", err); }
  }
  if (headData) {
    try {
      const { data, metadata, mask, image, albedo, binary } = headData;
      const mesh = stage.createHead(metadata, binary, image, albedo);
      const reaction = new PhysicsHead(data, reducedMotion.matches, mesh.collisionPoints);
      if (!reaction.valid) throw new Error("Invalid head reaction animation");
      const maskTexture = stage.setHeadMask(mask);
      headMesh = mesh;
      headMask = maskTexture;
      headDrop = reaction;
    } catch (err) { console.warn("The head reaction could not load; the invitation is still ready.", err); }
  }
  rsvp.href = PARTIFUL_URL;
  rsvp.hidden = false;
  setupAtmosphere();

  resize();
  addEventListener("resize", resize);
  await prepareMeshes();
  await waitForGpu();
  frame(performance.now());
  await waitForGpu();
  canvas.style.visibility = "";
  loadingEl.remove();
  chain.hidden = !scene.m.chain;
  chain.addEventListener("click", () => pull());
  canvas.addEventListener("click", tapScene);
  chain.addEventListener("pointerdown", e => beginGesture(e, "chain"));
  canvas.addEventListener("pointerdown", e => beginGesture(e,
    hitsLooseHead(e.clientX,e.clientY) ? "head" : revealStart !== null && hitsNoah(e.clientX, e.clientY) ? "noah" : hitsLamp(e.clientX, e.clientY) ? "lamp" : "scene"));
  for (const element of [canvas, chain]) {
    element.addEventListener("pointermove", moveGesture);
    element.addEventListener("pointerup", e => finishGesture(e));
    element.addEventListener("pointercancel", e => finishGesture(e, true));
    element.addEventListener("lostpointercapture", e => finishGesture(e, true));
  }
  addEventListener("click", e => {
    if (e.detail > 0 && (e.target === canvas || chain.contains(e.target)) && performance.now() < suppressClickUntil) {
      e.preventDefault(); e.stopImmediatePropagation();
    }
  }, true);
  const cancelGesture = () => { if (gesture) finishGesture({ pointerId: gesture.id }, true); };
  addEventListener("blur", () => { cancelGesture(); headDrop?.reset(); });
  addEventListener("visibilitychange", () => {
    if (document.hidden) { cancelGesture(); headDrop?.reset(); }
    lastFrame = 0;
    if (swing) swing.input = null;
    atmosphere?.resetSensor();
  });
  addEventListener("orientationchange", () => atmosphere?.resetSensor());
  reducedMotion.addEventListener("change", e => {
    atmosphere?.setReduced(e.matches);
    headDrop?.setReduced(e.matches);
    if (e.matches) firstDustAt = Infinity;
  });
  setupMotion(false);
}

main().catch(err => {
  loadingEl.textContent = "the lights won't turn on — try reloading";
  console.error(err);
});
