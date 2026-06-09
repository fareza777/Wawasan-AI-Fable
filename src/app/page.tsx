import Link from "next/link";
import { repos } from "@/data/repos";
import { models } from "@/data/models";
import { stacks } from "@/data/stacks";
import { berita } from "@/data/berita";
import ReviewCard from "@/components/ReviewCard";
import ArtikelCard from "@/components/ArtikelCard";
import { scoreColor } from "@/components/Score";

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
  const featuredRepos = repos.slice(0, 3);
  const featuredModels = [...models].sort((a, b) => b.score - a.score);
  const featuredStacks = stacks.slice(0, 3);
  const latestNews = berita.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-grid absolute inset-0" />
        <div className="absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-neon-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-20 text-center sm:px-6 sm:pt-28">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-800/70 px-4 py-1.5 text-xs font-medium text-slate-300">
            <span className="h-2 w-2 animate-pulse-slow rounded-full bg-emerald-400" />
            Portal review AI pertama Indonesia — dari pemakaian nyata
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-6xl">
            Navigasi Dunia AI, <span className="text-gradient">dalam Bahasa Kita</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Review mendalam repo GitHub, skor model LLM, ulasan stack &amp; tools
            coding AI, plus wawasan otomasi — semua diuji langsung, ditulis jujur,
            dan dibahas dengan konteks Indonesia.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/repo"
              className="rounded-xl bg-gradient-to-r from-neon-500 to-violet-glow px-6 py-3 text-sm font-bold text-ink-950 transition-opacity hover:opacity-90"
            >
              Jelajahi Review Repo
            </Link>
            <Link
              href="/model"
              className="rounded-xl border border-ink-600 bg-ink-800/60 px-6 py-3 text-sm font-bold text-slate-200 transition-colors hover:border-neon-400/50"
            >
              Lihat Skor Model LLM
            </Link>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { angka: `${repos.length}+`, label: "Repo Diulas" },
              { angka: `${models.length}+`, label: "Model Diskor" },
              { angka: `${stacks.length}+`, label: "Stack Diuji" },
              { angka: "100%", label: "Bahasa Indonesia" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-ink-700 bg-ink-900/60 p-4">
                <div className="text-2xl font-extrabold text-gradient">{s.angka}</div>
                <div className="mt-1 text-xs text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Repo */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead kicker="// review repo" title="Repo GitHub Pilihan" href="/repo" />
        <div className="grid gap-6 md:grid-cols-3">
          {featuredRepos.map((r) => (
            <ReviewCard key={r.slug} review={r} basePath="/repo" />
          ))}
        </div>
      </section>

      {/* Leaderboard Model */}
      <section className="border-y border-ink-700/60 bg-ink-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHead kicker="// skor model" title="Papan Skor Model LLM" href="/model" />
          <div className="overflow-hidden rounded-2xl border border-ink-700">
            {featuredModels.map((m, i) => (
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
        </div>
      </section>

      {/* Review Stack */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead kicker="// review stack" title="Stack & Tools Coding AI" href="/stack" />
        <div className="grid gap-6 md:grid-cols-3">
          {featuredStacks.map((s) => (
            <ReviewCard key={s.slug} review={s} basePath="/stack" />
          ))}
        </div>
      </section>

      {/* Berita */}
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

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-ink-600 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-10 text-center sm:p-14">
          <div className="absolute -top-20 right-0 h-48 w-96 rounded-full bg-violet-glow/15 blur-3xl" />
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
