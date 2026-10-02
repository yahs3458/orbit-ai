"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "done";

export default function Waitlist({ id }: { id: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // ponytail: demo only — POST the email to your list (Resend / ConvertKit / n8n webhook) here
    setTimeout(() => setStatus("done"), 700);
  }

  if (status === "done") {
    return (
      <div role="status" className="rise flex max-w-md items-start gap-3 border border-accent/40 bg-accent-dim px-5 py-4">
        <span className="pulse mt-1.5 size-2 shrink-0 rounded-full bg-accent" aria-hidden />
        <p>
          <span className="font-medium">You&rsquo;re on the list.</span>{" "}
          <span className="text-muted">
            We&rsquo;ll email <span className="text-ink">{email}</span> when your wave opens.
          </span>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <label htmlFor={id} className="sr-only">
        Work email
      </label>
      <input
        id={id}
        type="email"
        required
        autoComplete="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-w-0 flex-1 rounded-full border border-rule bg-paper-2 px-5 py-3.5 text-ink placeholder:text-muted/70 transition-colors duration-200 focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-accent px-6 py-3.5 font-medium whitespace-nowrap text-paper transition-[transform,opacity] duration-200 hover:-translate-y-px active:translate-y-0 disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Joining…" : "Join the waitlist"}
      </button>
    </form>
  );
}
