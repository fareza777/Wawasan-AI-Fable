import type { MetadataRoute } from "next";
import { repos } from "@/data/repos";
import { models } from "@/data/models";
import { stacks } from "@/data/stacks";
import { berita } from "@/data/berita";

const BASE = "https://wawasan-ai.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const statis = ["", "/repo", "/model", "/stack", "/berita", "/tentang"].map((p) => ({
    url: `${BASE}${p}`,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const detail = [
    ...repos.map((r) => ({ url: `${BASE}/repo/${r.slug}`, lastModified: r.date })),
    ...models.map((m) => ({ url: `${BASE}/model/${m.slug}`, lastModified: m.date })),
    ...stacks.map((s) => ({ url: `${BASE}/stack/${s.slug}`, lastModified: s.date })),
    ...berita.map((b) => ({ url: `${BASE}/berita/${b.slug}`, lastModified: b.date })),
  ].map((d) => ({ ...d, changeFrequency: "monthly" as const, priority: 0.6 }));

  return [...statis, ...detail];
}
