import { repos } from "@/data/repos";
import { models } from "@/data/models";
import { stacks } from "@/data/stacks";
import { berita } from "@/data/berita";
import { ContentType } from "./storage";

export type RelatedItem = {
  type: ContentType;
  slug: string;
  title: string;
  subtitle: string;
  href: string;
  score?: number;
};

const allReviews = [
  ...repos.map((r) => ({ ...r, type: "repo" as const, href: `/repo/${r.slug}` })),
  ...models.map((m) => ({ ...m, type: "model" as const, href: `/model/${m.slug}` })),
  ...stacks.map((s) => ({ ...s, type: "stack" as const, href: `/stack/${s.slug}` })),
];

export function getRelatedReviews(
  type: ContentType,
  slug: string,
  tags: string[],
  limit = 3
): RelatedItem[] {
  if (type === "berita") {
    const artikel = berita.find((b) => b.slug === slug);
    if (!artikel) return [];
    return berita
      .filter((b) => b.slug !== slug)
      .map((b) => ({
        score: undefined,
        type: "berita" as const,
        slug: b.slug,
        title: b.title,
        subtitle: b.excerpt,
        href: `/berita/${b.slug}`,
        relevance:
          (b.category === artikel.category ? 3 : 0) +
          (b.title.toLowerCase().includes("indonesia") ? 1 : 0),
      }))
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, limit)
      .map(({ relevance: _, ...item }) => item);
  }

  return allReviews
    .filter((r) => !(r.type === type && r.slug === slug))
    .map((r) => ({
      type: r.type,
      slug: r.slug,
      title: r.name,
      subtitle: r.tagline,
      href: r.href,
      score: r.score,
      relevance: r.tags.filter((t) => tags.includes(t)).length,
    }))
    .sort((a, b) => b.relevance - a.relevance || (b.score ?? 0) - (a.score ?? 0))
    .slice(0, limit)
    .map(({ relevance: _, ...item }) => item);
}
