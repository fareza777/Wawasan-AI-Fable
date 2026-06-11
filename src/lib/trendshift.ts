export type WeeklyTrendingRepo = {
  rank: number;
  fullName: string;
  owner: string;
  repo: string;
  description: string;
  githubUrl: string;
  trendshiftUrl: string;
  language?: string;
  topics: string[];
  dateCreated?: string;
};

export type WeeklyTrendingData = {
  title: string;
  weekLabel: string;
  sourceUrl: string;
  fetchedAt: string;
  repos: WeeklyTrendingRepo[];
};

const TRENDSHIFT_WEEKLY_URL = "https://trendshift.io/weekly";
const TOP_N = 10;

type JsonLdListItem = {
  position: number;
  url: string;
  item: {
    name: string;
    description?: string;
    codeRepository?: string;
    url?: string;
    programmingLanguage?: string;
    keywords?: string[] | string;
    dateCreated?: string;
  };
};

type JsonLdItemList = {
  "@type": string;
  name?: string;
  itemListElement?: JsonLdListItem[];
};

function parseKeywords(value: string[] | string | undefined): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return value.split(",").map((k) => k.trim()).filter(Boolean);
}

function parseJsonLd(html: string): JsonLdItemList | null {
  const matches = html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
  for (const match of matches) {
    try {
      const data = JSON.parse(match[1]) as JsonLdItemList;
      if (data["@type"] !== "ItemList" || !Array.isArray(data.itemListElement)) continue;
      if (data.name && !/weekly/i.test(data.name)) continue;
      return data;
    } catch {
      continue;
    }
  }
  return null;
}

function parseWeekLabel(html: string): string {
  const match = html.match(/href="\/weekly\/(\d{4})\/(\d{1,2})"/);
  if (match) return `Minggu ke-${match[2]}, ${match[1]}`;
  return "Minggu ini";
}

function toRepo(item: JsonLdListItem): WeeklyTrendingRepo | null {
  const fullName = item.item?.name?.trim();
  if (!fullName || !fullName.includes("/")) return null;
  const [owner, repo] = fullName.split("/");
  const githubUrl = item.item.codeRepository ?? item.item.url ?? `https://github.com/${fullName}`;

  return {
    rank: item.position,
    fullName,
    owner,
    repo,
    description: item.item.description?.trim() ?? "",
    githubUrl,
    trendshiftUrl: item.url,
    language: item.item.programmingLanguage,
    topics: parseKeywords(item.item.keywords),
    dateCreated: item.item.dateCreated,
  };
}

export async function fetchWeeklyTrendingRepos(): Promise<WeeklyTrendingData> {
  const res = await fetch(TRENDSHIFT_WEEKLY_URL, {
    next: { revalidate: 6 * 60 * 60 },
    headers: {
      "User-Agent": "WawasanAI/1.0 (+https://wawasanai.com)",
      Accept: "text/html,application/xhtml+xml",
    },
  });

  if (!res.ok) {
    throw new Error(`Trendshift fetch failed: ${res.status}`);
  }

  const html = await res.text();
  const list = parseJsonLd(html);
  if (!list?.itemListElement?.length) {
    throw new Error("Trendshift weekly data not found in page");
  }

  const repos = list.itemListElement
    .map(toRepo)
    .filter((r): r is WeeklyTrendingRepo => r !== null)
    .sort((a, b) => a.rank - b.rank)
    .slice(0, TOP_N);

  return {
    title: list.name ?? "Weekly trending repositories",
    weekLabel: parseWeekLabel(html),
    sourceUrl: TRENDSHIFT_WEEKLY_URL,
    fetchedAt: new Date().toISOString(),
    repos,
  };
}
