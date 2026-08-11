import {
  ArrowRight,
  CheckCircle,
  WarningCircle,
  DeviceMobile,
  Monitor,
  Cpu,
  ListChecks,
  NumberCircleOne,
  NumberCircleTwo,
  NumberCircleThree,
  SealCheck,
  Question,
  XCircle,
  ChatCircle,
  CurrencyDollar,
  Clock,
  FileText,
  Prohibit,
} from "@phosphor-icons/react/dist/ssr"
import { Testimonials } from "@/components/testimonials"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { FACTS } from "@/src/lib/vat-facts"

const WA_BASE = "https://wa.me/254717344440"
const WA_TEXT = "Hi%2C%20I%20need%20help%20with%20eTIMS%20onboarding"

const includedItems = [
  "eTIMS solution type consultation — we help you choose the right fit",
  "Registration on your chosen platform (mobile, web, or ERP)",
  "Test invoice issuance to confirm everything works",
  "QR code verification setup for your customers",
  "Staff guidance session (1 session, remote or onsite)",
  "Compliance check — no loose ends",
]

const solutions = [
  {
    Icon: DeviceMobile,
    title: "Mobile App (eTIMS Mobile)",
    for: "Best for SMEs & sole proprietors",
    body: "Free KRA mobile app for Android and iOS. No setup cost, no hardware. Issue eTIMS invoices directly from your phone with a few taps. Ideal if you issue fewer than 100 invoices per month and want the simplest possible path to compliance.",
  },
  {
    Icon: Monitor,
    title: "Web Portal (eTIMS Lite)",
    for: "Best for businesses with a laptop or desktop",
    body: "Browser-based eTIMS portal that works on any device with internet access. No installation required — log in, issue invoices, and manage your eTIMS account from any browser. Good for businesses that prefer working on a larger screen or have staff who share devices.",
  },
  {
    Icon: Cpu,
    title: "ERP Integration (eTIMS API)",
    for: "Best for large businesses with existing systems",
    body: "Direct API integration between KRA eTIMS and your existing ERP, accounting software, or point-of-sale system. Invoices flow automatically from your system to KRA without manual double-entry. Requires technical setup but eliminates human error at scale.",
  },
]

const steps = [
  {
    Icon: NumberCircleOne,
    title: "Tell us about your business",
    body: "We ask a few questions about your business size, invoice volume, and existing systems so we can recommend the right eTIMS solution type.",
  },
  {
    Icon: NumberCircleTwo,
    title: "We handle the registration",
    body: "We register you on your chosen eTIMS platform, configure your profile, and issue a test invoice to confirm KRA acceptance.",
  },
  {
    Icon: NumberCircleThree,
    title: "You start issuing compliant invoices",
    body: "We verify your QR codes, walk your team through the system, and leave you with a compliance checklist so you never miss a requirement.",
  },
]

const comparisons = [
  {
    criterion: "Solution selection",
    us: "Guided — we match you to the right platform",
    them: "Self-assessment, often choose wrong and restart",
  },
  {
    criterion: "Registration",
    us: "Done for you in 1–2 days",
    them: "Portal confusion, stuck at KRA help desk",
  },
  {
    criterion: "Testing",
    us: "Test invoice issued and verified before handoff",
    them: "No testing — first invoice may fail compliance",
  },
  {
    criterion: "Penalty risk",
    us: "Flagged and mitigated upfront",
    them: "Only discovered when KRA sends a notice",
  },
  {
    criterion: "Staff training",
    us: "1 session included",
    them: "Self-taught or paid separately",
  },
  {
    criterion: "Price",
    us: "KES 3,000 flat",
    them: "KES 8,000–25,000 + hidden charges",
  },
]

