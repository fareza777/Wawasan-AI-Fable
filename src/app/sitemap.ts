import type { MetadataRoute } from "next";
import { repos } from "@/data/repos";
import { models } from "@/data/models";
import { stacks } from "@/data/stacks";
import { berita } from "@/data/berita";
import { allTags } from "@/lib/tags";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wawasanai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const statis = [
    "",
    "/repo",
    "/repo/weekly",
    "/model",
    "/stack",
    "/berita",
    "/tentang",
    "/koleksi",
    "/bandingkan",
    "/indeks",
    "/changelog",
  ].map((p) => ({
    url: `${BASE}${p}`,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const tags = allTags.map((t) => ({
    url: `${BASE}/tag/${t.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const detail = [
    ...repos.map((r) => ({ url: `${BASE}/repo/${r.slug}`, lastModified: r.updatedAt ?? r.date })),
    ...models.map((m) => ({ url: `${BASE}/model/${m.slug}`, lastModified: m.updatedAt ?? m.date })),
    ...stacks.map((s) => ({ url: `${BASE}/stack/${s.slug}`, lastModified: s.updatedAt ?? s.date })),
    ...berita.map((b) => ({ url: `${BASE}/berita/${b.slug}`, lastModified: b.date })),
  ].map((d) => ({ ...d, changeFrequency: "monthly" as const, priority: 0.6 }));

  return [...statis, ...tags, ...detail];
}
