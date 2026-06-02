import Link from "next/link";
import { ContactCTA } from "@/components/cards";
import { SectionHeader } from "@/components/section-header";
import { MotionSection } from "@/components/site-motion";
import { business, stats } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="bg-[#F6F8FC] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-[#2E3092]">About Awan Printing Point</p>
          <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            A professional printing and packaging supplier since 2000
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Awan Printing Point is a Faisalabad-based B2B printing and packaging
            company serving textile exporters, retail brands, schools,
            government/procurement buyers, institutions and corporate businesses.
          </p>
        </div>
      </section>

      <MotionSection className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Company Story"
              title="Built around production reliability and practical business communication."
              body="The company supports commercial printing, packaging, labeling and textile-facing print requirements from Faisalabad."
            />
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
            <p className="text-2xl font-semibold leading-snug text-slate-950">
              &ldquo;{business.mission}&rdquo;
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              Led by {business.ceo}, Awan Printing Point focuses on dependable
              print production for buyers who need clarity, consistency and
              supplier accountability.
            </p>
          </div>
        </div>
      </MotionSection>

      <section className="bg-[#FBFCFF] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {stats.map(([label, value]) => (
            <div key={label} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">{label}</p>
              <p className="mt-3 text-2xl font-semibold text-slate-950">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ["Facility", "Faisalabad production base supporting labels, packaging and commercial print workflows."],
            ["Process", "B2B order discussions begin with service scope, material, quantity, deadline and finishing requirements."],
            ["Standards", "FSC, ISO 9001:2015 and OEKO-TEX 100 are presented as confirmed company certification areas."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-5 text-center sm:px-6 lg:px-8">
        <Link href="/contact" className="inline-flex rounded-full bg-[#2E3092] px-6 py-3 text-sm font-bold text-white">
          Contact Awan Printing Point
        </Link>
      </div>
      <ContactCTA />
    </main>
  );
}
