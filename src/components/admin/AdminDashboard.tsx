import Link from "next/link";
import type { AdminAnalytics, PlausiblePeriod } from "@/lib/plausible";
import { fetchAdminAnalytics } from "@/lib/plausible";

const PERIOD_LABELS: Record<PlausiblePeriod, string> = {
  day: "Hari ini",
  "7d": "7 hari",
  "30d": "30 hari",
  "12mo": "12 bulan",
};

function formatDuration(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.round(sec % 60);
  return m > 0 ? `${m}m ${s}d` : `${s}d`;
}

function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="panel-white rounded-2xl border p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-2 font-mono text-3xl font-bold text-slate-50">{value}</p>
      {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
    </div>
  );
}

function MiniChart({ data }: { data: AdminAnalytics["timeseries"] }) {
  if (data.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center text-sm text-slate-500">
        Belum ada data periode ini.
      </div>
    );
  }
  const max = Math.max(...data.map((d) => d.visitors), 1);
  return (
    <div className="flex h-40 items-end gap-1">
      {data.map((d) => (
        <div key={d.date} className="group flex flex-1 flex-col items-center gap-1">
          <div
            className="w-full rounded-t bg-gradient-to-t from-neon-500/80 to-violet-glow/60 transition-opacity group-hover:opacity-100 opacity-80"
            style={{ height: `${Math.max(4, (d.visitors / max) * 100)}%` }}
            title={`${d.date}: ${d.visitors} pengunjung`}
          />
          <span className="hidden text-[9px] text-slate-600 sm:block">
            {d.date.slice(-5)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default async function AdminDashboard({ period }: { period: PlausiblePeriod }) {
  const analytics = await fetchAdminAnalytics(period);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-50 sm:text-3xl">Analitik Web</h1>
          <p className="mt-1 text-sm text-slate-400">
            Data dari Plausible — privasi-first, tanpa cookie tracking.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(PERIOD_LABELS) as PlausiblePeriod[]).map((p) => (
            <Link
              key={p}
              href={`/admin?period=${p}`}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                p === period
                  ? "bg-neon-500/20 text-neon-400"
                  : "border border-ink-600 text-slate-400 hover:text-slate-200"
              }`}
            >
              {PERIOD_LABELS[p]}
            </Link>
          ))}
        </div>
      </div>

      {!analytics.configured && (
        <div className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 text-sm text-amber-100">
          <p className="font-semibold">Plausible API belum dikonfigurasi</p>
          <p className="mt-2 text-amber-200/80">
            Tambahkan <code className="rounded bg-ink-800 px-1">PLAUSIBLE_API_KEY</code> di Vercel
            (Settings → API Keys di dashboard Plausible). Domain:{" "}
            <code className="rounded bg-ink-800 px-1">wawasanai.com</code>
          </p>
        </div>
      )}

      {analytics.configured && !analytics.summary && (
        <div className="mt-8 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-5 text-sm text-rose-200">
          Gagal mengambil data Plausible. Periksa API key dan akses ke site{" "}
          <strong>wawasanai.com</strong>.
        </div>
      )}

      {analytics.summary && (
        <>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="Pengunjung unik"
              value={analytics.summary.visitors.toLocaleString("id-ID")}
              hint={PERIOD_LABELS[period]}
            />
            <StatCard
              label="Pageviews"
              value={analytics.summary.pageviews.toLocaleString("id-ID")}
            />
            <StatCard
              label="Bounce rate"
              value={`${analytics.summary.bounceRate.toFixed(1)}%`}
            />
            <StatCard
              label="Durasi kunjungan"
              value={formatDuration(analytics.summary.visitDurationSec)}
            />
          </div>

          <div className="panel-white mt-8 rounded-2xl border p-6">
            <h2 className="text-lg font-bold text-slate-100">Tren pengunjung</h2>
            <div className="mt-6">
              <MiniChart data={analytics.timeseries} />
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="panel-white rounded-2xl border p-6">
              <h2 className="text-lg font-bold text-slate-100">Halaman teratas</h2>
              <table className="mt-4 w-full text-sm">
                <thead>
                  <tr className="border-b border-ink-700 text-left text-xs text-slate-500">
                    <th className="pb-2 font-medium">Halaman</th>
                    <th className="pb-2 text-right font-medium">Pengunjung</th>
                  </tr>
                </thead>
                <tbody>
                  {analytics.topPages.length === 0 ? (
                    <tr>
                      <td colSpan={2} className="py-4 text-slate-500">
                        Tidak ada data.
                      </td>
                    </tr>
                  ) : (
                    analytics.topPages.map((row) => (
                      <tr key={row.label} className="border-b border-ink-800/80">
                        <td className="max-w-[200px] truncate py-2.5 text-slate-300" title={row.label}>
                          {row.label}
                        </td>
                        <td className="py-2.5 text-right font-mono text-neon-400">
                          {row.visitors.toLocaleString("id-ID")}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="panel-white rounded-2xl border p-6">
              <h2 className="text-lg font-bold text-slate-100">Sumber traffic</h2>
              <table className="mt-4 w-full text-sm">
                <thead>
                  <tr className="border-b border-ink-700 text-left text-xs text-slate-500">
                    <th className="pb-2 font-medium">Sumber</th>
                    <th className="pb-2 text-right font-medium">Pengunjung</th>
                  </tr>
                </thead>
                <tbody>
                  {analytics.topSources.length === 0 ? (
                    <tr>
                      <td colSpan={2} className="py-4 text-slate-500">
                        Tidak ada data.
                      </td>
                    </tr>
                  ) : (
                    analytics.topSources.map((row) => (
                      <tr key={row.label} className="border-b border-ink-800/80">
                        <td className="py-2.5 text-slate-300">{row.label}</td>
                        <td className="py-2.5 text-right font-mono text-neon-400">
                          {row.visitors.toLocaleString("id-ID")}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-slate-600">
            <a
              href="https://plausible.io/wawasanai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-400 hover:underline"
            >
              Buka dashboard Plausible lengkap →
            </a>
          </p>
        </>
      )}
    </div>
  );
}
