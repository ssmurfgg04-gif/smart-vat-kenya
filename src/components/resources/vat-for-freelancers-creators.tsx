import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"
import { FACTS } from "@/src/lib/vat-facts"

const WA_BASE = "https://wa.me/254717344440"

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "VAT for Freelancers & Creators in Kenya 2026",
  description: "Do digital creators, freelance developers, and remote consultants in Kenya need a KRA PIN and VAT registration? Threshold rules, digital services, and eTIMS compliance.",
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
      name: "Do freelance digital creators in Kenya need to register for VAT?",
      acceptedAnswer: { "@type": "Answer", text: `If your taxable turnover from freelance work reaches or exceeds ${FACTS.mandatoryThreshold} annually, VAT registration is mandatory. Below that, you can operate under Turnover Tax or register voluntarily.` }
    }
  ]
}

export default function VatForFreelancersCreatorsPage() {
  return (
    <>
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4">
            VAT for Freelancers & Creators in Kenya 2026
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; Last verified {FACTS.lastVerified} against KRA guidelines</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">
        <div className="border-l-[3px] border-brand pl-5">
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            From Upwork payouts to local brand sponsorships, digital creators and independent professionals in Kenya face increasingly strict KRA data-matching rules. Here is how VAT applies to freelance income in 2026.
          </p>
        </div>

        <h2 className="text-xl font-display font-semibold text-ink">When Does a Freelancer Need VAT?</h2>
        <p className="text-ink-soft leading-relaxed">
          If your gross annual income crosses {FACTS.mandatoryThreshold}, VAT registration is mandatory. If you earn below this threshold from international platforms (export of services), your zero-rated export status may allow tax-free invoicing while letting you claim input VAT.
        </p>

        <div className="bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-lg font-semibold text-ink mb-2">Are you a creator or freelancer needing tax registration?</p>
          <a href={`${WA_BASE}?text=Hi%2C%20I%20am%20a%20freelancer%20needing%20KRA%20tax%20or%20VAT%20help`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold px-6 py-3 rounded-md hover:bg-brand-hover transition-colors">
            Get Registered via WhatsApp — KES 5,000 <ArrowRight size={14} weight="bold" />
          </a>
        </div>

        <FAQSection faqSchema={faqSchema} />
        <ArticleGrid currentSlug="vat-for-freelancers-creators" />
      </div>
    </>
  )
}