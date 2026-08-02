import {
  ArrowRight,
  CheckCircle,
  ChatCircle,
  FileText,
  Clock,
  CurrencyDollar,
  Prohibit,
  SealCheck,
  MapPin,
  Buildings,
  Phone,
} from "@phosphor-icons/react/dist/ssr"
import { Testimonials } from "@/components/testimonials"
import { NewsletterSignup } from "@/components/newsletter-signup"

const WA_BASE = "https://wa.me/254721725958"
const WA_TEXT = "Hi%2C%20I%20need%20VAT%20registration%20in%20Mombasa"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://smartvatkenya.co.ke/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "VAT Registration Mombasa",
      item: "https://smartvatkenya.co.ke/services/vat-registration-mombasa",
    },
  ],
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://smartvatkenya.co.ke/services/vat-registration-mombasa#business",
  name: "Smart VAT Kenya — Mombasa Service",
  description:
    "Remote VAT registration services for Mombasa businesses. KES 5,000 flat fee. WhatsApp-based service covering Mombasa CBD, Nyali, Bamburi, Changamwe, and all Mombasa County.",
  url: "https://smartvatkenya.co.ke/services/vat-registration-mombasa",
  telephone: "+254721725958",
  email: "hello@smartvatkenya.co.ke",
  areaServed: [
    { "@type": "City", name: "Mombasa" },
    { "@type": "City", name: "Nyali" },
    { "@type": "City", name: "Bamburi" },
    { "@type": "City", name: "Changamwe" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mombasa",
    addressRegion: "Mombasa County",
    addressCountry: "KE",
  },
  priceRange: "KES 5,000",
  sameAs: ["https://wa.me/254721725958"],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://smartvatkenya.co.ke/services/vat-registration-mombasa#service",
  name: "VAT Registration Services Mombasa",
  description:
    "Professional KRA VAT registration in Mombasa — KES 5,000 flat fee, done in 1–3 working days. iTax VAT Form 1, PIN generation, and eTIMS guidance included. WhatsApp-based, no office visit needed. M-PESA accepted.",
  provider: { "@type": "Organization", name: "Smart VAT Kenya" },
  areaServed: {
    "@type": "City",
    name: "Mombasa",
    sameAs: "https://en.wikipedia.org/wiki/Mombasa",
  },
  offers: {
    "@type": "Offer",
    price: "5000",
    priceCurrency: "KES",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2027-12-31",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need to come to Nairobi for VAT registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You never need to visit Nairobi or any physical office. Smart VAT Kenya serves Mombasa businesses entirely remotely via WhatsApp. Send your documents over WhatsApp, and we handle the entire KRA iTax registration process for you from start to finish.",
      },
    },
    {
      "@type": "Question",
      name: "Can Smart VAT Kenya handle Mombasa KRA matters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. KRA iTax is a centralised online portal — all VAT registration, filing, and compliance is done digitally regardless of where your business is located. Being in Mombasa or anywhere on the Coast makes no difference. We handle everything remotely with the same speed and quality as we do for Nairobi businesses.",
      },
    },
    {
      "@type": "Question",
      name: "How do I pay for VAT registration in Mombasa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "M-PESA is our primary payment method. Once we confirm we can help, you pay the KES 5,000 fee via M-PESA and receive a receipt. No bank transfers, no cheques, no cash deposits needed.",
      },
    },
    {
      "@type": "Question",
      name: "What if I am in Ukunda, Diani, or other parts of the Coast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve businesses across the entire Kenyan Coast — including Ukunda, Diani, Kwale, Kilifi, Malindi, and Watamu. Since everything is done remotely via WhatsApp, your location does not matter. KES 5,000 flat fee applies to all businesses nationwide.",
      },
    },
    {
      "@type": "Question",
      name: "How long does VAT registration take for a Mombasa business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VAT registration typically takes 1–3 working days once all required documents are submitted. KRA's processing time is the same for all Kenyan businesses regardless of location.",
      },
    },
    {
      "@type": "Question",
      name: "What documents do I need to register for VAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need your KRA PIN certificate, a copy of your national ID or passport, and your business name and physical address (e.g., your Mombasa business location). Companies also need the registration certificate and director details. Send these over WhatsApp and we handle the rest.",
      },
    },
  ],
}

const inclusions = [
  "iTax profile update",
  "VAT Form 1 completion and submission",
  "PIN generation and delivery",
  "1–3 working days turnaround",
  "eTIMS onboarding guidance",
  "Taxpayer education session",
  "M-PESA receipt provided",
]

const areas = [
  "Mombasa CBD",
  "Nyali",
  "Bamburi",
  "Changamwe",
  "Likoni",
  "Kisauni",
  "Tudor",
  "Mkomani",
  "Shanzu",
  "Utange",
]

