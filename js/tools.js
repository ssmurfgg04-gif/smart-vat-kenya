(function() {
  'use strict';

  const SITE = 'Smart VAT Kenya';
  const WHATSAPP = 'https://wa.me/254700000000?text=Hi%20Smart%20VAT%20Kenya%2C%20I%20need%20help%20with%20';
  const TOOLS = {
    amnesty: 'amnesty-checker',
    scorecard: 'compliance-scorecard',
    penalty: 'penalty-calculator',
    review: 'vat-review',
    explainer: 'vat-return-explainer',
    troubleshooter: 'etims-troubleshooter',
    refund: 'refund-tracker',
    router: 'portal-router',
    ledger: 'legacy-ledger-guide'
  };

  function getToolName(path) {
    for (const [k, v] of Object.entries(TOOLS)) {
      if (path.includes(v)) return k;
    }
    return 'general';
  }

  function capture(tool, data) {
    try {
      const existing = JSON.parse(localStorage.getItem('svk_leads') || '[]');
      existing.push({ tool, data, timestamp: new Date().toISOString(), referrer: document.referrer });
      localStorage.setItem('svk_leads', JSON.stringify(existing));
    } catch(e) {}
  }

  function showModal(toolKey, onComplete) {
    const overlay = document.getElementById('leadModal');
    if (!overlay) return;
    const toolNames = {
      amnesty: 'Tax Amnesty Checker', scorecard: 'Compliance Scorecard',
      penalty: 'Penalty Calculator', review: 'VAT Return Review',
      explainer: 'VAT Return Explainer', troubleshooter: 'eTIMS Troubleshooter',
      refund: 'Refund Tracker', router: 'Portal Router', ledger: 'Ledger Guide'
    };
    document.getElementById('modalToolName').textContent = toolNames[toolKey] || 'Tool';
    overlay.classList.add('active');
    const form = document.getElementById('leadForm');
    form.onsubmit = (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      capture(toolKey, Object.fromEntries(fd));
      overlay.classList.remove('active');
      form.reset();
      if (onComplete) onComplete();
    };
    document.querySelector('.modal-close').onclick = () => overlay.classList.remove('active');
    overlay.onclick = (e) => { if (e.target === overlay) overlay.classList.remove('active'); };
  }

  function openWhatsApp(msg) {
    window.open(WHATSAPP + encodeURIComponent(msg), '_blank');
  }

  function initAccordion() {
    document.querySelectorAll('.faq-q').forEach(q => {
      q.addEventListener('click', () => q.parentElement.classList.toggle('open'));
    });
  }

  function showResult(container, type, content) {
    container.innerHTML = `<div class="result-panel result-${type}">${content}</div>`;
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Amnesty Checker
  function initAmnesty() {
    const form = document.getElementById('amnestyForm');
    if (!form) return;
    const result = document.getElementById('amnestyResult');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const hasDebt = fd.get('hasDebt');
      const debtType = fd.get('debtType') || 'unknown';
      const canPay = fd.get('canPay');
      const period = fd.get('period');
      const fraud = fd.get('fraud');
      const underAudit = fd.get('underAudit');
      const filed = fd.get('filed');
      let eligible = false;
      let issues = [];
      if (hasDebt === 'no') { eligible = true; issues.push('You may already be compliant — but let us verify your iTax ledger for free.'); }
      else {
        if (fraud === 'yes') issues.push('Amnesty does not cover ongoing fraud cases under the Tax Procedures Act.');
        else {
          if (canPay === 'yes') { eligible = true; }
          else { issues.push('You can apply for a payment plan — KRA accepts up to 18-month instalments.'); eligible = true; }
          if (underAudit === 'yes') issues.push('Periods under active audit are not covered until the audit concludes.');
          if (filed === 'no') issues.push('You must file all outstanding returns before the amnesty applies.');
        }
      }
      const qualifies = fraud !== 'yes' && hasDebt === 'yes';
      let html = '';
      if (fraud === 'yes') {
        html = `<h3>❌ Not Eligible for Amnesty</h3><p>Taxpayers under active fraud investigation do not qualify. Contact KRA for resolution.</p>`;
        showResult(result, 'error', html);
      } else if (hasDebt === 'no') {
        html = `<h3>✅ You May Be Eligible</h3><p>Based on your answers, you don't have outstanding KRA debt. However, ledger errors are common. Let us review your iTax account for free.</p>
        <div class="mt-2"><a href="${WHATSAPP}free%20ledger%20review" class="btn btn-whatsapp btn-sm" target="_blank">💬 Free iTax Ledger Review</a></div>`;
        showResult(result, 'success', html);
      } else {
        html = `<h3>✅ You Likely Qualify for the Amnesty!</h3>
        <p>The KRA 2026 amnesty waives <strong>100% of penalties and interest</strong> on pre-2026 debt once you pay the principal.</p>
        <div class="checker-grid mt-2">`;
        if (canPay === 'yes') html += `<div class="checker-item"><span>Pay principal by Dec 2026</span><span class="status"><span class="status-dot dot-ok"></span> On track</span></div>`;
        else html += `<div class="checker-item"><span>Payment plan needed</span><span class="status"><span class="status-dot dot-warn"></span> Apply by Oct 2026</span></div>`;
        if (filed === 'yes') html += `<div class="checker-item"><span>Returns filed</span><span class="status"><span class="status-dot dot-ok"></span> Good</span></div>`;
        else html += `<div class="checker-item"><span>Returns filed</span><span class="status"><span class="status-dot dot-err"></span> Need to file</span></div>`;
        html += `</div>
        <div class="mt-2 text-sm text-muted">Deadline: <strong>31 December 2026</strong>. Act by October to allow processing time.</div>
        <div class="mt-2 flex gap-2 flex-wrap">
          <a href="${WHATSAPP}amnesty%20help" class="btn btn-whatsapp btn-sm" target="_blank">💬 WhatsApp — Free Amnesty Help</a>
          <button class="btn btn-outline btn-sm" onclick="SVK.showLead('amnesty')">📧 Get Amnesty Checklist</button>
        </div>`;
        showResult(result, 'success', html);
      }
      capture('amnesty', Object.fromEntries(fd));
      if (!qualifies && fraud !== 'yes') {
        setTimeout(() => showModal('amnesty'), 1000);
      }
    });
  }

  // Compliance Scorecard
  function initScorecard() {
    const form = document.getElementById('scorecardForm');
    if (!form) return;
    const result = document.getElementById('scorecardResult');
    let currentStep = 0;
    const steps = form.querySelectorAll('.quiz-step');
    const progress = document.getElementById('scoreProgress');
    function showStep(n) {
      steps.forEach((s, i) => { s.classList.toggle('hidden', i !== n); });
      currentStep = n;
      if (progress) {
        const dots = progress.querySelectorAll('.progress-step');
        dots.forEach((d, i) => {
          d.className = 'progress-step' + (i < n ? ' done' : '') + (i === n ? ' active' : '');
        });
      }
      document.getElementById('stepCounter').textContent = `Step ${n + 1} of ${steps.length}`;
      document.getElementById('prevBtn').classList.toggle('hidden', n === 0);
      if (n === steps.length - 1) {
        document.getElementById('nextBtn').textContent = 'Get My Score';
        document.getElementById('nextBtn').onclick = calculateScore;
      } else {
        document.getElementById('nextBtn').textContent = 'Next →';
        document.getElementById('nextBtn').onclick = () => showStep(n + 1);
      }
    }
    function calculateScore() {
      const fd = new FormData(form);
      let score = 0; let max = 8;
      if (fd.get('etims') === 'yes') score++;
      if (fd.get('returns') === 'on_time') score++;
      if (fd.get('invoices') === 'yes') score++;
      if (fd.get('recon') === 'yes') score++;
      if (fd.get('tcc') === 'yes') score++;
      if (fd.get('penalties') === 'no') score++;
      if (fd.get('audit') === 'no') score++;
      if (fd.get('agent') === 'yes') score++;
      const pct = Math.round(score / max * 100);
      let grade, cls, recs = [];
      if (pct >= 87) { grade = 'A — Excellent'; cls = 'score-high'; recs = ['You are fully compliant. Maintain your records and file on time.']; }
      else if (pct >= 62) { grade = 'B — Good'; cls = 'score-mid'; recs = ['Review your eTIMS invoice reconciliation.', 'Set calendar reminders for filing deadlines.']; }
      else if (pct >= 37) { grade = 'C — Needs Work'; cls = 'score-low'; recs = ['Register for eTIMS if you haven\'t.', 'File outstanding returns immediately.', 'Apply for a Tax Compliance Certificate.']; }
      else { grade = 'D — At Risk'; cls = 'score-low'; recs = ['You are at high risk of KRA penalties.', 'Contact us urgently for a compliance review.', 'File all outstanding returns and register for eTIMS.']; }
      if (fd.get('penalties') === 'yes') recs.push('Check if you qualify for the 2026 Tax Amnesty to clear penalties.');
      let html = `<div class="text-center mb-2"><span class="score ${cls}">${grade}</span><br><span class="text-muted">${score}/${max} — ${pct}%</span></div>
      <ul class="steps">${recs.map(r => `<li>${r}</li>`).join('')}</ul>
      <div class="mt-2 flex gap-2 flex-wrap justify-center">
        <a href="${WHATSAPP}compliance%20scorecard%20${pct}" class="btn btn-whatsapp btn-sm" target="_blank">💬 Get Personalised Fix Plan</a>
        <button class="btn btn-outline btn-sm" onclick="SVK.showLead('scorecard')">📧 Email My Report</button>
      </div>`;
      showResult(result, pct >= 62 ? 'success' : pct >= 37 ? 'warning' : 'error', html);
      capture('scorecard', Object.fromEntries(fd));
      if (pct < 62) setTimeout(() => showModal('scorecard'), 2000);
    }
    if (steps.length) {
      form.querySelectorAll('.prev-btn').forEach(b => b.addEventListener('click', () => showStep(currentStep - 1)));
      showStep(0);
    }
  }

  // Penalty Calculator
  function initPenalty() {
    const form = document.getElementById('penaltyForm');
    if (!form) return;
    const result = document.getElementById('penaltyResult');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const penaltyType = fd.get('penaltyType');
      const months = parseInt(fd.get('months')) || 0;
      const taxDue = parseFloat(fd.get('taxDue')) || 0;
      let total = 0; let breakdown = [];
      if (penaltyType === 'late_filing') {
        const perMonth = 2000;
        total = months * perMonth;
              const filingPenalty = Math.max(perMonth, taxDue * 0.05);
              total = filingPenalty;
              breakdown.push(`Late filing penalty: KSh ${filingPenalty.toLocaleString()} (5% of tax due or KSh 10,000, whichever is higher)`);
              if (taxDue > 0) {
                const latePayPenalty = Math.min(taxDue * 0.05 * months, taxDue * 0.25);
                total += latePayPenalty;
                breakdown.push(`Late payment penalty (5%/month, capped at 25%): KSh ${latePayPenalty.toLocaleString()}`);
                const interest = taxDue * 0.01 * months;
                total += interest;
                breakdown.push(`Interest (1%/month): KSh ${interest.toLocaleString()}`);
              }
      } else if (penaltyType === 'late_payment') {
        const p = Math.min(taxDue * 0.05 * months, taxDue * 0.25);
        total += p;
        breakdown.push(`Late payment penalty (5%/month, capped at 25%): KSh ${p.toLocaleString()}`);
        const i = taxDue * 0.01 * months;
        total += i;
        breakdown.push(`Interest (1%/month): KSh ${i.toLocaleString()}`);
      } else if (penaltyType === 'under_declaration') {
        const shortfall = parseFloat(fd.get('shortfall')) || 0;
        const p = shortfall * 0.20;
        total += p;
        breakdown.push(`Under-declaration penalty (20% of shortfall): KSh ${p.toLocaleString()}`);
        if (months > 0) {
          const i = shortfall * 0.01 * months;
          total += i;
          breakdown.push(`Interest (1%/month): KSh ${i.toLocaleString()}`);
        }
      } else if (penaltyType === 'non_etims') {
        total = 1000000;
        breakdown.push(`Failure to use eTIMS: KSh 1,000,000 (one-off penalty per KRA notice)`);
      } else if (penaltyType === 'wrong_class') {
        total = taxDue * 0.10;
        breakdown.push(`Wrong VAT classification (10% of tax due): KSh ${total.toLocaleString()}`);
      }
      let html = `<h3>Estimated Penalty: KSh ${total.toLocaleString()}</h3>`;
      if (total > 0) {
        html += `<ul class="steps mt-2">${breakdown.map(b => `<li>${b}</li>`).join('')}</ul>`;
      }
      if (total > 100000) {
        html += `<div class="mt-2 result-panel result-warning"><strong>⚠️ Check Amnesty Eligibility</strong><br>You may qualify for the KRA 2026 Tax Amnesty — <a href="/tools/amnesty-checker.html">check here</a>.</div>`;
      }
      html += `<div class="mt-2 flex gap-2 flex-wrap">
        <a href="${WHATSAPP}penalty%20help" class="btn btn-whatsapp btn-sm" target="_blank">💬 Help Reduce This Penalty</a>
        <button class="btn btn-outline btn-sm" onclick="SVK.showLead('penalty')">📧 Save This Calculation</button>
      </div>`;
      showResult(result, total > 500000 ? 'error' : total > 50000 ? 'warning' : 'info', html);
      capture('penalty', Object.fromEntries(fd));
    });
  }

  // Portal Router
  function initRouter() {
    const form = document.getElementById('routerForm');
    if (!form) return;
    const result = document.getElementById('routerResult');
    const portals = {
      'file-return': { name: 'iTax — File Returns', url: 'https://itax.kra.go.ke/KRA-Portal/', desc: 'File your income tax, VAT, PAYE, or other returns.' },
      'register-pin': { name: 'iTax — PIN Registration', url: 'http://itax.kra.go.ke/KRA-Portal/eRegIndi.htm', desc: 'Apply for a new KRA PIN as an individual.' },
      'apply-tcc': { name: 'iTax — Tax Compliance Certificate', url: 'https://itax.kra.go.ke/KRA-Portal/', desc: 'Apply for your Tax Compliance Certificate online.' },
      'etims-invoice': { name: 'eTIMS Portal', url: 'https://etims.kra.go.ke/', desc: 'Generate and manage electronic tax invoices.' },
      'check-pin': { name: 'PIN Checker', url: 'http://itax.kra.go.ke/KRA-Portal/pinChecker.htm', desc: 'Verify if a KRA PIN is genuine.' },
      'check-tcc': { name: 'TCC Checker', url: 'http://itax.kra.go.ke/KRA-Portal/complianceMonitoring.htm', desc: 'Verify a Tax Compliance Certificate.' },
      'check-wht': { name: 'WHT Checker', url: 'http://itax.kra.go.ke/KRA-Portal/complianceMonitoring.htm', desc: 'Verify a Withholding Tax Certificate.' },
      'check-invoice': { name: 'eTIMS Invoice Checker', url: 'https://itax.kra.go.ke/KRA-Portal/', desc: 'Verify an eTIMS invoice by control unit number.' },
      'amnesty': { name: 'iTax — Tax Amnesty', url: 'https://itax.kra.go.ke/KRA-Portal/', desc: 'Access the tax amnesty programme (log in → Debt & Enforcement).' },
      'pay-tax': { name: 'M-Pesa Paybill 222222', url: 'https://www.safaricom.co.ke/personal/m-pesa', desc: 'Pay KRA via M-Pesa Paybill 222222 using your PRN.' },
      'customs': { name: 'iCMS — Customs Portal', url: 'https://icms.kra.go.ke/', desc: 'Customs declarations, cargo clearance, import/export.' },
      'auction': { name: 'iBid — Customs Auction', url: 'https://ibid.kra.go.ke/', desc: 'Bid on customs-seized goods and vehicles.' }
    };
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const choice = fd.get('task');
      const portal = portals[choice];
      if (portal) {
        let html = `<h3>${portal.name}</h3><p>${portal.desc}</p>
        <a href="${portal.url}" class="btn btn-primary mt-2" target="_blank" rel="noopener">Go to Portal →</a>
        <div class="mt-2 text-sm text-muted">💡 Tip: You may need your KRA PIN and password to log in.</div>`;
        showResult(result, 'info', html);
      } else {
        const custom = fd.get('customTask');
        if (custom) {
          const words = custom.toLowerCase().split(' ');
          let match = Object.entries(portals).find(([k, v]) => words.some(w => k.includes(w) || v.name.toLowerCase().includes(w)));
          if (match) {
            let html = `<h3>Maybe this is what you need?</h3><p><strong>${match[1].name}</strong> — ${match[1].desc}</p>
            <a href="${match[1].url}" class="btn btn-primary mt-2" target="_blank" rel="noopener">Go to Portal →</a>
            <div class="mt-2 text-sm text-muted">Not right? <a href="${WHATSAPP}portal%20help" target="_blank">Ask us on WhatsApp</a></div>`;
            showResult(result, 'info', html);
          } else {
            let html = `<h3>Not Sure Which Portal?</h3><p>We can help you find the right KRA portal.</p>
            <a href="${WHATSAPP}${encodeURIComponent(custom)}" class="btn btn-whatsapp" target="_blank">💬 Ask on WhatsApp</a>`;
            showResult(result, 'warning', html);
          }
          capture('router', { task: custom });
        }
      }
    });
    const customInput = document.getElementById('customTask');
    const taskSelect = document.getElementById('taskSelect');
    if (customInput && taskSelect) {
      taskSelect.addEventListener('change', () => { if (taskSelect.value) customInput.disabled = true; else customInput.disabled = false; });
      customInput.addEventListener('input', () => { if (customInput.value) taskSelect.value = ''; });
    }
  }

  // Troubleshooter
  function initTroubleshooter() {
    const form = document.getElementById('tsForm');
    if (!form) return;
    const result = document.getElementById('tsResult');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const errorType = fd.get('errorType');
      const when = fd.get('when');
      let steps = []; let message = '';
      if (errorType === 'mismatch') {
        steps = ['Check the invoice numbers on your eTIMS portal match what you entered in iTax.',
          'Verify each supplier\'s eTIMS invoice is valid — use the Invoice Checker on iTax.',
          'Contact the supplier to re-issue any mismatched invoices.',
          'If import VAT: confirm the customs entry number is correct.',
          'Still stuck? We can review your return before you resubmit.'];
        message = 'VAT return rejection due to eTIMS data mismatch is the most common issue. Our team fixes these daily.';
      } else if (errorType === 'login') {
        steps = ['Try "Forgot Password" on the iTax login page — use your registered email.',
          'If your email is outdated, visit a KRA office with your ID to update it.',
          'Clear your browser cache and try a different browser (Chrome or Firefox).',
          'Still locked out? We can help you prepare the documents needed for KRA.'];

        message = 'iTax login issues are usually email-related. We help clients resolve these remotely.';
      } else if (errorType === 'portal_down') {
        steps = ['KRA portals are most accessible 6 AM — 10 AM and after 6 PM.',
          'Try the eTIMS mobile app if the web portal is down.',
          'Use USSD *572# for basic checks.',
          'We monitor portal status and can notify you when it\'s back up.'];
        message = 'KRA portal outages are common. We can file on your behalf when the portal is back.';
      } else if (errorType === 'payment') {
        steps = ['Check that you used M-Pesa Paybill 222222 with the correct PRN.',
          'Confirm the payment is in the name of the taxpayer (not an agent\'s line).',
          'Wait 24-48 hours for reconciliation — KRA payments are not instant.',
          'If still not showing after 48h, we can help you escalate to KRA.'];

        message = 'Payment reconciliation delays are common. We track payments for our clients.';
      }
      let html = `<h3>${message}</h3><ol class="steps mt-2">${steps.map(s => `<li>${s}</li>`).join('')}</ol>
      <div class="mt-2 flex gap-2 flex-wrap">
        <a href="${WHATSAPP}troubleshooter%20${errorType}" class="btn btn-whatsapp btn-sm" target="_blank">💬 Get 1-on-1 Help</a>
        <button class="btn btn-outline btn-sm" onclick="SVK.showLead('troubleshooter')">📧 Email These Steps</button>
      </div>`;
      showResult(result, when === 'urgent' ? 'error' : 'info', html);
      capture('troubleshooter', Object.fromEntries(fd));
    });
  }

  // VAT Refund Tracker
  function initRefund() {
    const form = document.getElementById('refundForm');
    if (!form) return;
    const result = document.getElementById('refundResult');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const months = parseInt(fd.get('months')) || 0;
      const status = fd.get('status');
      let steps = [];
      if (months < 3) {
        steps.push('Your refund is within the normal processing window. Check iTax → Refund Status.');
        steps.push('KRA aims to process VAT refunds within 90 days of filing.');
        steps.push('If you haven\'t heard back in 3 months, escalate via our WhatsApp.');
      } else if (months < 6) {
        steps.push('Your refund is delayed beyond the 90-day window.');
        steps.push('Escalate by filing a formal complaint via the iTax portal.');
        steps.push('Visit your nearest KRA Tax Service Office with the PRN and return acknowledgement.');
        steps.push('We can help you draft the escalation letter and track progress.');
      } else {
        steps.push('Your refund is significantly overdue.');
        steps.push('Escalate to the KRA Complaints & Information Centre (CIC): cic@kra.go.ke');
        steps.push('Call KRA: 020 4 999 999 or 0711 099 999 and quote your PRN.');
        steps.push('We offer a dedicated VAT refund follow-up service — let us chase KRA for you.');
      }
      let html = `<h3>VAT Refund Status Guide</h3>
      <p>You filed <strong>${months} month${months > 1 ? 's' : ''}</strong> ago. Current status: <strong>${status}</strong>.</p>
      <ol class="steps mt-2">${steps.map(s => `<li>${s}</li>`).join('')}</ol>
      <div class="mt-2 flex gap-2 flex-wrap">
        <a href="${WHATSAPP}refund%20tracking" class="btn btn-whatsapp btn-sm" target="_blank">💬 Track My Refund</a>
        <button class="btn btn-outline btn-sm" onclick="SVK.showLead('refund')">📧 Get Refund Timeline</button>
      </div>`;
      showResult(result, months >= 6 ? 'error' : months >= 3 ? 'warning' : 'info', html);
      capture('refund', Object.fromEntries(fd));
    });
  }

  // Explainer
  function initExplainer() {
    const form = document.getElementById('explainerForm');
    if (!form) return;
    const result = document.getElementById('explainerResult');
    result.innerHTML = `<div class="result-panel result-info"><h3>How Pre-Filled VAT Returns Work</h3>
      <p>KRA auto-populates your VAT return (since Jan 2024) with data from:</p>
      <ul class="steps mt-1">
        <li><strong>eTIMS invoices</strong> you issued — these become your output VAT</li>
        <li><strong>Supplier eTIMS invoices</strong> in your name — these become input VAT claims</li>
        <li><strong>Customs import declarations</strong> — import VAT you paid at the port</li>
      </ul>
      <h4 class="mt-2">What You Must Verify:</h4>
      <div class="checker-grid mt-2">
        <div class="checker-item"><span>Output VAT matches your sales records</span><span class="status"><span class="status-dot dot-warn"></span> Verify</span></div>
        <div class="checker-item"><span>Input VAT claims have valid eTIMS invoices</span><span class="status"><span class="status-dot dot-warn"></span> Check QR code</span></div>
        <div class="checker-item"><span>Import VAT entries match customs declarations</span><span class="status"><span class="status-dot dot-warn"></span> Verify entry #</span></div>
      </div>
      <p class="mt-2 text-sm text-muted">Most VAT return rejections happen because of mismatches in these three areas. We can review your pre-filled return before you submit.</p>
      <div class="mt-2">
        <a href="${WHATSAPP}return%20review" class="btn btn-whatsapp" target="_blank">💬 Send Us Your Pre-Filled Return for Review</a>
      </div>
    </div>`;
  }

  // Legacy Ledger Guide
  function initLedger() {
    const form = document.getElementById('ledgerForm');
    if (!form) return;
    const result = document.getElementById('ledgerResult');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const balance = fd.get('balance');
      const recognize = fd.get('recognize');
      let html = '';
      if (balance === 'yes' && recognize === 'yes') {
        html = `<h3>✅ You Likely Have a Real Balance</h3>
        <p>Your legacy ledger balance matches what you remember. Here's how to reconcile it:</p>
        <ol class="steps mt-2">
          <li>Log in to iTax → Debt & Enforcement → View Ledger</li>
          <li>Compare each entry with your own records</li>
          <li>For credit balances: request a refund or offset against future tax</li>
          <li>For debit balances: check if amnesty applies before paying</li>
        </ol>
        <div class="mt-2"><a href="${WHATSAPP}ledger%20reconciliation" class="btn btn-whatsapp" target="_blank">💬 We'll Reconcile for You</a></div>`;
        showResult(result, 'success', html);
      } else if (balance === 'yes' && recognize === 'no') {
        html = `<h3>⚠️ Unrecognized Balance</h3>
        <p>Many taxpayers see balances they don't recognize. This is often due to:</p>
        <ul class="steps mt-2">
          <li>Migration errors from the legacy KRA system</li>
          <li>Prepaid amounts that were not properly credited</li>
          <li>Penalties that should have been waived under older programmes</li>
        </ul>
        <p>You have the right to dispute these. KRA has a formal reconciliation process.</p>
        <div class="mt-2"><a href="${WHATSAPP}ledger%20dispute" class="btn btn-whatsapp" target="_blank">💬 Help Me Dispute This Balance</a></div>`;
        showResult(result, 'warning', html);
      } else {
        html = `<h3>✅ Likely No Legacy Issue</h3>
        <p>If your iTax ledger shows no migrated balance, you may not have legacy data. However, always double-check under Debt & Enforcement → Ledger before filing.</p>
        <div class="mt-2"><a href="${WHATSAPP}ledger%20check" class="btn btn-whatsapp btn-sm" target="_blank">💬 Free Ledger Check</a></div>`;
        showResult(result, 'success', html);
      }
      capture('ledger', Object.fromEntries(fd));
    });
  }

  // Init all
  document.addEventListener('DOMContentLoaded', function() {
    initAmnesty();
    initScorecard();
    initPenalty();
    initRouter();
    initTroubleshooter();
    initRefund();
    initExplainer();
    initLedger();
    initAccordion();
  });

  window.SVK = {
    showLead: (tool) => showModal(tool),
    capture,
    openWhatsApp,
    WHATSAPP
  };
})();
