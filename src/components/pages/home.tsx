import {
  ArrowRight,
  ArrowsClockwise,
  Calculator,
  ChatCircle,
  CheckCircle,
  Clock,
  CurrencyDollar,
  FileText,
  Invoice,
  Lightning,
  Prohibit,
  ShieldCheck,
  UsersThree,
  WarningCircle,
  Star,
  Briefcase,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr"
import { RelatedLinks } from "@/components/related-links"
import React from "react"
import { FACTS } from "@/src/lib/vat-facts"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Kenya VAT standard rate in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `The Kenya VAT standard rate is ${FACTS.standardRate} as per KRA guidelines for 2026. This applies to most taxable goods and services. Essential items including basic foodstuffs, medical supplies, and exports are zero-rated (0%) or exempt.`,
      },
    },
    {
      "@type": "Question",
      name: "How much does VAT registration cost in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Smart VAT Kenya charges a flat fee of ${FACTS.prices.registration} for complete VAT registration, including iTax profile update and VAT PIN generation, completed in 1–3 working days.`,
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for late VAT filing in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `KRA imposes a penalty of ${FACTS.lateFilingPenalty}. VAT returns must be filed by the ${FACTS.filingDeadline}.`,
      },
    },
    {
      "@type": "Question",
      name: "When must a business register for VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `A business must register for VAT when its annual taxable turnover reaches or exceeds ${FACTS.mandatoryThreshold}. Voluntary registration is also possible from ${FACTS.voluntaryFrom}.`,
      },
    },
    {
      "@type": "Question",
      name: "How do I register for VAT online in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VAT registration is done via the KRA iTax portal at itax.kra.go.ke. The process involves updating your iTax profile, completing Form VAT 1, and uploading supporting documents. Smart VAT Kenya handles the entire process for KES 5,000.",
      },
    },
    {
      "@type": "Question",
      name: "Do you accept M-PESA for payment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Smart VAT Kenya accepts M-PESA for all services and provides official M-PESA transaction receipts for every payment.",
      },
    },
    {
      "@type": "Question",
      name: "What is eTIMS and do I need it for VAT registration in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "eTIMS (Electronic Tax Invoice Management System) is KRA's mandatory electronic invoicing system. All businesses in Kenya — VAT-registered or not — must onboard eTIMS and issue electronic invoices. From 2026, KRA validates all VAT returns against eTIMS invoice data.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for not registering for VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `KRA imposes a penalty of ${FACTS.nonRegistrationPenalty} for failure to register for VAT when required. This is separate from the KES 10,000 late-filing penalty.`,
      },
    },
    {
      "@type": "Question",
      name: "What is the VAT Special Table and why is my input VAT being rejected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The KRA VAT Special Table (and associated RAIS Tax Alerts) tracks suppliers under compliance review. If your supplier is flagged, input VAT claims involving their invoices are automatically blocked by iTax. Smart VAT Kenya checks this during onboarding.",
      },
    },
    {
      "@type": "Question",
      name: "Is the VAT registration threshold in Kenya KES 5 million or KES 8 million?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `${FACTS.thresholdStatus}`,
      },
    },
    {
      "@type": "Question",
      name: "How do I pay KRA VAT after filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VAT payment to KRA is made via M-PESA Paybill number 572572. Use your KRA PIN as the account number. Payments must clear before the 20th of the month following the tax period. Smart VAT Kenya provides M-PESA payment guidance with every filing.",
      },
    },
    {
      "@type": "Question",
      name: "Is it mandatory to register for VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `VAT registration is mandatory in Kenya when your annual taxable turnover exceeds ${FACTS.mandatoryThreshold}. However, you can voluntarily register below this threshold to claim input VAT credits. Failure to register when required attracts a penalty of ${FACTS.nonRegistrationPenalty}.`,
      },
    },
    {
      "@type": "Question",
      name: "What happens if I don't register for VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `If you fail to register for VAT when your turnover exceeds the mandatory threshold, KRA can impose penalties of ${FACTS.nonRegistrationPenalty}. Additionally, you cannot claim input VAT, and you risk audit, interest charges, and business closure.`,
      },
    },
    {
      "@type": "Question",
      name: "Can I register for VAT voluntarily in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can voluntarily register for VAT even if your annual turnover is below KES 5 million. This allows you to claim input VAT credits on your purchases, which can improve cash flow.",
      },
    },
    {
      "@type": "Question",
      name: "How long does VAT registration take in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VAT registration through Smart VAT Kenya typically takes 1–3 working days from the time you submit your documents via WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "What documents do I need for VAT registration in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need: (1) Your KRA PIN certificate, (2) Copy of your national ID, (3) Business registration documents (CR12/13 or business license), (4) Bank account details, (5) Business address proof. Smart VAT Kenya guides you through exactly what to submit.",
      },
    },
    {
      "@type": "Question",
      name: "Can I file VAT returns if I have zero sales in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can file a 'nil return' even if you have zero sales or zero output tax. Nil returns are required to maintain compliance and avoid penalties. Smart VAT Kenya files nil returns as part of monthly filing services.",
      },
    },
  ],
}

const WA_BASE = FACTS.contact.whatsappUrl

