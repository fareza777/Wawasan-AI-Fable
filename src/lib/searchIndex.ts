import { repos } from "@/data/repos";
import { models } from "@/data/models";
import { stacks } from "@/data/stacks";
import { berita } from "@/data/berita";
import { cariDiIndeks, type SearchItem } from "./searchQuery";

export type { SearchItem };


export const searchIndex: SearchItem[] = [
  ...repos.map((r) => ({
    type: "repo" as const,
    typeLabel: "Repo",
    slug: r.slug,
    href: `/repo/${r.slug}`,
    title: r.name,
    subtitle: r.tagline,
    keywords: `${r.name} ${r.tagline} ${r.tags.join(" ")} ${r.summary} ${r.body.join(" ")} ${r.pros.join(" ")} ${r.cons.join(" ")}`.toLowerCase(),
    score: r.score,
  })),
  ...models.map((m) => ({
    type: "model" as const,
    typeLabel: "Model",
    slug: m.slug,
    href: `/model/${m.slug}`,
    title: m.name,
    subtitle: m.tagline,
    keywords: `${m.name} ${m.tagline} ${m.tags.join(" ")} ${m.summary} ${m.body.join(" ")}`.toLowerCase(),
    score: m.score,
  })),
  ...stacks.map((s) => ({
    type: "stack" as const,
    typeLabel: "Tools",
    slug: s.slug,
    href: `/stack/${s.slug}`,
    title: s.name,
    subtitle: s.tagline,
    keywords: `${s.name} ${s.tagline} ${s.tags.join(" ")} ${s.summary} ${s.body.join(" ")}`.toLowerCase(),
    score: s.score,
  })),
  ...berita.map((b) => ({
    type: "berita" as const,
    typeLabel: "Artikel",
    slug: b.slug,
    href: `/berita/${b.slug}`,
    title: b.title,
    subtitle: b.excerpt,
    keywords: `${b.title} ${b.excerpt} ${b.category} ${b.body.map((s) => `${s.heading ?? ""} ${s.paragraphs.join(" ")}`).join(" ")}`.toLowerCase(),
  })),
];

export function cariKonten(query: string, limit = 12): SearchItem[] {
  return cariDiIndeks(searchIndex, query, limit);
}
