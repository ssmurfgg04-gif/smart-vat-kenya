import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"
import { FACTS } from "@/src/lib/vat-facts"

const WA_BASE = "https://wa.me/254717344440"

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "eTIMS Penalties 2026 — Exact Figures From the Law",
  description: "A definitive legal breakdown of KRA eTIMS penalties under Tax Procedures Act s.86 (as amended by Finance Act 2026) and s.59A(5). Separating statutory law from internet myths.",
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
      name: "What are the exact eTIMS penalties under Kenyan law in 2026?",
      acceptedAnswer: { "@type": "Answer", text: `Under TPA s.86 (amended by Finance Act 2026), issuing a non-compliant invoice attracts ${FACTS.etimsNonCompliance}. Failing to integrate systems after notice costs ${FACTS.etimsIntegrationFailure}.` }
    }
  ]
}

export default function EtimsPenalties2026Page() {
  return (
    <>
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4">
            eTIMS Penalties 2026 — Exact Figures From the Law
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; Last verified {FACTS.lastVerified} against Tax Procedures Act</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">
        <div className="border-l-[3px] border-brand pl-5">
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            Internet blogs circulate alarming rumors of arbitrary KES 1 million fines or random KES 500,000 monthly penalties for eTIMS non-compliance. Here is what the enacted law (Tax Procedures Act as amended by Finance Act 2026) actually provides.
          </p>
        </div>

        <h2 className="text-xl font-display font-semibold text-ink">Statutory Penalty Breakdown</h2>
        <ul className="list-disc pl-6 space-y-3 text-ink-soft">
          <li><strong>Invoice Non-Compliance (TPA s.86):</strong> {FACTS.etimsNonCompliance}.</li>
          <li><strong>System Integration Failure (TPA s.59A(5)):</strong> {FACTS.etimsIntegrationFailure}.</li>
        </ul>

        <div className="bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-lg font-semibold text-ink mb-2">Worried about eTIMS compliance or penalties?</p>
          <a href={`${WA_BASE}?text=Hi%2C%20I%20need%20help%20with%20eTIMS%20compliance%20and%20avoiding%20penalties`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold px-6 py-3 rounded-md hover:bg-brand-hover transition-colors">
            Get eTIMS Help on WhatsApp <ArrowRight size={14} weight="bold" />
          </a>
        </div>

        <FAQSection faqSchema={faqSchema} />
        <ArticleGrid currentSlug="etims-penalties-2026" />
      </div>
    </>
  )
}