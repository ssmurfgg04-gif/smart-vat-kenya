import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const WA_BASE = "https://wa.me/254721725958"

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "My Nephew Can Do My VAT — Should He? The Professional Nephew Test",
  description: "Comparing family favors (your nephew who knows computers) vs professional KRA agency filing. Accountability, KES 17th guarantee, and M-PESA receipts.",
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
      name: "Is it safe to let a family member handle my KRA iTax profile?",
      acceptedAnswer: { "@type": "Answer", text: "While well-intentioned, family members often lack liability protection, professional accountability, and deep knowledge of changing 2026 eTIMS and validation rules." }
    }
  ]
}

export default function NephewTestPage() {
  return (
    <>
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4">
            My Nephew Can Do My VAT — Should He? The Professional Nephew Test
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; Updated August 2026</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">
        <div className="border-l-[3px] border-brand pl-5">
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            Your nephew knows computers. He fixed your WiFi. 
            He can log into iTax. He's free. 
            But when the portal crashes at 11:47pm on the 20th, 
            will he answer? Will he know the USSD workaround? 
            Will he sign the M-PESA receipt?
          </p>
        </div>

        <h2 className="text-xl font-display font-semibold text-ink">The Professional Nephew Test</h2>

        <div className="border border-hairline rounded-lg overflow-hidden">
          <table className="w-full text-[0.83rem]">
            <thead>
              <tr className="border-b border-hairline bg-canvas-alt">
                <th className="text-left p-3.5 font-semibold text-ink">Factor</th>
                <th className="text-left p-3.5 font-semibold text-ink">Your Nephew</th>
                <th className="text-left p-3.5 font-semibold text-ink">Smart VAT Kenya</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              <tr>
                <td className="p-3.5 text-ink-muted">Cost</td>
                <td className="p-3.5 text-ink">Free (family favor)</td>
                <td className="p-3.5 text-ink font-semibold">KES 3,500/month flat</td>
              </tr>
              <tr>
                <td className="p-3.5 text-ink-muted">Tax expertise</td>
                <td className="p-3.5 text-ink">Good with laptops</td>
                <td className="p-3.5 text-ink font-semibold">Licensed KRA agents, eTIMS experts</td>
              </tr>
              <tr>
                <td className="p-3.5 text-ink-muted">Deadline night (11:47pm)</td>
                <td className="p-3.5 text-ink">Phone is off / studying</td>
                <td className="p-3.5 text-ink font-semibold">We file on the 17th</td>
              </tr>
              <tr>
                <td className="p-3.5 text-ink-muted">Accountability</td>
                <td className="p-3.5 text-ink">Family awkwardness</td>
                <td className="p-3.5 text-ink font-semibold">Contractual 17th Guarantee</td>
              </tr>
              <tr>
                <td className="p-3.5 text-ink-muted">Receipts</td>
                <td className="p-3.5 text-ink">None</td>
                <td className="p-3.5 text-ink font-semibold">Official M-PESA receipt</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-lg font-semibold text-ink mb-2">Upgrade from your nephew to professional peace of mind.</p>
          <a href={`${WA_BASE}?text=Hi%2C%20I%20want%20to%20switch%20to%20professional%20monthly%20filing`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold px-6 py-3 rounded-md hover:bg-brand-hover transition-colors">
            Start Monthly Filing — KES 3,500/mo <ArrowRight size={14} weight="bold" />
          </a>
        </div>

        <FAQSection faqSchema={faqSchema} />
        <ArticleGrid currentSlug="nephew-test" />
      </div>
    </>
  )
}