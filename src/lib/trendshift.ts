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

export type WeeklyPeriod = {
  year: number;
  week: number;
  label: string;
  path: string;
};

export type WeeklyTrendingData = {
  title: string;
  weekLabel: string;
  period: WeeklyPeriod;
  sourceUrl: string;
  fetchedAt: string;
  repos: WeeklyTrendingRepo[];
};

const TRENDSHIFT_WEEKLY_URL = "https://trendshift.io/weekly";
const TOP_N = 10;
const FETCH_HEADERS = {
  "User-Agent": "WawasanAI/1.0 (+https://wawasanai.com)",
  Accept: "text/html,application/xhtml+xml",
};

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

function parsePeriodFromHtml(html: string, sourceUrl: string): WeeklyPeriod {
  const fromUrl = sourceUrl.match(/weekly\/(\d{4})\/(\d{1,2})/);
  if (fromUrl) {
    const year = Number(fromUrl[1]);
    const week = Number(fromUrl[2]);
    return {
      year,
      week,
      label: `Minggu ke-${week}, ${year}`,
      path: `/repo/weekly/${year}/${week}`,
    };
  }

  const fromLink = html.match(/href="\/weekly\/(\d{4})\/(\d{1,2})"/);
  if (fromLink) {
    const year = Number(fromLink[1]);
    const week = Number(fromLink[2]);
    return {
      year,
      week,
      label: `Minggu ke-${week}, ${year}`,
      path: "/repo/weekly",
    };
  }

  return {
    year: new Date().getFullYear(),
    week: 0,
    label: "Minggu ini",
    path: "/repo/weekly",
  };
}

function periodKey(year: number, week: number): string {
  return `${year}-${week}`;
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

function weeklyFetchUrl(period?: { year: number; week: number }): string {
  if (!period) return TRENDSHIFT_WEEKLY_URL;
  return `https://trendshift.io/weekly/${period.year}/${period.week}`;
}

async function fetchWeeklyHtml(period?: { year: number; week: number }): Promise<{
  html: string;
  sourceUrl: string;
}> {
  const sourceUrl = weeklyFetchUrl(period);
  const res = await fetch(sourceUrl, {
    next: { revalidate: 6 * 60 * 60 },
    headers: FETCH_HEADERS,
  });

  if (!res.ok) {
    throw new Error(`Trendshift fetch failed: ${res.status}`);
  }

  return { html: await res.text(), sourceUrl };
}

export async function fetchWeeklyTrendingRepos(period?: {
  year: number;
  week: number;
}): Promise<WeeklyTrendingData> {
  const { html, sourceUrl } = await fetchWeeklyHtml(period);
  const list = parseJsonLd(html);
  if (!list?.itemListElement?.length) {
    throw new Error("Trendshift weekly data not found in page");
  }

  const repos = list.itemListElement
    .map(toRepo)
    .filter((r): r is WeeklyTrendingRepo => r !== null)
    .sort((a, b) => a.rank - b.rank)
    .slice(0, TOP_N);

  const parsedPeriod = parsePeriodFromHtml(html, sourceUrl);

  return {
    title: list.name ?? "Weekly trending repositories",
    weekLabel: parsedPeriod.label,
    period: parsedPeriod,
    sourceUrl,
    fetchedAt: new Date().toISOString(),
    repos,
  };
}

export async function fetchAvailableWeeklyPeriods(maxWeeks = 8): Promise<WeeklyPeriod[]> {
  const periods: WeeklyPeriod[] = [];

  try {
    const current = await fetchWeeklyTrendingRepos();
    if (current.period.week > 0) {
      periods.push({
        year: current.period.year,
        week: current.period.week,
        label: current.weekLabel,
        path: "/repo/weekly",
      });

      let { year, week } = current.period;

      for (let i = 1; i < maxWeeks; i++) {
        week -= 1;
        if (week < 1) {
          year -= 1;
          week = 52;
        }

        try {
          const archived = await fetchWeeklyTrendingRepos({ year, week });
          const key = periodKey(year, week);
          if (periods.some((p) => periodKey(p.year, p.week) === key)) break;

          periods.push({
            year,
            week,
            label: archived.weekLabel,
            path: `/repo/weekly/${year}/${week}`,
          });
        } catch {
          break;
        }
      }
    }
  } catch {
    return [];
  }

  return periods;
}
