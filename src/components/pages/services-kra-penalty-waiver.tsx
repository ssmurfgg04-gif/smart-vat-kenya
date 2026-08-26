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
import { FACTS } from "@/src/lib/vat-facts"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "KRA Tax Amnesty Cleanup 2026",
  description:
    "Free iTax ledger check to identify which 2026 KRA tax amnesty path you qualify for, filing outstanding returns to unlock automatic penalty waivers, and structuring payment plans for pre-2026 principal.",
  provider: { "@type": "Organization", name: "Smart VAT Kenya" },
  areaServed: { "@type": "Country", name: "Kenya" },
  priceRange: "Free check — cleanup at a flat fee",
}

const WA_BASE = "https://wa.me/254717344440"
const WA_TEXT = "Hi%2C%20I%20want%20a%20FREE%20KRA%20Tax%20Amnesty%20ledger%20check"

const included = [
  { label: "Free iTax ledger check" },
  { label: "Your amnesty path identified" },
  { label: "Outstanding returns filed" },
  { label: "Payment plan structured" },
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
    title: "Send us your KRA PIN",
    desc: "Message us your PIN and any penalty notices you have — we confirm what we need within minutes.",
  },
  {
    num: "02",
    title: "Get your free readout",
    desc: "We check your iTax ledger and tell you which of the three amnesty paths you're on, with your rough penalty balance.",
  },
  {
    num: "03",
    title: "We file and confirm",
    desc: "Authorize us to file outstanding returns and structure a payment plan. We confirm every waiver in writing before 31 December 2026.",
  },
]

