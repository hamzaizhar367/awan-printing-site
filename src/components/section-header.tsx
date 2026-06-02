"use client";

import { fadeUp, motion } from "@/components/site-motion";

export function SectionHeader({
  eyebrow,
  title,
  body,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  inverted?: boolean;
}) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      <p
        className={`text-sm font-semibold ${
          inverted ? "text-blue-100" : "text-[#2E3092]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          inverted ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-5 text-base leading-8 ${
            inverted ? "text-blue-50/80" : "text-slate-600"
          }`}
        >
          {body}
        </p>
      ) : null}
    </motion.div>
  );
}
