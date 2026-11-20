/**
 * Cloudflare Worker for Wawasan AI.
 *
 * The site itself is a Next.js static export (out/) served by Workers Static
 * Assets — those requests never invoke this script, so they are free and don't
 * count toward the 100k requests/day limit. This Worker only runs for the paths
 * listed in wrangler.jsonc `assets.run_worker_first`:
 *
 *   POST /api/admin/login     admin login (was src/app/api/admin/login)
 *   POST /api/admin/logout    admin logout (was src/app/api/admin/logout)
 *   GET  /api/admin/session   current admin email (for the dashboard header)
 *   POST /api/newsletter      Resend audience signup (was src/app/api/newsletter)
 *   /admin, /admin/login      server-side session gate in front of the static pages
 */

interface AssetsBinding {
  fetch(request: Request): Promise<Response>;
}

export interface Env {
  ASSETS: AssetsBinding;
  ADMIN_EMAILS?: string;
  ADMIN_PASSWORD?: string;
  ADMIN_SESSION_SECRET?: string;
  RESEND_API_KEY?: string;
  RESEND_AUDIENCE_ID?: string;
}

const ADMIN_COOKIE = "wawasan_admin";
const SESSION_MAX_AGE_SEC = 60 * 60 * 24 * 7;
const encoder = new TextEncoder();

function json(data: unknown, status = 200, headers: HeadersInit = {}): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...headers },
  });
}

function adminEmails(env: Env): string[] {
  return (env.ADMIN_EMAILS ?? "fajar.mreza@gmail.com")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

function isAdminEmail(env: Env, email: string): boolean {
  return adminEmails(env).includes(email.trim().toLowerCase());
}

/** Constant-time comparison of two strings. */
function safeEqual(a: string, b: string): boolean {
  const ab = encoder.encode(a);
  const bb = encoder.encode(b);
  let diff = ab.length ^ bb.length;
  const len = Math.max(ab.length, bb.length);
  for (let i = 0; i < len; i++) diff |= (ab[i] ?? 0) ^ (bb[i] ?? 0);
  return diff === 0;
}

async function hmacHex(secret: string, payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode(payload)));
  return [...sig].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function base64UrlEncode(text: string): string {
  const bytes = encoder.encode(text);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecode(input: string): string {
  const b64 = input.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(input.length / 4) * 4, "=");
  const bin = atob(b64);
  return new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)));
}

// Same token format as the former src/lib/admin-auth.ts: base64url("email|exp|hmacHex").
async function createSessionToken(env: Env, email: string): Promise<string> {
  const normalized = email.trim().toLowerCase();
  const exp = Date.now() + SESSION_MAX_AGE_SEC * 1000;
  const payload = `${normalized}|${exp}`;
  const sig = await hmacHex(env.ADMIN_SESSION_SECRET!, payload);
  return base64UrlEncode(`${payload}|${sig}`);
}

async function verifySessionToken(env: Env, token: string): Promise<string | null> {
  const secret = env.ADMIN_SESSION_SECRET;
  if (!secret) return null;
  try {
    const decoded = base64UrlDecode(token);
    const lastPipe = decoded.lastIndexOf("|");
    const secondLast = decoded.lastIndexOf("|", lastPipe - 1);
    if (secondLast < 0) return null;
    const email = decoded.slice(0, secondLast);
    const exp = Number(decoded.slice(secondLast + 1, lastPipe));
    const sig = decoded.slice(lastPipe + 1);
    if (!email || !Number.isFinite(exp) || !sig) return null;
    if (Date.now() > exp) return null;
    if (!isAdminEmail(env, email)) return null;
    const expected = await hmacHex(secret, `${email}|${exp}`);
    return safeEqual(sig, expected) ? email : null;
  } catch {
    return null;
  }
}

function readCookie(request: Request, name: string): string | undefined {
  const header = request.headers.get("cookie");
  if (!header) return undefined;
  for (const part of header.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return decodeURIComponent(v.join("="));
  }
  return undefined;
}

function sessionCookie(value: string, maxAge: number, secure: boolean): string {
  return [
    `${ADMIN_COOKIE}=${value}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${maxAge}`,
    secure ? "Secure" : "",
  ]
    .filter(Boolean)
    .join("; ");
}

async function getSession(request: Request, env: Env): Promise<string | null> {
  const token = readCookie(request, ADMIN_COOKIE);
  return token ? verifySessionToken(env, token) : null;
}

async function handleLogin(request: Request, env: Env, secure: boolean): Promise<Response> {
  if (!env.ADMIN_PASSWORD || !env.ADMIN_SESSION_SECRET) {
    return json({ error: "Admin belum dikonfigurasi di server." }, 503);
  }
  let body: { email?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return json({ error: "Payload tidak valid." }, 400);
  }
  const email = body.email?.trim() ?? "";
  const password = body.password ?? "";
  if (!email || !password) return json({ error: "Email dan password wajib diisi." }, 400);
  if (!isAdminEmail(env, email) || !safeEqual(password, env.ADMIN_PASSWORD)) {
    return json({ error: "Email atau password salah." }, 401);
  }
  const token = await createSessionToken(env, email);
  return json({ ok: true }, 200, { "set-cookie": sessionCookie(token, SESSION_MAX_AGE_SEC, secure) });
}

async function handleNewsletter(request: Request, env: Env): Promise<Response> {
  let email: unknown;
  try {
    ({ email } = (await request.json()) as { email?: unknown });
  } catch {
    return json({ error: "Email tidak valid" }, 400);
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Email tidak valid" }, 400);
  }
  if (env.RESEND_API_KEY && env.RESEND_AUDIENCE_ID) {
    const res = await fetch(`https://api.resend.com/audiences/${env.RESEND_AUDIENCE_ID}/contacts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ email, unsubscribed: false }),
    });
    if (!res.ok) return json({ error: "Gagal mendaftar" }, 500);
    return json({ ok: true, mode: "resend" });
  }
  // Mode demo tanpa API key (sama seperti versi Next.js sebelumnya)
  return json({ ok: true, mode: "demo", message: "Langganan tercatat (mode demo lokal)" });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";
    const secure = url.protocol === "https:";

    if (path.startsWith("/api/")) {
      if (path === "/api/admin/login" && request.method === "POST") return handleLogin(request, env, secure);
      if (path === "/api/admin/logout" && request.method === "POST") {
        return json({ ok: true }, 200, { "set-cookie": sessionCookie("", 0, secure) });
      }
      if (path === "/api/admin/session" && request.method === "GET") {
        const email = await getSession(request, env);
        return email ? json({ email }) : json({ error: "Unauthorized" }, 401);
      }
      if (path === "/api/newsletter" && request.method === "POST") return handleNewsletter(request, env);
      return json({ error: "Not found" }, 404);
    }

    // Session gate in front of the static admin pages.
    if (path === "/admin") {
      if (!(await getSession(request, env))) return Response.redirect(new URL("/admin/login", url).toString(), 302);
    } else if (path === "/admin/login") {
      if (await getSession(request, env)) return Response.redirect(new URL("/admin", url).toString(), 302);
    }

    return env.ASSETS.fetch(request);
  },
};
