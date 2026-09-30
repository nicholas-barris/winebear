import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import vm from 'node:vm';

const HeadDrop = vm.runInNewContext(
  readFileSync(new URL('../public/head-drop.js', import.meta.url), 'utf8') + '; HeadDrop');
const fixture = {
  fps: 2,
  duration: 2,
  frames: [
    { translation: [0, 0, 0], rotation: [0, 0, 0, 1], alpha: 1 },
    { translation: [0, -1, 0], rotation: [0, 0, Math.sin(.2), Math.cos(.2)], alpha: 1 },
    { translation: [1, -1, 0], rotation: [0, 0, 1, 0], alpha: 1 },
    { translation: [2, -1, 0], rotation: [0, 0, 0, -1], alpha: 0 },
    { translation: [0, 0, 0], rotation: [0, 0, 0, 1], alpha: 1 },
  ],
};

function close(actual, expected, message) {
  assert.ok(Math.abs(actual - expected) < 1e-9, `${message}: ${actual} != ${expected}`);
}
function identity(head) {
  assert.equal(head.active, false, 'reset leaves no active clip');
  assert.deepEqual(Array.from(head.translation), [0, 0, 0], 'reset restores the original head position');
  assert.equal(head.angle, 0, 'reset restores the original head angle');
  assert.deepEqual(Array.from(head.rotation), [0, 0, 0, 1], 'reset restores the original quaternion');
  assert.equal(head.alpha, 1, 'reset restores the original head opacity');
}
function finitePose(head) {
  assert.ok([...head.translation, ...head.rotation, head.angle, head.alpha].every(Number.isFinite), 'pose must stay finite');
  close(Math.hypot(...head.rotation), 1, 'sampled quaternion remains normalized');
  assert.ok(head.alpha >= 0 && head.alpha <= 1, 'opacity stays inside the blend range');
}

const head = new HeadDrop(fixture);
identity(head);
assert.equal(head.play(1000), true);
head.update(1250);
close(head.translation[1], -.5, 'intermediate fall position');
close(head.angle, .2, 'intermediate fall rotation');
assert.equal(head.play(1500), false, 'repeated taps must not restart an active fall');
assert.equal(head.start, 1000);
head.update(2000);
close(head.angle, Math.PI, 'clip reaches the ground roll');
head.update(1750);
close(head.angle, Math.PI, 'stale updates cannot rewind the roll');
head.update(2250);
close(head.alpha, .5, 'roll-away fade interpolates');
head.update(3000);
identity(head);
assert.equal(head.play(4000), true, 'the interaction replays after returning');
head.update(Number.MAX_VALUE);
identity(head);

// Backgrounding/canceling or a changed motion preference restores every field.
head.play(5000);
head.update(5400);
head.reset();
identity(head);
head.play(6000);
head.update(6400);
head.setReduced(true);
identity(head);
assert.equal(head.play(7000), true);
for (let dt = 0; dt < 300; dt += 5) {
  head.update(7000 + dt);
  assert.deepEqual(Array.from(head.translation), [0, 0, 0], 'reduced motion never detaches the head');
  assert.equal(head.alpha, 1, 'reduced motion never hides the head');
  assert.ok(Math.abs(head.angle) <= .025, 'reduced motion limits the tilt');
}
head.update(7300);
identity(head);
head.setReduced(false);
head.play(8000);
head.update(NaN);
identity(head);
assert.equal(head.play(Infinity), false, 'invalid timestamps cannot start a clip');
assert.equal(new HeadDrop({ fps: 0, frames: fixture.frames }).play(0), false, 'invalid frame timing fails safely');
assert.equal(new HeadDrop({ ...fixture, frames: [{ translation: [NaN, 0, 0], angle: 0, alpha: 1 }] }).play(0), false,
  'malformed clip data cannot produce a broken pose');

