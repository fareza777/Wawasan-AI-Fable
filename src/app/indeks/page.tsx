import type { Metadata } from "next";
import Link from "next/link";
import { getIndexDirectory } from "@/lib/indexDirectory";
import { canonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Indeks A–Z",
  description: "Direktori lengkap semua review dan artikel Wawasan AI.",
  ...canonicalPath("/indeks"),
};

export default function IndeksPage() {
  const grouped = getIndexDirectory();
  const letters = Object.keys(grouped).sort();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="font-mono text-sm font-semibold uppercase tracking-widest text-neon-400">// indeks</p>
      <h1 className="mt-3 text-3xl font-extrabold text-slate-50">Indeks A–Z</h1>
      <p className="mt-4 text-slate-300">Semua konten Wawasan AI dalam satu direktori.</p>

      <div className="mt-10 flex flex-wrap gap-2">
        {letters.map((l) => (
          <a
            key={l}
            href={`#letter-${l}`}
            className="rounded-lg border border-ink-600 px-3 py-1.5 font-mono text-sm text-neon-400 hover:bg-ink-800"
          >
            {l}
          </a>
        ))}
      </div>

      {letters.map((letter) => (
        <section key={letter} id={`letter-${letter}`} className="mt-12">
          <h2 className="font-mono text-4xl font-extrabold text-ink-600">{letter}</h2>
          <ul className="mt-4 space-y-2">
            {grouped[letter].map((entry) => (
              <li key={entry.href}>
                <Link href={entry.href} className="flex items-baseline gap-3 text-slate-300 hover:text-neon-400">
                  <span className="w-14 shrink-0 font-mono text-xs text-slate-500">{entry.type}</span>
                  <span>{entry.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
