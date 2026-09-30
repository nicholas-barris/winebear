import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const Atmosphere = vm.runInNewContext(
  readFileSync(new URL('../public/atmosphere.js', import.meta.url), 'utf8') + '; Atmosphere',
);

const manifest = {
  width: 1188, height: 2574, tanX: 0.296032, tanY: 0.641403,
  chain: {
    anchor: [0.755581, 0.872711, -3.852866],
    down: [0, -0.984116, -0.177527], length: 0.36,
  },
  hotspots: { sign: [135, 429, 918, 404] },
};
const spriteMeta = {
  file: 'spider.webp', cols: 4, rows: 4, frames: 16,
  frameWidth: 192, frameHeight: 192, fps: 12,
};
const canvas = () => ({ width: 390, height: 844, getContext: () => ({}) });
const make = (reduced = false) => new Atmosphere(canvas(), manifest, spriteMeta, {}, reduced);
const context = (started = false) => ({ started, bulbLevel: 1, neonLevel: 1, tiltX: 0, tiltY: 0 });
const live = effect => effect.particles.filter(p => p.life > 0 && p.age < p.life).length;
const advance = (effect, from, seconds, started = false) => {
  const steps = Math.ceil(seconds * 60);
  for (let i = 1; i <= steps; i++) effect.update(from + i * 1000 / 60, 1 / 60, context(started));
  return from + steps * 1000 / 60;
};
const reverse = (effect, start, axis = 'gamma') => {
  const sample = (angle, time) => axis === 'gamma'
    ? effect.sense(angle, 20, time)
    : effect.sense(20, angle, time);
  sample(20, start);
  sample(28, start + 40);
  sample(20, start + 80);
};

// A completed action emits once; rapid duplicate events cannot flood the scene.
{
  const effect = make();
  assert.equal(effect.emit(1000), true, 'first intentional puff should emit');
  assert.equal(effect.burstCount, 1);
  assert.ok(live(effect) > 0, 'a successful puff should create live particles');
  assert.equal(effect.emit(1699), false, 'puff cooldown suppresses duplicate events');
  assert.equal(effect.burstCount, 1);
  assert.equal(effect.emit(1700), true, 'puff becomes available after 700ms');
  assert.equal(effect.burstCount, 2);
}

// Repeated accepted puffs reuse a bounded pool; every particle eventually expires.
{
  const effect = make();
  const pool = effect.particles;
  const slots = [...pool];
  assert.equal(pool.length, 64, 'particle pool is allocated at its fixed capacity');
  let now = 1000;
  for (let i = 0; i < 80; i++, now += 701) {
    assert.equal(effect.emit(now, 1), true);
    assert.equal(effect.particles, pool, 'emissions retain the pool');
    assert.equal(pool.length, 64, 'repeated emissions cannot grow the pool');
  }
  assert.ok(live(effect) > 0, 'saturated pool still contains visible particles');
  for (let i = 0; i < slots.length; i++) assert.equal(pool[i], slots[i], 'particle slots are reused');
  advance(effect, now, 5);
  assert.equal(live(effect), 0, 'particles expire when no new effect is requested');
  assert.equal(effect.burstCount, 80);
}

// Orientation needs a deliberate reversal, not one quick turn or ordinary tilt.
{
  const effect = make();
  effect.sense(20, 20, 1000);
  effect.sense(28, 20, 1040);
  effect.sense(36, 20, 1080);
  assert.equal(effect.burstCount, 0, 'monotonic quick tilt should not count as shaking');
  effect.resetSensor();
  reverse(effect, 2000);
  assert.equal(effect.burstCount, 1, 'quick reversal should release dust');
  effect.resetSensor();
  reverse(effect, 3000);
  assert.equal(effect.burstCount, 1, 'shake cooldown outlasts ordinary puff cooldown');
  effect.resetSensor();
  reverse(effect, 4200);
  assert.equal(effect.burstCount, 2, 'shake works again after the cooldown');
}
{
  const effect = make();
  reverse(effect, 1000, 'beta');
  assert.equal(effect.burstCount, 1, 'vertical phone reversal also releases dust');
}
{
  const effect = make();
  for (let i = 0; i < 20; i++) effect.sense(20 + i, 20, 1000 + i * 100);
  for (let i = 0; i < 20; i++) effect.sense(40 - i, 20, 3000 + i * 100);
  assert.equal(effect.burstCount, 0, 'ordinary slow tilt is quiet');
  effect.resetSensor();
  effect.sense(0, 20, 6000);
  effect.sense(90, 20, 6040);
  effect.sense(0, 20, 6080);
  assert.equal(effect.burstCount, 0, 'large orientation discontinuities are ignored');
  effect.resetSensor();
  effect.sense(179, 20, 7000);
  effect.sense(-179, 20, 7040);
  effect.sense(179, 20, 7080);
  assert.equal(effect.burstCount, 0, 'angle wrapping must not create a shake');
  effect.resetSensor();
  effect.sense(20, 20, 8000);
  effect.sense(28, 20, 8040);
  effect.resetSensor();
  effect.sense(20, 20, 9000);
  assert.equal(effect.burstCount, 0, 'first sample after resume only primes sensor history');
}

