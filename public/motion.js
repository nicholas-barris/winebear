"use strict";
const Motion = {
  step(state, dt) {
    const steps = Math.max(1, Math.ceil(Math.min(dt, 0.1) / (1 / 120)));
    const h = Math.min(dt, 0.1) / steps;
    for (let i = 0; i < steps; i++) {
      state.velocity += (-4.5 * Math.sin(state.angle) - 1.4 * state.velocity) * h;
      state.angle += state.velocity * h;
      if (Math.abs(state.angle) > 0.39) {
        state.angle = Math.sign(state.angle) * 0.39;
        state.velocity *= -0.2;
      }
    }
    return state.angle;
  },
  nudge(state, impulse) {
    state.velocity = Math.max(-1, Math.min(1, state.velocity + impulse));
  },
  blend(angles, angle) {
    if (angle <= angles[0]) return [0, 0, 0];
    const last = angles.length - 1;
    if (angle >= angles[last]) return [last, last, 0];
    let hi = 1;
    while (angles[hi] < angle) hi++;
    const lo = hi - 1;
    return [lo, hi, (angle - angles[lo]) / (angles[hi] - angles[lo])];
  },
  sample(clip, fps, seconds) {
    const f = Math.max(0, seconds * fps), i = Math.floor(f);
    if (i >= clip.length - 1) return clip[clip.length - 1];
    return clip[i] + (clip[i + 1] - clip[i]) * (f - i);
  },
};
