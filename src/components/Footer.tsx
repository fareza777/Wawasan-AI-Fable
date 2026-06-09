import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink-700/60 bg-ink-900/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-neon-500 to-violet-glow font-mono text-xs font-bold text-ink-950">
              W
            </span>
            <span className="font-bold text-slate-100">
              Wawasan<span className="text-gradient">AI</span>
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Portal review AI Indonesia: repo GitHub, model LLM, stack & tools,
            dan wawasan AI — ditulis dari pemakaian nyata, bukan sekadar rilis pers.
          </p>
        </div>

        <div className="text-sm">
          <h3 className="mb-3 font-semibold text-slate-200">Rubrik</h3>
          <ul className="space-y-2 text-slate-400">
            <li><Link href="/repo" className="hover:text-neon-400">Review Repo GitHub</Link></li>
            <li><Link href="/model" className="hover:text-neon-400">Review Model LLM</Link></li>
            <li><Link href="/stack" className="hover:text-neon-400">Review Stack & Tools</Link></li>
            <li><Link href="/berita" className="hover:text-neon-400">Berita & Wawasan</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <h3 className="mb-3 font-semibold text-slate-200">Proyek Lain</h3>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a href="https://prompt-lab.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-neon-400">
                Prompt Lab ↗
              </a>
            </li>
            <li>
              <a href="https://prima-rawajati.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-neon-400">
                Prima Rawajati ↗
              </a>
            </li>
            <li><Link href="/tentang" className="hover:text-neon-400">Tentang Penulis</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-700/60 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Wawasan AI · Dibuat oleh Fajar M Reza · Skor review adalah opini editorial dari pemakaian langsung.
      </div>
    </footer>
  );
}
