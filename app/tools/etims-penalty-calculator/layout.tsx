import type { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"

export const metadata: Metadata = constructMetadata({
  title: "eTIMS Penalty Calculator Kenya (KES 50,000/Month)",
  description:
    "Calculate your KRA eTIMS non-compliance penalty. Each month without eTIMS costs KES 50,000. See your total exposure instantly.",
  path: "/tools/etims-penalty-calculator",
  keywords: ["etims penalty calculator kenya", "etims fine calculator", "kra etims penalty 50000 per month", "etims non-compliance penalty"],
})

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        id="etims-penalty-software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "eTIMS Penalty Calculator Kenya",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            description:
              "Calculate total KRA eTIMS non-compliance penalties. Each month without eTIMS registration costs KES 50,000 in penalties.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "KES" },
            url: "https://smartvatkenya.co.ke/tools/etims-penalty-calculator",
          }),
        }}
      />
      {children}
    </>
  )
}
