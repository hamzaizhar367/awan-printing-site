"use client";

import { useState } from "react";

type ContactFormProps = {
  businessName: string;
};

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm({ businessName }: ContactFormProps) {
  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateField =
    (field: keyof typeof initialFormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitted(true);
    setLoading(false);
    setFormData(initialFormState);
  };

  if (submitted) {
    return (
      <div className="soft-card animate-rise rounded-[2rem] p-8 text-center sm:p-10">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand)] text-lg font-semibold text-white">
          OK
        </div>
        <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
          Thanks, we received your message.
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
          {businessName} will follow up within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-[var(--card-border)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] hover:-translate-y-0.5 hover:border-[var(--brand)] hover:text-[var(--brand)]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="soft-card rounded-[2rem] p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[var(--foreground)]">
          Full name
          <input
            type="text"
            required
            placeholder="Your name"
            value={formData.name}
            onChange={updateField("name")}
            className="mt-2 w-full rounded-2xl border border-[var(--card-border)] bg-white/80 px-4 py-3.5 text-sm text-[var(--foreground)] outline-none placeholder:text-[color:rgba(86,100,92,0.8)] focus:border-[var(--brand)] focus:ring-4 focus:ring-[color:rgba(22,84,58,0.12)]"
          />
        </label>

        <label className="block text-sm font-medium text-[var(--foreground)]">
          Email address
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={formData.email}
            onChange={updateField("email")}
            className="mt-2 w-full rounded-2xl border border-[var(--card-border)] bg-white/80 px-4 py-3.5 text-sm text-[var(--foreground)] outline-none placeholder:text-[color:rgba(86,100,92,0.8)] focus:border-[var(--brand)] focus:ring-4 focus:ring-[color:rgba(22,84,58,0.12)]"
          />
        </label>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-[1.1fr_0.9fr]">
        <label className="block text-sm font-medium text-[var(--foreground)]">
          Phone number
          <input
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={updateField("phone")}
            className="mt-2 w-full rounded-2xl border border-[var(--card-border)] bg-white/80 px-4 py-3.5 text-sm text-[var(--foreground)] outline-none placeholder:text-[color:rgba(86,100,92,0.8)] focus:border-[var(--brand)] focus:ring-4 focus:ring-[color:rgba(22,84,58,0.12)]"
          />
        </label>

        <div className="rounded-[1.5rem] border border-dashed border-[color:rgba(22,84,58,0.2)] bg-[color:rgba(22,84,58,0.04)] px-4 py-4 text-sm leading-6 text-[var(--muted)]">
          Share timings, budget, or the main issue you need solved and we can respond faster.
        </div>
      </div>

      <label className="mt-5 block text-sm font-medium text-[var(--foreground)]">
        Project details
        <textarea
          required
          rows={6}
          placeholder="Tell us what you need, where the work is based, and your preferred timeline."
          value={formData.message}
          onChange={updateField("message")}
          className="mt-2 w-full resize-none rounded-[1.5rem] border border-[var(--card-border)] bg-white/80 px-4 py-3.5 text-sm text-[var(--foreground)] outline-none placeholder:text-[color:rgba(86,100,92,0.8)] focus:border-[var(--brand)] focus:ring-4 focus:ring-[color:rgba(22,84,58,0.12)]"
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-[var(--muted)]">
          No spam, no pressure, and no hidden callout surprises.
        </p>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex min-w-44 items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(22,84,58,0.24)] hover:-translate-y-0.5 hover:bg-[var(--brand-strong)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Sending..." : "Request a callback"}
        </button>
      </div>
    </form>
  );
}
