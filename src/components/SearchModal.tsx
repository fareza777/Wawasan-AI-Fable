"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cariKonten, SearchItem } from "@/lib/searchIndex";
import { scoreColor } from "./Score";

const typeStyle: Record<string, string> = {
  repo: "bg-cyan-500/15 text-cyan-300",
  model: "bg-violet-500/15 text-violet-300",
  stack: "bg-emerald-500/15 text-emerald-300",
  berita: "bg-amber-500/15 text-amber-300",
};

const quickLinks = [
  { href: "/repo/daily", label: "Top Daily" },
  { href: "/repo/weekly", label: "Top Weekly" },
  { href: "/repo/openclaw", label: "OpenClaw" },
  { href: "/model/claude-opus-4-5", label: "Claude Opus 4.5" },
  { href: "/stack/cursor", label: "Cursor" },
];

function shortcutLabel() {
  if (typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform)) return "⌘K";
  return "Ctrl+K";
}

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [modKey, setModKey] = useState("Ctrl+K");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results: SearchItem[] = cariKonten(query);

  const close = () => setOpen(false);

  useEffect(() => {
    setModKey(shortcutLabel());
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;

    setQuery("");
    setActive(0);
    document.body.style.overflow = "hidden";

    const t = setTimeout(() => inputRef.current?.focus(), 50);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const go = (item: SearchItem) => {
    close();
    router.push(item.href);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Tutup pencarian" : "Cari konten"}
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-600 bg-ink-800/60 text-slate-300 transition-colors hover:border-neon-400/40 hover:text-slate-100 sm:w-auto sm:gap-2 sm:px-3"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" strokeLinecap="round" />
        </svg>
        <span className="hidden text-sm lg:inline">Cari</span>
        <kbd className="hidden rounded border border-ink-600 bg-ink-900 px-1.5 py-0.5 font-mono text-[10px] text-slate-500 lg:inline">
          {modKey}
        </kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100]" role="presentation">
          <button
            type="button"
            aria-label="Tutup pencarian"
            className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
            onClick={close}
          />

          <div className="relative mx-auto w-full max-w-xl px-4 pt-[4.5rem] sm:pt-20">
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Pencarian konten"
              className="fade-up overflow-hidden rounded-xl border border-ink-600/90 bg-ink-900 shadow-xl shadow-ink-950/50"
            >
              <div className="flex items-center gap-3 border-b border-ink-700/70 px-4">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="shrink-0 text-slate-500"
                >
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
                      setActive((a) => Math.min(a + 1, Math.max(0, results.length - 1)));
                    } else if (e.key === "ArrowUp") {
                      e.preventDefault();
                      setActive((a) => Math.max(a - 1, 0));
                    } else if (e.key === "Enter" && results[active]) {
                      go(results[active]);
                    } else if (e.key === "Escape") {
                      e.preventDefault();
                      close();
                    }
                  }}
                  placeholder="Cari repo, model, tools, atau artikel…"
                  className="min-w-0 flex-1 bg-transparent py-3.5 text-sm text-slate-100 outline-none placeholder:text-slate-500"
                />
                <button
                  type="button"
                  onClick={close}
                  aria-label="Tutup"
                  className="shrink-0 rounded-md p-1.5 text-slate-500 transition-colors hover:bg-ink-800 hover:text-slate-200"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <div className="max-h-[min(50vh,18rem)] overflow-y-auto">
                {query.trim() === "" ? (
                  <div className="px-4 py-3">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                      Populer
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {quickLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={close}
                          className="rounded-lg border border-ink-700/70 bg-ink-800/50 px-2.5 py-1 text-xs text-slate-300 transition-colors hover:border-neon-400/30 hover:text-slate-100"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : results.length === 0 ? (
                  <p className="px-4 py-8 text-center text-sm text-slate-500">
                    Tidak ada hasil untuk &ldquo;{query}&rdquo;
                  </p>
                ) : (
                  <div className="p-1.5">
                    {results.map((r, i) => (
                      <button
                        key={`${r.type}-${r.slug}`}
                        type="button"
                        onClick={() => go(r)}
                        onMouseEnter={() => setActive(i)}
                        className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left transition-colors ${
                          i === active ? "bg-ink-800" : "hover:bg-ink-800/60"
                        }`}
                      >
                        <span
                          className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${typeStyle[r.type]}`}
                        >
                          {r.typeLabel}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium text-slate-100">
                            {r.title}
                          </span>
                          <span className="block truncate text-xs text-slate-500">{r.subtitle}</span>
                        </span>
                        {r.score !== undefined && (
                          <span className={`font-mono text-xs font-bold ${scoreColor(r.score)}`}>
                            {r.score.toFixed(1)}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between border-t border-ink-700/70 px-4 py-2 text-[10px] text-slate-500">
                <span>↑↓ navigasi · Enter buka</span>
                <span>Esc tutup</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
