import {
  VERCEL_ANALYTICS_URL,
  VERCEL_PROJECT_URL,
  VERCEL_SPEED_INSIGHTS_URL,
} from "@/lib/vercel-analytics";

function DashCard({
  title,
  description,
  href,
  cta,
}: {
  title: string;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="panel-white group block rounded-2xl border p-6 transition-colors hover:border-neon-400/40"
    >
      <h2 className="text-lg font-bold text-slate-100 group-hover:text-neon-400">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
      <p className="mt-4 text-sm font-semibold text-neon-400">{cta} →</p>
    </a>
  );
}

export default function AdminDashboard() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-50 sm:text-3xl">Analitik Web</h1>
        <p className="mt-1 text-sm text-slate-400">
          Powered by Vercel Analytics — gratis di Hobby plan, tanpa cookie tracking.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-neon-500/25 bg-neon-500/5 p-5 text-sm text-slate-300">
        <p className="font-semibold text-slate-100">Aktifkan sekali di Vercel (jika belum)</p>
        <ol className="mt-3 list-inside list-decimal space-y-1.5 text-slate-400">
          <li>
            Buka{" "}
            <a
              href={VERCEL_PROJECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-400 hover:underline"
            >
              project Wawasan AI di Vercel
            </a>
          </li>
          <li>Tab <strong className="text-slate-200">Analytics</strong> → Enable Web Analytics</li>
          <li>Tab <strong className="text-slate-200">Speed Insights</strong> → Enable (opsional)</li>
        </ol>
        <p className="mt-3 text-xs text-slate-500">
          Data mulai terkumpul setelah deploy terbaru dan pengunjung membuka situs.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <DashCard
          title="Web Analytics"
          description="Pengunjung, pageviews, halaman teratas, negara & perangkat — grafik interaktif di dashboard Vercel."
          href={VERCEL_ANALYTICS_URL}
          cta="Buka Analytics"
        />
        <DashCard
          title="Speed Insights"
          description="Core Web Vitals (LCP, FID, CLS) per halaman — pantau performa loading situs."
          href={VERCEL_SPEED_INSIGHTS_URL}
          cta="Buka Speed Insights"
        />
        <DashCard
          title="Deployments"
          description="Riwayat deploy, preview URL, dan status build production."
          href={`${VERCEL_PROJECT_URL}/deployments`}
          cta="Lihat Deployments"
        />
      </div>

      <div className="panel-white mt-8 rounded-2xl border p-6">
        <h2 className="text-lg font-bold text-slate-100">Yang tercatat otomatis</h2>
        <ul className="mt-4 grid gap-2 text-sm text-slate-400 sm:grid-cols-2">
          <li>• Pageviews & unique visitors</li>
          <li>• Halaman paling dikunjungi</li>
          <li>• Referrer & negara pengunjung</li>
          <li>• Browser & perangkat</li>
          <li>• Core Web Vitals (Speed Insights)</li>
          <li>• Tanpa banner cookie — privacy-friendly</li>
        </ul>
      </div>

      <p className="mt-8 text-center text-xs text-slate-600">
        Plausible sudah diganti. Statistik detail hanya di{" "}
        <a
          href={VERCEL_ANALYTICS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-400 hover:underline"
        >
          dashboard Vercel
        </a>
        .
      </p>
    </div>
  );
}
