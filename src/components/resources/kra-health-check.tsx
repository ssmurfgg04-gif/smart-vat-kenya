import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const WA_BASE = "https://wa.me/254721725958"

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Free KRA Status & Ledger Health Check (2026)",
  description: "Check your KRA iTax profile status, outstanding filing gaps, and Special Table / Tax Alert exposures before KRA flags you. Free check by Smart VAT Kenya.",
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
      name: "What is a KRA ledger health check?",
      acceptedAnswer: { "@type": "Answer", text: "A ledger health check is a review of your iTax profile and historical filing records to identify unfiled returns, unpaid penalties, or eTIMS data mismatches before KRA issues an assessment." }
    }
  ]
}

export default function KraHealthCheckPage() {
  return (
    <>
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4">
            Free KRA Status & Ledger Health Check (2026)
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; Updated August 2026</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">
        <div className="border-l-[3px] border-brand pl-5">
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            You've been avoiding the letter. The TCC request. The supplier asking for your PIN. 
            The fear isn't KRA — it's not knowing. 
            We'll check your iTax ledger. Tell you exactly where you stand. 
            Free. No obligation.
          </p>
        </div>

        <h2 className="text-xl font-display font-semibold text-ink">Why Check Your KRA Ledger Now?</h2>
        <p className="text-ink-soft leading-relaxed">
          With KRA's 2026 automated income and expense validation engine active, historical filing gaps or eTIMS mismatches trigger automated queries and Tax Alerts. Finding out about a liability before your customer requests a TCC gives you time to fix it under the 2026 Tax Amnesty.
        </p>

        <div className="bg-brand-muted rounded-lg p-8 text-center space-y-4">
          <h3 className="font-display text-xl font-semibold text-ink">Get Your Free KRA Health Check</h3>
          <p className="text-ink-muted text-sm max-w-md mx-auto">
            Send your KRA PIN via WhatsApp for an immediate status review by our registered agents.
          </p>
          <a href={`${WA_BASE}?text=Hi%2C%20I%20want%20a%20FREE%20KRA%20Health%20Check%20for%20my%20PIN`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold px-6 py-3.5 rounded-md hover:bg-brand-hover transition-colors">
            Request Free Health Check on WhatsApp <ArrowRight size={14} weight="bold" />
          </a>
        </div>

        <FAQSection faqSchema={faqSchema} />
        <ArticleGrid currentSlug="kra-health-check" />
      </div>
    </>
  )
}