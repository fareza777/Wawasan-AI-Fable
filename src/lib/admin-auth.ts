import { createHmac, timingSafeEqual } from "crypto";

export const ADMIN_COOKIE = "wawasan_admin";
const SESSION_MAX_AGE_SEC = 60 * 60 * 24 * 7;

export function getAdminEmails(): string[] {
  return (process.env.ADMIN_EMAILS ?? "fajar.mreza@gmail.com")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

export function isAdminEmail(email: string): boolean {
  return getAdminEmails().includes(email.trim().toLowerCase());
}

export function verifyAdminPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function createSessionToken(email: string): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET tidak dikonfigurasi");
  const normalized = email.trim().toLowerCase();
  const exp = Date.now() + SESSION_MAX_AGE_SEC * 1000;
  const payload = `${normalized}|${exp}`;
  const sig = createHmac("sha256", secret).update(payload).digest("hex");
  return Buffer.from(`${payload}|${sig}`).toString("base64url");
}

export function verifySessionToken(token: string): string | null {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) return null;
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const lastPipe = decoded.lastIndexOf("|");
    const secondLast = decoded.lastIndexOf("|", lastPipe - 1);
    if (secondLast < 0) return null;
    const email = decoded.slice(0, secondLast);
    const expStr = decoded.slice(secondLast + 1, lastPipe);
    const sig = decoded.slice(lastPipe + 1);
    const exp = Number(expStr);
    if (!email || !Number.isFinite(exp) || !sig) return null;
    if (Date.now() > exp) return null;
    if (!isAdminEmail(email)) return null;
    const payload = `${email}|${exp}`;
    const expected = createHmac("sha256", secret).update(payload).digest("hex");
    const sigBuf = Buffer.from(sig);
    const expBuf = Buffer.from(expected);
    if (sigBuf.length !== expBuf.length || !timingSafeEqual(sigBuf, expBuf)) return null;
    return email;
  } catch {
    return null;
  }
}

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_MAX_AGE_SEC,
  };
}

export async function getAdminSession(): Promise<string | null> {
  const { cookies } = await import("next/headers");
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}
