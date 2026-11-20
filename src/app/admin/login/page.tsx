import AdminLoginForm from "@/components/admin/AdminLoginForm";

// Static page; the Cloudflare Worker redirects signed-in admins to /admin.
export default function AdminLoginPage() {
  return <AdminLoginForm />;
}
