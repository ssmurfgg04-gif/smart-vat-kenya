import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import {
  ArrowRight,
  CheckCircle,
  ChatCircle,
  MapPin,
  Building,
  CurrencyDollar,
  DeviceMobile,
  WhatsappLogo,
  Clock,
  SealCheck,
} from "@phosphor-icons/react/dist/ssr"
import { Testimonials } from "@/components/testimonials"
import { NewsletterSignup } from "@/components/newsletter-signup"

export const metadata: Metadata = {
  title: "VAT Registration Services Nairobi — KES 5,000 | Smart VAT Kenya",
  description:
    "Professional VAT registration services in Nairobi — KES 5,000 flat fee. KRA iTax registration for Nairobi businesses. 1–3 working days. M-PESA accepted. eTIMS guidance included. Serving Nairobi CBD, Westlands, Kilimani, Industrial Area, and all Nairobi suburbs.",
  keywords: [
    "vat registration nairobi",
    "vat registration services nairobi",
    "kra vat registration nairobi",
    "register for vat nairobi",
    "vat registration kenya nairobi",
    "vat registration westlands",
    "vat registration kilimani",
    "vat registration industrial area nairobi",
    "vat registration nairobi cbd",
    "vat registration karen nairobi",
    "vat registration langata nairobi",
    "kra itax registration nairobi",
    "vat registration kenya",
    "itax vat registration",
    "kra vat registration",
  ],
  alternates: { canonical: "https://smartvatkenya.co.ke/services/vat-registration-nairobi" },
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
      name: "VAT Registration Nairobi",
      item: "https://smartvatkenya.co.ke/services/vat-registration-nairobi",
    },
  ],
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://smartvatkenya.co.ke/services/vat-registration-nairobi#business",
  name: "Smart VAT Kenya",
  description:
    "Professional VAT registration services in Nairobi — KES 5,000 flat fee. KRA iTax registration, eTIMS guidance, and monthly VAT filing.",
  url: "https://smartvatkenya.co.ke/services/vat-registration-nairobi",
  telephone: "+254721725958",
  email: "hello@smartvatkenya.co.ke",
  areaServed: [
    "Nairobi CBD",
    "Westlands",
    "Kilimani",
    "Lavington",
    "Karen",
    "Lang'ata",
    "South B",
    "South C",
    "Industrial Area",
    "Parklands",
    "Gigiri",
    "Hurlingham",
    "Upper Hill",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pioneer House, Moi Avenue",
    addressLocality: "Nairobi CBD",
    addressRegion: "Nairobi",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.286389,
    longitude: 36.821389,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  priceRange: "KES 3,500 - 5,000",
  paymentAccepted: ["M-PESA", "Bank Transfer"],
  currenciesAccepted: "KES",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you meet VAT registration clients in person in Nairobi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are based at Pioneer House, Moi Avenue, Nairobi CBD. You can visit our office or we can arrange to meet at the Huduma Centre Nairobi if you prefer to handle documents in person.",
      },
    },
    {
      "@type": "Question",
      name: "Can you pick up documents from my business in Nairobi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. For clients within Nairobi — including Westlands, Kilimani, Industrial Area, Karen, and other suburbs — we can arrange document pickup. Just let us know your location on WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve businesses outside Nairobi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. While we are based in Nairobi CBD, the entire KRA iTax process is handled online. We serve businesses across Kenya, including Mombasa, Kisumu, Nakuru, Eldoret, and all other counties. Everything is done via WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "How long does VAT registration take in Nairobi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VAT registration in Nairobi typically takes 1–3 working days once all required documents are submitted. Our familiarity with KRA iTax and Huduma Centre Nairobi processes helps ensure a smooth, fast turnaround.",
      },
    },
    {
      "@type": "Question",
      name: "What documents do I need for VAT registration in Nairobi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need your KRA PIN certificate, a copy of your national ID or passport, and your business name and physical address in Nairobi. If you are registering as a company, we also need the company registration certificate and director details.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to visit KRA offices in Nairobi to register for VAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You never need to visit KRA Times Tower or any KRA office. We handle everything on the iTax portal remotely. If you prefer in-person assistance, you can visit us at Pioneer House, Moi Avenue, Nairobi CBD.",
      },
    },
  ],
}

