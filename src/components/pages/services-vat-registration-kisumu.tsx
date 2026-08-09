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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://smartvatkenya.co.ke/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "VAT Registration Kisumu",
      item: "https://smartvatkenya.co.ke/services/vat-registration-kisumu/",
    },
  ],
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Smart VAT Kenya — Kisumu",
  description:
    "Professional VAT registration services in Kisumu — KES 5,000 flat fee. KRA iTax registration for Kisumu businesses.",
  url: "https://smartvatkenya.co.ke/services/vat-registration-kisumu",
  telephone: "+254721725958",
  areaServed: [
    { "@type": "City", name: "Kisumu" },
    { "@type": "City", name: "Kisumu CBD" },
    { "@type": "Neighborhood", name: "Milimani" },
    { "@type": "Neighborhood", name: "Nyawita" },
    { "@type": "Neighborhood", name: "Manyatta" },
    { "@type": "Neighborhood", name: "Kanyakwar" },
    { "@type": "Neighborhood", name: "Nyalenda" },
    { "@type": "Neighborhood", name: "Kondele" },
    { "@type": "Neighborhood", name: "Tom Mboya" },
    { "@type": "AdministrativeArea", name: "Kisumu County" },
    { "@type": "AdministrativeArea", name: "Kisumu East" },
    { "@type": "AdministrativeArea", name: "Kisumu West" },
  ],
  serviceArea: { "@type": "City", name: "Kisumu" },
  priceRange: "KES 5,000",
  paymentAccepted: "M-PESA",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need to travel to Nairobi for VAT registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You never need to travel to Nairobi. We handle everything remotely via WhatsApp. Send your documents over WhatsApp and we complete your KRA iTax VAT registration from our end. Your VAT PIN is delivered to your phone.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle KRA matters for my Kisumu business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. KRA iTax is a fully online portal — there is no physical office requirement. We handle your VAT registration, and any ongoing VAT filing, entirely remotely. Whether your business is in Kisumu CBD, Milimani, Nyawita, or anywhere in Kisumu County, you get the same service as any Nairobi-based client.",
      },
    },
    {
      "@type": "Question",
      name: "How do I pay for VAT registration from Kisumu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept M-PESA payments from any mobile money agent in Kisumu. We send you our M-PESA paybill number, you pay from your phone, and we send you a receipt immediately. No bank transfers, no cheques, no cash needed.",
      },
    },
  ],
}

const WA_BASE = "https://wa.me/254721725958"
const WA_TEXT = "Hi%2C%20I%20need%20VAT%20registration%20in%20Kisumu"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://smartvatkenya.co.ke/services/vat-registration-kisumu#service",
  name: "VAT Registration Services Kisumu",
  description:
    "Professional KRA VAT registration in Kisumu — KES 5,000 flat fee, done in 1–3 working days. iTax VAT Form 1, PIN generation, and eTIMS guidance included. Fully remote via WhatsApp. M-PESA accepted.",
  provider: { "@type": "Organization", name: "Smart VAT Kenya" },
  areaServed: { "@type": "City", name: "Kisumu" },
}

const inclusions = [
  "iTax profile update",
  "VAT Form 1 completion and submission",
  "PIN generation and delivery via WhatsApp",
  "1–3 working days turnaround",
  "eTIMS onboarding guidance included",
  "Taxpayer education session",
  "M-PESA receipt provided",
  "Dedicated WhatsApp support line",
]

const whyKisumu = [
  { Icon: CurrencyDollar, label: "KES 5,000 flat fee — no hidden costs" },
  { Icon: Clock, label: "1–3 working days, not weeks" },
  { Icon: ChatCircle, label: "Full service delivered over WhatsApp" },
  { Icon: Prohibit, label: "No need to travel to Nairobi" },
  { Icon: Phone, label: "M-PESA payment accepted in Kisumu" },
  { Icon: SealCheck, label: "100% iTax compliant process" },
]

const serviceAreas = [
  "Kisumu CBD",
  "Milimani",
  "Nyawita",
  "Manyatta",
  "Kanyakwar",
  "Nyalenda",
  "Kondele",
  "Tom Mboya",
  "Kisumu East",
  "Kisumu West",
  "Kisumu County",
]

