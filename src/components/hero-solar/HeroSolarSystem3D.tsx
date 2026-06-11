"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Line, Stars } from "@react-three/drei";
import * as THREE from "three";
import { createPlanetTexture, createSunTexture } from "./textures";

const PLANETS = [
  { label: "repo", orbit: 2.15, size: 0.13, speed: 0.42, angle: 0.4, kind: "rocky" as const },
  { label: "MCP", orbit: 2.55, size: 0.15, speed: 0.34, angle: 2.1, kind: "ocean" as const },
  { label: "stack", orbit: 2.95, size: 0.17, speed: 0.28, angle: 3.8, kind: "forest" as const },
  { label: "model", orbit: 3.35, size: 0.26, speed: 0.22, angle: 5.2, kind: "gas" as const, ring: true },
  { label: "agent", orbit: 3.72, size: 0.15, speed: 0.3, angle: 1.2, kind: "mars" as const },
  { label: "RAG", orbit: 4.05, size: 0.19, speed: 0.18, angle: 4.6, kind: "lava" as const },
];

const ORBIT_TILT = -0.42;

function OrbitRing({ radius }: { radius: number }) {
  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i <= 96; i++) {
      const a = (i / 96) * Math.PI * 2;
      pts.push([Math.cos(a) * radius, 0, Math.sin(a) * radius]);
    }
    return pts;
  }, [radius]);

  return (
    <Line
      points={points}
      color="#94a3b8"
      transparent
      opacity={0.32}
      lineWidth={1}
      dashed
      dashSize={0.14}
      gapSize={0.1}
    />
  );
}

function PlanetMesh({
  label,
  orbit,
  size,
  speed,
  angle,
  ring,
  texture,
  reducedMotion,
}: (typeof PLANETS)[number] & { texture: THREE.CanvasTexture; reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const theta = useRef(angle);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    if (!reducedMotion) theta.current += speed * delta;
    groupRef.current.position.set(
      Math.cos(theta.current) * orbit,
      0,
      Math.sin(theta.current) * orbit,
    );
    if (meshRef.current && !reducedMotion) {
      meshRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 48, 48]} />
        <meshStandardMaterial map={texture} roughness={0.85} metalness={0.08} />
      </mesh>
      {ring && (
        <mesh rotation={[1.15, 0.2, 0.35]}>
          <ringGeometry args={[size * 1.45, size * 2.05, 64]} />
          <meshBasicMaterial
            color="#c4b5fd"
            transparent
            opacity={0.55}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      )}
      <Html center position={[0, size + 0.22, 0]} distanceFactor={8} className="hero-planet-label-3d">
        {label}
      </Html>
    </group>
  );
}

function Sun({ texture, reducedMotion }: { texture: THREE.CanvasTexture; reducedMotion: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (reducedMotion) return;
    const t = state.clock.elapsedTime;
    if (ref.current) ref.current.rotation.y = t * 0.08;
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(t * 1.2) * 0.04);
    }
  });

  return (
    <>
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.72, 32, 32]} />
        <meshBasicMaterial color="#fbbf24" transparent opacity={0.12} depthWrite={false} />
      </mesh>
      <mesh ref={ref}>
        <sphereGeometry args={[0.52, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          emissive="#f59e0b"
          emissiveIntensity={1.4}
          roughness={0.55}
          metalness={0}
        />
      </mesh>
      <pointLight intensity={28} distance={24} decay={2} color="#fde68a" />
    </>
  );
}

function Scene({ reducedMotion }: { reducedMotion: boolean }) {
  const textures = useMemo(() => {
    if (typeof document === "undefined") return null;
    return {
      sun: createSunTexture(),
      planets: PLANETS.map((p) => createPlanetTexture(p.kind)),
    };
  }, []);

  if (!textures) return null;

  const orbitRadii = [...new Set(PLANETS.map((p) => p.orbit))];

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[6, 8, 4]} intensity={0.45} color="#e2e8f0" />
      <Stars
        radius={42}
        depth={28}
        count={900}
        factor={2.2}
        saturation={0}
        fade
        speed={reducedMotion ? 0 : 0.35}
      />
      <group rotation={[ORBIT_TILT, 0, 0]}>
        {orbitRadii.map((r) => (
          <OrbitRing key={r} radius={r} />
        ))}
        <Sun texture={textures.sun} reducedMotion={reducedMotion} />
        {PLANETS.map((p, i) => (
          <PlanetMesh
            key={p.label}
            {...p}
            texture={textures.planets[i]}
            reducedMotion={reducedMotion}
          />
        ))}
      </group>
    </>
  );
}

export default function HeroSolarSystem3D() {
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <Canvas
      className="hero-visual-canvas"
      camera={{ position: [0, 4.8, 7.8], fov: 42, near: 0.1, far: 100 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 1.75]}
    >
      <Scene reducedMotion={reducedMotion} />
    </Canvas>
  );
}