const WA_BASE = "https://wa.me/254721725958"
const WA_TEXT = "Hi%2C%20I%20need%20VAT%20registration%20in%20Nairobi"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://smartvatkenya.co.ke/services/vat-registration-nairobi#service",
  name: "VAT Registration Services Nairobi",
  description:
    "Professional KRA VAT registration in Nairobi — KES 5,000 flat fee, done in 1–3 working days. iTax VAT Form 1, PIN generation, and eTIMS guidance included. M-PESA accepted. No hidden costs.",
  provider: { "@type": "Organization", name: "Smart VAT Kenya" },
  areaServed: { "@type": "City", name: "Nairobi" },
  offers: {
    "@type": "Offer",
    price: "5000",
    priceCurrency: "KES",
    availability: "https://schema.org/InStock",
  },
}

const inclusions = [
  "iTax profile update",
  "VAT Form 1 completion and submission",
  "PIN generation and delivery",
  "1–3 working days turnaround",
  "eTIMS onboarding guidance",
  "Taxpayer education session",
  "M-PESA receipt provided",
  "WhatsApp updates throughout",
]

const serviceAreas = [
  "Nairobi CBD",
  "Westlands",
  "Kilimani",
  "Lavington",
  "Karen",
  "Lang'ata",
  "South B",
  "South C",
  "Industrial Area",
  "Parklands",
  "Gigiri",
  "Hurlingham",
  "Upper Hill",
]

