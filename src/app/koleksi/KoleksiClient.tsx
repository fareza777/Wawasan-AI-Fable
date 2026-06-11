"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { repos } from "@/data/repos";
import { models } from "@/data/models";
import { stacks } from "@/data/stacks";
import { berita } from "@/data/berita";
import {
  BookmarkItem,
  getBookmarks,
  getProfile,
  Profile,
  STORAGE_EVENT,
} from "@/lib/storage";
import ReviewCard from "@/components/ReviewCard";
import ArtikelCard from "@/components/ArtikelCard";
import ListHeader from "@/components/ListHeader";

const popular = [
  { href: "/repo/openclaw", label: "OpenClaw", type: "Repo" },
  { href: "/model/claude-opus-4-5", label: "Claude Opus 4.5", type: "Model" },
  { href: "/stack/cursor", label: "Cursor", type: "Stack" },
];

export default function KoleksiClient() {
  const [items, setItems] = useState<BookmarkItem[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => {
      setItems(getBookmarks());
      setProfile(getProfile());
      setReady(true);
    };
    sync();
    window.addEventListener(STORAGE_EVENT, sync);
    return () => window.removeEventListener(STORAGE_EVENT, sync);
  }, []);

  if (!ready) return <div className="min-h-[50vh]" />;

  const savedRepos = repos.filter((r) =>
    items.some((i) => i.type === "repo" && i.slug === r.slug)
  );
  const savedModels = models.filter((m) =>
    items.some((i) => i.type === "model" && i.slug === m.slug)
  );
  const savedStacks = stacks.filter((s) =>
    items.some((i) => i.type === "stack" && i.slug === s.slug)
  );
  const savedBerita = berita.filter((b) =>
    items.some((i) => i.type === "berita" && i.slug === b.slug)
  );

  const total = items.length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <ListHeader
        kicker="// koleksi"
        title={profile ? `Koleksi ${profile.name}` : "Koleksi"}
        description={
          total > 0
            ? `${total} item tersimpan di perangkat ini. Tekan ikon bookmark di review mana pun untuk menambah atau menghapus.`
            : "Belum ada yang disimpan. Jelajahi review dan tekan ikon bookmark untuk menyimpannya di sini."
        }
      />

      {total === 0 && (
        <div className="mt-12 flex flex-col items-center gap-6 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-ink-600 bg-gradient-to-br from-neon-500/20 to-violet-glow/20">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neon-400">
              <path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="max-w-sm text-slate-300">Mulai dari review populer ini:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {popular.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="rounded-xl border border-ink-600 bg-ink-900/60 px-4 py-2 text-sm text-slate-200 hover:border-neon-400/40"
              >
                <span className="text-xs text-slate-500">{p.type} · </span>
                {p.label}
              </Link>
            ))}
          </div>
          <Link
            href="/repo"
            className="rounded-xl bg-gradient-to-r from-neon-500 to-violet-glow px-6 py-3 text-sm font-bold text-ink-950 transition-opacity hover:opacity-90"
          >
            Jelajahi Semua Review →
          </Link>
        </div>
      )}

      {savedRepos.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold text-slate-100">Repo GitHub</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {savedRepos.map((r) => (
              <ReviewCard key={r.slug} review={r} basePath="/repo" contentType="repo" />
            ))}
          </div>
        </section>
      )}

      {savedModels.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold text-slate-100">Model LLM</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {savedModels.map((m) => (
              <ReviewCard key={m.slug} review={m} basePath="/model" contentType="model" />
            ))}
          </div>
        </section>
      )}

      {savedStacks.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold text-slate-100">Tools Coding AI</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {savedStacks.map((s) => (
              <ReviewCard key={s.slug} review={s} basePath="/stack" contentType="stack" />
            ))}
          </div>
        </section>
      )}

      {savedBerita.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold text-slate-100">Artikel</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {savedBerita.map((b) => (
              <ArtikelCard key={b.slug} artikel={b} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
