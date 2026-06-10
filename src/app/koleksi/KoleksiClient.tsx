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

  if (!ready) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <div className="skeleton mx-auto h-4 w-32" />
          <div className="skeleton mx-auto h-9 w-64" />
          <div className="skeleton mx-auto h-4 w-80" />
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-ink-700 p-6">
              <div className="flex items-start gap-3">
                <div className="skeleton h-9 w-9 rounded-xl" />
                <div className="flex-1 space-y-2">
                  <div className="skeleton h-5 w-2/3" />
                  <div className="skeleton h-4 w-full" />
                </div>
              </div>
              <div className="skeleton mt-5 h-16 w-full" />
              <div className="skeleton mt-4 h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

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
        kicker="// koleksi saya"
        title={profile ? `Koleksi ${profile.name}` : "Koleksi Saya"}
        description={
          total > 0
            ? `${total} item tersimpan di perangkat ini. Tekan ikon bookmark di review mana pun untuk menambah atau menghapus.`
            : "Belum ada yang disimpan. Jelajahi review dan tekan ikon bookmark untuk menyimpannya di sini."
        }
      />

      {total === 0 && (
        <div className="mt-12 flex flex-col items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-ink-600 bg-ink-800/50">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-500">
              <path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 10h6" strokeLinecap="round" />
            </svg>
          </div>
          <Link
            href="/repo"
            className="rounded-xl bg-gradient-to-r from-neon-500 to-violet-glow px-6 py-3 text-sm font-bold text-ink-950 transition-opacity hover:opacity-90"
          >
            Mulai Jelajahi Review →
          </Link>
        </div>
      )}

      {savedRepos.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold text-slate-100">Repo GitHub</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {savedRepos.map((r) => (
              <ReviewCard key={r.slug} review={r} basePath="/repo" />
            ))}
          </div>
        </section>
      )}

      {savedModels.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold text-slate-100">Model LLM</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {savedModels.map((m) => (
              <ReviewCard key={m.slug} review={m} basePath="/model" />
            ))}
          </div>
        </section>
      )}

      {savedStacks.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold text-slate-100">Stack & Tools</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {savedStacks.map((s) => (
              <ReviewCard key={s.slug} review={s} basePath="/stack" />
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
