import { User, ArrowLeft, ArrowRight, CheckCircle, Warning, Info, DeviceMobile, ShieldWarning } from "@phosphor-icons/react/dist/ssr"

import { DEFAULT_AUTHOR, LAST_VERIFIED, personSchema } from "@/src/lib/authors"
import { ArticleGrid } from "@/lib/resources"
import { FAQSection } from "@/components/faq-section"

const WHATSAPP_NUMBER = "254717344440"

const breadcrumbSchema = {
  "@context": "https://schema.org" as const,
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "eTIMS Device Not Registered", item: "https://smartvatkenya.co.ke/resources/etims-device-not-registered/" },
  ],
}

const articleSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Article",
  headline: "eTIMS Device Not Registered - How to Activate Your OSCU/VSCU (2026)",
  description:
    "If your eTIMS device shows 'Device Not Registered' or 'Device Not Found', it has not been activated on KRA's eTIMS platform. Learn why this happens, how to register your device online, and how to start invoicing again.",
  author: personSchema(),
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-08-15",
  dateModified: LAST_VERIFIED,
  url: "https://smartvatkenya.co.ke/resources/etims-device-not-registered",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/etims-device-not-registered",
}

const faqSchema = {
  "@context": "https://schema.org" as const,
  "@type": "FAQPage" as const,
  mainEntity: [
    {
      "@type": "Question" as const,
      name: "What does 'Device Not Registered' mean on eTIMS?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "It means your eTIMS device (OSCU, VSCU, or eTIMS Client on a phone/computer) has been physically set up but has not yet been linked to your KRA PIN on the eTIMS platform. KRA's servers do not recognise the device serial number, so it cannot transmit invoices. You must register the device online through the eTIMS portal or eTIMS Lite before any invoice can be confirmed.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Why is my eTIMS device showing as not registered?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Common causes: the device supplier has not completed onboarding on KRA's side, your KRA PIN is not VAT-registered (you cannot register an eTIMS device on a non-VAT PIN), the device serial number was captured incorrectly, the device was issued to a different PIN by mistake, or a previous registration was revoked. The fastest way to confirm is to log into eTIMS Lite (etims.kra.go.ke) and check the list of registered devices under your PIN.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Can I issue invoices while my device is not registered?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "No. An unregistered eTIMS device cannot generate valid tax invoices. If you try to invoice, the device will reject the request or the invoice will not be confirmed by KRA. If you urgently need to invoice a customer, the only legal workaround is to issue a manual VAT invoice (with a manual serial number) and transmit it via eTIMS Lite web portal as soon as your device is registered, or use eTIMS Lite directly to issue the invoice online.",
      },
    },
    {
      "@type": "Question" as const,
      name: "How do I register my eTIMS device online?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Log into eTIMS Lite at etims.kra.go.ke with your KRA PIN and password, navigate to Device Management, select Add Device, enter the device serial number exactly as printed on the device or in the supplier's handover letter, select the device type (OSCU for physical ECDs, VSCU for virtual/ software-based), and submit. The device appears as 'Active' within 5-30 minutes. If it still shows 'Not Registered' after 1 hour, call KRA eTIMS support on 020 499 9999.",
      },
    },
    {
      "@type": "Question" as const,
      name: "How long does KRA take to register an eTIMS device?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "Self-registration on eTIMS Lite is usually instant - the device shows 'Active' within 5-30 minutes. If a supplier is registering on your behalf, KRA can take 1-3 working days to process the registration form. If you submitted a registration more than 3 working days ago and the device is still not active, the application has likely failed silently - contact your supplier or KRA eTIMS support to investigate.",
      },
    },
    {
      "@type": "Question" as const,
      name: "Can I register an eTIMS device if I am not VAT-registered?",
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: "No. eTIMS device registration requires a KRA PIN that has an active VAT obligation. If your PIN is not VAT-registered, the eTIMS platform will reject the device registration. You must first register for VAT (it takes 1-3 working days via iTax), then register your device. Persons on Turnover Tax (TOT) can use eTIMS Lite without a physical device but cannot register an OSCU/VSCU.",
      },
    },
  ],
}

const toc = [
  { id: "what-it-means", label: "What 'Device Not Registered' Means" },
  { id: "why-it-happens", label: "Why It Happens" },
  { id: "how-to-register", label: "How to Register Your Device" },
  { id: "pin-not-vat", label: "If Your PIN Is Not VAT-Registered" },
  { id: "supplier-stuck", label: "When the Supplier Is Stuck" },
  { id: "faq", label: "Frequently Asked Questions" },
]

