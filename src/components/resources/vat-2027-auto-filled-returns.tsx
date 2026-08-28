import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const WA_BASE = "https://wa.me/254717344440"

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "VAT 2027: KRA Pre-Filled Returns Are Coming - Prepare Now",
  description: "KRA's transition to pre-filled (auto-populated) VAT returns starting January 2027. How eTIMS data and iCMS customs integration will assemble your return automatically.",
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
      name: "What are KRA pre-filled VAT returns for 2027?",
      acceptedAnswer: { "@type": "Answer" as const, text: "Starting January 2027, KRA is moving to pre-populated returns where sales data from eTIMS and export data from iCMS are automatically assembled by the system, shifting the taxpayer's role from data entry to reconciliation." }
    }
  ]
}

export default function Vat2027AutoFilledPage() {
  return (
    <>
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4">
            VAT 2027: KRA Pre-Filled Returns Are Coming - Prepare Now
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; Updated August 2026</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">
        <div className="border-l-[3px] border-brand pl-5">
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            The traditional monthly routine of manually entering sales and purchase totals into iTax is coming to an end. By January 2027, KRA's multi-system integration means your VAT return will be assembled before you log in.
          </p>
        </div>

        <h2 className="text-xl font-display font-semibold text-ink">The End of Manual Data Entry</h2>
        <p className="text-ink-soft leading-relaxed">
          KRA's integration of eTIMS invoicing data and iCMS customs records means sales and import numbers flow directly into draft returns. Your role as a business owner shifts from data entry to verification and reconciliation.
        </p>

        <div className="bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-lg font-semibold text-ink mb-2">Want your returns reconciled automatically today?</p>
          <a href={`${WA_BASE}?text=Hi%2C%20I%20want%20to%20automate%20my%20monthly%20VAT%20filing%20with%20Smart%20VAT`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold px-6 py-3 rounded-md hover:bg-brand-hover transition-colors">
            Start Monthly Filing - KES 3,500/mo <ArrowRight size={14} weight="bold" />
          </a>
        </div>

        <FAQSection faqSchema={faqSchema} />
        <ArticleGrid currentSlug="vat-2027-auto-filled-returns" />
      </div>
    </>
  )
}