const steps = [
  {
    number: "01",
    Icon: ChatCircle,
    title: "WhatsApp Us from Kisumu",
    description:
      "Send your business name, KRA PIN, and a copy of your national ID over WhatsApp. No need to visit any office — do it from your phone in Kisumu.",
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
    title: "We Handle iTax Remotely",
    description:
      "We log into the KRA iTax portal from our end, update your profile, complete VAT Form 1, and submit your application. You get WhatsApp updates at every stage.",
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
    title: "VAT PIN Delivered to Your Phone",
    description:
      "Your VAT PIN is delivered straight to your WhatsApp along with your M-PESA receipt. We also walk you through eTIMS onboarding so you are fully compliant from day one.",
    details: [
      "VAT PIN via WhatsApp",
      "M-PESA receipt for our fee",
      "eTIMS onboarding walkthrough",
      "Ongoing support for follow-ups",
    ],
  },
]

const kisumuBusinessTypes = [
  { emoji: "🐟", title: "Fish Processing & Lake Victoria Trade", desc: "Kisumu's fish processing and lake transport businesses must charge VAT on taxable supplies. Input VAT claims on boats, cooling equipment, and packaging materials can significantly reduce net VAT payable." },
  { emoji: "🌾", title: "Agriculture & Agro-Processing", desc: "Agricultural produce is generally exempt from VAT, but processed and packaged products attract 16% VAT. Milling, drying, and packaging operations in Kisumu County must be VAT-registered." },
  { emoji: "🛂", title: "Cross-Border Trade (Uganda & Tanzania)", desc: "Kisumu's proximity to the Busia and Isebania border crossings means many businesses trade across East Africa. Exports of goods are zero-rated — you charge 0% VAT and claim input VAT refunds." },
]

const faqs = [
  {
    q: "Do I need to travel to Nairobi for VAT registration?",
    a: "No. You never need to travel to Nairobi. We handle everything remotely via WhatsApp. Send your documents over WhatsApp and we complete your KRA iTax VAT registration from our end. Your VAT PIN is delivered to your phone.",
  },
  {
    q: "Can you handle KRA matters for my Kisumu business?",
    a: "Yes. KRA iTax is a fully online portal — there is no physical office requirement. We handle your VAT registration, and any ongoing VAT filing, entirely remotely. Whether your business is in Kisumu CBD, Milimani, Nyawita, or anywhere in Kisumu County, you get the same service as any Nairobi-based client.",
  },
  {
    q: "How do I pay for VAT registration from Kisumu?",
    a: "We accept M-PESA payments from any mobile money agent in Kisumu. We send you our M-PESA paybill number, you pay from your phone, and we send you a receipt immediately. No bank transfers, no cheques, no cash needed.",
  },
  {
    q: "What documents do I need to register for VAT in Kenya?",
    a: "You need your KRA PIN certificate, a copy of your national ID or passport, and your business name and physical address. If you are registering as a company, we also need the company registration certificate and director details. Send these over WhatsApp and we handle the rest.",
  },
  {
    q: "How long does KRA VAT registration take for Kisumu businesses?",
    a: "VAT registration in Kenya typically takes 1–3 working days once all required documents are submitted. KRA's processing time is the same regardless of location — Kisumu businesses get the same turnaround as Nairobi businesses.",
  },
  {
    q: "Do I need to log into iTax myself?",
    a: "No. You never need to log into the KRA iTax portal. We handle everything on your behalf using your authorised credentials. All you need is WhatsApp.",
  },
]

