"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Profile,
  getProfile,
  saveProfile,
  clearAllData,
  getBookmarks,
  exportBookmarks,
  importBookmarks,
  STORAGE_EVENT,
} from "@/lib/storage";

export default function ProfileMenu() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [name, setName] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const sync = () => {
      setProfile(getProfile());
      setCount(getBookmarks().length);
    };
    sync();
    window.addEventListener(STORAGE_EVENT, sync);
    return () => window.removeEventListener(STORAGE_EVENT, sync);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  if (!profile) {
    return (
      <>
        <button
          onClick={() => setShowLogin(true)}
          className="h-9 rounded-lg bg-gradient-to-r from-neon-500 to-violet-glow px-4 text-sm font-bold text-ink-950 transition-opacity hover:opacity-90"
        >
          Masuk
        </button>

        {showLogin && (
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink-950/80 px-4 backdrop-blur-sm"
            onClick={() => setShowLogin(false)}
          >
            <div
              className="w-full max-w-sm rounded-2xl border border-ink-600 bg-ink-900 p-7 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-bold text-slate-100">Akun Wawasan AI</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Buat profil lokal untuk menyimpan koleksi review favorit. Data tersimpan di perangkat
                ini saja — tanpa server, tanpa password.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (name.trim()) {
                    saveProfile(name);
                    setShowLogin(false);
                  }
                }}
              >
                <input
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama atau tim kamu"
                  className="mt-5 w-full rounded-xl border border-ink-600 bg-ink-800 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-neon-400/60"
                />
                <button
                  type="submit"
                  disabled={!name.trim()}
                  className="mt-4 w-full rounded-xl bg-gradient-to-r from-neon-500 to-violet-glow py-3 text-sm font-bold text-ink-950 transition-opacity hover:opacity-90 disabled:opacity-40"
                >
                  Mulai Menjelajah
                </button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }

  const initial = profile.name.charAt(0).toUpperCase();

  return (
    <div className="relative" ref={wrapRef}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu akun"
        className="flex h-9 w-9 items-center justify-center rounded-full p-[2px]"
        style={{ background: "conic-gradient(from 140deg, #22d3ee, #8b5cf6, #c084fc, #22d3ee)" }}
      >
        <span className="flex h-full w-full items-center justify-center rounded-full bg-ink-900 font-bold text-neon-400">
          {initial}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-11 w-60 overflow-hidden rounded-xl border border-ink-600 bg-ink-900 shadow-2xl">
          <div className="border-b border-ink-700 px-4 py-3">
            <p className="text-sm font-bold text-slate-100">{profile.name}</p>
            <p className="text-xs text-slate-500">Akun lokal · perangkat ini</p>
          </div>
          <Link
            href="/koleksi"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-ink-800"
          >
            <span>Koleksi</span>
            <span className="rounded-full bg-neon-500/15 px-2 py-0.5 font-mono text-xs font-bold text-neon-400">
              {count}
            </span>
          </Link>
          <button
            onClick={() => {
              const blob = new Blob([exportBookmarks()], { type: "application/json" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "wawasan-ai-koleksi.json";
              a.click();
              URL.revokeObjectURL(url);
            }}
            className="w-full px-4 py-3 text-left text-sm text-slate-300 transition-colors hover:bg-ink-800"
          >
            Export koleksi
          </button>
          <button
            onClick={() => fileRef.current?.click()}
            className="w-full px-4 py-3 text-left text-sm text-slate-300 transition-colors hover:bg-ink-800"
          >
            Import koleksi
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = () => {
                if (typeof reader.result === "string") importBookmarks(reader.result);
              };
              reader.readAsText(file);
            }}
          />
          <button
            onClick={() => {
              clearAllData();
              setOpen(false);
            }}
            className="w-full px-4 py-3 text-left text-sm text-rose-400 transition-colors hover:bg-ink-800"
          >
            Hapus semua data
          </button>
        </div>
      )}
    </div>
  );
}
