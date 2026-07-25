import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import {
  ArrowRight,
  CheckCircle,
  Warning,
  FileText,
  WhatsappLogo,
  Headset,
  SealCheck,
  Clock,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr"
import { Testimonials } from "@/components/testimonials"
import { NewsletterSignup } from "@/components/newsletter-signup"

export const metadata: Metadata = {
  title: "KRA Penalty Waiver Kenya — KES 4,000 per Application | Smart VAT Kenya",
  description:
    "Professional KRA VAT penalty waiver application in Kenya — KES 4,000 per application. We draft and submit your KRA penalty waiver request. Late filing penalties, non-registration penalties, and more.",
  keywords: [
    "kra penalty waiver",
    "kra penalty waiver kenya",
    "kra late filing penalty",
    "kra penalty waiver application",
    "avoid kra vat penalty",
    "kra waiver letter",
    "kra penalty kes 10000",
    "non registration penalty kra",
    "kra penalty waiver process",
  ],
  alternates: { canonical: "https://smartvatkenya.co.ke/services/kra-penalty-waiver" },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "KRA Penalty Waiver Application",
  description:
    "Professional drafting and submission of KRA penalty waiver requests for outstanding VAT penalties in Kenya.",
  provider: { "@type": "Organization", name: "Smart VAT Kenya" },
  offers: { "@type": "Offer", price: "4000", priceCurrency: "KES" },
}

const WA_BASE = "https://wa.me/254721725958"
const WA_TEXT = "Hi%2C%20I%20need%20help%20with%20a%20KRA%20Penalty%20Waiver%20application"

const included = [
  { label: "Penalty waiver letter drafted" },
  { label: "KRA portal submission" },
  { label: "WhatsApp status updates" },
  { label: "Expert guidance throughout" },
  { label: "No success-fee extras" },
]

const penalties = [
  { name: "Late filing penalty", amount: "KES 10,000", desc: "Per return filed after the 20th deadline." },
  { name: "Late payment penalty", amount: "5% of tax", desc: "Of the outstanding tax amount, charged immediately." },
  { name: "Late payment interest", amount: "1% per month", desc: "Compounded monthly on overdue VAT." },
  { name: "Non-registration penalty", amount: "KES 100,000", desc: "KES 100,000 or the tax that would have been due (whichever is higher) for failing to register for VAT when required." },
]

const steps = [
  {
    num: "01",
    title: "Tell us about your penalties",
    desc: "Send us the details of your penalty notices via WhatsApp — we will confirm what we need within minutes.",
  },
  {
    num: "02",
    title: "We draft and submit the waiver",
    desc: "Our team prepares your penalty waiver letter and submits it through the KRA iTax portal. You get a confirmation once filed.",
  },
  {
    num: "03",
    title: "KRA reviews — you get the result",
    desc: "KRA processes your waiver request. We track the status and update you until a final decision is communicated.",
  },
]

const faqs = [
  {
    q: "What is the success rate for KRA penalty waivers?",
    a: "KRA does consider waiver requests, especially if you have a reasonable explanation (first-time offence, system issues, illness, etc.). While we cannot guarantee approval, our waiver letters are professionally drafted to give you the best possible chance. Many of our clients have received full or partial waivers.",
  },
  {
    q: "How long does the KRA penalty waiver process take?",
    a: "KRA typically processes waiver requests within 2–4 weeks. We will track the status on the iTax portal and update you via WhatsApp as soon as there is any movement.",
  },
  {
    q: "What documents do I need to provide?",
    a: "You will need your KRA PIN, details of the penalty notice / assessment you received, and a brief explanation of why the penalty occurred (late filing, late registration, etc.). We will guide you on exactly what to send.",
  },
  {
    q: "Can KRA penalties be waived entirely?",
    a: "KRA has discretion to waive penalties and interest under Section 84 of the VAT Act, 2013. Full or partial waivers are possible depending on the circumstances. Even if a full waiver is not granted, professional representation often results in reduced amounts or extended payment terms.",
  },
  {
    q: "Do I need to pay the fee upfront?",
    a: "Yes, the KES 4,000 service fee is paid before we begin work. This covers drafting the waiver letter and submitting it on the iTax portal. Payment is via M-PESA and you will receive a receipt.",
  },
  {
    q: "What happens if my waiver is rejected?",
    a: "If KRA rejects the waiver, we can review the decision and advise on next steps — which may include a formal objection. Note that our KES 4,000 fee covers the initial application; formal objections are charged separately.",
  },
]

export default function KRAPenaltyWaiverPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://smartvatkenya.co.ke/services" },
      { "@type": "ListItem", position: 3, name: "KRA Penalty Waiver", item: "https://smartvatkenya.co.ke/services/kra-penalty-waiver" },
    ],
  }

  return (
    <>
      <Script id="service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Header ──────────────────────────────────────────── */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">
            Penalty waiver service
          </p>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            KRA Penalty Waiver —{" "}
            <span className="text-canvas/80 font-normal">KES 4,000</span>
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[52ch] leading-relaxed mb-8">
            Outstanding KRA VAT penalties? We draft and submit your penalty waiver application
            through the iTax portal. One fixed price. No success-fee extras.
          </p>
          <a
            href={`${WA_BASE}?text=${WA_TEXT}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            <WhatsappLogo size={16} weight="fill" aria-hidden="true" />
            Start your waiver application
          </a>
        </div>
      </div>

      {/* ── Warning box: what you face without a waiver ────── */}
      <section className="bg-canvas-alt px-6 lg:px-10 py-14">
        <div className="max-w-[1400px] mx-auto">
          <div className="border border-brand/20 bg-brand-muted rounded-lg p-6 lg:p-8 flex flex-col lg:flex-row lg:items-start gap-5">
            <div className="shrink-0 w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
              <Warning size={20} weight="fill" className="text-brand" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-display text-[1.05rem] font-semibold text-ink mb-3">
                KRA penalties add up fast — here is what you could be facing
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {penalties.map((p) => (
                  <div key={p.name} className="bg-canvas border border-hairline rounded-md p-4">
                    <p className="font-display text-[1.1rem] font-semibold text-brand leading-none mb-1">
                      {p.amount}
                    </p>
                    <p className="text-[0.82rem] font-medium text-ink mb-0.5">{p.name}</p>
                    <p className="text-[0.75rem] text-ink-muted leading-snug">{p.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[0.82rem] text-ink-muted mt-4 leading-relaxed">
                These penalties accrue automatically in the KRA iTax system. A professionally
                drafted waiver application is often the fastest way to reduce or eliminate them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What&apos;s included ──────────────────────────────── */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="included-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            What&apos;s included
          </p>
          <h2 id="included-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-4 text-balance">
            Everything in the KES 4,000 penalty waiver service.
          </h2>
          <p className="text-[0.9rem] text-ink-muted max-w-[48ch] leading-relaxed mb-10">
            No tiers. No upsells. One flat fee covers the full application process.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {included.map((item) => (
              <div key={item.label} className="bg-canvas-alt border border-hairline rounded-lg p-5 flex items-start gap-3">
                <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-[0.85rem] text-ink-soft leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────── */}
      <section className="bg-canvas-dark px-6 lg:px-10 py-16" aria-labelledby="how-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/55 mb-4">
            How it works
          </p>
          <h2 id="how-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-canvas tracking-tight mb-12 text-balance">
            Three steps to your KRA penalty waiver.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="border border-canvas/15 rounded-lg p-6">
                <p className="font-mono text-[0.7rem] text-canvas/40 tracking-widest mb-3">{step.num}</p>
                <h3 className="font-display text-[1.05rem] font-semibold text-canvas mb-2">{step.title}</h3>
                <p className="text-[0.85rem] text-canvas/65 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Types of penalties we handle ───────────────────── */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="penalties-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Penalties we handle
          </p>
          <h2 id="penalties-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-4 text-balance">
            Types of KRA VAT penalties we handle.
          </h2>
          <p className="text-[0.9rem] text-ink-muted max-w-[52ch] leading-relaxed mb-10">
            If KRA has issued a penalty notice for any of the following, we can help with a waiver application.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: Warning,
                title: "Late filing penalties",
                desc: "Filed your VAT return after the 20th? KRA charges KES 10,000 per late return. We can apply for a waiver if you have a valid reason.",
              },
              {
                icon: FileText,
                title: "Non-registration penalties",
                desc: "Did not register for VAT when you crossed the KES 5 million threshold? The penalty can reach KES 100,000. A waiver application may reduce or eliminate this.",
              },
              {
                icon: SealCheck,
                title: "eTIMS non-compliance penalties",
                desc: "Failure to integrate with eTIMS or issue e-invoices can attract penalties. We can draft a waiver addressing your compliance efforts.",
              },
              {
                icon: Clock,
                title: "Late payment interest",
                desc: "Unpaid VAT accrues interest at 1% per month compounded. A waiver application can sometimes stop further interest accumulation.",
              },
            ].map((p) => (
              <div key={p.title} className="bg-canvas-alt border border-hairline rounded-lg p-6 flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-brand-muted flex items-center justify-center">
                  <p.icon size={18} weight="duotone" className="text-brand" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-[0.95rem] font-semibold text-ink mb-1.5">{p.title}</h3>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────── */}
      <Testimonials />

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="faq-heading">
        <div className="max-w-[800px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Frequently asked questions
          </p>
          <h2 id="faq-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-10 text-balance">
            Common questions about KRA penalty waivers.
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-hairline rounded-lg open:border-brand/30 transition-colors">
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none text-[0.9rem] font-medium text-ink hover:text-brand transition-colors">
                  {faq.q}
                  <ArrowUpRight size={14} className="shrink-0 text-ink-muted group-open:rotate-90 transition-transform" aria-hidden="true" />
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-[0.85rem] text-ink-muted leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────────────── */}
      <section className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-semibold text-canvas tracking-tight mb-4 text-balance">
            Ready to clear your KRA penalties?
          </h2>
          <p className="text-[0.93rem] text-canvas/65 max-w-[44ch] mx-auto leading-relaxed mb-8">
            Send us a WhatsApp message and we will start your penalty waiver application.
          </p>
          <a
            href={`${WA_BASE}?text=${WA_TEXT}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-6 py-3.5 rounded-md hover:bg-brand-hover transition-colors"
          >
            <WhatsappLogo size={16} weight="fill" aria-hidden="true" />
            Start your waiver application
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
          <p className="text-[0.75rem] text-canvas/45 mt-5">
            KES 4,000 flat fee. No success-fee extras. M-PESA accepted.
          </p>
        </div>
      </section>

      <section className="bg-canvas px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <NewsletterSignup />
        </div>
      </section>
    </>
  )
}