// Position is sampled from elapsed time, independent of display refresh rate.
function sampledAt(fps, at) {
  const clip = new HeadDrop(fixture);
  clip.play(0);
  for (let t = 0; t < at; t += 1000 / fps) clip.update(t);
  clip.update(at);
  return [...clip.translation, clip.angle, clip.alpha];
}
assert.deepEqual(sampledAt(30, 1300), sampledAt(120, 1300), '30Hz and 120Hz produce identical poses');

const quaternionFixture = {
  fps: 1, duration: 1,
  frames: [
    { translation: [0, 0, 0], rotation: [0, 0, 0, 1], alpha: 1 },
    { translation: [1, 0, 0], rotation: [0, 1, 0, 0], alpha: 1 },
  ],
};
const quaternion = new HeadDrop(quaternionFixture);
assert.equal(quaternion.play(0), true);
quaternion.update(500);
close(quaternion.rotation[1], Math.SQRT1_2, 'halfway rotation around world-side axis');
close(quaternion.rotation[3], Math.SQRT1_2, 'spherical interpolation reaches a quarter turn');
finitePose(quaternion);
const antipodal = new HeadDrop({ ...quaternionFixture, frames: [
  quaternionFixture.frames[0], { translation: [0, 0, 0], rotation: [0, 0, 0, -1], alpha: 1 },
] });
antipodal.play(0);
antipodal.update(500);
assert.deepEqual(Array.from(antipodal.rotation), [0, 0, 0, 1], 'equivalent quaternion signs must not produce a full spin');
assert.equal(new HeadDrop({ ...quaternionFixture, frames: quaternionFixture.frames.map(f => ({ ...f, rotation: [0, 0, 0, 0] })) }).valid,
  false, 'zero quaternions are rejected');

// If the Blender asset exists, verify every authored frame and the entire return.
for (const filename of ['head-drop-physics.json']) {
  const asset = new URL('../public/assets/' + filename, import.meta.url);
  if (!existsSync(asset)) continue;
  const data = JSON.parse(readFileSync(asset, 'utf8'));
  const authored = new HeadDrop(data);
  assert.ok(authored.valid, 'Blender clip is valid');
  assert.equal(authored.play(0), true);
  let maxAngle = 0, maxDistance = 0, minAlpha = 1, minimumFacing = 1;
  for (let ms = 0; ms < authored.duration * 1000; ms += 1000 / 120) {
    authored.update(ms);
    finitePose(authored);
    maxAngle = Math.max(maxAngle, Math.abs(authored.angle));
    maxDistance = Math.max(maxDistance, Math.hypot(...authored.translation));
    minAlpha = Math.min(minAlpha, authored.alpha);
    if (authored.alpha > .9) {
      minimumFacing = Math.min(minimumFacing, 1 - 2*(authored.rotation[0]**2 + authored.rotation[1]**2));
    }
  }
  assert.ok(maxAngle > .5, 'authored head rotates visibly while rolling');
  assert.ok(maxDistance > .5, 'authored head falls and travels away');
  assert.equal(minAlpha, 0, 'reset includes a hidden interval');
  authored.update(authored.duration * 1000);
  identity(authored);
  const first = data.frames[0], last = data.frames.at(-1);
  first.translation.forEach(v => close(v, 0, 'authored start aligns with the original head'));
  last.translation.forEach(v => close(v, 0, 'authored return aligns with the original head'));
  {
    assert.deepEqual(last.rotation, [0, 0, 0, 1], 'authored return has no residual rotation');
    assert.ok(minimumFacing < -.2, 'true 3D roll exposes the side and back of the head');
    assert.ok(data.authoring.minimumSourceGroundClearance >= 0, 'full source head clears the physical floor');
    assert.ok(data.authoring.minimumSourceWallClearance >= 0, 'full source head clears the original backdrop');
  }
  assert.equal(last.alpha, 1, 'authored head is fully restored');
  console.log(`PASS: Blender clip (${data.frames.length} frames, ${data.duration}s), finite poses, roll and seamless return`);
}
console.log('PASS: interpolation, replay, cancellation, reduced motion, timestamp safety, refresh-rate independence');
