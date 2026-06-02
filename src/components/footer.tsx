import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-[#0B1739] px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.7fr_0.9fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/awan-logo.png"
              alt="Awan Printing Point logo"
              width={46}
              height={46}
              className="h-11 w-11 object-contain"
            />
            <p className="font-semibold">{business.name}</p>
          </div>
          <p className="mt-5 text-sm leading-7 text-blue-50/75">
            Faisalabad-based printing and packaging company serving B2B print,
            label, packaging and institutional procurement needs since 2000.
          </p>
          <p className="mt-4 text-sm font-semibold text-blue-100">Established 2000</p>
          <p className="mt-2 text-sm text-blue-50/75">
            FSC | ISO 9001:2015 | OEKO-TEX 100
          </p>
        </div>
        <FooterList
          title="Quick Links"
          items={[
            ["About", "/about"],
            ["Services", "/services"],
            ["Products", "/products"],
            ["Capabilities", "/capabilities"],
            ["Industries", "/industries"],
          ]}
        />
        <FooterList
          title="Services"
          items={[
            ["Labels", "/services"],
            ["Hang tags", "/services"],
            ["Poly bags", "/services"],
            ["Catalogues", "/services"],
            ["Barcode labels", "/services"],
          ]}
        />
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
            Contact
          </h3>
          <div className="mt-5 space-y-3 text-sm leading-7 text-blue-50/75">
            <p>{business.address}</p>
            <p>{business.email}</p>
            <p>{business.phone}</p>
            <p>{business.cell}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterList({
  title,
  items,
}: {
  title: string;
  items: Array<[string, string]>;
}) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm text-blue-50/75">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="transition hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
