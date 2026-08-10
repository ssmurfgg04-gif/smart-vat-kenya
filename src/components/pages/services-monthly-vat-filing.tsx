import {
  ArrowRight,
  CalendarBlank,
  CheckCircle,
  ChatCircle,
  Clock,
  CurrencyDollar,
  FileText,
  Phone,
  Prohibit,
  SealCheck,
  ShieldCheck,
  CaretRight,
} from "@phosphor-icons/react/dist/ssr"
import { Testimonials } from "@/components/testimonials"
import { NewsletterSignup } from "@/components/newsletter-signup"

const WA_BASE = "https://wa.me/254721725958"
const WA_TEXT = "Hi%2C%20I%20want%20the%20KES%203500%20Monthly%20VAT%20Filing%20service"

const features = [
  { Icon: CalendarBlank, label: "Filed by the 20th — always" },
  { Icon: CheckCircle, label: "We file on the 17th, not the 20th" },
  { Icon: ShieldCheck, label: "Avoids KES 10,000 late penalty" },
  { Icon: CurrencyDollar, label: "M-PESA payment guidance" },
  { Icon: Phone, label: "WhatsApp filing confirmation" },
  { Icon: ChatCircle, label: "Dedicated support line" },
  { Icon: Clock, label: "Monthly reminder & confirmation" },
]

const steps = [
  { num: "01", title: "Send us your KRA PIN", desc: "Share your KRA PIN and VAT details via WhatsApp. We handle everything from there." },
  { num: "02", title: "We file on iTax on the 17th", desc: "Your VAT return is prepared and submitted on iTax before the 17th — three days ahead of the deadline." },
  { num: "03", title: "You get confirmation", desc: "We send you the KRA filing confirmation receipt via WhatsApp the same day. You are done for the month." },
]

const comparisons = [
  { criterion: "Time spent on iTax portal", us: "2 minutes on WhatsApp", them: "Hours navigating iTax" },
  { criterion: "Stress of deadline", us: "We handle it", them: "You chase the 20th" },
  { criterion: "Risk of KES 10,000 penalty", us: "Filed on 17th — zero risk", them: "Always at risk" },
  { criterion: "Portal errors & downtime", us: "We deal with iTax", them: "You deal with it" },
  { criterion: "Payment", us: "M-PESA — 30 seconds", them: "Filing fees + bank charges" },
  { criterion: "Filing confirmation", us: "Sent to you on WhatsApp", them: "You download from iTax" },
]

