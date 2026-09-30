// Headless check: serves public/ on a fake https origin via CDP, emulates a phone,
// waits for load, and screenshots the reveal and tilt. Usage: node tools/snap.mjs [outDir]
import { spawn } from "node:child_process";
import { readFileSync, mkdirSync, writeFileSync, existsSync, mkdtempSync, rmSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const OUT = process.argv[2] || "/tmp/scare-bear-snaps";
const ORIGIN = "https://scarebear.test";
mkdirSync(OUT, { recursive: true });

const PROFILE = mkdtempSync("/tmp/scare-bear-chrome-");
const failures = [];
const checks = [];
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".jpg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".mp4": "video/mp4" };
const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
  "--headless=new", "--remote-debugging-pipe", "--no-first-run", "--no-default-browser-check",
  "--use-angle=swiftshader", "--enable-unsafe-swiftshader", `--user-data-dir=${PROFILE}`,
  "about:blank",
], { stdio: ["ignore", "ignore", "pipe", "pipe", "pipe"] });
const chromeLog = [];
chrome.stderr.on("data", d => chromeLog.push(d.toString()));
chrome.on("exit", c => console.log("chrome exited", c));

const toChrome = chrome.stdio[3], fromChrome = chrome.stdio[4];
let nextId = 1, buf = "";
const pending = new Map(), listeners = [];
fromChrome.on("data", d => {
  buf += d.toString();
  let i;
  while ((i = buf.indexOf("\0")) >= 0) {
    const msg = JSON.parse(buf.slice(0, i));
    buf = buf.slice(i + 1);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    } else listeners.forEach(l => l(msg));
  }
});
function send(method, params = {}, sessionId) {
  const id = nextId++;
  toChrome.write(JSON.stringify({ id, method, params, sessionId }) + "\0");
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

const { targetId } = await send("Target.createTarget", { url: "about:blank" });
const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
const S = (m, p) => send(m, p, sessionId);

listeners.push(async msg => {
  if (msg.sessionId !== sessionId) return;
  if (msg.method === "Fetch.requestPaused") {
    const url = new URL(msg.params.request.url);
    const file = join(ROOT, url.pathname === "/" ? "index.html" : url.pathname);
    if (url.origin === ORIGIN && existsSync(file)) {
      await S("Fetch.fulfillRequest", {
        requestId: msg.params.requestId, responseCode: 200,
        responseHeaders: [{ name: "Content-Type", value: MIME[extname(file)] || "application/octet-stream" }],
        body: readFileSync(file).toString("base64"),
      });
    } else {
      await S("Fetch.fulfillRequest", { requestId: msg.params.requestId, responseCode: 404, body: "" });
    }
  }
  if (msg.method === "Runtime.consoleAPICalled") console.log("console:", msg.params.args.map(a => a.value ?? a.description).join(" "));
  if (msg.method === "Runtime.exceptionThrown") failures.push(JSON.stringify(msg.params.exceptionDetails).slice(0, 600));
});

await S("Fetch.enable", { patterns: [{ urlPattern: `${ORIGIN}/*` }] });
await S("Runtime.enable");
await S("Page.enable");
const [VW, VH] = (process.env.VIEWPORT || "393x852").split("x").map(Number);
await S("Emulation.setDeviceMetricsOverride", { width: VW, height: VH, deviceScaleFactor: 2, mobile: true });
await S("Emulation.setTouchEmulationEnabled", { enabled: true });
await S("Page.navigate", { url: ORIGIN + "/" });

async function snap(name) {
  const { data } = await S("Page.captureScreenshot", { format: "png" });
  writeFileSync(join(OUT, name + ".png"), Buffer.from(data, "base64"));
  console.log("snap", name);
}
async function evalJs(expr) {
  const r = await S("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true });
  if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails));
  return r.result.value;
}

