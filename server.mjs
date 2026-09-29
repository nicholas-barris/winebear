// Static server for public/ with byte-range support (iOS Safari won't play video without it).
// Railway runs this via `npm start`; locally: `node server.mjs`, then open http://localhost:8000.
import { createHash } from "node:crypto";
import { createServer } from "node:http";
import { createReadStream, readFileSync, statSync } from "node:fs";
import { extname, join, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "public");
const PORT = process.env.PORT || 8000;
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".mp4": "video/mp4",
};

// Content-hash ETags: builds may reset file timestamps, so mtimes can't tell deploys apart.
const etags = new Map();
function etagFor(file, stat) {
  const key = `${stat.size}:${stat.mtimeMs}`;
  const hit = etags.get(file);
  if (hit && hit.key === key) return hit.etag;
  const etag = `"${createHash("sha1").update(readFileSync(file)).digest("base64url").slice(0, 20)}"`;
  etags.set(file, { key, etag });
  return etag;
}

createServer((req, res) => {
  let path;
  try {
    path = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  } catch {
    return res.writeHead(400).end();
  }
  const file = normalize(join(ROOT, path.endsWith("/") ? path + "index.html" : path));
  if (!file.startsWith(ROOT + sep)) return res.writeHead(403).end();

  let stat;
  try {
    stat = statSync(file);
  } catch {
    return res.writeHead(404).end("not found");
  }
  if (!stat.isFile()) return res.writeHead(404).end("not found");

  // Always revalidate, so a redeploy never mixes old and new assets; unchanged files get a 304.
  const etag = etagFor(file, stat);
  const headers = {
    "Content-Type": TYPES[extname(file)] || "application/octet-stream",
    "Accept-Ranges": "bytes",
    "Cache-Control": "no-cache",
    "ETag": etag,
  };
  const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range || "");
  const fresh = (req.headers["if-none-match"] || "").split(",").some(t => t.trim().replace(/^W\//, "") === etag);
  if (!range && fresh) return res.writeHead(304, headers).end();
  let start = 0, end = stat.size - 1, status = 200;
  if (range && (range[1] || range[2])) {
    start = range[1] ? Number(range[1]) : Math.max(0, stat.size - Number(range[2]));
    end = range[1] && range[2] ? Math.min(Number(range[2]), stat.size - 1) : stat.size - 1;
    if (start > end) return res.writeHead(416, { "Content-Range": `bytes */${stat.size}` }).end();
    status = 206;
    headers["Content-Range"] = `bytes ${start}-${end}/${stat.size}`;
  }
  headers["Content-Length"] = end - start + 1;
  res.writeHead(status, headers);
  if (req.method === "HEAD") return res.end();
  createReadStream(file, { start, end }).pipe(res);
}).listen(PORT, () => console.log(`serving ${ROOT} on http://localhost:${PORT}`));
