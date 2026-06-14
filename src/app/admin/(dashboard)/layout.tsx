import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-auth";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const email = await getAdminSession();
  if (!email) redirect("/admin/login");
  return (
    <div data-admin>
      <div className="border-b border-ink-700/60 bg-ink-900/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-neon-400">Admin</p>
            <p className="text-sm text-slate-400">{email}</p>
          </div>
          <AdminLogoutButton />
        </div>
      </div>
      {children}
    </div>
  );
}
