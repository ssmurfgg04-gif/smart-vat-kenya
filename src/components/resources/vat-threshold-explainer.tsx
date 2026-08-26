import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"
import { FACTS } from "@/src/lib/vat-facts"

const WA_BASE = "https://wa.me/254717344440"

const articleSchema = {
  "@context": "https://schema.org" as const as const as const as const as const,
  "@type": "Article",
  headline: "VAT Threshold Kenya 2026 - KES 5M or 8M? The Real Answer",
  description: "Resolving the confusion between the operative KES 5 million VAT registration threshold and the proposed KES 8 million Finance Act 2025 rule. Official KRA guidance verified.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
}

const faqSchema = {
  "@context": "https://schema.org" as const as const as const as const as const,
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the VAT threshold in Kenya 5 million or 8 million?",
      acceptedAnswer: { "@type": "Answer", text: `The operative mandatory threshold is ${FACTS.mandatoryThreshold}. While the Finance Act 2025 proposed raising it to KES 8 million, KRA's official iTax guidance and tax professional summaries confirm 5 million remains the enforced law.` }
    }
  ]
}

export default function VatThresholdExplainerPage() {
  return (
    <>
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4">
            VAT Threshold Kenya 2026 - KES 5M or 8M? The Real Answer
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; Last verified {FACTS.lastVerified} against KRA guidance</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">
        <div className="border-l-[3px] border-brand pl-5">
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            Every blog in Kenya disagrees on whether the VAT registration threshold is KES 5 million or KES 8 million. Here is what KRA's primary guidance and the statute actually enforce.
          </p>
        </div>

        <h2 className="text-xl font-display font-semibold text-ink">The Operative Rule: KES 5 Million</h2>
        <p className="text-ink-soft leading-relaxed">
          Under section 34 of the VAT Act (Cap. 476), you must register for VAT within 30 days once your taxable turnover reaches or exceeds <strong>{FACTS.mandatoryThreshold}</strong> in any 12-month period. 
        </p>
        <p className="text-ink-soft leading-relaxed">
          The confusion around <strong>KES 8 million</strong> stems from proposals in the Finance Act 2025. However, as verified against KRA's official portal guidance and professional tax summaries (PwC, etc.), that increase has not been brought into active legal force via Gazette notice. Operating on the assumption that 8 million is law risks a non-registration penalty of {FACTS.nonRegistrationPenalty}.
        </p>

        <div className="bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-lg font-semibold text-ink mb-2">Unsure if you crossed the threshold?</p>
          <a href={`${WA_BASE}?text=Hi%2C%20I%20want%20to%20check%20if%20my%20business%20needs%20to%20register%20for%20VAT`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold px-6 py-3 rounded-md hover:bg-brand-hover transition-colors">
            Check With Our Agents on WhatsApp <ArrowRight size={14} weight="bold" />
          </a>
        </div>

        <FAQSection faqSchema={faqSchema} />
        <ArticleGrid currentSlug="vat-threshold-explainer" />
      </div>
    </>
  )
}