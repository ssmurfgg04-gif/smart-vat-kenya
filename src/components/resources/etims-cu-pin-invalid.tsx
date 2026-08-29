import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info, Key, ShieldWarning } from "@phosphor-icons/react/dist/ssr"

import { LAST_VERIFIED, personSchema } from "@/src/lib/authors"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const WHATSAPP_NUMBER = "254717344440"

const breadcrumbSchema = {
  "@context": "https://schema.org" as const,
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "eTIMS CU PIN Invalid", item: "https://smartvatkenya.co.ke/resources/etims-cu-pin-invalid/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "eTIMS CU PIN Invalid or Blocked - How to Reset & Reactivate (2026)",
  description:
    "If your eTIMS Control Unit PIN is invalid, expired, or blocked after failed login attempts, here is how to reset it, where to find the original PIN, and how to avoid the permanent lockout.",
  author: personSchema(),
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-18",
  dateModified: LAST_VERIFIED,
  url: "https://smartvatkenya.co.ke/resources/etims-cu-pin-invalid",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/etims-cu-pin-invalid",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "What is the eTIMS CU PIN?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "The CU PIN (Control Unit PIN) is a 4-8 digit security code that authorises invoice issuance on an eTIMS OSCU/VSCU device or on the eTIMS Client app. It is separate from your iTax password and your KRA PIN. The CU PIN was set by the device supplier during onboarding, or by you the first time you logged into eTIMS Client. Without the correct CU PIN, the device will not generate or transmit invoices.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Why is my eTIMS CU PIN showing as invalid?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Three reasons: (1) you are typing the wrong PIN - check the original PIN slip from the supplier or the welcome email; (2) the PIN was reset remotely by KRA or the supplier after a security event and you were not notified; (3) you have entered the wrong PIN multiple times and the device has temporarily locked you out (usually 15-30 minutes) before you can try again.",
      },
    },
    {
      "@type": "Question" as const,
      name: "How many failed CU PIN attempts before lockout?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Most eTIMS devices enforce lockout after 5 consecutive failed PIN attempts. The first lockout is temporary (15-30 minutes). After 3 temporary lockouts, the device enters a permanent lockout that requires KRA eTIMS support or your device supplier to reset. Do not keep guessing - each wrong attempt adds to the lockout counter.",
      },
    },
    {
      "@type": "Question" as const,
      name: "How do I reset my eTIMS CU PIN?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "If you know the current PIN: log into eTIMS Client or the OSCU menu, open Settings > Security > Change CU PIN, enter the old PIN, then enter the new PIN twice. If you have FORGOTTEN the PIN: only the device supplier or KRA eTIMS support (020 499 9999) can reset it. You will need your KRA PIN, device serial, and ID document. Resets take 1-5 working days depending on the supplier.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Can I still invoice while waiting for a CU PIN reset?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Yes, with two workarounds. (1) Use eTIMS Lite web portal (etims.kra.go.ke) to issue invoices online - it uses your iTax password, not the CU PIN. (2) Issue a manual VAT invoice with a serial number and transmit it via eTIMS Lite later. Both are fully KRA-compliant. The OSCU device stays unusable until the PIN is reset.",
      },
    },
    {
      "@type": "Question" as const,
      name: "What happens if I permanently lock the CU PIN?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "The device becomes unusable until KRA's back office performs a hard reset. This requires a physical visit to a KRA office or a formal request through your device supplier. Hard resets take 7-21 working days. During this time, you can still use eTIMS Lite. Do not attempt to factory-reset the device yourself - this can permanently disable it and void the supplier warranty.",
      },
    },
  ],
}

const toc = [
  { id: "what-is-cu-pin", label: "What the CU PIN Is" },
  { id: "why-invalid", label: "Why It Shows Invalid" },
  { id: "lockout-thresholds", label: "Failed Attempt Lockouts" },
  { id: "how-to-reset", label: "How to Reset the PIN" },
  { id: "workaround-while-waiting", label: "How to Invoice While Waiting" },
  { id: "faq", label: "Frequently Asked Questions" },
]

