import { NextRequest, NextResponse } from "next/server";
import { subscribeToKit } from "@/lib/kit";
import { sendInquiryEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const social = typeof body?.social === "string" ? body.social.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "name, email and message are required" }, { status: 400 });
  }

  // Every submission both emails Laura directly and adds the person to Kit.
  // The two are independent: if one integration is down or unconfigured,
  // the other still gets through, and the caller only sees an error if both
  // failed.
  const results = await Promise.allSettled([
    sendInquiryEmail({ name, email, social, message }),
    subscribeToKit(email, name),
  ]);

  const [emailResult, kitResult] = results;
  if (emailResult.status === "rejected") console.error("inquiry email failed:", emailResult.reason);
  if (kitResult.status === "rejected") console.error("inquiry Kit subscribe failed:", kitResult.reason);

  if (emailResult.status === "rejected" && kitResult.status === "rejected") {
    return NextResponse.json({ error: "Could not send your message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
