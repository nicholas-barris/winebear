"use strict";

class LampMesh {
  constructor(gl, data, makeProgram) {
    this.gl = gl;
    this.data = data;
    this.pass = makeProgram(`#version 300 es
      precision highp float;
      in vec3 aPosition, aNormal;
      uniform mat4 uViewProj;
      uniform vec3 uPivot, uAxis;
      uniform vec2 uCover;
      uniform float uAngle, uLift, uPull, uLength, uRigid;
      out vec3 vPosition, vNormal;
      vec3 rotate(vec3 v) {
        return v*cos(uAngle) + cross(uAxis,v)*sin(uAngle) + uAxis*dot(uAxis,v)*(1.0-cos(uAngle));
      }
      void main() {
        vPosition = uPivot + rotate(aPosition - uPivot);
        vNormal = rotate(aNormal);
        gl_Position = uViewProj * vec4(vPosition,1.0);
        gl_Position.xy *= uCover;
        float pullWeight = mix(clamp(length(vPosition-uPivot)/uLength,0.0,1.0),1.0,uRigid);
        gl_Position.y += (uLift-uPull*pullWeight)*gl_Position.w;
      }`, `#version 300 es
      precision highp float;
      in vec3 vPosition, vNormal;
      out vec4 outColor;
      uniform vec3 uEye, uColor, uBulb, uEmissionColor;
      uniform float uMetallic, uRoughness, uEmissive, uGlass, uBulbLevel, uNeonLevel;
      void main() {
        vec3 n = normalize(vNormal), v = normalize(uEye-vPosition);
        vec3 l = normalize(vec3(-0.7,1.5,-2.3)-vPosition);
        vec3 h = normalize(l+v);
        float facing = max(dot(n,v),0.0);
        float diffuse = max(dot(n,l),0.0);
        float gloss = pow(max(dot(n,h),0.0),mix(90.0,10.0,uRoughness));
        float rim = pow(1.0-facing,3.0);
        vec3 warm = vec3(1.0,0.73,0.38);
        float illumination = 0.025 + uNeonLevel*0.55 + uBulbLevel*0.425;
        if (uGlass > 0.5) {
          vec3 reflection = reflect(-v,n);
          vec2 opening = reflection.xy/max(reflection.z,0.05);
          float softbox = exp(-pow((opening.x+0.45)/0.22,2.0)-pow((opening.y-0.15)/0.8,2.0))*step(0.0,reflection.z);
          float strip = pow(max(dot(reflection,normalize(vec3(0.65,0.1,1.0))),0.0),160.0);
          float sign = pow(max(dot(reflection,normalize(vec3(-0.15,0.85,0.4))),0.0),24.0);
          float fresnel = 0.035 + 0.965*pow(1.0-facing,5.0);
          vec3 reflected = vec3(0.95,0.87,0.72)*softbox*illumination*0.85;
          reflected += vec3(0.50,0.42,0.32)*strip*illumination*0.28;
          reflected += warm*sign*uNeonLevel*0.16;
          reflected += vec3(0.16,0.15,0.12)*fresnel*(0.2+illumination);
          float radius = length(cross(vPosition-uBulb,v));
          float core = exp(-radius*radius/0.0012);
          reflected += (vec3(1.0,0.84,0.46)*core*0.55 + vec3(1.0,0.98,0.87)*pow(core,3.0)*0.5)*uBulbLevel;
          float opacity = 0.025 + fresnel*0.16 + softbox*illumination*0.22;
          outColor = vec4(reflected,opacity);
          return;
        }
        vec3 light = vec3(0.07) + warm * (0.1+0.9*diffuse) * (0.08+uNeonLevel*0.92);
        vec3 fromBulb = normalize(uBulb-vPosition);
        light += warm * max(dot(n,fromBulb),0.0) * uBulbLevel * 0.8;
        vec3 color = pow(max(uColor,vec3(0.0)),vec3(1.0/2.2)) * light;
        color += mix(vec3(0.6),warm,uMetallic) * gloss * (0.25+0.45*uMetallic) * illumination;
        color += vec3(0.35,0.25,0.48) * rim * uNeonLevel * 0.15;
        if (uEmissive > 0.5) {
          vec3 incandescent = pow(max(uEmissionColor,vec3(0.0)),vec3(1.0/2.2));
          color = mix(color*0.4,mix(incandescent,vec3(1.0,0.94,0.76),0.65)*2.0,uBulbLevel);
        }
        outColor = vec4(color,1.0);
      }`, ["uViewProj", "uPivot", "uAxis", "uCover", "uAngle", "uLift", "uPull", "uLength", "uRigid",
           "uEye", "uColor", "uBulb", "uEmissionColor", "uMetallic", "uRoughness", "uEmissive", "uGlass", "uBulbLevel", "uNeonLevel"]);
    this.parts = data.parts.map(part => {
      const vao = gl.createVertexArray();
      gl.bindVertexArray(vao);
      for (const [name, values] of [["aPosition", part.positions], ["aNormal", part.normals]]) {
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(values), gl.STATIC_DRAW);
        const loc = gl.getAttribLocation(this.pass.p, name);
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, 3, gl.FLOAT, false, 0, 0);
      }
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(part.indices), gl.STATIC_DRAW);
      let length = 0;
      for (let i = 0; i < part.positions.length; i += 3) {
        length = Math.max(length, Math.hypot(...data.pivot.map((v, j) => part.positions[i + j] - v)));
      }
      return { vao, count: part.indices.length, material: part.material, length, glass: part.material.transmission > 0,
        glassLayer: part.glassLayer || 0,
        rigid: part.kind === "cord" || part.name === "Lamp - hanging cord" ? 0 : 1 };
    }).sort((a, b) => Number(a.glass) - Number(b.glass) || a.glassLayer - b.glassLayer);
    gl.bindVertexArray(null);
  }

  draw({ viewProj, cover, lift, angle, pull, eye, bulb, bulbLevel, neonLevel }) {
    const gl = this.gl, u = this.pass.u, m = this.data;
    gl.useProgram(this.pass.p);
    gl.enable(gl.DEPTH_TEST);
    gl.depthMask(true);
    gl.clear(gl.DEPTH_BUFFER_BIT);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.uniformMatrix4fv(u.uViewProj, false, viewProj);
    gl.uniform3fv(u.uPivot, m.pivot);
    gl.uniform3fv(u.uAxis, m.axis);
    gl.uniform2fv(u.uCover, cover);
    gl.uniform1f(u.uLift, lift);
    gl.uniform1f(u.uAngle, angle);
    gl.uniform1f(u.uPull, pull);
    gl.uniform3fv(u.uEye, eye);
    gl.uniform3fv(u.uBulb, bulb);
    gl.uniform1f(u.uBulbLevel, bulbLevel);
    gl.uniform1f(u.uNeonLevel, neonLevel);
    for (const part of this.parts) {
      const material = part.material;
      gl.depthMask(!part.glass);
      if (part.glass) { gl.enable(gl.CULL_FACE); gl.cullFace(gl.BACK); }
      else gl.disable(gl.CULL_FACE);
      gl.uniform1f(u.uLength, part.length);
      gl.uniform1f(u.uRigid, part.rigid);
      gl.uniform3fv(u.uColor, material.color);
      gl.uniform3fv(u.uEmissionColor, material.emission);
      gl.uniform1f(u.uMetallic, material.metallic);
      gl.uniform1f(u.uRoughness, material.roughness);
      gl.uniform1f(u.uEmissive, material.emissionStrength > 0 ? 1 : 0);
      gl.uniform1f(u.uGlass, part.glass ? 1 : 0);
      gl.bindVertexArray(part.vao);
      gl.drawElements(gl.TRIANGLES, part.count, gl.UNSIGNED_SHORT, 0);
    }
    gl.depthMask(true);
    gl.disable(gl.CULL_FACE);
    gl.disable(gl.DEPTH_TEST);
  }
}
