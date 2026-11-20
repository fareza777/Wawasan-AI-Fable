import AdminLogoutButton from "@/components/admin/AdminLogoutButton";
import AdminSessionEmail from "@/components/admin/AdminSessionEmail";

// Static page; access is enforced by the Cloudflare Worker (worker/index.ts),
// which redirects /admin to /admin/login without a valid session cookie.
export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-admin>
      <div className="border-b border-ink-700/60 bg-ink-900/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-neon-400">Admin</p>
            <AdminSessionEmail />
          </div>
          <AdminLogoutButton />
        </div>
      </div>
      {children}
    </div>
  );
}
