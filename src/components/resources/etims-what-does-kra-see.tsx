import { ArrowLeft, ArrowRight, CheckCircle, ShieldCheck } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const FAQs = [
  {
    q: "Does eTIMS let KRA read my phone or computer?",
    a: "No. eTIMS collects the invoice data you enter - seller and buyer PINs, date, description, quantity, price, tax, and a validation QR code. It does not read other apps, files, calls or messages. This rumour is as old as the system itself, and it is false every time.",
  },
  {
    q: "Will KRA tax the money in my M-Pesa or bank account?",
    a: "No. Money sitting in an account is not income. Transfers, gifts, savings and family support are not taxable on their own. What is taxable is income you earn and fail to declare - and that is what KRA validates against its records of eTIMS invoices, withholding tax certificates, customs and returns. File truthfully and the picture is fine.",
  },
  {
    q: "I issued eTIMS invoices last year - can I still file a nil return in 2026?",
    a: "Not without risking a mismatch. KRA's systems cross-reference nil and non-filers against eTIMS, withholding and customs data - that check is exactly what the 2026 compliance push runs on. If you transacted, file the accurate return, which often still means little or no tax below the thresholds.",
  },
  {
    q: "How do I know what KRA holds on me before I file?",
    a: "Log in to iTax and check your pre-filled data - you may see exactly what KRA already holds: withheld amounts, imported data, and eTIMS transactions. That is the tool the compliance push is built on: look, reconcile, and file to match.",
  },
]

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage" as const,
  mainEntity: FAQs.map((f) => ({
    "@type": "Question" as const,
    name: f.q,
    acceptedAnswer: { "@type": "Answer" as const, text: f.a },
  })),
}

const breadcrumbSchema = {
  "@context": "https://schema.org" as const,
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "Can KRA See Your M-Pesa? What eTIMS Really Sees", item: "https://smartvatkenya.co.ke/resources/etims-what-does-kra-see/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "Can KRA See Your M-Pesa? What eTIMS Really Tells KRA About Your Business",
  description:
    "Does eTIMS let KRA spy on your M-Pesa balance, phone or bank account? Here's exactly what KRA can and cannot see through eTIMS in 2026 - and what the nil-return change means for you.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
  url: "https://smartvatkenya.co.ke/resources/etims-what-does-kra-see",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/etims-what-does-kra-see",
}

