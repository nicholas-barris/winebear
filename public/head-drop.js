"use strict";

// A one-shot Blender-authored pose clip. Times supplied by the browser are
// milliseconds; authored duration and frame timing are seconds.
class HeadDrop {
  constructor(data, reduced = false) {
    this.data = data;
    this.reduced = Boolean(reduced);
    this.frames = Array.isArray(data?.frames) ? data.frames : [];
    this.fps = Number(data?.fps);
    const axis = data?.axis;
    this.axis = Array.isArray(axis) && axis.length === 3 && axis.every(Number.isFinite)
      && Number.isFinite(Math.hypot(...axis)) && Math.hypot(...axis) > 1e-8
      ? axis.map(value => value / Math.hypot(...axis)) : [0, 0, -1];
    this.valid = Number.isFinite(this.fps) && this.fps > 0 && this.frames.length >= 2
      && this.frames.every(frame => Array.isArray(frame?.translation)
        && frame.translation.length === 3 && frame.translation.every(Number.isFinite)
        && Array.isArray(frame.rotation) && frame.rotation.length === 4
        && frame.rotation.every(Number.isFinite)
        && Number.isFinite(Math.hypot(...frame.rotation)) && Math.hypot(...frame.rotation) > 1e-8
        && Number.isFinite(frame.alpha));
    if (this.valid) {
      this.frames = this.frames.map(frame => ({ ...frame,
        rotation: frame.rotation.map(value => value / Math.hypot(...frame.rotation)) }));
    }
    const sampledDuration = this.valid ? (this.frames.length - 1) / this.fps : 0;
    this.duration = Number.isFinite(data?.duration) && data.duration > 0
      ? data.duration : sampledDuration;
    this.valid &&= this.duration > 0;
    this.translation = [0, 0, 0];
    this.rotation = [0, 0, 0, 1];
    this.reset();
  }

  play(now) {
    if (this.active || !this.valid || !Number.isFinite(now)) return false;
    this.reset();
    this.active = true;
    this.start = now;
    this.lastTime = now;
    this.update(now);
    return true;
  }

  update(now) {
    if (!this.active) return;
    if (!Number.isFinite(now)) {
      this.reset();
      return;
    }
    // A stale callback cannot rewind an already falling head.
    this.lastTime = Math.max(this.lastTime, now);
    const seconds = Math.max(0, (this.lastTime - this.start) / 1000);
    const duration = this.reduced ? 0.3 : this.duration;
    if (seconds >= duration) {
      this.reset();
      return;
    }
    if (this.reduced) {
      // A manual acknowledgment remains attached and does not fall or roll.
      this.angle = 0.025 * Math.sin(Math.PI * seconds / duration);
      this.setAngleRotation(this.angle);
      return;
    }

    const position = Math.min(this.frames.length - 1, seconds * this.fps);
    const index = Math.floor(position);
    const a = this.frames[index];
    const b = this.frames[Math.min(index + 1, this.frames.length - 1)];
    const mix = position - index;
    for (let i = 0; i < 3; i++) {
      this.translation[i] = a.translation[i] * (1 - mix) + b.translation[i] * mix;
    }
    HeadDrop.slerp(a.rotation, b.rotation, mix, this.rotation);
    // Rendering uses rotation; this unsigned angle supports diagnostics.
    this.angle = 2 * Math.acos(Math.min(1, Math.abs(this.rotation[3])));
    this.alpha = Math.max(0, Math.min(1, a.alpha * (1 - mix) + b.alpha * mix));
  }

  reset() {
    this.active = false;
    this.translation.fill(0);
    this.rotation.splice(0, 4, 0, 0, 0, 1);
    this.angle = 0;
    this.alpha = 1;
    this.start = -Infinity;
    this.lastTime = -Infinity;
  }

  setReduced(value) {
    this.reduced = Boolean(value);
    this.reset();
  }

  setAngleRotation(angle) {
    const sine = Math.sin(angle / 2);
    for (let i = 0; i < 3; i++) this.rotation[i] = this.axis[i] * sine;
    this.rotation[3] = Math.cos(angle / 2);
  }

  static slerp(a, b, fraction, out) {
    let dot = a.reduce((sum, value, index) => sum + value * b[index], 0);
    const sign = dot < 0 ? -1 : 1;
    dot = Math.min(1, Math.abs(dot));
    let wa = 1 - fraction, wb = fraction;
    if (dot < .9995) {
      const theta = Math.acos(dot), sine = Math.sin(theta);
      wa = Math.sin((1 - fraction) * theta) / sine;
      wb = Math.sin(fraction * theta) / sine;
    }
    for (let i = 0; i < 4; i++) out[i] = wa * a[i] + wb * sign * b[i];
    const length = Math.hypot(...out);
    for (let i = 0; i < 4; i++) out[i] /= length;
  }
}
