"use client";

import { motion } from "@/components/site-motion";

export function ProductMiniVisual({ code, label }: { code: string; label: string }) {
  const showRoll = code === "LS" || code === "QR";
  const showTags = code === "HT" || code === "KC";
  const showBox = code === "PB" || code === "KC";
  const showSheets = code === "BC" || code === "CS" || code === "MP";

  return (
    <div className="relative h-44 overflow-hidden rounded-2xl border border-slate-200 bg-[linear-gradient(135deg,#ffffff,#eef3ff)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(46,48,146,0.16),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.05)_0,rgba(15,23,42,0.05)_1px,transparent_1px,transparent_18px)]" />

      {showRoll ? (
        <div className="absolute left-5 top-8 h-24 w-24 rounded-full border-[14px] border-[#2E3092] bg-white shadow-xl shadow-[#2E3092]/15">
          <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100" />
          <div className="absolute left-[72px] top-8 h-8 w-28 rounded-r-full border border-[#2E3092]/20 bg-white shadow-sm" />
          <div className="absolute left-[88px] top-11 flex gap-1">
            {Array.from({ length: 7 }).map((_, index) => (
              <span key={index} className="h-2 w-1 bg-slate-700" />
            ))}
          </div>
        </div>
      ) : null}

      {showTags ? (
        <div className="absolute left-6 top-8 flex -rotate-6 gap-3">
          {[0, 1].map((item) => (
            <div key={item} className="h-24 w-16 rounded-b-2xl rounded-t-md border border-slate-200 bg-white shadow-lg">
              <div className="mx-auto mt-3 h-3 w-3 rounded-full border border-[#2E3092]/40" />
              <div className="mx-3 mt-4 h-2 rounded-full bg-[#2E3092]/20" />
              <div className="mx-3 mt-2 h-2 rounded-full bg-slate-200" />
            </div>
          ))}
        </div>
      ) : null}

      {showBox ? (
        <div className="absolute right-5 top-10 h-24 w-28 rounded-xl border border-[#2E3092]/20 bg-white shadow-xl">
          <div className="h-8 rounded-t-xl bg-[#2E3092]/10" />
          <div className="mx-4 mt-4 h-3 rounded-full bg-[#2E3092]/25" />
          <div className="mx-4 mt-2 h-3 rounded-full bg-slate-200" />
          <div className="absolute -left-4 top-7 h-16 w-10 skew-y-6 rounded-l-xl bg-slate-200/80" />
        </div>
      ) : null}

      {showSheets ? (
        <div className="absolute left-7 top-8 h-28 w-32">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="absolute h-24 w-28 rounded-xl border border-slate-200 bg-white shadow-lg"
              style={{ left: item * 12, top: item * 8 }}
            >
              <div className="mx-4 mt-4 h-2 rounded-full bg-[#2E3092]/30" />
              <div className="mx-4 mt-3 h-2 rounded-full bg-slate-200" />
              <div className="mx-4 mt-3 h-10 rounded-lg bg-slate-100" />
            </div>
          ))}
        </div>
      ) : null}

      <div className="absolute bottom-4 right-4 rounded-full border border-[#2E3092]/15 bg-white/90 px-3 py-1 text-[11px] font-bold text-[#2E3092] shadow-sm">
        {label}
      </div>
    </div>
  );
}

export function HeroVisual() {
  return (
    <motion.div
      className="relative min-h-[610px] sm:min-h-[460px] lg:min-h-[450px]"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
    >
      <motion.div
        className="absolute left-1 right-1 top-2 rounded-[2rem] border border-white/80 bg-white/92 p-4 shadow-2xl shadow-[#0B1739]/15 backdrop-blur sm:left-5 sm:right-5 lg:top-0"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#0B1739] p-4 text-white sm:p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(120,145,255,0.28),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_20px)]" />
          <div className="relative flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-white">Printing & packaging floor</p>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
              B2B production
            </span>
          </div>

          <div className="relative mt-5 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_0.86fr] sm:gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 sm:p-4">
              <div className="relative h-28 overflow-hidden rounded-xl bg-white sm:h-32">
                <div className="absolute left-4 top-5 h-20 w-20 rounded-full border-[12px] border-[#2E3092]" />
                <div className="absolute left-20 top-12 h-9 w-28 rounded-r-full border border-slate-200 bg-white shadow-sm sm:w-36" />
                <div className="absolute left-28 top-16 flex gap-1">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <span key={index} className="h-3 w-1 bg-slate-800" />
                  ))}
                </div>
                <div className="absolute right-3 top-4 grid h-12 w-12 grid-cols-3 gap-0.5 rounded-md bg-slate-100 p-1 sm:right-4">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <span
                      key={index}
                      className={index % 2 === 0 ? "bg-slate-800" : "bg-white"}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm font-semibold">Label roll, barcode & QR stickers</p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 sm:p-4">
                <div className="flex gap-2">
                  {[0, 1, 2].map((item) => (
                    <div key={item} className="h-16 flex-1 rounded-xl bg-white shadow-sm sm:h-20">
                      <div className="mx-3 mt-3 h-2 rounded-full bg-[#2E3092]/30" />
                      <div className="mx-3 mt-2 h-2 rounded-full bg-slate-200" />
                      <div className="mx-3 mt-2 h-5 rounded-md bg-slate-100" />
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-sm font-semibold">Printed sheets</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 sm:p-4">
                <div className="flex items-end gap-3">
                  <div className="relative h-16 w-20 rounded-xl bg-white shadow-sm">
                    <div className="h-5 rounded-t-xl bg-[#2E3092]/15" />
                    <div className="mx-3 mt-3 h-2 rounded-full bg-slate-200" />
                  </div>
                  <div className="h-20 w-14 rotate-3 rounded-b-xl rounded-t-md bg-white shadow-sm">
                    <div className="mx-auto mt-2 h-3 w-3 rounded-full border border-[#2E3092]/40" />
                    <div className="mx-3 mt-4 h-2 rounded-full bg-[#2E3092]/25" />
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold">Boxes & hang tags</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
          {[
            ["Labels & Tags", "Roll / Cut"],
            ["B2B Packaging", "Custom"],
            ["Certified", "FSC ISO OEKO"],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
              <p className="text-sm font-semibold text-slate-950">{title}</p>
              <p className="mt-1 text-xs text-slate-500">{body}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-9 left-0 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10 sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
      >
        <p className="text-sm font-semibold text-slate-950">Print registration</p>
        <div className="mt-3 flex gap-2">
          {["C", "M", "Y", "K"].map((item, index) => (
            <span
              key={item}
              className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-black text-white"
              style={{ background: ["#2E3092", "#C026D3", "#EAB308", "#111827"][index] }}
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-3 right-3 rounded-2xl bg-[#2E3092] p-4 text-white shadow-xl shadow-[#2E3092]/25 sm:bottom-0 sm:right-4 sm:p-5"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <p className="text-3xl font-black">2000</p>
        <p className="text-xs font-semibold text-blue-100">Established</p>
      </motion.div>
    </motion.div>
  );
}
