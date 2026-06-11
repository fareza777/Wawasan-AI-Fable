import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-700/60 bg-ink-900/40">
      <div
        className="watermark-text pointer-events-none absolute -bottom-4 left-1/2 max-w-full -translate-x-1/2 truncate text-[12vw] sm:-bottom-6 sm:text-[9rem]"
        aria-hidden
      >
        WAWASAN AI
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="panel-white relative mb-12 flex flex-col items-center gap-5 overflow-hidden rounded-3xl border p-8 text-center sm:p-10">
          <div className="dot-pattern absolute inset-0" aria-hidden />
          <h3 className="relative text-xl font-extrabold text-slate-50 sm:text-2xl">
            Jangan ketinggalan review &amp; wawasan terbaru
          </h3>
          <p className="relative max-w-md text-sm leading-relaxed text-slate-300">
            Review repo, model, dan analisis AI — dari Wawasan AI.
          </p>
          <div className="relative w-full max-w-md">
            <NewsletterForm />
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-neon-500 to-violet-glow font-mono text-xs font-bold text-ink-950">
                W
              </span>
              <span className="font-bold text-slate-100">
                Wawasan<span className="text-gradient">AI</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Portal review AI: repo GitHub, model LLM, tools coding AI, dan wawasan AI.
            </p>
          </div>

          <div className="text-sm">
            <h3 className="mb-3 font-semibold text-slate-200">Rubrik</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="/repo" className="hover:text-neon-400">Review Repo GitHub</Link></li>
              <li><Link href="/model" className="hover:text-neon-400">Review Model LLM</Link></li>
              <li><Link href="/stack" className="hover:text-neon-400">Review Tools</Link></li>
              <li><Link href="/berita" className="hover:text-neon-400">Berita & Wawasan</Link></li>
              <li><Link href="/koleksi" className="hover:text-neon-400">Koleksi</Link></li>
              <li><Link href="/bandingkan" className="hover:text-neon-400">Bandingkan Model</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <h3 className="mb-3 font-semibold text-slate-200">Sumber Daya</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="/indeks" className="hover:text-neon-400">Indeks A–Z</Link></li>
              <li><Link href="/changelog" className="hover:text-neon-400">Changelog Skor</Link></li>
              <li><Link href="/feed.xml" className="hover:text-neon-400">RSS Feed</Link></li>
              <li><Link href="/tentang" className="hover:text-neon-400">Tentang Kami</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-700/60 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Wawasan AI
      </div>
    </footer>
  );
}
