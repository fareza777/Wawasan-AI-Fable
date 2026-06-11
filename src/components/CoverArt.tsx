import { getKategoriStyle } from "@/lib/kategori";
import ArticleCoverArt, { getCoverGradient } from "./ArticleCoverArt";

export default function CoverArt({
  slug,
  category,
}: {
  slug: string;
  category: string;
  title?: string;
}) {
  return (
    <div
      className="relative mb-4 h-36 overflow-hidden rounded-xl border border-ink-600/25"
      style={{ background: getCoverGradient(slug) }}
    >
      <ArticleCoverArt slug={slug} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      <div className="absolute inset-0 flex items-end p-4">
        <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase shadow-sm ${getKategoriStyle(category)}`}>
          {category}
        </span>
      </div>
    </div>
  );
}
