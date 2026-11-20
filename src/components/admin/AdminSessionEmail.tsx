"use client";

import { useEffect, useState } from "react";

/**
 * Shows the signed-in admin email. The static export has no server session, so
 * the session is read from the Worker (/api/admin/session). The Worker also
 * gates /admin server-side; this redirect is a client-side fallback.
 */
export default function AdminSessionEmail() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/admin/session", { cache: "no-store" })
      .then(async (res) => {
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as { email?: string };
        if (!cancelled) setEmail(data.email ?? null);
      })
      .catch(() => {
        if (!cancelled) window.location.replace("/admin/login");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return <p className="text-sm text-slate-400">{email ?? "Memeriksa sesi…"}</p>;
}
