"use client";

import { ContactCTA } from "@/components/cards";
import { SectionHeader } from "@/components/section-header";
import { cardHover, fadeUp, motion, staggerContainer } from "@/components/site-motion";
import { industries } from "@/lib/site-data";

export default function IndustriesPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="bg-[#F6F8FC] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-[#2E3092]">Industries Served</p>
          <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Printing and packaging support for B2B supply chains
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Awan Printing Point serves textile exporters, retail suppliers,
            institutions, procurement buyers and product-based companies.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Sectors"
            title="Organized support for different buyer types."
          />
          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                variants={fadeUp}
                whileHover={cardHover}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#2E3092]/25 hover:shadow-xl hover:shadow-slate-200/80"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF3FF] text-sm font-black text-[#2E3092]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-slate-950">{industry.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{industry.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