const StatusBanner = ({ lastUpdated = LAST_VERIFIED, status = "unknown", whatsappNumber }: { lastUpdated?: string; status?: "operational" | "disrupted" | "unknown"; whatsappNumber?: string }) => {
  const configs = {
    operational: {
      borderClass: "border-emerald-500",
      bgClass: "bg-emerald-50",
      textClass: "text-emerald-900",
      subtextClass: "text-emerald-700",
      buttonClass: "bg-emerald-600 hover:bg-emerald-700",
      label: "Device registration is processing",
      message: "Most eTIMS device registrations complete within 30 minutes.",
    },
    disrupted: {
      borderClass: "border-orange-500",
      bgClass: "bg-orange-50",
      textClass: "text-orange-900",
      subtextClass: "text-orange-700",
      buttonClass: "bg-orange-600 hover:bg-orange-700",
      label: "KRA eTIMS portal may be slow",
      message: "Device registrations are taking longer than usual - some up to 24 hours.",
    },
    unknown: {
      borderClass: "border-amber-500",
      bgClass: "bg-amber-50",
      textClass: "text-amber-900",
      subtextClass: "text-amber-700",
      buttonClass: "bg-amber-600 hover:bg-amber-700",
      label: "Status unconfirmed",
      message: "Try the registration steps below - if the device is still not active after 1 hour, contact KRA directly.",
    },
  }
  const config = configs[status]
  return (
    <div className={`border-l-4 ${config.borderClass} ${config.bgClass} p-4 mb-8 rounded-r-lg`} role="status" aria-live="polite">
      <div className="flex items-start gap-3">
        <DeviceMobile size={22} weight="duotone" className={`${config.textClass} shrink-0 mt-0.5`} aria-hidden="true" />
        <div className="flex-1 min-w-0">
          <p className={`font-semibold text-[0.9rem] ${config.textClass} mb-1`}>{config.label}</p>
          <p className={`text-[0.82rem] ${config.subtextClass} leading-relaxed mb-2`}>{config.message} Last checked: {lastUpdated}.</p>
          {whatsappNumber && (
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20my%20eTIMS%20device%20shows%20%22Not%20Registered%22`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 ${config.buttonClass} text-white text-[0.78rem] font-semibold px-3 py-1.5 rounded-md`}
            >
              Send device serial on WhatsApp
              <ArrowRight size={12} weight="bold" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ETimsDeviceNotRegisteredPage() {
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
            {["eTIMS", "Device", "OSCU/VSCU", "Activation"].map((t) => (
              <span key={t} className="font-mono text-[0.6rem] uppercase tracking-widest bg-canvas/10 text-canvas/60 px-2.5 py-1 rounded-sm">{t}</span>
            ))}
          </div>
          <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.7rem)] font-semibold text-canvas tracking-tight leading-tight mb-4 text-balance">
            eTIMS Device Not Registered - How to Activate It on KRA (2026)
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="font-mono text-[0.62rem] uppercase tracking-widest bg-brand/20 text-brand px-2.5 py-1 rounded-sm">Last updated: August 25, 2026</span>
            <span className="text-[0.78rem] text-canvas/50">Smart VAT Kenya &mdash; KRA-registered VAT agents</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14">
        {/* Status Banner */}
        <StatusBanner
          lastUpdated={LAST_VERIFIED}
          status="unknown"
          whatsappNumber={WHATSAPP_NUMBER}
        />

        {/* Quick Answer / BLUF */}
        <div className="border-l-[3px] border-brand pl-5 mb-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand mb-2">Quick Answer</p>
          <p className="text-[0.93rem] text-ink-soft leading-relaxed">
            &ldquo;Device Not Registered&rdquo; means your eTIMS device (OSCU, VSCU, or eTIMS Client on a phone/computer) has been physically set up but has <strong className="text-ink">not been linked to your KRA PIN</strong> on KRA&rsquo;s eTIMS platform. KRA does not recognise the device&rsquo;s serial number, so it <strong className="text-ink">cannot transmit invoices</strong>. To fix it: log into <strong className="text-ink">eTIMS Lite at etims.kra.go.ke</strong>, open <strong className="text-ink">Device Management</strong>, add the device serial number, and wait 5-30 minutes for it to show <strong className="text-ink">Active</strong>. If your KRA PIN is not VAT-registered, you cannot register a device &mdash; <a href="/services/vat-registration/" className="text-brand underline underline-offset-2">register for VAT first</a>.
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

          {/* Section 1 - What it means */}
          <section id="what-it-means" aria-labelledby="what-it-means-h">
            <h2 id="what-it-means-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              What &ldquo;Device Not Registered&rdquo; Actually Means
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                KRA&rsquo;s eTIMS platform is a <strong className="text-ink">central registry of all tax invoices</strong> issued in Kenya. Every invoice generated by a compliant device is matched to a registered <em>device serial number</em> on KRA&rsquo;s side. If your device serial is not in that registry, the invoice is rejected at the validation step.
              </p>
              <p>
                The &ldquo;Device Not Registered&rdquo; status can appear in three places:
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "On the physical OSCU/VSCU screen",
                    desc: "Older ECD devices display 'Device Not Registered' on the small LCD when booted. This means the device firmware cannot authenticate against KRA - usually because the device serial was never registered to your PIN.",
                  },
                  {
                    title: "Inside eTIMS Client (software)",
                    desc: "When you open the eTIMS Client app on your computer or phone, it tries to connect to KRA and shows 'Device Not Registered' or 'Device Not Found'. The local app cannot talk to KRA's validation endpoint.",
                  },
                  {
                    title: "On eTIMS Lite web portal",
                    desc: "When you log into etims.kra.go.ke and check Device Management, the device appears in the list with status 'Not Registered' or 'Pending' - meaning the registration was started but never completed by KRA's back office.",
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
                  <strong className="text-ink">Key distinction:</strong> &ldquo;Not Registered&rdquo; is different from <em>account locked</em> (your device <em>is</em> registered but KRA disabled it - see our{" "}
                  <a href="/resources/etims-account-locked/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    eTIMS account locked guide
                  </a>
                  ). It is also different from <em>pending sync</em> - where the device is registered but invoices have not been uploaded (see{" "}
                  <a href="/resources/etims-pending-sync/" className="text-brand underline underline-offset-2 hover:text-brand-hover">
                    pending sync guide
                  </a>
                  ).
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 - Why it happens */}
          <section id="why-it-happens" aria-labelledby="why-it-happens-h">
            <h2 id="why-it-happens-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              Why eTIMS Devices Get Stuck on &ldquo;Not Registered&rdquo;
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The registration pipeline has several handoffs: device supplier &rarr; KRA back office &rarr; eTIMS platform &rarr; your KRA PIN. Any link can drop the registration.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Your KRA PIN has no VAT obligation",
                    desc: "This is the most common cause. You cannot register an eTIMS device on a PIN that is not VAT-registered. KRA rejects the registration silently - the device serial appears in the portal as 'Pending' but never activates. Check your VAT obligation on iTax under Returns > Obligations before contacting anyone.",
                  },
                  {
                    title: "The supplier has not uploaded the serial",
                    desc: "When you buy an OSCU from an authorised supplier (e.g., Triton, M heroine, Smart Africa), they are supposed to upload the device serial to KRA within 24 hours. Some suppliers wait until a batch of devices is sold before uploading. Result: your device is physically in your shop but not on KRA's registry.",
                  },
                  {
                    title: "Wrong PIN captured during onboarding",
                    desc: "If the supplier captured the wrong KRA PIN (a single digit wrong), the device is registered to someone else's PIN. When you try to use it, your PIN does not match - and the device shows 'Not Registered' on your end because your PIN lookup fails.",
                  },
                  {
                    title: "The device was previously deregistered",
                    desc: "If a device was returned by a previous owner and deregistered, KRA's system sometimes blocks re-registration to a new PIN for 7-30 days. The supplier may not know this - they sell you a 'refurbished' device that fails to register.",
                  },
                  {
                    title: "eTIMS platform backlog",
                    desc: "During peak filing periods (the 18th-22nd of each month), KRA's eTIMS registration queue slows down. A registration that normally takes 30 minutes can take 24 hours. If you are registering close to the VAT filing deadline, expect delays.",
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

          {/* Section 3 - How to register */}
          <section id="how-to-register" aria-labelledby="how-to-register-h">
            <h2 id="how-to-register-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              How to Register Your eTIMS Device (Step by Step)
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                The fastest registration path is self-service through <strong className="text-ink">eTIMS Lite</strong> (the web portal). You do not need the supplier to do anything if you have the device serial number.
              </p>
              <ol className="space-y-3 list-none pl-0" role="list">
                {[
                  {
                    step: "01",
                    title: "Find your device serial number",
                    desc: "It is printed on a sticker on the back of the OSCU/VSCU (a 12-15 character alphanumeric code starting with 'KR' or 'S/N'). For eTIMS Client on a phone/PC, the serial is auto-generated when you install the app - check the 'About' section inside the eTIMS Client app.",
                  },
                  {
                    step: "02",
                    title: "Log into eTIMS Lite",
                    desc: "Go to etims.kra.go.ke. Use your KRA PIN and the same password you use on iTax. If you have never logged in, click 'Forgot Password' and KRA will send a reset link to the email registered on your iTax profile.",
                  },
                  {
                    step: "03",
                    title: "Open Device Management",
                    desc: "Once logged in, the main menu has a 'Device Management' or 'Manage Devices' option (the label varies). Click it. You will see a list of devices currently registered to your PIN - this list may be empty if you are registering your first device.",
                  },
                  {
                    step: "04",
                    title: "Add your device serial",
                    desc: "Click 'Add Device' or 'Register New Device'. Enter the serial number exactly as printed - case-sensitive, no spaces. Select the device type (OSCU for physical ECDs, VSCU for virtual/software-based). Submit. The portal will say 'Registration submitted - pending activation'.",
                  },
                  {
                    step: "05",
                    title: "Wait 5-30 minutes and verify",
                    desc: "Refresh the page after 30 minutes. The status should change from 'Pending' to 'Active'. If it is still 'Pending' after 1 hour, the registration has failed - try once more. If it still fails, the device serial is likely registered to a different PIN and you need KRA support.",
                  },
                  {
                    step: "06",
                    title: "Test with a sample invoice",
                    desc: "Once the device shows 'Active', open eTIMS Client (or your OSCU screen) and try to issue a sample invoice of KES 1. If the invoice transmits successfully and you can see it in eTIMS Lite > Transaction History within 5 minutes, the device is fully working.",
                  },
                ].map(({ step, title, desc }) => (
                  <li key={step} className="flex items-start gap-3 pl-0">
                    <span className="font-mono text-[0.7rem] text-brand font-semibold shrink-0 mt-1 w-8">{step}</span>
                    <div>
                      <p className="font-semibold text-ink text-[0.88rem] mb-0.5">{title}</p>
                      <p className="text-[0.83rem] text-ink-muted leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <Warning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Need to invoice urgently while waiting?
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    Use <strong>eTIMS Lite</strong> (the web portal) to issue your invoice online. eTIMS Lite uses your PIN directly and does not require a registered physical device. It is slower (a few minutes per invoice) but is fully KRA-compliant. See our{" "}
                    <a href="/resources/etims-onboarding-guide/" className="underline underline-offset-2 hover:opacity-80">
                      eTIMS onboarding guide
                    </a>{" "}
                    for the eTIMS Lite workflow.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 - PIN not VAT-registered */}
          <section id="pin-not-vat" aria-labelledby="pin-not-vat-h">
            <h2 id="pin-not-vat-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              If Your KRA PIN Is Not VAT-Registered
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                A common trap: <strong className="text-ink">eTIMS device registration requires a KRA PIN with an active VAT obligation</strong>. If your PIN has Turnover Tax (TOT) only, or has no tax obligation at all, the eTIMS platform will reject the device registration - and the rejection is silent. The device serial appears as &ldquo;Pending&rdquo; forever.
              </p>
              <p>
                To check if your PIN is VAT-registered:
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Log into iTax",
                    desc: "Go to itax.kra.go.ke and log in with your KRA PIN and password. If you cannot remember your password, use the 'Forgot Password' link - KRA sends a reset to your registered email.",
                  },
                  {
                    title: "Check your obligations",
                    desc: "Navigate to Returns > File Return. The drop-down list shows your active tax obligations. If 'Value Added Tax (VAT)' is not in the list, your PIN is not VAT-registered.",
                  },
                  {
                    title: "If VAT is missing, register for VAT",
                    desc: "Navigate to Registration > e-Registration, select VAT, fill in your business details (turnover, business activity, expected monthly sales). Submit. VAT registration takes 1-3 working days. We handle this end-to-end for KES 5,000 - see our VAT registration service.",
                  },
                  {
                    title: "Then register the device",
                    desc: "Once VAT appears on your obligations list (you will also get an SMS from KRA), go back to eTIMS Lite and re-submit the device registration. It will activate within 30 minutes.",
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
              <div className="border border-brand/20 bg-brand-muted rounded-lg p-5">
                <p className="font-display text-[0.95rem] font-semibold text-ink mb-2">Need to register for VAT first?</p>
                <p className="text-[0.83rem] text-ink-muted leading-relaxed mb-4">
                  We handle the entire iTax VAT registration for KES 5,000 - including updating your iTax profile, generating the VAT PIN certificate, and guiding you through the first eTIMS device registration. Done in 1-3 working days.
                </p>
                <a
                  href="/services/vat-registration/"
                  className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
                >
                  Start VAT Registration
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          {/* Section 5 - Supplier stuck */}
          <section id="supplier-stuck" aria-labelledby="supplier-stuck-h">
            <h2 id="supplier-stuck-h" className="font-display text-[1.4rem] font-semibold text-ink mb-5 tracking-tight">
              When Your Device Supplier Is Stuck
            </h2>
            <div className="space-y-4 text-[0.9rem] text-ink-soft leading-[1.75]">
              <p>
                If you bought your OSCU from an authorised supplier and they have not completed the registration after <strong className="text-ink">3 working days</strong>, the supplier&rsquo;s submission has likely failed. Here is the escalation path:
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Get the original handover letter",
                    desc: "The supplier should have given you a handover letter with the device serial, date of sale, and the supplier's KRA eTIMS integrator ID. This letter is proof that you own the device and is required by KRA support.",
                  },
                  {
                    title: "Email the supplier with the serial number",
                    desc: "Send a formal email (not WhatsApp) to the supplier with: device serial, your KRA PIN, the date of purchase, and a screenshot of the 'Pending' status on eTIMS Lite. Ask them to confirm in writing whether the device has been uploaded to KRA.",
                  },
                  {
                    title: "If the supplier does not respond in 48 hours",
                    desc: "Call KRA eTIMS support on 020 499 9999. Have your KRA PIN, device serial, and supplier name ready. KRA can force-register the device from their side if you prove ownership.",
                  },
                  {
                    title: "Worst case: re-register via eTIMS Lite",
                    desc: "If the device was registered to a wrong PIN by the supplier, you may be able to register it to your PIN via eTIMS Lite - KRA's system sometimes allows a 'correction' registration. If it does not, KRA support must deregister it from the wrong PIN first, which takes 7-14 days.",
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
              <div className="border border-canvas-warm bg-[#fffbf0] dark:bg-[#2a1f00] dark:border-[#4a3800] rounded-lg p-4 flex items-start gap-3">
                <ShieldWarning size={17} weight="fill" className="text-[#b07a00] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#7a5500] dark:text-[#ffcc44] text-[0.85rem] mb-1">
                    Do not buy a &ldquo;refurbished&rdquo; OSCU off Jumia or social media
                  </p>
                  <p className="text-[0.83rem] text-[#8a6500] dark:text-[#ccaa33] leading-relaxed">
                    We see businesses weekly who bought a cheap OSCU online only to find the device is deregistered, blacklisted, or registered to a different PIN. Always buy from a KRA-authorised eTIMS integrator and get a proper handover letter. If you are stuck with a bad device, we can help you reset and re-register it - send the serial on WhatsApp.
                  </p>
                </div>
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
            Compiled from KRA eTIMS user guides, the eTIMS Lite portal documentation, KRA Contact Centre guidance (020 499 9999), and Smart VAT Kenya&rsquo;s hands-on experience registering and troubleshooting eTIMS devices for Kenyan SMEs. Last verified: August 2026.
          </p>
        </div>

        {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More eTIMS Guides</p>
          <ArticleGrid currentSlug="etims-device-not-registered" />
        </div>

        {/* CTA */}
        <div className="mt-10 border border-brand/20 bg-brand-muted rounded-lg p-6 text-center">
          <p className="font-display text-[1rem] font-semibold text-ink mb-1">Stuck with an unregistered eTIMS device?</p>
          <p className="text-[0.85rem] text-ink-muted mb-4 max-w-[40ch] mx-auto leading-relaxed">
            Send the device serial and a screenshot of the error on WhatsApp - we will tell you in minutes whether it is a PIN issue, a supplier issue, or a KRA backlog.
          </p>
          <a
            href="https://wa.me/254717344440?text=Hi%2C%20my%20eTIMS%20device%20shows%20%22Not%20Registered%22"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-canvas font-semibold text-sm px-5 py-3 rounded-md hover:bg-brand-hover transition-colors"
          >
            Get Device Help on WhatsApp
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
