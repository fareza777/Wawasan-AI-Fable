import Link from "next/link";
import { repos } from "@/data/repos";
import { models } from "@/data/models";
import { stacks } from "@/data/stacks";
import { berita } from "@/data/berita";
import ReviewCard from "@/components/ReviewCard";
import ArtikelCard from "@/components/ArtikelCard";
import TopicTicker from "@/components/TopicTicker";
import HeroFuturisticVisual from "@/components/HeroFuturisticVisual";
import { scoreColor } from "@/components/Score";

function byDateDesc<T extends { date: string }>(arr: T[]) {
  return [...arr].sort((a, b) => b.date.localeCompare(a.date));
}

function SectionHead({
  nomor,
  kicker,
  title,
  href,
}: {
  nomor: string;
  kicker: string;
  title: string;
  href: string;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div className="flex items-start gap-4">
        <span className="font-mono text-4xl font-extrabold leading-none text-ink-600 sm:text-5xl">
          {nomor}
        </span>
        <div>
          <p className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-widest text-neon-400">
            {kicker}
            <span className="h-px w-12 bg-gradient-to-r from-neon-400 to-transparent" />
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-50 sm:text-3xl">
            {title}
          </h2>
        </div>
      </div>
      <Link
        href={href}
        className="link-underline hidden shrink-0 text-sm font-semibold text-neon-400 sm:block"
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
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        <div className="hero-grid absolute inset-0" />
        <div className="aurora -top-24 left-[15%] h-80 w-80 bg-neon-500" />
        <div className="aurora -top-10 right-[10%] h-72 w-72 bg-violet-glow" style={{ animationDelay: "-7s" }} />

        <div className="hero-shell relative mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pt-20">
          <div className="hero-copy max-w-2xl">
            <p className="fade-up inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-800/70 px-4 py-1.5 text-xs font-medium text-slate-300">
              <span className="h-2 w-2 animate-pulse-slow rounded-full bg-emerald-400" />
              Portal review &amp; wawasan AI Indonesia
            </p>
            <h1 className="fade-up delay-1 glow-title mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Review dan Navigasi{" "}
              <span className="text-gradient">Dunia AI</span>
            </h1>
            <p className="fade-up delay-2 mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Review repo GitHub, model LLM, tools coding AI, dan wawasan
              otomasi untuk profesional dan organisasi.
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
                Review Model LLM →
              </Link>
            </div>
          </div>

          <div className="hero-visual-aside">
            <HeroFuturisticVisual />
          </div>
        </div>
      </section>

      <TopicTicker />

      {/* ===== Review Repo ===== */}
      <section className="section-muted">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHead nomor="01" kicker="// review repo" title="Repo GitHub Pilihan" href="/repo" />
          <div className="grid gap-6 md:grid-cols-3">
            {featuredRepos.map((r) => (
              <ReviewCard key={r.slug} review={r} basePath="/repo" />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Leaderboard Model ===== */}
      <section className="border-y border-ink-700/60 bg-ink-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHead nomor="02" kicker="// review model" title="Review Model LLM" href="/model" />
          <div className="panel-white overflow-hidden rounded-2xl border border-ink-700">
            {topModels.map((m, i) => (
              <Link
                key={m.slug}
                href={`/model/${m.slug}`}
                className={`flex items-center gap-4 border-b border-ink-700/40 px-5 py-4 transition-colors last:border-0 hover:bg-ink-800/80 ${
                  i === 0 ? "rank-one" : ""
                }`}
              >
                <span className="w-8 font-mono text-lg font-bold text-slate-500">
                  {i === 0 ? "👑" : String(i + 1).padStart(2, "0")}
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
        </div>
      </section>

      {/* ===== Review Tools ===== */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead nomor="03" kicker="// review tools" title="Tools Coding AI" href="/stack" />
        <div className="grid gap-6 md:grid-cols-3">
          {featuredStacks.map((s) => (
            <ReviewCard key={s.slug} review={s} basePath="/stack" />
          ))}
        </div>
      </section>

      {/* ===== Berita ===== */}
      <section className="border-t border-ink-700/60 bg-ink-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHead nomor="04" kicker="// berita & wawasan" title="Tulisan Terbaru" href="/berita" />
          <div className="grid gap-6 md:grid-cols-3">
            {latestNews.map((b) => (
              <ArtikelCard key={b.slug} artikel={b} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <div className="section-divider mx-auto max-w-4xl" />
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="panel-white relative overflow-hidden rounded-3xl border border-ink-600 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-10 text-center sm:p-14">
          <div className="dot-pattern absolute inset-0" aria-hidden />
          <div className="aurora -top-20 right-0 h-48 w-96 bg-violet-glow" />
          <h2 className="relative text-2xl font-extrabold text-slate-50 sm:text-3xl">
            Butuh bantuan menerapkan AI di organisasimu?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl leading-relaxed text-slate-300">
            Wawasan AI membantu organisasi di Indonesia mengadopsi AI — dari konsultasi
            dan setup otomasi sampai pelatihan tim.
          </p>
          <Link
            href="/tentang"
            className="relative mt-7 inline-block rounded-xl bg-gradient-to-r from-neon-500 to-violet-glow px-7 py-3 text-sm font-bold text-ink-950 transition-opacity hover:opacity-90"
          >
            Tentang Wawasan AI →
          </Link>
        </div>
      </section>
    </>
  );
}