export default function ETimsCuPinInvalidPage() {
  return (
    <>
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <div className="flex flex-wrap gap-2 mb-5">
            {["eTIMS", "CU PIN", "Security", "Lockout"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            eTIMS CU PIN Invalid or Blocked - How to Reset It (2026)
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="font-mono text-[0.62rem] uppercase tracking-widest bg-brand/20 text-brand px-2.5 py-1 rounded-sm">Last updated: August 25, 2026</span>
            <span className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">
        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            The <strong className="text-ink">CU PIN</strong> (Control Unit PIN) is a 4-8 digit code that authorises invoice issuance on your eTIMS device. If it shows &ldquo;invalid&rdquo;, you have either <strong className="text-ink">typed it wrong</strong>, or the device has been <strong className="text-ink">temporarily locked</strong> after 5 failed attempts. Do <em>not</em> keep guessing - after 3 temporary lockouts, the device enters a permanent lockout that requires KRA to hard-reset. To invoice while waiting, use <strong className="text-ink">eTIMS Lite web portal</strong> (etims.kra.go.ke) which uses your iTax password instead.
          </p>
        </div>

        {/* Table of contents */}
        <nav aria-label="Table of contents" className="mb-12">
          <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
            <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-4">In This Guide</p>
            <ol className="space-y-2" role="list">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="flex items-center gap-3 text-[0.85rem] text-ink-muted hover:text-brand transition-colors">
                    <span className="font-mono text-[0.63rem] text-ink-muted/40 w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="space-y-14">

          {/* Section 1 - What is CU PIN */}
          <section id="what-is-cu-pin" aria-labelledby="what-is-cu-pin-h">
            <h2 id="what-is-cu-pin-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What the eTIMS CU PIN Is (and Is Not)
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The <strong className="text-ink">CU PIN</strong> (Control Unit PIN) is the local security code that <em>authorises invoice issuance</em> on your eTIMS device. Think of it like the PIN on your bank card - it proves the person pressing &ldquo;issue invoice&rdquo; is authorised to do so on this specific device.
              </p>
              <p>The CU PIN is <em>different</em> from three other credentials you use with KRA:</p>
              <div className="space-y-3">
                {[
                  {
                    title: "KRA PIN (11-digit Personal Identification Number)",
                    desc: "Your tax identity number on iTax. Used to log into iTax and eTIMS Lite. Not a password.",
                  },
                  {
                    title: "iTax Password",
                    desc: "The password you use to log into itax.kra.go.ke. Also used for eTIMS Lite. Different from CU PIN.",
                  },
                  {
                    title: "eTIMS Client Login PIN",
                    desc: "Some versions of eTIMS Client ask for a separate login PIN before you can use the app. This is also different from the CU PIN - the CU PIN is asked at the moment of invoice issuance, not at login.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Info size={15} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>
                The CU PIN was set in one of three places:
              </p>
              <ul className="space-y-2 list-disc pl-5 text-[0.85rem] text-ink-soft">
                <li>By the <strong>device supplier</strong> during onboarding - you should have received a PIN slip or welcome email with the PIN written on it.</li>
                <li>By <strong>you</strong> the first time you logged into a new eTIMS Client installation - the app asked you to set a PIN and confirm it.</li>
                <li>By <strong>KRA support</strong> during a remote reactivation - they generate a temporary PIN and SMS it to your registered phone number.</li>
              </ul>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Key size={16} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Lost the PIN slip?</strong> Email your device supplier with the device serial and KRA PIN - they should have a record of the original PIN. If they cannot find it, only KRA eTIMS support (020 499 9999) can reset it. Never call back &ldquo;PIN reset services&rdquo; advertised on social media - they are scams.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 - Why invalid */}
          <section id="why-invalid" aria-labelledby="why-invalid-h">
            <h2 id="why-invalid-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Why the CU PIN Shows &ldquo;Invalid&rdquo;
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Three root causes - ranked by frequency based on the cases we see:
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "You are typing the wrong PIN",
                    desc: "Most common. The supplier's PIN slip is hard to read (a 5 can look like a 6, an 8 can look like a 0). Or a staff member set a new PIN and did not tell you. Check the original PIN slip - if you cannot find it, ask whoever in your team did the eTIMS onboarding what PIN they set.",
                  },
                  {
                    title: "The PIN was reset remotely without notice",
                    desc: "KRA or the supplier can reset the CU PIN after a security event (a reported stolen device, a firmware update, a forced re-registration). They are supposed to SMS the new PIN to your registered phone, but SMS delivery from KRA is unreliable. If you have not invoiced in 2+ weeks and suddenly the PIN does not work, suspect a remote reset.",
                  },
                  {
                    title: "Temporary lockout from failed attempts",
                    desc: "After 5 consecutive wrong PIN attempts, the device locks you out for 15-30 minutes. The error message usually says 'PIN locked, try again later' but some older OSCU models just show 'PIN invalid' even during the lockout period. Wait 30 minutes before trying again - do not keep guessing.",
                  },
                  {
                    title: "Firmware glitch after a power cut",
                    desc: "Rare but real: a sudden power loss while the device is mid-authentication can corrupt the local PIN cache. The device starts rejecting every PIN. The fix is a soft reset (power off for 60 seconds, power on). If the soft reset does not work, the device needs a supplier hard reset.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Warning size={15} weight="fill" className="text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3 - Lockout thresholds */}
          <section id="lockout-thresholds" aria-labelledby="lockout-thresholds-h">
            <h2 id="lockout-thresholds-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Failed Attempt Lockouts - The Escalation Ladder
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                eTIMS uses a <strong className="text-ink">three-tier lockout system</strong> to slow down PIN guessing. Knowing which tier you are in tells you how long to wait before retrying.
              </p>
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full text-[0.85rem] border border-hairline rounded-lg overflow-hidden min-w-[480px]">
                  <thead className="bg-canvas-alt">
                    <tr>
                      <th className="text-left p-3 font-mono text-[0.62rem] uppercase tracking-widest text-ink-muted">Failed attempts</th>
                      <th className="text-left p-3 font-mono text-[0.62rem] uppercase tracking-widest text-ink-muted">Lockout tier</th>
                      <th className="text-left p-3 font-mono text-[0.62rem] uppercase tracking-widest text-ink-muted">Wait before retry</th>
                      <th className="text-left p-3 font-mono text-[0.62rem] uppercase tracking-widest text-ink-muted">What to do</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    <tr>
                      <td className="p-3 text-ink">1-4</td>
                      <td className="p-3 text-ink-soft">None</td>
                      <td className="p-3 text-ink-soft">Immediate</td>
                      <td className="p-3 text-ink-muted">Check PIN slip, try again slowly</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-ink">5</td>
                      <td className="p-3 text-ink-soft">Temporary lockout 1</td>
                      <td className="p-3 text-ink-soft">15-30 minutes</td>
                      <td className="p-3 text-ink-muted">Stop. Find the PIN slip. Do not guess.</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-ink">6-10 (after Tier 1)</td>
                      <td className="p-3 text-ink-soft">Temporary lockout 2</td>
                      <td className="p-3 text-ink-soft">1-2 hours</td>
                      <td className="p-3 text-ink-muted">Call supplier to confirm PIN</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-ink">11+ or 3x Tier 2</td>
                      <td className="p-3 text-red-700 font-semibold">Permanent lockout</td>
                      <td className="p-3 text-ink-soft">Until KRA hard-reset</td>
                      <td className="p-3 text-ink-muted">Call KRA 020 499 9999, request hard reset</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <ShieldWarning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Do not factory-reset the device yourself
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    Some internet forums suggest pressing a hidden reset button on the OSCU. This <strong>permanently disables the device</strong> and voids the supplier warranty. The only safe reset is one performed by KRA or an authorised supplier with the device serial registered on KRA&rsquo;s side.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 - How to reset */}
          <section id="how-to-reset" aria-labelledby="how-to-reset-h">
            <h2 id="how-to-reset-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Reset the CU PIN
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The reset path depends on whether you <em>know</em> the current PIN or have <em>forgotten</em> it.
              </p>

              <div className="space-y-4">
                <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                  <p className="font-display text-[1rem] font-semibold text-ink mb-3 flex items-center gap-2">
                    <CheckCircle size={16} weight="fill" className="text-brand" aria-hidden="true" />
                    If you know the current PIN
                  </p>
                  <ol className="space-y-2 list-none pl-0" role="list">
                    <li className="flex gap-3"><span className="font-mono text-[0.7rem] text-brand font-semibold shrink-0 w-6">01</span><span className="text-[0.83rem] text-ink-muted">Open eTIMS Client (or OSCU menu on the device)</span></li>
                    <li className="flex gap-3"><span className="font-mono text-[0.7rem] text-brand font-semibold shrink-0 w-6">02</span><span className="text-[0.83rem] text-ink-muted">Navigate to <strong>Settings &rarr; Security &rarr; Change CU PIN</strong></span></li>
                    <li className="flex gap-3"><span className="font-mono text-[0.7rem] text-brand font-semibold shrink-0 w-6">03</span><span className="text-[0.83rem] text-ink-muted">Enter the old PIN, then the new PIN twice</span></li>
                    <li className="flex gap-3"><span className="font-mono text-[0.7rem] text-brand font-semibold shrink-0 w-6">04</span><span className="text-[0.83rem] text-ink-muted">Submit. The new PIN takes effect immediately - test with a KES 1 invoice.</span></li>
                  </ol>
                </div>

                <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                  <p className="font-display text-[1rem] font-semibold text-ink mb-3 flex items-center gap-2">
                    <Warning size={16} weight="fill" className="text-amber-500" aria-hidden="true" />
                    If you have forgotten the PIN
                  </p>
                  <ol className="space-y-2 list-none pl-0" role="list">
                    <li className="flex gap-3"><span className="font-mono text-[0.7rem] text-brand font-semibold shrink-0 w-6">01</span><span className="text-[0.83rem] text-ink-muted">Email your device supplier with the device serial and KRA PIN. Ask them to confirm or reset the CU PIN.</span></li>
                    <li className="flex gap-3"><span className="font-mono text-[0.7rem] text-brand font-semibold shrink-0 w-6">02</span><span className="text-[0.83rem] text-ink-muted">If the supplier cannot help within 48 hours, call KRA eTIMS support on <strong>020 499 9999</strong>.</span></li>
                    <li className="flex gap-3"><span className="font-mono text-[0.7rem] text-brand font-semibold shrink-0 w-6">03</span><span className="text-[0.83rem] text-ink-muted">Have these ready: KRA PIN, device serial, ID number, business name, and the date you bought the device.</span></li>
                    <li className="flex gap-3"><span className="font-mono text-[0.7rem] text-brand font-semibold shrink-0 w-6">04</span><span className="text-[0.83rem] text-ink-muted">KRA will log a reset request. The new PIN is sent via SMS to your registered phone within 1-5 working days.</span></li>
                    <li className="flex gap-3"><span className="font-mono text-[0.7rem] text-brand font-semibold shrink-0 w-6">05</span><span className="text-[0.83rem] text-ink-muted">When you receive the new PIN, log in and immediately change it to something you can remember.</span></li>
                  </ol>
                </div>
              </div>

              <div className="border border-brand/20 bg-brand-muted rounded-lg p-5">
                <p className="font-display text-[0.95rem] font-semibold text-ink mb-2">Need a faster PIN reset?</p>
                <p className="text-[0.83rem] text-ink-muted leading-relaxed mb-4">
                  We have direct contacts at the major eTIMS device suppliers and at the KRA eTIMS desk. We can usually get a PIN reset done in 24-48 hours instead of the standard 5 working days. Send us the device serial and KRA PIN on WhatsApp.
                </p>
                <a
                  href="https://wa.me/254717344440?text=Hi%2C%20I%20need%20an%20eTIMS%20CU%20PIN%20reset"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
                >
                  Get PIN Reset Help
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          {/* Section 5 - Workaround while waiting */}
          <section id="workaround-while-waiting" aria-labelledby="workaround-while-waiting-h">
            <h2 id="workaround-while-waiting-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Invoice While Waiting for a PIN Reset
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                A CU PIN reset can take up to 5 working days. You do not need to stop invoicing - use one of these two workarounds:
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Use eTIMS Lite web portal",
                    desc: "Log into etims.kra.go.ke with your KRA PIN and iTax password. eTIMS Lite does not ask for the CU PIN - it uses your iTax password instead. You can issue invoices online one at a time. Each invoice takes 2-3 minutes to generate. They are fully KRA-compliant and appear in real-time on KRA's servers.",
                  },
                  {
                    title: "Issue a manual VAT invoice and transmit later",
                    desc: "Write or print a manual tax invoice with: invoice number, date, your business name + KRA PIN + VAT number, customer name + PIN, item description, quantity, unit price, VAT rate (16%), VAT amount, total. Keep a copy. When the CU PIN is reset, you can either re-enter these as historical invoices in eTIMS Client (with the original invoice date) or transmit them via eTIMS Lite.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Avoid the temptation to skip invoicing.</strong> If you stop issuing invoices while waiting for the PIN reset, you create a gap in your sales record that KRA can detect in your auto-populated VAT return. Even manual invoices must be issued and recorded - see our{" "}
                  <a href="/resources/etims-invoicing-guide/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    eTIMS invoicing guide
                  </a>{" "}
                  for the manual invoice format.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection faqSchema={faqSchema} />
        </article>

        {/* Sources & Methodology */}
        <div className="mt-12 border-t border-hairline pt-8">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-3">Sources &amp; Methodology</p>
          <p className="text-[0.78rem] text-ink-muted leading-relaxed max-w-[60ch]">
            Compiled from KRA eTIMS device user manuals, the eTIMS Lite portal documentation, KRA Contact Centre guidance on CU PIN resets (020 499 9999), supplier handover documentation, and Smart VAT Kenya&rsquo;s hands-on experience resetting CU PINs for Kenyan SMEs. Last verified: August 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More eTIMS Guides</p>
          <ArticleGrid currentSlug="etims-cu-pin-invalid" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">CU PIN locked?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We can fast-track the reset with our direct contacts at KRA and the major device suppliers. Usually resolved in 24-48 hours.
          </p>
          <a
            href="https://wa.me/254717344440?text=Hi%2C%20my%20eTIMS%20CU%20PIN%20is%20invalid%20or%20locked"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Get PIN Reset Help on WhatsApp
            <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
          </a>
          <div className="mt-4">
            <a href="/resources/" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              &larr; All Resources
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
