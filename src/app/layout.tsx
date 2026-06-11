import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PointerGlow from "@/components/PointerGlow";
import BackToTop from "@/components/BackToTop";
import ThemeProvider from "@/components/ThemeProvider";
import Analytics from "@/components/Analytics";
import ConsentBanner from "@/components/ConsentBanner";
import JsonLd from "@/components/JsonLd";

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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wawasanai.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wawasan AI — Portal Review AI Indonesia",
    template: "%s · Wawasan AI",
  },
  description:
    "Portal review AI berbahasa Indonesia: review repo GitHub, model LLM, stack & tools coding AI, serta berita dan wawasan AI.",
  keywords: [
    "AI Indonesia",
    "review AI",
    "review repo GitHub",
    "model LLM",
    "Claude Code",
    "Cursor",
    "otomasi AI",
    "LLM lokal",
    "Ollama",
  ],
  authors: [{ name: "Wawasan AI" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Wawasan AI — Portal Review AI Indonesia",
    description:
      "Review repo GitHub, model LLM, stack AI, dan wawasan AI dalam bahasa Indonesia.",
    type: "website",
    locale: "id_ID",
    siteName: "Wawasan AI",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wawasan AI — Portal Review AI Indonesia",
    description:
      "Review repo GitHub, skor model LLM, review stack AI, dan wawasan AI dalam bahasa Indonesia.",
    images: ["/opengraph-image"],
  },
  alternates: {
    types: { "application/rss+xml": `${SITE_URL}/feed.xml` },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Wawasan AI",
  url: SITE_URL,
  description: "Portal review AI Indonesia",
  inLanguage: "id",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/indeks?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      data-theme="light"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd data={jsonLd} />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("wawasanai:theme");if(!t)t="light";document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="light"}})();`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <div className="noise-overlay" aria-hidden />
          <PointerGlow />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
          <ConsentBanner />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
