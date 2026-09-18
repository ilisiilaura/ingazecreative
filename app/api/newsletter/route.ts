import { NextRequest, NextResponse } from "next/server";
import { subscribeToKit } from "@/lib/kit";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!email) {
    return NextResponse.json({ error: "email is required" }, { status: 400 });
  }

  try {
    await subscribeToKit(email);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("newsletter Kit subscribe failed:", err);
    return NextResponse.json({ error: "Could not subscribe. Please try again." }, { status: 502 });
  }
}
