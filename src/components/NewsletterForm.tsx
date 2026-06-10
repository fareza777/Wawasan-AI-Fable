"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  return (
    <div>
      <form
        className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
        onSubmit={async (e) => {
          e.preventDefault();
          if (!email.trim()) return;
          setStatus("loading");
          try {
            const res = await fetch("/api/newsletter", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            const subs = JSON.parse(localStorage.getItem("wawasanai:newsletter") ?? "[]");
            subs.push(email);
            localStorage.setItem("wawasanai:newsletter", JSON.stringify(subs));
            setStatus("success");
            setMessage(
              data.mode === "demo"
                ? "Terima kasih! Langganan tercatat (mode demo lokal)."
                : "Terima kasih! Kamu sudah berlangganan."
            );
            setEmail("");
          } catch {
            setStatus("error");
            setMessage("Gagal mendaftar. Coba lagi nanti.");
          }
        }}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@perusahaan.com"
          disabled={status === "loading" || status === "success"}
          className="h-12 flex-1 rounded-xl border border-ink-600 bg-ink-950/70 px-4 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-neon-400/60 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="h-12 rounded-xl bg-gradient-to-r from-neon-500 to-violet-glow px-6 text-sm font-bold text-ink-950 transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {status === "loading" ? "…" : status === "success" ? "✓ Terdaftar" : "Langganan"}
        </button>
      </form>
      {message && (
        <p className={`mt-3 text-sm ${status === "error" ? "text-rose-400" : "text-emerald-400"}`}>
          {message}
        </p>
      )}
    </div>
  );
}
