"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="signup" onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        placeholder={status === "sent" ? "you're on the list" : "email"}
        aria-label="email"
        required
        disabled={status === "sending" || status === "sent"}
      />
      <button className="send t-small" type="submit" disabled={status === "sending" || status === "sent"}>
        {status === "sent" ? "joined" : status === "sending" ? "joining…" : "join"}
      </button>
    </form>
  );
}
