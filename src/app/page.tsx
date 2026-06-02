"use client";

import Link from "next/link";
import {
  certifications,
  industries,
  productCategories,
  serviceGroups,
  stats,
  trustBadges,
  whyAwan,
} from "@/lib/site-data";
import { ContactCTA, ProductCard, ServiceCard } from "@/components/cards";
import { SectionHeader } from "@/components/section-header";
import {
  cardHover,
  fadeUp,
  MotionSection,
  motion,
  staggerContainer,
} from "@/components/site-motion";
import { HeroVisual } from "@/components/visuals";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="relative overflow-hidden bg-[#F6F8FC]">
        <div className="absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[#2E3092]/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#B8C6FF]/40 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(46,48,146,0.035)_1px,transparent_1px),linear-gradient(180deg,rgba(46,48,146,0.03)_1px,transparent_1px)] bg-[size:34px_34px] opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:pb-16 lg:pt-14">
          <motion.div
            className="flex flex-col justify-center"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={fadeUp}
              className="w-fit rounded-full border border-[#2E3092]/15 bg-white px-4 py-2 text-sm font-semibold text-[#2E3092] shadow-sm"
            >
              Faisalabad printing & packaging since 2000
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-5 max-w-4xl text-[2.35rem] font-semibold leading-[1.04] tracking-tight text-slate-950 sm:text-[2.75rem] lg:text-[2.95rem] lg:leading-[1.04]"
            >
              Premium Printing & Packaging Solutions for Brands, Exporters &
              Institutions
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-[1.05rem]"
            >
              Awan Printing Point delivers professional printing, labeling, and
              packaging solutions from Faisalabad, supporting businesses with
              reliable quality, industrial capability, and certified production
              standards since 2000.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-[#2E3092] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#2E3092]/20 transition hover:-translate-y-0.5 hover:bg-[#242673]"
              >
                Request a Quote
              </Link>
              <Link
                href="/products"
                className="inline-flex justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2E3092]/40 hover:text-[#2E3092]"
              >
                View Products
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-3">
              {/* Place the approved PDF at public/downloads/awan-printing-point-profile.pdf, then convert this into a file link. */}
              <span className="text-sm font-semibold text-[#2E3092]">
                Download Company Profile
              </span>
              <span className="ml-2 text-sm text-slate-500">coming soon</span>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2.5">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#2E3092]/15 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <HeroVisual />
        </div>
      </section>

      <MotionSection className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-10">
          <div>
            <p className="text-sm font-semibold text-[#2E3092]">About</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A professional printing and packaging supplier for serious buyers.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Based in Faisalabad, Awan Printing Point works with businesses,
              exporters, institutions and procurement teams that need dependable
              print production across labels, tags, packaging inserts,
              stationery and commercial materials.
            </p>
          </div>
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {stats.map(([label, value]) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={cardHover}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-sm font-semibold text-slate-500">{label}</p>
                <p className="mt-3 text-2xl font-semibold text-slate-950">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#FBFCFF] px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Products"
            title="Product categories for fast B2B evaluation."
            body="Preview core product systems, then move into the full products page for use cases and quote paths."
          />
          <motion.div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {productCategories.slice(0, 4).map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex rounded-full bg-[#0B1739] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-[#14275B]"
            >
              View all products
            </Link>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Grouped services for practical sourcing."
            body="A clean overview of print, label, packaging and identification support."
          />
          <motion.div
            className="grid gap-5 lg:grid-cols-5"
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
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-[#0B1739] px-5 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(120,145,255,0.22),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why Awan Printing Point"
            title="Built for reliable business purchasing."
            body="Awan Printing Point supports repeat orders, custom production needs and practical B2B communication."
            inverted
          />
          <motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {whyAwan.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={cardHover}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-black/5 backdrop-blur"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-50/78">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#F6F8FC] px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              whileHover={cardHover}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-3xl font-black text-[#2E3092]">{cert.label}</p>
              <h3 className="mt-4 text-xl font-semibold">{cert.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{cert.body}</p>
            </motion.div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Industries"
            title="Supporting textile, retail, institutional and corporate buyers."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.slice(0, 6).map((industry) => (
              <div key={industry.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{industry.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{industry.body}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <ContactCTA />
    </main>
  );
}