export default function EtimsWhatDoesKraSee() {
  return (
    <>
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-[700px] mx-auto px-6 lg:px-10 py-12">
        <a href="/resources/" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium mb-8 transition-colors">
          <ArrowLeft size={14} aria-hidden="true" /> All Resources
        </a>

        <article>
          <header className="mb-8">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">eTIMS Privacy &amp; Data</p>
            <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-semibold text-ink tracking-tight leading-tight mb-3 text-balance">
              Can KRA See Your M-Pesa? What eTIMS Really Tells KRA About Your Business (2026)
            </h1>
            <p className="text-[0.9rem] text-ink-muted leading-relaxed">
              <time dateTime="2026-08-09">9 August 2026</time> &middot; Fact-checked 9 Aug 2026
            </p>
          </header>

          <div className="bg-brand/5 border border-brand/15 rounded-lg p-5 mb-8 flex items-start gap-3">
            <ShieldCheck size={20} className="text-brand shrink-0 mt-0.5" weight="fill" />
            <div>
              <p className="text-sm font-semibold text-ink mb-1">The short answer: no live spying, yes joined-up records</p>
              <p className="text-sm text-ink-muted leading-relaxed">
                KRA does not watch your phone, your computer or your WhatsApp. What eTIMS sends KRA is the invoice
                itself - and beyond that, KRA works from filings and statutory records (withholding tax certificates,
                customs, PAYE). The 2026 muscle is cross-referencing: eTIMS vs declared sales, withheld tax vs
                declared income, nil returns vs eTIMS activity.
              </p>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2>Why This Question Keeps Coming Up</h2>
            <p>
              Ask ten business owners in Kenya what eTIMS is for, and half will say the same thing:{" "}
              <em>"it's a way for KRA to spy on you."</em> That rumour has followed eTIMS from its earliest days -
              and in 2026 it has grown teeth, mixing with stories about nil returns, M-Pesa balances and bank accounts.
            </p>
            <p>
              It is a real, common concern. Like most fears around tax, it contains a small piece of truth wrapped in
              a bigger misunderstanding. So let's state the truth plainly:
            </p>
            <p>
              <strong>KRA does not watch your phone, your computer or your WhatsApp. What KRA sees is what goes into
              KRA's own systems - your eTIMS invoices, your filings, and the third-party records that tax law already
              allows it to collect.</strong>
            </p>
            <p>This page goes line by line: what eTIMS transmits, what KRA can check, and what it genuinely cannot.</p>

            <h2>What KRA Actually Receives When You Issue an eTIMS Invoice</h2>
            <p>
              When you issue an invoice through eTIMS - app, web portal, USSD or your POS system - KRA receives the{" "}
              <strong>invoice itself</strong>:
            </p>
            <ul>
              <li>Your business name and KRA PIN</li>
              <li>The invoice number, date and time of issue</li>
              <li>What you sold: description, quantity, unit price</li>
              <li>The tax charged (VAT or simplified invoice amounts)</li>
              <li>The buyer's KRA PIN - <strong>for B2B sales only</strong>. For B2C (individual) sales, no buyer PIN is required</li>
              <li>A validation code/QR link that ties the invoice to KRA's records</li>
            </ul>
            <p>
              That is the entire list. There is no hidden channel taking anything else. eTIMS is an{" "}
              <strong>invoicing system, not a monitoring program</strong> - the invoice that goes out is the invoice
              KRA gets back.
            </p>

            <h2>What KRA Can Honestly See From Elsewhere</h2>
            <p>
              The "they know everything" energy has a real basis - but it is built from{" "}
              <strong>declarations and statutory records</strong>, not surveillance:
            </p>
            <ul>
              <li><strong>Your own filings:</strong> everything you have ever put on iTax - returns, amendments, obligations</li>
              <li><strong>eTIMS data:</strong> every invoice transmitted - yours and your suppliers'</li>
              <li><strong>Withholding tax certificates:</strong> when clients withhold on your invoices, KRA holds that certificate file</li>
              <li><strong>Customs and import records</strong></li>
              <li><strong>Employment records</strong> (PAYE)</li>
            </ul>
            <p>
              None of this is secret - it is the tax records Kenya always kept, now joined up. What changed in 2026 is
              that KRA actively <strong>cross-references</strong> these sets at filing time: eTIMS invoices vs declared
              sales, withholding tax certificates vs declared income, nil returns vs eTIMS activity. That is the real
              muscle - and it only bites when there is a gap between what you declared and what the records show.
            </p>

            <h2>Your Bank Account and M-Pesa: What KRA Cannot Get - and What It Can</h2>
            <ul>
              <li>Your private messages, apps or history history history</li>
              <li>The contents of your phone - no eTIMS app reads other apps or files</li>
              <li>
                Your M-Pesa statements "live" - mobile-money records sit with the operator. The Commissioner General has
                stated it plainly: <em>"We have no direct access to M-Pesa wallets, unless it is on a case-by-case basis
                where there is fraud or investigations"</em> (September 2025). A Finance Bill proposal in 2025 that would
                have let KRA demand bank/M-Pesa records without a court order was rejected by Parliament - the statutory
                route remains: targeted, case-by-case, for investigations.
              </li>
              <li>The song on your playlist. (Because some of these rumours need a little comedy.)</li>
            </ul>
            <p>
              The "they can watch your computer" version is false. eTIMS transmissions are invoices only - get any
              skilled developer, auditor or tax advisor to trace exactly what KRA's e-invoicing protocol carries and
              they will come back with the items on the first list and nothing else.
            </p>

            <h2>The M-Pesa Rumour That Hurt the Most</h2>
            <p>The rumour that spread hardest in early 2026: <em>"KRA will tax the money in my M-Pesa / bank account."</em></p>
            <table>
              <thead>
                <tr>
                  <th>What people say</th>
                  <th>What's actually true</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>"KRA taxes everything in my M-Pesa"</td>
                  <td><strong>False.</strong> Money moving through M-Pesa is not income. Balances are not taxable.</td>
                </tr>
                <tr>
                  <td>"Any cash I receive means I owe tax"</td>
                  <td><strong>False.</strong> Tax applies to <strong>income</strong> - gifts, family transfers, savings, and own-account movements are not income.</td>
                </tr>
                <tr>
                  <td>"KRA sees my M-Pesa in real time"</td>
                  <td><strong>False.</strong> KRA validates against the records it lawfully collects - filings, eTIMS, withholding, customs. Mobile money sits with the operator; records are obtainable case-by-case for fraud or investigations, not through a silent live tap on every wallet.</td>
                </tr>
                <tr>
                  <td>"The nil-return suspension means I'm about to be assessed on the money I moved"</td>
                  <td><strong>Half true</strong> - and it's the half that matters. The suspension targeted people <strong>declaring no income while the records say otherwise</strong>. If you issued eTIMS invoices, held withholding certificates, or have customs records, that is what gets checked. M-Pesa balances alone are not the target - undeclared income is.</td>
                </tr>
              </tbody>
            </table>
            <p>
              So the habit that protects a business is one above all: <strong>file what is true.</strong> The risk is
              never "a big M-Pesa balance." The risk is a return that contradicts the records that already exist in
              KRA's systems.
            </p>

            <h3>The Nil-Return Moment That Freaked Kenya - What Changed in January 2026</h3>
            <p>
              In January 2026 KRA suspended nil-return filing while reviewing records, then reopened it for the 2025
              filing season after 31 March 2026 with validation checks embedded. KRA's own tally: 392,162 taxpayers who
              had taxes withheld from them in 2025 still filed nil for 2024. That caused real anxiety - people with
              active businesses who never report. The correct reading: nil returns now have to actually be nil.
              If you traded or issued invoices in the year, file the matching return; if you genuinely had no income, a return
              is still your obligation and filing it correctly keeps you clean.
            </p>

            <h2>The Line That Replaces the Fear</h2>
            <p>
              <strong><em>"If it is not in eTIMS, it did not happen for KRA's purposes."</em></strong>
            </p>
            <p>That sentence works both ways:</p>
            <ul>
              <li>An expense without an eTIMS receipt = not claimable (your deduction "didn't happen").</li>
              <li>A sale never invoiced = a gap between KRA's records and your return - the thing audits look for.</li>
            </ul>
            <p>
              The system punishes <strong>gaps</strong>, not small businesses. The entrepreneur whose invoices, records
              and returns match - who asks for their PIN on receipts and declares what they earned - is exactly the
              taxpayer the system treats best. Fear that pushes people off the system only creates the gaps that the
              system then catches.
            </p>

            <h2>What to Do Before You File This Year</h2>
            <ul>
              <li><strong>Get on eTIMS now:</strong> onboarding is free - eTIMS Lite (web/USSD) covers low-volume invoicing (up to ~50 invoices a month) for most service businesses.</li>
              <li><strong>Carry your PIN</strong> when buying for the business, so receipts come back with <em>your</em> PIN - the highest-value habit tax advisors recommend the most.</li>
              <li><strong>Check the dashboard before filing</strong> - match the numbers KRA holds, correct, confirm, file on time.</li>
            </ul>
          </div>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
        </article>

        {/* Sources & Methodology */}
        <div className="mt-12 border-t border-hairline pt-8">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-3">Sources &amp; Methodology</p>
          <p className="text-[0.78rem] text-ink-muted leading-relaxed max-w-[60ch]">
            Fact-checked 9 August 2026: KRA public statements (Commissioner General interview, September 2025), the
            rejected Finance Bill 2025 provision on bank/M-Pesa data access, KRA's nil-return suspension figures
            (Business Daily, February 2026), and Smart VAT Kenya's client-facing experience with eTIMS filings.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-10 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="etims-what-does-kra-see" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Stop guessing what KRA can see.</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[42ch] mx-auto leading-relaxed">
            Get eTIMS compliant today with our onboarding service, or ask us anything on WhatsApp.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/254717344440?text=Hi%2C%20I%20need%20help%20with%20eTIMS%20onboarding"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
            >
              Get eTIMS Help on WhatsApp
              <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
            <a
              href="/services/etims-onboarding/"
              className="inline-flex items-center gap-2 border border-brand text-brand text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand/10 transition-colors"
            >
              eTIMS Onboarding
            </a>
          </div>
        </div>
      </div>
    </>
  )
}