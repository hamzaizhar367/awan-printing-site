import { ContactForm } from "@/components/contact-form";
import { business } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="bg-[#F6F8FC] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-[#2E3092]">Contact</p>
          <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Contact and request quote
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Share your print requirement and contact Awan Printing Point
            directly while online inquiry handling is being connected.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff,#f7f9ff)] p-6 shadow-2xl shadow-slate-200/80 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Share your print requirement and receive direct guidance.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Include the service, material, quantity, size and delivery
              timeline. The form is visual only for now, so direct phone and
              email remain the recommended route.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ContactLine label="Phone" value={`${business.phone}, ${business.phoneAlt}`} />
              <ContactLine label="Cell / WhatsApp" value={business.cell} />
              <ContactLine label="Email" value={business.email} />
              <ContactLine label="Address" value={business.address} />
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-dashed border-slate-300 bg-white/70 p-6 text-sm leading-7 text-slate-600">
              {/* Add an approved embedded map or static map asset here later. */}
              Map placeholder: add the approved business location map here when
              ready.
            </div>
          </div>
          <ContactForm businessName={business.name} />
        </div>
      </section>
    </main>
  );
}

function ContactLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <p className="mt-1 leading-7 text-slate-800">{value}</p>
    </div>
  );
}
