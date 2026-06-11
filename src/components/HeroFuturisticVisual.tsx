"use client";

import dynamic from "next/dynamic";

const HeroSolarSystem3D = dynamic(() => import("./hero-solar/HeroSolarSystem3D"), {
  ssr: false,
  loading: () => <div className="hero-visual-canvas hero-visual-canvas--loading" aria-hidden />,
});

/** Hero kanan — tata surya 3D (third-person, planet bertekstur). */
export default function HeroFuturisticVisual() {
  return (
    <div className="hero-visual-float" aria-hidden>
      <HeroSolarSystem3D />
    </div>
  );
}
