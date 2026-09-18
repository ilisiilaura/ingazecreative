// Kit (formerly ConvertKit) v4 API — https://developers.kit.com/v4
//
// Subscribing someone is a two-step upsert: create/update the subscriber by
// email, then attach that subscriber to a specific form. Requires two env
// vars: KIT_API_KEY (Account → Settings → Developer in Kit) and
// KIT_FORM_ID (the numeric id of the form/landing page site visitors join).

const KIT_API_BASE = "https://api.kit.com/v4";

export async function subscribeToKit(email: string, firstName?: string): Promise<void> {
  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;
  if (!apiKey || !formId) {
    throw new Error("KIT_API_KEY / KIT_FORM_ID not configured");
  }

  const createRes = await fetch(`${KIT_API_BASE}/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": apiKey,
    },
    body: JSON.stringify({
      email_address: email,
      ...(firstName ? { first_name: firstName } : {}),
      state: "active",
    }),
  });

  if (!createRes.ok) {
    throw new Error(`Kit subscriber create failed: ${createRes.status} ${await createRes.text()}`);
  }

  const { subscriber } = (await createRes.json()) as { subscriber: { id: number } };

  const attachRes = await fetch(`${KIT_API_BASE}/forms/${formId}/subscribers/${subscriber.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": apiKey,
    },
  });

  if (!attachRes.ok) {
    throw new Error(`Kit form attach failed: ${attachRes.status} ${await attachRes.text()}`);
  }
}
