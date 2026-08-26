import {
  ArrowRight,
  CheckCircle,
  ChatCircle,
  FileText,
  Clock,
  CurrencyDollar,
  Prohibit,
  SealCheck,
} from "@phosphor-icons/react/dist/ssr"
import { Testimonials } from "@/components/testimonials"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { FACTS } from "@/src/lib/vat-facts"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://smartvatkenya.co.ke/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "VAT Registration",
      item: "https://smartvatkenya.co.ke/services/vat-registration/",
    },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://smartvatkenya.co.ke/services/vat-registration",
  name: "VAT Registration Services Kenya",
  description:
    "Professional KRA VAT registration in Kenya — KES 5,000 flat fee, done in 1–3 working days. iTax VAT Form 1, PIN generation, and eTIMS guidance included. M-PESA accepted. No hidden costs.",
  provider: { "@type": "Organization", name: "Smart VAT Kenya" },
}

const WA_BASE = "https://wa.me/254717344440"

const inclusions = [
  "iTax profile update",
  "VAT Form 1 completion and submission",
  "PIN generation and delivery",
  "1–3 working days turnaround",
  "eTIMS onboarding guidance",
  "Taxpayer education session",
  "M-PESA receipt provided",
]

const steps = [
  {
    number: "01",
    Icon: ChatCircle,
    title: "WhatsApp Us",
    description:
      "Send your business name, KRA PIN, and a copy of your national ID over WhatsApp. We take it from there — no forms, no portals.",
    details: [
      "Send KRA PIN certificate",
      "Share a copy of your national ID",
      "Provide business name and address",
      "No iTax login required from you",
    ],
  },
  {
    number: "02",
    Icon: FileText,
    title: "We Handle iTax",
    description:
      "We log into the KRA iTax portal, update your profile, complete VAT Form 1, and submit your application. You get WhatsApp updates at every stage.",
    details: [
      "KRA iTax portal — fully handled",
      "Profile update completed",
      "VAT Form 1 submitted",
      "WhatsApp updates throughout",
    ],
  },
  {
    number: "03",
    Icon: SealCheck,
    title: "You Get Your PIN",
    description:
      "Your VAT PIN is delivered straight to your WhatsApp along with your M-PESA receipt. We also walk you through eTIMS onboarding so you are fully compliant.",
    details: [
      "VAT PIN via WhatsApp",
      "M-PESA receipt for our fee",
      "eTIMS onboarding walkthrough",
      "Ongoing support for follow-ups",
    ],
  },
]

const comparisons = [
  { criterion: "Price", us: "KES 5,000 flat", them: "KES 15,000–30,000" },
  { criterion: "Communication", us: "WhatsApp", them: "Email / scheduled calls" },
  { criterion: "Turnaround", us: "1–3 working days", them: "1–3 weeks" },
  { criterion: "Payment", us: "M-PESA", them: "Bank transfer / cheque" },
  { criterion: "eTIMS guidance", us: "Included", them: "Charged separately or not offered" },
  { criterion: "Hidden fees", us: "None", them: "Often yes" },
]

