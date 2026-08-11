import {
  ArrowRight,
  CheckCircle,
  ChatCircle,
  FileText,
  SealCheck,
  Lock,
  Clock,
  CurrencyDollar,
} from "@phosphor-icons/react/dist/ssr"
import { FACTS } from "@/src/lib/vat-facts"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "How It Works", item: "https://smartvatkenya.co.ke/how-it-works" },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get VAT Registration in Kenya via WhatsApp",
  description: "Register for KRA VAT or file monthly returns in 3 simple steps — all via WhatsApp. No iTax login required.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "WhatsApp Us",
      text: "Send your business name, KRA PIN, and a copy of your national ID over WhatsApp. No forms to fill, no portals to navigate.",
      url: "https://smartvatkenya.co.ke/how-it-works",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "We Handle iTax",
      text: "Our team logs into the KRA iTax portal and processes your VAT registration or monthly return on your behalf. You get WhatsApp updates at every stage.",
      url: "https://smartvatkenya.co.ke/how-it-works",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "You Get Peace of Mind",
      text: "Your VAT PIN or filing receipt is delivered straight to your WhatsApp along with your M-PESA receipt. You stay compliant without lifting a finger.",
      url: "https://smartvatkenya.co.ke/how-it-works",
    },
  ],
}

const steps = [
  {
    number: "01",
    Icon: ChatCircle,
    title: "WhatsApp Us",
    description:
      "Send us your business name, KRA PIN, and a copy of your national ID over WhatsApp. No forms to fill, no portals to navigate — just a single message.",
    details: [
      "Send your KRA PIN certificate",
      "Send a copy of your national ID",
      "Tell us your business name and address",
      "No portal login needed from you",
    ],
  },
  {
    number: "02",
    Icon: FileText,
    title: "We Handle iTax",
    description:
      "Our team logs into the KRA iTax portal and processes your VAT registration or monthly return on your behalf. You get WhatsApp updates at every stage.",
    details: [
      "KRA iTax portal — handled for you",
      "WhatsApp updates at every stage",
      "Secure credential handling",
      "Completed within agreed timeline",
    ],
  },
  {
    number: "03",
    Icon: SealCheck,
    title: "You Get Peace of Mind",
    description:
      "Your VAT PIN or filing receipt is delivered straight to your WhatsApp — along with your M-PESA receipt for our fee. You stay compliant without lifting a finger.",
    details: [
      "PIN or filing receipt via WhatsApp",
      "M-PESA receipt for our fee",
      "Compliance confirmation on record",
      "Ongoing support for follow-ups",
    ],
  },
]

const guarantees = [
  {
    Icon: Lock,
    title: "Secure and Confidential",
    desc: "Your KRA credentials are used only to process your specific request and never stored beyond the engagement.",
  },
  {
    Icon: Clock,
    title: "Fast Turnaround",
    desc: "VAT registration completed in 1–3 working days. Monthly filings always submitted before the 20th deadline.",
  },
  {
    Icon: CurrencyDollar,
    title: "M-PESA Only",
    desc: "We accept M-PESA for all payments. You pay only after we confirm we can help — and you always get a receipt.",
  },
  {
    Icon: ChatCircle,
    title: "WhatsApp Throughout",
    desc: "All communication happens on WhatsApp. No emails, no portals. Just your phone.",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="bg-canvas min-h-[100dvh]">
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="howto-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* Header */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">
            Process
          </p>
          <p className="font-mono text-[0.7rem] text-brand mb-6">
            Last verified {new Date(FACTS.lastVerified).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} against KRA guidance
          </p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            Three steps. Zero portal headaches.
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[48ch] leading-relaxed">
            From WhatsApp message to VAT PIN — or filed return — without you ever logging
            into KRA iTax.
          </p>
        </div>
      </div>

      {/* Steps */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="steps-heading">
        <div className="max-w-[1400px] mx-auto">
          <h2 id="steps-heading" className="sr-only">How it works — 3 steps</h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {steps.map(({ number, Icon, title, description, details }) => (
              <article key={number} className="border border-hairline rounded-lg p-4 sm:p-7 flex flex-col">
                <p className="font-display text-[2.25rem] sm:text-[3.5rem] font-semibold text-ink/10 leading-none mb-3 sm:mb-4 tabular-nums">
                  {number}
                </p>
                <Icon size={22} weight="duotone" className="text-brand mb-3 sm:mb-4" aria-hidden="true" />
                <h3 className="font-display text-[1.05rem] font-semibold text-ink mb-3">
                  {title}
                </h3>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed mb-6 flex-1">
                  {description}
                </p>
                <ul className="space-y-2" role="list">
                  {details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-[0.8rem] text-ink-soft">
                      <CheckCircle
                        size={12}
                        weight="fill"
                        className="text-ink-muted shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="bg-canvas-alt px-6 lg:px-10 py-16" aria-labelledby="guarantees-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Our commitments
          </p>
          <h2
            id="guarantees-heading"
            className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-10 text-balance"
          >
            What you can always expect from us
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {guarantees.map(({ Icon, title, desc }) => (
              <div key={title} className="border border-hairline rounded-lg p-4 lg:p-6 bg-canvas">
                <Icon size={20} weight="duotone" className="text-brand mb-3 lg:mb-4" aria-hidden="true" />
                <h3 className="font-display text-[0.9rem] font-semibold text-ink mb-2">{title}</h3>
                <p className="text-[0.8rem] text-ink-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-[clamp(1.3rem,2.5vw,1.8rem)] font-semibold text-canvas mb-2 text-balance">
              Ready to get started?
            </h2>
            <p className="text-[0.88rem] text-canvas/65 max-w-[40ch]">
              Send a WhatsApp message now. No commitment required — free advice first.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="https://wa.me/254717344440?text=Hi%2C%20I%20want%20to%20get%20started%20with%20Smart%20VAT%20Kenya."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
            >
              WhatsApp us now
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
            <a
              href="/services/"
              className="inline-flex items-center gap-2 border border-canvas/25 text-canvas/70 hover:text-canvas hover:border-canvas/50 text-sm font-medium px-5 py-3 rounded-md transition-colors"
            >
              View pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
