import type { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"

export const metadata: Metadata = constructMetadata({
  title: "Withholding Tax (WHT) Calculator Kenya 2026",
  description:
    "Free Kenya withholding tax calculator. Calculate WHT on management fees, professional services, dividends, interest, royalties, and rental income at current KRA rates.",
  path: "/tools/withholding-tax",
  keywords: ["withholding tax calculator kenya", "wht calculator kenya", "kra withholding tax rates", "withholding tax kenya 2026"],
})

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        id="wht-software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Withholding Tax Calculator Kenya 2026",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            description:
              "Free Kenya withholding tax calculator. Calculate WHT on management fees, professional services, dividends, interest, royalties, and rental income.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "KES" },
            url: "https://smartvatkenya.co.ke/tools/withholding-tax",
          }),
        }}
      />
      {children}
    </>
  )
}
