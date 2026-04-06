"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// ============================================================
//  EDIT YOUR CONTENT HERE
// ============================================================
const BUSINESS = {
  name:     "Awan Printing Point",
  phone1:   "+92 41 521 2373",
  phone2:   "+92 301 866 5037",
  email:    "awanprinter@gmail.com",
  address:  "P-69, Street #1, Behind National Bank Main Branch, Jail Road, Faisalabad",
  ntn:      "2681448",
  fsc:      "FSC-C430007",
  ceo:      "Muhammad Gulzar Alvi",
};

const SERVICES = [
  { n: "01", title: "Offset Printing",      body: "High-volume precision printing on Heidelberg GTO, SORM and Solna 125 machines. German and Swedish engineering for flawless commercial output." },
  { n: "02", title: "Flexo Printing",       body: "Flexible packaging and label printing using flexographic technology. Ideal for poly bags, roll labels and high-speed production runs." },
  { n: "03", title: "Screen Printing",      body: "Vibrant, durable screen printing for specialty labels, hang tags and promotional materials with rich colour saturation." },
  { n: "04", title: "Thermal Printing",     body: "Barcode labels, UPC price tickets, QR codes and thermal transfer labels. Fast, accurate and compliant with global retail standards." },
  { n: "05", title: "Corrugated Packaging", body: "Custom corrugated boxes and packaging solutions built for product protection, retail presentation and international shipping standards." },
  { n: "06", title: "Digital Printing",     body: "Short-run digital printing for quick turnaround jobs. Sharp output across labels, cards and marketing materials with no minimum order." },
];

const ROW1 = ["Satin Labels","Hang Tags","Poly Bags","Barcode Stickers","Belly Bands","Kraft Cards","Brochures","Calendars","Posters","Menu Cards","Shelf Strips","Inlay Cards"];
const ROW2 = ["Taffeta Labels","Zipper Bags","QR Labels","UPC Tickets","Greeting Cards","Stiffeners","Transparent Stickers","Paper Labels","Thermal Labels","Corporate Stationery","Plastic Hangers","Roll Labels"];

const STATS = [
  { n: 25, s: "+", l: "Years in Business" },
  { n: 40, s: "+", l: "Global Brand Clients" },
  { n: 3,  s: "",  l: "Intl. Certifications" },
  { n: 10, s: "+", l: "Industrial Machines" },
];

const WHY = [
  { icon: "🏭", title: "Industrial Machinery",    body: "German Heidelberg and Swedish Solna machines deliver precision that handcraft cannot match." },
  { icon: "🌍", title: "Global Brand Trusted",    body: "IKEA, Primark, Calvin Klein and 40+ world-class brands trust us for mission-critical print." },
  { icon: "📋", title: "Triple Certified",        body: "ISO 9001:2015, FSC and OEKO TEX-100 certified. Quality is not a promise - it is documented." },
  { icon: "⚡", title: "Fast Turnaround",         body: "25 years of operational excellence means your order is on time, every time, at scale." },
  { icon: "🎯", title: "End-to-End Solutions",    body: "From design support to cutting and finishing - one partner for your entire print supply chain." },
  { icon: "💬", title: "Direct Communication",    body: "No middlemen. You deal directly with our production team for fast decisions and clear answers." },
];

const CLIENTS = [
  "IKEA","Zara Home","Primark","Calvin Klein","Ralph Lauren","Aldi","EDEKA",
  "JYSK","Sapphire Textile","Nishat Textile","Masood Textile","Kohinoor Textile",
  "Indus Home","Dunnes Home","Livarno Home","Polo","Naf Naf","Novitesse","West Point","Bassetti",
];

const TESTIMONIALS = [
  { quote: "Awan Printing Point has been our label supplier for over 8 years. Consistent quality, on-time delivery and a team that genuinely understands our requirements.", author: "Procurement Manager", company: "Sapphire Textile Mills" },
  { quote: "We source labels from multiple countries. Awan consistently matches international quality standards at competitive rates. A reliable long-term partner.", author: "Supply Chain Director", company: "Masood Textile" },
  { quote: "Their FSC certification and OEKO TEX compliance made the vendor approval process straightforward. Quality has never been an issue.", author: "Quality Assurance Lead", company: "Nishat Textile Mills" },
];

