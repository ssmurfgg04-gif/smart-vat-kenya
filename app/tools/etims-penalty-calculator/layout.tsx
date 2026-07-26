import type { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"

export const metadata: Metadata = constructMetadata({
  title: "eTIMS Penalty Calculator Kenya (KES 50,000/Month)",
  description:
    "Calculate what KRA eTIMS non-compliance costs you — KES 50,000 per month basic, KES 500,000 for integration failure, plus late VAT filing penalties and interest.",
  path: "/tools/etims-penalty-calculator",
  keywords: [
    "etims penalty calculator",
    "kra etims penalty kenya",
    "etims 50000 penalty",
    "etims non compliance cost kenya",
    "kra penalty calculator",
  ],
})

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
