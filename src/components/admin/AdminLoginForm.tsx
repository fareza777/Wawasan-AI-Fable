"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("fajar.mreza@gmail.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Gagal masuk.");
        return;
      }
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Koneksi gagal. Coba lagi.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-16">
      <p className="font-mono text-sm font-semibold uppercase tracking-widest text-neon-400">
        // admin
      </p>
      <h1 className="mt-3 text-2xl font-extrabold text-slate-50">Masuk Admin</h1>
      <p className="mt-2 text-sm text-slate-400">
        Dashboard analitik Wawasan AI — hanya untuk akun yang diizinkan.
      </p>

      <form onSubmit={onSubmit} className="panel-white mt-8 rounded-2xl border p-6">
        {error && (
          <p className="mb-4 rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-300">
            {error}
          </p>
        )}
        <label className="block text-sm font-medium text-slate-300">
          Email
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-ink-600 bg-ink-800 px-4 py-3 text-sm text-slate-100 outline-none focus:border-neon-400/60"
            required
          />
        </label>
        <label className="mt-4 block text-sm font-medium text-slate-300">
          Password admin
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-ink-600 bg-ink-800 px-4 py-3 text-sm text-slate-100 outline-none focus:border-neon-400/60"
            required
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-neon-500 to-violet-glow py-3 text-sm font-bold text-ink-950 transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Memverifikasi…" : "Masuk"}
        </button>
      </form>

      <p className="mt-6 text-center text-xs text-slate-500">
        Login Supabase akan menggantikan sistem ini nanti.
      </p>
    </div>
  );
}
