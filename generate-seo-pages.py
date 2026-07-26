#!/usr/bin/env python3
"""Programmatic SEO page generator for Smart VAT Kenya.
Generates targeted pages matching how Kenyans search for tax information.
Run: python3 generate-seo-pages.py
"""

import os, json
from datetime import datetime

PAGES_DIR = os.path.join(os.path.dirname(__file__), 'seo-pages')
TEMPLATE = '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<meta name="description" content="{meta_desc}">
<meta name="keywords" content="{keywords}">
<link rel="canonical" href="https://smartvatkenya.com/seo-pages/{slug}.html">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{meta_desc}">
<meta property="og:type" content="article">
<script type="application/ld+json">{schema}</script>
<link rel="stylesheet" href="/css/style.css">
</head>
<body>
<header class="header">
  <div class="container">
    <a href="/" class="logo"><span class="logo-icon">⟁</span> Smart<span>VAT</span> Kenya</a>
    <nav class="nav">
      <a href="/">Home</a>
      <a href="/resources">Resources</a>
      <a href="/services">Services</a>
      <a href="/forms">Forms</a>
      <a href="/tools/vat-review.html">Free Review</a>
    </nav>
  </div>
</header>

<div class="tool-header">
  <div class="container">
    <div class="breadcrumb"><a href="/">Home</a> <span>›</span> <span>{breadcrumb}</span></div>
    <h1>{h1}</h1>
    <p>{subtitle}</p>
  </div>
</div>

<div class="tool-body">
  <div class="container">
    <div class="card">{content}</div>

    <div class="card mt-3">
      <h2>Related Free Tools</h2>
      <div class="grid grid-2 mt-2">{related_tools}</div>
    </div>

    <div class="card mt-3 text-center">
      <h2>Still Have Questions?</h2>
      <p class="text-muted">Our Kenyan tax specialists can help you get it right.</p>
      <a href="https://wa.me/254700000000?text=Hi%20Smart%20VAT%20Kenya%2C%20I%20have%20a%20question%20about%20{slug}" class="btn btn-whatsapp btn-lg mt-2" target="_blank">💬 Ask on WhatsApp</a>
    </div>
  </div>
</div>

<footer class="footer">
  <div class="container">
    <p>Smart VAT Kenya — Helping SMEs navigate KRA compliance. Not affiliated with KRA.</p>
    <p class="mt-1"><a href="/">Home</a> • <a href="/resources">Resources</a> • <a href="/services">Services</a> • <a href="/forms">Free Forms</a> • <a href="/tools/amnesty-checker.html">Amnesty</a> • <a href="/tools/vat-review.html">Free Review</a></p>
  </div>
