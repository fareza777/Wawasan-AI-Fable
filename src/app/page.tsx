import Link from "next/link";
import { repos } from "@/data/repos";
import { models } from "@/data/models";
import { stacks } from "@/data/stacks";
import { berita } from "@/data/berita";
import ReviewCard from "@/components/ReviewCard";
import ArtikelCard from "@/components/ArtikelCard";
import { scoreColor } from "@/components/Score";

function byDateDesc<T extends { date: string }>(arr: T[]) {
  return [...arr].sort((a, b) => b.date.localeCompare(a.date));
}

function SectionHead({
  kicker,
  title,
  href,
}: {
  kicker: string;
  title: string;
  href: string;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-neon-400">
          {kicker}
        </p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-50 sm:text-3xl">
          {title}
        </h2>
      </div>
      <Link
        href={href}
        className="hidden shrink-0 text-sm font-semibold text-neon-400 hover:underline sm:block"
      >
        Lihat semua →
      </Link>
    </div>
  );
}

export default function Home() {
  const featuredRepos = byDateDesc(repos).slice(0, 3);
  const topModels = [...models].sort((a, b) => b.score - a.score).slice(0, 6);
  const featuredStacks = byDateDesc(stacks).slice(0, 3);
  const latestNews = byDateDesc(berita).slice(0, 3);
  const totalReview = repos.length + models.length + stacks.length;

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        <div className="hero-grid absolute inset-0" />
        <div className="aurora -top-24 left-[15%] h-80 w-80 bg-neon-500" />
        <div className="aurora -top-10 right-[10%] h-72 w-72 bg-violet-glow" style={{ animationDelay: "-7s" }} />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-2">
          <div>
            <p className="fade-up inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-800/70 px-4 py-1.5 text-xs font-medium text-slate-300">
              <span className="h-2 w-2 animate-pulse-slow rounded-full bg-emerald-400" />
              {totalReview}+ review dari pemakaian nyata — bukan rilis pers
            </p>
            <h1 className="fade-up delay-1 mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-50 sm:text-6xl">
              Navigasi Dunia AI,{" "}
              <span className="text-gradient">dalam Bahasa Kita</span>
            </h1>
            <p className="fade-up delay-2 mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Review mendalam repo GitHub, papan skor model LLM, ulasan stack
              coding AI, dan wawasan otomasi — diuji langsung, ditulis jujur,
              dengan konteks Indonesia.
            </p>
            <div className="fade-up delay-3 mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/repo"
                className="rounded-xl bg-gradient-to-r from-neon-500 to-violet-glow px-6 py-3 text-sm font-bold text-ink-950 transition-all hover:opacity-90 hover:shadow-lg hover:shadow-neon-500/25"
              >
                Jelajahi Review Repo
              </Link>
              <Link
                href="/model"
                className="rounded-xl border border-ink-600 bg-ink-800/60 px-6 py-3 text-sm font-bold text-slate-200 transition-colors hover:border-neon-400/50"
              >
                Papan Skor Model →
              </Link>
            </div>

            <div className="fade-up delay-4 mt-12 grid max-w-md grid-cols-4 gap-3">
              {[
                { angka: repos.length, label: "Repo" },
                { angka: models.length, label: "Model" },
                { angka: stacks.length, label: "Stack" },
                { angka: berita.length, label: "Artikel" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-ink-700 bg-ink-900/60 p-3 text-center">
                  <div className="font-mono text-xl font-extrabold text-gradient">{s.angka}</div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-wider text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal mock */}
          <div className="fade-up delay-3 float-slow hidden lg:block">
            <div className="overflow-hidden rounded-2xl border border-ink-600 bg-ink-900/90 shadow-2xl shadow-neon-500/10">
              <div className="flex items-center gap-2 border-b border-ink-700 bg-ink-800/80 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 font-mono text-xs text-slate-500">fajar@wawasan-ai ~ </span>
              </div>
              <div className="space-y-3 p-6 font-mono text-[13px] leading-relaxed">
                <p className="text-slate-400">
                  <span className="text-emerald-400">$</span> wawasan cari{" "}
                  <span className="text-neon-400">&quot;agent terbaik untuk pemula&quot;</span>
                </p>
                <p className="text-slate-500">→ menelusuri {totalReview}+ review …</p>
                <div className="space-y-1.5 rounded-lg border border-ink-700 bg-ink-950/60 p-4">
                  <p className="text-slate-300">
                    <span className="text-violet-300">[repo]</span> OpenClaw{" "}
                    <span className="text-emerald-400">★ 9.2</span> — asisten di WhatsApp-mu
                  </p>
                  <p className="text-slate-300">
                    <span className="text-violet-300">[stack]</span> Claude Code{" "}
                    <span className="text-emerald-400">★ 9.5</span> — agen coding terminal
                  </p>
                  <p className="text-slate-300">
                    <span className="text-violet-300">[repo]</span> n8n{" "}
                    <span className="text-emerald-400">★ 9.0</span> — otomasi visual
                  </p>
                </div>
                <p className="text-slate-400">
                  <span className="text-emerald-400">$</span>{" "}
                  <span className="cursor-blink inline-block h-4 w-2 translate-y-0.5 bg-neon-400" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Review Repo ===== */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead kicker="// review repo" title="Repo GitHub Pilihan" href="/repo" />
        <div className="grid gap-6 md:grid-cols-3">
          {featuredRepos.map((r) => (
            <ReviewCard key={r.slug} review={r} basePath="/repo" />
          ))}
        </div>
      </section>

      {/* ===== Leaderboard Model ===== */}
      <section className="border-y border-ink-700/60 bg-ink-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHead kicker="// skor model" title="Papan Skor Model LLM" href="/model" />
          <div className="overflow-hidden rounded-2xl border border-ink-700">
            {topModels.map((m, i) => (
              <Link
                key={m.slug}
                href={`/model/${m.slug}`}
                className="flex items-center gap-4 border-b border-ink-700/60 bg-ink-900/60 px-5 py-4 transition-colors last:border-0 hover:bg-ink-800/80"
              >
                <span className="w-8 font-mono text-lg font-bold text-slate-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-slate-100">{m.name}</div>
                  <div className="truncate text-sm text-slate-400">{m.tagline}</div>
                </div>
                <div className="hidden gap-1.5 sm:flex">
                  {m.tags.slice(0, 2).map((t) => (
                    <span key={t} className="rounded-md bg-ink-800 px-2 py-0.5 text-xs text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
                <span className={`font-mono text-xl font-bold ${scoreColor(m.score)}`}>
                  {m.score.toFixed(1)}
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-slate-500">
            Termasuk skor khusus <span className="text-slate-300">kemampuan bahasa Indonesia</span> —
            yang tidak akan kamu temukan di benchmark global.
          </p>
        </div>
      </section>

      {/* ===== Review Stack ===== */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead kicker="// review stack" title="Stack & Tools Coding AI" href="/stack" />
        <div className="grid gap-6 md:grid-cols-3">
          {featuredStacks.map((s) => (
            <ReviewCard key={s.slug} review={s} basePath="/stack" />
          ))}
        </div>
      </section>

      {/* ===== Berita ===== */}
      <section className="border-t border-ink-700/60 bg-ink-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHead kicker="// berita & wawasan" title="Tulisan Terbaru" href="/berita" />
          <div className="grid gap-6 md:grid-cols-3">
            {latestNews.map((b) => (
              <ArtikelCard key={b.slug} artikel={b} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-ink-600 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-10 text-center sm:p-14">
          <div className="aurora -top-20 right-0 h-48 w-96 bg-violet-glow" />
          <h2 className="relative text-2xl font-extrabold text-slate-50 sm:text-3xl">
            Butuh bantuan menerapkan AI &amp; otomasi di organisasimu?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl leading-relaxed text-slate-400">
            Dari setup agent dan otomasi workflow sampai pelatihan tim — saya
            membantu organisasi di Indonesia mengadopsi AI dengan cara yang
            realistis dan aman.
          </p>
          <Link
            href="/tentang"
            className="relative mt-7 inline-block rounded-xl bg-gradient-to-r from-neon-500 to-violet-glow px-7 py-3 text-sm font-bold text-ink-950 transition-opacity hover:opacity-90"
          >
            Kenalan dengan Penulis →
          </Link>
        </div>
      </section>
    </>
  );
}
