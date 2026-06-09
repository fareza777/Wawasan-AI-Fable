const bulan = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

export function formatTanggal(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${bulan[m - 1]} ${y}`;
}