</footer>
<script src="/js/tools.js"></script>
</body>
</html>'''

RELATED = {
    'amnesty': '<a href="/tools/amnesty-checker.html" class="btn btn-outline btn-sm">Check Amnesty Eligibility →</a>',
    'scorecard': '<a href="/tools/compliance-scorecard.html" class="btn btn-outline btn-sm">Get Compliance Score →</a>',
    'penalty': '<a href="/tools/penalty-calculator.html" class="btn btn-outline btn-sm">Calculate Penalties →</a>',
    'review': '<a href="/tools/vat-review.html" class="btn btn-outline btn-sm">Free VAT Review →</a>',
    'explainer': '<a href="/tools/vat-return-explainer.html" class="btn btn-outline btn-sm">Understand Pre-Filled Return →</a>',
    'troubleshooter': '<a href="/tools/etims-troubleshooter.html" class="btn btn-outline btn-sm">Fix eTIMS Issue →</a>',
    'refund': '<a href="/tools/refund-tracker.html" class="btn btn-outline btn-sm">Track Your Refund →</a>',
    'router': '<a href="/tools/portal-router.html" class="btn btn-outline btn-sm">Find the Right Portal →</a>',
    'ledger': '<a href="/tools/legacy-ledger-guide.html" class="btn btn-outline btn-sm">Reconcile Ledger →</a>',
    'buyer-invoice': '<a href="/tools/buyer-invoicing-guide.html" class="btn btn-outline btn-sm">Buyer Invoice Guide →</a>',
}

PAGES = [
    # VAT Basics — these target the most common Kenyan search queries
    {
        'slug': 'vat-rate-kenya-2026',
        'title': 'VAT Rate in Kenya 2026 — Current KRA VAT Percentage',
        'h1': 'What Is the Current VAT Rate in Kenya?',
        'meta_desc': 'The current VAT rate in Kenya for 2026 is 16% standard rate and 0% for zero-rated supplies. The petroleum 8% rate was removed in July 2023. Learn what applies to your business.',
        'keywords': 'VAT rate Kenya 2026, KRA VAT percentage, current VAT rate Kenya, standard VAT rate Kenya, zero rated supplies Kenya',
        'breadcrumb': 'VAT Rate Kenya 2026',
        'subtitle': 'The standard VAT rate in Kenya is 16%. Zero-rated supplies are 0%. Here is what you need to know for 2026.',
        'content': '<h2>Current KRA VAT Rates (2026)</h2>'
            '<p>Kenya has three VAT categories in 2026:</p>'
            '<div class="checker-grid mt-2">'
            '<div class="checker-item"><span><strong>Standard rate</strong> — most goods and services</span><span><strong>16%</strong></span></div>'
            '<div class="checker-item"><span><strong>Zero rate</strong> — exports, certain agricultural inputs</span><span><strong>0%</strong></span></div>'
            '<div class="checker-item"><span><strong>Exempt supplies</strong> — education, finance, medical</span><span><strong>0%</strong> (no input VAT claim)</span></div>'
            '</div>'
            '<p class="mt-2">The 8% petroleum VAT rate was <strong>deleted effective 1 July 2023</strong> by the Finance Act 2023. Petroleum products now attract the standard 16% rate.</p>'
            '<h3 class="mt-3">Zero-Rated vs Exempt — Key Difference</h3>'
            '<p><strong>Zero-rated</strong> supplies mean you charge 0% VAT but can still claim input VAT on your purchases. This is common for exporters.</p>'
            '<p><strong>Exempt</strong> supplies mean no VAT is charged and you <strong>cannot</strong> claim input VAT. Common examples: education services, financial services, unprocessed agricultural produce.</p>'
            '<div class="mt-3 result-panel result-warning"><strong>⚠️ Common mistake:</strong> Many SMEs accidentally charge VAT on exempt supplies or vice versa. Wrong classification triggers penalties of 10% of the tax due. Use our <a href="/tools/penalty-calculator.html">penalty calculator</a> to estimate exposure.</div>',
        'related': ['penalty', 'review', 'scorecard']
    },
    {
        'slug': 'vat-registration-threshold-kenya',
        'title': 'VAT Registration Threshold Kenya 2026 — KSh 5M or 8M?',
        'h1': 'When Is VAT Registration Mandatory in Kenya?',
        'meta_desc': 'The VAT registration threshold in Kenya is KSh 5 million in annual taxable turnover. Finance Act 2025 proposed a raise to KSh 8 million. Learn who must register, how to do it, and what happens if you don\'t.',
        'keywords': 'VAT registration threshold Kenya, KSh 5 million threshold, when to register for VAT Kenya, mandatory VAT registration Kenya, voluntary VAT registration Kenya',
        'breadcrumb': 'VAT Registration Threshold',
        'subtitle': 'You must register for VAT once your taxable turnover reaches or is expected to reach KSh 5 million (or KSh 8 million per Finance Act 2025) in a 12-month period.',
        'content': '<h2>VAT Registration Threshold in Kenya</h2>'
            '<p>The Kenya Revenue Authority requires VAT registration when a business supplies or expects to supply taxable goods or services worth <strong>KSh 5 million or more</strong> in a year.</p>'
            '<p><strong>Note:</strong> The Finance Act 2025 proposed raising this threshold to <strong>KSh 8 million</strong>, though some sources still cite KSh 5 million as the current figure. Check KRA\'s latest guidance or use our <a href="https://wa.me/254700000000?text=What%20is%20the%20current%20VAT%20threshold%3F">WhatsApp</a> to confirm.</p>'
            '<h3 class="mt-3">What Happens After Registration?</h3>'
            '<ul class="steps">'
            '<li>You charge 16% VAT on standard-rated sales</li>'
            '<li>You must issue eTIMS-compliant invoices for every transaction</li>'
            '<li>Monthly VAT returns are due by the 20th of the following month</li>'
            '<li>You can claim input VAT on eligible business purchases</li>'
            '</ul>'
            '<div class="mt-3 result-panel result-error"><strong>⚠️ Penalty for late registration:</strong> Failing to register on time attracts penalties and backdated tax assessments. Use our <a href="/tools/penalty-calculator.html">penalty calculator</a> to estimate what you might owe.</div>',
        'related': ['penalty', 'scorecard', 'router']
    },
    {
        'slug': 'how-to-register-for-vat-in-kenya',
        'title': 'How to Register for VAT in Kenya — Step-by-Step KRA Guide 2026',
        'h1': 'How to Register for VAT in Kenya on iTax',
        'meta_desc': 'Step-by-step guide to register for VAT in Kenya through KRA iTax. Documents needed, processing time, and what changes after registration. Updated for 2026.',
        'keywords': 'how to register for VAT in Kenya, KRA VAT registration steps, VAT registration iTax Kenya, register for VAT online Kenya, VAT application Kenya',
        'breadcrumb': 'How to Register for VAT',
        'subtitle': 'Registering for VAT in Kenya is done entirely online through KRA iTax. Here is the complete step-by-step process.',
        'content': '<h2>VAT Registration Process on iTax</h2>'
            '<ol class="steps">'
            '<li><strong>Log in</strong> to <a href="https://itax.kra.go.ke" target="_blank">itax.kra.go.ke</a> with your KRA PIN and password</li>'
            '<li>Navigate to <strong>Registration → Add Tax Obligation</strong></li>'
            '<li>Select <strong>Value Added Tax (VAT)</strong> from the list of obligations</li>'
            '<li>Fill in the required business details and declaration</li>'
            '<li>Submit the application — KRA typically processes within 1-10 working days</li>'
            '<li>Once approved, log in to <a href="https://etims.kra.go.ke" target="_blank">eTIMS</a> and onboard on the system</li>'
            '</ol>'
            '<h3 class="mt-3">Documents You Need</h3>'
            '<ul><li>KRA PIN certificate</li><li>Business registration documents (Certificate of Incorporation or Business Registration Certificate)</li><li>Business permit</li><li>Tax Compliance Certificate (if applicable)</li></ul>'
            '<p class="mt-2">Once registered, you must file monthly VAT returns by the <strong>20th of each month</strong>, even if you had no sales (nil return).</p>'
            '<div class="mt-3 result-panel result-info"><strong>💡 Need help?</strong> Our team handles VAT registration and eTIMS onboarding for SMEs. <a href="https://wa.me/254700000000?text=Help%20me%20register%20for%20VAT">Chat with us on WhatsApp →</a></div>',
        'related': ['router', 'scorecard', 'review']
    },
    {
        'slug': 'kra-vat-return-due-date',
        'title': 'KRA VAT Return Due Date — When Is VAT Filing Due in Kenya?',
        'h1': 'When Is the KRA VAT Return Deadline?',
        'meta_desc': 'KRA VAT returns and payment are due on or before the 20th day of the following month. Late filing attracts a 5% penalty. Set reminders with our free tools.',
        'keywords': 'KRA VAT return due date, VAT filing deadline Kenya, when to file VAT return Kenya, VAT due date 20th, KRA VAT deadline 2026',
        'breadcrumb': 'VAT Return Due Date',
        'subtitle': 'KRA VAT returns must be filed by the 20th of every month. Here is everything you need to know about deadlines, penalties, and reminders.',
        'content': '<h2>KRA VAT Filing Schedule</h2>'
            '<div class="checker-grid mt-2">'
            '<div class="checker-item"><span>VAT return due date</span><span><strong>20th of each month</strong></span></div>'
            '<div class="checker-item"><span>Payment due date</span><span><strong>Same day (20th)</strong></span></div>'
            '<div class="checker-item"><span>Late filing penalty</span><span><strong>5%</strong> of tax due or KSh 10,000 (whichever is higher)</span></div>'
            '<div class="checker-item"><span>Late payment interest</span><span><strong>1% per month</strong></span></div>'
            '</div>'
            '<p class="mt-2">Missing the deadline triggers a late filing penalty of <strong>5% of the tax due or KSh 10,000</strong>, whichever is higher, plus interest of 1% per month on unpaid tax.</p>'
            '<p><strong>Nil returns are still required.</strong> If you had no sales in a month, you must still file a nil return or it counts as non-compliance.</p>'
            '<div class="mt-3 result-panel result-warning"><strong>⚠️ Pro tip:</strong> Set a recurring reminder for the 18th of each month. This gives you 2 days to reconcile before the deadline. Use our <a href="/tools/penalty-calculator.html">penalty calculator</a> to see what late filing could cost you.</div>',
        'related': ['penalty', 'scorecard', 'troubleshooter']
    },
    {
        'slug': 'kra-late-filing-penalty',
        'title': 'KRA Late Filing Penalty — How Much Is the Fine for Late KRA Returns?',
        'h1': 'KRA Late Filing Penalty: What You\'ll Pay',
        'meta_desc': 'KRA late filing penalty is 5% of tax due or KSh 10,000 (whichever is higher), plus 1% monthly interest. Use our free calculator to estimate your exact penalty.',
        'keywords': 'KRA late filing penalty, KRA late return fine, penalty for late filing KRA, KRA late submission penalty, how much is KRA late filing penalty',
        'breadcrumb': 'Late Filing Penalty',
        'subtitle': 'Late filing of KRA returns attracts a penalty of 5% of tax due or KSh 10,000 (whichever is higher), plus interest of 1% per month.',
        'content': '<h2>KRA Late Filing Penalty Breakdown</h2>'
            '<div class="checker-grid mt-2">'
            '<div class="checker-item"><span>Late filing (business VAT)</span><span><strong>5%</strong> of tax due or KSh 10,000</span></div>'
            '<div class="checker-item"><span>Late payment penalty</span><span><strong>5% per month</strong> (capped at 25%)</span></div>'
            '<div class="checker-item"><span>Interest on unpaid tax</span><span><strong>1% per month</strong></span></div>'
            '</div>'
            '<p class="mt-2">These penalties compound quickly. A missed VAT return of KSh 500,000 can grow to over KSh 100,000 in penalties within 6 months.</p>'
            '<p><strong>Good news:</strong> The KRA 2026 Tax Amnesty waives 100% of penalties and interest on pre-2026 debt if you pay the principal by December 2026.</p>'
            '<div class="mt-3 flex gap-2 flex-wrap">'
            '<a href="/tools/penalty-calculator.html" class="btn btn-primary">Calculate My Penalty →</a>'
            '<a href="/tools/amnesty-checker.html" class="btn btn-outline">Check Amnesty Eligibility →</a>'
            '</div>',
        'related': ['penalty', 'amnesty']
    },
    {
        'slug': 'what-is-etims-kenya',
        'title': 'What Is eTIMS Kenya? — KRA Electronic Tax Invoice System Explained',
        'h1': 'What Is eTIMS? KRA Electronic Tax Invoice Management System',
        'meta_desc': 'eTIMS is KRA\'s mandatory electronic tax invoicing system. Every business in Kenya must use eTIMS to generate and transmit invoices to KRA in real time. Free to use.',
        'keywords': 'what is eTIMS Kenya, KRA eTIMS explained, electronic tax invoice Kenya, eTIMS system Kenya, eTIMS meaning, eTIMS requirements',
        'breadcrumb': 'What Is eTIMS?',
        'subtitle': 'eTIMS (Electronic Tax Invoice Management System) is KRA\'s mandatory invoicing platform. Every Kenyan business must use it — free of charge.',
        'content': '<h2>eTIMS Explained</h2>'
            '<p>eTIMS (Electronic Tax Invoice Management System) is KRA\'s platform that requires all businesses to generate and transmit tax invoices to KRA in real time.</p>'
            '<h3 class="mt-3">Key Facts</h3>'
            '<ul class="steps">'
            '<li><strong>Mandatory</strong> for every person carrying on business in Kenya since January 2024</li>'
            '<li><strong>Free to use</strong> — KRA provides the software at no cost</li>'
            '<li><strong>Real-time transmission</strong> — KRA sees each invoice as it is issued</li>'
            '<li><strong>Covers all businesses</strong> — even non-VAT registered businesses must use eTIMS</li>'
            '</ul>'
            '<h3 class="mt-3">eTIMS Solutions Available</h3>'
            '<div class="checker-grid mt-2">'
            '<div class="checker-item"><span>eTIMS Lite (Web)</span><span>For small, non-VAT businesses</span></div>'
            '<div class="checker-item"><span>eTIMS Online</span><span>For VAT businesses with low volumes</span></div>'
            '<div class="checker-item"><span>eTIMS Client (Desktop)</span><span>For retail/POS environments</span></div>'
            '<div class="checker-item"><span>eTIMS Mobile App</span><span>Android app for small traders</span></div>'
            '</div>'
            '<div class="mt-3 result-panel result-error"><strong>⚠️ Non-compliance penalty:</strong> Failure to use eTIMS can attract a penalty of up to KSh 1,000,000. <a href="/tools/penalty-calculator.html">Calculate your exposure →</a></div>',
        'related': ['penalty', 'scorecard', 'troubleshooter']
    },
    {
        'slug': 'kra-tax-amnesty-2026-deadline',
        'title': 'KRA Tax Amnesty 2026 Deadline — 31 December 2026 | Penalty Waiver',
        'h1': 'KRA Tax Amnesty 2026 — Sh140 Billion Penalty Waiver',
        'meta_desc': 'The KRA tax amnesty 2026 waives 100% of penalties and interest on pre-2026 tax debt. Deadline: 31 December 2026. Over 3 million taxpayers already benefited. Check eligibility free.',
        'keywords': 'KRA tax amnesty 2026 deadline, KRA penalty waiver 2026, Sh140 billion waiver Kenya, KRA amnesty December 2026, section 37E tax amnesty',
        'breadcrumb': 'KRA Tax Amnesty 2026',
        'subtitle': 'The KRA 2026 tax amnesty waives 100% of penalties and interest on pre-2026 tax debt. Over KSh 140 billion already waived for 3 million+ taxpayers.',
        'content': '<h2>KRA Tax Amnesty 2026 — Everything You Need to Know</h2>'
            '<div class="result-panel result-success">'
            '<h3>✅ KSh 140 Billion Already Waived</h3>'
            '<p>Over 3 million taxpayers have benefited from the amnesty programme since it began in 2024. The programme has been extended through 2026.</p>'
            '</div>'
            '<h3 class="mt-3">How It Works</h3>'
            '<p>Under <strong>Section 37E of the Tax Procedures Act</strong>, taxpayers who pay the principal tax amount by <strong>31 December 2026</strong> receive an automatic 100% waiver of all associated penalties and interest.</p>'
            '<h3 class="mt-3">Taxes Covered</h3>'
            '<p>VAT, PAYE, Corporation Tax, Withholding Tax, Capital Gains Tax, Excise Duty, Rental Income Tax, Turnover Tax, Digital Service Tax, and more.</p>'
            '<h3 class="mt-3">What Is NOT Covered</h3>'
            '<ul><li>Ongoing fraud investigations</li><li>Debts under criminal proceedings</li><li>Debts subject to a court ruling</li></ul>'
            '<div class="mt-3"><a href="/tools/amnesty-checker.html" class="btn btn-primary btn-lg">Check Your Eligibility Now →</a></div>',
        'related': ['amnesty', 'penalty', 'ledger']
    },
    {
        'slug': 'how-to-check-kra-tax-compliance-certificate-online',
        'title': 'How to Check KRA Tax Compliance Certificate (TCC) Online — Free Tool',
        'h1': 'How to Check Your KRA Tax Compliance Certificate Online',
        'meta_desc': 'Check if your KRA Tax Compliance Certificate is valid using the free online TCC checker on iTax. Learn how to apply for a new TCC and what to do if it\'s expired.',
        'keywords': 'check KRA TCC online, verify tax compliance certificate Kenya, KRA TCC checker, how to check tax compliance certificate, TCC verification Kenya',
        'breadcrumb': 'Check KRA TCC Online',
        'subtitle': 'Verify your KRA Tax Compliance Certificate (TCC) online or check if a supplier\'s TCC is valid.',
        'content': '<h2>How to Verify a KRA TCC</h2>'
            '<ol class="steps">'
            '<li>Go to the <a href="http://itax.kra.go.ke/KRA-Portal/complianceMonitoring.htm?actionCode=validateTCC" target="_blank">KRA TCC Checker</a> page</li>'
            '<li>Enter the <strong>TCC Serial Number</strong> and the <strong>KRA PIN</strong> of the certificate holder</li>'
            '<li>Click "Validate" — the system will confirm if the certificate is valid and within its validity period</li>'
            '</ol>'
            '<h3 class="mt-3">How to Apply for a TCC</h3>'
            '<p>Log in to iTax → Certificates → Apply for Tax Compliance Certificate. Ensure all returns are filed and taxes paid. The TCC is typically issued within 24-48 hours and is valid for 12 months.</p>'
            '<div class="mt-3 result-panel result-warning"><strong>⚠️ Why you need a valid TCC:</strong> Required for tenders, immigration applications, bank facilities, and eVisa renewals. An expired TCC can block your business from government contracts.</div>',
        'related': ['scorecard', 'router']
    },
    {
        'slug': 'etims-invoice-check-verification',
        'title': 'eTIMS Invoice Check — How to Verify a KRA Tax Invoice in Kenya',
        'h1': 'How to Verify an eTIMS Invoice — QR Code & Control Unit Check',
        'meta_desc': 'Verify if an eTIMS invoice is valid and transmitted to KRA. Check via QR code scan or control unit number on iTax. Never claim invalid input VAT.',
        'keywords': 'eTIMS invoice check, verify eTIMS invoice Kenya, KRA invoice checker, eTIMS QR code verification, control unit number check, validate eTIMS invoice',
        'breadcrumb': 'eTIMS Invoice Check',
        'subtitle': 'Verify supplier eTIMS invoices before claiming input VAT. Scan the QR code or enter the control unit number on iTax.',
        'content': '<h2>How to Verify an eTIMS Invoice</h2>'
            '<p>Before claiming input VAT, you must verify that the supplier\'s invoice was properly transmitted to KRA through eTIMS.</p>'
            '<h3 class="mt-3">Method 1: Scan the QR Code</h3>'
            '<p>Every eTIMS invoice has a QR code. Scan it with your phone to instantly verify the invoice details match what the supplier gave you.</p>'
            '<h3 class="mt-3">Method 2: Control Unit Check on iTax</h3>'
            '<ol class="steps">'
            '<li>Go to the iTax login page at <a href="https://itax.kra.go.ke" target="_blank">itax.kra.go.ke</a></li>'
            '<li>Find the <strong>Invoice Number Checker</strong> on the homepage (no login needed)</li>'
            '<li>Enter the <strong>Control Unit Serial Number</strong> and <strong>Invoice Number</strong></li>'
            '<li>The system confirms if the invoice is valid and transmitted to KRA</li>'
            '</ol>'
            '<div class="mt-3 result-panel result-error"><strong>⚠️ If an invoice is not in the system:</strong> Do not claim that input VAT. KRA will reject it. Contact the supplier to re-issue a compliant eTIMS invoice.</div>',
        'related': ['troubleshooter', 'explainer', 'scorecard']
    },
    {
        'slug': 'kra-penalty-for-not-using-etims',
        'title': 'KRA Penalty for Not Using eTIMS — KSh 1,000,000 Fine',
        'h1': 'KRA Penalty for Not Using eTIMS: Up to KSh 1,000,000',
        'meta_desc': 'The penalty for failing to use eTIMS in Kenya is up to KSh 1,000,000. Since January 2024, every business must issue eTIMS invoices. Learn how to comply.',
        'keywords': 'KRA penalty for not using eTIMS, eTIMS non-compliance fine, KSh 1 million penalty eTIMS, eTIMS mandatory penalty, not using eTIMS Kenya',
        'breadcrumb': 'eTIMS Non-Compliance Penalty',
        'subtitle': 'Failure to use eTIMS for invoicing carries a penalty of up to KSh 1,000,000. Every business in Kenya is required to use eTIMS since January 2024.',
        'content': '<h2>eTIMS Non-Compliance Consequences</h2>'
            '<div class="checker-grid mt-2">'
            '<div class="checker-item"><span>Penalty for non-use of eTIMS</span><span><strong>Up to KSh 1,000,000</strong></span></div>'
            '<div class="checker-item"><span>Expenses without eTIMS invoices</span><span><strong>Disallowed at audit</strong></span></div>'
            '<div class="checker-item"><span>Input VAT without eTIMS</span><span><strong>Cannot be claimed</strong></span></div>'
            '</div>'
            '<p class="mt-2">Beyond the direct penalty, businesses not using eTIMS face:</p>'
            '<ul class="steps">'
            '<li>All business expenses may be <strong>disallowed</strong> during a KRA audit</li>'
            '<li>Input VAT claims on non-eTIMS invoices are <strong>automatically rejected</strong></li>'
            '<li>Increased risk of <strong>full audit and backdated assessments</strong></li>'
            '</ul>'
            '<div class="mt-3"><a href="/tools/etims-troubleshooter.html" class="btn btn-primary">Get eTIMS Help →</a> <a href="/tools/penalty-calculator.html" class="btn btn-outline">Calculate Penalty →</a></div>',
        'related': ['penalty', 'troubleshooter', 'scorecard']
    },
    {
        'slug': 'how-to-file-nil-vat-return-kra',
        'title': 'How to File a Nil VAT Return on KRA iTax — Step by Step',
        'h1': 'How to File a Nil VAT Return on KRA iTax',
        'meta_desc': 'Step-by-step guide to filing a nil VAT return on KRA iTax. Even if you had no sales, you must file a nil return every month or face penalties.',
        'keywords': 'how to file nil VAT return KRA, nil VAT return Kenya, KRA nil return filing, zero sales VAT return Kenya, file nil return iTax',
        'breadcrumb': 'Nil VAT Return Filing',
        'subtitle': 'Even with zero sales, you must file a nil VAT return every month. Here is how to do it on iTax.',
        'content': '<h2>How to File a Nil VAT Return</h2>'
            '<ol class="steps">'
            '<li>Log in to <a href="https://itax.kra.go.ke" target="_blank">itax.kra.go.ke</a></li>'
            '<li>Go to <strong>Returns → File Return</strong></li>'
            '<li>Select <strong>VAT Return</strong> and the relevant period</li>'
            '<li>Enter <strong>0</strong> (zero) in all taxable fields</li>'
            '<li>Review the pre-filled data — if KRA shows any eTIMS invoices, you may not be nil</li>'
            '<li>Submit the return and save the acknowledgement receipt</li>'
            '</ol>'
            '<div class="mt-3 result-panel result-warning"><strong>⚠️ Important:</strong> Missing a nil return filing counts as non-compliance and attracts the same penalties as a late return (5% or KSh 10,000, whichever is higher).</div>',
        'related': ['router', 'explainer', 'penalty']
    },
    {
        'slug': 'kra-input-vat-claim-requirements',
        'title': 'KRA Input VAT Claim Requirements — What You Need to Claim VAT Back',
        'h1': 'KRA Input VAT Claim Requirements in Kenya',
        'meta_desc': 'To claim input VAT in Kenya, you need a valid eTIMS invoice in your name. Learn the full requirements, restrictions, and common pitfalls that cause claims to be rejected.',
        'keywords': 'input VAT claim Kenya, KRA input VAT requirements, how to claim input VAT Kenya, eTIMS invoice input VAT, VAT input tax Kenya',
        'breadcrumb': 'Input VAT Claim Requirements',
        'subtitle': 'To claim input VAT in Kenya, you need a valid eTIMS-compliant invoice in your business name. Here is what KRA requires.',
        'content': '<h2>Input VAT Requirements</h2>'
            '<ul class="steps">'
            '<li><strong>Valid eTIMS invoice</strong> — the invoice must be transmitted to KRA through eTIMS with a valid control unit number and QR code</li>'
            '<li><strong>In your business name</strong> — the invoice must show your KRA PIN and registered business name</li>'
            '<li><strong>Wholly for business use</strong> — the expense must be exclusively for business purposes</li>'
            '<li><strong>Within the correct period</strong> — claim input VAT in the period the invoice was issued</li>'
            '</ul>'
            '<h3 class="mt-3">What You Cannot Claim</h3>'
            '<ul><li>Input VAT on exempt supplies (education, finance, medical)</li>'
            '<li>Input VAT without a valid eTIMS invoice</li>'
            '<li>Input VAT on personal or mixed-use expenses</li>'
            '<li>Input VAT on invoices not in your business name or PIN</li></ul>'
            '<div class="mt-3 result-panel result-info"><strong>💡 Tip:</strong> Many SMEs miss claiming valid input VAT because they don\'t verify supplier invoices. Use the <a href="/tools/etims-troubleshooter.html">eTIMS invoice checker</a> before filing.</div>',
        'related': ['explainer', 'troubleshooter', 'scorecard']
    },
    {
        'slug': 'kra-vat-refund-how-long',
        'title': 'How Long Does KRA VAT Refund Take? — Timeline & Escalation Guide',
        'h1': 'How Long Does a KRA VAT Refund Take?',
        'meta_desc': 'KRA VAT refunds typically take 90 days. If your refund is delayed beyond this, learn how to escalate through iTax, KRA complaints, and formal channels.',
        'keywords': 'how long does KRA VAT refund take, KRA VAT refund timeline, VAT refund delay Kenya, KRA refund processing time, how to escalate KRA refund',
        'breadcrumb': 'KRA VAT Refund Timeline',
        'subtitle': 'KRA aims to process VAT refunds within 90 days. Here is what to expect at each stage and how to escalate if delayed.',
        'content': '<h2>KRA VAT Refund Timeline</h2>'
            '<div class="checker-grid mt-2">'
            '<div class="checker-item"><span>0-90 days</span><span class="status"><span class="status-dot dot-ok"></span> Normal processing — wait</span></div>'
            '<div class="checker-item"><span>90-180 days</span><span class="status"><span class="status-dot dot-warn"></span> Escalate via iTax complaint</span></div>'
            '<div class="checker-item"><span>180+ days</span><span class="status"><span class="status-dot dot-err"></span> Formal CIC complaint + contact</span></div>'
            '</div>'
            '<h3 class="mt-3">How to Escalate a Delayed Refund</h3>'
            '<ol class="steps">'
            '<li>File a complaint through iTax → Complaints → Refund Delay</li>'
            '<li>Visit your nearest KRA Tax Service Office with the PRN and return acknowledgement</li>'
            '<li>Contact KRA Complaints & Information Centre: cic@kra.go.ke or 020 4 999 999</li>'
            '</ol>'
            '<div class="mt-3"><a href="/tools/refund-tracker.html" class="btn btn-primary">Track My Refund →</a></div>',
        'related': ['refund', 'troubleshooter']
    },
    {
        'slug': 'turnover-tax-vs-vat-kenya',
        'title': 'Turnover Tax vs VAT Kenya — Which One Applies to Your Business?',
        'h1': 'Turnover Tax vs VAT — Which Tax Regime for Your Business?',
        'meta_desc': 'Turnover Tax (TOT) applies to businesses with turnover under KSh 5 million. VAT applies above that threshold. Some businesses must register for both. Learn the difference.',
        'keywords': 'turnover tax vs VAT Kenya, TOT vs VAT, which tax regime Kenya, KRA turnover tax, difference between TOT and VAT Kenya',
        'breadcrumb': 'Turnover Tax vs VAT',
        'subtitle': 'Turnover Tax (TOT) is for small businesses. VAT is for larger ones. But the lines blur — here is what you need to know.',
        'content': '<h2>Turnover Tax vs VAT Comparison</h2>'
            '<div class="checker-grid mt-2">'
            '<div class="checker-item"><span><strong>Turnover Tax (TOT)</strong></span><span>Turnover under KSh 5M</span><span><strong>1%-3%</strong> of gross turnover</span></div>'
            '<div class="checker-item"><span><strong>VAT</strong></span><span>Turnover over KSh 5M</span><span><strong>16%</strong> on taxable sales</span></div>'
            '</div>'
            '<p class="mt-2"><strong>Important:</strong> A TOT-registered taxpayer who deals in vatable supplies and reaches KSh 5 million must also register for VAT. You can be on both TOT and VAT.</p>'
            '<p>Unlike VAT, TOT does not allow you to claim input tax. TOT is calculated on gross turnover (not profit).</p>'
            '<div class="mt-3"><a href="/tools/scorecard.html" class="btn btn-primary">Check Your Compliance →</a></div>',
        'related': ['scorecard', 'router']
    },
    # ==== New pages: expanded Kenyan tax queries ====
    {
        'slug': 'how-to-file-vat-return-on-itax',
        'title': 'How to File VAT Return on KRA iTax — Step-by-Step Guide 2026',
        'h1': 'How to File a VAT Return on KRA iTax',
        'meta_desc': 'Step-by-step guide to filing VAT returns on KRA iTax. Log in, select VAT return, fill in eTIMS data, and submit by the 20th. Includes nil return and amendment instructions.',
        'keywords': 'how to file VAT return on iTax, KRA VAT return filing steps, file VAT return online Kenya, iTax VAT return guide, submit VAT return Kenya',
        'breadcrumb': 'How to File VAT Return on iTax',
        'subtitle': 'Filing your monthly VAT return on KRA iTax takes 10-15 minutes. Here is exactly how to do it.',
        'content': '<h2>Step-by-Step: File VAT Return on iTax</h2>'
            '<ol class="steps">'
            '<li><strong>Log in</strong> to <a href="https://itax.kra.go.ke" target="_blank">itax.kra.go.ke</a> with your KRA PIN and password</li>'
            '<li>Go to <strong>Returns → File Return</strong> and select <strong>VAT Return</strong></li>'
            '<li>Select the <strong>tax period</strong> (month and year) you are filing for</li>'
            '<li>Review the <strong>pre-filled data</strong> from eTIMS — check output VAT, input VAT, and imports</li>'
            '<li>Fill in or adjust any missing fields — add manual entries if needed</li>'
            '<li>Enter the <strong>amount payable or refund claimed</strong></li>'
            '<li>Submit and <strong>download the acknowledgement receipt</strong> (keep this for your records)</li>'
            '</ol>'
            '<div class="mt-3 result-panel result-info"><strong>💡 Pro tip:</strong> Always file by the 20th to avoid late penalties. Use our <a href="/tools/vat-return-explainer.html">pre-filled return explainer</a> to understand each line before you submit.</div>',
        'related': ['explainer', 'router', 'penalty']
    },
    {
        'slug': 'etims-invoice-requirements-kenya',
        'title': 'eTIMS Invoice Requirements Kenya — What Makes a Valid KRA Invoice?',
        'h1': 'eTIMS Invoice Requirements in Kenya',
        'meta_desc': 'A valid eTIMS invoice must include KRA PIN, QR code, control unit number, and specific fields. Learn the full requirements and how to verify supplier invoices.',
        'keywords': 'eTIMS invoice requirements Kenya, valid eTIMS invoice, KRA invoice requirements, eTIMS QR code requirements, control unit number invoice',
        'breadcrumb': 'eTIMS Invoice Requirements',
        'subtitle': 'Every eTIMS invoice must include specific fields to be valid for KRA compliance and input VAT claims.',
        'content': '<h2>What Makes a Valid eTIMS Invoice?</h2>'
            '<div class="checker-grid mt-2">'
            '<div class="checker-item"><span>KRA PIN of supplier and buyer</span><span class="status"><span class="status-dot dot-ok"></span> Required</span></div>'
            '<div class="checker-item"><span>Control Unit Serial Number</span><span class="status"><span class="status-dot dot-ok"></span> Required</span></div>'
            '<div class="checker-item"><span>QR Code</span><span class="status"><span class="status-dot dot-ok"></span> Required</span></div>'
            '<div class="checker-item"><span>Invoice number (unique per CU)</span><span class="status"><span class="status-dot dot-ok"></span> Required</span></div>'
            '<div class="checker-item"><span>Date and time of issue</span><span class="status"><span class="status-dot dot-ok"></span> Required</span></div>'
            '<div class="checker-item"><span>Description of goods/services</span><span class="status"><span class="status-dot dot-ok"></span> Required</span></div>'
            '<div class="checker-item"><span>VAT amount and taxable value</span><span class="status"><span class="status-dot dot-ok"></span> Required</span></div>'
            '</div>'
            '<p class="mt-2">An invoice missing any of these fields is <strong>not compliant</strong> and cannot be used to claim input VAT. Always verify supplier invoices using the <a href="https://itax.kra.go.ke" target="_blank">iTax Invoice Checker</a>.</p>'
            '<div class="mt-3"><a href="/tools/buyer-invoicing-guide.html" class="btn btn-primary">Guide to Requesting Invoices →</a></div>',
        'related': ['buyer-invoice', 'explainer', 'troubleshooter']
    },
    {
        'slug': 'vat-exempt-supplies-kenya-list',
        'title': 'VAT Exempt Supplies Kenya — Complete List of Exempt Goods and Services',
        'h1': 'VAT Exempt Supplies in Kenya — Full List',
        'meta_desc': 'Complete list of VAT-exempt supplies in Kenya including education, financial services, medical, unprocessed food, and agricultural inputs. No VAT charged, no input VAT claimable.',
        'keywords': 'VAT exempt supplies Kenya list, exempt goods and services Kenya, VAT exemption Kenya, zero rated vs exempt Kenya, what is exempt from VAT Kenya',
        'breadcrumb': 'VAT Exempt Supplies',
        'subtitle': 'VAT-exempt supplies in Kenya include education, financial services, medical care, and unprocessed agricultural produce.',
        'content': '<h2>What Are VAT Exempt Supplies?</h2>'
            '<p>Exempt supplies are goods and services that do not attract VAT. The supplier does not charge VAT, and <strong>cannot claim input VAT</strong> on related purchases.</p>'
            '<h3 class="mt-3">Common Exempt Supplies</h3>'
            '<div class="checker-grid mt-2">'
            '<div class="checker-item"><span>Educational services</span><span class="status"><span class="status-dot dot-ok"></span> Exempt</span></div>'
            '<div class="checker-item"><span>Financial and insurance services</span><span class="status"><span class="status-dot dot-ok"></span> Exempt</span></div>'
            '<div class="checker-item"><span>Medical, dental, and hospital services</span><span class="status"><span class="status-dot dot-ok"></span> Exempt</span></div>'
            '<div class="checker-item"><span>Unprocessed agricultural produce</span><span class="status"><span class="status-dot dot-ok"></span> Exempt</span></div>'
            '<div class="checker-item"><span>Passenger transportation (road/rail)</span><span class="status"><span class="status-dot dot-ok"></span> Exempt</span></div>'
            '<div class="checker-item"><span>Rent of residential property</span><span class="status"><span class="status-dot dot-ok"></span> Exempt</span></div>'
            '</div>'
            '<div class="mt-3 result-panel result-warning"><strong>⚠️ Key distinction:</strong> Exempt (no VAT, no input claim) is different from <strong>zero-rated</strong> (0% VAT, can claim input). Charging VAT on an exempt supply can trigger penalties for over-collection. Use our <a href="/tools/penalty-calculator.html">penalty calculator</a> to see what that costs.</div>',
        'related': ['penalty', 'explainer', 'scorecard']
    },
    {
        'slug': 'kra-audit-process-kenya',
        'title': 'KRA Audit Process Kenya — What to Expect and How to Prepare',
        'h1': 'The KRA Audit Process in Kenya — Complete Guide',
        'meta_desc': 'What happens during a KRA tax audit? Learn the stages: notification, document review, field visit, findings, and assessment. How to prepare and what to do if selected.',
        'keywords': 'KRA audit process Kenya, KRA tax audit, what happens during KRA audit, KRA audit stages, how to prepare for KRA audit, KRA compliance check',
        'breadcrumb': 'KRA Audit Process',
        'subtitle': 'A KRA tax audit can be triggered by inconsistencies in returns, eTIMS mismatches, or random selection. Here is what to expect and how to respond.',
        'content': '<h2>KRA Audit Stages</h2>'
            '<ol class="steps">'
            '<li><strong>Notification</strong> — KRA notifies you in writing of the audit scope and period</li>'
            '<li><strong>Document request</strong> — KRA asks for books of accounts, invoices, bank statements, and contracts</li>'
            '<li><strong>Field visit or desk review</strong> — KRA officers visit your premises or review documents remotely</li>'
            '<li><strong>Findings and provisional assessment</strong> — KRA issues a preliminary report with proposed adjustments</li>'
            '<li><strong>Objection or appeal period</strong> — You have 30 days to object if you disagree</li>'
            '<li><strong>Final assessment and collection</strong> — KRA issues the final tax demand</li>'
            '</ol>'
            '<div class="mt-3 result-panel result-warning"><strong>⚠️ Proactive compliance is the best defence.</strong> Use our <a href="/tools/compliance-scorecard.html">Compliance Scorecard</a> to identify gaps before KRA does. If you already received an audit notice, <a href="https://wa.me/254700000000?text=I%20have%20received%20a%20KRA%20audit%20notice%20and%20need%20help">contact us on WhatsApp</a>.</div>',
        'related': ['scorecard', 'ledger', 'troubleshooter']
    },
    {
        'slug': 'how-to-object-to-kra-assessment',
        'title': 'How to Object to a KRA Assessment — 30-Day Appeal Guide',
        'h1': 'How to Object to a KRA Tax Assessment',
        'meta_desc': 'You have 30 days to object to a KRA assessment. Learn the step-by-step process, what to include in your objection, and when to escalate to the TAT.',
        'keywords': 'object to KRA assessment, KRA objection process, how to appeal KRA tax demand, KRA notice of assessment objection, 30 day objection KRA',
        'breadcrumb': 'Object to KRA Assessment',
        'subtitle': 'Disagree with a KRA assessment? You have 30 days to file a formal objection. Here is exactly how.',
        'content': '<h2>How to Object to a KRA Assessment</h2>'
            '<ol class="steps">'
            '<li><strong>Act fast</strong> — you have <strong>30 days</strong> from the date of the assessment notice to object</li>'
            '<li><strong>Log in to iTax</strong> → Objections → File Objection</li>'
            '<li>Specify the <strong>grounds of objection</strong> — clearly state why you believe the assessment is wrong</li>'
            '<li>Attach <strong>supporting documents</strong> — eTIMS invoices, contracts, bank statements, and any evidence</li>'
            '<li>Pay <strong>20% of the disputed tax</strong> (or apply for waiver of this requirement under hardship provisions)</li>'
            '<li>Submit and <strong>save the acknowledgement</strong></li>'
            '</ol>'
            '<div class="mt-3 result-panel result-warning"><strong>⚠️ Missing the 30-day window:</strong> If you miss the deadline, you lose the right to object and KRA can proceed with collection. Contact us immediately if you are close to the deadline.</div>'
            '<div class="mt-3"><a href="https://wa.me/254700000000?text=I%20need%20help%20objecting%20to%20a%20KRA%20assessment" class="btn btn-whatsapp">💬 Get Help With Your Objection</a></div>',
        'related': ['ledger', 'scorecard', 'router']
    },
    {
        'slug': 'voluntary-vat-registration-kenya',
        'title': 'Voluntary VAT Registration Kenya — Should You Register Below KSh 5M?',
        'h1': 'Voluntary VAT Registration in Kenya',
        'meta_desc': 'You can voluntarily register for VAT in Kenya even if your turnover is below KSh 5 million. Benefits include input VAT recovery and tendering for contracts that require VAT registration.',
        'keywords': 'voluntary VAT registration Kenya, register for VAT below threshold, optional VAT registration Kenya, voluntary KRA registration, VAT for small business Kenya',
        'breadcrumb': 'Voluntary VAT Registration',
        'subtitle': 'Even if your turnover is below KSh 5 million, you can voluntarily register for VAT. Here is why you might want to — or avoid it.',
        'content': '<h2>Should You Voluntarily Register for VAT?</h2>'
            '<h3>Pros of Voluntary Registration</h3>'
            '<ul class="steps">'
            '<li><strong>Claim input VAT</strong> — recover VAT on business purchases (up to KSh 5M in refunds annually)</li>'
            '<li><strong>Win tenders</strong> — many corporate and government tenders require VAT registration</li>'
            '<li><strong>Supplier credibility</strong> — some suppliers prefer dealing with VAT-registered customers</li>'
            '</ul>'
            '<h3 class="mt-3">Cons</h3>'
            '<ul class="steps">'
            '<li><strong>Monthly filing</strong> — you must file VAT returns every month, even with nil sales</li>'
            '<li><strong>eTIMS compliance</strong> — must issue eTIMS invoices for every transaction</li>'
            '<li><strong>Charging VAT</strong> — your customers must pay 16% more (unless they are also VAT-registered)</li>'
            '</ul>'
            '<p class="mt-2">You can apply via iTax → Registration → Add Tax Obligation → VAT. Processing takes 1-10 working days.</p>'
            '<div class="mt-3"><a href="/tools/compliance-scorecard.html" class="btn btn-primary">Check If You Are Ready →</a></div>',
        'related': ['scorecard', 'router', 'explainer']
    },
    {
        'slug': 'kra-payment-plan-application',
        'title': 'KRA Payment Plan — How to Apply for Instalment Payment Arrangement',
        'h1': 'How to Apply for a KRA Payment Plan (Instalment Arrangement)',
        'meta_desc': 'KRA allows taxpayers to pay tax debt in instalments of up to 18 months. Learn how to apply, eligibility criteria, and what happens if you miss a payment.',
        'keywords': 'KRA payment plan, KRA instalment payment, pay KRA in instalments, KRA debt payment arrangement, KRA instalment plan application',
        'breadcrumb': 'KRA Payment Plan',
        'subtitle': 'If you cannot pay your KRA tax debt in one lump sum, you can apply for an instalment payment plan of up to 18 months.',
        'content': '<h2>KRA Payment Plan (Instalment Arrangement)</h2>'
            '<ol class="steps">'
            '<li>Log in to <strong>iTax → Debt & Enforcement → Apply for Instalment Payment</strong></li>'
            '<li>Provide details of the debt and propose a payment schedule (up to 18 months)</li>'
            '<li>KRA reviews and either approves or proposes amended terms</li>'
            '<li>Once approved, you must make payments on time — missed payments cancel the arrangement</li>'
            '</ol>'
            '<h3 class="mt-3">Eligibility</h3>'
            '<ul><li>You must have filed all outstanding returns</li>'
            '<li>You must not have defaulted on a previous instalment arrangement</li>'
            '<li>The debt must not be under active fraud investigation or criminal proceedings</li></ul>'
            '<div class="mt-3 result-panel result-info"><strong>💡 Combine with the 2026 Tax Amnesty.</strong> Under the amnesty, penalties and interest up to 2026 are waived — but you must pay the principal. A payment plan makes this manageable. <a href="/tools/amnesty-checker.html">Check amnesty eligibility →</a></div>',
        'related': ['amnesty', 'ledger', 'penalty']
    },
    {
        'slug': 'output-vat-vs-input-vat-kenya',
        'title': 'Output VAT vs Input VAT Kenya — What\'s the Difference?',
        'h1': 'Output VAT vs Input VAT in Kenya — Explained Simply',
        'meta_desc': 'Output VAT is what you charge customers. Input VAT is what you pay suppliers. The difference is what you remit to KRA. Simple explanation with examples.',
        'keywords': 'output VAT vs input VAT Kenya, difference between output and input VAT, VAT payable calculation Kenya, how VAT works Kenya, VAT explained',
        'breadcrumb': 'Output VAT vs Input VAT',
        'subtitle': 'Output VAT is collected from customers. Input VAT is paid to suppliers. The difference (or excess) determines what you owe KRA or what KRA owes you.',
        'content': '<h2>Output VAT vs Input VAT — The Simple Explanation</h2>'
            '<div class="checker-grid mt-2">'
            '<div class="checker-item"><span><strong>Output VAT</strong> — VAT you charge customers</span><span>Collected on your sales at 16%</span></div>'
            '<div class="checker-item"><span><strong>Input VAT</strong> — VAT you pay suppliers</span><span>Paid on purchases at 16%</span></div>'
            '<div class="checker-item"><span><strong>VAT Payable</strong> = Output − Input</span><span>Remit to KRA if positive</span></div>'
            '<div class="checker-item"><span><strong>VAT Refundable</strong> = Input − Output</span><span>Claim from KRA if negative</span></div>'
            '</div>'
            '<p class="mt-2"><strong>Example:</strong> Your business sells goods worth KSh 1,000,000 (output VAT = KSh 160,000). You bought supplies worth KSh 600,000 (input VAT = KSh 96,000). VAT payable = KSh 160,000 − KSh 96,000 = <strong>KSh 64,000</strong> to KRA.</p>'
            '<p>If input VAT exceeds output VAT (e.g., export business), you can claim a refund from KRA.</p>'
            '<div class="mt-3"><a href="/tools/penalty-calculator.html" class="btn btn-primary">Calculate Your VAT →</a> <a href="/tools/refund-tracker.html" class="btn btn-outline">Track Refund →</a></div>',
        'related': ['penalty', 'refund', 'explainer']
    },
    {
        'slug': 'vat-on-imported-services-kenya',
        'title': 'VAT on Imported Services Kenya — Reverse Charge & Withholding VAT',
        'h1': 'VAT on Imported Services in Kenya (Reverse Charge)',
        'meta_desc': 'VAT on imported services in Kenya uses the reverse charge mechanism. If you receive services from a non-resident, you must account for VAT yourself. Includes withholding VAT rules.',
        'keywords': 'VAT on imported services Kenya, reverse charge VAT Kenya, imported services VAT, withholding VAT Kenya, VAT on foreign services Kenya',
        'breadcrumb': 'VAT on Imported Services',
        'subtitle': 'When you receive services from a supplier outside Kenya, you may need to account for VAT yourself under the reverse charge mechanism. Here is how it works.',
        'content': '<h2>VAT on Imported Services — Reverse Charge Explained</h2>'
            '<p>Under the VAT Act 2013 (as amended), imported services of a taxable nature are subject to VAT at 16%. The Kenyan recipient must account for the VAT under the <strong>reverse charge mechanism</strong>:</p>'
            '<ol class="steps">'
            '<li>Calculate 16% VAT on the value of the imported service</li>'
            '<li>Account for this as both <strong>output VAT</strong> (what you owe) and <strong>input VAT</strong> (what you can claim)</li>'
            '<li>The net effect is zero if you are fully taxable, but you must still declare it</li>'
            '</ol>'
            '<h3 class="mt-3">Withholding VAT</h3>'
            '<p>For certain imported services, KRA requires the Kenyan recipient to <strong>withhold VAT</strong> at 6% (VAT on imported services rate) and remit it directly to KRA. The supplier then invoices without VAT since the tax has been withheld.</p>'
            '<div class="mt-3 result-panel result-warning"><strong>⚠️ Common mistake:</strong> Many SMEs forget to declare imported services. KRA can access Central Bank forex data to cross-check payments to foreign entities. Non-declaration attracts penalties of 20% of the tax due.</div>',
        'related': ['penalty', 'explainer', 'scorecard']
    },
    {
        'slug': 'etims-offline-mode-kenya',
        'title': 'eTIMS Offline Mode Kenya — What Happens When the Internet is Down?',
        'h1': 'eTIMS Offline Mode in Kenya — How It Works',
        'meta_desc': 'eTIMS has an offline mode that allows invoice generation without internet. Invoices are stored locally and synced when connectivity is restored. Limit: 48 hours of offline invoices.',
        'keywords': 'eTIMS offline mode Kenya, eTIMS without internet, KRA offline invoicing, eTIMS sync offline, eTIMS internet down',
        'breadcrumb': 'eTIMS Offline Mode',
        'subtitle': 'eTIMS allows offline invoice generation for up to 48 hours. When the internet returns, all offline invoices automatically sync to KRA.',
        'content': '<h2>eTIMS Offline Mode Explained</h2>'
            '<p>KRA\'s eTIMS system supports offline operation. If your internet connection goes down, you can still generate invoices. Here is how it works:</p>'
            '<div class="checker-grid mt-2">'
            '<div class="checker-item"><span>Maximum offline period</span><span><strong>48 hours</strong></span></div>'
            '<div class="checker-item"><span>Invoices stored locally</span><span><strong>On your device</strong></span></div>'
            '<div class="checker-item"><span>Auto-sync when online</span><span><strong>Yes</strong></span></div>'
            '</div>'
            '<ol class="steps mt-2">'
            '<li>When internet drops, eTIMS switches to <strong>offline mode</strong> automatically</li>'
            '<li>You continue issuing invoices as normal — they are stored locally with a temporary QR code</li>'
            '<li>Once internet is restored, all offline invoices <strong>sync automatically</strong> to KRA servers</li>'
            '<li>If 48 hours pass without connectivity, eTIMS <strong>stops generating invoices</strong> until connection is restored</li>'
            '</ol>'
            '<p class="mt-2">KRA allows this because they recognise that internet in Kenya is not 100% reliable. However, ensure you have backup connectivity (e.g., mobile hotspot) for extended outages.</p>'
            '<div class="mt-3"><a href="/tools/etims-troubleshooter.html" class="btn btn-primary">Fix eTIMS Issues →</a></div>',
        'related': ['troubleshooter', 'buyer-invoice', 'scorecard']
    },
    {
        'slug': 'how-to-amend-vat-return-kenya',
        'title': 'How to Amend a VAT Return on KRA iTax — Correct Filing Errors',
        'h1': 'How to Amend a Filed VAT Return on KRA iTax',
        'meta_desc': 'Made a mistake on your VAT return? Learn how to amend or revise a filed return on KRA iTax. Includes timelines, penalties for errors, and when to use the voluntary disclosure program.',
        'keywords': 'amend VAT return Kenya, revise VAT return iTax, correct VAT return KRA, VAT return amendment, voluntary disclosure Kenya',
        'breadcrumb': 'Amend VAT Return',
        'subtitle': 'If you made a mistake on a filed VAT return, you can amend it through iTax. Here is how and when to do it.',
        'content': '<h2>How to Amend a VAT Return on iTax</h2>'
            '<ol class="steps">'
            '<li>Log in to <strong>iTax → Returns → File Return</strong></li>'
            '<li>Select the <strong>period</strong> with the error</li>'
            '<li>Choose <strong>Amendment Return</strong> (if still within the same tax period window)</li>'
            '<li>Correct the relevant fields and resubmit</li>'
            '</ol>'
            '<h3 class="mt-3">Voluntary Disclosure Programme (VDP)</h3>'
            '<p>If the amendment is due to an error that reduced your tax liability, use the <strong>Voluntary Disclosure Programme</strong> on iTax. VDP allows you to correct errors voluntarily with reduced penalties: 1% per month of the additional tax (capped at 5%) instead of the usual 10-25%.</p>'
            '<div class="mt-3 result-panel result-info"><strong>💡 Tip:</strong> If KRA discovers the error first (e.g., through an audit), the penalties are much higher. Best to use VDP as soon as you find an error. <a href="https://wa.me/254700000000?text=I%20need%20help%20amending%20a%20VAT%20return">Get help on WhatsApp →</a></div>',
        'related': ['penalty', 'review', 'troubleshooter']
    },
    {
        'slug': 'bad-debt-relief-vat-kenya',
        'title': 'Bad Debt Relief VAT Kenya — Claim VAT Back on Unpaid Invoices',
        'h1': 'Bad Debt Relief Under VAT — Kenya Rules',
        'meta_desc': 'If your customer does not pay within 12 months, you can claim VAT relief on the bad debt. Learn the requirements, time limits, and how to apply on iTax.',
        'keywords': 'bad debt relief VAT Kenya, VAT bad debt claim, claim VAT on unpaid invoices Kenya, non-payment VAT relief, VAT bad debt write off Kenya',
        'breadcrumb': 'Bad Debt Relief VAT',
        'subtitle': 'If your customer has not paid within 12 months of the invoice date, you can claim back the VAT you remitted to KRA on that sale.',
        'content': '<h2>Bad Debt Relief — Claim VAT on Unpaid Sales</h2>'
            '<p>Under the VAT Act, if you have accounted for output VAT on a sale but the customer has <strong>not paid within 12 months</strong>, you can claim bad debt relief:</p>'
            '<ol class="steps">'
            '<li>Ensure <strong>12 months</strong> have passed since the invoice date without payment</li>'
            '<li>The debt must be <strong>written off</strong> in your books as a bad debt</li>'
            '<li>Claim the relief on your VAT return in the period you write off the debt</li>'
            '<li>If the customer later pays, you must repay the VAT to KRA</li>'
            '</ol>'
            '<div class="mt-3 result-panel result-warning"><strong>⚠️ Documentation required:</strong> Keep copies of the original eTIMS invoice, proof of delivery, debt recovery attempts, and the resolution to write off the debt in your board minutes or management accounts.</div>'
            '<div class="mt-3"><a href="/tools/vat-review.html" class="btn btn-primary">Free VAT Review →</a></div>',
        'related': ['review', 'explainer']
    },
    {
        'slug': 'kra-notice-of-assessment-what-to-do',
        'title': 'KRA Notice of Assessment — What to Do When You Receive One',
        'h1': 'KRA Notice of Assessment — Your Next Steps',
        'meta_desc': 'Received a KRA notice of assessment? Do not panic. Here is what it means, your options (pay, object, or appeal), and the critical 30-day deadline you cannot miss.',
        'keywords': 'KRA notice of assessment, KRA tax demand notice, received KRA assessment, what to do with KRA assessment, KRA additional assessment',
        'breadcrumb': 'KRA Notice of Assessment',
        'subtitle': 'A KRA notice of assessment means the Commissioner has determined additional tax is due. You have 30 days to respond. Here is exactly what to do.',
        'content': '<h2>You Received a KRA Assessment Notice — Now What?</h2>'
            '<p>Do not ignore it. A KRA notice of assessment gives you <strong>30 days</strong> from the date of receipt to take action.</p>'
            '<h3 class="mt-3">Your Three Options</h3>'
            '<div class="checker-grid mt-2">'
            '<div class="checker-item"><span><strong>Pay</strong> — if you agree with the assessment</span><span>Pay in full or apply for a payment plan</span></div>'
            '<div class="checker-item"><span><strong>Object</strong> — if you disagree</span><span>File objection within 30 days</span></div>'
            '<div class="checker-item"><span><strong>Appeal</strong> — if objection is rejected</span><span>Appeal to TAT within 30 days</span></div>'
            '</div>'
            '<p class="mt-2">If you fail to respond within 30 days, the assessment becomes final and KRA can proceed with enforcement — including agency notices to your bank, garnishment, and asset attachment.</p>'
            '<div class="mt-3"><a href="/tools/how-to-object-to-kra-assessment.html" class="btn btn-primary">Guide to Filing an Objection →</a></div>',
        'related': ['ledger', 'penalty', 'amnesty']
    },
    {
        'slug': 'vat-withholding-rates-kenya',
        'title': 'VAT Withholding Rates Kenya — Who Withholds and at What Rate?',
        'h1': 'VAT Withholding in Kenya — Rates and Requirements',
        'meta_desc': 'VAT withholding in Kenya applies to certain payments. The standard rate is 6% (for specified imported services) and 2% for supplies to government entities. Learn who must withhold.',
        'keywords': 'VAT withholding rates Kenya, withholding VAT rate, who withholds VAT Kenya, VAT withholding agent, 6% withholding VAT, government VAT withholding',
        'breadcrumb': 'VAT Withholding Rates',
        'subtitle': 'Certain Kenyan entities must withhold VAT on payments to suppliers. The rate depends on the type of supply and the entity making the payment.',
        'content': '<h2>VAT Withholding Rates in Kenya</h2>'
            '<div class="checker-grid mt-2">'
            '<div class="checker-item"><span>Imported services (reverse charge)</span><span><strong>6%</strong></span></div>'
            '<div class="checker-item"><span>Government ministries and state corporations</span><span><strong>2%</strong></span></div>'
            '<div class="checker-item"><span>Large taxpayers (appointed as withholding agents)</span><span><strong>6%</strong></span></div>'
            '</div>'
            '<p class="mt-2">When a withholding agent deducts VAT from your invoice, they remit it directly to KRA. You must account for this in your VAT return — the withheld amount satisfies your output VAT liability to that extent.</p>'
            '<p>As a supplier, you issue a full eTIMS invoice including VAT. The withholding agent pays you net of the withholding VAT and provides a withholding certificate.</p>'
            '<div class="mt-3 result-panel result-info"><strong>💡 Tip:</strong> Always verify a withholding agent\'s status before accepting net payment. Use the <a href="/tools/portal-router.html">Portal Router</a> to find the WHT verification tool on iTax.</div>',
        'related': ['router', 'explainer', 'scorecard']
    },
    {
        'slug': 'kra-tax-refund-status-check-online',
        'title': 'KRA Tax Refund Status Check — How to Check Online',
        'h1': 'How to Check Your KRA Tax Refund Status Online',
        'meta_desc': 'Check your KRA tax refund status on iTax. Log in → Returns → Refund Status. Learn what each status means and when to expect your money.',
        'keywords': 'KRA tax refund status check, check KRA refund online, KRA refund status meaning, iTax refund status, where is my KRA refund',
        'breadcrumb': 'KRA Refund Status Check',
        'subtitle': 'You can check your KRA tax refund status on iTax. Here is what the different statuses mean and what to do at each stage.',
        'content': '<h2>How to Check Your Refund Status on iTax</h2>'
            '<ol class="steps">'
            '<li>Log in to <a href="https://itax.kra.go.ke" target="_blank">itax.kra.go.ke</a></li>'
            '<li>Go to <strong>Returns → Refund Status</strong></li>'
            '<li>Select the tax type and period for the refund</li>'
            '<li>View the current status</li>'
            '</ol>'
            '<h3 class="mt-3">Status Meanings</h3>'
            '<div class="checker-grid mt-2">'
            '<div class="checker-item"><span>Pending</span><span>Under review — wait</span></div>'
            '<div class="checker-item"><span>Approved</span><span>Refund approved — payment being processed</span></div>'
            '<div class="checker-item"><span>Paid</span><span>Refund disbursed — check your bank</span></div>'
            '<div class="checker-item"><span>Rejected</span><span>Refund rejected — check reason and reapply</span></div>'
            '<div class="checker-item"><span>Offset</span><span>Applied against other tax debt</span></div>'
            '</div>'
            '<div class="mt-3"><a href="/tools/refund-tracker.html" class="btn btn-primary">Use Our Refund Tracker Tool →</a></div>',
        'related': ['refund', 'router']
    },
]

def generate_schema(title, desc, slug):
    return json.dumps({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": desc,
        "url": f"https://smartvatkenya.com/seo-pages/{slug}.html",
        "publisher": {"@type": "Organization", "name": "Smart VAT Kenya"},
        "dateModified": datetime.now().strftime("%Y-%m-%d")
    }, ensure_ascii=False)


def main():
    os.makedirs(PAGES_DIR, exist_ok=True)
    count = 0
    for page in PAGES:
        related_html = ''
        for r in page.get('related', []):
            if r in RELATED:
                related_html += f'<div class="card card-hover text-center">{RELATED[r]}</div>'
        content = TEMPLATE.format(
            title=page['title'],
            h1=page['h1'],
            meta_desc=page['meta_desc'],
            keywords=page['keywords'],
            slug=page['slug'],
            breadcrumb=page['breadcrumb'],
            subtitle=page['subtitle'],
            content=page['content'],
            related_tools=related_html,
            schema=generate_schema(page['title'], page['meta_desc'], page['slug'])
        )
        path = os.path.join(PAGES_DIR, f"{page['slug']}.html")
        with open(path, 'w') as f:
            f.write(content)
        count += 1
        print(f"✓ {page['slug']}.html")
    print(f"\n✅ Generated {count} SEO pages in seo-pages/")


if __name__ == '__main__':
    main()
