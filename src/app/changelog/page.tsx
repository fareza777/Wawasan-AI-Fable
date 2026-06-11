import type { Metadata } from "next";
import Link from "next/link";
import { scoreChangelog } from "@/data/changelog";
import { scoreColor } from "@/components/Score";
import { formatTanggal } from "@/lib/format";
import ListHeader from "@/components/ListHeader";

export const metadata: Metadata = {
  title: "Changelog Skor",
  description: "Riwayat perubahan skor review Wawasan AI — transparansi editorial.",
};

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <ListHeader
        kicker="// changelog"
        title="Riwayat Perubahan Skor"
        description="Setiap perubahan skor dicatat dengan alasan editorial — karena review AI berkembang seiring pembaruan produk."
      />
      <div className="mt-12 space-y-4">
        {scoreChangelog.map((entry) => (
          <div key={`${entry.slug}-${entry.date}`} className="panel-white rounded-2xl border p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Link
                href={`/${entry.type}/${entry.slug}`}
                className="font-bold text-slate-100 hover:text-neon-400"
              >
                {entry.name}
              </Link>
              <span className="text-xs text-slate-500">{formatTanggal(entry.date)}</span>
            </div>
            <div className="mt-2 flex items-center gap-3 font-mono text-sm">
              <span className="text-slate-500">{entry.previous.toFixed(1)}</span>
              <span className="text-slate-600">→</span>
              <span className={`font-bold ${scoreColor(entry.current)}`}>{entry.current.toFixed(1)}</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">{entry.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
