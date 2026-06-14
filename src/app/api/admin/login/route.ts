import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  createSessionToken,
  isAdminEmail,
  sessionCookieOptions,
  verifyAdminPassword,
} from "@/lib/admin-auth";

export async function POST(req: Request) {
  if (!process.env.ADMIN_PASSWORD || !process.env.ADMIN_SESSION_SECRET) {
    return NextResponse.json(
      { error: "Admin belum dikonfigurasi di server." },
      { status: 503 },
    );
  }

  let body: { email?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Payload tidak valid." }, { status: 400 });
  }

  const email = body.email?.trim() ?? "";
  const password = body.password ?? "";

  if (!email || !password) {
    return NextResponse.json({ error: "Email dan password wajib diisi." }, { status: 400 });
  }

  if (!isAdminEmail(email) || !verifyAdminPassword(password)) {
    return NextResponse.json({ error: "Email atau password salah." }, { status: 401 });
  }

  const token = createSessionToken(email);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, sessionCookieOptions());
  return res;
}
