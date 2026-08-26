import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const breadcrumbSchema = {
  "@context": "https://schema.org" as const as const as const as const as const,
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "KRA PIN Not Working", item: "https://smartvatkenya.co.ke/resources/kra-pin-not-working/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const as const as const as const as const,
  "@type": "Article",
  headline: "KRA PIN Not Working? Why Your KRA PIN Application Is Stuck & How to Fix It (Kenya 2026)",
  description:
    "Complete guide to fixing KRA PIN issues in Kenya. Covers PIN already exists errors, application stuck on iTax, verification SMS not received, document rejection, Huduma Centre application problems, and what to do when your PIN can't be found.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  url: "https://smartvatkenya.co.ke/resources/kra-pin-not-working",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/kra-pin-not-working",
}

const faqSchema = {
  "@context": "https://schema.org" as const as const as const as const as const,
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does KRA take to issue a KRA PIN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Online KRA PIN applications on iTax are processed immediately - your PIN is issued on the spot after successful submission. Huduma Centre applications typically take 2-5 working days. If your application is taking longer, check your iTax dashboard for rejection reasons or visit the Huduma Centre where you applied.",
      },
    },
    {
      "@type": "Question",
      name: "What does it mean when iTax says 'KRA PIN already exists'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This means a KRA PIN has already been issued under your ID number. You cannot have two KRA PINs. If you have lost your PIN, use the 'Forgot PIN' feature on iTax to retrieve it. If someone else registered a PIN using your ID without your knowledge, visit a KRA Huduma Centre with your original ID to investigate and take control of the account.",
      },
    },
    {
      "@type": "Question",
      name: "Why is my KRA PIN not found on iTax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This error typically occurs when: (1) The PIN was recently issued and has not yet synced across KRA systems - wait 24-48 hours. (2) You are entering the PIN in the wrong format - use uppercase, no spaces, exactly 11 characters (e.g. A0123456789Z). (3) The PIN application is still being processed and is not yet active. (4) The PIN was deactivated due to non-compliance or inactivity.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a KRA PIN without going to a Huduma Centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Individual KRA PIN applications can be completed entirely online through the iTax portal at itax.kra.go.ke. You need your national ID number and a valid phone number. The system issues your PIN immediately upon successful registration. Business PIN applications may require additional documentation uploaded through iTax. Huduma Centre visits are only necessary if the online system fails or if you need to resolve specific issues like updating contact details.",
      },
    },
    {
      "@type": "Question",
      name: "What documents do I need to apply for a KRA PIN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For individual PIN: your national ID card or passport. For business PIN: the individual PIN of the proprietor/directors, business registration certificate (CR12 for companies, business name registration for sole proprietors), and a valid phone number and email address. All documents must be uploaded as PDF or JPG files under 1MB each on the iTax portal.",
      },
    },
  ],
}

const toc = [
  { id: "pin-already-exists", label: "KRA PIN Already Exists" },
  { id: "pin-not-found",      label: "KRA PIN Not Found on iTax" },
  { id: "application-stuck",  label: "Application Stuck or Not Processing" },
  { id: "verification-failed", label: "Verification SMS / Email Not Arriving" },
  { id: "documents-rejected",  label: "Documents Rejected During Application" },
  { id: "forgot-pin",          label: "Forgot Your KRA PIN? How to Retrieve It" },
  { id: "huduma-centre",       label: "Huduma Centre Application Problems" },
  { id: "deactivated-pin",     label: "KRA PIN Deactivated or Suspended" },
  { id: "faq",                 label: "Frequently Asked Questions" },
]

