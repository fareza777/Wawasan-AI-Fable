import { berita } from "@/data/berita";
import { repos } from "@/data/repos";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wawasanai.com";

export async function GET() {
  const items = [
    ...berita.map((b) => ({
      title: b.title,
      link: `${BASE}/berita/${b.slug}`,
      date: b.date,
      description: b.excerpt,
    })),
    ...repos.slice(0, 5).map((r) => ({
      title: `Review: ${r.name}`,
      link: `${BASE}/repo/${r.slug}`,
      date: r.date,
      description: r.summary,
    })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Wawasan AI</title>
    <link>${BASE}</link>
    <description>Portal review AI Indonesia — repo, model, stack, dan wawasan AI.</description>
    <language>id</language>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items
      .map(
        (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid>${item.link}</guid>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <description><![CDATA[${item.description}]]></description>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
