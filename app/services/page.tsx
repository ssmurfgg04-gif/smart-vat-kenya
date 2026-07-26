import type { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"
import Link from "next/link"
import Script from "next/script"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  ChatCircle,
  FileText,
  Prohibit,
  CurrencyDollar,
  SealCheck,
} from "@phosphor-icons/react/dist/ssr"
import { Testimonials } from "@/components/testimonials"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { RelatedLinks } from "@/components/related-links"

export const metadata: Metadata = constructMetadata({
  title: "VAT Registration Services Kenya | Pricing | KRA VAT Filing",
  absoluteTitle: true,
  description:
    "Professional VAT registration services in Kenya from KES 5,000 — includes eTIMS onboarding guidance. Monthly iTax VAT filing KES 3,500/month filed before the 20th. KRA penalty waiver KES 4,000. M-PESA accepted.",
  path: "/services",
  keywords: [
    "vat registration services kenya",
    "vat registration kenya price",
    "how much does vat registration cost in kenya",
    "monthly vat filing kenya",
    "itax vat filing service",
    "etims onboarding kenya",
    "etims vat compliance kenya",
    "kra vat registration cost",
  ],
})

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Smart VAT Kenya Services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "VAT Registration Services Kenya",
        description:
          "Complete VAT registration on KRA iTax including iTax profile update, Form VAT 1, and PIN generation. Done in 1–3 working days.",
        offers: { "@type": "Offer", price: "5000", priceCurrency: "KES" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Monthly VAT Filing Kenya",
        description:
          "Monthly iTax VAT return filing before the 20th KRA deadline. Avoids KES 10,000 late penalty.",
        offers: { "@type": "Offer", price: "3500", priceCurrency: "KES" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "KRA Penalty Waiver Application",
        description:
          "Drafting and submission of KRA penalty waiver request for outstanding VAT penalties.",
        offers: { "@type": "Offer", price: "4000", priceCurrency: "KES" },
      },
    },
  ],
}

const serviceFaqs = [
  {
    q: "How much do VAT registration services cost in Kenya?",
    a: "Smart VAT Kenya charges a flat KES 5,000 for complete KRA VAT registration on iTax, including the iTax profile update, Form VAT 1, PIN generation, and eTIMS onboarding guidance. Monthly VAT filing is KES 3,500 per month and a KRA penalty waiver application is KES 4,000.",
    href: "/services/vat-registration",
    linkLabel: "See what the KES 5,000 VAT registration includes",
  },
  {
    q: "How long does KRA VAT registration take?",
    a: "Most registrations are completed in 1–3 working days once we have your KRA PIN, ID copy, and business details. Delays usually come from iTax profile errors or missing supporting documents, which we fix on your behalf.",
    href: "/resources/how-to-register-for-vat-in-kenya",
    linkLabel: "Read the step-by-step iTax VAT registration guide",
  },
  {
    q: "When is the monthly VAT return due in Kenya?",
    a: "VAT returns and payment are due by the 20th of the month following the tax period. We file client returns on the 17th so there is room to fix iTax errors before the KRA deadline. Late filing costs the higher of KES 10,000 or 5% of the tax due, plus 1% monthly interest.",
    href: "/services/monthly-vat-filing",
    linkLabel: "Monthly VAT filing service — KES 3,500/month",
  },
  {
    q: "Do you handle eTIMS onboarding and KRA penalties too?",
    a: "Yes. eTIMS onboarding guidance is included with every registration, and we also handle standalone eTIMS onboarding and KRA penalty waiver applications for businesses that already have outstanding VAT penalties.",
    href: "/services/kra-penalty-waiver",
    linkLabel: "KRA penalty waiver application — KES 4,000",
  },
]

const serviceFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: serviceFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

const WA_BASE = "https://wa.me/254721725958"

