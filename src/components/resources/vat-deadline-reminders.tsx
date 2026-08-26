import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const WA_BASE = "https://wa.me/254717344440"

const articleSchema = {
  "@context": "https://schema.org" as const as const as const as const as const,
  "@type": "Article",
  headline: "Free KRA VAT Deadline Reminders on WhatsApp",
  description: "Never miss the 20th KRA VAT filing deadline again. Get automated WhatsApp reminders on the 17th of every month. Free service by Smart VAT Kenya.",
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
      name: "Are these WhatsApp deadline reminders truly free?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, our monthly VAT deadline reminders sent via WhatsApp are 100% free with no obligation to sign up for paid filing." }
    }
  ]
}

export default function VatDeadlineRemindersPage() {
  return (
    <>
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4">
            Free KRA VAT Deadline Reminders on WhatsApp
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; Updated August 2026</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">
        <div className="border-l-[3px] border-brand pl-5">
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            The 20th is coming. Your penalty doesn't have to.
            You know the date. You know the penalty. 
            Get a WhatsApp reminder 3 days before every deadline.
          </p>
        </div>

        <h2 className="text-xl font-display font-semibold text-ink">Never Miss the 20th Again</h2>
        <p className="text-ink-soft leading-relaxed">
          Missing the KRA monthly VAT deadline costs KES 10,000 automatically. We ping your WhatsApp on the 17th of every month so you are never caught out by portal closures or busy schedules.
        </p>

        <div className="bg-brand-muted rounded-lg p-8 text-center space-y-4">
          <h3 className="font-display text-xl font-semibold text-ink">Get Free WhatsApp Reminders</h3>
          <p className="text-ink-muted text-sm max-w-md mx-auto">
            Click below to open WhatsApp and subscribe to our free monthly deadline broadcast.
          </p>
          <a href={`${WA_BASE}?text=Hi%2C%20I%20want%20FREE%20VAT%20deadline%20reminders%20on%20WhatsApp`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold px-6 py-3.5 rounded-md hover:bg-brand-hover transition-colors">
            Get WhatsApp Reminders <ArrowRight size={14} weight="bold" />
          </a>
        </div>

        <FAQSection faqSchema={faqSchema} />
        <ArticleGrid currentSlug="vat-deadline-reminders" />
      </div>
    </>
  )
}