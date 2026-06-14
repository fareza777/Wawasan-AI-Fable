export type PlausiblePeriod = "day" | "7d" | "30d" | "12mo";

const API_BASE = "https://plausible.io/api/v1";

function siteId() {
  return process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "wawasanai.com";
}

function apiKey() {
  return process.env.PLAUSIBLE_API_KEY ?? "";
}

async function plausibleFetch<T>(path: string, params: Record<string, string>): Promise<T | null> {
  const key = apiKey();
  if (!key) return null;
  const qs = new URLSearchParams({ site_id: siteId(), ...params });
  const res = await fetch(`${API_BASE}${path}?${qs}`, {
    headers: { Authorization: `Bearer ${key}` },
    next: { revalidate: 300 },
  });
  if (!res.ok) return null;
  return res.json() as Promise<T>;
}

type AggregateResult = {
  results: {
    visitors: { value: number };
    pageviews: { value: number };
    bounce_rate: { value: number };
    visit_duration: { value: number };
  };
};

type TimeseriesResult = {
  results: { date: string; visitors: number; pageviews: number }[];
};

type BreakdownResult = {
  results: { page?: string; source?: string; visitors: number; pageviews: number }[];
};

export type AdminAnalytics = {
  configured: boolean;
  period: PlausiblePeriod;
  summary: {
    visitors: number;
    pageviews: number;
    bounceRate: number;
    visitDurationSec: number;
  } | null;
  timeseries: { date: string; visitors: number; pageviews: number }[];
  topPages: { label: string; visitors: number; pageviews: number }[];
  topSources: { label: string; visitors: number }[];
};

export async function fetchAdminAnalytics(period: PlausiblePeriod): Promise<AdminAnalytics> {
  const empty: AdminAnalytics = {
    configured: Boolean(apiKey()),
    period,
    summary: null,
    timeseries: [],
    topPages: [],
    topSources: [],
  };
  if (!apiKey()) return empty;

  const metrics = "visitors,pageviews,bounce_rate,visit_duration";

  const [aggregate, timeseries, pages, sources] = await Promise.all([
    plausibleFetch<AggregateResult>("/stats/aggregate", { period, metrics }),
    plausibleFetch<TimeseriesResult>("/stats/timeseries", {
      period,
      metrics: "visitors,pageviews",
    }),
    plausibleFetch<BreakdownResult>("/stats/breakdown", {
      period,
      property: "event:page",
      metrics: "visitors,pageviews",
      limit: "10",
    }),
    plausibleFetch<BreakdownResult>("/stats/breakdown", {
      period,
      property: "visit:source",
      metrics: "visitors",
      limit: "10",
    }),
  ]);

  return {
    configured: true,
    period,
    summary: aggregate
      ? {
          visitors: aggregate.results.visitors.value,
          pageviews: aggregate.results.pageviews.value,
          bounceRate: aggregate.results.bounce_rate.value,
          visitDurationSec: aggregate.results.visit_duration.value,
        }
      : null,
    timeseries: timeseries?.results ?? [],
    topPages: (pages?.results ?? []).map((r) => ({
      label: r.page ?? "—",
      visitors: r.visitors,
      pageviews: r.pageviews,
    })),
    topSources: (sources?.results ?? []).map((r) => ({
      label: r.source ?? "Direct / None",
      visitors: r.visitors,
    })),
  };
}
