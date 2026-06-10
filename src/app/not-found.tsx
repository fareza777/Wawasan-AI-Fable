import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-32 text-center">
      <p className="glitch font-mono text-7xl font-extrabold text-gradient" data-text="404">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-slate-100">Halaman tidak ditemukan</h1>
      <p className="mt-3 text-slate-400">
        Halaman yang kamu cari mungkin sudah dipindahkan atau belum ditulis.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-gradient-to-r from-neon-500 to-violet-glow px-6 py-3 text-sm font-bold text-ink-950"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
