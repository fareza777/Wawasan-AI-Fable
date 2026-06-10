// Warna unik per kategori artikel agar mudah dikenali sekilas.
export const kategoriStyle: Record<string, string> = {
  Analisis: "bg-violet-500/15 text-violet-300",
  Panduan: "bg-cyan-500/15 text-cyan-300",
  Tutorial: "bg-emerald-500/15 text-emerald-300",
  Opini: "bg-amber-500/15 text-amber-300",
  Editorial: "bg-rose-500/15 text-rose-300",
};

export function getKategoriStyle(kategori: string) {
  return kategoriStyle[kategori] ?? "bg-violet-500/15 text-violet-300";
}
