import Link from "next/link";
import { Review } from "@/lib/types";
import { ContentType } from "@/lib/storage";
import { ScoreBar, Tag, scoreColor } from "./Score";
import ScoreRing from "./ScoreRing";
import Monogram from "./Monogram";
import BookmarkButton from "./BookmarkButton";
import ShareButton from "./ShareButton";
import ReadingProgress from "./ReadingProgress";
import { formatTanggal } from "@/lib/format";

export type NextItem = {
  href: string;
  name: string;
  tagline: string;
};

export default function ReviewDetail({
  review,
  backHref,
  backLabel,
  next,
}: {
  review: Review;
  backHref: string;
  backLabel: string;
  next?: NextItem;
}) {
  const type = backHref.replace("/", "") as ContentType;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <ReadingProgress />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="font-mono text-xs text-slate-500">
        <Link href="/" className="transition-colors hover:text-neon-400">Beranda</Link>
        <span className="mx-2">/</span>
        <Link href={backHref} className="transition-colors hover:text-neon-400">{backLabel}</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">{review.name}</span>
      </nav>

      <header className="fade-up mt-7 flex items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <Monogram name={review.name} size="lg" />
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
              {review.name}
            </h1>
          </div>
          <p className="mt-3 text-lg text-slate-400">{review.tagline}</p>
          <div className="mt-4 flex flex-wrap items-center gap-1.5">
            {review.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
        <ScoreRing score={review.score} />
      </header>

      <div className="fade-up delay-1 mt-6 flex items-center gap-3">
        <BookmarkButton type={type} slug={review.slug} size="lg" />
        <ShareButton title={`Review ${review.name} — Wawasan AI`} />
      </div>

      {/* Sekilas info */}
      <div className="fade-up delay-2 mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-600 bg-ink-700/60 sm:grid-cols-4">
        {[
          { label: "Skor", value: `${review.score.toFixed(1)} / 10`, accent: scoreColor(review.score) },
          { label: "Kategori", value: review.tags[0] },
          { label: "Diulas", value: formatTanggal(review.date) },
          { label: "Penulis", value: "Fajar M Reza" },
        ].map((info) => (
          <div key={info.label} className="bg-ink-900/90 px-4 py-3">
            <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
              {info.label}
            </div>
            <div className={`mt-1 text-sm font-semibold ${info.accent ?? "text-slate-200"}`}>
              {info.value}
            </div>
          </div>
        ))}
      </div>

      <p className="fade-up delay-3 mt-8 rounded-2xl border border-ink-600 bg-ink-800/50 p-6 leading-relaxed text-slate-300">
        {review.summary}
      </p>

      <section className="fade-up delay-4 mt-10">
        <h2 className="text-xl font-bold text-slate-100">Skor Rinci</h2>
        <div className="mt-5 space-y-4">
          {review.scores.map((s) => (
            <ScoreBar key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      </section>

      <section className="fade-up delay-5 mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-6">
          <h2 className="font-bold text-emerald-400">👍 Kelebihan</h2>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-300">
            {review.pros.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-emerald-400">+</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-rose-500/25 bg-rose-500/5 p-6">
          <h2 className="font-bold text-rose-400">👎 Kekurangan</h2>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-300">
            {review.cons.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="text-rose-400">−</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="prose-id mt-10">
        <h2>Ulasan Lengkap</h2>
        {review.body.map((p, i) => (
          <p key={i} className={i === 0 ? "lead-paragraph" : undefined}>
            {p}
          </p>
        ))}
      </section>

      {/* Verdict sebagai pull-quote */}
      <section className="mt-10">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-neon-400">
          // verdict
        </p>
        <blockquote className="pull-quote mt-4 pl-6">{review.verdict}</blockquote>
      </section>

      {review.link && (
        <a
          href={review.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-500 to-violet-glow px-5 py-3 text-sm font-bold text-ink-950 transition-opacity hover:opacity-90"
        >
          {review.linkLabel ?? "Kunjungi"} ↗
        </a>
      )}

      {/* Review berikutnya */}
      {next && (
        <Link
          href={next.href}
          className="card-glow mt-12 flex items-center justify-between gap-4 rounded-2xl p-6"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
              Review berikutnya
            </p>
            <p className="mt-1.5 font-bold text-slate-100">{next.name}</p>
            <p className="mt-0.5 line-clamp-1 text-sm text-slate-400">{next.tagline}</p>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="shrink-0 text-neon-400"
          >
            <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      )}
    </article>
  );
}
