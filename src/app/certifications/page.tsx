"use client";

import { ContactCTA } from "@/components/cards";
import { SectionHeader } from "@/components/section-header";
import { cardHover, fadeUp, motion, staggerContainer } from "@/components/site-motion";
import { certifications } from "@/lib/site-data";

export default function CertificationsPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="bg-[#F6F8FC] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-[#2E3092]">Certifications</p>
          <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Certifications and standards for documented production confidence
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Certificate image placeholders are reserved for approved certificate
            scans only. No fake certificate imagery is used.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Standards"
            title="FSC, ISO 9001:2015 and OEKO-TEX Standard 100."
          />
          <motion.div
            className="grid gap-6 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
          >
            {certifications.map((cert) => (
              <motion.article
                key={cert.title}
                variants={fadeUp}
                whileHover={cardHover}
                className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#2E3092]/30 hover:shadow-xl hover:shadow-slate-200/80"
              >
                {/* Insert approved certificate image here when available. */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-[linear-gradient(135deg,#f8fafc,#eef3ff)]">
                  <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.75),transparent)] transition duration-700 group-hover:translate-x-full" />
                  <div className="rounded-2xl border border-[#2E3092]/20 bg-white px-7 py-5 text-center shadow-sm">
                    <p className="text-3xl font-black text-[#2E3092]">{cert.label}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                      Certificate image coming soon
                    </p>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{cert.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{cert.body}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
