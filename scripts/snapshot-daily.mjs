/**
 * Simpan snapshot Top Daily Repo ke src/data/dailySnapshots/YYYY-MM-DD.json
 * Jalankan harian (cron / GitHub Action) agar riwayat harian terisi.
 */
import fs from "node:fs/promises";
import path from "node:path";

const TOP_N = 10;
const OUT_DIR = path.join(process.cwd(), "src", "data", "dailySnapshots");

async function fetchDaily() {
  const res = await fetch("https://trendshift.io/", {
    headers: { "User-Agent": "WawasanAI/1.0 (+https://wawasanai.com)" },
  });
  if (!res.ok) throw new Error(`Trendshift ${res.status}`);
  const html = await res.text();

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(m[1]);
      if (data["@type"] !== "ItemList" || !/daily/i.test(data.name ?? "")) continue;
      const repos = data.itemListElement
        .map((item) => {
          const fullName = item.item?.name?.trim();
          if (!fullName?.includes("/")) return null;
          const [owner, repo] = fullName.split("/");
          return {
            rank: item.position,
            fullName,
            owner,
            repo,
            description: item.item.description?.trim() ?? "",
            githubUrl: item.item.codeRepository ?? item.item.url ?? `https://github.com/${fullName}`,
            trendshiftUrl: item.url,
            language: item.item.programmingLanguage,
            topics: Array.isArray(item.item.keywords)
              ? item.item.keywords
              : (item.item.keywords ?? "").split(",").map((k) => k.trim()).filter(Boolean),
            dateCreated: item.item.dateCreated,
          };
        })
        .filter(Boolean)
        .sort((a, b) => a.rank - b.rank)
        .slice(0, TOP_N);

      return {
        cadence: "daily",
        title: data.name,
        periodLabel: "Hari ini",
        period: null,
        sourceUrl: "https://trendshift.io/",
        fetchedAt: new Date().toISOString(),
        repos,
      };
    } catch {}
  }
  throw new Error("Daily ItemList not found");
}

const date = new Date().toISOString().slice(0, 10);
const data = await fetchDaily();
await fs.mkdir(OUT_DIR, { recursive: true });
const out = path.join(OUT_DIR, `${date}.json`);
await fs.writeFile(out, JSON.stringify(data, null, 2), "utf-8");
console.log("Saved", out, "—", data.repos.length, "repos");