const faqs = [
  {
    q: "What documents do I need to register for VAT in Kenya?",
    a: "You need your KRA PIN certificate, a copy of your national ID or passport, and your business name and physical address. If you are registering as a company, we also need the company registration certificate and director details. Send these over WhatsApp and we handle the rest.",
  },
  {
    q: "How long does KRA VAT registration take?",
    a: "VAT registration in Kenya typically takes 1–3 working days once all required documents are submitted. KRA's processing time varies, but we prepare and submit everything correctly the first time to avoid delays.",
  },
  {
    q: "Do I need to log into iTax myself?",
    a: "No. You never need to log into the KRA iTax portal. We handle everything on your behalf using your authorised credentials. All you need is WhatsApp.",
  },
  {
    q: "Is eTIMS registration included in the KES 5,000 fee?",
    a: "Yes. eTIMS onboarding guidance is included at no extra cost. We help you understand what eTIMS requires for your business type so you stay compliant from day one.",
  },
  {
    q: "What happens after I get my VAT PIN?",
    a: "Once you receive your VAT PIN, you are registered with KRA as a VAT-registered taxpayer. You must begin charging VAT on your invoices and file monthly VAT returns by the 20th of each month. We offer monthly VAT filing at KES 3,500 per month if you would like us to handle that too.",
  },
  {
    q: "Can I register for VAT if I am a small business or sole proprietor?",
    a: "Yes. Sole proprietors, partnerships, and companies can all register for VAT. You are required to register if your annual taxable turnover exceeds KES 5 million, but voluntary registration is also possible if you meet certain conditions.",
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

export default function VATRegistrationPage() {
  return (
    <>
        <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="faq-schema" type="application/ld+json"
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
            VAT Registration Kenya — KES 5,000
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[50ch] leading-relaxed mb-6">
            Professional KRA VAT registration at a flat fee. No hidden costs, no surprises.
            Done in 1–3 working days. M-PESA accepted.
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
            href={`${WA_BASE}?text=Hi%2C%20I%20want%20the%20KES%205000%20VAT%20Registration%20service`} data-track="whatsapp-cta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-6 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Start your registration
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* What's included */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="included-heading">
        <div className="max-w-[1400px] mx-auto grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
              What you get
            </p>
            <h2
              id="included-heading"
              className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-6 text-balance"
            >
              Everything you need for KRA VAT registration.
            </h2>
            <p className="text-[0.93rem] text-ink-muted leading-relaxed max-w-[44ch]">
              Your KES 5,000 covers end-to-end handling of the iTax VAT registration
              process. No add-ons, no upsells — just a complete service delivered to your
              WhatsApp.
            </p>
          </div>
          <ul className="space-y-3.5" role="list">
            {inclusions.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle
                  size={15}
                  weight="fill"
                  className="text-brand shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-[0.9rem] text-ink-soft leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process steps */}
      <section className="bg-canvas-alt px-6 lg:px-10 py-16" aria-labelledby="steps-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            How it works
          </p>
          <h2
            id="steps-heading"
            className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-10 text-balance"
          >
            Three steps to your VAT PIN.
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {steps.map(({ number, Icon, title, description, details }) => (
              <article key={number} className="border border-hairline rounded-lg p-4 sm:p-7 flex flex-col bg-canvas">
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

      {/* Comparison table */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="compare-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Why choose us
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
                  <th className="px-5 py-3.5 text-[0.75rem] font-medium text-ink w-1/3 bg-canvas-alt">Smart VAT Kenya</th>
                  <th className="px-5 py-3.5 text-[0.75rem] font-medium text-ink-muted w-1/3">Other facilitators</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {comparisons.map(({ criterion, us, them }) => (
                  <tr key={criterion}>
                    <td className="px-5 py-4 text-[0.83rem] text-ink-muted">{criterion}</td>
                    <td className="px-5 py-4 text-[0.83rem] font-medium text-ink bg-canvas-alt">{us}</td>
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
              KES 5,000 — Register for VAT today
            </p>
            <p className="text-[0.85rem] text-ink-muted mt-1">
              Done in 1–3 working days. No hidden fees. M-PESA accepted.
            </p>
          </div>
          <a
            href={`${WA_BASE}?text=Hi%2C%20I%20want%20the%20KES%205000%20VAT%20Registration%20service`} data-track="whatsapp-cta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors shrink-0"
          >
            Get started on WhatsApp
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* ─── PILLAR CONTENT — VAT REGISTRATION KENYA 2026 ─── */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="pillar-heading">
        <div className="max-w-[800px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            VAT Registration Kenya 2026 — the full guide
          </p>
          <h2 id="pillar-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-8 text-balance">
            Who must register, what it costs, and what happens after
          </h2>

          <div className="space-y-8 text-[0.9rem] text-ink-soft leading-[1.75]">
            <div>
              <h3 className="font-display text-[1.1rem] font-semibold text-ink mb-2">Who must register for VAT?</h3>
              <p>
                You must register for VAT when your taxable turnover reaches <strong className="text-ink">{FACTS.mandatoryThreshold}</strong> in any 12-month period. This is the mandatory threshold per KRA and the VAT Act (Cap. 476), verified {new Date(FACTS.lastVerified).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} against <a href="https://www.kra.go.ke/individual/filing-paying/types-of-taxes/value-added-tax" target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-2 hover:text-brand-hover">KRA's VAT guidance</a>. Businesses below this threshold may apply voluntarily to claim input VAT — see <a href="/resources/do-i-need-to-register-for-vat-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">do I need to register?</a> and <a href="/resources/vat-registration-checklist/" className="text-brand underline underline-offset-2 hover:text-brand-hover">the registration checklist</a>.
              </p>
              <p className="mt-3">Voluntary registration is typically attractive if you have significant VAT-able purchases (stock, rent, services) and want to recover input VAT, or if corporate clients require a VAT-compliant invoice via eTIMS.</p>
            </div>

            <div>
              <h3 className="font-display text-[1.1rem] font-semibold text-ink mb-2">What documents do I need?</h3>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>KRA PIN certificate</li>
                <li>National ID or passport copy</li>
                <li>Business name and physical address (and for companies: certificate of incorporation, CR12, director IDs)</li>
                <li>Bank account details and nature of business</li>
              </ul>
              <p className="mt-3">Send these over WhatsApp — we handle the iTax Form VAT 1 and profile update. No portal login needed from you. See the full <a href="/resources/vat-registration-checklist/" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT registration checklist</a> for a printable list.</p>
            </div>

            <div>
              <h3 className="font-display text-[1.1rem] font-semibold text-ink mb-2">How long does it take? What can go wrong?</h3>
              <p>Typical turnaround is <strong className="text-ink">1–3 working days</strong> after correct submission. Common KRA rejection reasons: mismatched ID vs PIN details, incomplete business address, or filing with outstanding returns on the account. We pre-check your iTax ledger for these issues — including the <a href="/resources/vat-special-table-risks/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Special Table</a> — before submitting, which is why our first-attempt rate is high. If KRA queries the application, we address it without extra charge.</p>
            </div>

            <div>
              <h3 className="font-display text-[1.1rem] font-semibold text-ink mb-2">What happens after you get the VAT PIN?</h3>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>You must charge 16% VAT on taxable supplies and issue eTIMS-compliant invoices</li>
                <li>File a VAT return and pay any VAT due by the <strong className="text-ink">20th of the following month</strong> (we file on the 17th) — see <a href="/resources/how-to-file-vat-return-on-itax/" className="text-brand underline underline-offset-2 hover:text-brand-hover">how to file on iTax</a> and <a href="/resources/vat-return-filing-checklist/" className="text-brand underline underline-offset-2 hover:text-brand-hover">the filing checklist</a></li>
                <li>Complete <a href="/resources/etims-onboarding-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">eTIMS onboarding</a> — from 2026 KRA validates returns against eTIMS invoice data</li>
                <li>Keep input VAT records for at least 5 years for <a href="/resources/kra-vat-audit-process/" className="text-brand underline underline-offset-2 hover:text-brand-hover">audit</a> purposes</li>
                <li>If you later fall below the threshold you may consider <a href="/resources/vat-deregistration-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT deregistration</a>, but only with KRA approval</li>
              </ul>
              <p className="mt-3">Need monthly help? Our <a href="/services/monthly-vat-filing/" className="text-brand underline underline-offset-2 hover:text-brand-hover">Monthly VAT Filing — KES 3,500/month</a> handles the return, reconciliation, and payment guidance every month.</p>
            </div>

            <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
              <SealCheck size={18} weight="duotone" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                <strong className="text-ink">Cost:</strong> KES 5,000 flat — iTax registration, Form VAT 1, PIN generation, eTIMS guidance, taxpayer education, and M-PESA receipt. No hidden fees. Compare with facilitators quoting KES 15,000–30,000.
              </p>
            </div>
          </div>
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
          <h2
            id="faq-heading"
            className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-10 text-balance"
          >
            VAT registration questions answered.
          </h2>

          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-hairline rounded-lg p-6 bg-canvas">
                <h3 className="font-display text-[0.95rem] font-semibold text-ink mb-3">
                  {q}
                </h3>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-[clamp(1.3rem,2.5vw,1.8rem)] font-semibold text-canvas mb-2 text-balance">
              Register for VAT today — KES 5,000.
            </h2>
            <p className="text-[0.88rem] text-canvas/65 max-w-[40ch]">
              Send a WhatsApp message now. No commitment required — we will confirm we can help before any payment.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`${WA_BASE}?text=Hi%2C%20I%20want%20the%20KES%205000%20VAT%20Registration%20service`} data-track="whatsapp-cta"
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
              View all services
            </a>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  )
}
