// Kit (formerly ConvertKit) — legacy v3 API — https://developers.kit.com/v3
//
// The API key Laura's account has is a legacy-format key (works against
// api.convertkit.com/v3, not the newer api.kit.com/v4 which expects a
// different key format), so this uses the simpler v3 subscribe-to-form
// endpoint: one request, no separate "attach to form" step.
//
// Requires KIT_API_KEY (Kit → Settings → Developer) and KIT_FORM_ID (the
// numeric id of the form site visitors join — "ingaze creative website",
// id 9931864).

const KIT_API_BASE = "https://api.convertkit.com/v3";

export async function subscribeToKit(email: string, firstName?: string): Promise<void> {
  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;
  if (!apiKey || !formId) {
    throw new Error("KIT_API_KEY / KIT_FORM_ID not configured");
  }

  const res = await fetch(`${KIT_API_BASE}/forms/${formId}/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: apiKey,
      email,
      ...(firstName ? { first_name: firstName } : {}),
    }),
  });

  if (!res.ok) {
    throw new Error(`Kit subscribe failed: ${res.status} ${await res.text()}`);
  }
}
