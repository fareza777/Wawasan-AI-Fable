import { repos } from "@/data/repos";
import { models } from "@/data/models";
import { stacks } from "@/data/stacks";
import { berita } from "@/data/berita";
import { slugifyTag } from "./rubrik";
import { ContentType } from "./storage";

export type TagEntry = {
  tag: string;
  slug: string;
  count: number;
};

export type TaggedItem = {
  type: ContentType;
  slug: string;
  title: string;
  subtitle: string;
  href: string;
  score?: number;
};

function collectTags(): TagEntry[] {
  const map = new Map<string, number>();
  for (const r of repos) for (const t of r.tags) map.set(t, (map.get(t) ?? 0) + 1);
  for (const m of models) for (const t of m.tags) map.set(t, (map.get(t) ?? 0) + 1);
  for (const s of stacks) for (const t of s.tags) map.set(t, (map.get(t) ?? 0) + 1);
  for (const b of berita) map.set(b.category, (map.get(b.category) ?? 0) + 1);
  return [...map.entries()]
    .map(([tag, count]) => ({ tag, slug: slugifyTag(tag), count }))
    .sort((a, b) => b.count - a.count);
}

export const allTags = collectTags();

export function getItemsByTag(slug: string): TaggedItem[] {
  const tagLower = slug.replace(/-/g, " ").toLowerCase();
  const items: TaggedItem[] = [];

  for (const r of repos) {
    if (r.tags.some((t) => t.toLowerCase() === tagLower || slugifyTag(t) === slug)) {
      items.push({ type: "repo", slug: r.slug, title: r.name, subtitle: r.tagline, href: `/repo/${r.slug}`, score: r.score });
    }
  }
  for (const m of models) {
    if (m.tags.some((t) => t.toLowerCase() === tagLower || slugifyTag(t) === slug)) {
      items.push({ type: "model", slug: m.slug, title: m.name, subtitle: m.tagline, href: `/model/${m.slug}`, score: m.score });
    }
  }
  for (const s of stacks) {
    if (s.tags.some((t) => t.toLowerCase() === tagLower || slugifyTag(t) === slug)) {
      items.push({ type: "stack", slug: s.slug, title: s.name, subtitle: s.tagline, href: `/stack/${s.slug}`, score: s.score });
    }
  }
  for (const b of berita) {
    if (b.category.toLowerCase() === tagLower || slugifyTag(b.category) === slug) {
      items.push({ type: "berita", slug: b.slug, title: b.title, subtitle: b.excerpt, href: `/berita/${b.slug}` });
    }
  }
  return items;
}

export function getTagLabel(slug: string) {
  return allTags.find((t) => t.slug === slug)?.tag ?? slug.replace(/-/g, " ");
}
