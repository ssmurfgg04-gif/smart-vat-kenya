const SITE = "https://smartvatkenya.co.ke"

// Featured anchors for the feed: the special-edition deep dives + core pillars.
const featured = [
  { slug: "cetis-kenya-2027", title: "CETIS Kenya 2027: Pre-Clearance e-Invoicing Explained" },
  { slug: "kra-tax-amnesty-2026", title: "KRA Tax Amnesty 2026: 100% Penalty and Interest Waiver" },
  { slug: "consolidated-cargo-benchmark-kenya", title: "Consolidated Cargo Tax Kenya: New Sh2M Benchmark" },
  { slug: "youtube-5-percent-tax-kenya", title: "YouTube 5% Tax Kenya: What You Actually Lose" },
  { slug: "real-tax-bill-kenyan-sme", title: "The Real Tax on Running a Small Business in Kenya" },
  { slug: "vat-registration-options-kenya", title: "VAT Registration Kenya: Compare All 3 Options" },
  { slug: "kra-vat-penalties-reference", title: "KRA VAT Penalties Kenya 2026: Complete Reference" },
  { slug: "vat-threshold-kenya", title: "VAT Threshold Kenya: KES 5M or 8M? The Real Answer" },
  { slug: "vat-auto-populated-return", title: "KRA Auto-Populated VAT Return Guide" },
  { slug: "etims-onboarding-guide", title: "eTIMS Kenya Onboarding Guide 2026" },
  { slug: "vat-fintech-digital-payments-kenya", title: "VAT on Fintech and Digital Payments in Kenya" },
  { slug: "vat-commercial-rent-kenya", title: "VAT on Commercial Rent Kenya: When 16% Applies" },
  { slug: "vat-rates-kenya", title: "Kenya VAT Rates 2026: 16% Standard + Zero-Rated & Exempt List" },
  { slug: "how-to-file-vat-return-on-itax", title: "How to File Your VAT Return on KRA iTax" },
  { slug: "kra-penalty-for-late-vat-filing", title: "KRA Penalty for Late VAT Filing" },
  { slug: "faq", title: "KRA VAT FAQ - All Your Questions Answered" },
]

export async function GET() {
  const now = new Date().toUTCString()

  const entries = featured
    .map(
      (a) => `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${SITE}/resources/${a.slug}/</link>
      <guid isPermaLink="true">${SITE}/resources/${a.slug}/</guid>
      <description>${escapeXml(a.title)} — practical Kenya VAT guidance from SmartVAT Kenya, verified against the VAT Act (Cap. 476), the Tax Procedures Act (Cap. 469) and KRA guidance.</description>
    </item>`
    )
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SmartVAT Kenya — Practical Kenya VAT &amp; KRA Compliance</title>
    <link>${SITE}/</link>
    <description>Guides, calculators, statistics and open datasets for Kenyan SMEs: VAT registration, iTax filing, eTIMS compliance, KRA penalties and the 2026 amnesty. Every claim traceable to primary legislation.</description>
    <language>en-ke</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
${entries}
  </channel>
</rss>`

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } })
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}
