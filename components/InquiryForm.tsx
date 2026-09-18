"use client";

import { useRef, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      social: (form.elements.namedItem("social") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="grid inquiry" style={{ paddingTop: "var(--s-7)", rowGap: "var(--s-6)" }}>
        <p className="t-close" style={{ gridColumn: "1/5" }}>
          For commissions, collaborations and interesting ideas, get in touch.
        </p>
        <p className="t-body" style={{ gridColumn: "6/13" }}>
          Thank you — your note is on its way. I&rsquo;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid inquiry"
      ref={formRef}
      onSubmit={onSubmit}
      style={{ paddingTop: "var(--s-7)", rowGap: "var(--s-6)" }}
    >
      <p className="t-close" style={{ gridColumn: "1/5" }}>
        For commissions, collaborations and interesting ideas, get in touch.
      </p>
      <div
        style={{
          gridColumn: "6/13",
          display: "grid",
          gridTemplateColumns: "repeat(6,1fr)",
          gap: "var(--s-5) var(--gutter)",
        }}
      >
        <div className="field" style={{ gridColumn: "1/4" }}>
          <label className="t-micro muted">name</label>
          <input name="name" required />
        </div>
        <div className="field" style={{ gridColumn: "4/7" }}>
          <label className="t-micro muted">email</label>
          <input name="email" type="email" required />
        </div>
        <div className="field" style={{ gridColumn: "1/4" }}>
          <label className="t-micro muted">social link / instagram</label>
          <input name="social" />
        </div>
        <div className="field" style={{ gridColumn: "1/7" }}>
          <label className="t-micro muted">tell me a little about what you&rsquo;re building</label>
          <textarea name="message" rows={2} />
        </div>
        <div style={{ gridColumn: "1/7" }}>
          <button className="send t-small" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "sending…" : "send"}
          </button>
          {status === "error" && (
            <p className="t-micro muted" style={{ marginTop: "var(--s-3)" }}>
              Something went wrong — please try again, or email{" "}
              <a href="mailto:ingazecreative@gmail.com">ingazecreative@gmail.com</a> directly.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
