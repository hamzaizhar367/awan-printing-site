"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "@/components/site-motion";
import { productCategories } from "@/lib/site-data";

const companyMenu = [
  {
    title: "About Us",
    href: "/about",
    description: "Company background, mission and business facts.",
  },
  {
    title: "Our Facility",
    href: "/capabilities",
    description: "Machinery and production capability overview.",
  },
  {
    title: "Our Process",
    href: "/services",
    description: "How services are grouped for sourcing and production.",
  },
  {
    title: "Certifications",
    href: "/certifications",
    description: "FSC, ISO 9001:2015 and OEKO-TEX Standard 100.",
  },
  {
    title: "Company Profile",
    href: "/contact",
    description: "Request the latest company profile from the team.",
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<"company" | "products" | null>(null);

  return (
    <header
      onMouseLeave={() => setDesktopMenu(null)}
      className="sticky top-0 z-50 border-b border-white/50 bg-white/82 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#2E3092]/10 bg-white shadow-lg shadow-[#2E3092]/10">
            <Image
              src="/awan-logo.png"
              alt="Awan Printing Point logo"
              width={58}
              height={58}
              priority
              className="h-14 w-14 object-contain"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-lg font-bold tracking-tight text-slate-950">
              Awan Printing Point
            </p>
            <p className="text-sm font-medium text-slate-500">Printing & packaging since 2000</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 xl:flex">
          <MegaTrigger
            label="Company"
            active={desktopMenu === "company"}
            onMouseEnter={() => setDesktopMenu("company")}
            onClick={() => setDesktopMenu(desktopMenu === "company" ? null : "company")}
          />
          <MegaTrigger
            label="Products"
            active={desktopMenu === "products"}
            onMouseEnter={() => setDesktopMenu("products")}
            onClick={() => setDesktopMenu(desktopMenu === "products" ? null : "products")}
          />
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/industries">Industries</NavLink>
          <NavLink href="/certifications">Certifications</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <Link
            href="/contact"
            className="ml-2 shrink-0 rounded-full bg-[#2E3092] px-6 py-3 text-sm font-bold text-white shadow-xl shadow-[#2E3092]/25 ring-1 ring-[#2E3092]/10 transition hover:-translate-y-0.5 hover:bg-[#242673]"
          >
            Request Quote
          </Link>
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex h-11 w-16 items-center justify-center rounded-full border border-slate-300 bg-white/85 text-xs font-bold text-slate-900 shadow-sm xl:hidden"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      <MegaMenu visible={desktopMenu === "company"} items={companyMenu} />
      <MegaMenu
        visible={desktopMenu === "products"}
        items={productCategories.map((product) => ({
          title: product.title,
          href: "/products",
          description: product.description,
        }))}
      />

      <motion.nav
        initial={false}
        animate={mobileOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        className="overflow-hidden border-t border-slate-200 bg-white/95 xl:hidden"
      >
        <div className="mx-auto grid max-w-7xl gap-2 px-5 py-4">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Products", "/products"],
            ["Capabilities", "/capabilities"],
            ["Certifications", "/certifications"],
            ["Industries", "/industries"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="rounded-2xl bg-[#2E3092] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Request Quote
          </Link>
        </div>
      </motion.nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative shrink-0 rounded-full px-4 py-2 text-[15px] font-semibold text-slate-600 transition hover:bg-[#EEF3FF] hover:text-[#2E3092]"
    >
      <span className="absolute inset-x-3 bottom-1 h-0.5 scale-x-0 rounded-full bg-[#2E3092] transition group-hover:scale-x-100" />
      {children}
    </Link>
  );
}

function MegaTrigger({
  label,
  active,
  onMouseEnter,
  onClick,
}: {
  label: string;
  active: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-[15px] font-semibold transition ${
        active ? "bg-[#EEF3FF] text-[#2E3092]" : "text-slate-600 hover:text-[#2E3092]"
      }`}
    >
      {label}
    </button>
  );
}

function MegaMenu({
  visible,
  items,
}: {
  visible: boolean;
  items: Array<{ title: string; href: string; description: string }>;
}) {
  return (
    <motion.div
      initial={false}
      animate={visible ? "open" : "closed"}
      variants={{
        open: { opacity: 1, y: 0, scale: 1, pointerEvents: "auto" },
        closed: { opacity: 0, y: -8, scale: 0.98, pointerEvents: "none" },
      }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="absolute left-1/2 top-[96px] hidden w-[820px] max-w-[calc(100vw-48px)] -translate-x-1/2 rounded-[1.75rem] border border-slate-200 bg-[#FFFCF7]/96 p-5 shadow-2xl shadow-slate-900/15 backdrop-blur-xl xl:block"
    >
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <Link
            key={`${item.title}-${item.href}`}
            href={item.href}
            className="rounded-2xl border border-transparent p-4 transition hover:border-[#2E3092]/10 hover:bg-white hover:shadow-sm"
          >
            <p className="font-semibold text-slate-950">{item.title}</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
