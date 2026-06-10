"use client";

import { useEffect, useState } from "react";

type TocItem = { id: string; label: string };

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (!el) continue;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(item.id);
        },
        { rootMargin: "-20% 0% -70% 0%" }
      );
      obs.observe(el);
      observers.push(obs);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  if (items.length < 2) return null;

  return (
    <nav className="sticky top-24 hidden max-h-[70vh] overflow-y-auto rounded-2xl border border-ink-600 bg-ink-900/60 p-5 lg:block">
      <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-neon-400">
        Daftar Isi
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-sm transition-colors ${
                active === item.id ? "font-semibold text-neon-400" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
