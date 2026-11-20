import type { ContentType } from "./storage";

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

/** Pure search over a prebuilt index (no data imports — safe for client components). */
export function cariDiIndeks(index: SearchItem[], query: string, limit = 12): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);
  return index
    .map((item) => {
      let skor = 0;
      for (const t of terms) {
        if (item.title.toLowerCase().includes(t)) skor += 5;
        else if (item.subtitle.toLowerCase().includes(t)) skor += 3;
        else if (item.keywords.includes(t)) skor += 1;
      }
      return { item, skor };
    })
    .filter((x) => x.skor > 0)
    .sort((a, b) => b.skor - a.skor)
    .slice(0, limit)
    .map((x) => x.item);
}