const steps = [
  {
    number: "01",
    Icon: ChatCircle,
    title: "WhatsApp Us",
    description:
      "Send your business name, KRA PIN, and national ID over WhatsApp. We are based in Nairobi and respond within minutes.",
    details: [
      "Send KRA PIN certificate",
      "Share a copy of your national ID",
      "Provide business name and address",
      "No iTax login required from you",
    ],
  },
  {
    number: "02",
    Icon: Building,
    title: "We Handle iTax & KRA",
    description:
      "We log into the KRA iTax portal, update your profile, complete VAT Form 1, and submit. Familiar with Huduma Centre Nairobi processes if needed.",
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
      "Your VAT PIN is delivered to your WhatsApp along with your M-PESA receipt. We also walk you through eTIMS onboarding.",
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
  { criterion: "Communication", us: "WhatsApp — reply in minutes", them: "Email / scheduled calls" },
  { criterion: "Turnaround", us: "1–3 working days", them: "1–3 weeks" },
  { criterion: "Payment", us: "M-PESA", them: "Bank transfer / cheque" },
  { criterion: "Location", us: "Nairobi CBD — Pioneer House", them: "Remote / no physical office" },
  { criterion: "eTIMS guidance", us: "Included", them: "Charged separately or not offered" },
  { criterion: "Hidden fees", us: "None", them: "Often yes" },
]

const faqs = [
  {
    q: "Do you meet VAT registration clients in person in Nairobi?",
    a: "Yes. We are based at Pioneer House, Moi Avenue, Nairobi CBD. You can visit our office during working hours or we can arrange to meet at Huduma Centre Nairobi if you prefer to handle documents in person. WhatsApp us first so we know to expect you.",
  },
  {
    q: "Can you pick up documents from my business in Nairobi?",
    a: "Yes. For clients within Nairobi — including Westlands, Kilimani, Industrial Area, Karen, Lang'ata, and all other suburbs — we can arrange document pickup. Just let us know your location on WhatsApp and we will coordinate a pickup time.",
  },
  {
    q: "Do you serve businesses outside Nairobi?",
    a: "Absolutely. While we are based in Nairobi CBD, the entire KRA iTax process is handled online. We serve businesses across Kenya, including Mombasa, Kisumu, Nakuru, Eldoret, and all other counties. Everything is done via WhatsApp — no need to visit Nairobi.",
  },
  {
    q: "How long does VAT registration take in Nairobi?",
    a: "VAT registration in Nairobi typically takes 1–3 working days once all required documents are submitted. Our familiarity with KRA iTax and Huduma Centre Nairobi processes helps ensure your application is submitted correctly the first time, avoiding KRA delays.",
  },
  {
    q: "What documents do I need for VAT registration in Nairobi?",
    a: "You need your KRA PIN certificate, a copy of your national ID or passport, and your business name and physical address in Nairobi. If you are registering as a company, we also need the company registration certificate and director details. Send these over WhatsApp and we handle the rest.",
  },
  {
    q: "Do I need to visit KRA Times Tower or Huduma Centre to register for VAT?",
    a: "No. You never need to visit KRA Times Tower, Huduma Centre Nairobi, or any government office. We handle everything on the iTax portal remotely. If you would like in-person assistance, you are welcome to visit our office at Pioneer House, Moi Avenue, Nairobi CBD.",
  },
  {
    q: "Can I pay the KES 5,000 fee via M-PESA for VAT registration in Nairobi?",
    a: "Yes. M-PESA is our primary payment method. We send you our paybill number and you pay directly. You will receive an M-PESA receipt and we will confirm your payment on WhatsApp within minutes.",
  },
]

export default function VATRegistrationNairobiPage() {
  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="local-business-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">
            VAT registration — Nairobi
          </p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            VAT Registration Services Nairobi — KES 5,000
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[55ch] leading-relaxed mb-6">
            We are based in Nairobi CBD. Our team is familiar with KRA iTax and
            Huduma Centre Nairobi processes. Done in 1–3 working days. M-PESA accepted.
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
            className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-6 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Start your registration
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* What's included */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="included-heading">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
              What you get
            </p>
            <h2
              id="included-heading"
              className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-6 text-balance"
            >
              Everything you need for KRA VAT registration in Nairobi.
            </h2>
            <p className="text-[0.93rem] text-ink-muted leading-relaxed max-w-[44ch]">
              Your KES 5,000 covers end-to-end handling of the iTax VAT registration
              process. We are located in Nairobi CBD and can assist in person if needed.
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

      {/* Why Nairobi businesses choose us */}
      <section className="bg-canvas-alt px-6 lg:px-10 py-16" aria-labelledby="why-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Why Nairobi businesses choose us
          </p>
          <h2
            id="why-heading"
            className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-4 text-balance"
          >
            We are based in Nairobi. We know the process.
          </h2>
          <p className="text-[0.9rem] text-ink-muted leading-relaxed max-w-[55ch] mb-10">
            Located at Pioneer House, Moi Avenue, Nairobi CBD. Our team deals with
            KRA iTax daily and understands Nairobi business requirements.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                Icon: MapPin,
                title: "Nairobi-based team",
                desc: "We are at Pioneer House, Moi Avenue. Visit us or we come to you within Nairobi.",
              },
              {
                Icon: WhatsappLogo,
                title: "WhatsApp-first",
                desc: "Reply within minutes. No emails, no phone tag — just WhatsApp.",
              },
              {
                Icon: CurrencyDollar,
                title: "M-PESA payments",
                desc: "Pay via M-PESA paybill. Instant confirmation. No bank queues.",
              },
              {
                Icon: Clock,
                title: "1–3 day turnaround",
                desc: "Familiar with KRA iTax. Your VAT PIN in days, not weeks.",
              },
            ].map(({ Icon, title, desc }) => (
              <article key={title} className="bg-canvas border border-hairline rounded-lg p-6">
                <Icon size={22} weight="duotone" className="text-brand mb-4" aria-hidden="true" />
                <h3 className="font-display text-[0.95rem] font-semibold text-ink mb-2">{title}</h3>
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="areas-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Service areas
          </p>
          <h2
            id="areas-heading"
            className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-6 text-balance"
          >
            We serve all Nairobi suburbs.
          </h2>
          <p className="text-[0.9rem] text-ink-muted leading-relaxed max-w-[55ch] mb-8">
            Based in Nairobi CBD, we provide VAT registration services across the
            entire Nairobi metropolitan area. Document pickup available in all suburbs.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3" role="list">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 border border-hairline rounded-md px-4 py-3 bg-canvas-alt"
                role="listitem"
              >
                <MapPin size={14} weight="fill" className="text-brand shrink-0" aria-hidden="true" />
                <span className="text-[0.82rem] text-ink-soft">{area}</span>
              </div>
            ))}
          </div>
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

          <div className="grid lg:grid-cols-3 gap-5">
            {steps.map(({ number, Icon, title, description, details }) => (
              <article key={number} className="border border-hairline rounded-lg p-7 flex flex-col bg-canvas">
                <p className="font-display text-[3.5rem] font-semibold text-ink/10 leading-none mb-4 tabular-nums">
                  {number}
                </p>
                <Icon size={22} weight="duotone" className="text-brand mb-4" aria-hidden="true" />
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
              KES 5,000 — VAT registration in Nairobi
            </p>
            <p className="text-[0.85rem] text-ink-muted mt-1">
              Based at Pioneer House, Moi Avenue. Done in 1–3 working days.
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
          <h2
            id="faq-heading"
            className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-10 text-balance"
          >
            VAT registration in Nairobi — answered.
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
              Register for VAT in Nairobi — KES 5,000.
            </h2>
            <p className="text-[0.88rem] text-canvas/65 max-w-[40ch]">
              Based in Nairobi CBD. Send a WhatsApp message now. No commitment required.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`${WA_BASE}?text=${WA_TEXT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
            >
              WhatsApp us now
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-canvas/25 text-canvas/70 hover:text-canvas hover:border-canvas/50 text-sm font-medium px-5 py-3 rounded-md transition-colors"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  )
}
