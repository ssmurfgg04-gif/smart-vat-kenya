import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "KRA PIN Registration for Foreigners in Kenya (2026 Guide)",
  description: "Complete guide for non-citizens and expatriates on how to get a KRA PIN in Kenya. Requirements, passport upload, work permits, and online iTax steps.",
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
      name: "Can a foreigner get a KRA PIN in Kenya?",
      acceptedAnswer: { "@type": "Answer" as const, text: "Yes. Any non-citizen living, working, or earning income in Kenya or engaging in business requires a KRA PIN, just like citizens." }
    },
    {
      "@type": "Question" as const,
      name: "What documents does a foreigner need for a KRA PIN?",
      acceptedAnswer: { "@type": "Answer" as const, text: "You need a valid passport, a valid work permit or alien card (if applicable), and proof of physical address or employer details in Kenya." }
    }
  ]
}

export default function KraPinForeignersPage() {
  return (
    <>
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4">
            KRA PIN Registration for Foreigners in Kenya (2026 Guide)
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; Updated August 2026</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">
        <p className="text-ink-soft leading-relaxed">
          Non-citizens and expatriates operating in Kenya need a KRA PIN for opening bank accounts, renting property, paying taxes, or registering a company.
        </p>
        <h2 className="text-xl font-display font-semibold text-ink">Requirements for Foreign Nationals</h2>
        <ul className="list-disc pl-6 space-y-2 text-ink-soft">
          <li>Valid Passport (biographic page scan)</li>
          <li>Work Permit / Alien ID / Special Pass (issued by Immigration, if working in Kenya)</li>
          <li>Local physical address and phone number</li>
        </ul>
        <FAQSection faqSchema={faqSchema} />
        <ArticleGrid currentSlug="kra-pin-registration-foreigners" />
      </div>
    </>
  )
}