const whyUs = [
  { Icon: Phone, title: "Fully remote — no office visit", desc: "You never need to step into an office. Everything happens over WhatsApp, from document collection to PIN delivery." },
  { Icon: ChatCircle, title: "WhatsApp-based communication", desc: "Real-time updates, no chasing. You get a clear paper trail of every step we take on your registration." },
  { Icon: CurrencyDollar, title: "M-PESA payments only", desc: "Pay via M-PESA — no bank transfers, no queuing at a bank, no credit card needed." },
  { Icon: MapPin, title: "Serving the entire Coast", desc: "From Mombasa CBD to Ukunda, Kilifi to Malindi — we serve every business on the Kenyan Coast remotely." },
]

const mombasaBusinessTypes = [
  { emoji: "🚢", title: "Importers & Exporters", desc: "Mombasa is Kenya's gateway for international trade. If you import or export goods, VAT registration is mandatory — and eTIMS compliance is required for customs clearance." },
  { emoji: "🏨", title: "Hotels & Tourism", desc: "From Diani to Malindi, hospitality businesses charging 16% VAT must be registered. Input VAT claims on supplies, utilities, and renovations help reduce your tax bill." },
  { emoji: "📦", title: "Logistics & Shipping", desc: "Freight forwarding, clearing & forwarding, and transport companies need VAT registration to issue compliant invoices and claim input VAT on fuel, maintenance, and port charges." },
]

const steps = [
  {
    number: "01",
    Icon: ChatCircle,
    title: "WhatsApp Us from Mombasa",
    description:
      "Send your business name, KRA PIN, and a copy of your national ID over WhatsApp. No need to visit an office or log into iTax yourself.",
    details: [
      "Send KRA PIN certificate",
      "Share a copy of your national ID",
      "Provide business name and Mombasa address",
      "No iTax login required from you",
    ],
  },
  {
    number: "02",
    Icon: FileText,
    title: "We Handle iTax Remotely",
    description:
      "We log into KRA iTax, update your profile, complete VAT Form 1, and submit your application — all remotely. You get WhatsApp updates at every stage.",
    details: [
      "KRA iTax portal — fully handled",
      "Profile update completed remotely",
      "VAT Form 1 submitted",
      "WhatsApp updates throughout",
    ],
  },
  {
    number: "03",
    Icon: SealCheck,
    title: "PIN Delivered to Your WhatsApp",
    description:
      "Your VAT PIN arrives on your phone along with your M-PESA receipt. We also walk you through eTIMS so you are fully compliant from day one.",
    details: [
      "VAT PIN via WhatsApp",
      "M-PESA receipt for our fee",
      "eTIMS onboarding walkthrough",
      "Ongoing support for follow-ups",
    ],
  },
]

const faqs = [
  {
    q: "Do I need to come to Nairobi for VAT registration?",
    a: "No. You never need to visit Nairobi or any physical office. Smart VAT Kenya serves Mombasa businesses entirely remotely via WhatsApp. Send your documents over WhatsApp, and we handle the entire KRA iTax registration process for you from start to finish.",
  },
  {
    q: "Can Smart VAT Kenya handle Mombasa KRA matters?",
    a: "Yes. KRA iTax is a centralised online portal — all VAT registration, filing, and compliance is done digitally regardless of where your business is located. Being in Mombasa or anywhere on the Coast makes no difference. We handle everything remotely with the same speed and quality as we do for Nairobi businesses.",
  },
  {
    q: "How do I pay for VAT registration in Mombasa?",
    a: "M-PESA is our primary payment method. Once we confirm we can help, you pay the KES 5,000 fee via M-PESA and receive a receipt. No bank transfers, no cheques, no cash deposits needed.",
  },
  {
    q: "What if I am in Ukunda, Diani, or other parts of the Coast?",
    a: "We serve businesses across the entire Kenyan Coast — including Ukunda, Diani, Kwale, Kilifi, Malindi, and Watamu. Since everything is done remotely via WhatsApp, your location does not matter. KES 5,000 flat fee applies to all businesses nationwide.",
  },
  {
    q: "How long does VAT registration take for a Mombasa business?",
    a: "VAT registration typically takes 1–3 working days once all required documents are submitted. KRA's processing time is the same for all Kenyan businesses regardless of location.",
  },
  {
    q: "What documents do I need to register for VAT?",
    a: "You need your KRA PIN certificate, a copy of your national ID or passport, and your business name and physical address (e.g., your Mombasa business location). Companies also need the registration certificate and director details. Send these over WhatsApp and we handle the rest.",
  },
]

