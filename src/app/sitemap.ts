import type { MetadataRoute } from "next";
import { repos } from "@/data/repos";
import { models } from "@/data/models";
import { stacks } from "@/data/stacks";
import { berita } from "@/data/berita";
import { allTags } from "@/lib/tags";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const statis = [
    "",
    "/repo",
    "/repo/daily",
    "/repo/weekly",
    "/model",
    "/stack",
    "/berita",
    "/tentang",
    "/bandingkan",
    "/indeks",
    "/changelog",
  ].map((p) => ({
    url: `${SITE_URL}${p}`,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const tags = allTags.map((t) => ({
    url: `${SITE_URL}/tag/${t.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const detail = [
    ...repos.map((r) => ({ url: `${SITE_URL}/repo/${r.slug}`, lastModified: r.updatedAt ?? r.date })),
    ...models.map((m) => ({ url: `${SITE_URL}/model/${m.slug}`, lastModified: m.updatedAt ?? m.date })),
    ...stacks.map((s) => ({ url: `${SITE_URL}/stack/${s.slug}`, lastModified: s.updatedAt ?? s.date })),
    ...berita.map((b) => ({ url: `${SITE_URL}/berita/${b.slug}`, lastModified: b.date })),
  ].map((d) => ({ ...d, changeFrequency: "monthly" as const, priority: 0.6 }));

  return [...statis, ...tags, ...detail];
}