// Automatic appearances wait until the invitation has started, then complete.
{
  const effect = make();
  assert.equal(effect.spider.phase, 'hidden');
  advance(effect, 0, 30, false);
  assert.equal(effect.spider.phase, 'hidden', 'no automatic spider before reveal');
  let now = 31000;
  effect.update(now, 1 / 60, context(true));
  assert.ok(Number.isFinite(effect.nextSpiderAt), 'reveal schedules a finite automatic appearance');
  let appeared = effect.spider.phase !== 'hidden';
  for (let i = 0; i < 60 * 10 && !appeared; i++) {
    now += 1000 / 60;
    effect.update(now, 1 / 60, context(true));
    appeared = effect.spider.phase !== 'hidden';
  }
  assert.ok(appeared, 'automatic spider eventually appears after reveal');
  let finished = false;
  for (let i = 0; i < 60 * 6 && !finished; i++) {
    now += 1000 / 60;
    effect.update(now, 1 / 60, context(true));
    finished = effect.spider.phase === 'hidden';
  }
  assert.ok(finished, 'automatic spider eventually returns to hiding');
}

// Tapping an active spider retreats once; repeated requests do not prolong it.
{
  const effect = make();
  assert.equal(effect.startSpider(1000), true);
  assert.notEqual(effect.spider.phase, 'hidden');
  assert.equal(effect.startSpider(1010), false, 'active spider cannot be restarted');
  effect.retreat(1100);
  assert.equal(effect.spider.phase, 'retreating');
  let now = 1100;
  for (let i = 0; i < 60 * 10 && effect.spider.phase !== 'hidden'; i++) {
    now += 1000 / 60;
    effect.retreat(now);
    effect.update(now, 1 / 60, context(false));
  }
  assert.equal(effect.spider.phase, 'hidden', 'repeated taps cannot keep retreat restarting');
  effect.retreat(now + 20);
  assert.equal(effect.spider.phase, 'hidden', 'hidden spider ignores retreat');
}

// Reduced motion suppresses ambient/shake effects while preserving explicit play.
{
  const effect = make(true);
  assert.equal(effect.reduced, true);
  assert.equal(effect.emit(1000), false);
  reverse(effect, 2000);
  advance(effect, 3000, 60, true);
  assert.equal(effect.burstCount, 0);
  assert.equal(live(effect), 0, 'reduced motion never creates automatic motes');
  assert.equal(effect.spider.phase, 'hidden');
  assert.equal(effect.startSpider(65000), false, 'automatic appearance respects reduced motion');
  assert.equal(effect.startSpider(65000, true), true, 'explicit prop interaction remains available');
  assert.notEqual(effect.spider.phase, 'hidden');
  effect.retreat(65100);
  advance(effect, 65100, 10);
  assert.equal(effect.spider.phase, 'hidden');
}
{
  const effect = make();
  effect.emit(1000);
  effect.startSpider(1000);
  effect.setReduced(true);
  assert.equal(effect.reduced, true);
  assert.equal(live(effect), 0, 'changing preference immediately clears particles');
  assert.equal(effect.spider.phase, 'hidden', 'changing preference immediately hides automatic prop');
  assert.equal(effect.emit(3000), false);
  effect.setReduced(false);
  assert.equal(effect.reduced, false);
  assert.equal(effect.emit(4000), true, 'effects can resume after preference changes back');
}

console.log('PASS: fixed particle pool, expiry, puff/shake cooldowns, sensor discontinuities, spider lifecycle, reduced motion');
