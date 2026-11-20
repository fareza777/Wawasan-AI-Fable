"use client";

import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

type Props = {
  /** True only when built on Vercel (Vercel Analytics endpoints exist only there). */
  vercel?: boolean;
  /** Optional Cloudflare Web Analytics beacon token (free, cookieless). */
  cfBeaconToken?: string;
};

export default function Analytics({ vercel = false, cfBeaconToken }: Props) {
  return (
    <>
      {vercel && (
        <>
          <VercelAnalytics />
          <SpeedInsights />
        </>
      )}
      {cfBeaconToken && (
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={JSON.stringify({ token: cfBeaconToken })}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
