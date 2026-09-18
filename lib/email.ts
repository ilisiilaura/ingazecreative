import { Resend } from "resend";

// Sends Laura a direct notification for every inquiry-form submission.
// Requires RESEND_API_KEY (resend.com) and INQUIRY_TO_EMAIL (defaults to
// theingaze@gmail.com). The "from" address must be on a domain verified in
// the Resend dashboard — falls back to Resend's shared onboarding sender
// until ingazecreative.com (or similar) is verified there.
export async function sendInquiryEmail(fields: {
  name: string;
  email: string;
  social?: string;
  message: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY not configured");

  const to = process.env.INQUIRY_TO_EMAIL || "theingaze@gmail.com";
  const from = process.env.INQUIRY_FROM_EMAIL || "ingaze <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: fields.email,
    subject: `New inquiry from ${fields.name}`,
    text: [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      fields.social ? `Social: ${fields.social}` : null,
      "",
      fields.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) throw new Error(`Resend send failed: ${error.message}`);
}
