"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/repo", label: "Review Repo" },
  { href: "/model", label: "Review Model" },
  { href: "/stack", label: "Review Stack" },
  { href: "/berita", label: "Berita & Wawasan" },
  { href: "/tentang", label: "Tentang" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink-700/60 bg-ink-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-neon-500 to-violet-glow font-mono text-sm font-bold text-ink-950">
            W
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-100">
            Wawasan<span className="text-gradient">AI</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                pathname.startsWith(l.href)
                  ? "bg-ink-800 text-neon-400"
                  : "text-slate-400 hover:bg-ink-800/60 hover:text-slate-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-600 text-slate-300 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Buka menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-700/60 px-4 pb-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-ink-800"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
