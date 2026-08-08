import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "eTIMS Fuel Stations Guide", item: "https://smartvatkenya.co.ke/resources/etims-fuel-stations" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Petrol Station Refusing an eTIMS Receipt? Here's Why and What to Do",
  description:
    "KRA required every fuel station to run the eTIMS Fuel Station System by June 30, 2025 — but most independent dealers still don't. What to do when a station won't give you an eTIMS receipt, and what station owners face if they keep delaying.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-05",
  dateModified: "2026-08-05",
  url: "https://smartvatkenya.co.ke/resources/etims-fuel-stations",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/etims-fuel-stations",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is eTIMS mandatory for fuel stations in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. KRA required all petroleum product retailers to implement the eTIMS Fuel Station System by June 30, 2025, with enforcement beginning after December 31, 2025. Stations that still issue ordinary ETR receipts instead of eTIMS invoices are in breach of the mandate and face penalties and enforcement action.",
      },
    },
    {
      "@type": "Question",
      name: "Why won't my petrol station give me an eTIMS receipt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most likely the station has not yet integrated the eTIMS Fuel Station System, because integration can cost KES 400,000–1,000,000 depending on the number of pumps and the level of automation. A station that cannot issue an eTIMS invoice is not yet compliant, regardless of what its ordinary receipt says.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between an ETR receipt and an eTIMS receipt at a fuel station?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An ETR (Electronic Tax Register) receipt is the old-style fiscal receipt and does not satisfy the eTIMS mandate for fuel stations. A valid eTIMS invoice carries a QR code and a KRA server confirmation code. If your receipt has neither, it is not an eTIMS invoice.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if a fuel station refuses to give me an eTIMS receipt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ask for an eTIMS invoice with a QR code and confirmation code. If the station cannot provide one, note the station name, location, and date, then report it to KRA on 0711 099 999 or via KRA's social channels. KRA is actively enforcing the fuel station mandate and wants these reports.",
      },
    },
    {
      "@type": "Question",
      name: "Do fuel stations face penalties for not using eTIMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Failure to comply with the eTIMS mandate attracts the standard eTIMS penalties — the TPA s.86 e-invoice penalty (since 1 July 2026, the higher of 5% of the tax due, KES 100,000 for companies, or KES 10,000 for individuals) and the up-to-KES 100,000-per-month system non-integration penalty under TPA s.59A(5) — along with enforcement action. KRA has also linked eTIMS compliance to Tax Compliance Certificate (TCC) issuance, so non-compliant stations get blocked on multiple fronts.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost a fuel station to integrate eTIMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Integration costs typically range from KES 400,000 to KES 1,000,000 depending on the number of pumps, existing POS and fuel management systems, and whether the station self-integrates or uses a KRA-certified third-party integrator. This upfront cost is the main reason many independent dealers are still not compliant.",
      },
    },
    {
      "@type": "Question",
      name: "Do fleet and fuel card purchases need eTIMS invoices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Fleet cards, fuel cards, and credit accounts for corporate customers must generate a compliant B2B eTIMS invoice carrying the buyer's KRA PIN. Without it, the buyer cannot claim input VAT, and the station is issuing non-compliant invoices.",
      },
    },
    {
      "@type": "Question",
      name: "Is the convenience shop attached to a fuel station also covered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The shop attached to a fuel station (snacks, drinks, motor oil, and similar retail sales) falls under the same eTIMS requirements as any other retail business — it must issue eTIMS invoices for every sale.",
      },
    },
  ],
}

