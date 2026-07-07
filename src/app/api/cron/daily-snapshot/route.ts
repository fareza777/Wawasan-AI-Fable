/**
 * Manual snapshot trigger (opsional). Production snapshots come from git commits
 * in src/data/dailySnapshots/ — not from this route on Vercel.
 */
import { NextResponse } from "next/server";
import { fetchDailyTrendingRepos } from "@/lib/trendshift";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    const data = await fetchDailyTrendingRepos();
    const date = new Date().toISOString().slice(0, 10);
    return NextResponse.json({
      ok: true,
      date,
      repos: data.repos.length,
      fetchedAt: data.fetchedAt,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Snapshot failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
