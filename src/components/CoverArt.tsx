import { getKategoriStyle } from "@/lib/kategori";

const patterns: Record<string, string> = {
  Analisis: "from-violet-600/40 via-ink-900 to-ink-950",
  Panduan: "from-cyan-600/40 via-ink-900 to-ink-950",
  Tutorial: "from-emerald-600/40 via-ink-900 to-ink-950",
  Opini: "from-amber-600/40 via-ink-900 to-ink-950",
  Editorial: "from-rose-600/40 via-ink-900 to-ink-950",
};

export default function CoverArt({ category, title }: { category: string; title: string }) {
  const gradient = patterns[category] ?? "from-violet-600/40 via-ink-900 to-ink-950";
  return (
    <div className={`relative mb-4 h-28 overflow-hidden rounded-xl bg-gradient-to-br ${gradient}`}>
      <div className="dot-pattern absolute inset-0 opacity-60" aria-hidden />
      <div className="absolute inset-0 flex items-end p-4">
        <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase ${getKategoriStyle(category)}`}>
          {category}
        </span>
      </div>
      <span className="absolute right-3 top-3 font-mono text-3xl font-extrabold text-white/10">
        {title.charAt(0)}
      </span>
    </div>
  );
}
