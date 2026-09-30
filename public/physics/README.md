# Three.js + Rapier invitation

The main `/` invitation uses Three.js and Rapier. `/physics.html` remains available as an alternate entry point to the same experience.

Tap Noah (right character) to release his head. Drag the loose head to lift it with a spring, then release it. After eight seconds without interaction it fades out and returns. Reduced motion uses the existing small attached nod. Lamp, neon, tilt, dust and RSVP controls remain available.

## Loading

The invitation, lamp and RSVP become usable before the optional head finishes downloading. Its mesh, textures and collision shape prepare offscreen in the background. A head tap just before readiness is remembered for up to 2.5 seconds. If the head fails to load, the invitation stays usable. Its optional asset deadline is 60 seconds and does not hold the loading screen open.

The browser uses a bundled, minified runtime and a separate Rapier WASM file. Scene assets preload alongside those files. The WASM file has a checked-in gzip companion served with content negotiation, separate ETags and the correct MIME type. Versioned script URLs avoid mixing cached code across releases.

The full Blender head geometry is unchanged. Packed vertex data uploads directly instead of constructing float arrays and hundreds of thousands of temporary objects. A 407-vertex convex collision shape is prepared at build time from the same model; visitors no longer rebuild it.

Local validation with fourfold CPU throttling: invitation ready in 2.61 seconds versus 3.39 before optimization. This is a local browser comparison, not a physical iPhone or mobile-network guarantee. Compressed runtime plus WASM is approximately 1.35 MB, versus approximately 2.1 MB for the previous scripts. Existing model and scene assets are additional.

## Rendering and simulation

Three.js owns every draw call. RawShaderMaterial preserves the existing Blender-derived lighting and color treatment. The head and lamp are full meshes; the room, sign and bodies remain the existing depth-reconstructed image layers.

Rapier runs at 120 fixed steps per second with interpolated display poses. It uses the precomputed head hull, a floor aligned to the Blender floor, and invisible bounds to keep the toy in view. Grabbing applies a damped spring force. Geometry, UVs and normals used for rendering are not simplified.

Collision proxies do not include the other character or furnishings. The original room shadows remain baked; a soft contact shadow follows the loose head. Rendering and physics controllers live in this directory. The unused former renderer has been removed; its source is recoverable from Git history. The main page loads the bundled physics runtime.

## Rebuild

Run `npm ci`, then `npm run build:physics`. The build uses pinned Three.js 0.186.1, Rapier 0.21.0 and esbuild 0.25.12. It regenerates `runtime.js`, the hashed WASM and gzip companion, the collision hull, and the preload/version references in `bootstrap.js`, `index.html` and `physics.html`. Commit the generated outputs along with source edits. No build step or external CDN is needed to serve the site. Licenses are in `../vendor`.

The Rapier build adapter instantiates the official package's WASM with its generated JavaScript bindings. This avoids the compatibility package's large embedded base64 string. Recheck the adapter if Rapier is upgraded.

## Validation

- `node tools/physics-test.mjs`: hull source match, floor collision, frame-rate independence, drag trajectory, reset and reduced motion.
- `node tools/server-test.mjs`: WASM compression negotiation, byte correctness, MIME, cache validators and ranges.
- `PHYSICS_CHECK=1 VIEWPORT=393x697 TMPDIR=/tmp/sbtmp node tools/snap.mjs /tmp/physics-check`: browser interaction and screenshots.
- Add `PHYSICS_PATH=/` to test the main invitation entry point.
- Add `PHYSICS_LOADING_CHECK=1` to hold the head download, verify the invitation still opens, and test a queued tap.
- `RENDER_COMPARE=1` captures a fixed lighting pose; combine with `PHYSICS_CHECK=1`; add `PHYSICS_PATH=/` for the main address.
