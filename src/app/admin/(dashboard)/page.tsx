import type { PlausiblePeriod } from "@/lib/plausible";
import AdminDashboard from "@/components/admin/AdminDashboard";

const PERIODS: PlausiblePeriod[] = ["day", "7d", "30d", "12mo"];

function parsePeriod(raw?: string): PlausiblePeriod {
  if (raw && PERIODS.includes(raw as PlausiblePeriod)) return raw as PlausiblePeriod;
  return "30d";
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ period?: string }>;
}) {
  const { period: raw } = await searchParams;
  const period = parsePeriod(raw);
  return <AdminDashboard period={period} />;
}
