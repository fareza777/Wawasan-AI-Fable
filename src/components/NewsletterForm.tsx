"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  return (
    <form
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        if (!email.trim()) return;
        const subject = encodeURIComponent("Langganan Wawasan AI");
        const body = encodeURIComponent(
          `Halo, saya ingin berlangganan update Wawasan AI.\nEmail: ${email}`
        );
        window.location.href = `mailto:fajar.mreza@gmail.com?subject=${subject}&body=${body}`;
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="emailmu@contoh.com"
        className="h-12 flex-1 rounded-xl border border-ink-600 bg-ink-950/70 px-4 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-neon-400/60"
      />
      <button
        type="submit"
        className="h-12 rounded-xl bg-gradient-to-r from-neon-500 to-violet-glow px-6 text-sm font-bold text-ink-950 transition-opacity hover:opacity-90"
      >
        Langganan
      </button>
    </form>
  );
}
