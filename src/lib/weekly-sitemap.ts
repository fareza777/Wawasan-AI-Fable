type WeeklyArchiveEntry = { path: string; lastModified: string };

function isoWeekYearFromDate(date = new Date()): { year: number; week: number } {
  const utc = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const weekday = utc.getUTCDay() || 7;
  utc.setUTCDate(utc.getUTCDate() + 4 - weekday);
  const yearStart = new Date(Date.UTC(utc.getUTCFullYear(), 0, 1));
  const week = Math.ceil((((utc.getTime() - yearStart.getTime()) / 86_400_000) + 1) / 7);
  return { year: utc.getUTCFullYear(), week };
}

function isoWeekStartDate(year: number, week: number): string {
  const simple = new Date(Date.UTC(year, 0, 1 + (week - 1) * 7));
  const weekday = simple.getUTCDay();
  const diff = weekday <= 4 ? 1 - weekday : 8 - weekday;
  simple.setUTCDate(simple.getUTCDate() + diff);
  return simple.toISOString().slice(0, 10);
}

/** Path + tanggal untuk arsip mingguan Trendshift (tanpa fetch jaringan). */
export function listWeeklyArchiveSitemapEntries(maxWeeks = 12): WeeklyArchiveEntry[] {
  let { year, week } = isoWeekYearFromDate();
  const entries: WeeklyArchiveEntry[] = [];

  for (let i = 0; i < maxWeeks; i++) {
    if (i > 0) {
      entries.push({
        path: `/repo/weekly/${year}/${week}`,
        lastModified: isoWeekStartDate(year, week),
      });
    }

    week -= 1;
    if (week < 1) {
      year -= 1;
      week = 52;
    }
  }

  return entries;
}