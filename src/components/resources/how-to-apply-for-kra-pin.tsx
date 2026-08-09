import { ArrowLeft, ArrowRight, CheckCircle, Globe, Buildings, DeviceMobile, IdentificationCard, Users } from "@phosphor-icons/react/dist/ssr"
import { NewsletterSignup } from "@/components/newsletter-signup"

import { ArticleGrid } from "@/lib/resources"

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Apply for a KRA PIN in Kenya 2026: Online & Offline Guide",
  description:
    "Step-by-step guide to applying for a KRA PIN in Kenya. Apply online via iTax, at Huduma Centre, or through the KRA mobile app. Documents required, processing time, and how to check your PIN status.",
  author: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  publisher: { "@type": "Organization", name: "Smart VAT Kenya", url: "https://smartvatkenya.co.ke" },
  datePublished: "2026-07-26",
  dateModified: "2026-07-26",
  url: "https://smartvatkenya.co.ke/resources/how-to-apply-for-kra-pin",
  mainEntityOfPage: "https://smartvatkenya.co.ke/resources/how-to-apply-for-kra-pin",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://smartvatkenya.co.ke" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://smartvatkenya.co.ke/resources/" },
    { "@type": "ListItem", position: 3, name: "How to Apply for a KRA PIN in Kenya", item: "https://smartvatkenya.co.ke/resources/how-to-apply-for-kra-pin/" },
  ],
}

