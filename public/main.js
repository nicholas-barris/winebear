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

// Each vertex is a pixel of the Blender render pushed back to its true depth.
const VERT = `#version 300 es
precision highp float;
in vec2 aCell;
uniform sampler2D uDepth;
uniform vec4 uRect;       // layer crop in image pixels: x, y, w, h
uniform vec2 uImage;      // full render size in pixels
uniform float uStep;
uniform vec4 uCam;        // tanX, tanY, zNear, zFar of the depth encoding
uniform mat4 uViewProj;
uniform vec2 uCover;
uniform float uLift;
uniform vec3 uPivot;      // lamp hinge, camera space
uniform vec3 uAxis;
uniform float uAngle;
uniform float uNod;
uniform vec3 uHeadPivot, uHeadAxis, uHeadUp;
uniform vec2 uNeck;
out vec2 vUv;

vec3 rotate(vec3 v, vec3 k, float a) {
  return v * cos(a) + cross(k, v) * sin(a) + k * dot(k, v) * (1.0 - cos(a));
}

void main() {
  vec2 cell = clamp(aCell, vec2(0.0), vec2(textureSize(uDepth, 0) - 1));
  vec2 px = min(cell * uStep, uRect.zw - 1.0) + (aCell - cell) * uStep;
  vUv = (px + 0.5) / uRect.zw;
  vec2 rg = floor(texelFetch(uDepth, ivec2(cell), 0).rg * 255.0 + 0.5);
  float z = uCam.z + (rg.r * 256.0 + rg.g) / 65535.0 * (uCam.w - uCam.z);
  vec2 img = (uRect.xy + px + 0.5) / uImage;
  vec3 p = vec3((img.x * 2.0 - 1.0) * uCam.x * z, (1.0 - img.y * 2.0) * uCam.y * z, -z);
  float headWeight = smoothstep(uNeck.x, uNeck.y, dot(p - uHeadPivot, uHeadUp));
  headWeight *= 1.0 - smoothstep(-0.05, 0.05, p.x);
  p = uHeadPivot + rotate(p - uHeadPivot, uHeadAxis, uNod * headWeight);
  p = uPivot + rotate(p - uPivot, uAxis, uAngle);
  gl_Position = uViewProj * vec4(p, 1.0);
  gl_Position.xy *= uCover;
  gl_Position.y += uLift * gl_Position.w;
}`;

const FRAG = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D uBase, uGlow0, uGlow1, uGlow2, uGlow3;
uniform highp sampler2DArray uLight;
uniform vec3 uLightBlend;
uniform float uLightReference;
uniform vec4 uGlowRect[4];   // each glow crop within the layer: uv offset, uv size
uniform vec4 uLightRect;     // this layer's region of the swing lighting video
uniform float uUseLight;
uniform vec4 uLevels;        // heading, title, prefix, floor
uniform float uPower;        // bulb wobble and brownouts
uniform float uGrain;
uniform float uTime;
uniform vec2 uResolution;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

vec3 glow(sampler2D t, vec4 r, float level) {
  if (level <= 0.0) return vec3(0.0);
  vec2 g = (vUv - r.xy) / r.zw;
  return (texture(t, g).rgb + texture(t, g, 4.5).rgb * 0.6) * level;
}

