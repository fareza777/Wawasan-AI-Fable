import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allTags, getItemsByTag, getTagLabel } from "@/lib/tags";
import { rubrikStyle } from "@/lib/rubrik";
import { scoreColor } from "@/components/Score";
import { canonicalPath } from "@/lib/seo";

export function generateStaticParams() {
  return allTags.map((t) => ({ tag: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const tag = (await params).tag;
  const label = getTagLabel(tag);
  return {
    title: `Tag: ${label}`,
    description: `Semua konten Wawasan AI dengan tag ${label}.`,
    ...canonicalPath(`/tag/${tag}`),
  };
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const items = getItemsByTag(tag);
  if (items.length === 0) notFound();
  const label = getTagLabel(tag);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="font-mono text-sm font-semibold uppercase tracking-widest text-neon-400">// tag</p>
      <h1 className="mt-3 text-3xl font-extrabold text-slate-50 sm:text-4xl">{label}</h1>
      <p className="mt-4 text-slate-300">{items.length} konten ditemukan</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const style = rubrikStyle[item.type];
          return (
            <Link
              key={`${item.type}-${item.slug}`}
              href={item.href}
              className={`card-glow rounded-2xl border p-5 ${style.border}`}
            >
              <span className={`text-[10px] font-bold uppercase ${style.accent}`}>{style.label}</span>
              <h2 className="mt-2 font-bold text-slate-100">{item.title}</h2>
              <p className="mt-1 line-clamp-2 text-sm text-slate-400">{item.subtitle}</p>
              {item.score !== undefined && (
                <span className={`mt-3 inline-block font-mono font-bold ${scoreColor(item.score)}`}>
                  ★ {item.score.toFixed(1)}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
