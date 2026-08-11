const WA_BASE = "https://wa.me/254717344440"

const collected = [
  { what: "Business and contact details", why: "Your business name, physical address, phone number, and email — needed to set up your iTax profile and communicate with you." },
  { what: "KRA PIN", why: "Your individual or company KRA PIN is used only for the tax filings and registrations you ask us to complete on iTax." },
  { what: "Identification documents", why: "A copy of your national ID or passport (and director details for companies) is required by KRA to process VAT registration and filings." },
  { what: "Business registration documents", why: "CR12, certificate of incorporation, or business license — required where KRA asks for proof of entity structure." },
  { what: "Payment information", why: "Payment references from M-PESA so we can match your payment to your filing and issue you a receipt." },
]

const sharing = [
  "Kenya Revenue Authority (KRA) — the data you provide is submitted to KRA's iTax portal, which is the sole reason we collect most of it.",
  "Safaricom / M-PESA — payment references are shared with your mobile money provider to process and confirm payments.",
  "WhatsApp / Meta — messages sent over WhatsApp are subject to WhatsApp's own privacy policy. We cannot control or be liable for WhatsApp's data handling.",
]

const rights = [
  "Request a copy of the personal data we hold about you.",
  "Ask us to correct inaccurate information, such as a misspelled name or wrong PIN.",
  "Ask us to delete personal data we no longer need for legal or tax obligations.",
  "Withdraw consent for non-essential communication (e.g. marketing) at any time.",
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-canvas-dark px-6 lg:px-10 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-canvas/60 mb-6">
            Privacy Policy
          </p>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-tight tracking-tight text-canvas mb-6 text-balance">
            How we handle your data, your KRA PIN, and your money.
          </h1>
          <p className="text-[1rem] text-canvas/75 leading-relaxed max-w-[54ch] text-pretty">
            Most of the data we collect exists for one reason: KRA requires it to register your
            business for VAT and file your returns. We ask for the minimum needed to get the job
            done, and we use it for nothing else.
          </p>
          <p className="font-mono text-[0.7rem] text-canvas/50 mt-6">
            Last updated: {new Date("2026-01-01").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">

        <section className="mb-20">
          <div className="border-l-[3px] border-brand pl-6 max-w-3xl mb-12">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-brand mb-2">Who we are</p>
            <h2 className="font-display text-[1.8rem] font-semibold text-ink mb-4">
              Smart VAT Kenya
            </h2>
            <div className="space-y-4 text-[0.95rem] text-ink-soft leading-relaxed">
              <p>
                Smart VAT Kenya is a professional VAT registration and tax filing service for Kenyan
                SMEs, operating from Pioneer House, Moi Avenue, Nairobi CBD. We are registered KRA
                iTax agents and handle client matters over WhatsApp and email.
              </p>
              <p>
                This policy explains what personal data we collect, why we collect it, and the
                choices you have. It applies to everyone who contacts us, uses our calculators and
                tools, or becomes a client.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">What we collect</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-8">
            The minimum KRA needs, nothing more
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-hairline">
                  <th className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-muted py-3 pr-6">Data</th>
                  <th className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-muted py-3">Why we ask for it</th>
                </tr>
              </thead>
              <tbody>
                {collected.map((row) => (
                  <tr key={row.what} className="border-b border-hairline align-top">
                    <td className="py-4 pr-6 text-[0.92rem] font-medium text-ink whitespace-nowrap">{row.what}</td>
                    <td className="py-4 text-[0.92rem] text-ink-soft leading-relaxed">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-20">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">How it's used</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-6">
            Your data is used for your filings only
          </h2>
          <div className="space-y-4 text-[0.95rem] text-ink-soft leading-relaxed max-w-3xl">
            <p>
              We use your personal data to complete the specific services you request: VAT
              registration, monthly iTax filing, eTIMS onboarding, and penalty waiver applications.
              We also use your contact details to send you the outcome, your receipts, and compliance
              reminders tied to your active filings.
            </p>
            <p>
              We do not sell your data. We do not use your KRA PIN or documents for anything other
              than the tax work you approve, and we never share your credentials with third parties
              except where required to complete the service — as described below.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">Who we share with</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-8">
            Three parties, no more
          </h2>
          <ul className="space-y-4 max-w-3xl" role="list">
            {sharing.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" aria-hidden="true" />
                <span className="text-[0.95rem] text-ink-soft leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-20">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">Payments</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-6">
            Every payment is on record
          </h2>
          <div className="space-y-4 text-[0.95rem] text-ink-soft leading-relaxed max-w-3xl">
            <p>
              We accept M-PESA payments and issue an official M-PESA receipt for every one. Payment
              references are retained to match your payment to your filing and to maintain accurate
              records for accounting and tax compliance purposes.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">Retention</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-6">
            Kept as long as the law requires
          </h2>
          <div className="space-y-4 text-[0.95rem] text-ink-soft leading-relaxed max-w-3xl">
            <p>
              Kenya's tax laws require taxpayers and their agents to retain records for a specified
              period. We keep client records only for as long as needed to meet those legal and
              accounting obligations, then delete them securely. Our working files are accessible
              only to the named agents handling your account.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">Your rights</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-8">
            You stay in control
          </h2>
          <ul className="space-y-4 max-w-3xl" role="list">
            {rights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" aria-hidden="true" />
                <span className="text-[0.95rem] text-ink-soft leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">Contact us</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-6">
            Questions, corrections, or a deletion request
          </h2>
          <div className="space-y-3 text-[0.95rem] text-ink-soft leading-relaxed max-w-3xl">
            <p>
              Message us on{" "}
              <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">WhatsApp at +254 717 344 440</a>,
              email us at <a href="mailto:info@smartvatkenya.co.ke" className="text-brand hover:underline">info@smartvatkenya.co.ke</a>,
              or visit us at Pioneer House, Moi Avenue, Nairobi CBD.
            </p>
            <p>
              We'll respond to privacy requests promptly and, where the law allows, without charge.
            </p>
          </div>
        </section>

      </div>
    </>
  )
}
