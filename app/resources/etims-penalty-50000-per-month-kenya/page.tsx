import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Warning, CheckCircle } from "@phosphor-icons/react/dist/ssr"
import { NewsletterSignup } from "@/components/newsletter-signup"

import { ArticleGrid } from "@/lib/resources"

export const metadata: Metadata = {
  title: "eTIMS Penalty KES 50,000 Per Month Kenya: How to Avoid the Fine",
  description:
    "KRA charges KES 50,000 per month for eTIMS non-compliance — separate from VAT penalties. Learn what triggers it, how to check your status, and how to avoid the fine.",
  alternates: { canonical: "https://smartvatkenya.co.ke/resources/etims-penalty-50000-per-month-kenya" },
}

export default function EtimsPenaltyPost() {
  return (
    <div className="max-w-[700px] mx-auto px-6 lg:px-10 py-12">
      <Link href="/resources" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium mb-8 transition-colors">
        <ArrowLeft size={14} aria-hidden="true" /> All Resources
      </Link>

      <article>
        <header className="mb-8">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Compliance Alert</p>
          <h1 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
            eTIMS Penalty KES 50,000 Per Month: How to Avoid the New Fine
          </h1>
          <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
            <time dateTime="2026-07-25">25 July 2026</time>
            <span>7 min read</span>
            <span>Smart VAT Kenya</span>
          </div>
        </header>

        <div className="space-y-5 text-[0.9rem] text-ink-soft leading-[1.75]">
          <div className="border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800/40 rounded-lg p-4 flex items-start gap-3">
            <Warning size={17} weight="fill" className="text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-ink text-[0.9rem]">KES 50,000 per month</p>
              <p className="text-[0.83rem] text-red-700 dark:text-red-400 leading-relaxed">
                This is a separate penalty from your normal VAT late-filing penalty. You can be
                charged both simultaneously.
              </p>
            </div>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">What Is the eTIMS Penalty?</h2>
          <p>
            The KRA Electronic Tax Invoice Management System (eTIMS) penalty is KES 50,000 per month
            for any registered person who fails to comply with eTIMS requirements. This is in addition
            to, not instead of, the standard VAT late-filing and late-payment penalties.
          </p>
          <p>
            If your eTIMS system integration fails, the penalty jumps to KES 500,000 per month.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">What Triggers the Fine?</h2>
          <ul className="space-y-1.5">
            {[
              "Not registered for eTIMS at all",
              "Registered but not issuing eTIMS invoices",
              "Issuing invoices outside the eTIMS system",
              "System integration failure (KES 500,000/month)",
              "Using a non-compliant invoicing system (for ERP-integrated users)",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <Warning size={14} className="text-amber-600 shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">How to Check Your Compliance Status</h2>
          <ol className="space-y-2">
            {[
              "Log into the KRA eTIMS portal.",
              "Check your compliance dashboard for any flags.",
              "Verify that your eTIMS device or app is actively transmitting invoices.",
              "Ensure your QR codes scan correctly using the KRA verification app.",
              "Confirm your ERP or POS system is properly integrated (if applicable).",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-semibold text-brand shrink-0 w-5">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">How to Avoid the Penalty</h2>
          <ul className="space-y-1.5">
            {[
              "Register for eTIMS if you have not already — choose between the mobile app, web portal, or ERP integration.",
              "Issue every invoice through eTIMS, even for cash sales and B2C transactions.",
              "Keep your eTIMS device or app active at all times.",
              "Test your QR codes monthly with the KRA verification app.",
              "If you use an ERP, ensure your integration is certified and maintained.",
              "File your VAT returns on time — the eTIMS penalty can stack on top of late-filing penalties.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="border border-brand/25 bg-brand-muted rounded-lg p-5 mt-8">
            <p className="font-semibold text-ink text-[0.9rem] mb-1">Need help with eTIMS?</p>
            <p className="text-[0.83rem] text-ink-muted mb-3">
              We handle eTIMS onboarding, compliance checks, and penalty waiver applications.
              First consultation is free.
            </p>
            <a href="https://wa.me/254721725958?text=I%20need%20help%20with%20eTIMS%20compliance"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-brand-hover transition-colors">
              Ask Us on WhatsApp <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">Related Resources</h2>
          <ul className="space-y-2">
            {[
              ["eTIMS Onboarding Guide 2026", "/resources/etims-onboarding-guide", "Step-by-step registration guide for all three eTIMS solution types"],
              ["eTIMS Compliant Invoicing Guide", "/resources/etims-invoicing-guide", "Mandatory fields, QR codes, B2B vs B2C rules, and verification"],
              ["KRA VAT Penalties Reference", "/resources/kra-vat-penalties-reference", "Complete penalty table including eTIMS penalties"],
            ].map(([title, slug, desc]) => (
              <li key={slug}>
                <Link href={slug} className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  {title}
                </Link>
                <span className="text-ink-muted"> — {desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

              {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="etims-penalty-50000-per-month-kenya" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Need help with VAT?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We handle your KRA VAT registration and monthly filing so you never miss a deadline.
          </p>
          <a
            href="https://wa.me/254721725958?text=Hi%2C%20I%20need%20help%20with%20VAT"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Register for KES 5,000
            <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
          </a>
          <div className="mt-4">
            <Link href="/resources" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              ← All Resources
            </Link>
          </div>
        </div>

      <div className="mt-8">
        <NewsletterSignup />
      </div>
    </div>
  )
}
