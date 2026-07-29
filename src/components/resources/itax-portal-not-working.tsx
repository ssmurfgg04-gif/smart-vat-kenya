import { ArrowLeft, ArrowRight, CheckCircle, Warning, Info } from "@phosphor-icons/react/dist/ssr"

import { ArticleGrid } from "@/lib/resources"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources" },
    { "@type": "ListItem", position: 3, name: "KRA iTax Portal Not Working", item: "https://smartvatkenya.co.ke/resources/itax-portal-not-working" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "KRA iTax Portal Not Working? Common iTax Errors and How to Fix Them (Kenya 2026)",
  description:
    "Complete guide to fixing common KRA iTax portal errors in Kenya — login failures, OTP not received, system timeouts, browser issues, return validation errors, and what to do when the portal crashes on deadline day.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-29",
  url: "https://smartvatkenya.co.ke/resources/itax-portal-not-working",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/itax-portal-not-working",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is the KRA iTax portal not working today?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The iTax portal frequently experiences downtime due to server overload, especially around the 20th monthly deadline when millions of taxpayers log in simultaneously. Scheduled maintenance on weekends and unexpected system upgrades also cause outages. If the portal is down, wait 30-60 minutes and try again during off-peak hours (early morning or after 10 PM).",
      },
    },
    {
      "@type": "Question",
      name: "How do I fix 'Invalid PIN or Password' on iTax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check that Caps Lock is off — iTax passwords are case-sensitive. Ensure you are entering your KRA PIN in the correct format (e.g., A0123456789Z, all uppercase, no spaces). If you have forgotten your password, click 'Forgot Password' to receive a reset link via your registered email. If you cannot access that email, visit a KRA Huduma Centre in person with your ID.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if iTax says 'System Timeout'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clear your browser cache and cookies, then restart your browser. Use Google Chrome or Microsoft Edge (version 120 or newer) — Firefox sometimes has compatibility issues. Switch from 3G to 4G or Wi-Fi if you are on mobile data, or try a different internet connection. Finally, try logging in during off-peak hours (before 8 AM or after 10 PM) when the iTax servers are less congested.",
      },
    },
    {
      "@type": "Question",
      name: "Why am I not receiving the iTax OTP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SMS delays are common during peak periods. Wait at least 5 minutes and check your spam or blocked messages. If the SMS still does not arrive, try the email OTP option instead — the one-time password is sent to your registered email address. If neither works, your phone number or email may need updating. Visit a KRA Huduma Centre to update your contact details, or log in to iTax and update your profile if you can access your account through the agent portal.",
      },
    },
    {
      "@type": "Question",
      name: "Is eTIMS the same thing as iTax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. eTIMS (Electronic Tax Invoice Management System) and iTax are separate KRA systems with different logins and different passwords. eTIMS is for generating and managing tax invoices and sending sales data to KRA in real time. iTax is for filing returns, checking penalties, and managing your overall tax account. Make sure you are on the correct portal and using the correct password for each system.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I cannot file my VAT return because iTax is down on the 20th?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If the iTax portal is down on the deadline, take a screenshot of the error or downtime message as evidence. File as soon as the portal is back up. If KRA later imposes a late filing penalty, you can apply for a penalty waiver citing system downtime. However, KRA does not automatically excuse late filings due to portal issues — you must proactively apply for the waiver. To avoid this stress entirely, consider using a KRA-registered VAT agent like Smart VAT Kenya who can file on your behalf without you ever needing to log in to iTax.",
      },
    },
  ],
}

const toc = [
  { id: "current-status",  label: "Is iTax Down Right Now?" },
  { id: "invalid-pin",     label: "Invalid PIN or Password" },
  { id: "system-timeout",  label: "System Timeout / Session Expired" },
  { id: "page-not-loading", label: "Page Not Loading / Error 500" },
  { id: "otp-not-received", label: "OTP Not Received" },
  { id: "forgot-password",  label: "Forgot Password Issues" },
  { id: "return-validation", label: "Return Validation Failed" },
  { id: "already-submitted", label: "Already Submitted Error" },
  { id: "browser-compat",    label: "Browser Compatibility Warning" },
  { id: "etims-confusion",   label: "eTIMS / iTax Login Confusion" },
  { id: "pin-locked",        label: "KRA PIN Locked" },
  { id: "prevention",        label: "Prevention: Never Touch iTax Again" },
  { id: "faq",               label: "Frequently Asked Questions" },
]

