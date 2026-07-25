import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { ArrowRight, Clock } from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "Kenya VAT Knowledge Base — Free KRA Guides for SMEs 2026",
  description:
    "Free Kenya VAT knowledge base for SMEs. How to register for VAT on KRA iTax, calculate 16% VAT, file nil returns, apply for the KRA tax amnesty programme, file monthly returns, get a KRA penalty waiver, and decide if you need to register for VAT. Written for Kenyan SMEs.",
  keywords: [
    "how to register for vat in kenya",
    "kra penalty for late vat filing",
    "how to calculate vat in kenya",
    "how to file vat return on itax",
    "do i need to register for vat kenya",
    "vat registration requirements kenya",
    "kra vat guide kenya 2026",
    "itax vat filing guide kenya",
    "kra penalty waiver kenya 2026",
    "zero rated vat kenya guide",
    "vat calculator kenya 16 percent",
    "kenya vat knowledge base",
    "kra tax guide kenyan smes",
  ],
  alternates: { canonical: "https://smartvatkenya.co.ke/resources" },
}

// The 5 definitive pillars — titles and descriptions written to exactly match
// how Kenyans phrase their Google searches.
const pillars = [
  {
    slug: "how-to-register-for-vat-in-kenya",
    number: "01",
    label: "VAT Registration",
    title: "How to Register for VAT in Kenya on iTax (Step-by-Step Guide 2026)",
    bluf:
      "To register for VAT in Kenya, your business must have annual taxable turnover of over KES 5 million. You apply directly on the KRA iTax portal using your KRA PIN, national ID, and bank details. The process takes 1 to 3 working days.",
    readTime: "9 min",
    tags: ["VAT Registration", "KRA", "iTax"],
    featured: true,
  },
  {
    slug: "kra-penalty-for-late-vat-filing",
    number: "02",
    label: "KRA Penalties",
    title: "KRA Penalty for Late VAT Filing: How Much is it and How to Apply for a Waiver",
    bluf:
      "Filing your VAT return after the 20th of the month attracts an automatic KES 10,000 penalty plus 5% of the tax due, plus 1% interest per month. Here is exactly how to calculate your exposure — and what to do if you have already missed a deadline.",
    readTime: "7 min",
    tags: ["KRA Penalty", "Waiver", "Late Filing"],
    featured: false,
  },
  {
    slug: "how-to-calculate-vat-in-kenya",
    number: "03",
    label: "VAT Calculator",
    title: "How to Calculate 16% VAT in Kenya (With Free KRA VAT Calculator)",
    bluf:
      "The Kenya VAT rate is 16%. To add VAT: multiply your net price by 1.16. To extract VAT from a VAT-inclusive price: divide by 1.16. Zero-rated and exempt goods do not attract VAT. This guide explains every scenario with real KES examples.",
    readTime: "6 min",
    tags: ["VAT Calculator", "16% Rate", "Zero-Rated"],
    featured: false,
  },
  {
    slug: "how-to-file-vat-return-on-itax",
    number: "04",
    label: "Monthly Filing",
    title: "How to File Your VAT Return on KRA iTax (And What to Do When the Portal is Down)",
    bluf:
      "Your VAT return is due on the 20th of the month following your tax period. You file on the KRA iTax portal at itax.kra.go.ke. This guide walks you through every step — including what to do when the portal crashes on the 19th.",
    readTime: "10 min",
    tags: ["iTax Filing", "VAT Return", "M-PESA"],
    featured: false,
  },
  {
    slug: "do-i-need-to-register-for-vat-kenya",
    number: "05",
    label: "Should I Register?",
    title: "Do I Need to Register for VAT? A Simple Guide for Kenyan SMEs and Freelancers",
    bluf:
      "You must register if your annual taxable turnover exceeds KES 5 million. But even below that, voluntary registration lets you claim back input VAT on your business costs. This guide helps you decide — and explains what VAT registration actually means for your prices and customers.",
    readTime: "8 min",
    tags: ["Voluntary VAT", "SMEs", "Freelancers"],
    featured: false,
  },
  {
    slug: "itax-portal-not-working",
    number: "06",
    label: "iTax Errors",
    title: "KRA iTax Portal Not Working? Common iTax Errors and How to Fix Them (2026)",
    bluf:
      "Your KRA iTax portal not loading, throwing errors, or refusing to log in? Here are the 10 most common iTax errors in Kenya — login failures, timeouts, browser issues, and how to fix each one. Includes what to do when the portal crashes on deadline day.",
    readTime: "10 min",
    tags: ["iTax", "Portal Errors", "Troubleshooting"],
    featured: false,
  },
  {
    slug: "etims-onboarding-guide",
    number: "07",
    label: "eTIMS",
    title: "eTIMS Kenya Onboarding Guide 2026: How to Register for KRA Electronic Tax Invoicing",
    bluf:
      "eTIMS (Electronic Tax Invoice Management System) is KRA's mandatory electronic invoicing system for all businesses in Kenya. Learn how to choose the right solution type, register step-by-step, and avoid the KES 50,000/month non-compliance penalty.",
    readTime: "11 min",
    tags: ["eTIMS", "Onboarding", "Compliance"],
    featured: false,
  },
  {
    slug: "vat-vs-turnover-tax",
    number: "08",
    label: "Tax Regimes",
    title: "Turnover Tax vs VAT in Kenya: Which One Applies to Your Business?",
    bluf:
      "Turnover Tax (1-3% on gross sales) vs VAT (16% on value-add): which tax regime fits your Kenyan business? Compare rates, thresholds, compliance burden, and input VAT implications. Includes a decision framework for SMEs.",
    readTime: "8 min",
    tags: ["Turnover Tax", "VAT", "Decision Guide"],
    featured: false,
  },
  {
    slug: "kra-vat-penalties-reference",
    number: "09",
    label: "Penalty Reference",
    title: "KRA VAT Penalties Kenya 2026: Complete Reference Table & Waiver Guide",
    bluf:
      "Complete KRA VAT penalties reference: late filing (KES 10,000 or 5%), non-registration (up to KES 100,000), eTIMS non-compliance (KES 50,000/month), late payment (5% + 1%/month). Includes a step-by-step penalty waiver guide and worked examples.",
    readTime: "9 min",
    tags: ["Penalties", "Reference", "Waiver"],
    featured: false,
  },
  {
    slug: "vat-registration-checklist",
    number: "10",
    label: "Checklist",
    title: "VAT Registration Kenya Checklist 2026: Everything You Need Before You Apply",
    bluf:
      "Don't start your KRA VAT application without this checklist. From KRA PIN and national ID to bank details, business registration, CR12, and eTIMS setup — know exactly which documents you need before you open the iTax portal.",
    readTime: "6 min",
    tags: ["Checklist", "Documents", "Preparation"],
    featured: false,
  },
  {
    slug: "nil-returns-tax-amnesty",
    number: "11",
    label: "Nil Returns",
    title: "Nil Returns Kenya 2026: How to File on iTax + KRA Tax Amnesty Guide",
    bluf:
      "A nil return means you had zero sales and zero purchases in a month — but you still have to file by the 20th or pay KES 10,000. This guide explains how to file a nil VAT return in 5 minutes, what the KRA tax amnesty programme covers, and how to get penalty waivers.",
    readTime: "8 min",
    tags: ["Nil Returns", "Tax Amnesty", "Penalty Waiver"],
    featured: false,
  },
  {
    slug: "vat-for-startups-tech-businesses",
    number: "12",
    label: "Startups & Tech",
    title: "VAT for Startups and Tech Businesses in Kenya 2026: SaaS, Freelancers & Digital Services",
    bluf:
      "Your Kenyan tech startup must register for VAT once annual turnover exceeds KES 8 million. SaaS, software, and digital services sold to Kenyan customers are subject to 16% VAT. Exports are zero-rated. You can claim input VAT on laptops, cloud hosting, and software tools with valid eTIMS invoices.",
    readTime: "10 min",
    tags: ["Startups", "Tech", "SaaS"],
    featured: false,
  },
  {
    slug: "vat-special-table-risks",
    number: "13",
    label: "Special Table",
    title: "KRA VAT Special Table: How Flagged Suppliers Are Listed and How to Get Removed",
    bluf:
      "The KRA VAT Special Table blocks input VAT claims from flagged suppliers. Filing consecutive nil returns for 6+ months can land you on it. Removal requires 3-6 months of clean compliance. Learn how to check your status, protect your business, and get removed.",
    readTime: "9 min",
    tags: ["Special Table", "Compliance", "Risk"],
    featured: false,
  },
  {
    slug: "etims-invoicing-guide",
    number: "14",
    label: "eTIMS Invoicing",
    title: "eTIMS Compliant Invoice Guide Kenya 2026: Mandatory Fields, QR Codes & Verification",
    bluf:
      "An eTIMS-compliant invoice must include 10 mandatory fields: seller PIN, buyer PIN (B2B above KES 10K), QR code, server confirmation code, and more. Invoices outside eTIMS cannot be used for input VAT claims. Scan the QR code with KRA's free app to verify authenticity.",
    readTime: "8 min",
    tags: ["eTIMS", "Invoicing", "QR Code"],
    featured: false,
  },
  {
    slug: "vat-auto-populated-return",
    number: "15",
    label: "Auto-Populated Return",
    title: "KRA Auto-Populated VAT Return Kenya 2026: How It Works and How to Verify",
    bluf:
      "KRA's auto-populated VAT return pre-fills your sales and purchases using eTIMS and withholding data. But the data is often incomplete or incorrect. Learn how to review, correct, and file confidently — and what to do when the auto-populated amounts don't match your books.",
    readTime: "8 min",
    tags: ["Auto-Populated", "iTax", "Verification"],
    featured: false,
  },
  {
    slug: "input-vat-deduction-guide",
    number: "16",
    label: "Input VAT",
    title: "Input VAT Deduction Kenya 2026: Full Guide to Claiming Input Tax",
    bluf:
      "You can deduct input VAT on purchases that are directly attributable to taxable supplies — but only with a valid eTIMS invoice. This guide covers the 5 conditions for deduction, the apportionment formula for mixed supplies, import VAT, and what happens when input VAT exceeds output VAT.",
    readTime: "11 min",
    tags: ["Input VAT", "Apportionment", "eTIMS"],
    featured: false,
  },
  {
    slug: "withholding-vat-kenya",
    number: "17",
    label: "Withholding VAT",
    title: "Withholding VAT in Kenya 2026: A Complete Guide for Agents and Suppliers",
    bluf:
      "Withholding VAT requires appointed agents to deduct 2% (or 6% for petroleum) at source and remit to KRA within 5 days. Suppliers get a withholding certificate to claim the amount as paid. This guide explains who is an appointed agent, how to account for WHT VAT, and how suppliers claim refunds.",
    readTime: "10 min",
    tags: ["Withholding VAT", "Agents", "Refund"],
    featured: false,
  },
  {
    slug: "vat-digital-services-kenya",
    number: "18",
    label: "Digital Services",
    title: "VAT on Digital Services in Kenya 2026: Non-Resident & Local Provider Guide",
    bluf:
      "Digital services supplied to Kenyan customers are subject to 16% VAT. Non-resident providers must register via the simplified regime or appoint a tax representative. Locals supplying e-books, SaaS, streaming, and online courses must charge VAT. Exports of digital services are zero-rated.",
    readTime: "10 min",
    tags: ["Digital Services", "Non-Resident", "SaaS"],
    featured: false,
  },
  {
    slug: "vat-refund-guide-kenya",
    number: "19",
    label: "VAT Refunds",
    title: "KRA VAT Refund Guide Kenya 2026: How to Claim Excess Input VAT",
    bluf:
      "You can claim a VAT refund when your input VAT exceeds output VAT — for example, if you are a zero-rated exporter or have made large capital purchases. The refund window is 12 months from the date the tax became due. This guide covers the application process, timelines, documentation, and common rejection reasons.",
    readTime: "10 min",
    tags: ["VAT Refund", "iTax", "Excess Input"],
    featured: false,
  },
  {
    slug: "finance-act-vat-changes-kenya",
    number: "20",
    label: "Finance Act Changes",
    title: "Finance Act 2025 & 2026 VAT Changes: What Kenyan Businesses Need to Know",
    bluf:
      "Two Finance Acts have reshaped Kenya's VAT landscape — the KES 8M threshold (pending), reduced refund window to 12 months, fintech services now taxed at 16%, bad debt relief reverted to 3 years, and the 90:10 apportionment rule deleted. This guide summarises every change you need to know.",
    readTime: "9 min",
    tags: ["Finance Act", "2025", "2026", "Changes"],
    featured: false,
  },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
  ],
}

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Kenya VAT Knowledge Base",
  description: "Free, definitive Kenya VAT guides for SMEs. Covers registration, filing, penalties, and calculation.",
  url: "https://smartvatkenya.co.ke/resources",
  hasPart: [
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/how-to-register-for-vat-in-kenya", name: "How to Register for VAT in Kenya on iTax (Step-by-Step Guide 2026)" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/kra-penalty-for-late-vat-filing", name: "KRA Penalty for Late VAT Filing" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/how-to-calculate-vat-in-kenya", name: "How to Calculate 16% VAT in Kenya" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/how-to-file-vat-return-on-itax", name: "How to File Your VAT Return on KRA iTax" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/do-i-need-to-register-for-vat-kenya", name: "Do I Need to Register for VAT in Kenya?" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/itax-portal-not-working", name: "KRA iTax Portal Not Working? Common iTax Errors and Fixes" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/etims-onboarding-guide", name: "eTIMS Kenya Onboarding Guide 2026" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/vat-vs-turnover-tax", name: "Turnover Tax vs VAT in Kenya: Decision Guide" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/kra-vat-penalties-reference", name: "KRA VAT Penalties Kenya 2026: Complete Reference Table" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/vat-registration-checklist", name: "VAT Registration Kenya Checklist 2026" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/nil-returns-tax-amnesty", name: "Nil Returns Kenya 2026: File on iTax + KRA Tax Amnesty Guide" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/vat-for-startups-tech-businesses", name: "VAT for Startups and Tech Businesses in Kenya 2026" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/vat-special-table-risks", name: "KRA VAT Special Table: Risks and How to Avoid Being Flagged" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/etims-invoicing-guide", name: "eTIMS Compliant Invoice Guide Kenya 2026" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/vat-auto-populated-return", name: "KRA Auto-Populated VAT Return Guide 2026" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/input-vat-deduction-guide", name: "Input VAT Deduction Kenya 2026" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/withholding-vat-kenya", name: "Withholding VAT in Kenya 2026" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/vat-digital-services-kenya", name: "VAT on Digital Services in Kenya 2026" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/vat-refund-guide-kenya", name: "KRA VAT Refund Guide Kenya 2026" },
    { "@type": "Article", url: "https://smartvatkenya.co.ke/resources/finance-act-vat-changes-kenya", name: "Finance Act 2025 & 2026 VAT Changes Kenya" },
  ],
}

