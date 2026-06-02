"use client";

import { useState } from "react";

type ContactFormProps = {
  businessName: string;
};

const initialFormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  quantity: "",
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
    // TODO: Connect this form to the production quote backend or email workflow.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitted(true);
    setLoading(false);
    setFormData(initialFormState);
  };

  if (submitted) {
    return (
      <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-200/80 sm:p-10">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2E3092] text-sm font-bold text-white shadow-lg shadow-[#2E3092]/20">
          OK
        </div>
        <h3 className="text-2xl font-semibold text-slate-950">
          {businessName} quote request received.
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          Thank you. Please contact us directly by phone or email while online
          inquiry handling is being connected.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-[#2E3092] hover:text-[#2E3092]"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput
          label="Full name"
          type="text"
          required
          placeholder="Your name"
          value={formData.name}
          onChange={updateField("name")}
        />
        <TextInput
          label="Company name"
          type="text"
          required
          placeholder="Company or institution"
          value={formData.company}
          onChange={updateField("company")}
        />
        <TextInput
          label="Phone"
          type="tel"
          required
          placeholder="+92 300 0000000"
          value={formData.phone}
          onChange={updateField("phone")}
        />
        <TextInput
          label="Email"
          type="email"
          required
          placeholder="you@company.com"
          value={formData.email}
          onChange={updateField("email")}
        />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-900">
          Service required
          <select
            required
            value={formData.service}
            onChange={(event) =>
              setFormData((current) => ({ ...current, service: event.target.value }))
            }
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition hover:border-slate-400 focus:border-[#2E3092] focus:ring-4 focus:ring-[#2E3092]/10"
          >
            <option value="">Select service</option>
            <option>Labels and stickers</option>
            <option>Hang tags and textile labels</option>
            <option>Poly bag or zipper bag printing</option>
            <option>Brochures or catalogues</option>
            <option>Barcode, UPC or QR labels</option>
            <option>Corporate stationery</option>
            <option>Other printing requirement</option>
          </select>
        </label>
        <TextInput
          label="Quantity / project size"
          type="text"
          required
          placeholder="Example: 10,000 labels"
          value={formData.quantity}
          onChange={updateField("quantity")}
        />
      </div>

      <label className="mt-5 block text-sm font-semibold text-slate-900">
        Message
        <textarea
          required
          rows={6}
          placeholder="Share size, material, quantity, deadline and any finishing requirements."
          value={formData.message}
          onChange={updateField("message")}
          className="mt-2 w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-[#2E3092] focus:ring-4 focus:ring-[#2E3092]/10"
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-500">
          Frontend only for now. Backend submission can be connected next.
        </p>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex min-w-44 items-center justify-center rounded-full bg-[#2E3092] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#2E3092]/20 transition hover:-translate-y-0.5 hover:bg-[#242673] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Sending..." : "Submit Quote Request"}
        </button>
      </div>
    </form>
  );
}

function TextInput({
  label,
  type,
  required,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  type: string;
  required?: boolean;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="block text-sm font-semibold text-slate-900">
      {label}
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-[#2E3092] focus:ring-4 focus:ring-[#2E3092]/10"
      />
    </label>
  );
}
