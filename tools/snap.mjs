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
let failOptionalAssets = false;
let failHeadMaskOnly = false;
let failHeadMeshOnly = false;
let blockedOptionalAssets = 0;
const blockedAssetPaths = new Set();
const HEAD_MESH_BINARY = "/assets/head-mesh-packed.bin.gz";
const HEAD_READY = "!!headDrop && !!headMask && !!headMesh && !!otherHeadScreen && !!otherBodyScreen";
const HEAD_REST = "!headDrop.active && headDrop.translation.every(v => v === 0) && headDrop.rotation.every((v,i) => v === (i === 3 ? 1 : 0)) && headDrop.angle === 0 && headDrop.alpha === 1";
const MIME = { ".gz": "application/gzip", ".json": "application/json", ".bin": "application/octet-stream", ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".jpg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".mp4": "video/mp4" };
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
    if (url.origin === ORIGIN && ((failOptionalAssets && /^\/assets\/(spider\.(json|webp)|lamp-mesh\.json|head-drop-physics\.json|head-mask\.png|head-mesh(-packed)?\.(json|bin(\.gz)?)|head-(color|light)\.(png|webp))$/.test(url.pathname)) ||
        (failHeadMaskOnly && url.pathname === "/assets/head-mask.png") ||
        (failHeadMeshOnly && url.pathname === HEAD_MESH_BINARY))) {
      blockedOptionalAssets++;
      blockedAssetPaths.add(url.pathname);
      await S("Fetch.fulfillRequest", { requestId: msg.params.requestId, responseCode: 404, body: "" });
    } else if (url.origin === ORIGIN && existsSync(file)) {
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

async function waitFor(expr, timeout = 1500) {
  const until = Date.now() + timeout;
  while (Date.now() < until) {
    if (await evalJs(expr)) return true;
    await sleep(100);
  }
  return false;
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
async function parkSpider() {
  // Advance the prop's own timestamps, then let the real frame project its hit area.
  await evalJs(`(() => {
    const now = performance.now();
    const context = {started: false, bulbLevel: 1, neonLevel: 1, tiltX: 0, tiltY: 0};
    atmosphere.retreat(now);
    atmosphere.update(now + 1000, 0, context);
    atmosphere.startSpider(now - 1500, true);
    atmosphere.update(now, 0, context);
  })()`);
  await sleep(80);
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
  await (async () => {
  for (let i = 0; i < 120 && (await evalJs("!!document.getElementById('loading')")); i++) await sleep(250);
  check("scene loaded", await evalJs("!!scene && !document.getElementById('loading')"));
  check("no atmosphere before initial reveal", await evalJs("!!atmosphere && atmosphere.burstCount === 0 && atmosphere.particles.every(p => p.age >= p.life) && atmosphere.spider.phase === 'hidden'"));
  if (process.env.MAGENTA) await evalJs("gl.clearColor(1, 0, 1, 1)");
  await snap("0-dark");
  await pullChain();
  check("first pull starts neon with bulb delayed", await evalJs("revealStart !== null && neonOn && bulbLevelAt(revealStart + 1500) === 0"));
  await sleep(1000);
  check("initial dust waits for bulb lighting", await evalJs("atmosphere.burstCount === 0"));
  await snap("1-neon-only");
  await sleep(1400);
  check("initial dust appears after bulb delay", await evalJs("atmosphere.burstCount === 1 && atmosphere.particles.some(p => !p.ambient && p.age < p.life)"));
  await snap("2-bulb-reveal");
  await sleep(4000);
  await neutral();
  await snap("3-revealed");
  if (process.env.HEAD_LIGHT_COMPARE) {
    check("head lighting comparison assets loaded", await waitFor(HEAD_READY, 10000));
    await evalJs(`(() => {
      window.headCompareSaved = { frame, headUpdate:headDrop.update, motionStep:Motion.step, dprCap };
      window.headCompareNow = performance.now();
      // Freeze the scene frame's timestamp, including bulb pulses and grain,
      // while ordinary animation-frame callbacks still service screenshots.
      frame = () => { lastFrame = window.headCompareNow; return window.headCompareSaved.frame(window.headCompareNow); };
      dprCap = 2; slowFrames = 0; resize();
      nextGlitchAt = window.headCompareNow + 1e9; glitch = null;
      Object.assign(tilt,{x:0,y:0,tx:0,ty:0,lastInput:Infinity});
      Motion.step = () => { slowFrames = 0; return 0; };
      swing.angle = 0; swing.velocity = 0; nodStart = -Infinity;
      atmosphere.setReduced(true);
      headDrop.reset(); headDrop.reduced = false;
      headDrop.update = () => {};
    })()`);
    await evalJs("new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))");
    await snap("head-light-before");
    const comparisonSetup = await evalJs(`new Promise(resolve => requestAnimationFrame(() => {
      const [cx,cy,radius] = otherHeadScreen;
      const scaleX = canvas.width/innerWidth, scaleY = canvas.height/innerHeight;
      const half = radius*0.65;
      const x = Math.max(0,Math.floor((cx-half)*scaleX));
      const y = Math.max(0,Math.floor(canvas.height-(cy+half)*scaleY));
      const width = Math.min(canvas.width-x,Math.ceil(half*2*scaleX));
      const height = Math.min(canvas.height-y,Math.ceil(half*2*scaleY));
      const pixels = new Uint8Array(width*height*4);
      gl.readPixels(x,y,width,height,gl.RGBA,gl.UNSIGNED_BYTE,pixels);
      window.headLightComparison = {roi:{x,y,width,height},pixels};
      resolve({
        frozenTimeMs:window.headCompareNow, roiCanvas:{x,y,width,height},
        roiCss:{x:cx-half,y:cy-half,width:half*2,height:half*2},
        quality:{devicePixelRatio,dprCap,canvasWidth:canvas.width,canvasHeight:canvas.height},
        meshTranslation:[0.00001,0,0], meshRotation:[0,0,0,1],
      });
    }))`);
    check("original head comparison frame has no WebGL errors", await evalJs("gl.getError() === gl.NO_ERROR"));
    await evalJs(`(() => {
      headDrop.active = true;
      headDrop.translation.splice(0,3,0.00001,0,0);
      headDrop.rotation.splice(0,4,0,0,0,1);
      headDrop.alpha = 1;
    })()`);
    await evalJs("new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))");
    await snap("head-light-after");
    const comparison = await evalJs(`new Promise(resolve => requestAnimationFrame(() => {
      const {roi,pixels:before} = window.headLightComparison;
      const after = new Uint8Array(before.length);
      gl.readPixels(roi.x,roi.y,roi.width,roi.height,gl.RGBA,gl.UNSIGNED_BYTE,after);
      const beforeMean = [0,0,0], afterMean = [0,0,0], absolute = [0,0,0], signed = [0,0,0];
      let maximumAbsoluteChannelDifference = 0;
      const pixelCount = before.length/4;
      for (let i=0;i<before.length;i+=4) for (let c=0;c<3;c++) {
        const difference = after[i+c]-before[i+c];
        beforeMean[c] += before[i+c]; afterMean[c] += after[i+c];
        absolute[c] += Math.abs(difference); signed[c] += difference;
        maximumAbsoluteChannelDifference = Math.max(maximumAbsoluteChannelDifference,Math.abs(difference));
      }
      const mean = values => values.map(v=>v/pixelCount);
      resolve({pixelCount, beforeMeanRgb:mean(beforeMean), afterMeanRgb:mean(afterMean),
        meanAbsoluteRgbDifference:mean(absolute), meanSignedRgbDifference:mean(signed),
        meanAbsoluteChannelDifference:absolute.reduce((sum,v)=>sum+v,0)/(pixelCount*3),
        maximumAbsoluteChannelDifference});
    }))`);
    console.log("head lighting comparison", JSON.stringify(comparison));
    writeFileSync(join(OUT,"head-light-compare.json"),JSON.stringify({...comparisonSetup,...comparison},null,2));
    check("comparison holds full capture resolution", await evalJs("dprCap === 2 && canvas.width === Math.round(innerWidth*Math.min(devicePixelRatio,2))"));
    check("mesh head comparison frame has no WebGL errors", await evalJs("gl.getError() === gl.NO_ERROR"));
    await evalJs(`(() => {
      window.headCompareSaved.bulbLevelAt = bulbLevelAt;
      window.headCompareBulbLevel = 1;
      window.headCompareLampAngle = 0;
      bulbLevelAt = () => window.headCompareBulbLevel;
      Motion.step = () => {
        slowFrames = 0;
        swing.angle = window.headCompareLampAngle;
        return window.headCompareLampAngle;
      };
      headDrop.reset(); headDrop.play(0);
      window.headCompareSaved.headUpdate.call(headDrop,800);
      window.headCompareRollPose = {translation:[...headDrop.translation],rotation:[...headDrop.rotation],alpha:headDrop.alpha};
      window.headCompareRollSamples = {};
      window.headCompareRollRoi = null;
    })()`);
    const rollSamples = [];
    for (const [name,angle,bulbLevel] of [["left",-0.4,1],["right",0.4,1],["on",0,1],["off",0,0]]) {
      await evalJs(`window.headCompareLampAngle = ${angle}; window.headCompareBulbLevel = ${bulbLevel}`);
      await evalJs("new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))");
      await snap(`head-light-roll-${name}`);
      const sample = await evalJs(`new Promise(resolve => requestAnimationFrame(() => {
        if (!window.headCompareRollRoi) {
          const [cx,cy,radius] = otherHeadScreen;
          const scaleX = canvas.width/innerWidth, scaleY = canvas.height/innerHeight;
          // A small central region stays inside the solid head across all
          // lighting states; background illumination must not pass this check.
          const half = radius*0.4;
          const x = Math.max(0,Math.floor((cx-half)*scaleX));
          const y = Math.max(0,Math.floor(canvas.height-(cy+half)*scaleY));
          const width = Math.min(canvas.width-x,Math.ceil(half*2*scaleX));
          const height = Math.min(canvas.height-y,Math.ceil(half*2*scaleY));
          window.headCompareRollRoi = {x,y,width,height};
        }
        const roi = window.headCompareRollRoi;
        const pixels = new Uint8Array(roi.width*roi.height*4);
        gl.readPixels(roi.x,roi.y,roi.width,roi.height,gl.RGBA,gl.UNSIGNED_BYTE,pixels);
        window.headCompareRollSamples[${JSON.stringify(name)}] = pixels;
        const meanRgb = [0,0,0];
        for (let i=0;i<pixels.length;i+=4) for (let c=0;c<3;c++) meanRgb[c] += pixels[i+c];
        for (let c=0;c<3;c++) meanRgb[c] /= pixels.length/4;
        resolve({name:${JSON.stringify(name)},lampAngle:${angle},bulbLevel:${bulbLevel},roiCanvas:roi,meanRgb,
          meanLuma:meanRgb[0]*0.2126+meanRgb[1]*0.7152+meanRgb[2]*0.0722});
      }))`);
      rollSamples.push(sample);
    }
    const rollDifferences = await evalJs(`(() => {
      const difference = (aName,bName) => {
        const a = window.headCompareRollSamples[aName], b = window.headCompareRollSamples[bName];
        const absolute = [0,0,0], signed = [0,0,0];
        let maximumAbsoluteChannelDifference = 0;
        for (let i=0;i<a.length;i+=4) for (let c=0;c<3;c++) {
          const d = b[i+c]-a[i+c];
          absolute[c] += Math.abs(d); signed[c] += d;
          maximumAbsoluteChannelDifference = Math.max(maximumAbsoluteChannelDifference,Math.abs(d));
        }
        return {from:aName,to:bName,meanAbsoluteRgbDifference:absolute.map(v=>v/(a.length/4)),
          meanSignedRgbDifference:signed.map(v=>v/(a.length/4)),
          meanAbsoluteChannelDifference:absolute.reduce((sum,v)=>sum+v,0)/(a.length/4*3),maximumAbsoluteChannelDifference};
      };
      return {leftToRight:difference('left','right'),onToOff:difference('on','off'),
        pose:window.headCompareRollPose,
        poseUnchanged:headDrop.translation.every((v,i)=>v===window.headCompareRollPose.translation[i])
          && headDrop.rotation.every((v,i)=>v===window.headCompareRollPose.rotation[i]) && headDrop.alpha===window.headCompareRollPose.alpha};
    })()`);
    console.log("head midroll lighting response",JSON.stringify({samples:rollSamples,...rollDifferences}));
    writeFileSync(join(OUT,"head-light-roll-compare.json"),JSON.stringify({poseSeconds:0.8,samples:rollSamples,...rollDifferences},null,2));
    check("head lighting comparison holds the same midroll pose",rollDifferences.poseUnchanged);
    check("rolling head shading responds to lamp swing",rollDifferences.leftToRight.meanAbsoluteChannelDifference > 0.05,rollDifferences.leftToRight);
    check("rolling head shading responds to bulb power",rollDifferences.onToOff.meanAbsoluteChannelDifference > 0.05,rollDifferences.onToOff);
    check("midroll lighting captures leave no WebGL errors",await evalJs("gl.getError() === gl.NO_ERROR"));
    await evalJs(`(() => {
      frame = window.headCompareSaved.frame;
      headDrop.update = window.headCompareSaved.headUpdate;
      Motion.step = window.headCompareSaved.motionStep;
      bulbLevelAt = window.headCompareSaved.bulbLevelAt;
      dprCap = window.headCompareSaved.dprCap;
      headDrop.reset(); slowFrames = 0; resize();
    })()`);
    return;
  }
  if (process.env.HEAD_CLIP) {
    check("Blender head physics, mask, and 3D mesh loaded", await waitFor(HEAD_READY, 10000));
    await tap(...await evalJs("otherBodyScreen.slice(0,2)"));
    check("Noah body tap starts head reaction", await evalJs("headDrop.active"));
    await evalJs(`(() => {
      window.headClipSeconds = 0;
      window.savedHeadUpdate = headDrop.update;
      window.savedHeadStep = Motion.step;
      window.headClipQualityBefore = { dprCap, canvasWidth: canvas.width, canvasHeight: canvas.height };
      dprCap = 2;
      slowFrames = 0;
      resize();
      nextGlitchAt = Infinity; glitch = null;
      Object.assign(tilt, {x:0,y:0,tx:0,ty:0,lastInput:Infinity});
      // Reset the adaptive-quality counter every controlled frame. The mesh
      // should not soften merely because software-rendered captures are slow.
      Motion.step = () => { slowFrames = 0; return 0; };
      swing.angle = 0; swing.velocity = 0;
      atmosphere.setReduced(true);
      headDrop.reset(); headDrop.play(0);
      headDrop.update = function() { window.savedHeadUpdate.call(this, window.headClipSeconds * 1000); };
    })()`);
    const clipDuration = await evalJs("headDrop.duration");
    const clipFps = 12;
    const clipFrames = Math.ceil(clipDuration * clipFps);
    const sampleTimes = process.env.HEAD_TIMES
      ? process.env.HEAD_TIMES.split(",").map(Number)
      : Array.from({ length: clipFrames + 1 }, (_, i) => Math.min(clipDuration, i / clipFps));
    if (!sampleTimes.every((time, i) => Number.isFinite(time) && time >= 0 && time <= clipDuration && (!i || time >= sampleTimes[i - 1]))) {
      throw new Error(`HEAD_TIMES must contain ascending seconds from 0 to ${clipDuration}`);
    }
    const clipQuality = await evalJs(`({
      before: window.headClipQualityBefore,
      devicePixelRatio, dprCap, canvasWidth: canvas.width, canvasHeight: canvas.height,
      viewportWidth: innerWidth, viewportHeight: innerHeight,
    })`);
    console.log("head clip quality", JSON.stringify(clipQuality));
    writeFileSync(join(OUT, "head-clip.json"), JSON.stringify({
      fps: process.env.HEAD_TIMES ? null : clipFps, duration: clipDuration, frames: sampleTimes.length, sampleTimes,
      quality: clipQuality,
    }, null, 2));
    for (let i = 0; i < sampleTimes.length; i++) {
      await evalJs(`window.headClipSeconds = ${sampleTimes[i]}`);
      await evalJs("new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))");
      await snap(`head-${String(i).padStart(2, "0")}`);
    }
    if (sampleTimes.at(-1) < clipDuration) {
      await evalJs(`window.headClipSeconds = ${clipDuration}`);
      await evalJs("new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))");
    }
    check("head clip restores original pose", await evalJs(HEAD_REST));
    check("controlled head clip preserves full capture resolution", await evalJs("dprCap === 2 && canvas.width === Math.round(innerWidth * Math.min(devicePixelRatio,2))"));
    check("WebGL has no errors", await evalJs("gl.getError() === gl.NO_ERROR"));
    await evalJs("headDrop.update = window.savedHeadUpdate; Motion.step = window.savedHeadStep; dprCap = window.headClipQualityBefore.dprCap; slowFrames = 0; resize()");
    return;
  }
  if (process.env.VISUAL_ONLY) {
    await evalJs("nextGlitchAt = performance.now() + 60000; glitch = null; atmosphere.startSpider(performance.now(), true)");
    await sleep(1550);
    await snap("11-atmosphere");
    for (const [name, x, y] of [["left", -1, 0], ["right", 1, 0]]) {
      await evalJs(`Object.assign(tilt,{x:${x},tx:${x},y:${y},ty:${y},lastInput:performance.now()})`);
      await sleep(120);
      await snap(`12-volume-${name}`);
    }
    await neutral();
    await tap(...await evalJs("bulbScreen"));
    await sleep(400);
    await snap("13-glass-unlit");
    check("WebGL has no errors", await evalJs("gl.getError() === gl.NO_ERROR"));
    return;
  }
  check("RSVP appears", await evalJs("rsvp.classList.contains('on')"));
  check("angle-addressable lighting loaded", await evalJs("swing.ready && scene.m.motion.lighting.files.length === 18"));
  check("glass lamp and filament geometry loaded", await evalJs("!!lampMesh && lampMesh.parts.some(p => p.glass) && lampMesh.parts.some(p => p.material.emissionStrength > 0) && lampMesh.data.pivot.every((v,i) => Math.abs(v - scene.m.swing.pivot[i]) < 0.000002)"));
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
  check("lamp returns after release", await waitFor("lampPull < 0.5 && !gesture && lampPullTarget === 0"));
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
  check("chain tap still works after drag", await waitFor("neonOn"), await evalJs("({neonOn, gesture: gesture?.kind ?? null, suppression: suppressClickUntil - performance.now()})"));
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
  // The second character consumes its own gestures and restores the exact
  // original image after the one-shot detached-head clip.
  check("Blender head physics, mask, and 3D mesh loaded", await waitFor(HEAD_READY, 10000));
  await neutral();
  await evalJs("nextGlitchAt = Infinity; glitch = null; tilt.lastInput = Infinity");
  const noahLights = await evalJs("[bulbOn, neonOn]");
  const noahBody = await evalJs("otherBodyScreen.slice()");
  const oldNod = await evalJs("nodStart");
  await tap(...noahBody.slice(0, 2));
  await evalJs("tilt.lastInput = Infinity");
  check("whole Noah body tap starts head reaction", await evalJs("headDrop.active && performance.now() - headDrop.start < 500"));
  check("Noah tap leaves lights and Nick alone", await evalJs(`JSON.stringify([bulbOn,neonOn]) === '${JSON.stringify(noahLights)}' && nodStart === ${oldNod}`));
  const dropStart = await evalJs("headDrop.start");
  const dropDuration = await evalJs("headDrop.duration");
  await tap(...await evalJs("otherBodyScreen.slice(0,2)"));
  await evalJs("tilt.lastInput = Infinity");
  check("repeated Noah tap does not restart active clip", await evalJs(`headDrop.active && headDrop.start === ${dropStart}`));
  for (const [seconds, name] of [[.9, "14-head-fall"], [1.8, "15-head-roll"]]) {
    const remaining = await evalJs(`${dropStart} + ${seconds * 1000} - performance.now()`);
    if (remaining > 0) await sleep(remaining);
    await snap(name);
  }
  check("Noah body remains planted during head roll", await evalJs(`otherBodyScreen.every((v,i) => Math.abs(v - ${JSON.stringify(noahBody)}[i]) < .5)`));
  check("head separates and rotates in three dimensions", await evalJs("headDrop.active && Math.hypot(...headDrop.translation) > .5 && Math.hypot(...headDrop.rotation.slice(0,3)) > .1 && Math.abs(Math.hypot(...headDrop.rotation) - 1) < .001"));
  check("Blender clip rotates beyond the camera plane", await evalJs("headDrop.data.frames.some(frame => frame.alpha > .5 && Math.hypot(frame.rotation[0], frame.rotation[1]) > .15)"));
  check("head restores itself after authored duration", await waitFor(HEAD_REST, dropDuration * 1000 + 1000));
  await snap("16-head-return");
  await drag(...await evalJs("otherBodyScreen.slice(0,2)"), 25, 0, async () => {
    check("Noah gesture captures before room motion", await evalJs("gesture?.kind === 'noah'"));
  });
  check("dragging Noah does not detach his head", await evalJs("!headDrop.active && !gesture"));
  await drag(...await evalJs("otherBodyScreen.slice(0,2)"), 0, 0, null, true);
  check("cancelled Noah tap does not detach head", await evalJs("!headDrop.active && !gesture"));
  await tap(...await evalJs("otherHeadScreen.slice(0,2)"));
  check("Noah head tap replays after reset", await evalJs("headDrop.active"));
  await evalJs("dispatchEvent(new Event('blur'))");
  check("blur restores detached head immediately", await evalJs(HEAD_REST));
  await tap(...await evalJs("otherBodyScreen.slice(0,2)"));
  await evalJs(`(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, value: true });
    document.dispatchEvent(new Event('visibilitychange', { bubbles: true }));
    delete document.hidden;
    document.dispatchEvent(new Event('visibilitychange', { bubbles: true }));
  })()`);
  check("hidden-page handler restores detached head", await evalJs(HEAD_REST));
  await tap(...await evalJs("otherBodyScreen.slice(0,2)"));
  await S("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
  await sleep(80);
  check("reduced-motion change cancels active head drop", await evalJs("headDrop.reduced && !headDrop.active && headDrop.translation.every(v => v === 0)"));
  await evalJs(`(() => {
    window.reducedMeshDraws = 0;
    window.savedReducedHeadDraw = headMesh.draw;
    headMesh.draw = function(...args) {
      window.reducedMeshDraws++;
      return window.savedReducedHeadDraw.apply(this,args);
    };
  })()`);
  await tap(...await evalJs("otherBodyScreen.slice(0,2)"));
  check("reduced-motion tap uses attached acknowledgment", await evalJs(`new Promise(resolve => {
    let safe = headDrop.active, moved = false;
    const until = performance.now() + 400;
    function observe(now) {
      safe &&= headDrop.translation.every(v => v === 0) && headDrop.alpha === 1 && Math.abs(headDrop.angle) <= .025;
      moved ||= headDrop.angle > .001;
      if (now >= until) resolve(safe && moved && !headDrop.active); else requestAnimationFrame(observe);
    }
    requestAnimationFrame(observe);
  })`));
  check("reduced-motion acknowledgment keeps original character rendering", await evalJs("window.reducedMeshDraws === 0"));
  await evalJs("headMesh.draw = window.savedReducedHeadDraw");
  check("head reaction and reduced acknowledgment leave no WebGL errors", await evalJs("gl.getError() === gl.NO_ERROR"));
  await S("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "no-preference" }] });
  await sleep(80);
  check("Noah gestures preserve both lighting states", await evalJs(`JSON.stringify([bulbOn,neonOn]) === '${JSON.stringify(noahLights)}'`));
  await evalJs("tilt.lastInput = performance.now(); scheduleGlitch(performance.now())");
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
  // New atmosphere interactions use the real touch handlers and projected hit areas.
  for (let i = 0; i < 40 && !(await evalJs("!!atmosphere.spriteImage")); i++) await sleep(100);
  check("Blender spider sprite loaded", await evalJs("!!atmosphere.spriteImage && !!atmosphere.spriteMeta"));
  await evalJs(`(() => {
    const now = performance.now();
    atmosphere.retreat(now);
    atmosphere.update(now + 1000, 0, {started: false, bulbLevel: 1, neonLevel: 1, tiltX: 0, tiltY: 0});
  })()`);
  await sleep(750);
  const beforeSignPuff = await evalJs("atmosphere.burstCount");
  const signPoint = await evalJs("[(signScreen[0]+signScreen[2])/2, (signScreen[1]+signScreen[3])/2]");
  await tap(...signPoint);
  check("projected sign tap releases one dust puff", await evalJs(`atmosphere.burstCount === ${beforeSignPuff + 1}`));
  check("sign tap starts manual spider", await evalJs("atmosphere.spider.phase === 'descending' && atmosphere.spider.manual"));
  await parkSpider();
  check("spider has a projected touch target", await evalJs("atmosphere.spiderScreen?.length === 3 && atmosphere.hits(atmosphere.spiderScreen[0] + 21, atmosphere.spiderScreen[1])"));
  await sleep(220);
  await snap("11-atmosphere");
  const lightsBeforeSpider = await evalJs("[bulbOn, neonOn]");
  await tap(...await evalJs("atmosphere.spiderScreen.slice(0,2)"));
  check("spider tap retreats without changing lights", await evalJs(`atmosphere.spider.phase === 'retreating' && !gesture && JSON.stringify([bulbOn,neonOn]) === '${JSON.stringify(lightsBeforeSpider)}'`));
  await sleep(950);
  check("spider finishes retreat", await evalJs("atmosphere.spider.phase === 'hidden' && !atmosphere.spiderScreen"));
  await parkSpider();
  await drag(...await evalJs("atmosphere.spiderScreen.slice(0,2)"), 0, 55, async () => {
    check("spider gesture takes priority over room and lamp", await evalJs("gesture?.kind === 'spider'"));
  }, true);
  check("cancelled spider drag leaves lights alone", await evalJs(`!gesture && atmosphere.spider.phase === 'waiting' && JSON.stringify([bulbOn,neonOn]) === '${JSON.stringify(lightsBeforeSpider)}'`));
  check("repeated dust bursts keep the fixed pool bounded", await evalJs(`(() => {
    const pool = atmosphere.particles, now = performance.now() + 1000;
    for (let i = 0; i < 12; i++) atmosphere.emit(now + i * 701);
    return atmosphere.particles === pool && pool.length === 64 && pool.filter(p => p.age < p.life).length <= 64;
  })()`));
  await S("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
  await sleep(150);
  check("live reduced-motion preference clears active effects", await evalJs("atmosphere.reduced && atmosphere.particles.every(p => p.age >= p.life) && atmosphere.spider.phase === 'hidden' && !atmosphere.spiderScreen"));
  await evalJs("atmosphere.nextSpiderAt = performance.now() - 1");
  await sleep(900);
  check("reduced motion prevents ambient motes and automatic spider", await evalJs("atmosphere.particles.every(p => p.age >= p.life) && atmosphere.spider.phase === 'hidden'"));
  await S("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "no-preference" }] });
  await sleep(100);
  check("live motion preference can be restored", await evalJs("!atmosphere.reduced"));
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
  await waitFor("!!otherBodyScreen", 6000);
  await tap(...await evalJs("otherBodyScreen.slice(0,2)"));
  check("first tap anywhere starts reveal", await evalJs("revealStart !== null && neonOn"));
  check("first Noah tap starts reveal before head reaction", await evalJs("!!headDrop && !headDrop.active"));
  await S("Page.reload");
  for (let i = 0; i < 120; i++) {
    await sleep(250);
    if (await evalJs("typeof scene !== 'undefined' && !!scene && !document.getElementById('loading')")) break;
  }
  await sleep(100);
  await drag(...await lampPoint(), 0, 55);
  check("first cord drag starts reveal", await evalJs("revealStart !== null && neonOn && bulbOn"));
  // The optional sprite must never make a failed request fatal to the invitation.
  failOptionalAssets = true;
  await S("Page.reload", { ignoreCache: true });
  for (let i = 0; i < 120; i++) {
    await sleep(250);
    if (await evalJs("typeof scene !== 'undefined' && !!scene && !document.getElementById('loading')")) break;
  }
  for (let i = 0; i < 20 && !blockedOptionalAssets; i++) await sleep(100);
  check("optional spider asset failure was exercised", blockedOptionalAssets > 0);
  check("missing spider asset leaves scene and dust ready", await evalJs("!!scene && !!atmosphere && !atmosphere.spriteImage && !document.getElementById('loading')"));
  check("missing lamp mesh keeps rendered lamp fallback", await evalJs("!lampMesh && scene.layers.some(layer => layer.name === 'lamp')"));
  check("missing head clip keeps original characters", blockedAssetPaths.has("/assets/head-drop-physics.json") && await evalJs("!headDrop && !headMask && !headMesh && scene.layers.some(layer => layer.name === 'chars')"));
  await pullChain();
  check("reveal works without spider asset", await evalJs("revealStart !== null && neonOn && bulbOn"));
  await evalJs("revealStart = performance.now() - 7000");
  await sleep(150);
  check("RSVP remains available without spider asset", await evalJs("rsvp.classList.contains('on') && getComputedStyle(rsvp).pointerEvents === 'auto' && rsvp.href.includes('partiful.com')"));
  check("optional asset fallbacks leave no WebGL errors", await evalJs("gl.getError() === gl.NO_ERROR"));
  // Fail the mesh binary independently, after valid physics and mesh metadata loads.
  failOptionalAssets = false;
  failHeadMeshOnly = true;
  blockedAssetPaths.clear();
  await S("Page.reload", { ignoreCache: true });
  for (let i = 0; i < 120; i++) {
    await sleep(250);
    if (await evalJs("typeof scene !== 'undefined' && !!scene && !document.getElementById('loading')") && blockedAssetPaths.has(HEAD_MESH_BINARY)) break;
  }
  check("missing head geometry keeps original characters", blockedAssetPaths.has(HEAD_MESH_BINARY) && await evalJs("!headDrop && !headMask && !headMesh && scene.layers.some(layer => layer.name === 'chars')"));
  await pullChain();
  await evalJs("revealStart = performance.now() - 7000");
  await sleep(150);
  check("invite and RSVP work without head geometry", await evalJs("neonOn && rsvp.classList.contains('on') && getComputedStyle(rsvp).pointerEvents === 'auto'"));
  check("missing head geometry leaves no WebGL errors", await evalJs("gl.getError() === gl.NO_ERROR"));
  // Also fail the mask independently, after valid animation metadata loads.
  failHeadMeshOnly = false;
  blockedAssetPaths.clear();
  failOptionalAssets = false;
  failHeadMaskOnly = true;
  await S("Page.reload", { ignoreCache: true });
  for (let i = 0; i < 120; i++) {
    await sleep(250);
    if (await evalJs("typeof scene !== 'undefined' && !!scene && !document.getElementById('loading')") && blockedAssetPaths.has("/assets/head-mask.png")) break;
  }
  check("missing head mask keeps original characters", blockedAssetPaths.has("/assets/head-mask.png") && await evalJs("!headDrop && !headMask && !headMesh && !!scene && !document.getElementById('loading')"));
  await pullChain();
  await evalJs("revealStart = performance.now() - 7000");
  await sleep(150);
  check("invite and RSVP work without head mask", await evalJs("neonOn && rsvp.classList.contains('on') && getComputedStyle(rsvp).pointerEvents === 'auto'"));
  check("missing head mask leaves no WebGL errors", await evalJs("gl.getError() === gl.NO_ERROR"));
  })();
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