const faqs = [
  {
    q: "What is eTIMS and why do I need it?",
    a: "eTIMS (Electronic Tax Invoice Management System) is KRA's mandatory system for issuing electronic tax invoices in Kenya. If you are registered for VAT, you must issue eTIMS-compliant invoices for every sale to a registered person. A non-compliant invoice attracts the TPA s.86 penalty — since 1 July 2026, the higher of 5% of the tax due, KES 100,000 (companies), or KES 10,000 (individuals) — separate from any VAT penalties.",
  },
  {
    q: "Can I use the eTIMS mobile app for free?",
    a: "Yes. The eTIMS Mobile app is a free application published by KRA for Android and iOS. There is no cost to download or use it. Our KES 3,000 fee covers your registration, setup, test issuance, and staff training — not the app itself.",
  },
  {
    q: "How is eTIMS onboarding different from VAT registration?",
    a: "VAT registration gets you a VAT PIN on iTax. eTIMS onboarding sets up the system you use to issue compliant electronic invoices. If you have a VAT PIN but are not on eTIMS, you are non-compliant. We cover both — see our VAT registration page for the registration service.",
  },
  {
    q: "I already have an ERP. Can eTIMS integrate with it?",
    a: "Yes. KRA provides an API that can be integrated with most modern ERPs and accounting systems. We assess your current system and guide you through the integration process. Note that ERP integration may require developer resources on your side for the technical connection.",
  },
  {
    q: "How long does the onboarding process take?",
    a: "Most businesses are registered and issuing test invoices within 1–2 working days. ERP integrations take longer depending on your system's readiness. The staff guidance session is scheduled at your convenience after setup is complete.",
  },
  {
    q: "What happens after onboarding — do you provide ongoing support?",
    a: "Yes. Every onboarding includes a compliance check and one staff session. If you need ongoing support, we offer a monthly eTIMS compliance monitoring add-on (KES 1,500/month) that covers invoice audits, KRA notice responses, and deadline tracking.",
  },
  {
    q: "Are the eTIMS penalties really enforced?",
    a: "Yes. KRA has been actively enforcing eTIMS compliance since 2024. The legal bases are the Tax Procedures Act — TPA s.86 (since the Finance Act 2026, the higher of 5% of the tax due, KES 100,000 for companies, or KES 10,000 for individuals, for e-invoice failure) and TPA s.59A(5) (up to KES 100,000 per month for failing to integrate a data-management system after written notice, for turnover above KES 5 million). These are distinct from late-filing or late-payment penalties. We have seen businesses receive these assessments firsthand — do not ignore eTIMS compliance.",
  },
  {
    q: "Do I need a smartphone to use eTIMS?",
    a: "No. If you prefer not to use the mobile app, you can use the eTIMS Lite web portal from any computer with internet access. If you need neither, ERP integration is available. We help you choose the right option during the consultation.",
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

export default function ETIMSOnboardingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://smartvatkenya.co.ke/services" },
      { "@type": "ListItem", position: 3, name: "eTIMS Onboarding", item: "https://smartvatkenya.co.ke/services/etims-onboarding/" },
    ],
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "eTIMS Onboarding Kenya",
    description:
      "KRA eTIMS registration and onboarding in Kenya — KES 3,000. Solution type consultation, registration, test invoice, QR code setup, staff training, and compliance check.",
    provider: { "@type": "Organization", name: "Smart VAT Kenya" },
  }

  return (
    <>
      <script id="etims-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="etims-breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="etims-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">
            Service
          </p>
          <p className="font-mono text-[0.7rem] text-brand mb-6">
            Last verified {new Date(FACTS.lastVerified).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} against KRA guidance
          </p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            eTIMS Onboarding Kenya.{" "}
            <span className="text-canvas/70 font-normal">KES 3,000 flat.</span>
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[55ch] leading-relaxed mb-6">
            eTIMS is mandatory for every VAT-registered business in Kenya. We get you registered on the
            right platform — mobile app, web portal, or ERP integration — and make sure every invoice you
            issue passes KRA compliance. No portal confusion. No missed deadlines.
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
            href={`${WA_BASE}?text=${WA_TEXT}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Start onboarding
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Warning banner */}
      <div className="px-6 lg:px-10 py-4 bg-red-50 border-b border-red-200">
        <div className="max-w-[1400px] mx-auto flex items-start gap-3">
          <WarningCircle size={18} weight="fill" className="text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-[0.85rem] text-red-800 leading-relaxed">
            <strong className="font-semibold">TPA s.86</strong> e-invoice failure penalties (higher of 5% of the tax due, KES 100,000 for companies, or KES 10,000 for individuals, since 1 July 2026), and <strong className="font-semibold">up to KES 100,000 per month</strong> for system non-integration after a written notice (TPA s.59A(5)) — separate from VAT penalties. KRA has been actively enforcing this since 2024.
          </p>
        </div>
      </div>

      {/* What's included */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="included-heading">
        <div className="max-w-[1400px] mx-auto grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
              What is included
            </p>
            <h2 id="included-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-6 text-balance">
              Everything you need to go live with eTIMS.
            </h2>
            <p className="text-[0.93rem] text-ink-muted leading-relaxed max-w-[44ch]">
              KES 3,000 covers the full onboarding process — from choosing the right solution type
              through to issuing your first compliant invoice. No add-ons, no upsells.
            </p>
            <a
              href={`${WA_BASE}?text=${WA_TEXT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors mt-6"
            >
              Start onboarding
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>
          <ul className="space-y-4" role="list">
            {includedItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-[0.88rem] text-ink-muted leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solution types */}
      <section className="bg-canvas-alt px-6 lg:px-10 py-16" aria-labelledby="solutions-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Choose your eTIMS solution
          </p>
          <h2 id="solutions-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-4 text-balance">
            Three ways to comply. One price.
          </h2>
          <p className="text-[0.93rem] text-ink-muted leading-relaxed max-w-[55ch] mb-10">
            Every business is different. We help you pick the right eTIMS solution for your size, volume,
            and existing setup — then get you registered and running.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {solutions.map(({ Icon, title, for: forText, body }) => (
              <article key={title} className="bg-canvas border border-hairline rounded-lg p-8 flex flex-col">
                <Icon size={28} weight="duotone" className="text-brand mb-4" aria-hidden="true" />
                <h3 className="font-display text-[1.05rem] font-semibold text-ink mb-1">{title}</h3>
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-brand mb-4">{forText}</p>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed flex-1">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-canvas-dark px-6 lg:px-10 py-16" aria-labelledby="process-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/55 mb-4">
            Process
          </p>
          <h2 id="process-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-canvas tracking-tight mb-4 text-balance">
            Three steps to eTIMS compliance.
          </h2>
          <p className="text-[0.93rem] text-canvas/70 leading-relaxed max-w-[55ch] mb-10">
            From first message to compliant invoicing — here is exactly how it works.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {steps.map(({ Icon, title, body }, i) => (
              <div key={title} className="flex flex-col">
                <Icon size={32} weight="duotone" className="text-brand mb-3" aria-hidden="true" />
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-[0.6rem] uppercase tracking-widest text-canvas/40">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-[1.05rem] font-semibold text-canvas mb-2">{title}</h3>
                <p className="text-[0.85rem] text-canvas/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison vs DIY */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="compare-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Smart VAT vs. doing it yourself
          </p>
          <h2 id="compare-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-4 text-balance">
            Why risk getting it wrong?
          </h2>
          <p className="text-[0.93rem] text-ink-muted leading-relaxed max-w-[55ch] mb-10">
            eTIMS setup looks simple on paper, but choosing the wrong solution type or missing a
            configuration step can mean invoices that fail compliance — and notices from KRA.
          </p>
          <div className="border border-hairline rounded-lg overflow-hidden">
            <table className="w-full text-left" role="table">
              <thead>
                <tr className="border-b border-hairline">
                  <th className="px-5 py-3.5 text-[0.75rem] font-medium text-ink-muted w-1/3">Area</th>
                  <th className="px-5 py-3.5 text-[0.75rem] font-medium text-ink w-1/3 bg-canvas">Smart VAT Kenya</th>
                  <th className="px-5 py-3.5 text-[0.75rem] font-medium text-ink-muted w-1/3">Doing it yourself</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {comparisons.map(({ criterion, us, them }) => (
                  <tr key={criterion}>
                    <td className="px-5 py-4 text-[0.83rem] text-ink-muted">{criterion}</td>
                    <td className="px-5 py-4 text-[0.83rem] font-medium text-ink bg-canvas">{us}</td>
                    <td className="px-5 py-4 text-[0.83rem] text-ink-muted">{them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-brand-muted px-6 lg:px-10 py-12">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-[1.1rem] font-semibold text-ink">
              KES 3,000 — get eTIMS compliant today
            </p>
            <p className="text-[0.85rem] text-ink-muted mt-1">
              Avoid the multi-million-shilling eTIMS penalties. We handle everything. M-PESA accepted.
            </p>
          </div>
          <a
            href={`${WA_BASE}?text=${WA_TEXT}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors shrink-0"
          >
            Get started on WhatsApp
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-canvas-alt px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <Testimonials />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="faq-heading">
        <div className="max-w-[800px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">FAQ</p>
          <h2 id="faq-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-10 text-balance">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-hairline rounded-lg overflow-hidden">
                <summary className="flex items-start justify-between gap-4 cursor-pointer px-5 py-4 text-[0.9rem] font-medium text-ink hover:bg-canvas-alt transition-colors list-none marker:hidden">
                  <span>{q}</span>
                  <Question size={14} weight="bold" className="text-ink-muted shrink-0 mt-0.5 group-open:rotate-90 transition-transform" aria-hidden="true" />
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-[0.85rem] text-ink-muted leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] font-semibold text-canvas tracking-tight mb-3 text-balance">
            Ready to get eTIMS compliant?
          </h2>
          <p className="text-[0.93rem] text-canvas/70 leading-relaxed max-w-[48ch] mx-auto mb-8">
            KES 3,000 flat. No hidden fees. No discovery call. Send us a WhatsApp message and we will
            have you issuing compliant eTIMS invoices within 1–2 days.
          </p>
          <a
            href={`${WA_BASE}?text=${WA_TEXT}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-6 py-3.5 rounded-md hover:bg-brand-hover transition-colors"
          >
            Start onboarding on WhatsApp
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-canvas px-6 lg:px-10 py-16">
        <div className="max-w-[580px] mx-auto">
          <NewsletterSignup />
        </div>
      </section>
    </>
  )
}