export default function EtimsFuelStations() {
  return (
    <>
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="max-w-[860px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <a
          href="/resources/"
          className="inline-flex items-center gap-1.5 text-[0.8rem] text-ink-muted hover:text-ink transition-colors mb-10"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to Resources
        </a>

        <header className="mb-12">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-brand font-medium mb-4">
            eTIMS Guide &middot; 6 min read
          </p>
          <h1 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-semibold tracking-tight text-ink leading-tight mb-4 text-balance">
            Petrol Station Refusing an eTIMS Receipt? Here&apos;s Why and What to Do
          </h1>
          <p className="text-[0.92rem] text-ink-muted leading-relaxed max-w-[58ch]">
            KRA gave fuel stations until <strong className="text-ink">30 June 2025</strong> to switch to the
            eTIMS Fuel Station System — and yet most independent dealers are still running old ETR receipts.
            Here&apos;s what the mandate actually says, why so many stations haven&apos;t complied, and exactly
            what you can do about it.
          </p>
          <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted mt-4">
            <time dateTime="2026-08-05">5 August 2026</time>
            <span>Smart VAT Kenya</span>
          </div>
        </header>

        <div className="border-l-4 border-brand bg-brand/5 p-4 rounded-r-lg mb-12" role="note">
          <div className="flex items-start gap-3">
            <Warning size={18} weight="fill" className="shrink-0 mt-0.5 text-brand" aria-hidden="true" />
            <div>
              <p className="text-[0.9rem] font-semibold text-ink">This is a live compliance gap, not a rumour.</p>
              <p className="text-[0.83rem] text-ink-muted leading-relaxed mt-1">
                KRA issued a reminder on <strong>30 June 2025</strong> that the fuel station deadline had passed,
                then set a <strong>31 December 2025</strong> enforcement deadline. The Petroleum Outlets Association
                is now publicly pushing its members to comply — partly because a motorist complained that a Thika Road
                station refused to issue an eTIMS receipt. Enforcement is real and ongoing.
              </p>
            </div>
          </div>
        </div>

        <article className="prose prose-gray max-w-none">
          <section aria-labelledby="news-h">
            <h2 id="news-h">Why This Is In the News Right Now</h2>
            <p>
              This isn&apos;t an abstract compliance rule — it&apos;s a live enforcement story. In February 2026 a
              motorist publicly complained that a petrol station on <strong>Thika Road</strong> refused to issue an
              eTIMS receipt. The <strong>Petroleum Outlets Association of Kenya (POAK)</strong> — the umbrella body for
              roughly 3,100–6,000 independent fuel outlets, most of the country&apos;s retail market — responded by
              publicly urging its members to comply, and told motorists that enforcement will only work if customers
              keep demanding eTIMS receipts.
            </p>
            <p>
              KRA has said it has onboarded more than <strong>500 fuel stations</strong> onto the eTIMS fuel module —
              around <strong>16% of outlets nationwide</strong> as of early 2026. That figure is the headline number
              behind the search spike: the vast majority of stations still aren&apos;t connected, enforcement is being
              stepped up, and both consumers and station owners are trying to figure out what happens next.
            </p>
            <p className="text-sm text-ink-muted italic">
              Timeline: June 2024 rollout start · 30 June 2025 original mandate · 25 November 2025 KRA fresh reminder ·
              31 December 2025 enforcement deadline · January 2026 enforcement begins · Feb 2026 POAK public push
              (Thika Road receipt complaint).
            </p>
          </section>

          <section aria-labelledby="mandate-h">
            <h2 id="mandate-h">The eTIMS Fuel Station Mandate, in One Paragraph</h2>
            <p>
              The <strong>eTIMS Fuel Station System</strong> is KRA&apos;s tailored version of eTIMS for the
              petroleum sector. Instead of a cashier typing sales into a separate tax machine, the system connects
              the station&apos;s <strong>forecourt controller, point-of-sale system, pumps, and fuel management
              software</strong> directly to KRA, transmitting every transaction in real time. It also supports
              offline invoicing, PIN capture, mobile money, and loyalty programs — so a compliant station can invoice
              even during an eTIMS outage.
            </p>
            <p>
              Rollout began in <strong>June 2024</strong> with a 12-month phased implementation. The mandatory
              compliance deadline was <strong>30 June 2025</strong>. After a fresh reminder in November 2025, KRA
              signalled enforcement from <strong>31 December 2025</strong> for stations still on old systems.
            </p>
          </section>

          <section aria-labelledby="why-h">
            <h2 id="why-h">Why Your Station May Still Be Refusing You an eTIMS Receipt</h2>
            <p>
              If a station hands you an ordinary ETR receipt — or a handwritten chit — instead of an eTIMS invoice,
              it almost certainly has not integrated the Fuel Station System yet. The reasons are financial, not
              malicious:
            </p>
            <ul>
              <li><strong>Integration cost:</strong> Connecting pumps, POS, and fuel management systems to KRA typically runs <strong>KES 400,000–1,000,000</strong> per station, depending on pump count and automation level</li>
              <li><strong>Third-party integrator dependency:</strong> Most dealers need a KRA-certified integrator, and integrator capacity is still catching up with demand</li>
              <li><strong>Independent dealer economics:</strong> Small independents carry the heaviest burden — the Petroleum Outlets Association has publicly pushed compliance precisely because the cost has been a blocker</li>
              <li><strong>Legacy ETR hardware:</strong> Old fiscal devices don&apos;t talk to KRA, and replacing them is part of the same cost problem</li>
            </ul>
            <div className="not-prose border border-amber-200 bg-amber-50 rounded-lg p-4 my-6">
              <div className="flex items-start gap-3">
                <Warning size={16} weight="fill" className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-amber-900 leading-relaxed">
                  <strong>For the record:</strong> a receipt without a QR code and a KRA server confirmation code
                  is <em>not</em> an eTIMS invoice. ETR receipts, thermal slips, and SMS confirmations of payment
                  don&apos;t satisfy the mandate.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="consumer-h">
            <h2 id="consumer-h">What to Do When a Station Won&apos;t Issue an eTIMS Receipt</h2>
            <ol>
              <li><strong>Ask for an eTIMS invoice.</strong> Specifically request an invoice with a QR code and confirmation code — most cashiers will show you exactly what their system can (or can&apos;t) produce</li>
              <li><strong>Note the details.</strong> Station name, franchise or brand, location, pump number, date and time, and amount</li>
              <li><strong>Report it to KRA.</strong> Call <strong>0711 099 999</strong> or message KRA&apos;s official channels (@KRACare on X). KRA has said it is acting on fuel station non-compliance reports</li>
              <li><strong>Take a photo.</strong> Photograph the receipt you received (or the refusal) and any signage — it helps KRA verify the station</li>
              <li><strong>For fleet purchases:</strong> if you buy on a fleet or fuel card and the station can&apos;t issue a B2B eTIMS invoice with your company&apos;s KRA PIN, that invoice is not claimable as input VAT. Get it from a compliant station instead</li>
            </ol>
            <p>
              You are not being petty. Every eTIMS invoice KRA captures is used to verify VAT returns across the
              economy — a station operating outside the system is under-reporting VAT on every litre it sells.
            </p>
          </section>

          <section aria-labelledby="owner-h">
            <h2 id="owner-h">If You Run a Station: What Non-Compliance Now Costs</h2>
            <p>KRA&apos;s enforcement posture after the December 2025 deadline is straightforward:</p>
            <ul>
              <li><strong>eTIMS penalties:</strong> the standard eTIMS penalty regime applies — the TPA s.86 e-invoice penalty (higher of 5% of the tax due, KES 100,000 for companies, or KES 10,000 for individuals), plus the up-to-KES 100,000/month TPA s.59A(5) integration penalty (see our <a href="/resources/etims-penalty-50000-per-month-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">eTIMS penalty guide</a> for the full breakdown)</li>
              <li><strong>Enforcement action:</strong> KRA has explicitly warned of enforcement measures for fuel retailers that missed the deadline</li>
              <li><strong>TCC blockage:</strong> eTIMS compliance is now a gate for Tax Compliance Certificates — a non-compliant station can&apos;t renew licences, win supply contracts, or process permits</li>
              <li><strong>Audit exposure:</strong> stations outside the system are prime audit targets because KRA can compare pump sales against its own fuel distribution data</li>
            </ul>
            <p>
              Want to know the actual number your station is exposed to? Use our{" "}
              <a href="/tools/etims-penalty-calculator/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                eTIMS penalty calculator
              </a>{" "}
              to see the monthly cost of continuing with the old system.
            </p>

            <div className="not-prose border border-brand/20 bg-brand-muted rounded-lg p-6 my-6">
              <p className="font-display text-[1.15rem] font-semibold text-ink mb-3">Need to Get Compliant?</p>
              <p className="text-[0.84rem] text-ink-soft leading-relaxed mb-4">
                Smart VAT Kenya guides fuel station owners through eTIMS onboarding — understanding the integration
                options, choosing a certified integrator, and getting the station invoicing correctly.{" "}
                <strong className="text-ink">Free eTIMS support with our monthly VAT filing (KES 3,500/month)</strong>.
              </p>
              <a
                href="https://wa.me/254721725958?text=Hi%2C%20I%20run%20a%20fuel%20station%20and%20need%20help%20getting%20eTIMS%20compliant"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
              >
                Get eTIMS Help on WhatsApp
                <ArrowRight size={14} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </section>

          <section aria-labelledby="fleet-h">
            <h2 id="fleet-h">Fleet Cards, Corporate Fuel Accounts, and the B2B Requirement</h2>
            <p>
              If your company buys fuel on a fleet card, fuel card, or credit account, the station must issue a{" "}
              <strong>B2B eTIMS invoice with your company&apos;s KRA PIN</strong>. This is not optional paper work —
              it is the document that lets you claim input VAT on fuel. Ask your fleet provider which stations are
              eTIMS-compliant, and keep a list of the ones that aren&apos;t so you can route purchases to compliant
              sites.
            </p>
            <p>
              For the shop attached to the station (snacks, drinks, motor oil), the same eTIMS requirements apply as
              for any retail business. If a station is compliant at the pump but the shop still issues handwritten
              receipts, that&apos;s a separate violation.
            </p>
          </section>

          <section aria-labelledby="verify-h">
            <h2 id="verify-h">How to Verify a Fuel Station Is Compliant</h2>
            <ul>
              <li><strong>Check the receipt:</strong> a valid eTIMS invoice has a scannable QR code and a server confirmation code — the code must be present, not a blank box</li>
              <li><strong>Ask at the till:</strong> compliant stations&apos; cashiers will confirm their system sends every sale to KRA in real time</li>
              <li><strong>Corporate buyers:</strong> request a copy of the station&apos;s eTIMS registration confirmation or ask for the B2B invoice on your company PIN — if they can&apos;t generate it, they aren&apos;t integrated</li>
            </ul>
          </section>
        </article>

        {/* FAQ */}
        <FAQSection faqSchema={faqSchema} />

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="etims-fuel-stations" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Need help with VAT?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We handle your KRA VAT registration, eTIMS onboarding, and monthly filing so you never miss a deadline.
          </p>
          <a
            href="https://wa.me/254721725958?text=Hi%2C%20I%20need%20help%20with%20VAT"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Chat on WhatsApp
            <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
          </a>
          <div className="mt-4">
            <a href="/resources/" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              ← All Resources
            </a>
          </div>
        </div>
      </main>
    </>
  )
}