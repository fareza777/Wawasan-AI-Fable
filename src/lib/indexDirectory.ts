import { repos } from "@/data/repos";
import { models } from "@/data/models";
import { stacks } from "@/data/stacks";
import { berita } from "@/data/berita";

export type IndexEntry = {
  letter: string;
  title: string;
  href: string;
  type: string;
};

export function getIndexDirectory(): Record<string, IndexEntry[]> {
  const entries: IndexEntry[] = [
    ...repos.map((r) => ({ letter: r.name[0].toUpperCase(), title: r.name, href: `/repo/${r.slug}`, type: "Repo" })),
    ...models.map((m) => ({ letter: m.name[0].toUpperCase(), title: m.name, href: `/model/${m.slug}`, type: "Model" })),
    ...stacks.map((s) => ({ letter: s.name[0].toUpperCase(), title: s.name, href: `/stack/${s.slug}`, type: "Stack" })),
    ...berita.map((b) => ({ letter: b.title[0].toUpperCase(), title: b.title, href: `/berita/${b.slug}`, type: "Artikel" })),
  ].sort((a, b) => a.title.localeCompare(b.title, "id"));

  const grouped: Record<string, IndexEntry[]> = {};
  for (const e of entries) {
    const letter = /[A-Z0-9]/.test(e.letter) ? e.letter : "#";
    (grouped[letter] ??= []).push(e);
  }
  return grouped;
}