const services = [
  {
    id: "registration",
    label: "One-time",
    title: "VAT Registration Kenya",
    price: "KES 5,000",
    period: "flat fee, paid once",
    featured: false,
    waText: "I%20want%20the%20KES%205000%20VAT%20Registration%20service",
    summary:
      "End-to-end iTax VAT registration. We handle the portal, you get your VAT PIN in 1–3 working days.",
    features: [
      "iTax profile update",
      "VAT Form 1 completion",
      "PIN generation and delivery",
      "eTIMS onboarding guidance included",
      "1–3 working days",
      "Taxpayer education session",
      "M-PESA receipt provided",
    ],
    cta: "Start Registration",
  },
  {
    id: "filing",
    label: "Recurring",
    title: "Monthly VAT Filing",
    price: "KES 3,500",
    period: "per month",
    featured: true,
    waText: "I%20want%20the%20KES%203500%20Monthly%20VAT%20Filing%20service",
    summary:
      "Filed before the 20th, every month — without you having to think about it. We file on the 17th.",
    features: [
      "Filed by the 20th — always",
      "We file on the 17th, not the 20th",
      "Avoids KES 10,000 late penalty",
      "M-PESA payment guidance",
      "WhatsApp filing confirmation",
      "Dedicated support line",
    ],
    cta: "Start Filing",
  },
  {
    id: "waiver",
    label: "Per application",
    title: "KRA Penalty Waiver",
    price: "KES 4,000",
    period: "per application",
    featured: false,
    waText: "I%20need%20help%20with%20a%20KRA%20Penalty%20Waiver%20application",
    summary:
      "Outstanding KRA VAT penalties? We draft and submit your waiver application to KRA.",
    features: [
      "Penalty waiver letter drafted",
      "KRA portal submission",
      "WhatsApp status updates",
      "Expert guidance throughout",
      "No success-fee extras",
    ],
    cta: "Request Help",
  },
]

