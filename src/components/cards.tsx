"use client";

import Link from "next/link";
import { cardHover, fadeUp, motion } from "@/components/site-motion";
import { ProductMiniVisual } from "@/components/visuals";

export function ProductCard({
  product,
}: {
  product: {
    title: string;
    code: string;
    description: string;
    useCases: string[];
  };
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={cardHover}
      className="group rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-[#2E3092]/30 hover:shadow-2xl hover:shadow-[#2E3092]/10"
    >
      <ProductMiniVisual code={product.code} label="Product system" />
      <div className="p-2 pt-5">
        <h3 className="text-xl font-semibold text-slate-950">{product.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          {product.useCases.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2E3092]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="mt-5 inline-flex text-sm font-bold text-[#2E3092] hover:text-[#242673]"
        >
          Request quote
        </Link>
      </div>
    </motion.article>
  );
}

export function ServiceCard({
  group,
}: {
  group: {
    title: string;
    code: string;
    description: string;
    items: string[];
  };
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={cardHover}
      className="rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fbff)] p-6 shadow-sm transition hover:border-[#2E3092]/30 hover:shadow-xl hover:shadow-slate-200/80"
    >
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF3FF] text-sm font-black text-[#2E3092]">
        {group.code}
      </div>
      <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{group.description}</p>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
        {group.items.map((item) => (
          <li key={item} className="border-b border-slate-100 pb-2 last:border-0">
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function ContactCTA() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] bg-[#0B1739] p-6 text-white shadow-2xl shadow-[#0B1739]/20 md:flex-row md:items-center md:justify-between lg:p-10">
        <div>
          <p className="text-sm font-semibold text-blue-100">Request Quote</p>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Share your print requirement and receive direct guidance.
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#2E3092] shadow-lg shadow-black/10 md:w-auto"
        >
          Contact Awan Printing Point
        </Link>
      </div>
    </section>
  );
}