export default function ITaxPortalNotWorkingPage() {
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
          <a href="/resources" className="inline-flex items-center gap-1.5 text-canvas/50 hover:text-canvas text-sm mb-6 transition-colors">
            <ArrowLeft size={14} aria-hidden="true" /> Back to Knowledge Base
          </a>
          <div className="flex flex-wrap gap-2 mb-5">
            {["iTax", "KRA", "Troubleshooting", "VAT Filing"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            KRA iTax Portal Not Working? Here's What to Do
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="font-mono text-[0.62rem] uppercase tracking-widest bg-brand/20 text-brand px-2.5 py-1 rounded-sm">Last updated: July 29, 2026</span>
            <span className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            The KRA iTax portal crashes <strong className="text-ink">2-3 times per week</strong> on average, with outages spiking dramatically around the 20th monthly deadline. Most errors &mdash; login failures, timeouts, OTP delays, and Error 500 pages &mdash; can be fixed by clearing your cache, switching to{" "}
            <strong className="text-ink">Chrome or Edge</strong>, logging in during off-peak hours, or resetting your credentials. But if you are tired of wrestling with iTax every month,{" "}
            <strong className="text-ink">Smart VAT Kenya</strong> can file your VAT returns for you at{" "}
            <strong className="text-ink">KES 3,500/month</strong> &mdash; you never touch the portal again.
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

          {/* Section 0 — Current iTax Status */}
          <section id="current-status" aria-labelledby="current-status-h" className="scroll-mt-20">
            <h2 id="current-status-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Is iTax Down Right Now?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                Before you go through the troubleshooting steps below, check whether iTax is currently down
                for everyone — or if the problem is on your end.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="https://downdetector.co.ke/status/itax/" target="_blank" rel="noopener noreferrer"
                  className="border border-hairline rounded-lg p-4 hover:border-brand/30 hover:shadow-sm transition-all no-underline group">
                  <p className="font-semibold text-ink text-[0.85rem] group-hover:text-brand transition-colors mb-1">Check Downdetector</p>
                  <p className="text-[0.78rem] text-ink-muted">Real-time user reports and outage map for iTax. See if others are reporting problems right now.</p>
                </a>
                <a href="https://down.co.ke/status/kra-itax" target="_blank" rel="noopener noreferrer"
                  className="border border-hairline rounded-lg p-4 hover:border-brand/30 hover:shadow-sm transition-all no-underline group">
                  <p className="font-semibold text-ink text-[0.85rem] group-hover:text-brand transition-colors mb-1">Check Down.co.ke</p>
                  <p className="text-[0.78rem] text-ink-muted">Kenya-specific uptime checker with 24-hour history and response time graphs.</p>
                </a>
              </div>

              {/* Downtime pattern callout */}
              <div className="border border-amber-200 bg-amber-50/50 dark:bg-amber-950/10 dark:border-amber-800/30 rounded-lg p-4 flex items-start gap-3 mt-4">
                <Warning size={16} weight="fill" className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink text-[0.85rem] mb-1">When Does iTax Usually Go Down?</p>
                  <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                    iTax outages follow a predictable pattern. The portal is most unstable <strong className="text-ink">between the 15th and 20th of every month</strong> (deadline week), during peak daytime hours (8 AM – 6 PM weekdays), and during the last week of June and December (half-year and year-end rush). If it is a weekday afternoon between the 15th and 20th, there is a high chance the portal is struggling under load. Try early morning (before 8 AM) or late evening (after 10 PM) for the best experience.
                  </p>
                </div>
              </div>

              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Can't afford to wait?</strong> Smart VAT Kenya files returns
                  through the KRA agent portal — a separate system with better reliability. We never experience
                  the iTax login queues, timeouts, or OTP delays that plague the public portal.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1 — Invalid PIN or Password */}
          <section id="invalid-pin" aria-labelledby="invalid-pin-h">
            <h2 id="invalid-pin-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              "Invalid PIN or Password" &mdash; Cannot Log In to iTax
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                This is the most common iTax error, and it usually has a simple fix. The iTax login system is strict about formatting and case sensitivity. Before you panic, run through these checks.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Caps Lock is on",
                    desc: "iTax passwords are case-sensitive. If Caps Lock is on, your password will not match. Type your password into a text editor first to see exactly what you are sending, then paste it into iTax.",
                  },
                  {
                    title: "Wrong KRA PIN format",
                    desc: "Your KRA PIN must be in the exact format: A0123456789Z. All uppercase, no spaces, no hyphens, exactly 11 characters. If you are entering a lower-case letter or adding a space, iTax will reject it.",
                  },
                  {
                    title: "Password has expired or been reset",
                    desc: "KRA requires password changes every 90 days. If you have not logged in recently, your password may have expired. Click 'Forgot Password' to reset it.",
                  },
                  {
                    title: "Browser saved an old password",
                    desc: "Many users have multiple KRA PINS or old passwords saved in their browser. Clear your saved passwords for itax.kra.go.ke and type your credentials manually.",
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
              <p>
                If none of these work, your account may be locked (see the KRA PIN Locked section below) or you may need to visit a KRA Huduma Centre with your original ID and KRA PIN certificate to have your credentials reset in person.
              </p>
            </div>
          </section>

          {/* Section 2 — System Timeout */}
          <section id="system-timeout" aria-labelledby="system-timeout-h">
            <h2 id="system-timeout-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              "System Timeout" or "Session Expired" &mdash; iTax Keeps Logging You Out
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                iTax sessions time out aggressively after just <strong className="text-ink">15-20 minutes of inactivity</strong>. But many users report being logged out even while actively filling forms. Here is why this happens and how to fix it.
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: CheckCircle,
                    title: "Clear your browser cache and cookies",
                    desc: "Go to your browser settings and clear all cached data for itax.kra.go.ke. Stale session cookies are the number one cause of premature timeouts. Restart your browser completely after clearing.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Use Chrome or Edge (version 120+)",
                    desc: "iTax is optimised for Chromium-based browsers. Google Chrome and Microsoft Edge versions 120 and above work best. Firefox users report more frequent session timeouts and display issues. Safari on Mac also works but can be slower.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Switch to a faster internet connection",
                    desc: "If you are on 3G, switch to 4G or Wi-Fi. Unstable connections cause iTax to lose its session. A minimum of 2 Mbps is recommended for reliable iTax access.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Log in during off-peak hours",
                    desc: "The iTax servers are most congested between 8 AM and 6 PM on weekdays, and especially on the 15th-20th of each month. Try logging in early (before 8 AM) or late (after 10 PM) for a much smoother experience.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Disable browser extensions",
                    desc: "Ad blockers, VPN extensions, and privacy tools can interfere with iTax session management. Disable all extensions temporarily or use an incognito/private browsing window.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Icon size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
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
                    Losing data when timed out?
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    iTax does not auto-save your form data. If your session times out or the portal crashes while you are filling a return, all the information you entered is lost. Always prepare your VAT return data in a spreadsheet first, then copy it into iTax in one go. This is also why many businesses prefer to have a VAT agent file for them.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 — Page Not Loading / Error 500 */}
          <section id="page-not-loading" aria-labelledby="page-not-loading-h">
            <h2 id="page-not-loading-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              "Page Not Loading" or "Error 500" &mdash; iTax Server Down
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                An Error 500 page or a completely blank screen usually means the iTax server is overwhelmed or undergoing maintenance. This is not something you can fix on your end. KRA's iTax infrastructure has struggled with capacity for years.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Check if iTax is down for everyone",
                    desc: "Visit downdetector.co.ke or check X (Twitter) for mentions of 'iTax down' or 'KRA portal'. If other users are reporting the same issue, it is a KRA-side outage and you just need to wait.",
                  },
                  {
                    title: "Wait 30-60 minutes and try again",
                    desc: "Most iTax outages resolve within an hour. KRA typically restarts the servers or clears the backlog during this window. Do not keep refreshing every 30 seconds — this can get your IP temporarily blocked.",
                  },
                  {
                    title: "Try after 10 PM or before 6 AM",
                    desc: "KRA performs scheduled maintenance during off-peak hours, typically between midnight and 6 AM. If the portal is down during the day, try again late at night when fewer users are online.",
                  },
                  {
                    title: "Contact KRA if the outage lasts more than 4 hours",
                    desc: "If the portal has been down for more than 4 hours during a business day, call KRA Contact Centre on 020 499 9999 or 0711 000 471. Ask for an update and request that they note the outage in case you miss a deadline.",
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
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Pro tip:</strong> Always take a screenshot when you encounter an Error 500 or a blank page, especially if it is close to the 20th deadline. You can use this screenshot as evidence if KRA later tries to impose a late filing penalty. Save it with the date and time visible.
                </p>
              </div>
              <p>
                For a dedicated guide to iTax Error 500 — including how to distinguish an outage from a local issue, expected recovery times, and what to do on deadline day — see our{" "}
                <a href="/resources/kra-status-code-500-itax-errors" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  KRA Status Code 500 guide
                </a>.
              </p>
            </div>
          </section>

          {/* Section 4 — OTP Not Received */}
          <section id="otp-not-received" aria-labelledby="otp-not-received-h">
            <h2 id="otp-not-received-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              "OTP Not Received" &mdash; SMS One-Time Password Delays
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                iTax sends a One-Time Password (OTP) via SMS every time you log in. During peak periods, these SMS messages can take 10-30 minutes to arrive — or may not arrive at all. Here is what to do.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Wait at least 5 minutes before re-sending",
                    desc: "Each time you click 'Resend OTP', the previous code is invalidated. Clicking multiple times in quick succession only makes the situation worse. Wait at least 5 minutes.",
                  },
                  {
                    title: "Check your spam and blocked messages",
                    desc: "Some mobile networks flag KRA SMS as spam. Check your spam folder or blocked messages list. Try saving the KRA sender number to your contacts to prevent future filtering.",
                  },
                  {
                    title: "Try the email OTP option",
                    desc: "iTax also sends the OTP to your registered email address. If the SMS is delayed, check your email inbox (and spam folder) for the OTP. The email usually arrives faster than SMS during peak times.",
                  },
                  {
                    title: "Update your phone number at a KRA Huduma Centre",
                    desc: "If you have changed your phone number, the OTP is being sent to your old number. You must update your contact details in person at a KRA Huduma Centre. Bring your ID and KRA PIN certificate.",
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
              <p>
                If you cannot receive OTPs on either SMS or email, and you need to file a return urgently, contact Smart VAT Kenya on WhatsApp. As KRA-registered agents, we can file VAT returns on your behalf using our agent portal &mdash; no OTP required.
              </p>
            </div>
          </section>

          {/* Section 5 — Forgot Password Issues */}
          <section id="forgot-password" aria-labelledby="forgot-password-h">
            <h2 id="forgot-password-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              "Forgot Password" Not Working or Reset Link Not Arriving
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The iTax password reset process relies on your registered email address. If that email is outdated or you cannot access it, you can get stuck in a loop. Here is how to break out.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Check your email spam folder for the reset link",
                    desc: "The iTax password reset email often lands in spam or promotions folders. Search your email for 'KRA' or 'iTax' before assuming it did not arrive. The email comes from noreply@kra.go.ke.",
                  },
                  {
                    title: "Wait 10-15 minutes between reset attempts",
                    desc: "iTax throttles password reset requests. If you click 'Forgot Password' multiple times in a row, the system may lock you out of the reset feature for up to an hour. Wait patiently.",
                  },
                  {
                    title: "You no longer have access to your registered email",
                    desc: "This is the most common password reset blocker. If you cannot access the email address you registered with KRA, the online reset process will not work. You must visit a KRA Huduma Centre in person with your ID to update your email address.",
                  },
                  {
                    title: "Visit KRA Huduma Centre as a last resort",
                    desc: "Visit any KRA Huduma Centre with your original ID and a copy of your KRA PIN certificate. Request a password reset at the counter. KRA will issue you a temporary password that you can change on first login.",
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
              <div className="border border-hairline rounded-lg p-4 bg-canvas-alt flex items-start gap-3">
                <Info size={16} weight="fill" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[0.83rem] text-ink-muted leading-relaxed">
                  <strong className="text-ink">Pro tip:</strong> KRA Huduma Centres have long queues, especially at month-end. Arrive before 8 AM to secure a spot. Alternatively, let Smart VAT Kenya handle your filing so you never need to log in to iTax again.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 — Return Validation Failed */}
          <section id="return-validation" aria-labelledby="return-validation-h">
            <h2 id="return-validation-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              "Return Validation Failed" &mdash; iTax Rejects Your VAT Return
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                One of the most frustrating iTax errors happens when you have filled in all your figures, click submit, and iTax says "Return Validation Failed" without clearly explaining what is wrong. Here is what usually triggers this error.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Decimal format error",
                    desc: "iTax expects decimal places to use a dot (.) not a comma (,). Entering '1,500.50' instead of '1500.50' can trigger validation failure. Do not include thousand separators at all — type '1500.50' exactly.",
                  },
                  {
                    title: "Missing required fields",
                    desc: "Some fields in the VAT return form are mandatory even if the value is zero. Common missed fields include: 'Value of Exports', 'Input VAT at Standard Rate', and 'Output VAT at Standard Rate'. Make sure every field has a value entered.",
                  },
                  {
                    title: "Excel upload format mismatch",
                    desc: "If you are using the Excel upload feature, your spreadsheet must match KRA's exact column template — same headers, same order, no extra columns. Download a fresh template from iTax each month and paste your data into it.",
                  },
                  {
                    title: "PIN does not match the registered business name",
                    desc: "If you recently changed your business name or registered a new KRA PIN, iTax may reject the return because the PIN in the form does not match the name on record.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Warning size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>
                Return validation errors are the number one reason business owners give up and call us. At <strong className="text-ink">Smart VAT Kenya</strong>, we file hundreds of VAT returns every month. We know exactly how KRA's validation engine works and we never submit a return that will fail validation. Let us handle it for KES 3,500/month.
              </p>
            </div>
          </section>

          {/* Section 7 — Already Submitted Error */}
          <section id="already-submitted" aria-labelledby="already-submitted-h">
            <h2 id="already-submitted-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              "Already Submitted" Error &mdash; Did iTax Already Receive Your Return?
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                You fill in the return, click submit, get an error, click submit again, and now iTax says "Already Submitted". This confusing error usually means the first submission actually went through &mdash; but you did not get a confirmation.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Check your return history before re-submitting",
                    desc: "Go to 'Returns' then 'File VAT Return' and look at the status for the period in question. If it shows 'Filed' or 'Pending', your return was received. Do not submit again — filing a duplicate can trigger a penalty.",
                  },
                  {
                    title: "Look for the submission receipt in your email",
                    desc: "iTax sends a confirmation receipt to your registered email after every successful submission. If you have the receipt, your return is filed. If not, the submission may have failed.",
                  },
                  {
                    title: "Wait 24 hours and check again",
                    desc: "Sometimes iTax takes up to 24 hours to update the return status. If the period still shows 'Draft' or 'Not Filed' after 24 hours, your submission failed and you need to try again.",
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
                The safest way to avoid this confusion is to have your return filed by a KRA-registered agent. We get an instant system confirmation for every submission and can verify within minutes that your return has been accepted.
              </p>
            </div>
          </section>

          {/* Section 8 — Browser Compatibility Warning */}
          <section id="browser-compat" aria-labelledby="browser-compat-h">
            <h2 id="browser-compat-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              "Browser Compatibility" Warning &mdash; iTax Looks Broken
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                iTax displays a warning message about browser compatibility when it detects you are not using a supported browser. While the page may still load, key features like dropdown menus, date pickers, and submit buttons often malfunction.
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: CheckCircle,
                    title: "Use Google Chrome 120+ or Microsoft Edge 120+",
                    desc: "These are the only browsers officially supported by KRA for iTax. Both are based on Chromium and handle iTax's legacy interface correctly.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Firefox has known issues",
                    desc: "Mozilla Firefox users frequently report that iTax dropdown menus do not open, date fields do not work, and the submit button appears greyed out. Switch to Chrome or Edge if you are on Firefox.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Safari works but is slower",
                    desc: "Safari on macOS generally works with iTax but pages load slower and session timeouts are more frequent. Use Chrome on Mac for the best experience.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Do not use Internet Explorer",
                    desc: "KRA's legacy 'Internet Explorer recommended' message is outdated. Do not use IE or the embedded iTax app email links that try to force IE. Use a modern Chromium browser.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Icon size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem]">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 9 — eTIMS / iTax Login Confusion */}
          <section id="etims-confusion" aria-labelledby="etims-confusion-h">
            <h2 id="etims-confusion-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              eTIMS / iTax Login Confusion &mdash; Wrong Portal, Wrong Password
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                A growing source of login frustration: eTIMS (Electronic Tax Invoice Management System) and iTax are <strong className="text-ink">two separate systems</strong> with different URLs, different logins, and different passwords. Many business owners confuse the two.
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: Info,
                    title: "iTax is at itax.kra.go.ke",
                    desc: "This is where you file VAT returns, check penalties, apply for waivers, and manage your tax account. You log in with your KRA PIN and password.",
                  },
                  {
                    icon: Info,
                    title: "eTIMS is at etims.kra.go.ke",
                    desc: "This is where you generate tax invoices (e-invoices), manage inventory, and transmit sales data to KRA in real time. You log in with your KRA PIN but the password is typically different from your iTax password.",
                  },
                  {
                    icon: Warning,
                    title: "Different passwords, even if you set them the same",
                    desc: "Even if you use the same password on both platforms, KRA treats them as separate accounts. Changing your password on iTax does not change it on eTIMS, and vice versa. If you reset one, the other does not change.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Icon size={15} weight="fill" className={Icon === Warning ? "text-[#b07a00]" : "text-ink-muted"} aria-hidden="true" />
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
                    Quick check: which portal are you on?
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    Look at the URL in your browser address bar. If it says <strong>itax.kra.go.ke</strong>, you are on iTax. If it says <strong>etims.kra.go.ke</strong>, you are on eTIMS. The two portals also look different — iTax has a blue and white interface, while eTIMS has a green theme. If the page looks unfamiliar, check the URL first.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10 — KRA PIN Locked */}
          <section id="pin-locked" aria-labelledby="pin-locked-h">
            <h2 id="pin-locked-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              KRA PIN Locked &mdash; Too Many Failed Login Attempts
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                After <strong className="text-ink">5 failed login attempts</strong>, iTax automatically locks your KRA PIN for security purposes. You will see a message saying your account has been temporarily disabled. This lock usually lasts <strong className="text-ink">30-60 minutes</strong>, but in some cases it can last 24 hours.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Wait for the automatic unlock",
                    desc: "The lock is usually temporary. Wait at least one hour before attempting to log in again. Do not keep trying — each failed attempt during the lock period extends the lock time.",
                  },
                  {
                    title: "Reset your password while locked",
                    desc: "Even if your PIN is locked, you can still use the 'Forgot Password' feature. The lock applies to login attempts, not to password resets. Reset your password first, then try logging in.",
                  },
                  {
                    title: "Call KRA support to unlock your PIN",
                    desc: "If the lock persists beyond 24 hours, call KRA Contact Centre on 020 499 9999 or 0711 000 471. You will need to verify your identity using your KRA PIN and ID number. They can unlock your account remotely.",
                  },
                  {
                    title: "Visit a KRA Huduma Centre for severe cases",
                    desc: "If your PIN has been locked due to suspected fraudulent activity, you may need to visit a KRA Huduma Centre in person. Bring your original ID and KRA PIN certificate for identity verification.",
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
              <p>
                If you frequently get locked out of iTax, consider using a KRA-registered agent like <strong className="text-ink">Smart VAT Kenya</strong> to file your returns. We access iTax through the dedicated agent portal and never experience these login issues.
              </p>
            </div>
          </section>

          {/* Section 11 — Prevention */}
          <section id="prevention" aria-labelledby="prevention-h">
            <h2 id="prevention-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Prevention: Never Deal with iTax Errors Again
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The honest truth? The iTax portal is not going to get better. KRA has acknowledged the capacity issues, but improvements have been slow. Every month, thousands of Kenyan business owners lose hours of productive time battling the same iTax errors.
              </p>
              <p>
                There is a simple alternative: <strong className="text-ink">never log in to iTax again</strong>. When you sign up for Smart VAT Kenya's auto-filing service, we handle everything through the KRA agent portal &mdash; a separate system designed for professional use that has much better uptime and reliability.
              </p>
              <div className="border border-hairline rounded-lg p-5 bg-canvas-alt">
                <p className="font-semibold text-ink text-[0.9rem] mb-3">Here is what you get for KES 3,500/month:</p>
                <ul className="space-y-2">
                  {[
                    "Monthly VAT return filed on iTax before the 20th deadline — every single month, guaranteed.",
                    "No more login errors, no more OTP delays, no more browser compatibility warnings.",
                    "We prepare your return from your sales and purchase records — you just send us the figures on WhatsApp.",
                    "Penalty monitoring — we alert you if KRA has applied any penalties to your account.",
                    "Free eTIMS support — we help you with invoice generation and eTIMS troubleshooting.",
                    "Dedicated WhatsApp line — reach us anytime, not when iTax decides to work.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.85rem] text-ink-soft">
                      <CheckCircle size={15} weight="fill" className="text-brand shrink-0 mt-0.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                No setup fee. No long-term contract. You can cancel anytime. Just send us your sales and purchase figures each month via WhatsApp, and we take care of the rest. You will never see an iTax error screen again.
              </p>

              {/* Conversion CTA */}
              <div className="mt-8 border border-brand/20 bg-brand-muted rounded-lg p-6">
                <p className="font-display text-[1.15rem] font-semibold text-ink mb-3">Tired of iTax Headaches?</p>
                <p className="text-[0.84rem] text-ink-soft leading-relaxed mb-4">
                  Stop wasting hours every month fighting the iTax portal. Our KRA-registered agents handle your VAT filing from start to finish. No login errors, no timeouts, no stress &mdash; just{" "}
                  <strong className="text-ink">KES 3,500/month</strong> and your returns are filed on time, every time.
                </p>
                <a
                  href="https://wa.me/254721725958?text=Hi%2C%20I%20want%20to%20stop%20dealing%20with%20iTax%20errors.%20Please%20help%20me%20sign%20up%20for%20auto-filing%20at%20KES%203%2C500%2Fmonth."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
                >
                  Start Auto-Filing — KES 3,500/month
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" aria-labelledby="faq-h">
            <h2 id="faq-h" className="font-display text-[1.4rem] font-semibold text-ink mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <dl className="divide-y divide-hairline">
              {faqSchema.mainEntity.map((q) => (
                <div key={q.name} className="py-5 first:pt-0">
                  <dt className="font-display text-[0.95rem] font-semibold text-ink mb-2">{q.name}</dt>
                  <dd className="text-[0.85rem] text-ink-muted leading-relaxed">{q.acceptedAnswer.text}</dd>
                </div>
              ))}
            </dl>
          </section>
        </article>

        {/* Sources & Methodology */}
        <div className="mt-12 border-t border-hairline pt-8">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted mb-3">Sources &amp; Methodology</p>
          <p className="text-[0.78rem] text-ink-muted leading-relaxed max-w-[60ch]">
            Troubleshooting steps compiled from KRA iTax official guidance, KRA Contact Centre reports,
            Downdetector outage history, and Smart VAT Kenya's own experience filing hundreds of monthly
            VAT returns through the KRA agent portal. Outage patterns based on 12 months of Downdetector
            and Down.co.ke historical data. Last verified: July 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-10 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="itax-portal-not-working" />
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
            <a href="/resources" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              ← All Resources
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
