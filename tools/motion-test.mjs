import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const Motion = vm.runInNewContext(readFileSync(new URL('../public/motion.js', import.meta.url), 'utf8') + '; Motion');
const meta = JSON.parse(readFileSync(new URL('../public/assets/motion.json', import.meta.url)));
function run(fps) {
  const state = { angle: 0.2, velocity: 0 };
  Motion.nudge(state, 0.6);
  for (let i = 0; i < fps * 3; i++) Motion.step(state, 1 / fps);
  return state;
}
assert.ok(Math.abs(run(30).angle - run(120).angle) < 0.001, 'motion should not depend on screen refresh rate');
const state = { angle: 0.38, velocity: 0.8 };
for (let i = 0; i < 60 * 15; i++) {
  Motion.step(state, 1 / 60);
  assert.ok(Math.abs(state.angle) <= 0.39, 'lamp must stay inside baked lighting range');
}
assert.ok(Math.abs(state.angle) < 0.001 && Math.abs(state.velocity) < 0.001, 'lamp should settle when input stops');
for (let a = -0.39; a <= 0.39; a += 0.001) {
  const [lo, hi, blend] = Motion.blend(meta.lighting.angles, a);
  const reconstructed = meta.lighting.angles[lo] * (1 - blend) + meta.lighting.angles[hi] * blend;
  assert.ok(Math.abs(reconstructed - a) < 1e-9, 'light blend must track the physical angle');
}
assert.equal(Motion.sample(meta.character.nod, 60, 0), 0);
assert.equal(Motion.sample(meta.character.nod, 60, 10), 0);
assert.ok(Motion.sample(meta.character.nod, 60, 0.3) > 0.1, 'exported Blender nod reaches intended peak');
console.log('PASS: refresh-rate independence, settling, bounds, lighting alignment, Blender clip endpoints');
