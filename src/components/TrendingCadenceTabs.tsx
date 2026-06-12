"use client";

import Link from "next/link";
import { TrendCadence } from "@/lib/trendshift";

export default function TrendingCadenceTabs({ active }: { active: TrendCadence }) {
  const tabClass = (cadence: TrendCadence) =>
    `rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
      active === cadence
        ? "bg-gradient-to-r from-neon-500 to-violet-glow text-ink-950"
        : "border border-ink-600 bg-ink-900/60 text-slate-300 hover:border-neon-400/40 hover:text-slate-100"
    }`;

  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Jenis peringkat trending">
      <Link href="/repo/daily" className={tabClass("daily")} role="tab" aria-selected={active === "daily"}>
        Top Daily Repo
      </Link>
      <Link href="/repo/weekly" className={tabClass("weekly")} role="tab" aria-selected={active === "weekly"}>
        Top Weekly Repo
      </Link>
    </div>
  );
}