const comparisons = [
  { criterion: "Price",                  us: "KES 3,500–5,000",          them: "KES 15,000–30,000" },
  { criterion: "Communication",          us: "WhatsApp",                  them: "Email / scheduled calls" },
  { criterion: "Turnaround",             us: "1–3 working days",          them: "1–3 weeks" },
  { criterion: "Payment",                us: "M-PESA",                    them: "Bank transfer / cheque" },
  { criterion: "eTIMS guidance",         us: "Included with registration", them: "Charged separately or not offered" },
  { criterion: "Hidden fees",            us: "None",                      them: "Often yes" },
  { criterion: "Late-filing guarantee",  us: "Filed by 17th always",      them: "Varies" },
  { criterion: "KRA Special Table risk", us: "Flagged proactively",        them: "Not monitored" },
]

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://smartvatkenya.co.ke/services" },
    ],
  }

  return (
    <>
      <Script id="services-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="services-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceFaqSchema) }} />

      {/* Header */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">
            Services &amp; pricing
          </p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            VAT Registration Services Kenya.
            <span className="text-canvas/70 font-normal">{" Published prices. No discovery calls."}</span>
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[50ch] leading-relaxed">
            Every service has a fixed price you can see before you even message us.
            No quoting. No negotiation. No surprises.
          </p>
          <div className="flex flex-wrap gap-2 mt-6" role="list" aria-label="Trust signals">
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
        </div>
      </div>

      {/* Services grid */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="services-heading">
        <div className="max-w-[1400px] mx-auto">
          <h2 id="services-heading" className="sr-only">Our VAT services and pricing</h2>

          <div className="grid lg:grid-cols-[1fr_1fr_320px] gap-5">
            {services.map((s) => (
              <article
                key={s.id}
                className={`rounded-lg p-8 flex flex-col ${
                  s.featured
                    ? "bg-canvas-dark"
                    : "bg-canvas border border-hairline"
                }`}
              >
                {s.featured && (
                  <span className="self-start font-mono text-[0.6rem] uppercase tracking-widest bg-brand text-canvas px-2.5 py-1 rounded-sm mb-4">
                    Most popular
                  </span>
                )}
                <p
                  className={`font-mono text-[0.63rem] uppercase tracking-widest mb-3 ${
                    s.featured ? "text-canvas/55" : "text-ink-muted"
                  }`}
                >
                  {s.label}
                </p>
                <h3
                  className={`font-display text-[1.15rem] font-semibold mb-2 ${
                    s.featured ? "text-canvas" : "text-ink"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`text-[0.83rem] leading-relaxed mb-6 ${
                    s.featured ? "text-canvas/70" : "text-ink-muted"
                  }`}
                >
                  {s.summary}
                </p>
                <p
                  className={`font-display text-[2.4rem] font-semibold leading-none mb-1 tabular-nums ${
                    s.featured ? "text-canvas" : "text-ink"
                  }`}
                >
                  {s.price}
                </p>
                <p
                  className={`text-[0.75rem] mb-8 ${
                    s.featured ? "text-canvas/55" : "text-ink-muted"
                  }`}
                >
                  {s.period}
                </p>
                <ul className="space-y-2.5 flex-1 mb-8" role="list">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 text-[0.83rem] ${
                        s.featured ? "text-canvas/80" : "text-ink-soft"
                      }`}
                    >
                      <CheckCircle
                        size={13}
                        weight="fill"
                        className={`shrink-0 mt-0.5 ${
                          s.featured ? "text-canvas/45" : "text-ink-muted"
                        }`}
                        aria-hidden="true"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${WA_BASE}?text=${s.waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-fill block text-center text-sm font-semibold py-3 rounded-md transition-colors ${
                    s.featured
                      ? "bg-brand text-canvas hover:bg-brand-hover"
                      : "border border-ink text-ink hover:bg-ink hover:text-canvas"
                  }`}
                >
                  {s.cta}
                </a>
              </article>
            ))}
          </div>

          <p className="mt-5 text-[0.75rem] text-ink-muted">
            All prices in Kenyan Shillings (KES). M-PESA receipt provided for every payment.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-canvas-alt px-6 lg:px-10 py-16" aria-labelledby="compare-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            How we compare
          </p>
          <h2
            id="compare-heading"
            className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-10 text-balance"
          >
            Smart VAT Kenya vs. traditional VAT facilitators
          </h2>

          <div className="border border-hairline rounded-lg overflow-hidden">
            <table className="w-full text-left" role="table">
              <thead>
                <tr className="border-b border-hairline">
                  <th className="px-5 py-3.5 text-[0.75rem] font-medium text-ink-muted w-1/3">Criterion</th>
                  <th className="px-5 py-3.5 text-[0.75rem] font-medium text-ink w-1/3 bg-canvas">Smart VAT Kenya</th>
                  <th className="px-5 py-3.5 text-[0.75rem] font-medium text-ink-muted w-1/3">Other facilitators</th>
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

      {/* What is included */}
      <section className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/55 mb-4">
              Included in every service
            </p>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-canvas tracking-tight mb-6 text-balance">
              Transparency is part of the service.
            </h2>
            <p className="text-[0.93rem] text-canvas/70 leading-relaxed max-w-[44ch]">
              Every engagement includes a clear WhatsApp paper trail, M-PESA receipts, and delivery
              confirmation. Nothing is outsourced or hidden.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-4" role="list">
            {[
              { Icon: ChatCircle,     label: "WhatsApp updates throughout" },
              { Icon: CurrencyDollar, label: "M-PESA receipt every time" },
              { Icon: Prohibit,       label: "No hidden fees, ever" },
              { Icon: Clock,          label: "Deadlines met by default" },
              { Icon: FileText,       label: "Filing confirmation sent to you" },
              { Icon: SealCheck,      label: "100% iTax compliant process" },
            ].map(({ Icon, label }) => (
              <li key={label} className="flex items-start gap-3">
                <Icon size={16} weight="duotone" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-[0.83rem] text-canvas/70 leading-snug">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service FAQ */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="services-faq-heading">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[360px_1fr] gap-16">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
              Pricing questions
            </p>
            <h2
              id="services-faq-heading"
              className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold tracking-tight text-ink leading-tight text-balance"
            >
              What Kenyan businesses ask before they hire us
            </h2>
          </div>
          <div className="divide-y divide-hairline">
            {serviceFaqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <span className="font-display text-[0.95rem] font-semibold text-ink leading-snug group-open:text-brand transition-colors">
                    {faq.q}
                  </span>
                  <svg className="w-4 h-4 shrink-0 mt-1 text-ink-muted group-open:rotate-180 transition-transform" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className="mt-3 pb-1">
                  <p className="text-[0.875rem] text-ink-muted leading-relaxed">{faq.a}</p>
                  <Link
                    href={faq.href}
                    className="inline-flex items-center gap-1.5 mt-3 text-[0.82rem] font-medium text-brand hover:underline underline-offset-4"
                  >
                    {faq.linkLabel}
                    <ArrowRight size={12} weight="bold" aria-hidden="true" />
                  </Link>
                </div>
              </details>
            ))}
            <div className="pt-8">
              <RelatedLinks
                heading="Related guides"
                links={[
                  { href: "/resources/vat-registration-checklist", label: "VAT registration document checklist", description: "Everything KRA asks for before your application goes through." },
                  { href: "/resources/kra-vat-penalties-reference", label: "KRA VAT penalties reference", description: "Late filing, late payment, non-registration, and eTIMS fines." },
                  { href: "/resources/etims-onboarding-guide", label: "eTIMS onboarding guide", description: "Which eTIMS option fits your business and how to get compliant." },
                  { href: "/tools", label: "Free KRA VAT calculator", description: "16% VAT, reverse VAT, and penalty estimates — no sign-up." },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-canvas-alt px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <Testimonials />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-canvas px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto border-t border-hairline pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-[1.05rem] font-semibold text-ink mb-1">
              Ready to get started?
            </p>
            <p className="text-[0.85rem] text-ink-muted">
              Send a WhatsApp message and we will have your VAT process running within the hour.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`${WA_BASE}?text=Hi%2C%20I%20want%20to%20get%20started%20with%20VAT%20registration.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
            >
              Get started
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 border border-hairline text-ink-muted hover:text-ink hover:border-ink-muted text-sm font-medium px-5 py-3 rounded-md transition-colors"
            >
              How it works
            </Link>
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
