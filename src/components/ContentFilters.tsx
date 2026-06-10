"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ReviewCard from "./ReviewCard";
import ArtikelCard from "./ArtikelCard";
import { Review, Artikel } from "@/lib/types";
import { slugifyTag } from "@/lib/rubrik";

type SortKey = "score" | "date" | "name";

export default function ContentFilters({
  items,
  type,
  basePath,
  mode,
}: {
  items: Review[] | Artikel[];
  type: "review" | "artikel";
  basePath?: string;
  mode: "repo" | "model" | "stack" | "berita";
}) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("");
  const [sort, setSort] = useState<SortKey>(mode === "model" ? "score" : "date");

  const tags = useMemo(() => {
    const set = new Set<string>();
    if (type === "review") {
      for (const r of items as Review[]) for (const t of r.tags) set.add(t);
    } else {
      for (const a of items as Artikel[]) set.add(a.category);
    }
    return [...set].sort();
  }, [items, type]);

  const filtered = useMemo(() => {
    if (type === "review") {
      let reviews = [...(items as Review[])];
      if (query) {
        const q = query.toLowerCase();
        reviews = reviews.filter(
          (r) =>
            r.name.toLowerCase().includes(q) ||
            r.tagline.toLowerCase().includes(q) ||
            r.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
      if (tag) reviews = reviews.filter((r) => r.tags.includes(tag));
      reviews.sort((a, b) => {
        if (sort === "score") return b.score - a.score;
        if (sort === "date") return b.date.localeCompare(a.date);
        return a.name.localeCompare(b.name, "id");
      });
      return reviews;
    }
    let artikels = [...(items as Artikel[])];
    if (query) {
      const q = query.toLowerCase();
      return artikels
        .filter(
          (a) =>
            a.title.toLowerCase().includes(q) ||
            a.excerpt.toLowerCase().includes(q) ||
            a.category.toLowerCase().includes(q)
        )
        .sort((a, b) => b.date.localeCompare(a.date));
    }
    if (tag) return artikels.filter((a) => a.category === tag).sort((a, b) => b.date.localeCompare(a.date));
    return artikels.sort((a, b) => b.date.localeCompare(a.date));
  }, [items, query, tag, sort, type]);

  return (
    <div>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari dalam halaman ini…"
          className="h-11 flex-1 rounded-xl border border-ink-600 bg-ink-900/60 px-4 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-neon-400/60 sm:min-w-[200px]"
        />
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="h-11 rounded-xl border border-ink-600 bg-ink-900/60 px-4 text-sm text-slate-300 outline-none"
        >
          <option value="">Semua tag</option>
          {tags.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {type === "review" && (
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="h-11 rounded-xl border border-ink-600 bg-ink-900/60 px-4 text-sm text-slate-300 outline-none"
          >
            <option value="score">Urutkan: Skor</option>
            <option value="date">Urutkan: Terbaru</option>
            <option value="name">Urutkan: Nama</option>
          </select>
        )}
      </div>

      {tag && (
        <p className="mt-4 text-sm text-slate-400">
          Tag:{" "}
          <Link href={`/tag/${slugifyTag(tag)}`} className="text-neon-400 hover:underline">
            {tag}
          </Link>
        </p>
      )}

      <p className="mt-4 text-sm text-slate-500">{filtered.length} hasil</p>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {type === "review"
          ? (filtered as Review[]).map((r) => (
              <ReviewCard key={r.slug} review={r} basePath={basePath!} contentType={mode === "berita" ? "repo" : mode} />
            ))
          : (filtered as Artikel[]).map((a) => <ArtikelCard key={a.slug} artikel={a} />)}
      </div>
    </div>
  );
}
