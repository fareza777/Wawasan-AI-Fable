"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Legacy `/repo/weekly?cadence=daily` → `/repo/daily`. Done client-side because the
 * static export can't read searchParams on the server.
 */
export default function CadenceRedirect() {
  const router = useRouter();
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("cadence") === "daily") {
      router.replace("/repo/daily");
    }
  }, [router]);
  return null;
}
