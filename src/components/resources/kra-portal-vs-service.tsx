import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const WA_BASE = "https://wa.me/254717344440"

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "Register for VAT Yourself on iTax or Pay KES 5,000? The Honest Math",
  description: "An honest comparison of DIY VAT registration on KRA iTax vs hiring Smart VAT Kenya. Portal crashes, 14+ error codes, time cost, and penalty risk.",
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
      name: "Is KRA iTax registration really free if I do it myself?",
      acceptedAnswer: { "@type": "Answer" as const, text: "Yes, KRA does not charge a filing fee for registration. However, DIY costs you 3 weeks of portal errors, potential late registration penalties, and lost business hours." }
    },
    {
      "@type": "Question" as const,
      name: "What happens if the iTax portal crashes while I am registering?",
      acceptedAnswer: { "@type": "Answer" as const, text: "You lose your session data and have to start over. Smart VAT Kenya handles portal friction for you entirely via WhatsApp." }
    }
  ]
}

export default function KraPortalVsServicePage() {
  return (
    <>
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4">
            Register for VAT Yourself on iTax or Pay KES 5,000? The Honest Math
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; Updated August 2026</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">
        <div className="border-l-[3px] border-brand pl-5">
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            The portal is free. The penalty for getting it wrong is KES 10,000. 
            The 11:47pm timeout isn't a glitch - it's the system telling you 
            it wasn't built for you. We file on the 17th. You never touch iTax.
          </p>
        </div>

        <h2 className="text-xl font-display font-semibold text-ink">The Honest Comparison</h2>
        
        <div className="border border-hairline rounded-lg overflow-hidden">
          <table className="w-full text-[0.83rem]">
            <thead>
              <tr className="border-b border-hairline bg-canvas-alt">
                <th className="text-left p-3.5 font-semibold text-ink">Factor</th>
                <th className="text-left p-3.5 font-semibold text-ink">DIY on iTax</th>
                <th className="text-left p-3.5 font-semibold text-ink">Smart VAT Kenya</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              <tr>
                <td className="p-3.5 text-ink-muted">Cost</td>
                <td className="p-3.5 text-ink">Free</td>
                <td className="p-3.5 text-ink font-semibold text-brand">KES 5,000 flat</td>
              </tr>
              <tr>
                <td className="p-3.5 text-ink-muted">Time</td>
                <td className="p-3.5 text-ink">3 weeks, 14+ errors</td>
                <td className="p-3.5 text-ink font-semibold">1–3 working days</td>
              </tr>
              <tr>
                <td className="p-3.5 text-ink-muted">Deadline risk</td>
                <td className="p-3.5 text-ink">You vs 11:47pm crash</td>
                <td className="p-3.5 text-ink font-semibold">We file 17th, guaranteed</td>
              </tr>
              <tr>
                <td className="p-3.5 text-ink-muted">Error accountability</td>
                <td className="p-3.5 text-ink">Yours (KES 10k penalty)</td>
                <td className="p-3.5 text-ink font-semibold">Ours (we fix free)</td>
              </tr>
              <tr>
                <td className="p-3.5 text-ink-muted">Support channel</td>
                <td className="p-3.5 text-ink">KRA call centre queue</td>
                <td className="p-3.5 text-ink font-semibold">WhatsApp (replies in minutes)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-lg font-semibold text-ink mb-2">Ready to let us handle the portal?</p>
          <a href={`${WA_BASE}?text=Hi%2C%20I%20want%20to%20register%20for%20VAT%20with%20Smart%20VAT`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold px-6 py-3 rounded-md hover:bg-brand-hover transition-colors">
            Start Registration - KES 5,000 <ArrowRight size={14} weight="bold" />
          </a>
        </div>

        <FAQSection faqSchema={faqSchema} />
        <ArticleGrid currentSlug="kra-portal-vs-service" />
      </div>
    </>
  )
}