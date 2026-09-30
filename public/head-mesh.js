"use strict";

class HeadMesh {
  constructor(gl, data, binary, image, albedo, makeProgram) {
    this.gl = gl;
    this.data = data;
    const indexBytes = data.indexType === "UNSIGNED_SHORT" ? 2 : 4;
    if (!(data.vertexStride > 0) || !(data.vertexCount > 0) || !(data.indexCount > 0) ||
        data.indexByteOffset % indexBytes || data.indexByteOffset < data.vertexCount * data.vertexStride ||
        data.indexByteOffset + data.indexCount * indexBytes > binary.byteLength ||
        !data.parts?.every(p => p.firstIndex >= 0 && p.indexCount > 0 && p.firstIndex + p.indexCount <= data.indexCount)) {
      throw new Error("Invalid head geometry");
    }
    this.indexBytes = indexBytes;
    this.indexType = indexBytes === 2 ? gl.UNSIGNED_SHORT : gl.UNSIGNED_INT;
    this.pass = makeProgram(`#version 300 es
      precision highp float;
      in vec3 aPosition, aNormal;
      in vec2 aUv;
      uniform mat4 uViewProj;
      uniform vec3 uPivot, uTranslation, uPositionOffset, uPositionScale;
      uniform vec4 uRotation;
      uniform vec2 uCover;
      uniform float uLift;
      out vec3 vSourcePosition, vSourceNormal, vPosition, vNormal;
      out vec2 vUv;
      vec3 rotate(vec3 v) {
        return v + 2.0*cross(uRotation.xyz, cross(uRotation.xyz,v) + uRotation.w*v);
      }
      void main() {
        vSourcePosition = aPosition*uPositionScale+uPositionOffset;
        vSourceNormal = aNormal;
        vPosition = uPivot + rotate(vSourcePosition-uPivot) + uTranslation;
        vNormal = rotate(aNormal);
        vUv = aUv;
        gl_Position = uViewProj * vec4(vPosition,1.0);
        gl_Position.xy *= uCover;
        gl_Position.y += uLift*gl_Position.w;
      }`, `#version 300 es
      precision highp float;
      in vec3 vSourcePosition, vSourceNormal, vPosition, vNormal;
      in vec2 vUv;
      out vec4 outColor;
      uniform sampler2D uTexture, uAlbedo, uBase, uGlow0, uGlow1, uGlow2, uGlow3, uDepth;
      uniform highp sampler2DArray uLight;
      uniform vec3 uColor, uLightBlend, uEye, uBulb;
      uniform float uBulbLevel;
      uniform vec4 uSourceRect, uLightRect, uGlowRect[4], uLevels, uCam;
      uniform vec2 uImage, uResolution;
      uniform float uTextured, uAlpha, uPower, uBackPower, uStep, uLightReference;
      vec3 glow(sampler2D t, vec4 r, float level, vec2 uv) {
        if (level <= 0.0) return vec3(0.0);
        vec2 g = (uv-r.xy)/r.zw;
        return (texture(t,g).rgb+texture(t,g,4.5).rgb*0.6)*level;
      }
      float depthAt(ivec2 cell) {
        vec2 rg = floor(texelFetch(uDepth,clamp(cell,ivec2(0),textureSize(uDepth,0)-1),0).rg*255.0+0.5);
        return uCam.z+(rg.r*256.0+rg.g)/65535.0*(uCam.w-uCam.z);
      }
      vec3 lightAt(vec3 position, vec3 normal) {
        vec3 toBulb = uBulb-position;
        vec3 bulbDirection = normalize(toBulb);
        vec3 signDirection = normalize(vec3(0.0,1.45,-3.8)-position);
        vec3 floorDirection = normalize(vec3(0.0,-1.9,-3.8)-position);
        vec3 view = normalize(uEye-position);
        float neon = max(uLevels.x,max(uLevels.y,uLevels.z));
        float distanceFalloff = 3.0/(1.0+dot(toBulb,toBulb));
        float gloss = pow(max(dot(normal,normalize(bulbDirection+view)),0.0),30.0);
        vec3 light = vec3(0.045);
        light += vec3(1.0,0.84,0.4)*uBulbLevel*distanceFalloff*(0.07+max(dot(normal,bulbDirection),0.0)*0.72+gloss*0.2);
        light += vec3(1.0,0.84,0.4)*neon*(0.06+max(dot(normal,signDirection),0.0)*0.5);
        light += vec3(0.4,0.3,0.85)*uLevels.w*(0.035+max(dot(normal,floorDirection),0.0)*0.18);
        return light;
      }
      void main() {
        vec3 n = normalize(vNormal), view = normalize(uEye-vPosition);
        vec3 response = clamp(lightAt(vPosition,n)/lightAt(vSourcePosition,normalize(vSourceNormal)),vec3(0.3),vec3(2.5));
        vec3 color = mix(pow(uColor,vec3(1.0/2.2)),texture(uTexture,vUv).rgb,uTextured)*uBackPower*pow(response,vec3(1.0/2.2));
        vec3 bulbDirection = normalize(uBulb-vPosition);
        vec3 signDirection = normalize(vec3(0.0,1.45,-3.8)-vPosition);
        float neon = max(uLevels.x,max(uLevels.y,uLevels.z));
        vec3 warm = vec3(1.0,0.84,0.4);
        vec3 illumination = vec3(0.01)+warm*(uBulbLevel*(0.035+max(dot(n,bulbDirection),0.0)*0.72)
                         +neon*(0.035+max(dot(n,signDirection),0.0)*0.5));
        float specular = pow(max(dot(n,normalize(bulbDirection+view)),0.0),30.0)*uBulbLevel*0.18;
        vec3 materialColor = mix(uColor,pow(texture(uAlbedo,vUv).rgb,vec3(2.2)),uTextured);
        vec3 reflected = pow(max(materialColor*illumination+warm*specular,vec3(0.0)),vec3(1.0/2.2))*0.8;
        color = max(color,reflected);
        vec2 img = vec2(vSourcePosition.x/-vSourcePosition.z/uCam.x+1.0,
                        1.0-vSourcePosition.y/-vSourcePosition.z/uCam.y)*0.5;
        vec2 uv = (img*uImage-uSourceRect.xy)/uSourceRect.zw;
        vec4 base = texture(uBase,uv);
        vec2 grid = (img*uImage-uSourceRect.xy-0.5)/uStep;
        ivec2 cell = ivec2(floor(grid));
        vec2 fraction = fract(grid);
        float depth = mix(mix(depthAt(cell),depthAt(cell+ivec2(1,0)),fraction.x),
                          mix(depthAt(cell+ivec2(0,1)),depthAt(cell+ivec2(1,1)),fraction.x),fraction.y);
        float visible = 1.0-smoothstep(0.035,0.12,abs(-vSourcePosition.z-depth));
        visible *= smoothstep(-0.05,0.15,dot(normalize(vSourceNormal),normalize(-vSourcePosition)));
        visible *= step(0.0,uv.x)*step(uv.x,1.0)*step(0.0,uv.y)*step(uv.y,1.0)*base.a*uTextured;
        vec2 inset = 0.5/vec2(textureSize(uLight,0).xy);
        vec2 lightUv = clamp(uLightRect.xy+uv*uLightRect.zw,uLightRect.xy+inset,uLightRect.xy+uLightRect.zw-inset);
        vec3 light = mix(texture(uLight,vec3(lightUv,uLightBlend.x)).rgb,
                         texture(uLight,vec3(lightUv,uLightBlend.y)).rgb,uLightBlend.z);
        vec3 reference = texture(uLight,vec3(lightUv,uLightReference)).rgb;
        vec3 projected = max(vec3(0.0),light*base.a+(base.rgb-reference*base.a)*0.35)*uPower;
        projected += glow(uGlow0,uGlowRect[0],uLevels.x,uv)+glow(uGlow1,uGlowRect[1],uLevels.y,uv)
                   +glow(uGlow2,uGlowRect[2],uLevels.z,uv)+glow(uGlow3,uGlowRect[3],uLevels.w,uv);
        color = mix(color,projected/max(base.a,0.001)*pow(response,vec3(1.0/2.2)),visible);
        vec2 vignette = gl_FragCoord.xy/uResolution-0.5;
        color *= 1.0-dot(vignette,vignette)*0.9;
        outColor = vec4(color*uAlpha,uAlpha);
      }`, ["uViewProj", "uPivot", "uTranslation", "uPositionOffset", "uPositionScale", "uRotation", "uCover", "uLift",
           "uTexture", "uAlbedo", "uEye", "uBulb", "uBulbLevel", "uColor", "uTextured", "uAlpha", "uPower", "uBackPower", "uStep", "uLightReference",
           "uBase", "uGlow0", "uGlow1", "uGlow2", "uGlow3", "uDepth", "uLight", "uLightBlend", "uSourceRect", "uLightRect",
           "uGlowRect", "uLevels", "uCam", "uImage", "uResolution"]);
    this.vao = gl.createVertexArray();
    gl.bindVertexArray(this.vao);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Uint8Array(binary,0,data.indexByteOffset), gl.STATIC_DRAW);
    for (const [name,key] of [["aPosition","position"], ["aNormal","normal"], ["aUv","uv"]]) {
      const attribute = data.attributes[key];
      const loc = gl.getAttribLocation(this.pass.p,name);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc,attribute.size,gl[attribute.type],Boolean(attribute.normalized),
        data.vertexStride,(data.vertexByteOffset || 0)+attribute.offset);
    }
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint8Array(binary,data.indexByteOffset),gl.STATIC_DRAW);
    gl.bindVertexArray(null);
    const upload = image => {
      const texture = gl.createTexture();
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D,texture);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false);
      gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL,gl.NONE);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,Boolean(data.texture.flipY));
      gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);
      gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_LINEAR);
      gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
      gl.generateMipmap(gl.TEXTURE_2D);
      return texture;
    };
    this.texture = upload(image);
    this.albedo = upload(albedo);
    this.shadowPass = makeProgram(`#version 300 es
      precision highp float;
      in vec2 aUv;
      uniform mat4 uViewProj;
      uniform vec3 uCenter, uUp;
      uniform vec2 uCover;
      uniform float uLift;
      out vec2 vUv;
      void main() {
        vUv = aUv;
        vec3 p = uCenter + vec3(aUv.x,0.0,0.0)*0.8 + cross(uUp,vec3(1.0,0.0,0.0))*aUv.y*0.65;
        gl_Position = uViewProj*vec4(p,1.0);
        gl_Position.xy *= uCover;
        gl_Position.y += uLift*gl_Position.w;
      }`, `#version 300 es
      precision highp float;
      in vec2 vUv;
      uniform float uAlpha;
      out vec4 outColor;
      void main() {
        float opacity = max(0.0,exp(-dot(vUv,vUv)*5.0)-0.007)*uAlpha;
        outColor = vec4(0.0,0.0,0.0,opacity);
      }`, ["uViewProj","uCenter","uUp","uCover","uLift","uAlpha"]);
    this.shadowVao = gl.createVertexArray();
    gl.bindVertexArray(this.shadowVao);
    gl.bindBuffer(gl.ARRAY_BUFFER,gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
    const shadowUv = gl.getAttribLocation(this.shadowPass.p,"aUv");
    gl.enableVertexAttribArray(shadowUv);
    gl.vertexAttribPointer(shadowUv,2,gl.FLOAT,false,0,0);
    gl.bindVertexArray(null);
  }

  draw({ viewProj, cover, lift, eye, bulb, bulbLevel, reaction, source, manifest, lighting, lightBlend, levels, power, backPower }) {
    if (reaction.alpha <= 0) return;
    const gl = this.gl, u = this.pass.u;
    const floor = reaction.data.floor;
    const center = this.data.pivot.map((v,i) => v+reaction.translation[i]);
    const height = center.reduce((sum,v,i) => sum+(v-floor.point[i])*floor.normal[i],0);
    if (height < 1) {
      const shadow = this.shadowPass.u;
      gl.useProgram(this.shadowPass.p);
      gl.uniformMatrix4fv(shadow.uViewProj,false,viewProj);
      gl.uniform3fv(shadow.uCenter,center.map((v,i) => v-height*floor.normal[i]));
      gl.uniform3fv(shadow.uUp,floor.normal);
      gl.uniform2fv(shadow.uCover,cover);
      gl.uniform1f(shadow.uLift,lift);
      gl.uniform1f(shadow.uAlpha,reaction.alpha*Math.min(0.35,(1-height)*0.65));
      gl.bindVertexArray(this.shadowVao);
      gl.drawArrays(gl.TRIANGLES,0,6);
    }
    gl.useProgram(this.pass.p);
    gl.enable(gl.DEPTH_TEST);
    gl.depthMask(true);
    gl.clear(gl.DEPTH_BUFFER_BIT);
    gl.disable(gl.CULL_FACE);
    gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);
    gl.uniformMatrix4fv(u.uViewProj,false,viewProj);
    gl.uniform3fv(u.uPivot,this.data.pivot);
    gl.uniform3fv(u.uPositionOffset,this.data.positionOffset || [0,0,0]);
    gl.uniform3fv(u.uPositionScale,this.data.positionScale || [1,1,1]);
    gl.uniform3fv(u.uTranslation,reaction.translation);
    gl.uniform4fv(u.uRotation,reaction.rotation);
    gl.uniform2fv(u.uCover,cover);
    gl.uniform1f(u.uLift,lift);
    gl.uniform3fv(u.uEye,eye);
    gl.uniform3fv(u.uBulb,bulb);
    gl.uniform1f(u.uBulbLevel,bulbLevel);
    gl.uniform1f(u.uPower,power);
    gl.uniform1f(u.uBackPower,backPower);
    gl.uniform1f(u.uStep,source.step);
    gl.uniform1f(u.uLightReference,manifest.motion.lighting.reference);
    gl.uniform3fv(u.uLightBlend,lightBlend);
    gl.uniform4fv(u.uSourceRect,source.rect);
    gl.uniform4fv(u.uLightRect,source.lightRect);
    gl.uniform4fv(u.uGlowRect,source.glowRects);
    gl.uniform4f(u.uLevels,levels.heading,levels.title,levels.prefix,levels.floor);
    gl.uniform4f(u.uCam,manifest.tanX,manifest.tanY,manifest.zNear,manifest.zFar);
    gl.uniform2f(u.uImage,manifest.width,manifest.height);
    gl.uniform2f(u.uResolution,gl.canvas.width,gl.canvas.height);
    [source.base,...source.glows,source.depth].forEach((texture,i) => {
      gl.activeTexture(gl.TEXTURE1+i);
      gl.bindTexture(gl.TEXTURE_2D,texture);
    });
    [u.uBase,u.uGlow0,u.uGlow1,u.uGlow2,u.uGlow3,u.uDepth].forEach((uniform,i) => gl.uniform1i(uniform,i+1));
    gl.activeTexture(gl.TEXTURE7);
    gl.bindTexture(gl.TEXTURE_2D_ARRAY,lighting);
    gl.uniform1i(u.uLight,7);
    gl.uniform1f(u.uAlpha,reaction.alpha);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D,this.texture);
    gl.uniform1i(u.uTexture,0);
    gl.activeTexture(gl.TEXTURE8);
    gl.bindTexture(gl.TEXTURE_2D,this.albedo);
    gl.uniform1i(u.uAlbedo,8);
    gl.bindVertexArray(this.vao);
    for (const part of this.data.parts) {
      const material = part.material;
      gl.uniform1f(u.uTextured,material.texture ? 1 : 0);
      gl.uniform3fv(u.uColor,material.color);
      gl.drawElements(gl.TRIANGLES,part.indexCount,this.indexType,part.firstIndex*this.indexBytes);
    }
    gl.disable(gl.DEPTH_TEST);
  }
}
