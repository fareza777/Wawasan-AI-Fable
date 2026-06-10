// Indeks pencarian ringan: hanya judul/tag/ringkasan, tanpa isi artikel,
// agar bundle client tetap kecil.

import { repos } from "@/data/repos";
import { models } from "@/data/models";
import { stacks } from "@/data/stacks";
import { berita } from "@/data/berita";
import { ContentType } from "./storage";

export type SearchItem = {
  type: ContentType;
  typeLabel: string;
  slug: string;
  href: string;
  title: string;
  subtitle: string;
  keywords: string;
  score?: number;
};

export const searchIndex: SearchItem[] = [
  ...repos.map((r) => ({
    type: "repo" as const,
    typeLabel: "Repo",
    slug: r.slug,
    href: `/repo/${r.slug}`,
    title: r.name,
    subtitle: r.tagline,
    keywords: `${r.name} ${r.tagline} ${r.tags.join(" ")}`.toLowerCase(),
    score: r.score,
  })),
  ...models.map((m) => ({
    type: "model" as const,
    typeLabel: "Model",
    slug: m.slug,
    href: `/model/${m.slug}`,
    title: m.name,
    subtitle: m.tagline,
    keywords: `${m.name} ${m.tagline} ${m.tags.join(" ")}`.toLowerCase(),
    score: m.score,
  })),
  ...stacks.map((s) => ({
    type: "stack" as const,
    typeLabel: "Stack",
    slug: s.slug,
    href: `/stack/${s.slug}`,
    title: s.name,
    subtitle: s.tagline,
    keywords: `${s.name} ${s.tagline} ${s.tags.join(" ")}`.toLowerCase(),
    score: s.score,
  })),
  ...berita.map((b) => ({
    type: "berita" as const,
    typeLabel: "Artikel",
    slug: b.slug,
    href: `/berita/${b.slug}`,
    title: b.title,
    subtitle: b.excerpt,
    keywords: `${b.title} ${b.excerpt} ${b.category}`.toLowerCase(),
  })),
];

export function cariKonten(query: string, limit = 8): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);
  return searchIndex
    .map((item) => {
      let skor = 0;
      for (const t of terms) {
        if (item.title.toLowerCase().includes(t)) skor += 3;
        else if (item.keywords.includes(t)) skor += 1;
      }
      return { item, skor };
    })
    .filter((x) => x.skor > 0)
    .sort((a, b) => b.skor - a.skor)
    .slice(0, limit)
    .map((x) => x.item);
}