export default function HomePage() {
  return (
    <React.Fragment>
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ─── HERO ─── */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-8 lg:pt-10 pb-10 lg:pb-12">
          <div className="grid lg:grid-cols-[1fr_minmax(0,520px)] gap-10 lg:gap-14 items-center">
            <div className="max-w-[560px]">
              <p className="font-mono text-[0.7rem] font-semibold text-blue-600 mb-4 inline-flex items-center gap-2">
                <ShieldCheck size={14} weight="bold" aria-hidden="true" />
                Last verified {new Date(FACTS.lastVerified).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} against KRA guidance
              </p>

              <h1 className="font-display text-[1.95rem] sm:text-[2.35rem] lg:text-[2.85rem] font-bold leading-[1.08] tracking-tight text-[#14243e] mb-2 text-balance">
              Your eTIMS invoice just failed.
              <span className="block text-red-600">Your VAT return is due.</span>
            </h1>
              <p className="text-[1.08rem] lg:text-[1.2rem] font-semibold text-[#2c3a52] leading-snug mb-5">
              Send a screenshot on WhatsApp — get the fix in minutes, not days.
            </p>

            <p className="text-[0.92rem] leading-relaxed text-[#3f4f68] mb-5 max-w-[54ch]">
              <span className="font-semibold text-red-600">Rejected invoices. Pending sync. Locked accounts.</span>{" "}
              Overdue VAT registration. We diagnose on WhatsApp and handle the KRA work — you get back to business.
            </p>

            {/* 17th Guarantee */}
            <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50/70 px-4 py-2.5 mb-6 max-w-[54ch]">
              <span className="font-display shrink-0 rounded-md bg-red-600 text-white text-[0.75rem] font-bold px-2 py-1 leading-none">
                17th
              </span>
              <p className="text-[0.8rem] text-[#3f4f68] leading-snug">
                <strong className="text-[#14243e]">The 17th Guarantee:</strong> every return is filed three
                working days before KRA&apos;s deadline. If KRA rejects one, we fix it and resubmit free.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
              <a
                href={`${WA_BASE}?text=Hi%2C%20my%20eTIMS%20invoice%20isn%27t%20going%20through`} data-track="whatsapp-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto flex-col items-center justify-center bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg shadow-[0_10px_24px_-10px_rgba(220,38,38,0.6)] transition-colors"
              >
                <span className="inline-flex items-center gap-2.5 font-semibold text-[0.95rem]">
                  Fix My eTIMS Issue
                  <ArrowRight size={17} weight="bold" aria-hidden="true" />
                </span>
                <span className="text-[0.68rem] text-white/85 font-medium mt-0.5">
                  We&apos;ll tell you exactly what&apos;s wrong.
                </span>
              </a>
              <a
                href="/services/vat-registration/"
                className="inline-flex w-full sm:w-auto flex-col items-center justify-center border border-[#14243e] text-[#14243e] hover:bg-slate-50 px-7 py-3 rounded-lg transition-colors"
              >
                <span className="inline-flex items-center gap-2.5 font-semibold text-[0.95rem]">
                  Register for VAT — KES 5,000
                  <ArrowRight size={17} weight="bold" aria-hidden="true" />
                </span>
                <span className="text-[0.68rem] text-[#14243e]/80 font-medium mt-0.5">
                  We handle the iTax work. 1-3 working days.
                </span>
              </a>
            </div>

            <a
              href="/tools/"
              className="inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-[#14243e] hover:text-[#3f4f68] hover:underline mb-5"
            >
              <Calculator size={14} aria-hidden="true" />
              Just need to check a number? Free VAT calculator &rarr;
            </a>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { Icon: ShieldCheck, label: "100% iTax Compliant" },
                { Icon: CurrencyDollar, label: "M-PESA Receipts" },
                { Icon: Prohibit, label: "No Hidden Fees" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-[0.85rem] font-medium text-[#3f4f68]">
                  <Icon size={15} weight="bold" className="text-blue-600 shrink-0" aria-hidden="true" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - problem dashboard */}
          <div className="relative w-full max-w-[520px] mx-auto lg:mx-0 lg:justify-self-end">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_24px_60px_-24px_rgba(15,32,70,0.35)] overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" aria-hidden="true" />
                  <p className="font-display text-[1rem] font-semibold text-[#14243e]">
                    SmartVAT Dashboard
                  </p>
                </div>
                <span className="flex items-center gap-1.5 text-[0.72rem] font-medium text-[#3f4f68]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" aria-hidden="true" />
                  Live
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                <div className="flex items-center gap-4 px-5 py-4">
                  <span className="w-11 h-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Invoice size={22} weight="bold" aria-hidden="true" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[0.72rem] font-medium uppercase tracking-wide text-[#3f4f68]">eTIMS Invoice</p>
                    <p className="text-[0.95rem] font-medium text-[#14243e] truncate">Invalid Tax Details</p>
                  </div>
                  <span className="text-[0.72rem] font-bold uppercase tracking-wide bg-red-50 text-red-600 border border-red-200 rounded-md px-2.5 py-1 shrink-0">
                    Rejected
                  </span>
                </div>

                <div className="flex items-center gap-4 px-5 py-4">
                  <span className="w-11 h-11 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <FileText size={22} weight="bold" aria-hidden="true" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[0.72rem] font-medium uppercase tracking-wide text-[#3f4f68]">VAT Returns</p>
                    <p className="text-[0.95rem] font-medium text-[#14243e]">Aug 2026</p>
                  </div>
                  <span className="text-[0.72rem] font-bold uppercase tracking-wide bg-red-50 text-red-600 border border-red-200 rounded-md px-2.5 py-1 shrink-0">
                    Due
                  </span>
                  <span className="text-[0.8rem] font-semibold text-white bg-red-600 rounded-md px-3.5 py-2 shrink-0">
                    File Now
                  </span>
                </div>

                <div className="flex items-center gap-4 px-5 py-4">
                  <span className="w-11 h-11 rounded-lg bg-slate-100 text-[#3f4f68] flex items-center justify-center shrink-0">
                    <ArrowsClockwise size={22} weight="bold" aria-hidden="true" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[0.72rem] font-medium uppercase tracking-wide text-[#3f4f68]">KRA Sync</p>
                    <p className="text-[0.95rem] font-semibold text-red-600">Sync Failed</p>
                  </div>
                  <span className="text-[0.8rem] font-semibold text-white bg-red-600 rounded-md px-3.5 py-2 shrink-0">
                    Retry Sync
                  </span>
                </div>
              </div>
            </div>

            {/* Amnesty badge */}
            <div className="absolute -top-9 -right-3 sm:-right-6 rounded-lg bg-red-600 text-white px-4 py-3 shadow-[0_12px_30px_-8px_rgba(220,38,38,0.55)] ring-4 ring-white rotate-2">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] leading-tight">KRA Penalty Waived</p>
              <p className="text-[0.95rem] font-bold leading-tight mt-1">
                100% <span className="font-medium text-red-100">until 31 Dec 2026</span>
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST SECTION ─── */}
        <section className="bg-[#0f1f3d] px-6 lg:px-10 py-8" aria-label="Why businesses trust Smart VAT Kenya">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
            {[
              { Icon: Lightning, title: "Fast Resolution", body: "Most eTIMS issues diagnosed the same day." },
              { Icon: ShieldCheck, title: "Penalty Protection", body: "We help you qualify for the Tax Amnesty." },
              { Icon: UsersThree, title: "Human Support", body: "Real people. Real solutions." },
              { Icon: ChatCircle, title: "WhatsApp Support", body: "Send us a screenshot. We'll tell you exactly what's wrong.", whatsapp: true },
            ].map(({ Icon, title, body, whatsapp }) => (
              <div key={title} className="flex items-start gap-4">
                <span className={`shrink-0 rounded-lg p-2.5 ${whatsapp ? "bg-[#25D366]/15 text-[#25D366]" : "bg-blue-400/15 text-blue-300"}`}>
                  <Icon size={22} weight="bold" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-[0.98rem] font-semibold text-white mb-1">{title}</h3>
                  <p className="text-[0.83rem] text-blue-100/70 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── HUBS — KRA Help / Status / Deadlines (internal-link tightening) ─── */}
        <section className="bg-canvas py-8 px-6 lg:px-10 border-y border-hairline">
          <div className="max-w-[1400px] mx-auto grid gap-4 sm:grid-cols-3">
            {[
              { href: "/kra-help/", title: "KRA Problem Solver", desc: "32 common eTIMS, iTax & VAT fixes — diagnose your issue", Icon: ChatCircle },
              { href: "/kra-status/", title: "KRA System Status", desc: "Is iTax or eTIMS down right now? Live status + workarounds", Icon: ShieldCheck },
              { href: "/tax-deadlines/", title: "Tax Deadline Calendar", desc: "VAT 20th, PAYE 9th, amnesty 31 Dec — add reminders", Icon: Clock },
            ].map(({ href, title, desc, Icon }) => (
              <a key={href} href={href} className="border border-hairline rounded-xl p-5 bg-canvas-alt hover:border-brand/30 hover:shadow-sm transition-all group">
                <Icon size={20} weight="duotone" className="text-brand mb-3" aria-hidden="true" />
                <p className="font-display text-[0.95rem] font-semibold text-ink group-hover:text-brand transition-colors">{title}</p>
                <p className="text-[0.82rem] text-ink-muted leading-snug mt-1">{desc}</p>
                <span className="text-[0.78rem] font-medium text-brand mt-2 inline-block">Open →</span>
              </a>
            ))}
          </div>
        </section>

        {/* ─── SHAME BLOCK ─── */}
        <section className="bg-canvas py-12 px-6 lg:px-10">
          <div className="max-w-[1400px] mx-auto text-center">
            <p className="font-display text-[clamp(1.3rem,2.5vw,1.8rem)] font-semibold text-ink tracking-tight mb-2">
              You're not behind. KRA's portal was never built for you.
            </p>
            <p className="text-[0.9rem] text-ink-muted max-w-[48ch] mx-auto leading-relaxed">
              It was built for KRA. The crashes, the OTP failures, the 11:47pm timeout — that's the system 
              telling you it wasn't built for small business owners. We handle registration, eTIMS and monthly filing 
              for KES 5,000 + KES 3,500/month. M-PESA accepted. Fast replies on WhatsApp — typically within business hours.
            </p>
          </div>
        </section>

        {/* ─── STATUS BLOCK ─── */}
        <section className="bg-canvas-alt py-12 px-6 lg:px-10">
          <div className="max-w-[1400px] mx-auto text-center">
            <p className="font-display text-[clamp(1.3rem,2.5vw,1.8rem)] font-semibold text-ink tracking-tight mb-2">
              The tender said "attach a Tax Compliance Certificate."
            </p>
            <p className="text-[0.9rem] text-ink-muted max-w-[48ch] mx-auto leading-relaxed">
              That's when the VAT number stopped being optional. TCCs require a clean VAT record, 
              and clean records require eTIMS + on-time filing. Get registered in 1–3 working days, 
              filed by the 17th, and never wonder what KRA sees again.
            </p>
          </div>
        </section>

        {/* ─── TRUST BAND ─── */}
      <section className="bg-canvas-alt border-y border-hairline py-5 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4">
          {[
            "KRA-Compliant VAT Services",
            "200+ Businesses Supported",
            "On-Time Filing by the 17th",
            "eTIMS Onboarding Included",
            "M-PESA Payment Records Provided",
            "WhatsApp Support — Not Email Tickets",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2 text-[0.78rem] text-ink-muted">
              <svg viewBox="0 0 12 12" className="w-3 h-3 shrink-0 fill-brand" aria-hidden="true">
                <path d="M10.28 2.28L4.75 7.81 1.72 4.78 0.5 6l4.25 4.25 6.75-6.75z" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="bg-canvas py-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Why Kenyan SMEs struggle with VAT
          </p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold tracking-tight text-ink max-w-[40ch] leading-tight mb-4 text-balance">
            Why eTIMS and iTax filing is hard for Kenyan SME owners.
          </h2>
          <p className="text-[0.9rem] text-ink-muted max-w-[52ch] mb-16 leading-relaxed">
            KRA's{" "}
            <a href="/resources/itax-portal-not-working/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
              portal crashes 2–3 times per week
            </a>
            . Rejected invoices and pending-sync errors stall sales. Facilitators quote KES 15,000–30,000.
            Missing the 20th deadline costs KES 10,000 automatically.
          </p>

          <div className="space-y-0">
            {[
              {
                number: "01",
                problem: "Your eTIMS invoice won't go through",
                fix: "Error 500, pending sync, a locked account — usually mid-sale, with a customer waiting. We diagnose it over WhatsApp and tell you exactly what's wrong, often in minutes.",
                Icon: WarningCircle,
              },
              {
                number: "02",
                problem: "The iTax portal keeps returning errors",
                fix: "We navigate it for you — you send your KRA PIN and details over WhatsApp, we handle the rest. High first-attempt success — if KRA rejects a filing we fix and resubmit free.",
                Icon: FileText,
              },
              {
                number: "03",
                problem: "Traditional facilitators quote KES 15,000–30,000",
                fix: "Our published flat fee is KES 5,000. One price. No discovery calls, no negotiation, no hidden costs.",
                Icon: CurrencyDollar,
              },
              {
                number: "04",
                problem: "A single missed deadline costs KES 10,000",
                fix: "We file before the 20th every month as a matter of process — not a service you have to chase. We file on the 17th.",
                Icon: Clock,
              },
            ].map(({ number, problem, fix, Icon }, i) => (
              <div
                key={number}
                className={`grid lg:grid-cols-2 gap-8 py-10 border-t border-hairline ${
                  i % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className="flex gap-5 items-start">
                  <span className="font-mono text-[0.65rem] text-ink-muted mt-1 shrink-0 w-5">
                    {number}
                  </span>
                  <div className="flex gap-3 items-start">
                    <Icon size={20} weight="duotone" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="font-display text-[1.05rem] font-medium text-ink leading-snug">
                      {problem}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 lg:pl-8">
                  <CheckCircle size={18} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-[0.9rem] text-ink-soft leading-relaxed">{fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIY VS YOU ─── */}
      <section className="bg-canvas-alt py-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Free isn't free
          </p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold tracking-tight text-ink mb-6 text-balance">
            Doing it yourself on iTax is free. It's also three weeks, fourteen portal errors, and one penalty.
          </h2>
          <p className="text-[0.9rem] text-ink-muted max-w-[52ch] mb-16 leading-relaxed">
            The real enemy isn't accountants who charge KES 15,000–30,000. It's the <em>free</em> path that
            quietly costs more in your time, your sanity, and KES 10,000 penalties.
          </p>

          <div className="grid grid-cols-2 gap-4 lg:gap-5">
            <div className="bg-canvas rounded-lg border border-hairline p-4 sm:p-8">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-muted mb-4">Doing it yourself</p>
              <div className="space-y-4">
                {[
                  { label: "Time spent on the portal", value: "3 weeks, off-and-on", cost: "Hours you don't have" },
                  { label: "Errors encountered", value: "14+ portal errors", cost: "KRA Status Code 500, timeouts" },
                  { label: "Deadline risk", value: "KES 10,000 penalty", cost: "Automatic, non-negotiable" },
                  { label: "Input VAT protection", value: "Often missed", cost: "Lost money back" },
                ].map((r) => (
                  <div key={r.label} className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-4 border-b border-hairline last:border-0 pb-4 last:pb-0">
                    <div>
                      <p className="text-[0.88rem] font-semibold text-ink">{r.label}</p>
                      <p className="text-[0.76rem] text-ink-muted">{r.cost}</p>
                    </div>
                    <p className="text-[0.85rem] text-ink text-left sm:text-right font-medium">{r.value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[0.82rem] text-brand font-medium">Total: at least KES 10,000 + weeks of your time.</p>
            </div>

            <div className="bg-canvas-dark rounded-lg p-4 sm:p-8">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-canvas/60 mb-4">With Smart VAT Kenya</p>
              <div className="space-y-4">
                {[
                  { label: "Your time", value: "One WhatsApp message", cost: "We do the rest" },
                  { label: "Errors encountered", value: "Zero", cost: "We navigate iTax for you" },
                  { label: "Deadline risk", value: "Filed on the 17th", cost: "Never the 20th, never late" },
                  { label: "Input tax protection", value: "eTIMS-ready day one", cost: "Special Table checks included" },
                ].map((r) => (
                  <div key={r.label} className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-4 border-b border-canvas/15 last:border-0 pb-4 last:pb-0">
                    <div>
                      <p className="text-[0.88rem] font-semibold text-canvas">{r.label}</p>
                      <p className="text-[0.76rem] text-canvas/55">{r.cost}</p>
                    </div>
                    <p className="text-[0.85rem] text-brand text-left sm:text-right font-semibold">{r.value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[0.82rem] text-canvas/85 font-medium">KES 5,000 flat. You get your PIN in 1–3 days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VAT UNLOCKS ─── */}
      <section className="bg-canvas-dark py-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/60 mb-4">
            The upside
          </p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            A VAT number isn't a cost. It's your licence to grow.
          </h2>
          <p className="text-[0.9rem] text-canvas/70 max-w-[52ch] mb-16 leading-relaxed">
            Registration is the door. Filling unlocks what most small businesses never hear about — the upside
            that makes VAT worth it.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {[
              { Icon: Briefcase, title: "Win tenders & contracts", body: "Government and corporate clients require a valid VAT number and tax compliance certificate. Without it, you cannot bid." },
              { Icon: CheckCircle, title: "Sell to big buyers", body: "Corporate clients and importers want eTIMS-compliant VAT invoices. A VAT number makes your business credible." },
              { Icon: CurrencyDollar, title: "Claim input VAT back", body: "Money back on the VAT you pay on purchases — cash flow most unregistered businesses simply lose." },
              { Icon: TrendUp, title: "Import & grow", body: "Importing stock, expanding capacity, and qualifying for refunds all open up once you're VAT-registered." },
            ].map(({ Icon, title, body }) => (
              <article key={title} className="bg-canvas/[0.06] border border-canvas/15 rounded-lg p-5 lg:p-7">
                <Icon size={26} weight="duotone" className="text-brand mb-5" aria-hidden="true" />
                <h3 className="font-display text-[1.02rem] font-semibold text-canvas mb-2">{title}</h3>
                <p className="text-[0.83rem] text-canvas/70 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section
        className="bg-canvas-alt py-24 px-6 lg:px-10"
        id="pricing"
        aria-labelledby="pricing-heading"
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            Services &amp; pricing
          </p>
          <h2
            id="pricing-heading"
            className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold tracking-tight text-ink mb-14 text-balance"
          >
            KRA VAT services with published prices. No discovery calls required.
          </h2>

          <div className="grid grid-cols-2 gap-4 lg:gap-5">
            {/* Card 1 — eTIMS Rescue */}
            <article className="bg-canvas-dark rounded-lg p-4 sm:p-8 flex flex-col relative overflow-hidden">
              <span className="absolute top-0 right-0 font-mono text-[0.6rem] uppercase tracking-widest bg-brand text-canvas px-3 py-1.5 rounded-bl-lg">
                Most Common
              </span>
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-canvas/65 mb-4">
                Per incident
              </p>
              <h3 className="font-display text-xl font-semibold text-canvas mb-1">eTIMS Troubleshooting &amp; Rescue</h3>
              <p className="text-[0.85rem] text-canvas/80 mb-6 leading-relaxed">
                Invoice rejected, account locked, stuck on pending sync — we diagnose it over WhatsApp and fix it, usually same-day.
              </p>
              <p className="font-display text-[1.75rem] sm:text-[2.5rem] font-semibold text-canvas leading-none mb-1 tabular-nums">
                KES 1,500
              </p>
              <p className="text-[0.78rem] text-canvas/65 mb-5 sm:mb-8">per incident</p>
              <ul className="space-y-2.5 flex-1 mb-8" role="list">
                {[
                  "Diagnosed over WhatsApp",
                  "Fixed or escalated same-day",
                  "Applies whether or not you're VAT-registered",
                  "M-PESA receipt provided",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.85rem] text-canvas/85">
                    <CheckCircle size={14} weight="fill" className="text-canvas/55 shrink-0 mt-0.5" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`${WA_BASE}?text=I%20need%20eTIMS%20help`} data-track="whatsapp-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill block text-center bg-brand text-canvas text-sm font-semibold py-3 rounded-md transition-colors hover:bg-brand-hover"
              >
                Get eTIMS Help Now
              </a>
            </article>

            {/* Card 2 — VAT Registration */}
            <article className="bg-canvas rounded-lg border border-hairline p-4 sm:p-8 flex flex-col">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-muted mb-4">
                One-time
              </p>
              <h3 className="font-display text-xl font-semibold text-ink mb-1">VAT Registration Kenya</h3>
              <p className="text-[0.85rem] text-ink-muted mb-6 leading-relaxed">
                Full iTax VAT registration — we handle the portal, you get the PIN in 1–3 days.
              </p>
              <p className="font-display text-[1.75rem] sm:text-[2.5rem] font-semibold text-ink leading-none mb-1 tabular-nums">
                KES 5,000
              </p>
              <p className="text-[0.78rem] text-ink-muted mb-5 sm:mb-8">flat fee, paid once</p>
              <ul className="space-y-2.5 flex-1 mb-8" role="list">
                {[
                  "iTax profile update",
                  "VAT Form 1 completion",
                  "PIN generation and delivery",
                  "1–3 working days",
                  "M-PESA receipt provided",
                  "Taxpayer education session",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.85rem] text-ink-soft">
                    <CheckCircle size={14} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`${WA_BASE}?text=I%20want%20the%20KES%205000%20VAT%20Registration`} data-track="whatsapp-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill block text-center border border-ink text-ink text-sm font-semibold py-3 rounded-md transition-colors hover:bg-ink hover:text-canvas"
              >
                Start Registration
              </a>
            </article>

            {/* Card 3 — Monthly Filing */}
            <article className="bg-canvas rounded-lg border border-hairline p-4 sm:p-8 flex flex-col relative overflow-hidden">
              <span className="absolute top-0 right-0 font-mono text-[0.6rem] uppercase tracking-widest bg-brand text-canvas px-3 py-1.5 rounded-bl-lg">
                Most Popular
              </span>
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-muted mb-4">
                Recurring
              </p>
              <h3 className="font-display text-xl font-semibold text-ink mb-1">Monthly VAT Filing</h3>
              <p className="text-[0.85rem] text-ink-muted mb-6 leading-relaxed">
                Filed before the 20th. Every month. Without you having to think about it.
              </p>
              <p className="font-display text-[1.75rem] sm:text-[2.5rem] font-semibold text-ink leading-none mb-1 tabular-nums">
                KES 3,500
              </p>
              <p className="text-[0.78rem] text-ink-muted mb-5 sm:mb-8">per month</p>
              <ul className="space-y-2.5 flex-1 mb-8" role="list">
                {[
                  "Filed by the 20th — always",
                  "We file on the 17th, not the 20th",
                  "Avoids KES 10,000 late penalty",
                  "M-PESA payment guidance",
                  "Dedicated WhatsApp support",
                  "Monthly confirmation receipt",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.85rem] text-ink-soft">
                    <CheckCircle size={14} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`${WA_BASE}?text=I%20want%20the%20KES%203500%20Monthly%20Filing`} data-track="whatsapp-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill block text-center border border-ink text-ink text-sm font-semibold py-3 rounded-md transition-colors hover:bg-ink hover:text-canvas"
              >
                Start Filing
              </a>
            </article>

            {/* Card 4 — Amnesty Cleanup */}
            <article className="bg-canvas rounded-lg border border-hairline p-4 sm:p-8 flex flex-col">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-brand mb-4">
                Ends 31 Dec 2026
              </p>
              <h3 className="font-display text-lg font-semibold text-ink mb-1">Tax Amnesty Cleanup</h3>
              <p className="text-[0.85rem] text-ink-muted mb-5 leading-relaxed">
                Free iTax ledger check. We tell you which amnesty path you&apos;re on, file the
                returns that unlock the waiver, and structure the payment plan if you owe principal.
              </p>
              <p className="font-display text-[1.5rem] sm:text-[2rem] font-semibold text-ink leading-none mb-1 tabular-nums">
                Free check
              </p>
              <p className="text-[0.78rem] text-ink-muted mb-7">cleanup at a flat fee</p>
              <a
                href="/tax-amnesty-2026/"
                className="btn-fill block text-center bg-brand text-canvas text-sm font-semibold py-3 rounded-md transition-colors hover:bg-brand-hover"
              >
                Get the free check
              </a>
            </article>
          </div>

          <p className="mt-6 text-[0.78rem] text-ink-muted">
            All prices include M-PESA receipt. Prices are in Kenyan Shillings (KES) and inclusive of applicable taxes.
          </p>
        </div>
      </section>

      {/* ─── SEO PROSE — KRA VAT 16% 2026 ─── */}
      <section className="bg-canvas-dark py-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid gap-8 lg:gap-24 lg:grid-cols-[480px_1fr]">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/65 mb-4">
              Kenya VAT 2026
            </p>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-canvas tracking-tight leading-tight mb-6 text-balance">
              Kenya VAT Standard Rate 16%: what every registered business must know
            </h2>
            <a
              href="/tools/"
              className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-white hover:text-blue-200 transition-colors"
            >
              <Calculator size={14} aria-hidden="true" />
              Open free VAT calculator
              <ArrowRight size={13} weight="bold" aria-hidden="true" />
            </a>
          </div>
          <div className="space-y-5 text-[0.93rem] text-canvas/80 leading-[1.75]">
            <p>
              As per the latest Kenya Revenue Authority (KRA) guidelines, the{" "}
              <a href="/resources/vat-rates-kenya/" className="text-canvas font-medium underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                Kenya VAT standard rate is 16%
              </a>{" "}
              for 2026. This applies to most taxable goods and services supplied in Kenya. Essential
              items including basic foodstuffs, medical supplies, and exports remain{" "}
              <strong className="text-canvas font-medium">zero-rated (0%)</strong> or exempt — see the
              full breakdown of{" "}
              <a href="/resources/vat-rates-kenya/" className="text-canvas underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                zero-rated vs exempt supplies in Kenya
              </a>
              .
            </p>
            <p>
              A business must register for VAT when its annual taxable turnover reaches the{" "}
              mandatory threshold ({FACTS.mandatoryThreshold}). Failure to register when required attracts a{" "}
              <a href="/resources/what-happens-if-i-don-t-register-for-vat/" className="text-canvas font-medium underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                KES 100,000 per month non-registration penalty
              </a>
              . Voluntary registration is available from {FACTS.voluntaryFrom} to claim input VAT credits —
              use our{" "}
              <a href="/resources/do-i-need-to-register-for-vat-kenya/" className="text-canvas underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                guide on whether you need to register for VAT in Kenya
              </a>{" "}
              to check where you stand.
            </p>
            <p>
              The{" "}
              <a href="/resources/how-to-register-for-vat-in-kenya/" className="text-canvas font-medium underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                iTax VAT registration process
              </a>{" "}
              involves updating your iTax profile, completing Form VAT 1, uploading supporting
              documentation, and completing{" "}
              <a href="/resources/etims-onboarding-guide/" className="text-canvas font-medium underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                eTIMS onboarding
              </a>
              . From 2026, KRA validates all VAT returns against eTIMS electronic invoice data —
              businesses without eTIMS-compliant invoices lose their input VAT claims automatically.
              Our{" "}
              <a href="/services/vat-registration/" className="text-canvas underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                KES 5,000 VAT registration service
              </a>{" "}
              includes eTIMS guidance with every registration.
            </p>
            <p>
              The Output Tax minus Input Tax formula determines your net VAT payable:{" "}
              <strong className="text-canvas font-medium">Output Tax &ndash; Input Tax = Tax Payable</strong>.
              VAT returns must be filed and payment made by the{" "}
              <strong className="text-canvas font-medium">20th of the following month</strong> via
              KRA Paybill{" "}
              <strong className="text-canvas font-medium">572572</strong> or the iTax portal — the{" "}
              <a href="/resources/how-to-file-vat-return-on-itax/" className="text-canvas underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                step-by-step iTax filing guide
              </a>{" "}
              walks through every screen, and the{" "}
              <a href="/tools/" className="text-canvas underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                free 16% VAT calculator
              </a>{" "}
              works out the figures for you.{" "}
              <a href="/resources/kra-penalty-for-late-vat-filing/" className="text-canvas underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                Late filing
              </a>{" "}
              attracts the higher of KES 10,000 or 5% of tax due, plus 1% monthly interest — which is
              why we file client returns on the 17th under our{" "}
              <a href="/services/monthly-vat-filing/" className="text-canvas underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                monthly VAT filing service
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-canvas py-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
            The process
          </p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold tracking-tight text-ink mb-16 text-balance">
            How to register for VAT in Kenya: no portal, no forms, just WhatsApp.
          </h2>

          <div className="grid sm:grid-cols-3 gap-0 border border-hairline rounded-lg overflow-hidden">
            {[
              {
                step: "01",
                Icon: ChatCircle,
                title: "Message us",
                body: "Send your KRA PIN, ID copy, and business name to our WhatsApp. That is everything we need to start your VAT application.",
              },
              {
                step: "02",
                Icon: FileText,
                title: "We handle iTax",
                body: "Our team processes your KRA VAT registration or monthly filing directly on the iTax portal. You never touch the system.",
              },
              {
                step: "03",
                Icon: ShieldCheck,
                title: "You receive confirmation",
                body: "Your VAT PIN or filing receipt is delivered to your WhatsApp, along with your M-PESA transaction record.",
              },
            ].map(({ step, Icon, title, body }, i) => (
              <div
                key={step}
                className={`p-8 ${i < 2 ? "border-b sm:border-b-0 sm:border-r border-hairline" : ""}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <Icon size={28} weight="duotone" className="text-brand" aria-hidden="true" />
                  <span className="font-mono text-[0.65rem] text-ink-muted">{step}</span>
                </div>
                <h3 className="font-display text-[1rem] font-semibold text-ink mb-2">{title}</h3>
                <p className="text-[0.875rem] text-ink-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
            <p className="text-[0.85rem] text-ink-muted">
              Average time from first message to VAT PIN:{" "}
              <strong className="text-ink">1–3 working days.</strong>
            </p>
            <a
              href="/how-it-works/"
              className="inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-ink hover:text-brand transition-colors"
            >
              Full process details
              <ArrowRight size={13} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}
      <section className="bg-canvas-alt py-20 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-10">
            What our clients say
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {[
              {
                quote:
                  "Registered in 2 days. The KRA portal had given me errors for 3 weeks. Smart VAT just handled everything over WhatsApp.",
                name: "James M.",
                business: "Retail trader, Nairobi",
              },
              {
                quote:
                  "KES 5,000 flat, no surprises. My accountant was quoting KES 20,000. I WhatsApped Smart VAT and had my PIN the next day.",
                name: "Amina W.",
                business: "Consulting firm, Westlands",
              },
              {
                quote:
                  "They have filed my monthly returns for 8 months. Not once have I had to chase them or worry about the 20th deadline.",
                name: "Peter K.",
                business: "Wholesale supplier, Industrial Area",
              },
            ].map(({ quote, name, business }) => (
              <article
                key={name}
                className="bg-canvas rounded-lg border border-hairline p-5 lg:p-7 flex flex-col"
              >
                <div className="flex gap-0.5 mb-4" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} weight="fill" className="text-brand" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-[0.88rem] text-ink-soft leading-relaxed flex-1 mb-5 italic">
                  &ldquo;{quote}&rdquo;
                </p>
                <div>
                  <p className="text-[0.82rem] font-semibold text-ink">{name}</p>
                  <p className="text-[0.75rem] text-ink-muted">{business}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-canvas py-24 px-6 lg:px-10" aria-labelledby="faq-heading">
        <div className="max-w-[1400px] mx-auto grid gap-8 lg:gap-16 lg:grid-cols-[360px_1fr]">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold tracking-tight text-ink leading-tight text-balance"
            >
              Questions we get every week on WhatsApp
            </h2>
          </div>
          <div className="divide-y divide-hairline">
            {faqSchema.mainEntity.map((q) => (
              <details key={q.name} className="group py-5">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <span className="font-display text-[0.95rem] font-semibold text-ink leading-snug group-open:text-brand transition-colors">
                    {q.name}
                  </span>
                  <svg className="w-4 h-4 shrink-0 mt-1 text-ink-muted group-open:rotate-180 transition-transform" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className="mt-3 pb-1">
                  <p className="text-[0.875rem] text-ink-muted leading-relaxed">{q.acceptedAnswer.text}</p>
                  {q.name.includes("5 million or KES 8 million") && (
                    <a
                      href="/resources/vat-threshold-kenya/"
                      className="inline-flex items-center gap-1.5 mt-2.5 text-[0.82rem] font-medium text-brand hover:underline underline-offset-4"
                    >
                      Read our complete VAT threshold guide (5M vs 8M)
                      <ArrowRight size={12} weight="bold" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </details>
            ))}
            <div className="pt-8">
              <RelatedLinks
                heading="Go deeper"
                links={[
                  { href: "/resources/faq/", label: "Full Kenya VAT FAQ — 40+ answers", description: "Registration, filing, penalties, rates, eTIMS, refunds and input VAT." },
                  { href: "/resources/how-to-register-for-vat-in-kenya/", label: "How to register for VAT in Kenya on iTax", description: "Every screen of the KRA iTax registration process, step by step." },
                  { href: "/resources/kra-vat-penalties-reference/", label: "KRA VAT penalties reference table", description: "What late filing, late payment, and non-registration actually cost." },
                  { href: "/tax-amnesty-2026/", label: "KRA Tax Amnesty 2026 — free ledger check", description: "Three paths, two automatic. Find out before the 31 Dec 2026 window closes." },
                  { href: "/services/", label: "All services and published prices", description: "Registration, monthly filing, eTIMS onboarding, and penalty waivers." },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── AMNESTY BAND ─── */}
      <section className="bg-brand-muted py-16 px-6 lg:px-10" aria-labelledby="amnesty-heading">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-brand mb-3">
              KRA Tax Amnesty 2026
            </p>
            <h2
              id="amnesty-heading"
              className="font-display text-[clamp(1.3rem,2.5vw,1.8rem)] font-semibold text-ink tracking-tight mb-2"
            >
              KRA is wiping out old penalties — until 31 December 2026
            </h2>
            <p className="text-[0.85rem] text-ink-muted max-w-[48ch] leading-relaxed">
              A 100% waiver on pre-2026 penalties, interest and fines. Many businesses qualify
              automatically — others just need outstanding returns filed. Get a free iTax ledger
              check and find out which path you&apos;re on.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href="/tax-amnesty-2026/"
              className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-6 py-3.5 rounded-md hover:bg-brand-hover transition-colors whitespace-nowrap"
            >
              Free amnesty ledger check
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
            <a
              href={`${WA_BASE}?text=Hi%2C%20I%20want%20a%20FREE%20KRA%20Tax%20Amnesty%20ledger%20check`} data-track="whatsapp-cta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors whitespace-nowrap"
            >
              Check on WhatsApp instead
            </a>
          </div>
        </div>
      </section>

      {/* ─── DEADLINE COUNTDOWN ─── */}
      <section className="bg-canvas-alt py-16 px-6 lg:px-10" aria-labelledby="deadline-heading">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-3">
              KRA VAT deadline
            </p>
            <h2
              id="deadline-heading"
              className="font-display text-[clamp(1.3rem,2.5vw,1.8rem)] font-semibold text-ink tracking-tight mb-2"
            >
              Don't miss the 20th KRA deadline
            </h2>
            <p className="text-[0.85rem] text-ink-muted max-w-[42ch] leading-relaxed">
              Every month, VAT returns are due by the 20th. Miss it and KRA charges KES 10,000 automatically.
              Get a WhatsApp reminder 3 days before every deadline.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={`https://wa.me/254717344440?text=Hi%2C%20I%20want%20VAT%20deadline%20reminders%20on%20WhatsApp`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-6 py-3.5 rounded-md hover:bg-brand-hover transition-colors whitespace-nowrap"
            >
              Get WhatsApp Reminders
              <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
            </a>
            <a
              href={`https://wa.me/254717344440?text=Hi%2C%20I%20want%20the%20KES%203500%20Monthly%20VAT%20Filing%20service`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors whitespace-nowrap"
            >
              Let us file for you — KES 3,500/month
            </a>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-canvas-dark py-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
              Ready to get your VAT number?
            </h2>
            <p className="text-[0.95rem] text-canvas/80 leading-relaxed max-w-[42ch] text-pretty">
              Message us on WhatsApp and we will have your KRA VAT registration started
              within the hour. Flat fee. M-PESA accepted. No hidden costs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
            <a
              href={`${WA_BASE}?text=Hi%2C%20I%20want%20to%20register%20for%20VAT%20with%20Smart%20VAT%20Kenya`} data-track="whatsapp-cta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center justify-center gap-2 bg-brand text-canvas font-semibold px-6 py-3.5 rounded-md text-sm hover:bg-brand-hover transition-colors"
            >
              Start My VAT Registration
              <ArrowRight size={15} weight="bold" aria-hidden="true" />
            </a>
            <a
              href="/services/"
              className="inline-flex items-center justify-center gap-2 border border-canvas/25 text-canvas/70 hover:text-canvas hover:border-canvas/50 font-medium px-6 py-3.5 rounded-md text-sm transition-colors"
            >
              View all services
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}