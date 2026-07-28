import {
  ArrowRight,
  Calculator,
  ChatCircle,
  CheckCircle,
  Clock,
  CurrencyDollar,
  FileText,
  Prohibit,
  ShieldCheck,
  WarningCircle,
  Star,
} from "@phosphor-icons/react/dist/ssr"
import { RelatedLinks } from "@/components/related-links"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Kenya VAT standard rate in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Kenya VAT standard rate is 16% as per KRA guidelines for 2026. This applies to most taxable goods and services. Essential items including basic foodstuffs, medical supplies, and exports are zero-rated (0%) or exempt.",
      },
    },
    {
      "@type": "Question",
      name: "How much does VAT registration cost in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Smart VAT Kenya charges a flat fee of KES 5,000 for complete VAT registration, including iTax profile update and VAT PIN generation, completed in 1–3 working days. Traditional facilitators charge KES 15,000–30,000.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for late VAT filing in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KRA imposes a penalty of KES 10,000 or 5% of the tax due (whichever is higher), plus 1% interest per month on unpaid tax. VAT returns must be filed by the 20th of each following month.",
      },
    },
    {
      "@type": "Question",
      name: "When must a business register for VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A business must register for VAT when its annual taxable turnover reaches or exceeds KES 5 million. Voluntary registration is also possible below this threshold. KRA is expanding mandatory registration thresholds under the Finance Act 2025.",
      },
    },
    {
      "@type": "Question",
      name: "How do I register for VAT online in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VAT registration is done via the KRA iTax portal at itax.kra.go.ke. The process involves updating your iTax profile, completing Form VAT 1, and uploading supporting documents. Many business owners experience errors. Smart VAT Kenya handles the entire process for KES 5,000.",
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
        text: "KRA imposes a penalty of KES 100,000 or the tax that would have been due (whichever is higher) for failure to register for VAT when required. This is separate from the KES 10,000 late-filing penalty.",
      },
    },
    {
      "@type": "Question",
      name: "What is the VAT Special Table and why is my input VAT being rejected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The KRA VAT Special Table is a KRA-maintained list of taxpayers under compliance review. If your supplier is on the Special Table, any input VAT claims involving their invoices are automatically blocked by iTax. Smart VAT Kenya checks this before registration.",
      },
    },
    {
      "@type": "Question",
      name: "Is the VAT registration threshold in Kenya KES 5 million or KES 8 million?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of the Finance Act 2025, the mandatory VAT registration threshold was adjusted. The KES 5 million annual taxable turnover threshold has been the primary reference for most compliant businesses. Certain categories may have different thresholds.",
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
        text: "VAT registration is mandatory in Kenya when your annual taxable turnover exceeds KES 5 million. However, you can voluntarily register below this threshold to claim input VAT credits. Failure to register when required attracts a KES 100,000 penalty.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I don't register for VAT in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you fail to register for VAT when your turnover exceeds the mandatory threshold, KRA can impose penalties of KES 100,000 or the tax that would have been due (whichever is higher). Additionally, you cannot claim input VAT, and you risk audit, interest charges, and business closure.",
      },
    },
    {
      "@type": "Question",
      name: "Can I register for VAT voluntarily in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can voluntarily register for VAT even if your annual turnover is below KES 5 million. This allows you to claim input VAT credits on your purchases, which can improve cash flow. Many small businesses choose voluntary registration for this reason.",
      },
    },
    {
      "@type": "Question",
      name: "How long does VAT registration take in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VAT registration through Smart VAT Kenya typically takes 1–3 working days from the time you submit your documents via WhatsApp. The KRA iTax portal may take up to 5–7 working days for approval in some cases, but our service is usually faster.",
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

const WA_BASE = "https://wa.me/254721725958"

export default function HomePage() {
  return (
    <>
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ─── HERO ─── */}
      <section className="bg-canvas-dark overflow-hidden relative">
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#dedad2 1px, transparent 1px), linear-gradient(to right, #dedad2 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-12 pb-20 lg:pt-16 lg:pb-24 grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-start">
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-canvas/60 mb-6">
              Kenya Revenue Authority Registered Services
            </p>

            <h1 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-canvas mb-6 text-balance">
              VAT Registration Services Kenya
              <span className="text-brand">{" done in 3 days,"}</span>
              {" not 3 weeks."}
            </h1>

            <p className="text-[1.05rem] text-canvas/80 leading-relaxed max-w-[52ch] mb-10 text-pretty">
              Kenyan SMEs lose KES 10,000 per late iTax filing. We handle your complete
              KRA VAT process — registration and monthly filing — for a flat fee you know
              upfront. No surprises. No portal errors.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`${WA_BASE}?text=Hi%2C%20I%20want%20to%20register%20for%20VAT`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill inline-flex items-center justify-center gap-2 bg-brand text-canvas font-semibold px-6 py-3.5 rounded-md text-sm transition-colors hover:bg-brand-hover"
              >
                Register for VAT — KES 5,000
                <ArrowRight size={16} weight="bold" aria-hidden="true" />
              </a>
              <a
                href="/tools"
                className="inline-flex items-center justify-center gap-2 border border-canvas/25 text-canvas/80 hover:text-canvas hover:border-canvas/50 font-medium px-6 py-3.5 rounded-md text-sm transition-colors"
              >
                <Calculator size={16} aria-hidden="true" />
                Free VAT Calculator
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-5">
              {[
                { Icon: ShieldCheck, label: "100% iTax Compliant" },
                { Icon: CurrencyDollar, label: "M-PESA Receipts" },
                { Icon: Prohibit, label: "No Hidden Fees" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-[0.8rem] text-canvas/65">
                  <Icon size={14} weight="bold" className="text-brand shrink-0" aria-hidden="true" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Stats card */}
          <aside
            aria-label="Key figures"
            className="bg-canvas/[0.06] border border-canvas/15 rounded-xl p-8 self-start hidden lg:block"
            style={{ backdropFilter: "blur(12px)" }}
          >
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-canvas/60 mb-6">
              At a glance
            </p>
            <dl className="space-y-6">
              {[
                { value: "KES 5,000", label: "One-time VAT registration" },
                { value: "KES 3,500", label: "Monthly iTax filing" },
                { value: "1–3 days", label: "Average turnaround" },
                { value: "16%", label: "Kenya VAT standard rate 2026" },
                { value: "20th", label: "Monthly KRA deadline, never missed" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-4 border-b border-canvas/15 pb-5 last:border-0 last:pb-0"
                >
                  <dd className="font-display text-[1.65rem] font-semibold text-canvas leading-none tabular-nums">
                    {value}
                  </dd>
                  <dt className="text-[0.78rem] text-canvas/70 text-right max-w-[120px] leading-snug">
                    {label}
                  </dt>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* ─── TRUST BAND ─── */}
      <section className="bg-canvas-alt border-y border-hairline py-5 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4">
          {[
            "KRA iTax Registered Agents",
            "200+ Businesses Registered",
            "98% On-Time Filing Rate",
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
            Why VAT registration and iTax filing is hard for Kenyan SME owners.
          </h2>
          <p className="text-[0.9rem] text-ink-muted max-w-[52ch] mb-16 leading-relaxed">
            KRA's{" "}
            <a href="/resources/itax-portal-not-working" className="text-brand underline underline-offset-2 hover:text-brand-hover">
              portal crashes 2–3 times per week
            </a>
            . Facilitators quote KES 15,000–30,000.
            Missing the 20th deadline costs KES 10,000 automatically.
          </p>

          <div className="space-y-0">
            {[
              {
                number: "01",
                problem: "The iTax portal keeps returning errors",
                fix: "We navigate it for you — you send your KRA PIN and details over WhatsApp, we handle the rest. 100% first-attempt success rate.",
                Icon: WarningCircle,
              },
              {
                number: "02",
                problem: "Traditional facilitators quote KES 15,000–30,000",
                fix: "Our published flat fee is KES 5,000. One price. No discovery calls, no negotiation, no hidden costs.",
                Icon: CurrencyDollar,
              },
              {
                number: "03",
                problem: "A single missed deadline costs KES 10,000",
                fix: "We file before the 20th every month as a matter of process — not a service you have to chase. We file on the 17th.",
                Icon: Clock,
              },
              {
                number: "04",
                problem: "eTIMS compliance and the VAT Special Table block your input VAT",
                fix: "We ensure your VAT registration is eTIMS-ready from day one and flag Special Table supplier risks before they silently cancel your input VAT claims.",
                Icon: ShieldCheck,
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

          <div className="grid lg:grid-cols-[1fr_1fr_340px] gap-5">
            {/* Card 1 — VAT Registration */}
            <article className="bg-canvas rounded-lg border border-hairline p-8 flex flex-col">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-muted mb-4">
                One-time
              </p>
              <h3 className="font-display text-xl font-semibold text-ink mb-1">VAT Registration Kenya</h3>
              <p className="text-[0.85rem] text-ink-muted mb-6 leading-relaxed">
                Full iTax VAT registration — we handle the portal, you get the PIN in 1–3 days.
              </p>
              <p className="font-display text-[2.5rem] font-semibold text-ink leading-none mb-1 tabular-nums">
                KES 5,000
              </p>
              <p className="text-[0.78rem] text-ink-muted mb-8">flat fee, paid once</p>
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
                href={`${WA_BASE}?text=I%20want%20the%20KES%205000%20VAT%20Registration`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill block text-center border border-ink text-ink text-sm font-semibold py-3 rounded-md transition-colors hover:bg-ink hover:text-canvas"
              >
                Start Registration
              </a>
            </article>

            {/* Card 2 — Monthly Filing (featured) */}
            <article className="bg-canvas-dark rounded-lg p-8 flex flex-col relative overflow-hidden">
              <span className="absolute top-0 right-0 font-mono text-[0.6rem] uppercase tracking-widest bg-brand text-canvas px-3 py-1.5 rounded-bl-lg">
                Most Popular
              </span>
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-canvas/65 mb-4">
                Recurring
              </p>
              <h3 className="font-display text-xl font-semibold text-canvas mb-1">Monthly VAT Filing</h3>
              <p className="text-[0.85rem] text-canvas/80 mb-6 leading-relaxed">
                Filed before the 20th. Every month. Without you having to think about it.
              </p>
              <p className="font-display text-[2.5rem] font-semibold text-canvas leading-none mb-1 tabular-nums">
                KES 3,500
              </p>
              <p className="text-[0.78rem] text-canvas/65 mb-8">per month</p>
              <ul className="space-y-2.5 flex-1 mb-8" role="list">
                {[
                  "Filed by the 20th — always",
                  "We file on the 17th, not the 20th",
                  "Avoids KES 10,000 late penalty",
                  "M-PESA payment guidance",
                  "Dedicated WhatsApp support",
                  "Monthly confirmation receipt",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.85rem] text-canvas/85">
                    <CheckCircle size={14} weight="fill" className="text-canvas/55 shrink-0 mt-0.5" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`${WA_BASE}?text=I%20want%20the%20KES%203500%20Monthly%20Filing`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill block text-center bg-brand text-canvas text-sm font-semibold py-3 rounded-md transition-colors hover:bg-brand-hover"
              >
                Start Filing
              </a>
            </article>

            {/* Card 3 — Penalty Waiver */}
            <article className="bg-canvas rounded-lg border border-hairline p-8 flex flex-col lg:self-start">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-muted mb-4">
                Per application
              </p>
              <h3 className="font-display text-lg font-semibold text-ink mb-1">KRA Penalty Waiver</h3>
              <p className="text-[0.85rem] text-ink-muted mb-5 leading-relaxed">
                Outstanding KRA penalties? We draft and submit your waiver application.
              </p>
              <p className="font-display text-[2rem] font-semibold text-ink leading-none mb-1 tabular-nums">
                KES 4,000
              </p>
              <p className="text-[0.78rem] text-ink-muted mb-7">per application</p>
              <a
                href={`${WA_BASE}?text=I%20need%20help%20with%20a%20KRA%20Penalty%20Waiver`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill block text-center border border-ink text-ink text-sm font-semibold py-3 rounded-md transition-colors hover:bg-ink hover:text-canvas"
              >
                Request Help
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
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[480px_1fr] gap-16 lg:gap-24">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-canvas/65 mb-4">
              Kenya VAT 2026
            </p>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-canvas tracking-tight leading-tight mb-6 text-balance">
              Kenya VAT Standard Rate 16%: what every registered business must know
            </h2>
            <a
              href="/tools"
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
              <a href="/resources/vat-rates-kenya" className="text-canvas font-medium underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                Kenya VAT standard rate is 16%
              </a>{" "}
              for 2026. This applies to most taxable goods and services supplied in Kenya. Essential
              items including basic foodstuffs, medical supplies, and exports remain{" "}
              <strong className="text-canvas font-medium">zero-rated (0%)</strong> or exempt — see the
              full breakdown of{" "}
              <a href="/resources/vat-rates-kenya" className="text-canvas underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                zero-rated vs exempt supplies in Kenya
              </a>
              .
            </p>
            <p>
              A business must register for VAT when its annual taxable turnover reaches the
               mandatory threshold (KES 5 million under the VAT Act; the Finance Act 2025
               proposed raising it to KES 8 million, but this has not yet taken effect). Failure to register when required attracts a{" "}
              <a href="/resources/what-happens-if-i-don-t-register-for-vat" className="text-canvas font-medium underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                KES 100,000 non-registration penalty
              </a>
              . Voluntary registration is available below the threshold to claim input VAT credits —
              use our{" "}
              <a href="/resources/do-i-need-to-register-for-vat-kenya" className="text-canvas underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                guide on whether you need to register for VAT in Kenya
              </a>{" "}
              to check where you stand.
            </p>
            <p>
              The{" "}
              <a href="/resources/how-to-register-for-vat-in-kenya" className="text-canvas font-medium underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                iTax VAT registration process
              </a>{" "}
              involves updating your iTax profile, completing Form VAT 1, uploading supporting
              documentation, and completing{" "}
              <a href="/resources/etims-onboarding-guide" className="text-canvas font-medium underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                eTIMS onboarding
              </a>
              . From 2026, KRA validates all VAT returns against eTIMS electronic invoice data —
              businesses without eTIMS-compliant invoices lose their input VAT claims automatically.
              Our{" "}
              <a href="/services/vat-registration" className="text-canvas underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
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
              <a href="/resources/how-to-file-vat-return-on-itax" className="text-canvas underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                step-by-step iTax filing guide
              </a>{" "}
              walks through every screen, and the{" "}
              <a href="/tools" className="text-canvas underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                free 16% VAT calculator
              </a>{" "}
              works out the figures for you.{" "}
              <a href="/resources/kra-penalty-for-late-vat-filing" className="text-canvas underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
                Late filing
              </a>{" "}
              attracts the higher of KES 10,000 or 5% of tax due, plus 1% monthly interest — which is
              why we file client returns on the 17th under our{" "}
              <a href="/services/monthly-vat-filing" className="text-canvas underline underline-offset-4 decoration-canvas/40 hover:decoration-brand">
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
              href="/how-it-works"
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                className="bg-canvas rounded-lg border border-hairline p-7 flex flex-col"
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
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[360px_1fr] gap-16">
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
                </div>
              </details>
            ))}
            <div className="pt-8">
              <RelatedLinks
                heading="Go deeper"
                links={[
                  { href: "/resources/faq", label: "Full Kenya VAT FAQ — 40+ answers", description: "Registration, filing, penalties, rates, eTIMS, refunds and input VAT." },
                  { href: "/resources/how-to-register-for-vat-in-kenya", label: "How to register for VAT in Kenya on iTax", description: "Every screen of the KRA iTax registration process, step by step." },
                  { href: "/resources/kra-vat-penalties-reference", label: "KRA VAT penalties reference table", description: "What late filing, late payment, and non-registration actually cost." },
                  { href: "/services", label: "All services and published prices", description: "Registration, monthly filing, eTIMS onboarding, and penalty waivers." },
                ]}
              />
            </div>
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
              href={`https://wa.me/254721725958?text=Hi%2C%20I%20want%20VAT%20deadline%20reminders%20on%20WhatsApp`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-6 py-3.5 rounded-md hover:bg-brand-hover transition-colors whitespace-nowrap"
            >
              Get WhatsApp Reminders
              <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
            </a>
            <a
              href={`https://wa.me/254721725958?text=Hi%2C%20I%20want%20the%20KES%203500%20Monthly%20VAT%20Filing%20service`}
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
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
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
              href={`${WA_BASE}?text=Hi%2C%20I%20want%20to%20register%20for%20VAT%20with%20Smart%20VAT%20Kenya`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex items-center justify-center gap-2 bg-brand text-canvas font-semibold px-6 py-3.5 rounded-md text-sm hover:bg-brand-hover transition-colors"
            >
              Start My VAT Registration
              <ArrowRight size={15} weight="bold" aria-hidden="true" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-canvas/25 text-canvas/70 hover:text-canvas hover:border-canvas/50 font-medium px-6 py-3.5 rounded-md text-sm transition-colors"
            >
              View all services
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
