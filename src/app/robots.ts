import type { MetadataRoute } from "next";

// FIX 2026-06-12: site URL default. Override via Vercel env var
// NEXT_PUBLIC_SITE_URL. See skill: wawasan-ai-deploy-workflow.
const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wawasan-ai.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
