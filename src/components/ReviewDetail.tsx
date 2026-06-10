import Link from "next/link";
import { Review } from "@/lib/types";
import { ContentType } from "@/lib/storage";
import { ScoreBar, Tag } from "./Score";
import ScoreRing from "./ScoreRing";
import BookmarkButton from "./BookmarkButton";
import ShareButton from "./ShareButton";
import ReadingProgress from "./ReadingProgress";

export default function ReviewDetail({
  review,
  backHref,
  backLabel,
}: {
  review: Review;
  backHref: string;
  backLabel: string;
}) {
  const type = backHref.replace("/", "") as ContentType;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <ReadingProgress />
      <Link href={backHref} className="text-sm font-medium text-neon-400 hover:underline">
        ← {backLabel}
      </Link>

      <header className="fade-up mt-6 flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            {review.name}
          </h1>
          <p className="mt-2 text-lg text-slate-400">{review.tagline}</p>
          <div className="mt-4 flex flex-wrap items-center gap-1.5">
            {review.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Diulas oleh Fajar M Reza
          </p>
        </div>
        <ScoreRing score={review.score} />
      </header>

      <div className="fade-up delay-1 mt-6 flex items-center gap-3">
        <BookmarkButton type={type} slug={review.slug} size="lg" />
        <ShareButton title={`Review ${review.name} — Wawasan AI`} />
      </div>

      <p className="fade-up delay-2 mt-8 rounded-2xl border border-ink-600 bg-ink-800/50 p-6 leading-relaxed text-slate-300">
        {review.summary}
      </p>

      <section className="fade-up delay-3 mt-10">
        <h2 className="text-xl font-bold text-slate-100">Skor Rinci</h2>
        <div className="mt-5 space-y-4">
          {review.scores.map((s) => (
            <ScoreBar key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      </section>

      <section className="fade-up delay-4 mt-10 grid gap-6 sm:grid-cols-2">
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
          <p key={i}>{p}</p>
        ))}
      </section>

      <section className="mt-10 rounded-2xl border border-neon-500/30 bg-gradient-to-br from-ink-800 to-ink-900 p-6">
        <h2 className="flex items-center gap-2 font-bold text-neon-400">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Verdict
        </h2>
        <p className="mt-3 leading-relaxed text-slate-200">{review.verdict}</p>
      </section>

      {review.link && (
        <a
          href={review.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-500 to-violet-glow px-5 py-3 text-sm font-bold text-ink-950 transition-opacity hover:opacity-90"
        >
          {review.linkLabel ?? "Kunjungi"} ↗
        </a>
      )}
    </article>
  );
}