const faqs = [
  {
    q: "Do I need to apply for the KRA tax amnesty?",
    a: "Not always. If you fully paid your principal by 31 December 2025, the waiver is automatic — no application. If you only have late-filing penalties and no principal, the waiver is also automatic once all outstanding returns are filed. That is why we recommend a free ledger check before filing anything.",
  },
  {
    q: "What is the KRA Tax Amnesty 2026?",
    a: "The Finance Act 2026 amnesty waives 100% of penalties, interest and fines on liabilities accrued up to 31 December 2025. The window runs from 1 July to 31 December 2026. It does not forgive principal — that part must still be paid.",
  },
  {
    q: "What documents do I need to provide?",
    a: "You will need your KRA PIN, any penalty notices or assessments you received, and a brief note on whether the principal was paid by the end of 2025. We will guide you on exactly what to send.",
  },
  {
    q: "What is excluded from the amnesty?",
    a: "Anything that arose on or after 1 January 2026 is not covered. Active tax disputes are also excluded — those should be settled via Alternative Dispute Resolution first. And the principal itself is never forgiven; it must be cleared before the window closes.",
  },
  {
    q: "What does the free ledger check cost?",
    a: "It is free. We review your outstanding returns and tell you which of the three amnesty paths you qualify for. If you need outstanding returns filed or a payment plan structured, that is charged at a flat published fee.",
  },
  {
    q: "What happens if I owe principal and cannot pay in full?",
    a: "We structure a payment plan with KRA on iTax and make sure it is fully cleared before 31 December 2026, so the penalties and interest drop off. We will review the exact position with you after the free check.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
}

export default function KRAPenaltyWaiverPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://smartvatkenya.co.ke/services" },
      { "@type": "ListItem", position: 3, name: "Tax Amnesty Cleanup", item: "https://smartvatkenya.co.ke/services/kra-penalty-waiver/" },
    ],
  }

  return (
    <>
      <script id="service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Header ──────────────────────────────────────────── */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">
            KRA Tax Amnesty 2026
          </p>
          <p className="font-mono text-[0.7rem] text-brand mb-6">
            Last verified {new Date(FACTS.lastVerified).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} against KRA guidance
          </p>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            Tax Amnesty Cleanup —{" "}
            <span className="text-canvas/80 font-normal">free ledger check</span>
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[52ch] leading-relaxed mb-6">
            Old KRA penalties? We tell you which of the three amnesty paths you&apos;re on, file the
            outstanding returns that unlock the waiver, and structure the payment plan if you owe
            principal. Window closes 31 December 2026.
          </p>
          <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Trust signals">
            <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-canvas/80 bg-canvas/10 rounded-full px-3 py-1.5">
              <CheckCircle size={12} weight="fill" className="text-brand" aria-hidden="true" />
              M-PESA accepted
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-canvas/80 bg-canvas/10 rounded-full px-3 py-1.5">
              <CheckCircle size={12} weight="fill" className="text-brand" aria-hidden="true" />
              No hidden costs
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-canvas/80 bg-canvas/10 rounded-full px-3 py-1.5">
              <SealCheck size={12} weight="fill" className="text-brand" aria-hidden="true" />
              Registered KRA agent
            </span>
          </div>
          <a
            href={`${WA_BASE} data-track="whatsapp-cta"?text=${WA_TEXT}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            <WhatsappLogo size={16} weight="fill" aria-hidden="true" />
            Start your free ledger check
          </a>
          <p className="mt-4 text-[0.82rem] text-canvas/70 max-w-[52ch] leading-relaxed">
            New — KRA&apos;s 2026 Tax Amnesty can waive 100% of penalties and interest on debt
            accrued up to 2025, automatically in many cases.{" "}
            <a href="/tax-amnesty-2026/" className="underline underline-offset-2 hover:text-canvas transition-colors">
              See if you qualify for the free amnesty ledger check
            </a>
            .
          </p>
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
                What you could be facing without the amnesty
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
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
                These penalties and interest accrue automatically in the KRA iTax system. If your
                debt accrued before 2026, the amnesty can wipe them out in full — the faster you
                act, the less you pay.
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
            What the free check covers.
          </h2>
          <p className="text-[0.9rem] text-ink-muted max-w-[48ch] leading-relaxed mb-10">
            Free to check. Flat fee only if you need us to file or structure a plan. No success-fee extras.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
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
            Three steps to your tax amnesty cleanup.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
            What we can clean up
          </p>
          <h2 id="penalties-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-4 text-balance">
            Old penalties the amnesty can wipe out.
          </h2>
          <p className="text-[0.9rem] text-ink-muted max-w-[52ch] leading-relaxed mb-10">
            If you have any of the following on your iTax ledger from before 2026, the amnesty can
            waive them in full — we&apos;ll confirm your exact position with the free check.
          </p>
          <div className="grid grid-cols-2 gap-4 lg:gap-5">
            {[
              {
                icon: Warning,
                title: "Late filing penalties",
                desc: "Filed a VAT return after the 20th? KRA charges KES 10,000 per late return. If the debt accrued before 2026, the amnesty can waive it once returns are filed.",
              },
              {
                icon: FileText,
                title: "Non-registration penalties",
                desc: "Did not register for VAT when you crossed the KES 5 million threshold? The penalty can reach KES 100,000 — waivable under the amnesty for pre-2026 debt.",
              },
              {
                icon: SealCheck,
                title: "eTIMS non-compliance penalties",
                desc: "Failure to integrate with eTIMS or issue e-invoices can attract penalties. The amnesty covers pre-2026 obligations before you get your eTIMS house in order.",
              },
              {
                icon: Clock,
                title: "Late payment interest & fines",
                desc: "Unpaid VAT accrues interest at 1% per month compounded. Pre-2026 interest and fines are waived once principal is cleared by 31 December 2026.",
              },
            ].map((p) => (
              <div key={p.title} className="bg-canvas-alt border border-hairline rounded-lg p-5 lg:p-6 flex items-start gap-4">
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

      {/* ── Mid-page CTA ───────────────────────────────────── */}
      <section className="bg-brand-muted px-6 lg:px-10 py-12">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-[1.1rem] font-semibold text-ink">
              Free check — clean up before 31 December 2026
            </p>
            <p className="text-[0.85rem] text-ink-muted mt-1">
              Free ledger check. Flat fee for any cleanup. M-PESA accepted.
            </p>
          </div>
          <a
            href={`${WA_BASE} data-track="whatsapp-cta"?text=${WA_TEXT}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors shrink-0"
          >
            Get my free ledger check
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
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
            Common questions about the 2026 tax amnesty.
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
            Ready to clear your KRA penalties before the deadline?
          </h2>
          <p className="text-[0.93rem] text-canvas/65 max-w-[44ch] mx-auto leading-relaxed mb-8">
            Send us a WhatsApp message and we will start your free ledger check — the window closes
            on 31 December 2026.
          </p>
          <a
            href={`${WA_BASE} data-track="whatsapp-cta"?text=${WA_TEXT}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-6 py-3.5 rounded-md hover:bg-brand-hover transition-colors"
          >
            <WhatsappLogo size={16} weight="fill" aria-hidden="true" />
            Get my free ledger check
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
          <p className="text-[0.75rem] text-canvas/45 mt-5">
            Free check. Flat fee for any cleanup. M-PESA accepted.
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
