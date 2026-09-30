# Local Three.js + Rapier experiment

Open `/physics.html` through the existing local server. The production `/` page is unchanged.

Tap Noah (right character) to release his head. Drag the loose head to lift it with a spring, then release it. After eight seconds without interaction it fades out and returns. Reduced motion uses the existing small attached nod. Lamp, neon, tilt, dust and RSVP controls remain available.

Three.js owns every draw call. RawShaderMaterial preserves the existing Blender-derived lighting and color treatment. The head and lamp are full meshes; the room, sign and bodies remain the existing depth-reconstructed image layers. This is not yet a full mesh conversion of the Blender room.

Rapier runs at 120 fixed steps per second with interpolated display poses. It uses a convex hull sampled from the actual head, a floor aligned to the Blender floor, and invisible bounds to keep the toy in view. Grabbing applies a damped spring force. Geometry, UVs and normals used for rendering are not simplified.

Prototype limits: collision proxies do not include the other character or furnishings. The original room shadows remain baked; a soft contact shadow follows the loose head. Rebuilding the whole scene with dynamic lights and shadows would be a separate step. Controller and shaders are an isolated snapshot of production commit 046b2a8; later production edits must be ported deliberately.

Pinned dependencies live in `../vendor` with their licenses. Three.js 0.186.1 and Rapier 0.21.0 add approximately 6 MB of uncompressed JavaScript, including embedded WASM. No runtime CDN requests or build step.

Validation:

- `node tools/physics-test.mjs`: actual mesh hull, floor collision, frame-rate independence, drag trajectory, reset and reduced motion.
- `PHYSICS_CHECK=1 VIEWPORT=393x697 TMPDIR=/tmp/sbtmp node tools/snap.mjs /tmp/physics-check`: browser interaction and screenshots.
- `RENDER_COMPARE=1` captures a fixed lighting pose; combine with `PHYSICS_CHECK=1` for the prototype or omit for production.
