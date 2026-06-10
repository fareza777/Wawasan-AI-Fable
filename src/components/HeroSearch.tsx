"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cariKonten } from "@/lib/searchIndex";

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const results = query.trim() ? cariKonten(query, 3) : [];

  return (
    <div className="fade-up delay-3 mt-8 lg:hidden">
      <div className="overflow-hidden rounded-2xl border border-ink-600 bg-ink-900/90 p-4">
        <p className="font-mono text-xs text-slate-500">
          <span className="text-emerald-400">$</span> wawasan cari
        </p>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && results[0]) router.push(results[0].href);
          }}
          placeholder='"agent terbaik untuk pemula"'
          className="mt-2 w-full bg-transparent font-mono text-sm text-neon-400 outline-none placeholder:text-slate-600"
        />
        {results.length > 0 && (
          <div className="mt-3 space-y-1.5 rounded-lg border border-ink-700 bg-ink-950/60 p-3">
            {results.map((r) => (
              <button
                key={`${r.type}-${r.slug}`}
                onClick={() => router.push(r.href)}
                className="block w-full text-left font-mono text-xs text-slate-300 hover:text-neon-400"
              >
                <span className="text-violet-300">[{r.typeLabel.toLowerCase()}]</span> {r.title}
                {r.score !== undefined && <span className="text-emerald-400"> ★ {r.score.toFixed(1)}</span>}
              </button>
            ))}
          </div>
        )}
        <p className="mt-3 font-mono text-xs text-slate-500">
          <span className="text-emerald-400">$</span>{" "}
          <span className="cursor-blink inline-block h-3 w-1.5 translate-y-0.5 bg-neon-400" />
        </p>
      </div>
    </div>
  );
}
