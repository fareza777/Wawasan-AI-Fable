import {
  dailySnapshotExists,
  listDailySnapshotDates,
  readDailySnapshotRaw,
  writeDailySnapshotRaw,
} from "@/lib/daily-snapshot-store";
import { WEEKLY_TOP } from "@/data/weeklyTop";
import { formatTanggal } from "@/lib/format";

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
  date: string;
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

function dateToPathSegments(date: string): { year: string; month: string; day: string } {
  const [y, m, d] = date.split("-");
  return { year: y, month: m, day: d };
}

function dailyArchivePath(date: string): string {
  const { year, month, day } = dateToPathSegments(date);
  return `/repo/daily/${year}/${month}/${day}`;
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

function buildWeeklyFallbackFromCurated(): TrendingData {
  const fullNames = Object.keys(WEEKLY_TOP).slice(0, TOP_N);
  const repos: TrendingRepo[] = [];
  for (const [index, fullName] of fullNames.entries()) {
    const entry = WEEKLY_TOP[fullName];
    const [owner, repo] = fullName.split("/");
    if (!owner || !repo) continue;
    repos.push({
      rank: index + 1,
      fullName,
      owner,
      repo,
      description: entry?.description ?? "",
      githubUrl: `https://github.com/${fullName}`,
      trendshiftUrl: TRENDSHIFT_WEEKLY_URL,
      topics: [],
    });
  }

  const year = new Date().getFullYear();
  return {
    cadence: "weekly",
    title: "Top Weekly Repo (kurasi Wawasan AI)",
    periodLabel: "Minggu ini",
    period: {
      year,
      week: 0,
      label: "Minggu ini",
      path: "/repo/weekly",
    },
    sourceUrl: TRENDSHIFT_WEEKLY_URL,
    fetchedAt: new Date().toISOString(),
    repos,
  };
}

async function loadLatestDailySnapshot(): Promise<TrendingData | null> {
  const dates = await listDailySnapshotDates();
  if (!dates.length) return null;
  return fetchDailySnapshot(dates[0]);
}

export async function fetchDailyTrendingRepos(): Promise<TrendingData> {
  try {
    const { html, sourceUrl } = await fetchTrendshiftHtml(TRENDSHIFT_HOME_URL, 3600);
    const list = parseJsonLd(html, "daily");
    if (!list?.itemListElement?.length) {
      throw new Error("Trendshift daily data not found in page");
    }
    const data = toTrendingData("daily", list, sourceUrl, html, null);

    const today = new Date().toISOString().slice(0, 10);
    if (!(await dailySnapshotExists(today))) {
      await saveDailySnapshot(today, data);
    }

    return data;
  } catch (error) {
    const snapshot = await loadLatestDailySnapshot();
    if (snapshot) {
      console.warn(
        "[trendshift] daily live fetch failed, using latest snapshot:",
        error instanceof Error ? error.message : error,
      );
      return snapshot;
    }
    throw error;
  }
}

export async function fetchWeeklyTrendingRepos(period?: {
  year: number;
  week: number;
}): Promise<TrendingData> {
  const sourceUrl = weeklyFetchUrl(period);
  try {
    const { html } = await fetchTrendshiftHtml(sourceUrl, 21_600);
    const list = parseJsonLd(html, "weekly");
    if (!list?.itemListElement?.length) {
      throw new Error("Trendshift weekly data not found in page");
    }
    const parsedPeriod = parseWeeklyPeriodFromHtml(html, sourceUrl);
    return toTrendingData("weekly", list, sourceUrl, html, parsedPeriod);
  } catch (error) {
    if (period) {
      throw error;
    }
    console.warn(
      "[trendshift] weekly live fetch failed, using curated weeklyTop fallback:",
      error instanceof Error ? error.message : error,
    );
    return buildWeeklyFallbackFromCurated();
  }
}

/** Back-compat: weekLabel alias */
export function withWeekLabel(data: TrendingData): WeeklyTrendingData {
  return { ...data, weekLabel: data.periodLabel };
}

export async function fetchDailySnapshot(date: string): Promise<TrendingData> {
  const raw = await readDailySnapshotRaw(date);
  const data = JSON.parse(raw) as TrendingData;

  data.period = {
    date,
    label: formatTanggal(date),
    path: dailyArchivePath(date),
  };
  data.cadence = "daily";
  data.periodLabel = formatTanggal(date);
  return data;
}

export async function saveDailySnapshot(date: string, data: TrendingData): Promise<void> {
  const payload: TrendingData = {
    ...data,
    cadence: "daily",
    periodLabel: formatTanggal(date),
    period: {
      date,
      label: formatTanggal(date),
      path: dailyArchivePath(date),
    },
  };
  await writeDailySnapshotRaw(date, JSON.stringify(payload, null, 2));
}

/** Path + tanggal untuk entri sitemap arsip harian yang punya snapshot lokal. */
export async function listDailyArchiveSitemapEntries(): Promise<
  { path: string; lastModified: string }[]
> {
  const dates = await listDailySnapshotDates();
  return dates.map((date) => ({
    path: dailyArchivePath(date),
    lastModified: date,
  }));
}

export async function fetchAvailableDailyPeriods(maxDays = 30): Promise<TrendingPeriodOption[]> {
  const today = new Date().toISOString().slice(0, 10);
  const periods: TrendingPeriodOption[] = [
    { label: "Hari ini", path: "/repo/daily" },
  ];

  const dates = (await listDailySnapshotDates()).slice(0, maxDays);
  for (const date of dates) {
    periods.push({
      label: date === today ? `${formatTanggal(date)} (tersimpan)` : formatTanggal(date),
      path: dailyArchivePath(date),
    });
  }

  return periods;
}

/** Bangun opsi riwayat minggu tanpa fetch berulang ke Trendshift. */
export function buildWeeklyPeriodOptions(
  period: WeeklyPeriod | null | undefined,
  maxWeeks = 8,
): TrendingPeriodOption[] {
  if (!period || period.week <= 0) {
    return [{ label: "Minggu ini", path: "/repo/weekly" }];
  }

  const periods: TrendingPeriodOption[] = [];
  let { year, week } = period;
  const onCurrentWeek = period.path === "/repo/weekly";

  for (let i = 0; i < maxWeeks; i++) {
    periods.push({
      label: i === 0 ? period.label : `Minggu ke-${week}, ${year}`,
      path: i === 0 && onCurrentWeek ? "/repo/weekly" : `/repo/weekly/${year}/${week}`,
    });
    week -= 1;
    if (week < 1) {
      year -= 1;
      week = 52;
    }
  }

  return periods;
}

/** @deprecated prefer buildWeeklyPeriodOptions after satu kali fetchWeeklyTrendingRepos */
export async function fetchAvailableWeeklyPeriods(maxWeeks = 8): Promise<TrendingPeriodOption[]> {
  try {
    const current = await fetchWeeklyTrendingRepos();
    if (current.period && "week" in current.period) {
      return buildWeeklyPeriodOptions(current.period, maxWeeks);
    }
  } catch {
    return [];
  }
  return [{ label: "Minggu ini", path: "/repo/weekly" }];
}
