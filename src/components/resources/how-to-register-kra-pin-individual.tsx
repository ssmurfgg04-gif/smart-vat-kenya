import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Register a KRA PIN for Individuals in Kenya (2026)",
  description: "Step-by-step guide to registering an individual KRA PIN online via iTax. Requirements, ID card upload, and activation.",
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
      name: "What is needed for an individual KRA PIN?",
      acceptedAnswer: { "@type": "Answer", text: "You need your Kenyan National ID card and a mobile phone registered in your name." }
    }
  ]
}

export default function HowToRegisterKraPinIndividualPage() {
  return (
    <>
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4">
            How to Register a KRA PIN for Individuals in Kenya (2026)
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; Updated August 2026</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">
        <p className="text-ink-soft leading-relaxed">
          Getting an individual KRA PIN is free and done online through the iTax portal using your National ID card.
        </p>
        <h2 className="text-xl font-display font-semibold text-ink">Step-by-Step Registration</h2>
        <ol className="list-decimal pl-6 space-y-2 text-ink-soft">
          <li>Visit the KRA iTax portal at itax.kra.go.ke.</li>
          <li>Click on "New PIN Registration" and select Individual.</li>
          <li>Fill in your personal details matching your National ID.</li>
          <li>Submit the application and download your PIN certificate instantly.</li>
        </ol>
        <FAQSection faqSchema={faqSchema} />
        <ArticleGrid currentSlug="how-to-register-kra-pin-individual" />
      </div>
    </>
  )
}