import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contoh Background Silver Plat",
  robots: { index: false, follow: false },
};

const variants = [
  {
    id: "1",
    name: "Brushed Horizontal",
    tag: "01",
    desc: "Garis halus searah — seperti aluminium dibrush. Tenang, tidak silang.",
    className: "steel-v1",
  },
  {
    id: "2",
    name: "Chrome Gloss",
    tag: "02",
    desc: "Kilau cermin tanpa garis. Highlight lembut di atas, vignette di pinggir.",
    className: "steel-v2",
  },
  {
    id: "3",
    name: "Matte Slate",
    tag: "03",
    desc: "Silver datar & bersih. Paling nyaman dibaca, hampir tanpa tekstur.",
    className: "steel-v3",
  },
  {
    id: "4",
    name: "Emboss Plate",
    tag: "04",
    desc: "Relief diagonal lebar & samar — kesan plat ditekan, bukan garis rapat.",
    className: "steel-v4",
  },
  {
    id: "5",
    name: "Anodized Cool",
    tag: "05",
    desc: "Silver kebiruan dingin + grain halus. Industrial, modern.",
    className: "steel-v5",
  },
];

function MockCard() {
  return (
    <div className="card-glow max-w-sm rounded-2xl border p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-neon-400">Preview</p>
      <h3 className="mt-2 text-lg font-bold text-slate-100">OpenClaw</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">
        Kartu putih di atas background silver — begini tampilannya di halaman review.
      </p>
    </div>
  );
}

export default function ContohPlatPage() {
  return (
    <div>
      <div className="border-b border-ink-700/60 bg-ink-900/40 px-4 py-6 text-center sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-neon-400">Design preview</p>
        <h1 className="mt-2 text-2xl font-extrabold text-slate-50">5 Variasi Silver Plat</h1>
        <p className="mx-auto mt-2 max-w-lg text-sm text-slate-400">
          Scroll untuk bandingkan. Pilih nomor favoritmu, lalu bilang ke saya (misal: &quot;pakai 02&quot;).
        </p>
        <Link href="/" className="mt-4 inline-block text-sm font-semibold text-neon-400 hover:underline">
          ← Kembali ke beranda
        </Link>
      </div>

      {variants.map((v) => (
        <section key={v.id} className={`${v.className} relative min-h-[88vh] px-4 py-14 sm:px-6`}>
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-5xl font-extrabold text-ink-600/80">{v.tag}</p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-50">{v.name}</h2>
            <p className="mt-2 max-w-xl text-slate-300">{v.desc}</p>
            <p className="mt-1 font-mono text-sm text-neon-400">data-steel=&quot;{v.id}&quot;</p>
            <div className="mt-10">
              <MockCard />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
