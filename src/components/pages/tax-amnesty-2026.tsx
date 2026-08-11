"use client"

import { useEffect, useState } from "react"
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Warning,
  WhatsappLogo,
  SealCheck,
  ShieldCheck,
  CalendarCheck,
  Clock,
} from "@phosphor-icons/react/dist/ssr"
import { Testimonials } from "@/components/testimonials"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { FACTS } from "@/src/lib/vat-facts"

const WA_BASE = "https://wa.me/254717344440"
const WA_TEXT = encodeURIComponent("Hi, I'd like a FREE KRA Tax Amnesty ledger check before 31 Dec 2026")

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "KRA Tax Amnesty 2026 Ledger Check & Cleanup",
  description:
    "Free iTax ledger check to identify which 2026 KRA tax amnesty path applies to you, filing outstanding returns to unlock automatic penalty waivers, and structuring payment plans for old principal.",
  serviceType: "Tax Amnesty Consultation",
  provider: { "@type": "Organization", name: "Smart VAT Kenya" },
  areaServed: { "@type": "Country", name: "Kenya" },
  priceRange: "Free check — cleanup at a flat fee",
}

const paths = [
  {
    icon: CalendarCheck,
    title: "Paid your principal by 31 Dec 2025?",
    tag: "Automatic waiver",
    detail: "Your penalties, interest and fines are waived automatically under the Finance Act 2026 amnesty — no application needed. We just confirm it on your iTax ledger.",
  },
  {
    icon: ShieldCheck,
    title: "Late-filing penalties only — no principal owed?",
    tag: "Automatic waiver",
    detail: "Once all outstanding returns are filed, penalties are waived automatically. We file the returns and record the exact waiver date.",
  },
  {
    icon: Warning,
    title: "You owe principal from before 2026?",
    tag: "Waived only if principal is cleared",
    detail: "The penalties and interest drop off only if you clear the principal by 31 December 2026. We structure a payment plan you can actually afford.",
  },
]

