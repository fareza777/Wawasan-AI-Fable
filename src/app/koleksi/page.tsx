import type { Metadata } from "next";
import KoleksiClient from "./KoleksiClient";

export const metadata: Metadata = {
  title: "Koleksi Saya",
  description: "Review dan artikel yang kamu simpan di Wawasan AI.",
};

export default function KoleksiPage() {
  return <KoleksiClient />;
}
