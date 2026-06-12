import fs from "node:fs/promises";
import path from "node:path";

export type TrendCadence = "daily" | "weekly";

export type TrendingRepo = {
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

/** @deprecated use TrendingRepo */
export type WeeklyTrendingRepo = TrendingRepo;

export type TrendingPeriodOption = {
  label: string;
  path: string;
};

export type WeeklyPeriod = {
  year: number;
  week: number;
  label: string;
  path: string;
};

export type DailyPeriod = {
  date: string; // YYYY-MM-DD
  label: string;
  path: string;
};

export type TrendingData = {
  cadence: TrendCadence;
  title: string;
  periodLabel: string;
  period: WeeklyPeriod | DailyPeriod | null;
  sourceUrl: string;
  fetchedAt: string;
  repos: TrendingRepo[];
};

/** @deprecated use TrendingData */
export type WeeklyTrendingData = TrendingData & { weekLabel: string };

const TRENDSHIFT_HOME_URL = "https://trendshift.io/";
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

function parseJsonLd(html: string, cadence: TrendCadence): JsonLdItemList | null {
  const pattern = cadence === "weekly" ? /weekly/i : /daily/i;
  const matches = html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
  for (const match of matches) {
    try {
      const data = JSON.parse(match[1]) as JsonLdItemList;
      if (data["@type"] !== "ItemList" || !Array.isArray(data.itemListElement)) continue;
      if (data.name && !pattern.test(data.name)) continue;
      return data;
    } catch {
      continue;
    }
  }
  return null;
}

function parseWeeklyPeriodFromHtml(html: string, sourceUrl: string): WeeklyPeriod {
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

const DAILY_SNAPSHOTS_DIR = path.join(process.cwd(), "src", "data", "dailySnapshots");

function dailySnapshotPath(date: string): string {
  return path.join(DAILY_SNAPSHOTS_DIR, `${date}.json`);
}

function dateToPathSegments(date: string): { year: string; month: string; day: string } {
  const [y, m, d] = date.split("-");
  return { year: y, month: m, day: d };
}

function formatDailyLabel(date: string): string {
  // YYYY-MM-DD → "12 Juni 2026"
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ];
  const [y, m, d] = date.split("-").map(Number);
  return `${d} ${months[m - 1] ?? ""} ${y}`.trim();
}

function periodKey(year: number, week: number): string {
  return `${year}-${week}`;
}

function toRepo(item: JsonLdListItem): TrendingRepo | null {
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

async function fetchTrendshiftHtml(
  sourceUrl: string,
  revalidateSeconds: number,
): Promise<{ html: string; sourceUrl: string }> {
  const res = await fetch(sourceUrl, {
    next: { revalidate: revalidateSeconds },
    headers: FETCH_HEADERS,
  });

  if (!res.ok) {
    throw new Error(`Trendshift fetch failed: ${res.status}`);
  }

  return { html: await res.text(), sourceUrl };
}

function toTrendingData(
  cadence: TrendCadence,
  list: JsonLdItemList,
  sourceUrl: string,
  html: string,
  weeklyPeriod?: WeeklyPeriod | null,
): TrendingData {
  const repos = list.itemListElement!
    .map(toRepo)
    .filter((r): r is TrendingRepo => r !== null)
    .sort((a, b) => a.rank - b.rank)
    .slice(0, TOP_N);

  const period =
    cadence === "weekly"
      ? (weeklyPeriod ?? parseWeeklyPeriodFromHtml(html, sourceUrl))
      : null;

  const periodLabel =
    cadence === "daily"
      ? "Hari ini"
      : period?.label ?? "Minggu ini";

  return {
    cadence,
    title: list.name ?? `Trending repositories (${cadence})`,
    periodLabel,
    period,
    sourceUrl,
    fetchedAt: new Date().toISOString(),
    repos,
  };
}

export async function fetchDailyTrendingRepos(): Promise<TrendingData> {
  const { html, sourceUrl } = await fetchTrendshiftHtml(TRENDSHIFT_HOME_URL, 3600);
  const list = parseJsonLd(html, "daily");
  if (!list?.itemListElement?.length) {
    throw new Error("Trendshift daily data not found in page");
  }
  return toTrendingData("daily", list, sourceUrl, html, null);
}

export async function fetchWeeklyTrendingRepos(period?: {
  year: number;
  week: number;
}): Promise<TrendingData> {
  const sourceUrl = weeklyFetchUrl(period);
  const { html } = await fetchTrendshiftHtml(sourceUrl, 21_600);
  const list = parseJsonLd(html, "weekly");
  if (!list?.itemListElement?.length) {
    throw new Error("Trendshift weekly data not found in page");
  }
  const parsedPeriod = parseWeeklyPeriodFromHtml(html, sourceUrl);
  return toTrendingData("weekly", list, sourceUrl, html, parsedPeriod);
}

/** Back-compat: weekLabel alias */
export function withWeekLabel(data: TrendingData): WeeklyTrendingData {
  return { ...data, weekLabel: data.periodLabel };
}

export async function fetchDailySnapshot(date: string): Promise<TrendingData> {
  // date: YYYY-MM-DD
  const filePath = dailySnapshotPath(date);
  const raw = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(raw) as TrendingData;

  // Rebuild DailyPeriod from date for downstream consumers
  const { year, month, day } = dateToPathSegments(date);
  data.period = {
    date,
    label: formatDailyLabel(date),
    path: `/repo/weekly/${year}/${month}/${day}`,
  };
  data.cadence = "daily";
  return data;
}

export async function fetchAvailableDailyPeriods(maxDays = 30): Promise<TrendingPeriodOption[]> {
  const today = new Date().toISOString().slice(0, 10);
  const periods: TrendingPeriodOption[] = [
    { label: "Hari ini", path: "/repo/weekly?cadence=daily" },
  ];

  try {
    const entries = await fs.readdir(DAILY_SNAPSHOTS_DIR);
    const dates = entries
      .filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f))
      .map((f) => f.replace(/\.json$/, ""))
      .filter((d) => d !== today)
      .sort()
      .reverse()
      .slice(0, maxDays);

    for (const date of dates) {
      const { year, month, day } = dateToPathSegments(date);
      periods.push({
        label: formatDailyLabel(date),
        path: `/repo/weekly/${year}/${month}/${day}`,
      });
    }
  } catch {
    // directory doesn't exist yet — no historical snapshots
  }

  return periods;
}

export async function fetchAvailableWeeklyPeriods(maxWeeks = 8): Promise<TrendingPeriodOption[]> {
  const periods: TrendingPeriodOption[] = [];

  try {
    const current = await fetchWeeklyTrendingRepos();
    if (current.period && "week" in current.period && current.period.week > 0) {
      periods.push({
        label: current.periodLabel,
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
          if (periods.some((p) => p.path === `/repo/weekly/${year}/${week}`)) break;

          periods.push({
            label: archived.periodLabel,
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
