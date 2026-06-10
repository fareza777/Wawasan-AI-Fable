import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email tidak valid" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (apiKey && audienceId) {
    const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Gagal mendaftar" }, { status: 500 });
    }
    return NextResponse.json({ ok: true, mode: "resend" });
  }

  // Mode lokal/demo tanpa API key
  return NextResponse.json({ ok: true, mode: "demo", message: "Langganan tercatat (mode demo lokal)" });
}
