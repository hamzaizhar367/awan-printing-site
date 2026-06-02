"use client";

import { ContactCTA, ServiceCard } from "@/components/cards";
import { SectionHeader } from "@/components/section-header";
import { motion, staggerContainer } from "@/components/site-motion";
import { serviceGroups } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="bg-[#F6F8FC] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-[#2E3092]">Services</p>
          <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Printing, labeling and packaging services organized for B2B sourcing
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Explore commercial print, label, packaging support, stickers,
            barcode identification and promotional print categories.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Service Groups"
            title="Production services with buyer-friendly grouping."
            body="Each group is presented with accurate service names and practical sourcing context."
          />
          <motion.div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {serviceGroups.map((group) => (
              <ServiceCard key={group.title} group={group} />
            ))}
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