const faqs = [
  {
    q: "What if I miss the 20th?",
    a: "We never miss it. We file on the 17th, three full working days before the KRA deadline — that buffer is our process, not a hope. If KRA rejects a return for any reason, we fix it and resubmit at no extra cost. That's a process we control, which is a better promise than paying a fine after the fact.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No lock-in contracts. Send us a WhatsApp message and your monthly filings stop from the next cycle. No questions asked.",
  },
  {
    q: "How do I pay?",
    a: "M-PESA is our primary payment method. We send you a payment request each month before filing. You pay, we file. Simple.",
  },
  {
    q: "Do I need to do anything each month?",
    a: "Just send your sales and purchase invoices for the month. We take it from there — we calculate the VAT, file on iTax, and send you the confirmation. It takes about 2 minutes of your time.",
  },
  {
    q: "What if my VAT liability is zero (nil return)?",
    a: "No problem. We still file a nil return on iTax before the 20th. Filing a nil return is just as important as filing a payable one — KRA still penalises KES 10,000 for missing a nil return deadline.",
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

export default function MonthlyVatFilingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://smartvatkenya.co.ke/services/monthly-vat-filing#service",
    name: "Monthly VAT Filing Kenya",
    description:
      "Monthly iTax VAT return filing before the 20th KRA deadline. KES 3,500 per month. Avoids KES 10,000 late penalty.",
    provider: { "@type": "Organization", name: "Smart VAT Kenya" },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://smartvatkenya.co.ke/services" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Monthly VAT Filing",
        item: "https://smartvatkenya.co.ke/services/monthly-vat-filing/",
      },
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

      {/* Header */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">
            Monthly VAT Filing
          </p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            Monthly VAT Filing Kenya.{" "}
            <span className="text-canvas/70 font-normal">KES 3,500/mo. Filed before the 20th.</span>
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[50ch] leading-relaxed mb-6">
            We file your iTax VAT return on the 17th every month — well before the KRA deadline.
            No more rushing, no more KES 10,000 late penalties. Just send us your invoices and
            we handle the rest.
          </p>
          <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Trust signals">
            <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-canvas/80 bg-canvas/10 rounded-full px-3 py-1.5">
              <CheckCircle size={12} weight="fill" className="text-brand" aria-hidden="true" />
              M-PESA accepted
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-canvas/80 bg-canvas/10 rounded-full px-3 py-1.5">
              <CheckCircle size={12} weight="fill" className="text-brand" aria-hidden="true" />
              No lock-in, cancel anytime
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-canvas/80 bg-canvas/10 rounded-full px-3 py-1.5">
              <CalendarBlank size={12} weight="fill" className="text-brand" aria-hidden="true" />
              Deadline: 20th of each month
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
            Start Monthly Filing
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* What's included */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="included-heading">
        <div className="max-w-[1400px] mx-auto">
          <h2 id="included-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-10 text-balance">
            What&apos;s included
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {features.map(({ Icon, label }) => (
              <li key={label} className="flex items-start gap-3 bg-canvas border border-hairline rounded-lg p-4">
                <Icon size={18} weight="duotone" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-[0.88rem] text-ink-muted leading-snug">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-canvas-alt px-6 lg:px-10 py-16" aria-labelledby="process-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            How it works
          </p>
          <h2 id="process-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-12 text-balance">
            Three steps, done every month.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative bg-canvas border border-hairline rounded-lg p-8">
                <span className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-3 block">
                  Step {step.num}
                </span>
                <h3 className="font-display text-[1.1rem] font-semibold text-ink mb-3">{step.title}</h3>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <CaretRight size={20} weight="bold" className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-ink-muted/30" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="compare-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Filing with us vs. doing it yourself
          </p>
          <h2 id="compare-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-10 text-balance">
            The real cost of DIY VAT filing
          </h2>
          <div className="border border-hairline rounded-lg overflow-hidden">
            <table className="w-full text-left" role="table">
              <thead>
                <tr className="border-b border-hairline">
                  <th className="px-5 py-3.5 text-[0.75rem] font-medium text-ink-muted w-1/3">Criterion</th>
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
              KES 3,500/month — filed before the 20th
            </p>
            <p className="text-[0.85rem] text-ink-muted mt-1">
              No lock-in. Cancel anytime. We file on the 17th so you never miss the deadline.
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
      <Testimonials />

      {/* FAQ */}
      <section className="bg-canvas-alt px-6 lg:px-10 py-16" aria-labelledby="faq-heading">
        <div className="max-w-[800px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            FAQ
          </p>
          <h2 id="faq-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-10 text-balance">
            Questions about monthly VAT filing.
          </h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="bg-canvas border border-hairline rounded-lg group open:border-ink-muted/30 transition-colors">
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-display text-[0.93rem] font-medium text-ink list-none marker:hidden [&::-webkit-details-marker]:hidden">
                  {q}
                  <span className="shrink-0 text-ink-muted/50 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-[0.85rem] text-ink-muted leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-canvas px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto border-t border-hairline pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-[1.05rem] font-semibold text-ink mb-1">
              Start your monthly filing today
            </p>
            <p className="text-[0.85rem] text-ink-muted">
              KES 3,500/month. No lock-in. Cancel anytime.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`${WA_BASE}?text=${WA_TEXT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
            >
              Get started
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
            <a
              href="/services/"
              className="inline-flex items-center gap-2 border border-hairline text-ink-muted hover:text-ink hover:border-ink-muted text-sm font-medium px-5 py-3 rounded-md transition-colors"
            >
              View all services
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-canvas-alt px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <NewsletterSignup />
        </div>
      </section>
    </>
  )
}
