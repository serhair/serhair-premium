import { useEffect, useRef } from "react";
import * as THREE from "three";

const HairGrowthScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const windIntensityRef = useRef(0.2);
  const rafRef = useRef(0);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
    });
    renderer.setClearColor(0x0a0a0f, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    camera.position.set(0, -1.5, 5);
    camera.lookAt(0, 0, 0);

    const pointLight = new THREE.PointLight(0xfff0d0, 1.2, 100);
    pointLight.position.set(-3, 2, 4);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    const count = isMobile ? 1500 : isTablet ? 3000 : 5000;
    const segments = 12;
    const height = 1.2;
    const sweep = Math.PI * 0.3;

    const hairPositions = new Float32Array(segments * 3);
    const hairTaper = new Float32Array(segments);
    for (let i = 0; i < segments; i++) {
      const t = i / (segments - 1);
      const angle = t * sweep;
      const radius = 0.02 * (1 - t * 0.4);
      hairPositions[i * 3] = Math.cos(angle) * radius;
      hairPositions[i * 3 + 1] = Math.sin(angle) * radius * 0.3 + t * height;
      hairPositions[i * 3 + 2] = Math.sin(angle) * radius;
      hairTaper[i] = t;
    }

    const baseGeometry = new THREE.BufferGeometry();
    baseGeometry.setAttribute("position", new THREE.BufferAttribute(hairPositions, 3));
    baseGeometry.setAttribute("taper", new THREE.BufferAttribute(hairTaper, 1));
    baseGeometry.setDrawRange(0, segments);

    const positions = new Float32Array(count * segments * 3);
    const scales = new Float32Array(count);
    const offsets = new Float32Array(count * 3);
    const rotations = new Float32Array(count);
    const phases = new Float32Array(count);

    const phiRange = Math.PI * 0.35;
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const phi = Math.acos(1 - 2 * t * 0.5) * phiRange;
      const theta = t * Math.PI * 20 + Math.random() * 0.1;

      offsets[i * 3] = Math.sin(phi) * Math.cos(theta) * 3;
      offsets[i * 3 + 1] = Math.cos(phi) * 3 - 0.8;
      offsets[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * 3;

      scales[i] = 0.8 + Math.random() * 0.4;
      rotations[i] = Math.random() * Math.PI * 2;
      phases[i] = Math.random();

      for (let j = 0; j < segments; j++) {
        const baseIdx = (i * segments + j) * 3;
        positions[baseIdx] = hairPositions[j * 3];
        positions[baseIdx + 1] = hairPositions[j * 3 + 1];
        positions[baseIdx + 2] = hairPositions[j * 3 + 2];
      }
    }

    const instancedGeometry = new THREE.InstancedBufferGeometry();
    instancedGeometry.instanceCount = count;
    instancedGeometry.setAttribute("position", new THREE.InstancedBufferAttribute(positions, 3));
    instancedGeometry.setAttribute("aScale", new THREE.InstancedBufferAttribute(scales, 1));
    instancedGeometry.setAttribute("aOffset", new THREE.InstancedBufferAttribute(offsets, 3));
    instancedGeometry.setAttribute("aRotation", new THREE.InstancedBufferAttribute(rotations, 1));
    instancedGeometry.setAttribute("aPhase", new THREE.InstancedBufferAttribute(phases, 1));

    const hairMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc9a45c,
      metalness: 0.35,
      roughness: 0.55,
      transparent: true,
      side: THREE.DoubleSide,
    });

    hairMaterial.defines = hairMaterial.defines || {};
    hairMaterial.defines.USE_ALPHAMAP = "";
    hairMaterial.defines.USE_UV = "";

    const customVertexBefore = /* glsl */ `
      attribute float aScale;
      attribute vec3 aOffset;
      attribute float aRotation;
      attribute float aPhase;
      varying float vTaper;
      varying float vWindStrength;
      uniform float time;
      uniform float windIntensity;

      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+10.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        i = mod289(i);
        vec4 p = permute(permute(permute(
                  i.z + vec4(0.0, i1.z, i2.z, 1.0))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 105.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      void main() {
        float t = position.y;
        vTaper = t;
        float windTime = time * 0.5;
        float windX = snoise(vec3(aOffset.xz * 2.0, windTime)) * 0.5;
        float windY = snoise(vec3(aOffset.xz * 2.0 + 100.0, windTime)) * 0.3;
        float windZ = snoise(vec3(aOffset.xz * 2.0 + 200.0, windTime)) * 0.5;
        vec3 wind = vec3(windX, windY, windZ) * windIntensity;
        float curlAngle = (aPhase + t * 3.0) * 1.5 + windTime * 2.0 + aPhase * 6.28;
        float ca = cos(curlAngle);
        float sa = sin(curlAngle);
        mat3 curlX = mat3(1,0,0, 0,ca,-sa, 0,sa,ca);
        mat3 curlZ = mat3(ca,-sa,0, sa,ca,0, 0,0,1);
        vec3 transformed = position;
        transformed = curlX * transformed;
        transformed = curlZ * transformed;
        transformed.y += t * aScale;
        transformed += wind * t * t * 0.6;
        vWindStrength = length(wind);
        vec4 mvPosition = modelViewMatrix * vec4(aOffset, 1.0);
        mvPosition += vec4(transformed, 0.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const vertexShader = customVertexBefore;

    hairMaterial.onBeforeCompile = (shader: any) => {
      shader.uniforms.time = { value: 0.0 };
      shader.uniforms.windIntensity = { value: 0.2 };
      shader.uniforms.hairColor = { value: new THREE.Vector3(0.788, 0.643, 0.361) };

      shader.vertexShader = vertexShader;

      const colorFrag = /* glsl */ `
        varying float vTaper;
        varying float vWindStrength;
        uniform vec3 hairColor;
        uniform float time;
        uniform float windIntensity;

        vec3 rgb2hsl(vec3 c) {
          float maxC = max(max(c.r, c.g), c.b);
          float minC = min(min(c.r, c.g), c.b);
          float l = (maxC + minC) / 2.0;
          float d = maxC - minC;
          float s = (l > 0.5) ? d / (2.0 - maxC - minC) : d / (maxC + minC + 0.001);
          float h;
          if (d < 0.001) { h = 0.0; }
          else if (maxC == c.r) { h = mod((c.g - c.b) / d, 6.0); }
          else if (maxC == c.g) { h = (c.b - c.r) / d + 2.0; }
          else { h = (c.r - c.g) / d + 4.0; }
          h /= 6.0;
          return vec3(h, s, l);
        }

        vec3 hsl2rgb(vec3 hsl) {
          float h = hsl.x;
          float s = hsl.y;
          float l = hsl.z;
          float c = (1.0 - abs(2.0 * l - 1.0)) * s;
          float x = c * (1.0 - abs(mod(h * 6.0, 2.0) - 1.0));
          float m = l - c / 2.0;
          vec3 rgb;
          if (h < 1.0/6.0) rgb = vec3(c, x, 0.0);
          else if (h < 2.0/6.0) rgb = vec3(x, c, 0.0);
          else if (h < 3.0/6.0) rgb = vec3(0.0, c, x);
          else if (h < 4.0/6.0) rgb = vec3(0.0, x, c);
          else if (h < 5.0/6.0) rgb = vec3(x, 0.0, c);
          else rgb = vec3(c, 0.0, x);
          return rgb + m;
        }

        void main() {
          float hueShift = vWindStrength * 0.05;
          vec3 hsl = rgb2hsl(hairColor);
          hsl.x += hueShift;
          hsl.x = mod(hsl.x, 1.0);
          hsl.y += 0.05;
          hsl.y = clamp(hsl.y, 0.0, 1.0);
          diffuseColor.rgb = hsl2rgb(hsl);
          float alpha = 1.0 - smoothstep(0.7, 1.0, vTaper);
          diffuseColor.a *= alpha * 0.85;
        }
      `;

      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <color_fragment>",
        "#include <color_fragment>\n" + colorFrag
      );

      (hairMaterial as any)._shader = shader;
    };

    const mesh = new THREE.Mesh(instancedGeometry, hairMaterial);
    scene.add(mesh);

    const scalpGeo = new THREE.SphereGeometry(3, 64, 32, 0, Math.PI * 2, 0, Math.PI * 0.35);
    scalpGeo.rotateX(Math.PI);
    scalpGeo.translate(0, -0.8, 0);
    const scalpMat = new THREE.MeshStandardMaterial({
      color: 0x141419,
      roughness: 0.9,
      metalness: 0.1,
    });
    const scalp = new THREE.Mesh(scalpGeo, scalpMat);
    scene.add(scalp);

    let time = 0;
    const animate = () => {
      if (!isVisibleRef.current) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      time += 0.016;
      windIntensityRef.current = THREE.MathUtils.lerp(
        windIntensityRef.current,
        0.2 + Math.abs(mouseRef.current.x) * 0.5 + Math.abs(mouseRef.current.y) * 0.3,
        0.05
      );

      const shader = (hairMaterial as any)._shader;
      if (shader) {
        shader.uniforms.time.value = time;
        shader.uniforms.windIntensity.value = windIntensityRef.current;
      }

      mesh.rotation.y = Math.sin(time * 0.1) * 0.02;

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = 0;
      mouseRef.current.y = 0;
    };

    const handleResize = () => {
      const nw = window.innerWidth;
      const nh = window.innerHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    const handleVisibility = (entries: IntersectionObserverEntry[]) => {
      isVisibleRef.current = entries[0].isIntersecting;
    };

    const observer = new IntersectionObserver(handleVisibility, {
      threshold: 0.01,
    });
    observer.observe(canvas);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      renderer.dispose();
      instancedGeometry.dispose();
      hairMaterial.dispose();
      scalpGeo.dispose();
      scalpMat.dispose();
      baseGeometry.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    />
  );
};

export default HairGrowthScene;
