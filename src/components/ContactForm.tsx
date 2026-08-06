"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";

type State = "idle" | "sending" | "sent" | "error";

const labelClass = "block text-sm font-bold text-ink";
const fieldClass =
  "mt-2 w-full rounded-md border border-ink/15 bg-white px-3.5 py-2.5 text-base text-body outline-none transition placeholder:text-muted/70 focus:border-red focus:ring-2 focus:ring-red/15";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setError("");

    const data = new FormData(event.currentTarget);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      message: data.get("message"),
      website: data.get("website"), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(result.error || "Something went wrong. Please try again.");
        setState("error");
        return;
      }
      setState("sent");
    } catch {
      setError("Could not reach the server. Please try again.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-lg border border-sage/30 bg-white px-6 py-12 text-center shadow-sm">
        <span className="inline-flex rounded-full bg-sage/15 p-3 text-sage">
          <Check size={26} />
        </span>
        <p className="mt-5 font-serif text-3xl font-bold text-ink">Message sent</p>
        <p className="mt-3 text-base leading-7 text-body/80">
          Thank you for writing to us. Pastor Parker will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone{" "}
            <span className="font-semibold text-muted">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="How can we help you? Ask a question, request prayer, or tell us you plan to visit."
            className={fieldClass}
          />
        </div>
      </div>

      {/* honeypot — hidden from people, catches bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {state === "error" ? (
        <p className="mt-5 rounded-md bg-red/8 px-4 py-3 text-sm font-semibold text-red-deep">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-red px-6 py-3 text-base font-bold text-white transition hover:bg-red-deep disabled:opacity-60"
      >
        <Send size={18} />
        {state === "sending" ? "Sending…" : "Send Message"}
      </button>

      <p className="mt-4 text-sm text-muted">
        We never share your information. Prefer to talk? Call or text{" "}
        <a href="tel:+15127575017" className="font-semibold text-red-deep underline">
          (512) 757-5017
        </a>
        .
      </p>
    </form>
  );
}