export default function VATRegistrationMombasaPage() {
  return (
    <>
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="local-business-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script id="service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">
            Mombasa service
          </p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            VAT Registration Services Mombasa — KES 5,000
          </h1>
          <div className="flex items-start gap-3 bg-canvas/10 rounded-lg p-4 mb-6 max-w-[550px]">
            <Phone size={18} weight="duotone" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-[0.88rem] text-canvas/80 leading-relaxed">
              <strong className="text-canvas font-semibold">We serve Mombasa businesses remotely via WhatsApp.</strong>{" "}
              No need to visit an office. Send your documents over WhatsApp and we handle everything on KRA iTax.
            </p>
          </div>
          <p className="text-[0.95rem] text-canvas/70 max-w-[50ch] leading-relaxed mb-6">
            Professional KRA VAT registration at a flat fee — fully remote, M-PESA accepted, 
            and delivered to your phone in 1–3 working days. Serving Mombasa CBD, Nyali, 
            Bamburi, Changamwe, and the entire Coast.
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
            Start your Mombasa registration
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
              Everything you need for KRA VAT registration.
            </h2>
            <p className="text-[0.93rem] text-ink-muted leading-relaxed max-w-[44ch]">
              Your KES 5,000 covers end-to-end handling of the iTax VAT registration
              process — fully remote, delivered to your WhatsApp. No add-ons, no upsells.
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

      {/* Why Mombasa businesses choose us */}
      <section className="bg-canvas-alt px-6 lg:px-10 py-16" aria-labelledby="why-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Why Mombasa businesses choose us
          </p>
          <h2
            id="why-heading"
            className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-10 text-balance"
          >
            Remote service designed for the Coast.
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {whyUs.map(({ Icon, title, desc }) => (
              <article key={title} className="border border-hairline rounded-lg p-6 bg-canvas">
                <Icon size={22} weight="duotone" className="text-brand mb-3" aria-hidden="true" />
                <h3 className="font-display text-[1rem] font-semibold text-ink mb-2">{title}</h3>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="areas-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Areas we cover
          </p>
          <h2
            id="areas-heading"
            className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-6 text-balance"
          >
            Serving every corner of Mombasa County.
          </h2>
          <p className="text-[0.93rem] text-ink-muted leading-relaxed max-w-[50ch] mb-10">
            Based in Mombasa or anywhere on the Coast? We serve the following areas 
            and beyond — all remotely via WhatsApp.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3" role="list">
            {areas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 border border-hairline rounded-lg px-4 py-3 bg-canvas-alt"
                role="listitem"
              >
                <MapPin size={14} weight="fill" className="text-brand shrink-0" aria-hidden="true" />
                <span className="text-[0.83rem] text-ink-soft font-medium">{area}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[0.8rem] text-ink-muted">
            Also serving Ukunda, Diani, Kwale, Kilifi, Malindi, Watamu, and the entire Kenyan Coast.
          </p>
        </div>
      </section>

      {/* Why Mombasa businesses need VAT */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="mombasa-biz-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Mombasa business types
          </p>
          <h2 id="mombasa-biz-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-4 text-balance">
            Why Mombasa businesses need VAT registration.
          </h2>
          <p className="text-[0.9rem] text-ink-muted leading-relaxed max-w-[55ch] mb-10">
            Mombasa's economy is driven by the port, tourism, and logistics. Here is how VAT
            registration applies to common Coast-based businesses — and how we help.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {mombasaBusinessTypes.map(({ emoji, title, desc }) => (
              <article key={title} className="border border-hairline rounded-lg p-6 bg-canvas-alt">
                <span className="text-2xl block mb-3" aria-hidden="true">{emoji}</span>
                <h3 className="font-display text-[0.95rem] font-semibold text-ink mb-2">{title}</h3>
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-[0.82rem] text-ink-muted leading-relaxed">
            <strong className="text-ink font-medium">KRA Southern Region office:</strong> KRA has a regional office near the
            Port of Mombasa. While you never need to visit it in person, we are familiar with Mombasa-specific
            KRA compliance requirements for port-related businesses.
          </p>
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
            Three steps to your VAT PIN — no office visit needed.
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

      {/* Mid-page CTA */}
      <section className="bg-brand-muted px-6 lg:px-10 py-12">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-[1.1rem] font-semibold text-ink">
              KES 5,000 — VAT registration for Mombasa
            </p>
            <p className="text-[0.85rem] text-ink-muted mt-1">
              Fully remote via WhatsApp. No office visit needed. Done in 1–3 working days.
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
            VAT registration for Mombasa businesses — answered.
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
              Register for VAT in Mombasa — KES 5,000.
            </h2>
            <p className="text-[0.88rem] text-canvas/65 max-w-[40ch]">
              Message us on WhatsApp now. No office visit required. We confirm we can help before any payment.
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
            <a
              href="/services"
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
