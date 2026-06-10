"use client";

import { useEffect, useState } from "react";
import { scoreColor } from "./Score";

export default function ScoreRing({ score }: { score: number }) {
  const r = 30;
  const c = 2 * Math.PI * r;
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(score);
      return;
    }
    const durasi = 900;
    const mulai = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - mulai) / durasi);
      const ease = 1 - Math.pow(1 - t, 3);
      setShown(score * ease);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [score]);

  return (
    <div className="relative h-20 w-20 shrink-0">
      <svg viewBox="0 0 72 72" className="h-full w-full -rotate-90">
        <circle cx="36" cy="36" r={r} fill="none" stroke="#1a2238" strokeWidth="6" />
        <circle
          cx="36"
          cy="36"
          r={r}
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${(shown / 10) * c} ${c - (shown / 10) * c}`}
        />
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`font-mono text-xl font-bold ${scoreColor(score)}`}>
          {shown.toFixed(1)}
        </span>
        <span className="text-[9px] uppercase tracking-wider text-slate-500">/ 10</span>
      </div>
    </div>
  );
}
