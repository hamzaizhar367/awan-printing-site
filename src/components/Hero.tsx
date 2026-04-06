"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

const trustFacts = [
  { label: "Established", value: "2000" },
  { label: "Global Brands", value: "40+" },
  { label: "Based In", value: "Faisalabad" },
  { label: "Certifications", value: "ISO · FSC™ · OEKO" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0a] px-6 pt-20 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-20 bg-[#0a0a0a]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.02),transparent_22%,transparent_78%,rgba(255,255,255,0.02))]" />

      <div className="mx-auto flex w-full max-w-7xl items-center">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)]">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative flex h-full max-w-2xl flex-col justify-center pb-20 pl-10"
          >
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                userSelect: "none",
                zIndex: 0,
                fontSize: "280px",
                fontWeight: 900,
                color: "rgba(255,255,255,0.04)",
              }}
            >
              AWAN
            </div>

            <motion.h1
              variants={item}
              className="relative z-10 max-w-xl text-[clamp(3rem,5.6vw,5.25rem)] font-black leading-[0.96] tracking-[-0.06em] text-white"
            >
              Precision print for brands that value quality.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-[1.02rem] leading-8 text-white/62"
            >
              We deliver packaging, labels, tags, and commercial print with the
              consistency, finish, and operational reliability trusted by global
              brands.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "#ffffff",
                  color: "#000000",
                  fontWeight: 700,
                  fontSize: 13,
                  padding: "8px 20px",
                  borderRadius: 8,
                  textDecoration: "none",
                }}
              >
                Start a Project →
              </a>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 text-[11px] tracking-[0.08em] text-[rgba(255,255,255,0.3)] opacity-40"
            >
              ISO 9001:2015 · FSC™ Certified · OEKO TEX-100
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto w-full max-w-[460px]"
          >
            <div className="grid grid-cols-2 gap-4">
              {trustFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-l-[2px] border-l-[rgba(255,255,255,0.15)] pl-5"
                >
                  <p className="text-[11px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.4)]">
                    {fact.label}
                  </p>
                  <p className="mt-3 text-[28px] font-bold leading-tight text-white">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
