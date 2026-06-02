"use client";

import { ContactCTA, ProductCard } from "@/components/cards";
import { SectionHeader } from "@/components/section-header";
import { motion, staggerContainer } from "@/components/site-motion";
import { productCategories } from "@/lib/site-data";

export default function ProductsPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="bg-[#F6F8FC] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-[#2E3092]">Products & Solutions</p>
          <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Product categories for labels, packaging, commercial print and identification
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Premium abstract visuals are used until approved product photography
            is available. No external stock images are used.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Product Categories"
            title="Choose the product area that matches your requirement."
          />
          <motion.div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {productCategories.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