const faqs = [
  {
    q: "What is the KRA tax amnesty 2026?",
    a: "The Finance Act 2026 amnesty waives 100% of penalties, interest and fines on liabilities accrued up to 31 December 2025. The waiver window runs from 1 July 2026 to 31 December 2026. It does not forgive principal — that part must still be paid.",
  },
  {
    q: "Do I need to apply for the amnesty?",
    a: "Not always. If you fully paid your principal by 31 December 2025, the waiver is automatic — no application. If you only have late-filing penalties and no principal, the waiver is also automatic once all outstanding returns are filed. That is why we recommend a free ledger check before filing anything.",
  },
  {
    q: "What is excluded from the amnesty?",
    a: "Anything that arose on or after 1 January 2026 is not covered. Active tax disputes are also excluded — those should be settled via Alternative Dispute Resolution first so the principal can qualify. And the principal itself is never forgiven; it must be cleared before the window closes.",
  },
  {
    q: "What does the free ledger check cost?",
    a: "It is free. We review your outstanding returns and tell you which of the three amnesty paths you qualify for. If you need outstanding returns filed or a payment plan structured, that is charged at a flat published fee — never a hidden percentage of any waiver.",
  },
  {
    q: "Why do it before 31 December 2026?",
    a: "The window closes on 31 December 2026 and no extension has been announced. The longer you wait, the harder it is to clear principal inside the window. KRA has run similar amnesties before — early phases recovered over KES 80 billion in principal.",
  },
  {
    q: "Is Smart VAT Kenya licensed to do this?",
    a: "Yes. We are a registered KRA tax agent and we file on the 17th (not the 20th) for every client. Your iTax credentials are handled by qualified staff and your data stays in Kenya.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
}

const steps = [
  {
    num: "01",
    title: "Send us your KRA PIN",
    desc: "Message us the PIN and any penalty notices you have. We confirm what we need within minutes.",
  },
  {
    num: "02",
    title: "Get your free readout",
    desc: "We return your position — amnesty path, outstanding returns, and rough penalty balance — with no obligation.",
  },
  {
    num: "03",
    title: "Decide, then we act",
    desc: "Authorize us to file outstanding returns and structure a payment plan before the window closes.",
  },
]

const excluded = [
  "Debt that arose on or after 1 January 2026 — not covered.",
  "The principal itself — it must be paid or structured to get the waiver.",
  "Active disputes — settle the principal via ADR first.",
  "The window is hard-capped at 31 December 2026.",
]

const included = [
  "Which of the three paths applies to you",
  "Outstanding returns that must be filed",
  "Rough 2025 penalty & interest balance",
  "What to pay (or not pay) before 31 Dec",
  "A plain-English next-steps note",
]

export default function TaxAmnesty2026Page() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date("2026-12-31T23:59:59Z")
    const tick = () => {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) {
        setDays(0); setHours(0); setMinutes(0); setSeconds(0)
        return
      }
      setDays(Math.floor(diff / 86400000))
      setHours(Math.floor((diff / 3600000) % 24))
      setMinutes(Math.floor((diff / 60000) % 60))
      setSeconds(Math.floor((diff / 1000) % 60))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
      { "@type": "ListItem", position: 2, name: "Tax Amnesty 2026", item: "https://smartvatkenya.co.ke/tax-amnesty-2026/" },
    ],
  }

  return (
    <>
      <script id="amnesty-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Header ──────────────────────────────────────────── */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto grid gap-8 lg:gap-12 lg:grid-cols-[1fr_400px] items-center">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-5 text-canvas/70 py-2 pr-4 pl-3 rounded-full bg-canvas/10">
              <span className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] tabular-nums">
                <Clock size={14} className="text-brand" weight="fill" aria-hidden="true" />
                {days}d : {hours}h : {minutes}m : {seconds}s
              </span>
              <span className="text-[0.7rem] text-canvas/50">until the window closes</span>
            </div>

            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">
              KRA Tax Amnesty 2026
            </p>
            <p className="font-mono text-[0.7rem] text-brand mb-6">
              Last verified {new Date(FACTS.lastVerified).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} against KRA guidance
            </p>
            <h1 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-semibold text-canvas tracking-tight leading-tight mb-5 text-balance">
              KRA is wiping out penalties —{" "}
              <span className="text-canvas/80 font-normal">but only until 31 December 2026.</span>
            </h1>
            <p className="text-[1rem] text-canvas/70 max-w-[56ch] leading-relaxed mb-6">
              Most Kenyan SMEs don&apos;t know they qualify for a 100% waiver of VAT penalties,
              interest and fines on debt accrued up to the end of 2025. Get a free iTax ledger check —
              we tell you exactly which of the three amnesty paths applies to you.
            </p>
            <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Trust signals">
              <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-canvas/80 bg-canvas/10 rounded-full px-3 py-1.5">
                <SealCheck size={12} weight="fill" className="text-brand" aria-hidden="true" />
                Registered KRA tax agent
              </span>
              <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-canvas/80 bg-canvas/10 rounded-full px-3 py-1.5">
                <CheckCircle size={12} weight="fill" className="text-brand" aria-hidden="true" />
                Free ledger check
              </span>
              <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-canvas/80 bg-canvas/10 rounded-full px-3 py-1.5">
                <ShieldCheck size={12} weight="fill" className="text-brand" aria-hidden="true" />
                We file on the 17th
              </span>
            </div>
            <a
              href={`${WA_BASE}?text=${WA_TEXT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
            >
              <WhatsappLogo size={16} weight="fill" aria-hidden="true" />
              Get my free ledger check
            </a>
          </div>

          {/* Right side summary card */}
          <aside className="bg-canvas/[0.06] border border-canvas/15 rounded-xl p-8 backdrop-blur hidden lg:block">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-canvas/60 mb-6">
              Amnesty Summary
            </p>
            <ul className="space-y-4 text-[0.85rem] text-canvas/80 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" />
                <span><strong>100% Waiver:</strong> All pre-2026 penalties & interest forgiven.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" />
                <span><strong>Deadline:</strong> Hard-capped at 31 December 2026.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" />
                <span><strong>Principal:</strong> Must be paid or structured to unlock waiver.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" />
                <span><strong>Free Check:</strong> We review your iTax ledger at zero cost.</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>

      {/* ── Three paths ──────────────────────────────────── */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="paths-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Three ways to qualify
          </p>
          <h2 id="paths-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-4 text-balance">
            Which amnesty path are you on?
          </h2>
          <p className="text-[0.9rem] text-ink-muted max-w-[52ch] leading-relaxed mb-10">
            Most penalties are waived automatically — no application required. The one thing you need
            to know first is which bucket your business is in. We&apos;ll tell you for free.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {paths.map((p) => (
              <div key={p.title} className="border border-hairline rounded-lg p-6 flex flex-col">
                <div className="shrink-0 w-10 h-10 rounded-full bg-brand-muted flex items-center justify-center mb-4">
                  <p.icon size={18} weight="duotone" className="text-brand" aria-hidden="true" />
                </div>
                <h3 className="font-display text-[1.05rem] font-semibold text-ink mb-1.5">{p.title}</h3>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-brand mb-3">{p.tag}</p>
                <p className="text-[0.85rem] text-ink-muted leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3 text-[0.82rem] text-ink-muted">
            <ShieldCheck size={16} weight="fill" className="text-brand shrink-0" aria-hidden="true" />
            <span>Not sure? That is exactly what the free check figures out for you — live, against your real iTax position.</span>
          </div>
        </div>
      </section>

      {/* ── What's excluded ───────────────────────────────── */}
      <section className="bg-canvas-alt px-6 lg:px-10 py-14">
        <div className="max-w-[1400px] mx-auto">
          <div className="border border-brand/20 bg-brand-muted rounded-lg p-6 lg:p-8 flex flex-col lg:flex-row lg:items-start gap-5">
            <div className="shrink-0 w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
              <Warning size={20} weight="fill" className="text-brand" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-display text-[1.05rem] font-semibold text-ink mb-3">
                The amnesty does not forgive everything
              </h2>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                {excluded.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.85rem] text-ink-soft leading-relaxed">
                    <Warning size={13} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[0.82rem] text-ink-muted mt-4 leading-relaxed">
                That&apos;s why rushing to file an amnesty application is a mistake. First know your
                path — then act. One free check tells you the fastest way to clear it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's included in the check ──────────────────── */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="included-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            The free check
          </p>
          <h2 id="included-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-4 text-balance">
            We look at your iTax position, so you don&apos;t guess.
          </h2>
          <p className="text-[0.9rem] text-ink-muted max-w-[48ch] leading-relaxed mb-10">
            No commitment. Send us your KRA PIN and we tell you your position — with numbers.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
            {included.map((item) => (
              <div key={item} className="bg-canvas-alt border border-hairline rounded-lg p-5 flex items-start gap-3">
                <CheckCircle size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-[0.85rem] text-ink-soft leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────── */}
      <section className="bg-canvas-dark px-6 lg:px-10 py-16" aria-labelledby="how-heading">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/55 mb-4">
            How it works
          </p>
          <h2 id="how-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-canvas tracking-tight mb-12 text-balance">
            From PIN to plan in about a day.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="border border-canvas/15 rounded-lg p-6">
                <p className="font-mono text-[0.7rem] text-canvas/40 tracking-widest mb-3">{step.num}</p>
                <h3 className="font-display text-[1.05rem] font-semibold text-canvas mb-2">{step.title}</h3>
                <p className="text-[0.85rem] text-canvas/65 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <section className="bg-brand-muted px-6 lg:px-10 py-12">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-[1.1rem] font-semibold text-ink">
              Free ledger check — find out your amnesty path today
            </p>
            <p className="text-[0.85rem] text-ink-muted mt-1">
              The window closes 31 December 2026. Fees for follow-on work stay flat.
            </p>
          </div>
          <a
            href={`${WA_BASE}?text=${WA_TEXT}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-3 rounded-md hover:bg-brand-hover transition-colors shrink-0"
          >
            Get my free check
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </section>

      <Testimonials />

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="bg-canvas px-6 lg:px-10 py-16" aria-labelledby="faq-heading">
        <div className="max-w-[800px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Frequently asked questions
          </p>
          <h2 id="faq-heading" className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-10 text-balance">
            Common questions about the 2026 tax amnesty.
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-hairline rounded-lg open:border-brand/30 transition-colors">
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none text-[0.9rem] font-medium text-ink hover:text-brand transition-colors">
                  {faq.q}
                  <ArrowUpRight size={14} className="shrink-0 text-ink-muted group-open:rotate-90 transition-transform" aria-hidden="true" />
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-[0.85rem] text-ink-muted leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────────────── */}
      <section className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-semibold text-canvas tracking-tight mb-4 text-balance">
            Don&apos;t let the deadline pass with penalties on your books.
          </h2>
          <p className="text-[0.93rem] text-canvas/65 max-w-[44ch] mx-auto leading-relaxed mb-8">
            Start with the free check. If you qualify, we file the returns and structure the plan
            before the 31 December 2026 window closes.
          </p>
          <a
            href={`${WA_BASE}?text=${WA_TEXT}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-6 py-3.5 rounded-md hover:bg-brand-hover transition-colors"
          >
            <WhatsappLogo size={16} weight="fill" aria-hidden="true" />
            Get my free ledger check
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
          <p className="text-[0.75rem] text-canvas/45 mt-5">
            Free check. Flat fees for any work. M-PESA accepted.
          </p>
        </div>
      </section>

      <section className="bg-canvas px-6 lg:px-10 py-16">
        <div className="max-w-[1400px] mx-auto">
          <NewsletterSignup />
        </div>
      </section>
    </>
  )
}