"use client";

import { useRouter } from "next/navigation";
import { TrendCadence, TrendingPeriodOption } from "@/lib/trendshift";

export default function TrendingPeriodPicker({
  cadence,
  periods,
  currentPath,
}: {
  cadence: TrendCadence;
  periods: TrendingPeriodOption[];
  currentPath: string;
}) {
  const router = useRouter();

  if (periods.length <= 1) {
    return (
      <p className="text-xs text-slate-500">
        {cadence === "daily"
          ? "Riwayat harian akan tersedia seiring arsip Trendshift bertambah."
          : "Riwayat minggu akan bertambah seiring waktu — kembali lagi nanti untuk melihat arsip."}
      </p>
    );
  }

  const value = periods.find((p) => p.path === currentPath)?.path ?? currentPath;

  return (
    <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
      <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-slate-500">
        {cadence === "daily" ? "Riwayat hari" : "Riwayat minggu"}
      </span>
      <select
        value={value}
        onChange={(e) => router.push(e.target.value)}
        className="h-10 w-full rounded-xl border border-ink-600 bg-ink-900/60 px-3 text-sm text-slate-200 sm:max-w-xs"
        aria-label={cadence === "daily" ? "Pilih hari" : "Pilih minggu"}
      >
        {periods.map((p) => (
          <option key={p.path} value={p.path}>
            {p.label}
          </option>
        ))}
      </select>
    </label>
  );
}
