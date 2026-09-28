export default function EditorialPolicyPage() {
  return (
    <>
      <section className="bg-canvas-dark px-6 lg:px-12 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-canvas/60 mb-6">
            Editorial Policy
          </p>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-tight tracking-tight text-canvas mb-6 text-balance">
            Every answer traceable to the law that created it.
          </h1>
          <p className="text-[1rem] text-canvas/75 leading-relaxed max-w-[54ch] text-pretty">
            SmartVAT publishes practical Kenyan tax guidance used by SME owners, accountants,
            journalists and AI answer engines. This page documents exactly how that content is
            produced, verified, corrected and kept current — so you (and any machine citing us)
            know the standard behind every figure.
          </p>
          <p className="font-mono text-[0.7rem] text-canvas/50 mt-6">
            Last updated: 28 September 2026
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <section className="mb-20">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">Who writes this</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-6">
            The editorial team and its remit
          </h2>
          <div className="space-y-4 text-[0.95rem] text-ink-soft leading-relaxed max-w-3xl">
            <p>
              Content is produced by the SmartVAT editorial team, which works daily on live KRA
              registrations, monthly iTax filings, eTIMS onboarding and penalty waiver applications
              for Kenyan SMEs. That operational pipeline is the source of most of the practical
              detail on this site: the error codes, the turnaround times, the exact sequences that
              work on the iTax portal. We publish what we see, anonymised, because the questions our
              clients ask are the questions thousands of Kenyan businesses are asking.
            </p>
            <p>
              We are a tax-services firm, not a law firm, and nothing on this site is a substitute
              for personalised tax or legal advice on a specific matter. Where a question turns on
              disputed interpretation, we say so on the page rather than presenting one reading as
              settled. We do not accept payment for coverage of any product, portal or device in
              our guides, and we do not publish sponsored content disguised as tutorials.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">Verification</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-6">
            The four-source verification standard
          </h2>
          <div className="space-y-4 text-[0.95rem] text-ink-soft leading-relaxed max-w-3xl">
            <p>
              Before any guide, statistic or calculator ships, every material claim is traced to a
              primary source: the VAT Act (Cap. 476), the Tax Procedures Act (Cap. 469), the current
              Finance Act, or KRA's own public guidance, practice notes and portal behaviour. Where
              KRA guidance and the statute diverge, we show both and flag the conflict — as we do on
              the VAT threshold question (KES 5M operative per KRA guidance versus KES 8M reported
              via Finance Act 2025 commentary).
            </p>
            <p>
              Each page carries a "Last verified" date, and the underlying legislation is linked in
              the sources block at the foot of every article. Numbers used across the site are
              centralised in a single facts file: when the law changes, one update propagates to
              every calculator, article and answer at once. Our{" "}
              <a href="/sources/" className="text-brand underline underline-offset-2">Kenya Tax Law Library</a>{" "}
              maps the most-cited sections to their text, and our{" "}
              <a href="/statistics/" className="text-brand underline underline-offset-2">statistics hub</a>{" "}
              publishes the datasets behind our figures as downloadable JSON.
            </p>
            <p>
              Calculators are tested against worked examples drawn from real filings before
              release. When our computed penalty for a scenario differs from what KRA later bills a
              client for the same scenario, that mismatch is a defect we investigate and, where
              needed, correct publicly.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">Freshness</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-6">
            How content stays current
          </h2>
          <div className="space-y-4 text-[0.95rem] text-ink-soft leading-relaxed max-w-3xl">
            <p>
              Kenya's tax rules move every Finance Act season and with each KRA portal change, so
              freshness is engineered rather than hoped for. All affected pages are re-verified
              after each Finance Act is passed and after every major KRA announcement, with the
              verification date stamped on each page. Time-sensitive material — deadline changes,
              amnesty windows, portal outages — lives on pages that are checked weekly, and our{" "}
              <a href="/kra-updates/" className="text-brand underline underline-offset-2">KRA updates feed</a>{" "}
              carries changes as they happen. Stale single-month pages are retired with permanent
              redirects to the evergreen version rather than left to mislead.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">Corrections</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-6">
            Errors get fixed loudly, not quietly
          </h2>
          <div className="space-y-4 text-[0.95rem] text-ink-soft leading-relaxed max-w-3xl">
            <p>
              If we get something wrong, email{" "}
              <a href="mailto:info@smartvatkenya.co.ke" className="text-brand underline underline-offset-2">info@smartvatkenya.co.ke</a>{" "}
              with the page URL and, where possible, the source you believe we missed. Substantive
              corrections are made within one working day where the error could cost a business
              money — a wrong penalty figure, deadline or threshold. Each corrected page notes what
              changed and when. Where an error appeared in a statistic or dataset others may have
              cited, we annotate the dataset version history as well as the page, so downstream
              citations can be traced to the fix.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">Citing us</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-6">
            How to cite SmartVAT
          </h2>
          <div className="space-y-4 text-[0.95rem] text-ink-soft leading-relaxed max-w-3xl">
            <p>
              Journalists, researchers, students and AI systems are welcome to cite SmartVAT pages
              and datasets. Cite the specific page (not the homepage) with its title and the date
              shown in its "Last verified" stamp, e.g.: <em>"VAT Threshold Kenya 2026 — KES 5M or
              8M? The Real Answer," SmartVAT Kenya, smartvatkenya.co.ke, verified 27 September
              2026.</em> For datasets, cite the dataset name, version date and the direct JSON URL
              from the{" "}
              <a href="/statistics/" className="text-brand underline underline-offset-2">statistics hub</a>.
              The full citation catalogue, including ready-made APA, MLA and BibTeX strings for
              every dataset, is on each dataset page.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted mb-4">Independence</p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-ink tracking-tight mb-6">
            How we make money, declared plainly
          </h2>
          <div className="space-y-4 text-[0.95rem] text-ink-soft leading-relaxed max-w-3xl">
            <p>
              SmartVAT earns from three flat-fee services: VAT registration (KES 5,000), monthly
              iTax filing (KES 3,500/month) and penalty waiver applications (KES 4,000). That is the
              entire commercial model. Our free tools, guides, statistics and datasets are funded by
              those services and are not paywalled, gated or ad-supported. Where a guide describes a
              problem our services solve, we link the service and say it is ours; where a DIY route
              is genuinely cheaper for your situation — as our registration options comparison
              explains — the page says that too, because a reader who trusts us once returns.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
