import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"
import { FACTS } from "@/src/lib/vat-facts"

const WA_BASE = "https://wa.me/254717344440"

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "VAT Refund & Audit Defense in Kenya - How to Win",
  description: "Navigate KRA VAT audits, survive the Special Table / Tax Alerts review, and recover excess input VAT within the 12-month refund window under Finance Act rules.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "How do I defend my business against a KRA VAT audit?",
      acceptedAnswer: { "@type": "Answer" as const, text: "Maintain strict eTIMS invoice records, ensure buyer PINs match on all purchase documents, respond to KRA query letters within the 14-day window, and engage a registered KRA agent early." }
    }
  ]
}

export default function VatRefundAuditDefensePage() {
  return (
    <>
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4">
            VAT Refund & Audit Defense in Kenya - How to Win
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; Last verified {FACTS.lastVerified} against KRA guidelines</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">
        <div className="border-l-[3px] border-brand pl-5">
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            When KRA flags an input VAT claim or schedules a desk audit, waiting for the storm to pass makes it worse. Here is how professional tax agents manage audits, clear Tax Alerts, and recover legitimate VAT refunds within the 12-month legal window.
          </p>
        </div>

        <h2 className="text-xl font-display font-semibold text-ink">Surviving KRA Audits & Tax Alerts</h2>
        <p className="text-ink-soft leading-relaxed">
          KRA's 2026 validation engine flags discrepancies between eTIMS transmissions and filed returns automatically. If you receive a query letter, you have 14 days to respond with verified control numbers, supplier PINs, and trade documentation.
        </p>

        <div className="bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-lg font-semibold text-ink mb-2">Facing an audit or need help claiming a VAT refund?</p>
          <a href={`${WA_BASE}?text=Hi%2C%20I%20need%20help%20with%20a%20VAT%20refund%20or%20audit%20defense`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold px-6 py-3 rounded-md hover:bg-brand-hover transition-colors">
            Get Audit Defense on WhatsApp <ArrowRight size={14} weight="bold" />
          </a>
        </div>

        <FAQSection faqSchema={faqSchema} />
        <ArticleGrid currentSlug="vat-refund-audit-defense" />
      </div>
    </>
  )
}