export default function VATRegistrationKisumuPage() {
  return (
    <>
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="local-business-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">
            Kisumu — Western Kenya
          </p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            VAT Registration Services Kisumu — KES 5,000
          </h1>
          <p className="text-[0.95rem] text-canvas/70 max-w-[50ch] leading-relaxed mb-4">
            Professional KRA VAT registration for Kisumu businesses at a flat fee.
            Done in 1–3 working days. M-PESA accepted.
          </p>
          <div className="flex items-start gap-3 mb-4 p-4 rounded-lg border border-canvas/15 bg-canvas/5 max-w-[50ch]">
            <MapPin size={16} weight="duotone" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-[0.83rem] text-canvas/65 leading-relaxed">
              We serve all Western Kenya businesses remotely via WhatsApp. No office visit needed.
            </p>
          </div>
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
              Everything you need for KRA VAT registration in Kisumu.
            </h2>
            <p className="text-[0.93rem] text-ink-muted leading-relaxed max-w-[44ch]">
              Your KES 5,000 covers end-to-end handling of the iTax VAT registration
              process. No add-ons, no upsells — just a complete service delivered to your
              WhatsApp, anywhere in Kisumu.
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

      {/* Why Kisumu businesses choose us */}
      <section className="bg-canvas-alt px-6 lg:px-10 py-16" aria-labelledby="why-heading">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
              Why Kisumu chooses us
            </p>
            <h2
              id="why-heading"
              className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-6 text-balance"
            >
              Professional VAT service without leaving Kisumu.
            </h2>
            <p className="text-[0.93rem] text-ink-muted leading-relaxed max-w-[44ch]">
              Most VAT facilitators are Nairobi-based and expect you to visit their office.
              We deliver the entire service over WhatsApp — no travel, no waiting, no extra costs.
            </p>
          </div>
          <ul className="space-y-3.5" role="list">
            {whyKisumu.map(({ Icon, label }) => (
              <li key={label} className="flex items-start gap-3">
                <Icon
                  size={16}
                  weight="duotone"
                  className="text-brand shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-[0.9rem] text-ink-soft leading-snug">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="areas-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Areas we serve
          </p>
          <h2
            id="areas-heading"
            className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-4 text-balance"
          >
            Serving all Kisumu. No office visit needed.
          </h2>
          <p className="text-[0.88rem] text-ink-muted leading-relaxed max-w-[50ch] mb-8">
            We provide VAT registration services to businesses across Kisumu County entirely over WhatsApp.
            Wherever you are in Kisumu, you get the same fast service.
          </p>
          <div className="flex flex-wrap gap-3" role="list">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 text-[0.82rem] text-ink-soft bg-canvas-alt border border-hairline rounded-full px-4 py-2"
              >
                <Buildings size={13} weight="duotone" className="text-ink-muted shrink-0" aria-hidden="true" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kisumu businesses need VAT */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="kisumu-biz-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Kisumu business landscape
          </p>
          <h2 id="kisumu-biz-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-4 text-balance">
            Why Kisumu businesses need VAT registration.
          </h2>
          <p className="text-[0.9rem] text-ink-muted leading-relaxed max-w-[55ch] mb-10">
            Kisumu is the commercial hub of Western Kenya. From Lake Victoria fish processing
            to cross-border trade with Uganda and Tanzania, here is how VAT applies to common
            Kisumu-based businesses.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {kisumuBusinessTypes.map(({ emoji, title, desc }) => (
              <article key={title} className="border border-hairline rounded-lg p-6 bg-canvas-alt">
                <span className="text-2xl block mb-3" aria-hidden="true">{emoji}</span>
                <h3 className="font-display text-[0.95rem] font-semibold text-ink mb-2">{title}</h3>
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-[0.82rem] text-ink-muted leading-relaxed">
            <strong className="text-ink font-medium">KRA Lake Region office:</strong> KRA has a regional office
            in Kisumu serving Western Kenya. While your VAT registration is handled entirely online,
            we understand the compliance landscape for Kisumu and Lake Region businesses.
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
            Three steps to your VAT PIN from Kisumu.
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
              KES 5,000 — VAT registration for Kisumu
            </p>
            <p className="text-[0.85rem] text-ink-muted mt-1">
              Fully remote via WhatsApp. No travel needed. Done in 1–3 working days.
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
            VAT registration in Kisumu — questions answered.
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
              Register for VAT in Kisumu — KES 5,000.
            </h2>
            <p className="text-[0.88rem] text-canvas/65 max-w-[40ch]">
              Send a WhatsApp message now. No commitment required — we will confirm we can help before any payment.
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
