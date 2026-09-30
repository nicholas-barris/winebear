"use strict";

class Atmosphere {
  constructor(canvas, manifest, reduced = false) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.reduced = reduced;
    this.particles = Array.from({ length: 64 }, () => ({ life: 0, age: 0 }));
    this.burstCount = 0;
    this.lastBurst = -Infinity;
    this.lastShake = -Infinity;
    this.nextMoteAt = 0;
    const { width, height, tanX, tanY, chain, hotspots } = manifest;
    const [x, y, w, h] = hotspots.sign;
    const z = -chain.anchor[2];
    this.edge = [(2 * (x + w / 2) / width - 1) * tanX * z,
                 (1 - 2 * (y + h) / height) * tanY * z, -z];
    this.spread = w / width * tanX * z * 0.9;
    this.down = chain.down;
    this.resetSensor();
  }

  resize(width, height, dpr = 1) {
    this.width = width;
    this.height = height;
    this.dpr = Math.min(dpr, 1.5);
    this.canvas.width = Math.round(width * this.dpr);
    this.canvas.height = Math.round(height * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  seed(p, ambient = false, strength = 1) {
    p.age = 0;
    p.life = 2.2 + Math.random() * 1.6;
    p.x = this.edge[0] + (Math.random() * 2 - 1) * this.spread;
    p.y = this.edge[1] - 0.025 - (ambient ? Math.random() * 0.55 : Math.random() * 0.06);
    p.z = this.edge[2] - Math.random() * 0.2;
    p.vx = (Math.random() - 0.5) * (ambient ? 0.025 : 0.11) * strength;
    p.vy = -(ambient ? 0.025 : 0.05 + Math.random() * 0.06) * strength;
    p.size = 0.45 + Math.random() * 0.7;
    p.alpha = ambient ? 0.32 : 0.62;
    p.ambient = ambient;
    p.phase = Math.random() * Math.PI * 2;
  }

  emit(now, strength = 1) {
    if (this.reduced || now - this.lastBurst < 700) return false;
    this.lastBurst = now;
    this.burstCount++;
    let count = 0;
    for (const p of this.particles) {
      if (p.age < p.life) continue;
      this.seed(p, false, Math.max(0.5, Math.min(1.5, strength)));
      if (++count >= 18) break;
    }
    return true;
  }

  resetSensor() {
    this.sensor = null;
    this.impulse = null;
  }

  sense(gamma, beta, now) {
    if (!Number.isFinite(gamma) || !Number.isFinite(beta) || this.reduced) return;
    const previous = this.sensor;
    this.sensor = { values: [gamma, beta], now };
    if (!previous) return;
    const dt = now - previous.now;
    const delta = [gamma - previous.values[0], beta - previous.values[1]];
    if (dt < 16) { this.sensor = previous; return; }
    if (dt > 180 || delta.some(v => Math.abs(v) > 70)) { this.impulse = null; return; }
    const axis = Math.abs(delta[0]) >= Math.abs(delta[1]) ? 0 : 1;
    const amount = delta[axis];
    if (Math.abs(amount) < 5 || Math.abs(amount) / dt * 1000 < 140) return;
    const direction = Math.sign(amount);
    if (this.impulse && this.impulse.axis === axis && this.impulse.direction !== direction &&
        now - this.impulse.now <= 450 && now - this.lastShake >= 1800) {
      if (this.emit(now)) this.lastShake = now;
      this.impulse = null;
    } else this.impulse = { axis, direction, now };
  }

  setReduced(value) {
    this.reduced = value;
    this.resetSensor();
    if (value) {
      for (const p of this.particles) p.life = 0;
    }
  }

  update(now, dt, context) {
    dt = Math.min(Math.max(dt, 0), 0.05);
    if (!this.reduced) {
      for (const p of this.particles) {
        if (p.age >= p.life) continue;
        p.age += dt;
        p.vy -= (p.ambient ? 0.007 : 0.035) * dt;
        p.x += (p.vx + context.tiltX * 0.025 + Math.sin(p.phase + p.age * 2) * 0.018) * dt;
        p.y += p.vy * dt;
        p.z += this.down[2] * 0.07 * dt;
      }
      if (context.started && now >= this.nextMoteAt && context.bulbLevel > 0.1) {
        const motes = this.particles.filter(p => p.age < p.life && p.ambient).length;
        const p = this.particles.find(p => p.age >= p.life);
        if (p && motes < 10) this.seed(p, true);
        this.nextMoteAt = now + 360;
      }
    }
  }

  draw(now, context) {
    const c = this.ctx;
    c.clearRect(0, 0, this.width, this.height);
    if (!context.project || !context.signScreen) return;
    const top = context.signScreen[3];
    c.save();
    c.beginPath();
    c.rect(0, top, this.width, Math.max(0, context.maxY - top));
    c.clip();
    for (const p of this.particles) {
      if (p.age >= p.life) continue;
      const [x, y] = context.project([p.x, p.y, p.z]);
      const distance = context.bulbScreen ? Math.hypot(x - context.bulbScreen[0], y - context.bulbScreen[1]) : 500;
      const light = context.bulbLevel * Math.exp(-((distance / 95) ** 2)) + context.neonLevel * 0.12;
      const fade = Math.min(1, p.age / 0.25) * Math.min(1, (p.life - p.age) / 0.8);
      c.globalAlpha = Math.min(1, p.alpha * light * fade);
      c.fillStyle = "#ffe2a6";
      c.beginPath();
      c.arc(x, y, p.size, 0, Math.PI * 2);
      c.fill();
    }
    c.restore();
  }
}