void main() {
  vec4 base = texture(uBase, vUv);   // premultiplied
  if (uUseLight > 0.5) {
    vec2 inset = 0.5 / vec2(textureSize(uLight, 0).xy);
    vec2 uv = clamp(uLightRect.xy + vUv * uLightRect.zw,
                    uLightRect.xy + inset, uLightRect.xy + uLightRect.zw - inset);
    vec3 light = mix(texture(uLight, vec3(uv, uLightBlend.x)).rgb,
                     texture(uLight, vec3(uv, uLightBlend.y)).rgb, uLightBlend.z);
    vec3 reference = texture(uLight, vec3(uv, uLightReference)).rgb;
    base.rgb = max(vec3(0.0), light * base.a + (base.rgb - reference * base.a) * 0.35);
  }
  vec3 c = base.rgb * uPower
         + glow(uGlow0, uGlowRect[0], uLevels.x)
         + glow(uGlow1, uGlowRect[1], uLevels.y)
         + glow(uGlow2, uGlowRect[2], uLevels.z)
         + glow(uGlow3, uGlowRect[3], uLevels.w);
  vec2 v = gl_FragCoord.xy / uResolution - 0.5;
  c *= 1.0 - dot(v, v) * 0.9;
  c += (hash(gl_FragCoord.xy + fract(uTime) * 91.0) - 0.5) * 0.035 * uGrain;
  outColor = vec4(c, base.a);
}`;

// Lens glow around the bulb, drawn additively over everything.
const HALO_VERT = `#version 300 es
in vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }`;

const HALO_FRAG = `#version 300 es
precision highp float;
out vec4 outColor;
uniform vec2 uCenter;     // bulb in canvas pixels
uniform float uSize;      // canvas height in pixels
uniform vec3 uColor;
void main() {
  float r = length(gl_FragCoord.xy - uCenter) / uSize;
  float g = exp(-r * r / 0.0002) * 0.55 + 0.05 / (1.0 + r * r / 0.0025);
  outColor = vec4(uColor * g, 0.0);
}`;

const canvas = document.getElementById("scene");
const loadingEl = document.getElementById("loading");
const rsvp = document.getElementById("rsvp");
const chain = document.getElementById("chain");

// No MSAA: layer edges come from texture alpha, so it would only cost fill rate.
const gl = canvas.getContext("webgl2", { antialias: false, alpha: false });
if (!gl) {
  loadingEl.textContent = "open on a newer browser to see the show";
  throw new Error("WebGL2 unavailable");
}

function program(vert, frag, uniforms) {
  const compile = (type, src) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
    return s;
  };
  const p = gl.createProgram();
  gl.attachShader(p, compile(gl.VERTEX_SHADER, vert));
  gl.attachShader(p, compile(gl.FRAGMENT_SHADER, frag));
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
  const u = {};
  for (const name of uniforms) u[name] = gl.getUniformLocation(p, name);
  return { p, u };
}

const scenePass = program(VERT, FRAG, [
  "uDepth", "uRect", "uImage", "uStep", "uCam", "uViewProj", "uCover", "uLift", "uPivot", "uAxis",
  "uAngle", "uBase", "uGlow0", "uGlow1", "uGlow2", "uGlow3", "uLight", "uGlowRect", "uLightRect",
  "uNod", "uHeadPivot", "uHeadAxis", "uHeadUp", "uNeck", "uLightBlend", "uLightReference",
  "uUseLight", "uLevels", "uPower", "uGrain", "uTime", "uResolution",
]);
const haloPass = program(HALO_VERT, HALO_FRAG, ["uCenter", "uSize", "uColor"]);
const u = scenePass.u;

gl.useProgram(scenePass.p);
gl.uniform1i(u.uBase, 0);
[u.uGlow0, u.uGlow1, u.uGlow2, u.uGlow3].forEach((loc, i) => gl.uniform1i(loc, 1 + i));
gl.uniform1i(u.uDepth, 5);
gl.uniform1i(u.uLight, 6);
gl.enable(gl.BLEND);

const haloVao = gl.createVertexArray();
gl.bindVertexArray(haloVao);
gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
gl.enableVertexAttribArray(gl.getAttribLocation(haloPass.p, "aPos"));
gl.vertexAttribPointer(gl.getAttribLocation(haloPass.p, "aPos"), 2, gl.FLOAT, false, 0, 0);
gl.bindVertexArray(null);

// ---- assets -----------------------------------------------------------------

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("failed to load " + src));
    img.src = src;
  });
}

function texture(img, { mipmaps = false, premultiply = false, nearest = false } = {}) {
  const t = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, t);
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, premultiply);
  gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);
  if (img) gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  const filter = nearest ? gl.NEAREST : gl.LINEAR;
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
  if (mipmaps) {
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  } else {
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
  }
  return t;
}

function gridMesh(nx, ny, skirt = 0) {
  nx += skirt * 2;
  ny += skirt * 2;
  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  const cells = new Float32Array(nx * ny * 2);
  for (let y = 0, k = 0; y < ny; y++) {
    for (let x = 0; x < nx; x++) { cells[k++] = x - skirt; cells[k++] = y - skirt; }
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, cells, gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(scenePass.p, "aCell");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const idx = new Uint32Array((nx - 1) * (ny - 1) * 6);
  for (let y = 0, k = 0; y < ny - 1; y++) {
    for (let x = 0; x < nx - 1; x++) {
      const i = y * nx + x;
      idx.set([i, i + nx, i + 1, i + 1, i + nx, i + nx + 1], k);
      k += 6;
    }
  }
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idx, gl.STATIC_DRAW);
  gl.bindVertexArray(null);
  return { vao, count: idx.length };
}

async function loadScene() {
  const [m, motion] = await Promise.all(["manifest.json", "motion.json"].map(async f => {
    const response = await fetch("assets/" + f);
    if (!response.ok) throw new Error("failed to load " + f);
    return response.json();
  }));
  m.motion = motion;
  const black = texture(new ImageData(new Uint8ClampedArray([0, 0, 0, 255]), 1, 1));
  const layers = await Promise.all(LAYERS.map(async name => {
    const L = m.layers[name];
    const [base, depth, ...glows] = await Promise.all([
      loadImage("assets/" + L.base),
      loadImage("assets/" + L.depth),
      ...GROUPS.map(g => L.glows[g] ? loadImage("assets/" + L.glows[g].file) : null),
    ]);
    const [, , w, h] = L.rect;
    const glowRects = new Float32Array(16);
    GROUPS.forEach((g, i) => {
      const r = L.glows[g] ? L.glows[g].rect : [0, 0, w, h];
      glowRects.set([r[0] / w, r[1] / h, r[2] / w, r[3] / h], i * 4);
    });
    const lr = motion.lighting.light[name];
    return {
      name,
      rect: L.rect,
      step: L.step,
      mesh: gridMesh(L.grid[0], L.grid[1], name === "room" ? 32 : 0),
      base: texture(base, { premultiply: true }),
      depth: texture(depth, { nearest: true }),
      glows: glows.map(img => img ? texture(img, { mipmaps: true }) : black),
      glowRects,
      lightRect: lr && [lr[0] / motion.lighting.atlas[0], lr[1] / motion.lighting.atlas[1],
                        lr[2] / motion.lighting.atlas[0], lr[3] / motion.lighting.atlas[1]],
    };
  }));
  gl.uniform2f(u.uImage, m.width, m.height);
  gl.uniform4f(u.uCam, m.tanX, m.tanY, m.zNear, m.zFar);
  if (m.swing) {
    gl.uniform3fv(u.uPivot, m.swing.pivot);
    gl.uniform3fv(u.uAxis, m.swing.axis);
  }
  const c = motion.character;
  gl.uniform3fv(u.uHeadPivot, c.pivot);
  gl.uniform3fv(u.uHeadAxis, c.axis);
  gl.uniform3fv(u.uHeadUp, c.up);
  gl.uniform2fv(u.uNeck, c.neck);
  return { m, layers };
}

// ---- swinging lamp ----------------------------------------------------------

async function setupSwing(lighting) {
  const images = await Promise.all(lighting.files.map(f => loadImage("assets/" + f)));
  const tex = gl.createTexture();
  gl.activeTexture(gl.TEXTURE6);
  gl.bindTexture(gl.TEXTURE_2D_ARRAY, tex);
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
  const [w, h] = lighting.atlas;
  gl.texStorage3D(gl.TEXTURE_2D_ARRAY, 1, gl.RGBA8, w, h, images.length);
  images.forEach((img, i) => gl.texSubImage3D(gl.TEXTURE_2D_ARRAY, 0, 0, 0, i, w, h, 1, gl.RGBA, gl.UNSIGNED_BYTE, img));
  gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
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
  if (e.gamma == null || e.beta == null) return;
  if (!baseline) baseline = { g: e.gamma, b: e.beta };
  // Slowly re-centre on however they're holding the phone.
  baseline.g += (e.gamma - baseline.g) * 0.0015;
  baseline.b += (e.beta - baseline.b) * 0.0015;
  tilt.tx = clamp(-(e.gamma - baseline.g) / MAX_TILT_DEG, -1, 1);
  tilt.ty = clamp((e.beta - baseline.b) / MAX_TILT_DEG, -1, 1);
  driveLamp(tilt.tx);
  tilt.lastInput = performance.now();
}

function onPointer(e) {
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

function pull() {
  const now = performance.now();
  tugAnimation?.cancel();
  tugAnimation = chain.querySelector(".pull").animate([
    { transform: "translateY(0)" }, { transform: "translateY(14px)", offset: 0.3 },
    { transform: "translateY(-3px)", offset: 0.65 }, { transform: "translateY(0)" },
  ], { duration: 450, easing: "ease-out" });
  if (revealStart === null) {
    revealStart = now;
    neonOn = true;
    bulbOn = true;
    bulbChange = { start: now + BULB_DELAY, keys: BULB_ON, before: 0 };
    chain.classList.add("pulled");
    if (swing) Motion.nudge(swing, 0.35);
    setupMotion(true);
  } else {
    const before = neonLevelAt(now);
    neonOn = !neonOn;
    neonChange = { start: now, before, keys: neonOn ? FLICK_ON : FLICK_OFF };
    glitch = null;
    nextGlitchAt = Infinity;
  }
  chain.setAttribute("aria-label", neonOn ? "Pull the chain to turn off the neon" : "Pull the chain to turn on the neon");
  chain.setAttribute("aria-pressed", String(neonOn));
}

function tapScene(e) {
  if (revealStart === null) { pull(); return; }
  if (bulbScreen && Math.hypot(e.clientX - bulbScreen[0], e.clientY - bulbScreen[1]) <= 60) {
    toggleBulb();
    return;
  }
  if (characterScreen && Math.hypot(e.clientX - characterScreen[0], e.clientY - characterScreen[1]) <= characterScreen[2]) {
    nod();
    return;
  }
  if (!neonOn) return;
  const { width: W, height: H, hotspots } = scene.m;
  const nx = (2 * e.clientX / innerWidth - 1) / cover[0];
  const ny = (1 - 2 * e.clientY / innerHeight - lift) / cover[1];
  const x = (nx + 1) / 2 * W, y = (1 - ny) / 2 * H;
  for (const name of ["sign", "floor"]) {
    const r = hotspots[name];
    if (x >= r[0] && x <= r[0] + r[2] && y >= r[1] && y <= r[1] + r[3]) {
      glitch = { groups: name === "sign" ? ["heading", "title", "prefix"] : ["floor"],
                 keys: STUTTER, start: performance.now() };
      return;
    }
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
let proj = null;
let cover = [1, 1];
let lift = LIFT;
let dprCap = 2;
let slowFrames = 0;
let lastFrame = 0;

function resize() {
  const cw = innerWidth, ch = innerHeight;
  const dpr = Math.min(devicePixelRatio || 1, dprCap);
  canvas.width = Math.round(cw * dpr);
  canvas.height = Math.round(ch * dpr);
  gl.viewport(0, 0, canvas.width, canvas.height);

  // Fill the screen, then zoom out and shift only as much as it takes to keep the heading
  // below the notch and the date above the RSVP button. Very short screens get thin side bars.
  const { width: W, height: H, keep: [top, bottom] } = scene.m;
  const minY = document.getElementById("safe-top").getBoundingClientRect().height + TOP_MARGIN;
  const maxY = rsvp.getBoundingClientRect().top - DATE_GAP;
  const k = Math.max(Math.min(Math.max(cw / W, ch / H) * ZOOM, (maxY - minY) / (bottom - top)), (cw / W) * 0.8);
  const rowY = row => ch / 2 + (row - H / 2) * k;
  const lo = rowY(bottom) - maxY, hi = rowY(top) - minY;
  lift = (lo > hi ? lo : clamp(LIFT * ch / 2, lo, hi)) / (ch / 2);
  cover = [(k * W) / cw, (k * H) / ch];

  gl.useProgram(scenePass.p);
  gl.uniform2f(u.uResolution, canvas.width, canvas.height);
  gl.uniform2fv(u.uCover, cover);
  gl.uniform1f(u.uLift, lift);
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
  const angle = Motion.step(swing, dt);
  const character = scene.m.motion.character;
  nodAngle = Motion.sample(character.nod, character.fps, (now - nodStart) / 1000);
  const lit = !!(swing && swing.ready);

  const eye = [tilt.x * EYE_TRAVEL[0], -tilt.y * EYE_TRAVEL[1], 0];
  const viewProj = mul(proj, lookAt(eye, [0, 0, -scene.m.focus]));
  const head = rotateAround(character.hit, character.pivot, character.axis, nodAngle);
  const center = toCanvas(viewProj, head);
  const side = toCanvas(viewProj, [head[0] + character.radius, head[1], head[2]]);
  characterScreen = [center[0] * innerWidth / canvas.width,
                     innerHeight - center[1] * innerHeight / canvas.height,
                     Math.abs(side[0] - center[0]) * innerWidth / canvas.width];
  const power = updateNeon(now);
  const bulb = 1 + Math.sin(now / 170) * 0.012 + Math.sin(now / 47) * 0.008;
  const bulbLevel = bulbLevelAt(now);
  if (sw) {
    const [bx, by] = toCanvas(viewProj, rotateAround(sw.bulb, sw.pivot, sw.axis, angle));
    bulbScreen = [bx * innerWidth / canvas.width, innerHeight - by * innerHeight / canvas.height];
  }

  gl.useProgram(scenePass.p);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  gl.uniformMatrix4fv(u.uViewProj, false, viewProj);
  gl.uniform4f(u.uLevels, levels.heading, levels.title, levels.prefix, levels.floor);
  gl.uniform1f(u.uPower, power * bulb * (DARK + (1 - DARK) * bulbLevel));
  gl.uniform1f(u.uTime, now / 1000);
  if (swing) {
    gl.activeTexture(gl.TEXTURE6);
    gl.bindTexture(gl.TEXTURE_2D_ARRAY, swing.tex);
    gl.uniform3fv(u.uLightBlend, Motion.blend(scene.m.motion.lighting.angles, angle));
    gl.uniform1f(u.uLightReference, scene.m.motion.lighting.reference);
  }

  gl.clear(gl.COLOR_BUFFER_BIT);
  for (const L of scene.layers) {
    gl.uniform4f(u.uRect, ...L.rect);
    gl.uniform1f(u.uStep, L.step);
    gl.uniform4fv(u.uGlowRect, L.glowRects);
    gl.uniform1f(u.uGrain, L.name === "room" ? 1 : 0);
    gl.uniform1f(u.uAngle, L.name === "lamp" ? angle : 0);
    gl.uniform1f(u.uNod, L.name === "chars" ? nodAngle : 0);
    gl.uniform1f(u.uUseLight, lit && L.lightRect ? 1 : 0);
    if (L.lightRect) gl.uniform4fv(u.uLightRect, L.lightRect);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, L.base);
    L.glows.forEach((t, i) => {
      gl.activeTexture(gl.TEXTURE1 + i);
      gl.bindTexture(gl.TEXTURE_2D, t);
    });
    gl.activeTexture(gl.TEXTURE5);
    gl.bindTexture(gl.TEXTURE_2D, L.depth);
    gl.bindVertexArray(L.mesh.vao);
    gl.drawElements(gl.TRIANGLES, L.mesh.count, gl.UNSIGNED_INT, 0);
  }

  if (sw && bulbLevel > 0) {
    // The glow is invisible beyond ~0.3 screen heights, so only shade that square.
    const [bx, by] = toCanvas(viewProj, rotateAround(sw.bulb, sw.pivot, sw.axis, angle));
    const r = canvas.height * 0.3;
    gl.useProgram(haloPass.p);
    gl.blendFunc(gl.ONE, gl.ONE);
    gl.enable(gl.SCISSOR_TEST);
    gl.scissor(Math.floor(bx - r), Math.floor(by - r), Math.ceil(2 * r), Math.ceil(2 * r));
    gl.uniform2f(haloPass.u.uCenter, bx, by);
    gl.uniform1f(haloPass.u.uSize, canvas.height);
    gl.uniform3fv(haloPass.u.uColor, BULB_COLOR.map(c => c * power * bulb * bulbLevel));
    gl.bindVertexArray(haloVao);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.disable(gl.SCISSOR_TEST);
  }
  if (scene.m.chain) placeChain(viewProj);
  requestAnimationFrame(frame);
}

async function main() {
  scene = await loadScene();
  proj = perspective(scene.m.tanX, scene.m.tanY, 0.1, 50);
  swing = await setupSwing(scene.m.motion.lighting);
  rsvp.href = PARTIFUL_URL;
  rsvp.hidden = false;

  resize();
  addEventListener("resize", resize);
  requestAnimationFrame(frame);
  loadingEl.remove();
  chain.hidden = !scene.m.chain;
  chain.addEventListener("click", pull);
  let pointerStart = null, dragged = false;
  canvas.addEventListener("pointerdown", e => {
    pointerStart = [e.clientX, e.clientY];
    dragged = false;
  });
  canvas.addEventListener("pointermove", e => {
    if (pointerStart && Math.hypot(e.clientX - pointerStart[0], e.clientY - pointerStart[1]) > 10) dragged = true;
  });
  canvas.addEventListener("pointercancel", () => { pointerStart = null; dragged = true; });
  canvas.addEventListener("click", e => {
    if (!dragged) tapScene(e);
    pointerStart = null;
  });
  addEventListener("visibilitychange", () => { lastFrame = 0; if (swing) swing.input = null; });
  setupMotion(false);
}

main().catch(err => {
  loadingEl.textContent = "the lights won't turn on — try reloading";
  console.error(err);
});
