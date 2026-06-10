"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SearchModal from "./SearchModal";
import ProfileMenu from "./ProfileMenu";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/repo", label: "Review Repo" },
  { href: "/model", label: "Review Model" },
  { href: "/stack", label: "Review Stack" },
  { href: "/berita", label: "Berita" },
  { href: "/koleksi", label: "Koleksi" },
  { href: "/tentang", label: "Tentang" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-ink-700/80 bg-ink-950/95 shadow-lg shadow-ink-950/60"
          : "border-ink-700/40 bg-ink-950/70"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "py-2" : "py-3.5"
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="logo-mark flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-neon-500 to-violet-glow font-mono text-sm font-bold text-ink-950">
            W
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-100">
            Wawasan<span className="text-gradient">AI</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href))
                  ? "bg-ink-800 text-neon-400"
                  : "text-slate-300 hover:bg-ink-800/60 hover:text-slate-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <SearchModal />
          <ThemeToggle />
          <div className="hidden lg:block">
            <ProfileMenu />
          </div>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-600 text-slate-300 lg:hidden"
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
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink-700/60 px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                pathname.startsWith(l.href) ? "bg-ink-800 text-neon-400" : "text-slate-300 hover:bg-ink-800"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 px-3">
            <ProfileMenu />
          </div>
        </div>
      )}
    </header>
  );
}
