import { NextResponse } from "next/server";

// Temporary diagnostic route — reports only whether each env var is present
// and its length, never the actual secret value. Deleted once the
// Kit/Resend env var issue is resolved.
export async function GET() {
  const vars = ["KIT_API_KEY", "KIT_FORM_ID", "RESEND_API_KEY", "INQUIRY_TO_EMAIL", "INQUIRY_FROM_EMAIL"];
  const report: Record<string, { present: boolean; length: number }> = {};
  for (const v of vars) {
    const val = process.env[v];
    report[v] = { present: !!val, length: val?.length ?? 0 };
  }
  return NextResponse.json(report);
}