function check(name, passed, detail = null) {
  checks.push({ name, passed, detail });
  if (!passed) failures.push(name);
  console.log(passed ? "PASS" : "FAIL", name, detail ?? "");
}
async function tap(x, y) {
  await S("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x, y }] });
  await S("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
}
async function drag(x, y, dx, dy, held, cancel = false) {
  await S("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x, y }] });
  for (let i = 1; i <= 5; i++) {
    await S("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [{ x: x + dx * i / 5, y: y + dy * i / 5 }] });
  }
  await sleep(100);
  if (held) await held();
  await S("Input.dispatchTouchEvent", { type: cancel ? "touchCancel" : "touchEnd", touchPoints: [] });
  await sleep(400);
}
async function lampPoint() {
  return evalJs("[bulbScreen[0], Math.max(signScreen[3] + 8, bulbScreen[1] - 18)]");
}
async function pullChain() {
  const [x, y] = await evalJs("(() => { const r = chain.querySelector('.bead').getBoundingClientRect(); return [r.x + r.width / 2, r.y + r.height / 2]; })()");
  await tap(x, y);
}
async function neutral() {
  await evalJs("Object.assign(tilt, {x: 0, y: 0, tx: 0, ty: 0, lastInput: performance.now()})");
  await sleep(100);
}
async function uncovered() {
  return evalJs(`new Promise(resolve => requestAnimationFrame(() => {
    const pixels = new Uint8Array(canvas.width * canvas.height * 4);
    gl.readPixels(0, 0, canvas.width, canvas.height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    let count = 0;
    for (let i = 0; i < pixels.length; i += 4) if (pixels[i] > 240 && pixels[i + 1] < 15 && pixels[i + 2] > 240) count++;
    resolve(count);
  }))`);
}
try {
  for (let i = 0; i < 120 && (await evalJs("!!document.getElementById('loading')")); i++) await sleep(250);
  check("scene loaded", await evalJs("!!scene && !document.getElementById('loading')"));
  if (process.env.MAGENTA) await evalJs("gl.clearColor(1, 0, 1, 1)");
  await snap("0-dark");
  await pullChain();
  check("first pull starts neon with bulb delayed", await evalJs("revealStart !== null && neonOn && bulbLevelAt(revealStart + 1500) === 0"));
  await sleep(1000);
  await snap("1-neon-only");
  await sleep(1400);
  await snap("2-bulb-reveal");
  await sleep(4000);
  await neutral();
  await snap("3-revealed");
  check("RSVP appears", await evalJs("rsvp.classList.contains('on')"));
  check("angle-addressable lighting loaded", await evalJs("swing.ready && scene.m.motion.lighting.files.length === 18"));
  check("date clears RSVP", await evalJs(`(() => {
    const y = (1 - ((1 - 2 * scene.m.keep[1] / scene.m.height) * cover[1] + lift)) / 2 * innerHeight;
    return rsvp.getBoundingClientRect().top - y >= DATE_GAP - 0.5;
  })()`));
  // Keep tilt fixed while the lamp swings, then check the chain does not follow it.
  const chainBefore = await evalJs("chain.style.transform");
  await sleep(600);
  check("chain stays on sign as lamp swings", chainBefore === await evalJs("chain.style.transform"));
  const bulb = await evalJs("bulbScreen");
  await tap(...bulb);
  await sleep(350);
  check("bulb tap turns light off", await evalJs("!bulbOn && bulbLevelAt(performance.now()) === 0"));
  await snap("4-bulb-off");
  await tap(...await evalJs("bulbScreen"));
  await sleep(400);
  check("bulb tap turns light on", await evalJs("bulbOn && bulbLevelAt(performance.now()) === 1"));
  await pullChain();
  await sleep(350);
  check("second pull turns neon off", await evalJs("!neonOn && Object.values(levels).every(v => v === 0)"));
  await snap("5-neon-off");
  await pullChain();
  await sleep(400);
  check("third pull turns neon on", await evalJs("neonOn && Object.values(levels).every(v => v === 1)"));
  await neutral();
  const tiltBeforePull = await evalJs("[tilt.tx, tilt.ty]");
  await drag(...await lampPoint(), 0, 55, async () => {
    check("lamp cord is captured during pull", await evalJs("gesture?.kind === 'lamp'"));
    check("lamp follows downward pull", await evalJs("lampPull > 12"));
    check("bulb waits for release", await evalJs("bulbOn"));
    check("pull leaves camera still", JSON.stringify(tiltBeforePull) === JSON.stringify(await evalJs("[tilt.tx, tilt.ty]")));
    await snap("9-lamp-pull-held");
  });
  check("cord pull toggles bulb exactly once", await evalJs("!bulbOn && neonOn && !gesture"));
  check("pull suppression does not block RSVP", await evalJs(`(() => {
    let reached = false;
    rsvp.addEventListener('click', e => { reached = true; e.preventDefault(); }, {once: true});
    suppressClickUntil = performance.now() + 500;
    rsvp.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, detail: 1}));
    return reached;
  })()`));
  check("lamp returns after release", await evalJs("lampPull < 0.5"));
  await drag(...await lampPoint(), 65, 4);
  check("sideways lamp drag does not toggle", await evalJs("!bulbOn"));
  await drag(...await lampPoint(), 0, 16);
  check("short lamp pull does not toggle", await evalJs("!bulbOn"));
  await drag(...await lampPoint(), 0, 55, null, true);
  check("cancelled lamp pull does not toggle", await evalJs("!bulbOn && !gesture && lampPull < 0.5"));
  await drag(...await lampPoint(), 0, 55, async () => {
    await evalJs("dispatchEvent(new Event('blur'))");
    check("interrupted pull cancels without toggling", await evalJs("!gesture && !bulbOn"));
  }, true);
  await drag(...await lampPoint(), 0, 55);
  check("second lamp pull turns bulb on", await evalJs("bulbOn"));
  const chainPoint = await evalJs("(() => { const r = chain.querySelector('.bead').getBoundingClientRect(); return [r.x+r.width/2,r.y+r.height/2]; })()");
  await drag(...chainPoint, 0, 55, async () => {
    check("chain follows downward pull", await evalJs("gesture?.kind === 'chain' && chain.querySelector('.pull').style.transform === 'translateY(24px)'"));
    await snap("10-chain-pull-held");
  });
  check("chain drag toggles neon exactly once", await evalJs("!neonOn && bulbOn"));
  await pullChain();
  await sleep(400);
  check("chain tap still works after drag", await evalJs("neonOn"));
  const mouseLamp = await lampPoint();
  await S("Input.dispatchMouseEvent", { type: "mousePressed", x: mouseLamp[0], y: mouseLamp[1], button: "left", buttons: 1, clickCount: 1 });
  await S("Input.dispatchMouseEvent", { type: "mouseMoved", x: mouseLamp[0], y: mouseLamp[1] + 55, button: "left", buttons: 1 });
  await S("Input.dispatchMouseEvent", { type: "mouseReleased", x: mouseLamp[0], y: mouseLamp[1] + 55, button: "left", buttons: 0, clickCount: 1 });
  await sleep(400);
  check("mouse cord drag toggles once", await evalJs("!bulbOn"));
  await tap(...await evalJs("bulbScreen"));
  await sleep(400);
  check("bulb tap still works after drag", await evalJs("bulbOn"));
  for (const name of ["sign", "floor"]) {
    await neutral();
    const [x, y] = await evalJs(`(() => {
      const r = scene.m.hotspots['${name}'];
      return [((2 * (r[0] + r[2] * 0.5) / scene.m.width - 1) * cover[0] + 1) / 2 * innerWidth,
              (1 - ((1 - 2 * (r[1] + r[3] * 0.4) / scene.m.height) * cover[1] + lift)) / 2 * innerHeight];
    })()`);
    await tap(x, y);
    check(`${name} tap starts local flicker`, await evalJs(`glitch?.groups.join(',') === '${name === "sign" ? "heading,title,prefix" : "floor"}'`));
    await sleep(300);
  }
  await neutral();
  await evalJs("swing.input = 0; swing.angle = 0; swing.velocity = 0");
  await evalJs("baseline = {g: 0, b: 45}; onOrientation({gamma: -20, beta: 45})");
  check("phone movement pushes lamp", await evalJs("swing.velocity > 0.2"));
  await sleep(350);
  check("lamp responds to push", await evalJs("swing.angle > 0.03"));
  await neutral();
  const head = await evalJs("characterScreen.slice(0,2)");
  await tap(...head);
  check("tap Nick starts Blender nod", await evalJs("performance.now() - nodStart < 500"));
  check("head moves during reaction", await evalJs(`new Promise(resolve => {
    let max = 0; const until = performance.now() + 900;
    function observe(now) {
      max = Math.max(max, Math.abs(nodAngle));
      if (now >= until) resolve(max > 0.015); else requestAnimationFrame(observe);
    }
    requestAnimationFrame(observe);
  })`));
  await snap("8-nick-nod");
  await sleep(1200);
  check("head returns to rest", await evalJs("nodAngle === 0"));
  await tap(...await evalJs("characterScreen.slice(0,2)"));
  check("character reaction replays", await evalJs("performance.now() - nodStart < 500"));
  await sleep(1200);
  for (const [name, x, y] of [["left", -1, 0], ["right", 1, 0], ["up", 0, -1], ["down", 0, 1],
                             ["top-left", -1, -1], ["top-right", 1, -1], ["bottom-left", -1, 1], ["bottom-right", 1, 1]]) {
    await evalJs(`baseline = {g: 0, b: 45}; onOrientation({gamma: ${-x * 30}, beta: ${45 + y * 30}})`);
    await sleep(350);
    if (process.env.MAGENTA) {
      const count = await uncovered();
      check(`no exposed background: ${name}`, count === 0, { magentaPixels: count });
    }
    await snap(`6-tilt-${name}`);
  }
  check("WebGL has no errors", await evalJs("gl.getError() === gl.NO_ERROR"));
  await neutral();
  await snap("7-final");
  if (process.env.MOTION_CLIP) {
    await evalJs("window.savedSample = Motion.sample; window.savedStep = Motion.step; window.clipNod = 0; window.clipAngle = 0; Motion.sample = () => window.clipNod; Motion.step = () => window.clipAngle; nextGlitchAt = performance.now() + 60000; glitch = null");
    for (let i = 0; i < 24; i++) {
      await evalJs(`window.clipNod = window.savedSample(scene.m.motion.character.nod, 60, ${i / 12}); window.clipAngle = 0.28 * Math.exp(-${i / 12} * 0.7) * Math.sin(${i / 12} * 2.1); Object.assign(tilt, {x:0,y:0,tx:0,ty:0,lastInput:performance.now()})`);
      await sleep(40);
      await snap(`motion-${String(i).padStart(2, "0")}`);
    }
    await evalJs("Motion.sample = window.savedSample; Motion.step = window.savedStep");
  }
  // A fresh load exercises the alternative first-tap path.
  await S("Page.reload");
  for (let i = 0; i < 120; i++) {
    await sleep(250);
    if (await evalJs("typeof scene !== 'undefined' && !!scene && !document.getElementById('loading')")) break;
  }
  await tap(VW * 0.2, VH * 0.7);
  check("first tap anywhere starts reveal", await evalJs("revealStart !== null && neonOn"));
  await S("Page.reload");
  for (let i = 0; i < 120; i++) {
    await sleep(250);
    if (await evalJs("typeof scene !== 'undefined' && !!scene && !document.getElementById('loading')")) break;
  }
  await sleep(100);
  await drag(...await lampPoint(), 0, 55);
  check("first cord drag starts reveal", await evalJs("revealStart !== null && neonOn && bulbOn"));
} catch (err) {
  failures.push(err.stack);
} finally {
  writeFileSync(join(OUT, "chrome.log"), chromeLog.join(""));
  writeFileSync(join(OUT, "results.json"), JSON.stringify({ viewport: [VW, VH], checks, failures }, null, 2));
  console.log(JSON.stringify({ failures }));
  chrome.kill();
  await new Promise(resolve => chrome.once("exit", resolve));
  rmSync(PROFILE, { recursive: true, force: true });
}
process.exit(failures.length ? 1 : 0);
