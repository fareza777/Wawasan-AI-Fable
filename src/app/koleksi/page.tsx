import type { Metadata } from "next";
import KoleksiClient from "./KoleksiClient";

export const metadata: Metadata = {
  title: "Koleksi Tersimpan",
  description: "Review dan artikel yang kamu simpan di Wawasan AI.",
  robots: { index: false, follow: false },
};

export default function KoleksiPage() {
  return <KoleksiClient />;
}
