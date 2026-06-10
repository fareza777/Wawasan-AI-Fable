import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wawasan-ai.vercel.app"),
  title: {
    default: "Wawasan AI — Portal Review AI Indonesia",
    template: "%s · Wawasan AI",
  },
  description:
    "Portal review AI berbahasa Indonesia: review repo GitHub (OpenClaw, DeerFlow, n8n), skor model LLM, review stack & tools coding AI, serta berita dan wawasan AI — ditulis dari pemakaian nyata.",
  keywords: [
    "AI Indonesia",
    "review AI",
    "review repo GitHub",
    "model LLM",
    "OpenClaw",
    "Claude Code",
    "Cursor",
    "otomasi AI",
    "LLM lokal",
    "Ollama",
  ],
  authors: [{ name: "Fajar M Reza" }],
  openGraph: {
    title: "Wawasan AI — Portal Review AI Indonesia",
    description:
      "Review repo GitHub, skor model LLM, review stack AI, dan wawasan AI dalam bahasa Indonesia — dari pemakaian nyata, bukan rilis pers.",
    type: "website",
    locale: "id_ID",
    siteName: "Wawasan AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wawasan AI — Portal Review AI Indonesia",
    description:
      "Review repo GitHub, skor model LLM, review stack AI, dan wawasan AI dalam bahasa Indonesia.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
