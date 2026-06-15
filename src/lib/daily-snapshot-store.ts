import fs from "node:fs/promises";
import path from "node:path";
import { head, list, put } from "@vercel/blob";

const FS_DIR = path.join(process.cwd(), "src", "data", "dailySnapshots");
const BLOB_PREFIX = "daily-snapshots";

function blobKey(date: string): string {
  return `${BLOB_PREFIX}/${date}.json`;
}

function fsPath(date: string): string {
  return path.join(FS_DIR, `${date}.json`);
}

function parseDateFromName(name: string): string | null {
  const match = name.match(/(\d{4}-\d{2}-\d{2})\.json$/);
  return match?.[1] ?? null;
}

export async function dailySnapshotExists(date: string): Promise<boolean> {
  try {
    await fs.access(fsPath(date));
    return true;
  } catch {
    // filesystem miss — try blob
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) return false;

  try {
    await head(blobKey(date));
    return true;
  } catch {
    return false;
  }
}

export async function readDailySnapshotRaw(date: string): Promise<string> {
  try {
    return await fs.readFile(fsPath(date), "utf-8");
  } catch {
    // try blob
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error(`Daily snapshot not found: ${date}`);
  }

  const meta = await head(blobKey(date));
  const res = await fetch(meta.url);
  if (!res.ok) {
    throw new Error(`Daily snapshot fetch failed: ${date}`);
  }
  return res.text();
}

export async function writeDailySnapshotRaw(date: string, json: string): Promise<void> {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    await put(blobKey(date), json, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
    });
  }

  try {
    await fs.mkdir(FS_DIR, { recursive: true });
    await fs.writeFile(fsPath(date), json, "utf-8");
  } catch {
    // read-only filesystem (e.g. Vercel runtime) — blob is enough
  }
}

export async function listDailySnapshotDates(): Promise<string[]> {
  const dates = new Set<string>();

  try {
    const entries = await fs.readdir(FS_DIR);
    for (const file of entries) {
      const date = parseDateFromName(file);
      if (date) dates.add(date);
    }
  } catch {
    // no local snapshots yet
  }

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const { blobs } = await list({ prefix: `${BLOB_PREFIX}/` });
      for (const blob of blobs) {
        const date = parseDateFromName(blob.pathname);
        if (date) dates.add(date);
      }
    } catch {
      // blob store not configured
    }
  }

  return [...dates].sort().reverse();
}
