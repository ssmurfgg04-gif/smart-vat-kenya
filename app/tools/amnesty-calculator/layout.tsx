import type { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"

export const metadata: Metadata = constructMetadata({
  title: "KRA Tax Amnesty Calculator Kenya 2026",
  description:
    "Free KRA tax amnesty savings calculator. Estimate the penalties, interest, and fines waived on pre-2026 tax debts before the 31 December 2026 deadline.",
  path: "/tools/amnesty-calculator",
  keywords: [
    "kra tax amnesty calculator",
    "tax amnesty kenya 2026",
    "kra penalty waiver calculator",
    "kra amnesty deadline",
    "tax amnesty savings kenya",
  ],
})

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
