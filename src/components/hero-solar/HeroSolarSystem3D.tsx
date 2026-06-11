"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import { createPlanetTexture, createSunTexture } from "./textures";

const PLANETS = [
  { id: "repo", orbit: 1.85, size: 0.12, speed: 0.42, angle: 0.4, kind: "rocky" as const },
  { id: "MCP", orbit: 2.15, size: 0.13, speed: 0.34, angle: 2.1, kind: "ocean" as const },
  { id: "stack", orbit: 2.45, size: 0.15, speed: 0.28, angle: 3.8, kind: "forest" as const },
  { id: "model", orbit: 2.75, size: 0.22, speed: 0.22, angle: 5.2, kind: "gas" as const, ring: true },
  { id: "agent", orbit: 3.05, size: 0.13, speed: 0.3, angle: 1.2, kind: "mars" as const },
  { id: "RAG", orbit: 3.3, size: 0.16, speed: 0.18, angle: 4.6, kind: "lava" as const },
];

const ORBIT_TILT = -0.42;
const SYSTEM_SCALE = 0.88;

function PlanetMesh({
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
      <mesh ref={meshRef} frustumCulled={false}>
        <sphereGeometry args={[size, 48, 48]} />
        <meshStandardMaterial map={texture} roughness={0.85} metalness={0.08} />
      </mesh>
      {ring && (
        <mesh rotation={[1.15, 0.2, 0.35]} frustumCulled={false}>
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
      <mesh ref={glowRef} frustumCulled={false}>
        <sphereGeometry args={[0.62, 32, 32]} />
        <meshBasicMaterial color="#ea580c" transparent opacity={0.18} depthWrite={false} />
      </mesh>
      <mesh ref={ref} frustumCulled={false}>
        <sphereGeometry args={[0.46, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          emissive="#ea580c"
          emissiveIntensity={1.65}
          roughness={0.48}
          metalness={0}
        />
      </mesh>
      <pointLight intensity={28} distance={24} decay={2} color="#fb923c" />
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

  return (
    <group scale={SYSTEM_SCALE}>
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
        <Sun texture={textures.sun} reducedMotion={reducedMotion} />
        {PLANETS.map((p, i) => (
          <PlanetMesh
            key={p.id}
            {...p}
            texture={textures.planets[i]}
            reducedMotion={reducedMotion}
          />
        ))}
      </group>
    </group>
  );
}

export default function HeroSolarSystem3D() {
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <Canvas
      className="hero-visual-canvas"
      camera={{ position: [0, 3.6, 10.2], fov: 52, near: 0.1, far: 100 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 1.75]}
    >
      <Scene reducedMotion={reducedMotion} />
    </Canvas>
  );
}
