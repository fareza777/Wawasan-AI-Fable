import fs from "node:fs/promises";
import path from "node:path";

/**
 * Daily Trendshift snapshots live in git: src/data/dailySnapshots/YYYY-MM-DD.json
 * (committed by Hermes cron / scripts/snapshot-daily.mjs).
 *
 * Vercel Blob was removed (Jul 2026) — it burned Hobby-tier Advanced Operations quota
 * (~1.5k/mo) on redundant list/head/put during every deploy + ISR.
 */
const FS_DIR = path.join(process.cwd(), "src", "data", "dailySnapshots");

let cachedDates: string[] | null = null;

function fsPath(date: string): string {
  return path.join(FS_DIR, `${date}.json`);
}

function parseDateFromName(name: string): string | null {
  const match = name.match(/(\d{4}-\d{2}-\d{2})\.json$/);
  return match?.[1] ?? null;
}

function invalidateListCache(): void {
  cachedDates = null;
}

export async function dailySnapshotExists(date: string): Promise<boolean> {
  try {
    await fs.access(fsPath(date));
    return true;
  } catch {
    return false;
  }
}

export async function readDailySnapshotRaw(date: string): Promise<string> {
  try {
    return await fs.readFile(fsPath(date), "utf-8");
  } catch {
    throw new Error(`Daily snapshot not found: ${date}`);
  }
}

export async function writeDailySnapshotRaw(date: string, json: string): Promise<void> {
  await fs.mkdir(FS_DIR, { recursive: true });
  await fs.writeFile(fsPath(date), json, "utf-8");
  invalidateListCache();
}

export async function listDailySnapshotDates(): Promise<string[]> {
  if (cachedDates) return cachedDates;

  const dates = new Set<string>();

  try {
    const entries = await fs.readdir(FS_DIR);
    for (const file of entries) {
      const date = parseDateFromName(file);
      if (date) dates.add(date);
    }
  } catch {
    // no snapshots yet
  }

  cachedDates = [...dates].sort().reverse();
  return cachedDates;
}
