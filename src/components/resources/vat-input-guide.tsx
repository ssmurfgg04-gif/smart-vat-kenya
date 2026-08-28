import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "VAT Input Tax in Kenya: Complete Claim & eTIMS Guide (2026)",
  description: "Learn how input VAT works in Kenya, eTIMS invoice requirements, buyer PIN matching, and the 6-month claim window under current KRA rules.",
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
      name: "What is VAT input tax?",
      acceptedAnswer: { "@type": "Answer" as const, text: "Input VAT is the 16% tax you pay on business purchases and expenses, which can be offset against your output VAT collected from sales." }
    }
  ]
}

export default function VatInputGuidePage() {
  return (
    <>
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4">
            VAT Input Tax in Kenya: Complete Claim & eTIMS Guide (2026)
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; Updated August 2026</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">
        <p className="text-ink-soft leading-relaxed">
          Claiming input VAT correctly protects your business cash flow. Under KRA's 2026 validation rules, every input claim must be backed by an eTIMS invoice carrying your buyer PIN.
        </p>
        <h2 className="text-xl font-display font-semibold text-ink">Key Input VAT Rules</h2>
        <ul className="list-disc pl-6 space-y-2 text-ink-soft">
          <li>Must be claimed within 6 months of the tax period.</li>
          <li>Must be supported by a transmitted eTIMS invoice with your KRA PIN.</li>
          <li>Apportionment applies if you have both taxable and exempt supplies.</li>
        </ul>
        <FAQSection faqSchema={faqSchema} />
        <ArticleGrid currentSlug="vat-input-guide" />
      </div>
    </>
  )
}