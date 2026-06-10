import Link from "next/link";
import { RelatedItem } from "@/lib/related";
import { rubrikStyle } from "@/lib/rubrik";
import { scoreColor } from "./Score";

export default function RelatedContent({ items }: { items: RelatedItem[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-14 border-t border-ink-700 pt-10">
      <h2 className="text-xl font-bold text-slate-100">Bacaan Terkait</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {items.map((item) => {
          const style = rubrikStyle[item.type];
          return (
            <Link
              key={`${item.type}-${item.slug}`}
              href={item.href}
              className={`rounded-2xl border bg-gradient-to-br p-5 transition-colors hover:border-neon-400/40 ${style.border} ${style.gradient}`}
            >
              <span className={`text-[10px] font-bold uppercase ${style.accent}`}>{style.label}</span>
              <h3 className="mt-2 font-bold text-slate-100">{item.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-slate-400">{item.subtitle}</p>
              {item.score !== undefined && (
                <span className={`mt-3 inline-block font-mono text-sm font-bold ${scoreColor(item.score)}`}>
                  ★ {item.score.toFixed(1)}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
