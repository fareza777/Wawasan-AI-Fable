"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { cariKonten, SearchItem } from "@/lib/searchIndex";
import { scoreColor } from "./Score";

const typeStyle: Record<string, string> = {
  repo: "bg-cyan-500/15 text-cyan-300",
  model: "bg-violet-500/15 text-violet-300",
  stack: "bg-emerald-500/15 text-emerald-300",
  berita: "bg-amber-500/15 text-amber-300",
};

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results: SearchItem[] = cariKonten(query);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  const go = (item: SearchItem) => {
    setOpen(false);
    router.push(item.href);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Cari konten"
        className="flex h-9 items-center gap-2 rounded-lg border border-ink-600 bg-ink-800/60 px-3 text-sm text-slate-400 transition-colors hover:border-neon-400/40 hover:text-slate-200"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" strokeLinecap="round" />
        </svg>
        <span className="hidden lg:inline">Cari…</span>
        <kbd className="hidden rounded border border-ink-600 bg-ink-900 px-1.5 py-0.5 font-mono text-[10px] text-slate-500 lg:inline">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center bg-ink-950/80 px-4 pt-[12vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-ink-600 bg-ink-900 shadow-2xl shadow-neon-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-ink-700 px-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-500">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" strokeLinecap="round" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActive((a) => Math.min(a + 1, results.length - 1));
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActive((a) => Math.max(a - 1, 0));
                  } else if (e.key === "Enter" && results[active]) {
                    go(results[active]);
                  }
                }}
                placeholder="Cari repo, model, stack, atau artikel…"
                className="w-full bg-transparent py-4 text-sm text-slate-100 outline-none placeholder:text-slate-500"
              />
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {query.trim() === "" ? (
                <p className="px-3 py-6 text-center text-sm text-slate-500">
                  Ketik untuk mencari di seluruh review dan artikel.
                </p>
              ) : results.length === 0 ? (
                <div className="flex flex-col items-center gap-3 px-3 py-8">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-600">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m21 21-4.3-4.3M8.5 11h5" strokeLinecap="round" />
                  </svg>
                  <p className="text-center text-sm text-slate-500">
                    Tidak ada hasil untuk “{query}”.
                    <br />
                    <span className="text-xs text-slate-600">Coba kata kunci lain: “agent”, “lokal”, “coding”…</span>
                  </p>
                </div>
              ) : (
                results.map((r, i) => (
                  <button
                    key={`${r.type}-${r.slug}`}
                    onClick={() => go(r)}
                    onMouseEnter={() => setActive(i)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                      i === active ? "bg-ink-800" : ""
                    }`}
                  >
                    <span className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase ${typeStyle[r.type]}`}>
                      {r.typeLabel}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-slate-100">{r.title}</span>
                      <span className="block truncate text-xs text-slate-500">{r.subtitle}</span>
                    </span>
                    {r.score !== undefined && (
                      <span className={`font-mono text-sm font-bold ${scoreColor(r.score)}`}>
                        {r.score.toFixed(1)}
                      </span>
                    )}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