// ============================================================
//  HOOKS
// ============================================================
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); io.disconnect(); } }, { threshold });
    io.observe(el); return () => io.disconnect();
  }, [threshold]);
  return { ref, v };
}

function useCount(target: number, run: boolean) {
  const [c, setC] = useState(0);
  useEffect(() => {
    if (!run) return;
    let cur = 0; const step = Math.ceil(target / 60);
    const t = setInterval(() => { cur = Math.min(cur + step, target); setC(cur); if (cur >= target) clearInterval(t); }, 24);
    return () => clearInterval(t);
  }, [run, target]);
  return c;
}

function Up({ children, d = 0, className = "" }: { children: React.ReactNode; d?: number; className?: string }) {
  const { ref, v } = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(28px)", transition: `opacity .7s ease ${d}ms, transform .7s ease ${d}ms` }}>
      {children}
    </div>
  );
}

function StatBox({ n, s, l }: { n: number; s: string; l: string }) {
  const { ref, v } = useInView();
  const c = useCount(n, v);
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <p style={{ fontSize: 52, fontWeight: 800, color: "#fff", lineHeight: 1, opacity: v ? 1 : 0, transition: "opacity .5s ease" }}>{c}{s}</p>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 6 }}>{l}</p>
    </div>
  );
}

// ============================================================
//  PAGE
// ============================================================
export default function Page() {
  const [menu, setMenu]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ready, setReady]     = useState(false);
  const [form, setForm]       = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent]       = useState(false);
  const [busy, setBusy]       = useState(false);

  useEffect(() => {
    setReady(true);
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const send = async (e: React.FormEvent) => {
    e.preventDefault(); setBusy(true);
    await new Promise(r => setTimeout(r, 900));
    setSent(true); setBusy(false);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)", color: "#fff",
    borderRadius: 8, padding: "12px 16px", fontSize: 14,
    outline: "none", fontFamily: "inherit", boxSizing: "border-box",
  };

  const divider = <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "0 40px" }} />;

  return (
    <div style={{ background: "#0a0a0a", color: "#fff", fontFamily: "system-ui,-apple-system,sans-serif", minHeight: "100vh" }}>

      {/* ── NAV ──────────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 40px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "all .35s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/awan-logo.png"
            alt="Awan Printing Point logo"
            width={36}
            height={36}
            priority
          />
        </div>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Services","About","Clients","Contact"].map(n => (
            <a key={n} href={`#${n.toLowerCase()}`} style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color .2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
              {n}
            </a>
          ))}
          <a href="#contact" style={{ background: "#fff", color: "#000", fontWeight: 700, fontSize: 13, padding: "8px 20px", borderRadius: 8, textDecoration: "none", transition: "background .2s" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#e5e5e5"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#fff"}>
            Get a Quote
          </a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 40px 80px", position: "relative", overflow: "hidden" }}>
        {/* AWAN watermark */}
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: 300, fontWeight: 900, color: "rgba(255,255,255,0.03)", whiteSpace: "nowrap", pointerEvents: "none", userSelect: "none", zIndex: 0, letterSpacing: "-0.05em" }}>
          AWAN
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative", zIndex: 1 }}>
          {/* Left */}
          <div>
            <div style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(16px)", transition: "all .6s ease .1s", marginBottom: 28, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 28, height: 2, background: "#22d3ee" }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "#22d3ee", letterSpacing: ".1em", textTransform: "uppercase" }}>Est. 2000 · Faisalabad, Pakistan</span>
            </div>

            <h1 style={{ fontSize: "clamp(40px,6vw,80px)", fontWeight: 900, lineHeight: 1.02, letterSpacing: "-.03em", marginBottom: 24, opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(24px)", transition: "all .8s cubic-bezier(.16,1,.3,1) .2s" }}>
              Precision print<br />
              for brands that<br />
              <span style={{ color: "#22d3ee" }}>value quality.</span>
            </h1>

            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: 40, maxWidth: 440, opacity: ready ? 1 : 0, transition: "all .8s ease .5s" }}>
              We deliver packaging, labels, tags and commercial print with the consistency, finish and operational reliability trusted by global brands.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32, opacity: ready ? 1 : 0, transition: "all .8s ease .7s" }}>
              <a href="#contact" style={{ background: "#fff", color: "#000", fontWeight: 700, fontSize: 14, padding: "11px 24px", borderRadius: 8, textDecoration: "none", transition: "all .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#e5e5e5"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.transform = "none"; }}>
                Start a Project →
              </a>
              <a href="#services" style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: 14, padding: "11px 24px", borderRadius: 8, textDecoration: "none", transition: "all .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.4)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}>
                View Services
              </a>
            </div>

            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", letterSpacing: ".08em", opacity: ready ? 1 : 0, transition: "opacity .8s ease 1s" }}>
              ISO 9001:2015 · FSC Certified · OEKO TEX-100
            </p>
          </div>

          {/* Right - stat boxes */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
            {[
              { label: "ESTABLISHED",    value: "2000" },
              { label: "GLOBAL BRANDS",  value: "40+" },
              { label: "BASED IN",       value: "Faisalabad" },
              { label: "CERTIFICATIONS", value: "ISO · FSC · OEKO" },
            ].map((item, i) => (
              <div key={i} style={{ padding: "28px 24px", borderLeft: "2px solid rgba(255,255,255,0.08)", opacity: ready ? 1 : 0, transition: `opacity .8s ease ${.4 + i * .1}s` }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".12em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: 8 }}>{item.label}</p>
                <p style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {divider}

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section id="services" style={{ padding: "100px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <Up>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#22d3ee", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 16 }}>What We Do</p>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.05, marginBottom: 16 }}>
            Full-service printing.<br />Zero compromise.
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.4)", maxWidth: 440, lineHeight: 1.7, marginBottom: 64 }}>
            Every order executed on industrial German and Swedish machinery - precision guaranteed.
          </p>
        </Up>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, overflow: "hidden" }}>
          {SERVICES.map((s, i) => (
            <Up key={s.title} d={i * 50}>
              <div style={{ padding: "36px 32px", borderRight: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", transition: "background .25s", cursor: "default" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#22d3ee", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 14 }}>{s.n}</p>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: "-.02em" }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{s.body}</p>
              </div>
            </Up>
          ))}
        </div>
      </section>

      {divider}

      {/* ── PRODUCT TICKER ───────────────────────────────────── */}
      <section style={{ padding: "80px 0", overflow: "hidden", background: "#0a0a0a" }}>
        <Up>
          <p style={{ textAlign: "center", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 40 }}>
            30+ Products · One Trusted Partner
          </p>
        </Up>

        {[ROW1, ROW2].map((row, ri) => (
          <div key={ri} style={{ overflow: "hidden", position: "relative", marginBottom: ri === 0 ? 12 : 0 }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, background: "linear-gradient(to right,#0a0a0a,transparent)", zIndex: 2 }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100, background: "linear-gradient(to left,#0a0a0a,transparent)", zIndex: 2 }} />
            <div style={{ display: "flex", gap: 0, width: "max-content", animation: `${ri === 0 ? "tickerLeft" : "tickerRight"} ${ri === 0 ? 35 : 28}s linear infinite` }}>
              {[...row, ...row].map((item, i) => (
                <span key={i} style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.5)", padding: "10px 28px", whiteSpace: "nowrap", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {divider}

      {/* ── STATS ────────────────────────────────────────────── */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 40 }}>
          {STATS.map(s => <StatBox key={s.l} {...s} />)}
        </div>
      </section>

      {divider}

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Up>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#22d3ee", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 16 }}>Why Choose Us</p>
            <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.05, marginBottom: 16 }}>
              Built different.<br />Proven by results.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.4)", maxWidth: 440, lineHeight: 1.7, marginBottom: 64 }}>
              25 years of trust built one order at a time - for the world's most demanding brands.
            </p>
          </Up>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {WHY.map((w, i) => (
              <Up key={w.title} d={i * 60}>
                <div style={{ padding: "32px", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, transition: "all .3s", cursor: "default" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.18)"; el.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.transform = "none"; }}>
                  <p style={{ fontSize: 28, marginBottom: 16 }}>{w.icon}</p>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, letterSpacing: "-.01em" }}>{w.title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{w.body}</p>
                </div>
              </Up>
            ))}
          </div>
        </div>
      </section>

      {divider}

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section id="about" style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <Up>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#22d3ee", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 16 }}>About Us</p>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.1, marginBottom: 24 }}>
              25 years of trust.<br />Proven by the world's best brands.
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 16 }}>
              Awan Printing Point is one of Pakistan's leading commercial printing houses, operating an ISO-certified facility powered by industrial German and Swedish machinery in Faisalabad since 2000.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 40 }}>
              Led by CEO <strong style={{ color: "#fff" }}>{BUSINESS.ceo}</strong>, our team delivers flawless output at scale - earning the trust of IKEA, Primark, Calvin Klein, Zara Home and 40+ other global brands.
            </p>

            {/* Contact info - visible but not dominant */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 36, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12 }}>
              {[
                { icon: "📞", text: `${BUSINESS.phone1}  ·  ${BUSINESS.phone2}` },
                { icon: "✉️", text: BUSINESS.email },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ fontSize: 14 }}>{icon}</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{text}</span>
                </div>
              ))}
            </div>

            <a href="#contact" style={{ background: "#fff", color: "#000", fontWeight: 700, fontSize: 14, padding: "12px 28px", borderRadius: 8, textDecoration: "none", display: "inline-block", transition: "background .2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#e5e5e5"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#fff"}>
              Work with us →
            </a>
          </Up>

          <Up d={120}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { label: "Mission",        value: '"Perfection, precision and printing par excellence."', bg: "#111", textColor: "#fff", small: true },
                { label: "Founded",        value: "2000",                    bg: "#22d3ee", textColor: "#000", big: true },
                { label: "Location",       value: "Faisalabad, Pakistan",    bg: "#111", textColor: "#fff" },
                { label: "Certifications", value: "FSC · ISO · OEKO",       bg: "rgba(255,255,255,0.05)", textColor: "#fff" },
              ].map((card, i) => (
                <div key={i} style={{ background: card.bg, border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "24px", transition: "transform .3s", cursor: "default" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "none"}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: card.bg === "#22d3ee" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.3)", marginBottom: 8 }}>{card.label}</p>
                  <p style={{ fontSize: card.big ? 42 : card.small ? 13 : 18, fontWeight: card.big ? 900 : 600, color: card.textColor, lineHeight: 1.3, fontStyle: card.small ? "italic" : "normal" }}>{card.value}</p>
                </div>
              ))}
            </div>
          </Up>
        </div>
      </section>

      {divider}

      {/* ── CLIENTS ──────────────────────────────────────────── */}
      <section id="clients" style={{ padding: "100px 0" }}>
        <Up className="">
          <div style={{ padding: "0 40px", maxWidth: 1200, margin: "0 auto 56px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#22d3ee", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 16 }}>Our Clients</p>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.1, marginBottom: 12 }}>
              Delivering for the world's best.
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)" }}>Global brands trust us to deliver - on time, every time.</p>
          </div>
        </Up>

        <div style={{ overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, background: "linear-gradient(to right,#0a0a0a,transparent)", zIndex: 2 }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100, background: "linear-gradient(to left,#0a0a0a,transparent)", zIndex: 2 }} />
          <div style={{ display: "flex", gap: 10, width: "max-content", animation: "tickerLeft 30s linear infinite" }}>
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i} style={{ padding: "10px 24px", borderRadius: 999, fontSize: 13, fontWeight: 600, border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.55)", whiteSpace: "nowrap", flexShrink: 0, transition: "all .2s", cursor: "default" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.35)"; el.style.color = "#fff"; el.style.background = "rgba(255,255,255,0.05)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.1)"; el.style.color = "rgba(255,255,255,0.55)"; el.style.background = "transparent"; }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {divider}

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Up>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#22d3ee", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 16 }}>Testimonials</p>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.1, marginBottom: 64 }}>
              What our clients say.
            </h2>
          </Up>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {TESTIMONIALS.map((t, i) => (
              <Up key={i} d={i * 80}>
                <div style={{ padding: "36px 32px", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 220, transition: "border-color .3s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.18)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"}>
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 32, fontStyle: "italic" }}>"{t.quote}"</p>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{t.author}</p>
                    <p style={{ fontSize: 12, color: "#22d3ee", marginTop: 4 }}>{t.company}</p>
                  </div>
                </div>
              </Up>
            ))}
          </div>
        </div>
      </section>

      {divider}

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <Up>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#22d3ee", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 16 }}>Contact</p>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.1, marginBottom: 20 }}>
              Let's talk about your next order.
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: 48 }}>
              Fill in the form and our team will respond within 24 hours.
            </p>

            {[
              { label: "Phone",   lines: [BUSINESS.phone1, BUSINESS.phone2] },
              { label: "Email",   lines: [BUSINESS.email] },
              { label: "Address", lines: [BUSINESS.address] },
              { label: "NTN",     lines: [BUSINESS.ntn] },
            ].map(({ label, lines }) => (
              <div key={label} style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>{label}</p>
                {lines.map((l, i) => <p key={i} style={{ fontSize: 14, color: i === 0 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{l}</p>)}
              </div>
            ))}
          </Up>

          <Up d={100}>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 400, textAlign: "center", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16 }}>
                <p style={{ fontSize: 40, marginBottom: 16 }}>✅</p>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Message received!</h3>
                <p style={{ color: "rgba(255,255,255,0.4)" }}>We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={send} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  {[{ k: "name", l: "Full Name", t: "text", p: "Your name" }, { k: "email", l: "Email", t: "email", p: "you@company.com" }].map(({ k, l, t, p }) => (
                    <div key={k}>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", marginBottom: 6, letterSpacing: ".06em", textTransform: "uppercase" }}>{l}</label>
                      <input type={t} required placeholder={p} value={form[k as keyof typeof form]}
                        onChange={e => setForm({ ...form, [k]: e.target.value })}
                        style={inputStyle}
                        onFocus={e => (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"}
                        onBlur={e => (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"} />
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", marginBottom: 6, letterSpacing: ".06em", textTransform: "uppercase" }}>Phone</label>
                  <input type="tel" placeholder="+92 300 0000000" value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"}
                    onBlur={e => (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", marginBottom: 6, letterSpacing: ".06em", textTransform: "uppercase" }}>Message</label>
                  <textarea required rows={5} placeholder="Tell us about your print requirements..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={e => (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"}
                    onBlur={e => (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"} />
                </div>
                <button type="submit" disabled={busy} style={{ background: busy ? "rgba(255,255,255,0.6)" : "#fff", color: "#000", fontWeight: 700, fontSize: 15, padding: "13px 0", borderRadius: 8, border: "none", cursor: busy ? "not-allowed" : "pointer", transition: "all .2s" }}
                  onMouseEnter={e => { if (!busy) (e.currentTarget as HTMLElement).style.background = "#e5e5e5"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = busy ? "rgba(255,255,255,0.6)" : "#fff"; }}>
                  {busy ? "Sending..." : "Send Enquiry →"}
                </button>
              </form>
            )}
          </Up>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "28px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontWeight: 800, fontSize: 16 }}>Awan<span style={{ color: "#22d3ee" }}>.</span></span>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>© {new Date().getFullYear()} Awan Printing Point · NTN {BUSINESS.ntn}</p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>{BUSINESS.fsc}</p>
        </div>
      </div>

      <style>{`
        @keyframes tickerLeft  { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes tickerRight { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; }
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; gap: 40px !important; }
          section > div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
          section > div[style*="grid-template-columns: repeat(4"] { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </div>
  );
}