export default function KRAPinNotWorkingPage() {
  return (
    <>
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-canvas-dark px-6 lg:px-10 py-14">
        <div className="max-w-3xl mx-auto">
          <a href="/resources/" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <div className="flex flex-wrap gap-2 mb-5">
            {["KRA PIN", "Troubleshooting", "iTax", "Registration"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            KRA PIN Not Working? Why Your KRA PIN Application Is Stuck &amp; How to Fix It
          </h1>
          <p className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents &mdash; Updated July 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            Most KRA PIN issues fall into a handful of categories. A <strong className="text-ink">"PIN already exists"</strong> error means your ID is already registered &mdash; use "Forgot PIN" to retrieve it. A <strong className="text-ink">"PIN not found"</strong> error usually means it hasn't synced yet (wait 24-48 hours) or you're entering it incorrectly. <strong className="text-ink">Applications stuck</strong> on iTax generally have a rejection reason &mdash; check your dashboard. If the <strong className="text-ink">verification SMS doesn't arrive</strong>, try the email option or update your phone number at a KRA Huduma Centre.
          </p>
        </div>

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

          <section id="pin-already-exists" aria-labelledby="exists-h">
            <h2 id="exists-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              "KRA PIN Already Exists" &mdash; Your ID Is Already Registered
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                This is the most common error for first-time applicants. When iTax says "KRA PIN already exists", it means your national ID number or passport number has already been used to register a KRA PIN. You cannot have multiple PINs under the same ID.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Use 'Forgot PIN' to retrieve your existing PIN",
                    desc: "Go to itax.kra.go.ke and click 'Forgot PIN'. Enter your ID number. The system will send your KRA PIN to your registered phone number or email.",
                  },
                  {
                    title: "Pin was issued but you never received it",
                    desc: "If a family member, employer, or agent registered a PIN for you in the past, it may still be active. The 'Forgot PIN' feature will show you the PIN details.",
                  },
                  {
                    title: "Identity theft or unauthorised registration",
                    desc: "If you believe someone registered a PIN using your ID without your knowledge, visit a KRA Huduma Centre with your original ID. Request an investigation and, if necessary, a PIN cancellation and re-issuance.",
                  },
                  {
                    title: "You already have a PIN from a previous job or business",
                    desc: "If you previously worked or ran a business where a PIN was issued, that same PIN is still valid. You do not need a new one. Retrieve it using 'Forgot PIN'.",
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
                  <strong className="text-ink">Heads up:</strong> If you retrieve your PIN and want to register for VAT, see our <a href="/resources/vat-registration-checklist/" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT registration checklist</a> for the documents you will need.
                </p>
              </div>
            </div>
          </section>

          <section id="pin-not-found" aria-labelledby="notfound-h">
            <h2 id="notfound-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              "KRA PIN Not Found" on iTax
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Seeing "PIN Not Found" when you try to log in or when someone searches for your PIN? This usually means the PIN exists but is not accessible for one of these reasons.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Recently issued PIN hasn't synced yet",
                    desc: "Newly issued KRA PINs can take 24-48 hours to sync across all KRA systems (iTax, eTIMS, iCMS). If your PIN was issued today, wait at least 24 hours before trying again.",
                  },
                  {
                    title: "Wrong PIN format",
                    desc: "KRA PINs follow the format A0123456789Z - exactly 11 characters, all uppercase, no spaces, no hyphens. Double-check you are entering it correctly, especially letters that could be confused (O vs 0, I vs 1, S vs 5).",
                  },
                  {
                    title: "PIN was issued but never activated",
                    desc: "Some PINs, especially those applied for through Huduma Centres, require an activation step. Check your SMS or email for an activation link or code. If you did not receive one, you may need to follow up with the Huduma Centre.",
                  },
                  {
                    title: "PIN has been deactivated or suspended",
                    desc: "KRA deactivates PINs for non-compliance (failure to file returns for 2+ years) or suspected fraud. Contact KRA to determine the status of your PIN.",
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
            </div>
          </section>

          <section id="application-stuck" aria-labelledby="stuck-h">
            <h2 id="stuck-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              KRA PIN Application Stuck or Not Processing
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                If your KRA PIN application on iTax shows as "Pending" or "Under Process" for more than a few hours, something needs attention.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Check for rejection reasons on your dashboard",
                    desc: "Log in to iTax and navigate to 'Registration' then 'Application Status'. If your application was rejected, KRA will display the reason. Common reasons: illegible documents, missing information, or incomplete fields.",
                  },
                  {
                    title: "Documents may be illegible or in the wrong format",
                    desc: "KRA accepts only PDF and JPG, max 1MB per file. If your ID scan is blurry, too large, or in the wrong format (PNG, DOCX), the system may hang or reject without a clear message.",
                  },
                  {
                    title: "System errors and timeouts during application",
                    desc: "If iTax times out or shows an error during submission, your application may not have gone through. Check your application status. If it shows 'Draft', it was not submitted. Start again and submit during off-peak hours.",
                  },
                  {
                    title: "Visit KRA Huduma Centre for unresolved issues",
                    desc: "If your application has been stuck for more than 5 working days with no clear reason, visit the KRA Huduma Centre where you applied (or the nearest one) with your ID and supporting documents.",
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
            </div>
          </section>

          <section id="verification-failed" aria-labelledby="verify-h">
            <h2 id="verify-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Verification SMS or Email Not Arriving
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                During KRA PIN application and retrieval, KRA sends verification codes via SMS and email. If these messages are delayed or not arriving, try these solutions.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Wait at least 5-10 minutes before re-sending",
                    desc: "Each time you click 'Resend', the previous code is invalidated. Clicking repeatedly will only delay the process. Wait patiently.",
                  },
                  {
                    title: "Check spam and blocked messages",
                    desc: "KRA messages can be flagged as spam by mobile networks. Check your SMS spam folder and email spam/promotions folder. Add KRA's sender ID to your contacts.",
                  },
                  {
                    title: "Try the alternative delivery method",
                    desc: "If SMS is not arriving, use the email option. If email is not arriving, try SMS. Having both options available increases your chances of receiving the code.",
                  },
                  {
                    title: "Your phone number or email may be incorrect or outdated",
                    desc: "If you entered a wrong phone number during registration, you will not receive SMS verification. You may need to visit a KRA Huduma Centre with your ID to correct your contact details.",
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
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    No verification received after 24 hours?
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    If you have tried all options and still cannot receive verification codes, your contact details on KRA's system may be incorrect. Visit a KRA Huduma Centre with your original ID to update your phone number and email address in person. This is the only way to fix contact details if you cannot log in.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="documents-rejected" aria-labelledby="docs-h">
            <h2 id="docs-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Documents Rejected During KRA PIN Application
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Document rejection is the number one reason KRA PIN applications are delayed. KRA is strict about document quality and format.
              </p>
              <div className="border border-hairline rounded-lg overflow-hidden">
                <table className="w-full text-[0.83rem]">
                  <thead>
                    <tr className="border-b border-hairline bg-canvas-alt">
                      <th className="text-left p-3.5 font-semibold text-ink">Rejection Reason</th>
                      <th className="text-left p-3.5 font-semibold text-ink">Fix</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    <tr>
                      <td className="p-3.5 text-ink-muted">Blurry or illegible scan</td>
                      <td className="p-3.5 text-ink">Re-scan at 300 DPI minimum. Use a scanner app (Adobe Scan, CamScanner) for better results than a phone camera.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">File size exceeds 1MB</td>
                      <td className="p-3.5 text-ink">Compress PDFs using ilovepdf.com or SmallPDF. Reduce JPG resolution to 1024×768.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">Wrong file format</td>
                      <td className="p-3.5 text-ink">KRA accepts only PDF and JPG. Convert PNG, DOCX, or HEIC files before uploading.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">Expired ID document</td>
                      <td className="p-3.5 text-ink">Ensure your ID or passport is valid. Expired documents will be rejected immediately.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">Missing pages (ID back side)</td>
                      <td className="p-3.5 text-ink">Both sides of the national ID must be scanned and merged into one PDF file.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-ink-muted">Name mismatch between documents</td>
                      <td className="p-3.5 text-ink">Your name on the application must match your ID exactly. No nicknames or abbreviations.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="forgot-pin" aria-labelledby="forgot-h">
            <h2 id="forgot-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Forgot Your KRA PIN? How to Retrieve It
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                If you have lost your KRA PIN or never received it, you can retrieve it online without visiting a KRA office.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Use the iTax 'Forgot PIN' feature",
                    desc: "Go to itax.kra.go.ke and click 'Forgot PIN' below the login form. Enter your national ID number. KRA will send your PIN to your registered phone number via SMS.",
                  },
                  {
                    title: "Check your KRA PIN certificate (if you saved it)",
                    desc: "When your PIN was issued, you should have received a KRA PIN certificate. Search your email for 'KRA PIN' or check your downloads folder for a PDF file.",
                  },
                  {
                    title: "Ask your employer or accountant",
                    desc: "If your employer registered your PIN for you, they should have a copy in their records. Accountants and tax agents also maintain records of their clients' PINs.",
                  },
                  {
                    title: "Visit KRA Huduma Centre as a last resort",
                    desc: "If the online retrieval fails, visit any KRA Huduma Centre with your original ID. They can look up your PIN and issue a replacement certificate.",
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
            </div>
          </section>

          <section id="huduma-centre" aria-labelledby="huduma-h">
            <h2 id="huduma-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Huduma Centre Application Problems
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                If you applied for your KRA PIN through a Huduma Centre and it is taking longer than expected, here is why and what to do.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Huduma Centre applications take 2-5 working days",
                    desc: "Unlike online applications which are instant, Huduma Centre applications are processed in batches. Wait at least 5 working days before following up.",
                  },
                  {
                    title: "Lost application reference number",
                    desc: "If you lose the reference number given at the Huduma Centre, return to the same centre with your ID. They can look up your application in their system.",
                  },
                  {
                    title: "Huduma Centre says application was rejected",
                    desc: "Ask for the specific rejection reason. Common issues: illegible ID copy, missing signature, or incorrect details. The officer should tell you exactly what to fix.",
                  },
                  {
                    title: "Apply online instead for same-day results",
                    desc: "If the Huduma Centre process is not working, you can also apply online at itax.kra.go.ke. Online applications are processed instantly for individuals.",
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
            </div>
          </section>

          <section id="deactivated-pin" aria-labelledby="deactivated-h">
            <h2 id="deactivated-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              KRA PIN Deactivated or Suspended
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                KRA can deactivate or suspend a KRA PIN for several reasons. If your PIN was working before and now suddenly is not, this may be why.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Non-filing of returns for 2+ years",
                    desc: "KRA deactivates PINs that have not filed any returns (income tax, VAT, or otherwise) for two consecutive years. To reactivate, log in to iTax and file any outstanding returns, then contact KRA to request reactivation.",
                  },
                  {
                    title: "Duplicate PIN detected",
                    desc: "If KRA discovers you have more than one PIN, they may deactivate the duplicate. You should only ever have one PIN. Contact KRA to consolidate your records.",
                  },
                  {
                    title: "Suspected fraud or identity theft",
                    desc: "If KRA suspects your PIN was obtained fraudulently or is being used for illegal activities, they will suspend it pending investigation. Visit KRA in person with your original ID.",
                  },
                  {
                    title: "Request reactivation through KRA",
                    desc: "To reactivate a deactivated PIN, call KRA Contact Centre on 020 499 9999 or visit a KRA Huduma Centre. You will need to provide your ID and verify your identity.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Warning size={15} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>
                If you have a deactivated PIN and need to register for VAT, you must first get your PIN reactivated. Contact Smart VAT Kenya on WhatsApp and we can advise on the reactivation process.
              </p>
            </div>
          </section>

          <FAQSection faqSchema={faqSchema} />
        </article>

        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="kra-pin-not-working" />
        </div>

        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Stuck with your KRA PIN?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            We help businesses and individuals resolve KRA PIN issues every day. Send us a message and we will guide you through the fix.
          </p>
          <a
            href="https://wa.me/254717344440?text=Hi%2C%20I%20need%20help%20with%20my%20KRA%20PIN"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Get Help on WhatsApp
            <svg viewBox="0 0 12 12" className="w-3 h-3 fill-current" aria-hidden="true"><path d="M6 0L4.59 1.41 9.17 6l-4.58 4.59L6 12l6-6z"/></svg>
          </a>
          <div className="mt-4">
            <a href="/resources/" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              ← All Resources
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
