import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "How to Create a KRA PIN Online in Kenya (2026 Guide)",
  description: "Complete guide on creating a new KRA PIN on iTax. Step-by-step instructions for citizens, businesses, and taxpayers.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-08",
  dateModified: "2026-08-08",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is creating a KRA PIN free?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, creating a KRA PIN directly on the iTax portal is completely free of charge." }
    }
  ]
}

export default function HowToCreateKraPinPage() {
  return (
    <>
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4">
            How to Create a KRA PIN Online in Kenya (2026 Guide)
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; Updated August 2026</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">
        <p className="text-ink-soft leading-relaxed">
          Creating a KRA PIN takes only a few minutes when you have your ID number and mobile phone ready.
        </p>
        <h2 className="text-xl font-display font-semibold text-ink">Process Overview</h2>
        <p className="text-ink-soft">
          Navigate to itax.kra.go.ke, select New PIN Registration, choose your category (Individual or Non-Individual), and follow the wizard.
        </p>
        <FAQSection faqSchema={faqSchema} />
        <ArticleGrid currentSlug="how-to-create-kra-pin" />
      </div>
    </>
  )
}