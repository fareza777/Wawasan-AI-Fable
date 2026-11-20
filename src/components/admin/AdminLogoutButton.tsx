"use client";

export default function AdminLogoutButton() {
  return (
    <button
      type="button"
      onClick={async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        window.location.assign("/admin/login");
      }}
      className="rounded-lg border border-ink-600 px-3 py-1.5 text-sm text-slate-300 hover:border-ink-500 hover:text-slate-100"
    >
      Keluar
    </button>
  );
}
