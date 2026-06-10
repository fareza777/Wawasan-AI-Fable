"use client";

import { useEffect, useState } from "react";

// Indikator section aktif di sisi kanan beranda (hanya layar besar).
export default function SectionDots({
  sections,
}: {
  sections: { id: string; label: string }[];
}) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Navigasi section"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex"
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          title={s.label}
          className="group flex items-center justify-end gap-2"
        >
          <span className="hidden whitespace-nowrap rounded-md border border-ink-600 bg-ink-900 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-400 group-hover:block">
            {s.label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === s.id
                ? "h-5 w-1.5 bg-gradient-to-b from-neon-400 to-violet-glow"
                : "h-1.5 w-1.5 bg-ink-600 group-hover:bg-slate-400"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
