import type { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"

export const metadata: Metadata = constructMetadata({
  title: "VAT vs Turnover Tax Calculator Kenya",
  description:
    "Compare your effective tax burden under VAT and Turnover Tax in Kenya. Enter your annual turnover and margin to see which KRA regime costs you less.",
  path: "/tools/vat-vs-tot",
  keywords: [
    "vat vs turnover tax kenya",
    "turnover tax calculator kenya",
    "tot vs vat kra",
    "which tax regime kenya",
    "turnover tax rate kenya 2026",
  ],
})

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
