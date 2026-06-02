"use client";

import { ContactCTA } from "@/components/cards";
import { SectionHeader } from "@/components/section-header";
import { cardHover, fadeUp, motion, staggerContainer } from "@/components/site-motion";
import { machines } from "@/lib/site-data";

export default function CapabilitiesPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="bg-[#F6F8FC] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-[#2E3092]">Production Capability</p>
          <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Machinery and production capability for varied print requirements
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Abstract machine frames are used until real approved facility and
            machinery photos are added.
          </p>
        </div>
      </section>

      <section className="bg-[#FBFCFF] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Production Floor"
            title="Offset, cutting, label, flexo and barcode capability."
          />
          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {machines.map((machine) => (
              <motion.article
                key={machine.name}
                variants={fadeUp}
                whileHover={cardHover}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-[#2E3092]/30 hover:shadow-xl hover:shadow-[#2E3092]/10"
              >
                {/* Insert approved real machine photo here when available. */}
                <div className="relative h-36 overflow-hidden rounded-2xl border border-slate-200 bg-[#0B1739]">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.13)_0,rgba(255,255,255,0.13)_1px,transparent_1px,transparent_16px),radial-gradient(circle_at_25%_20%,rgba(120,145,255,0.35),transparent_30%)]" />
                  <div className="absolute bottom-5 left-4 right-4 h-12 rounded-xl bg-white/12" />
                  <div className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white">
                    {machine.type}
                  </div>
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-950">{machine.name}</h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#2E3092]">
                  {machine.type}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
