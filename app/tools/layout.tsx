import type { Metadata } from "next"
import { constructMetadata } from "@/lib/seo"

export const metadata: Metadata = constructMetadata({
  title: "Free KRA VAT Calculator Kenya 2026 | Penalty Waiver Wizard | iTax Error Guide",
  titleTemplate: "%s | Smart VAT Kenya",
  description:
    "Free Kenya VAT calculator (16% standard rate, zero-rated, exempt). Interactive KRA penalty waiver wizard with reason-based guidance, iTax portal error diagnosis tool, and VAT registration quiz. No sign-up required.",
  path: "/tools",
  keywords: [
    "vat calculator kra kenya",
    "kra vat calculator",
    "16% vat calculator kenya",
    "kenya vat standard rate 16% 2026",
    "vat calculator kenya 16%",
    "reverse vat calculator kenya",
    "kra penalty calculator kenya",
    "kra late filing penalty",
  ],
})

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
