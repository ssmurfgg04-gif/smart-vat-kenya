import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "@phosphor-icons/react/dist/ssr"

export const metadata: Metadata = {
  title: "Kenya VAT Knowledge Base — Free KRA Guides for SMEs 2026",
  description:
    "Free, definitive Kenya VAT guides. How to register for VAT on KRA iTax, calculate 16% VAT, file monthly returns, apply for a KRA penalty waiver, and decide if you need to register. Written for Kenyan SMEs.",
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
]

function formatReadTime(t: string) {
  return t
}

export default function ResourcesPage() {
  const [featured, ...rest] = pillars

  return (
    <div className="bg-canvas min-h-[100dvh]">
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
            All 5 definitive guides
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
