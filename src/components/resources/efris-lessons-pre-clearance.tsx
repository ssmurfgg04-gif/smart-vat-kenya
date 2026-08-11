import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Real-Time Pre-Clearance & E-Invoicing: Lessons from EFRIS and How to Prepare",
  description: "When tax authorities shift from post-issuance reporting to real-time pre-clearance e-invoicing (like Uganda's EFRIS and upcoming regional models), what breaks in SME POS systems and how to build operational resilience.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the core operational risk of real-time pre-clearance e-invoicing?",
      acceptedAnswer: { "@type": "Answer", text: "When every invoice must be cryptographically approved by the tax authority's server before a customer can be served, internet latency, server timeouts, and API downtime directly halt business cash flow." }
    }
  ]
}

export default function EfrisLessonsPreClearancePage() {
  return (
    <>
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4">
            Real-Time Pre-Clearance & E-Invoicing: Lessons from EFRIS and How to Prepare
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; Updated August 2026</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">
        <div className="border-l-[3px] border-brand pl-5">
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            The evolution of tax compliance across East Africa follows a predictable arc: first, manual ledgers; second, post-issuance electronic reporting (like Kenya's eTIMS); and third, real-time pre-clearance. Looking at regional implementations like Uganda's EFRIS reveals exactly what breaks in small business operations when the tax authority sits inside every transaction.
          </p>
        </div>

        <h2 className="text-xl font-display font-semibold text-ink">What Breaks When Pre-Clearance Arrives</h2>
        <p className="text-ink-soft leading-relaxed">
          When an invoicing system requires synchronous server approval before printing a receipt, ordinary connectivity drops become existential business interruptions. Retailers, distributors, and service providers cannot afford systems that stall at the checkout counter.
        </p>

        <h3 className="text-lg font-display font-semibold text-ink">Building Operational Resilience</h3>
        <ul className="list-disc pl-6 space-y-2 text-ink-soft">
          <li><strong>Offline Queuing & Local Signing:</strong> Systems must store and locally sign transactions when connection drops, syncing automatically upon reconnection without halting sales.</li>
          <li><strong>Item Code Discipline:</strong> Mismatched catalog descriptions or incorrect HS codes trigger instant server rejections. Clean inventory master data is no longer optional.</li>
          <li><strong>Proactive Reconciliation:</strong> Automated pre-flight validation against tax authority databases prevents month-end surprises.</li>
        </ul>

        <div className="bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-lg font-semibold text-ink mb-2">Want compliance architecture built for future-proof resilience?</p>
          <a href="https://wa.me/254717344440?text=Hi%2C%20I%20want%20to%20discuss%20robust%20eTIMS%20and%20compliance%20architecture" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold px-6 py-3 rounded-md hover:bg-brand-hover transition-colors">
            Talk to Our Engineering Team on WhatsApp <ArrowRight size={14} weight="bold" />
          </a>
        </div>

        <FAQSection faqSchema={faqSchema} />
        <ArticleGrid currentSlug="efris-lessons-pre-clearance" />
      </div>
    </>
  )
}