function formatReadTime(t: string) {
  return t
}

export default function ResourcesPage() {
  const [featured, ...rest] = pillars

  return (
    <div className="bg-canvas min-h-[100dvh]">
      <Script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="collection-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      {/* Page header */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.67rem] uppercase tracking-[0.18em] text-canvas/50 mb-4">
            Knowledge Base
          </p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-5 text-balance">
            Kenya VAT — definitive guides for SMEs.
          </h1>
          <p className="text-[0.95rem] text-canvas/65 max-w-[54ch] leading-relaxed">
            These are not daily posts. Each guide is a deep, definitive answer to one of the five
            questions Kenyan business owners type into Google every day. Written by KRA-registered
            VAT agents. Updated for 2026.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">

        {/* YMYL trust bar */}
        <div className="border border-hairline rounded-lg px-6 py-4 mb-14 flex flex-wrap items-center gap-x-8 gap-y-2">
          {[
            "Written by KRA-registered VAT agents",
            "Based on the Kenya VAT Act Cap. 476",
            "Cross-checked against current KRA iTax workflows",
            "Updated July 2026",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2 text-[0.78rem] text-ink-muted">
              <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 fill-brand shrink-0" aria-hidden="true">
                <path d="M10.28 2.28L4.75 7.81 1.72 4.78 0.5 6l4.25 4.25 6.75-6.75z" />
              </svg>
              {item}
            </span>
          ))}
        </div>

        {/* Featured pillar */}
        <section aria-labelledby="featured-label" className="mb-14">
          <p
            id="featured-label"
            className="font-mono text-[0.67rem] uppercase tracking-[0.18em] text-ink-muted mb-5"
          >
            Start here — most searched
          </p>
          <article className="border border-hairline rounded-lg p-8 lg:p-10 grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-mono text-[0.62rem] text-brand tracking-widest uppercase">
                  Guide {featured.number}
                </span>
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.6rem] uppercase tracking-widest bg-ink/5 text-ink-muted px-2.5 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="font-display text-[clamp(1.3rem,2.5vw,1.9rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
                <Link
                  href={`/resources/${featured.slug}`}
                  className="hover:text-brand transition-colors"
                >
                  {featured.title}
                </Link>
              </h2>
              {/* BLUF — the answer in the first paragraph */}
              <div className="border-l-[3px] border-brand pl-4 mb-5">
                <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-1.5">
                  Quick answer
                </p>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed">{featured.bluf}</p>
              </div>
              <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
                <span className="flex items-center gap-1.5">
                  <Clock size={12} aria-hidden="true" />
                  {featured.readTime} read
                </span>
                <span>Smart VAT Kenya</span>
              </div>
            </div>
            <Link
              href={`/resources/${featured.slug}`}
              className="shrink-0 inline-flex items-center gap-2 bg-ink text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-canvas-dark transition-colors whitespace-nowrap"
            >
              Read the full guide
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </Link>
          </article>
        </section>

        {/* 4-pillar grid */}
        <section aria-labelledby="all-guides-label">
          <p
            id="all-guides-label"
            className="font-mono text-[0.67rem] uppercase tracking-[0.18em] text-ink-muted mb-6"
          >
            All 14 definitive guides
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {rest.map((pillar) => (
              <article
                key={pillar.slug}
                className="border border-hairline rounded-lg p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[0.6rem] text-brand tracking-widest uppercase">
                    Guide {pillar.number}
                  </span>
                  {pillar.tags.slice(0, 1).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.58rem] uppercase tracking-widest bg-ink/5 text-ink-muted px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-[0.95rem] font-semibold text-ink leading-snug mb-3 flex-1 text-balance">
                  <Link
                    href={`/resources/${pillar.slug}`}
                    className="hover:text-brand transition-colors"
                  >
                    {pillar.title}
                  </Link>
                </h3>
                <p className="text-[0.8rem] text-ink-muted leading-relaxed mb-5 line-clamp-3">
                  {pillar.bluf}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[0.72rem] text-ink-muted">
                    <Clock size={11} aria-hidden="true" />
                    {formatReadTime(pillar.readTime)} read
                  </span>
                  <Link
                    href={`/resources/${pillar.slug}`}
                    className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-brand hover:text-brand-hover transition-colors"
                  >
                    Read the guide
                    <ArrowRight size={12} weight="bold" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