export default function KraPinPost() {
  return (
    <div className="max-w-[700px] mx-auto px-6 lg:px-10 py-12">
      <script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <a href="/resources/" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink text-sm font-medium mb-8 transition-colors">
        <ArrowLeft size={14} aria-hidden="true" /> All Resources
      </a>

      <article>
        <header className="mb-8">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brand mb-3">Getting Started</p>
          <h1 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-ink tracking-tight leading-tight mb-4 text-balance">
            How to Apply for a KRA PIN in Kenya 2026: Online &amp; Offline Guide
          </h1>
          <div className="flex items-center gap-4 text-[0.75rem] text-ink-muted">
            <time dateTime="2026-07-26">26 July 2026</time>
            <span>7 min read</span>
            <span>Smart VAT Kenya</span>
          </div>
        </header>

        <div className="space-y-5 text-[0.9rem] text-ink-soft leading-[1.75]">
          <p>
            A KRA PIN (Personal Identification Number) is the single most important tax identifier
            for anyone living or doing business in Kenya. Without it you cannot open a bank account,
            register a company, file taxes, import goods, or even get a formal job. Every adult
            Kenyan who earns income or owns property needs one.
          </p>
          <p>
            In this guide you will learn how to apply for a KRA PIN — online through the iTax portal,
            in person at a Huduma Centre, and via the KRA mobile app. We also cover how to check your
            PIN status, how to get a business PIN, and what non-residents need to do.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3 flex items-center gap-2">
            <IdentificationCard size={20} className="text-brand" aria-hidden="true" />
            What Is a KRA PIN and Why Do You Need One?
          </h2>
          <p>
            The KRA PIN is an 11-character alphanumeric identifier assigned by the Kenya Revenue
            Authority to every taxpayer. It follows the format <strong>PXXXXXXXXX</strong> for
            individuals and <strong>XXXXXXXXXX</strong> for businesses. You will use this number
            for the rest of your tax life in Kenya.
          </p>
          <p>You need a KRA PIN to:</p>
          <ul className="space-y-1.5">
            {[
              "Open a bank account or a mobile money wallet",
              "Register a business with the eCitizen or Business Registration Service (BRS)",
              "File income tax, VAT, or any other tax return",
              "Pay taxes to KRA through iTax",
              "Register for VAT or apply for a VAT refund",
              "Clear goods through customs at the port of Mombasa or JKIA",
              "Secure formal employment — every employer requires your KRA PIN",
              "Apply for a driving licence, passport, or other government services",
              "Register property or land transfers",
              "Access government tenders and procurement opportunities",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            The KRA PIN is free to apply for. There is no application fee for individual PIN
            registration, though you may incur small costs for document certification or
            courier services if applying from abroad.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3 flex items-center gap-2">
            <Globe size={20} className="text-brand" aria-hidden="true" />
            How to Apply for a KRA PIN Online (iTax)
          </h2>
          <p>
            The fastest and most convenient way to get your KRA PIN is through the KRA iTax portal
            at <strong>itax.kra.go.ke</strong>. The online application takes about 15 minutes and
            you will receive your PIN within 1 to 3 working days.
          </p>
          <p className="font-semibold text-ink mt-4">Step-by-step process:</p>
          <ol className="space-y-3">
            {[
              "Visit itax.kra.go.ke. Click on the \"Register\" tab at the top of the page.",
              "Select whether you are registering as an Individual or a Business (Non-Individual). For a personal PIN, choose Individual.",
              "Fill in your full legal name, date of birth, gender, and nationality exactly as they appear on your national ID or passport. Any mismatch will delay processing.",
              "Enter your contact details — a valid email address and a mobile phone number. KRA will send your PIN confirmation to these contacts.",
              "Provide your physical address details including your residential postal address, county, sub-county, location, and estate or building name.",
              "Upload scanned copies of the required documents — your national ID or passport (both sides for ID), and a recent passport-size photograph (colour, plain background, max 500 KB).",
              "Review your application details carefully. Correct any errors before submitting.",
              "Submit the application. You will receive an application reference number — save this for tracking.",
              "Wait for 1 to 3 working days. KRA will send your PIN via SMS and email. You can also check the status on iTax.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-semibold text-brand shrink-0 w-5">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <div className="border border-brand/25 bg-brand-muted rounded-lg p-4 text-[0.83rem] mt-4">
            <p className="font-semibold text-ink mb-0.5">Tip</p>
            <p className="text-ink-muted">
              If the iTax portal is slow or unresponsive — which is common during peak hours
              (8 AM to 12 PM) — try applying late in the evening or over the weekend. See our
              <a href="/resources/itax-portal-not-working/" className="text-brand underline underline-offset-2 mx-1">
                iTax troubleshooting guide
              </a>
              if you run into errors.
            </p>
          </div>

          <h3 className="font-display text-[1rem] font-semibold text-ink mt-6 mb-2">Documents needed for online application</h3>
          <ul className="space-y-1.5">
            {[
              "National ID card (both sides) or valid passport",
              "Passport-size colour photograph (digital copy, max 500 KB)",
              "Valid email address",
              "Active Kenyan mobile phone number",
              "For business PIN: certificate of incorporation or business registration certificate (see section below)",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3 flex items-center gap-2">
            <Buildings size={20} className="text-brand" aria-hidden="true" />
            How to Apply at a Huduma Centre
          </h2>
          <p>
            If you do not have reliable internet access or prefer face-to-face assistance, you can
            apply for a KRA PIN at any Huduma Centre in Kenya. Walk in with your original documents,
            and the Huduma staff will process your application on the iTax system on your behalf.
          </p>
          <p className="font-semibold text-ink mt-4">What to bring:</p>
          <ul className="space-y-1.5">
            {[
              "Original national ID card or passport",
              "Two passport-size photographs",
              "KRA PIN application form (available at the centre)",
              "Proof of address if applying for a business PIN (e.g., utility bill, rent agreement)",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            Processing time at Huduma Centres varies by location. Major centres such as Nairobi GPO,
            Mombasa, Kisumu, Nakuru, and Eldoret typically offer same-day service if you arrive
            early. Smaller centres may take 1 to 2 working days to forward your application to KRA.
          </p>
          <p className="mt-3">
            Huduma Centre walk-in service is free — you only pay for photocopies and
            passport photos if you do not have them ready.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3 flex items-center gap-2">
            <DeviceMobile size={20} className="text-brand" aria-hidden="true" />
            KRA PIN Application via Mobile App
          </h2>
          <p>
            KRA offers two mobile options for PIN applications — the KRA M-Service app and the
            USSD code <strong>*572#</strong>. These options work best for individual PIN
            applications and are not recommended for business registrations.
          </p>
          <p className="font-semibold text-ink mt-4">KRA M-Service App:</p>
          <ol className="space-y-2">
            {[
              "Download KRA M-Service from the Google Play Store or Apple App Store.",
              "Open the app and tap \"Register for PIN\".",
              "Enter your ID number, full name, and date of birth.",
              "Provide your email address and mobile number.",
              "Take a selfie using the in-app camera for biometric verification.",
              "Submit your application. You will receive your PIN via SMS within 24 to 72 hours.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-semibold text-brand shrink-0 w-5">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="font-semibold text-ink mt-4">USSD (*572#):</p>
          <ol className="space-y-2">
            {[
              "Dial *572# on your Safaricom, Airtel, or Telkom line.",
              "Select option 1 for PIN registration.",
              "Enter your ID number and follow the prompts.",
              "Provide your email address when asked.",
              "You will receive an SMS confirmation with your KRA PIN within 24 to 48 hours.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-semibold text-brand shrink-0 w-5">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-[0.83rem] text-ink-muted mt-2">
            Note: The USSD method only supports basic PIN applications. If you need a business PIN
            or have a complex tax status, use the online portal or visit a Huduma Centre.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">How to Check Your KRA PIN Status</h2>
          <p>
            After submitting your application, there are several ways to check whether your KRA PIN
            has been issued:
          </p>
          <ul className="space-y-1.5">
            {[
              "iTax Portal: Log into itax.kra.go.ke with your ID number as the username and the temporary password sent to your email. Your KRA PIN will appear on the dashboard.",
              "SMS Confirmation: KRA sends your PIN via SMS to the mobile number you provided. This is usually the fastest notification method.",
              "Huduma Centre: If you applied in person, return to the same Huduma Centre with your application receipt and ask for a status update.",
              "KRA Contact Centre: Call 020-4-999-999 or 0711-099-999 and provide your ID number to check your PIN status.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            Processing times: Online applications take <strong>1 to 3 working days</strong>.
            Huduma Centre applications at major locations can be processed <strong>same day</strong>
            if you arrive before 11 AM. USSD and mobile app applications take
            <strong>24 to 72 hours</strong>.
          </p>
          <p>
            If it has been more than 5 working days and you have not received your PIN, your
            application may have been rejected due to incorrect details or document issues. Log
            into iTax and check for any error messages under your application status.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3 flex items-center gap-2">
            <Users size={20} className="text-brand" aria-hidden="true" />
            How to Get a Business KRA PIN
          </h2>
          <p>
            A business KRA PIN (also called a non-individual PIN) is required for any legal entity
            that carries on business in Kenya — sole proprietorships, partnerships, limited
            companies, and non-governmental organisations (NGOs). The process is similar to the
            individual application, with additional documentation requirements.
          </p>
          <p className="font-semibold text-ink mt-4">Additional documents by business type:</p>
          <ul className="space-y-3">
            {[
              { type: "Sole Proprietorship", docs: "Business registration certificate from the Business Registration Service (BRS), your individual KRA PIN, national ID, and a passport photo." },
              { type: "Partnership", docs: "Partnership deed or agreement, CR12 from the Business Registration Service, IDs and KRA PINs of all partners, and a passport photo of the principal officer." },
              { type: "Limited Company", docs: "Certificate of incorporation, CR12 (showing directors and shareholders), memorandum and articles of association, IDs and KRA PINs of directors, and a passport photo of the principal officer." },
              { type: "NGO / Society", docs: "Certificate of registration, constitution, board resolution appointing the principal officer, IDs and KRA PINs of all officials, and proof of physical address." },
            ].map(({ type, docs }) => (
              <li key={type} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <div><span className="font-semibold text-ink">{type}:</span> {docs}</div>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            You apply for a business PIN through the same iTax portal. Select
            <strong> Non-Individual</strong> during registration and choose your business structure
            from the drop-down menu. The CR12 document is the most common requirement — it lists
            your company directors, shareholders, and registered address.
          </p>
          <p>
            Once your KRA PIN is issued, the next step is{" "}
            <a href="/resources/how-to-register-for-vat-in-kenya/" className="text-brand underline underline-offset-2 hover:text-brand-hover">VAT registration</a>{" "}
            if your annual turnover exceeds KES 5 million or you supply VAT-registered customers.
          </p>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">KRA PIN for Non-Residents</h2>
          <p>
            Non-residents who earn income from Kenya — such as freelance contractors, digital
            service providers, landlords with Kenyan property, or employees of Kenyan companies
            working remotely — must also obtain a KRA PIN.
          </p>
          <p className="font-semibold text-ink mt-4">Requirements for non-residents:</p>
          <ul className="space-y-1.5">
            {[
              "Valid passport (not just a national ID from your home country)",
              "Passport-size colour photograph",
              "Proof of foreign address (utility bill, bank statement, or rental agreement)",
              "Completed KRA PIN application form (Form IT-1 for individuals)",
              "Letter stating the source and nature of your Kenya-sourced income",
              "Appointment of a tax representative in Kenya (this is a legal requirement — your representative must have their own KRA PIN and will handle your KRA correspondence)",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle size={14} weight="fill" className="text-brand shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            Non-resident applications cannot be completed through the USSD or mobile app — you must
            use the iTax portal or visit a Huduma Centre. Processing times may take longer (up to
            7 working days) because KRA must verify your foreign documents.
          </p>
          <p>
            The tax representative requirement is important. Your representative is the person in
            Kenya who KRA will contact for tax matters. This can be an accountant, a lawyer, or
            a trusted business partner. Without a tax representative, your non-resident PIN
            application will not be approved.
          </p>

          <div className="border border-brand/25 bg-brand-muted rounded-lg p-5 mt-8">
            <p className="font-semibold text-ink text-[0.9rem] mb-1">Need help getting your KRA PIN or VAT registration?</p>
            <p className="text-[0.83rem] text-ink-muted mb-3">
              We handle the entire process for KES 5,000 — from PIN application to VAT registration.
              First consultation is free.
            </p>
            <a href="https://wa.me/254721725958?text=I%20need%20help%20with%20KRA%20PIN%20or%20VAT%20registration"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-canvas text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-brand-hover transition-colors">
              Ask Us on WhatsApp <ArrowRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>

          <h2 className="font-display text-[1.2rem] font-semibold text-ink mt-8 mb-3">Related Resources</h2>
          <ul className="space-y-2">
            {[
              ["How to Register for VAT in Kenya", "/resources/how-to-register-for-vat-in-kenya/", "Step-by-step VAT registration guide on iTax"],
              ["KRA iTax Portal Not Working?", "/resources/itax-portal-not-working/", "Common iTax errors and how to fix them"],
              ["eTIMS Onboarding Guide 2026", "/resources/etims-onboarding-guide/", "Step-by-step registration guide for all three eTIMS solution types"],
            ].map(([title, slug, desc]) => (
              <li key={slug}>
                <a href={slug} className="text-brand underline underline-offset-2 hover:text-brand-hover">
                  {title}
                </a>
                <span className="text-ink-muted"> — {desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

              {/* More Guides */}
        <div className="mt-16 pt-12 border-t border-hairline">
          <p className="font-display text-[1.1rem] font-semibold text-ink mb-6">More Guides</p>
          <ArticleGrid currentSlug="how-to-apply-for-kra-pin" />
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
            <a href="/resources/" className="text-[0.82rem] text-ink-muted hover:text-brand transition-colors underline underline-offset-2">
              ← All Resources
            </a>
          </div>
        </div>

      <div className="mt-8">
        <NewsletterSignup />
      </div>
    </div>
  )
}
