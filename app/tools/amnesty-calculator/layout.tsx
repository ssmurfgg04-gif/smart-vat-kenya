import type { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"

export const metadata: Metadata = constructMetadata({
  title: "KRA Tax Amnesty Calculator Kenya 2026",
  description:
    "Calculate your potential KRA tax amnesty savings for 2026. Estimate penalty and interest waiver amounts under the Finance Act 2026 amnesty programme.",
  path: "/tools/amnesty-calculator",
  keywords: ["kra tax amnesty calculator", "tax amnesty kenya 2026", "kra penalty waiver calculator", "kenya tax amnesty savings"],
})

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        id="amnesty-software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "KRA Tax Amnesty Calculator 2026",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            description:
              "Calculate your potential savings under the KRA tax amnesty 2026 programme. Estimates penalty and interest waiver amounts on pre-2026 tax debt.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "KES" },
            url: "https://smartvatkenya.co.ke/tools/amnesty-calculator",
          }),
        }}
      />
      {children}
    </>
  )
}
