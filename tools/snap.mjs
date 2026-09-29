// Headless check: serves public/ on a fake https origin via CDP, emulates a phone,
// waits for load, and screenshots the reveal and tilt. Usage: node tools/snap.mjs [outDir]
import { spawn } from "node:child_process";
import { readFileSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const OUT = process.argv[2] || "/tmp/scare-bear-snaps";
const ORIGIN = "https://scarebear.test";
mkdirSync(OUT, { recursive: true });

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".jpg": "image/jpeg", ".png": "image/png" };
const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
  "--headless=new", "--remote-debugging-pipe", "--no-first-run", "--no-default-browser-check",
  "--use-angle=swiftshader", "--enable-unsafe-swiftshader", `--user-data-dir=/tmp/scare-bear-chrome`,
  "about:blank",
], { stdio: ["ignore", "ignore", "pipe", "pipe", "pipe"] });
chrome.stderr.on("data", d => process.stderr.write("chrome: " + d));
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
  if (msg.method === "Runtime.exceptionThrown") console.log("EXCEPTION:", JSON.stringify(msg.params.exceptionDetails).slice(0, 600));
});

await S("Fetch.enable", { patterns: [{ urlPattern: `${ORIGIN}/*` }] });
await S("Runtime.enable");
await S("Page.enable");
const [VW, VH] = (process.env.VIEWPORT || "393x852").split("x").map(Number);
await S("Emulation.setDeviceMetricsOverride", { width: VW, height: VH, deviceScaleFactor: 2, mobile: true });
await S("Emulation.setTouchEmulationEnabled", { enabled: true });
await S("Page.navigate", { url: ORIGIN + "/" });

async function snap(name) {
  const { data } = await S("Page.captureScreenshot", { format: "jpeg", quality: 80 });
  writeFileSync(join(OUT, name + ".jpg"), Buffer.from(data, "base64"));
  console.log("snap", name);
}
async function evalJs(expr) {
  const r = await S("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true });
  return r.result.value;
}

for (let i = 0; i < 40 && (await evalJs("!!document.getElementById('loading')")); i++) await sleep(250);
if (process.env.MAGENTA) await evalJs("gl.clearColor(1, 0, 1, 1)");
await snap("0-dark");
await evalJs("document.getElementById('chain').click()");
await sleep(160);
await snap("0-pulled");
await sleep(2000);
await snap("1-mid-reveal");
await sleep(5000);
await snap("2-revealed");
// Pin tilt to the extremes by dispatching orientation events.
for (const [name, g, b] of [["3-tilt-left", -30, 0], ["4-tilt-right", 30, 0], ["5-tilt-up", 0, -30], ["6-tilt-down", 0, 30], ["7-corner", 30, 30]]) {
  await evalJs(`(() => { for (let k = 0; k < 30; k++) dispatchEvent(Object.assign(new Event('deviceorientation'), { gamma: 0, beta: 45 })); })()`);
  await evalJs(`(() => { const e = new Event('deviceorientation'); e.gamma = ${g}; e.beta = ${45 + b}; dispatchEvent(e); })()`);
  await sleep(900);
  await snap(name);
}
console.log("swing:", await evalJs("swing ? JSON.stringify({ ready: swing.ready, paused: swing.video.paused, t: swing.video.currentTime.toFixed(2), err: swing.video.error && swing.video.error.code }) : 'no video'"));
for (const i of [0, 1, 2]) {
  await sleep(i ? 650 : 3000);
  await snap(`8-swing-${i}`);
}
chrome.kill();
process.exit(0);
