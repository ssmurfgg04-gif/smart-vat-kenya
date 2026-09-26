import type { ReactNode } from "react"

export function Flowchart({ children, caption, id }: { children: ReactNode; caption?: string; id?: string }) {
  return (
    <figure id={id} className="my-10" aria-label={caption}>
      <div className="w-full overflow-x-auto flex justify-center py-4 [&_svg]:max-w-full [&_svg]:h-auto">
        {children}
      </div>
      {caption && (
        <figcaption className="text-center text-[0.7rem] text-ink-muted mt-2 font-mono uppercase tracking-widest">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export function VATRegistrationFlow() {
  return (
    <svg viewBox="0 0 360 460" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="VAT registration process flowchart - decision tree from turnover threshold check through iTax application to VAT PIN issued">
      <defs>
        <marker id="ar1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#141311"/>
        </marker>
        <marker id="ar1g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#6b6759"/>
        </marker>
      </defs>

      <polygon points="180,10 270,35 180,60 90,35" fill="#fffbf0" stroke="#b07a00" strokeWidth="1.5"/>
      <text x="180" y="32" textAnchor="middle" fill="#7a5500" fontSize="10" fontWeight="700">Turnover &gt;</text>
      <text x="180" y="44" textAnchor="middle" fill="#7a5500" fontSize="10" fontWeight="700">KES 5M?</text>

      <line x1="90" y1="35" x2="50" y2="35" stroke="#6b6759" strokeWidth="1.5"/>
      <line x1="50" y1="35" x2="50" y2="70" stroke="#6b6759" strokeWidth="1.5" markerEnd="url(#ar1g)"/>
      <text x="73" y="30" textAnchor="middle" fill="#6b6759" fontSize="9">No</text>

      <rect x="15" y="78" width="70" height="32" rx="4" fill="#1b2a3b"/>
      <text x="50" y="94" textAnchor="middle" fill="#faf8f3" fontSize="8" fontWeight="600">Voluntary</text>
      <text x="50" y="104" textAnchor="middle" fill="#faf8f3" fontSize="8">registration</text>

      <line x1="180" y1="60" x2="180" y2="82" stroke="#141311" strokeWidth="1.5" markerEnd="url(#ar1)"/>
      <text x="190" y="74" fill="#6b6759" fontSize="9">Yes</text>

      <rect x="105" y="88" width="150" height="34" rx="5" fill="#c8372d"/>
      <text x="180" y="109" textAnchor="middle" fill="#faf8f3" fontSize="11" fontWeight="600">Log in to iTax</text>

      <line x1="180" y1="122" x2="180" y2="146" stroke="#141311" strokeWidth="1.5" markerEnd="url(#ar1)"/>

      <rect x="80" y="152" width="200" height="40" rx="5" fill="#c8372d"/>
      <text x="180" y="172" textAnchor="middle" fill="#faf8f3" fontSize="11" fontWeight="600">Add VAT + upload docs</text>
      <text x="180" y="185" textAnchor="middle" fill="#faf8f3" fontSize="9">KRA PIN, ID, bank details</text>

      <line x1="180" y1="192" x2="180" y2="216" stroke="#141311" strokeWidth="1.5" markerEnd="url(#ar1)"/>

      <rect x="80" y="222" width="200" height="34" rx="5" fill="#c8372d"/>
      <text x="180" y="243" textAnchor="middle" fill="#faf8f3" fontSize="11" fontWeight="600">Fill business details</text>

      <line x1="180" y1="256" x2="180" y2="280" stroke="#141311" strokeWidth="1.5" markerEnd="url(#ar1)"/>

      <rect x="105" y="286" width="150" height="34" rx="5" fill="#c8372d"/>
      <text x="180" y="307" textAnchor="middle" fill="#faf8f3" fontSize="11" fontWeight="600">Submit application</text>

      <line x1="180" y1="320" x2="180" y2="344" stroke="#141311" strokeWidth="1.5" markerEnd="url(#ar1)"/>

      <rect x="85" y="350" width="190" height="38" rx="19" fill="#1b2a3b"/>
      <text x="180" y="366" textAnchor="middle" fill="#faf8f3" fontSize="10" fontWeight="600">VAT PIN issued</text>
      <text x="180" y="379" textAnchor="middle" fill="#faf8f3" fontSize="9">in 1–3 working days</text>
    </svg>
  )
}

export function ETIMSSolutionFlow() {
  return (
    <svg viewBox="0 0 380 470" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="eTIMS solution selector decision tree - choose the right eTIMS solution based on your business setup">
      <defs>
        <marker id="ar2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#141311"/>
        </marker>
        <marker id="ar2g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#6b6759"/>
        </marker>
      </defs>

      <polygon points="190,10 280,35 190,60 100,35" fill="#fffbf0" stroke="#b07a00" strokeWidth="1.5"/>
      <text x="190" y="32" textAnchor="middle" fill="#7a5500" fontSize="9" fontWeight="700">Have POS/ERP</text>
      <text x="190" y="44" textAnchor="middle" fill="#7a5500" fontSize="9" fontWeight="700">system?</text>

      <line x1="280" y1="35" x2="330" y2="35" stroke="#141311" strokeWidth="1.5"/>
      <line x1="330" y1="35" x2="330" y2="70" stroke="#141311" strokeWidth="1.5" markerEnd="url(#ar2)"/>
      <text x="308" y="30" textAnchor="middle" fill="#6b6759" fontSize="9">Yes</text>

      <rect x="275" y="76" width="110" height="36" rx="5" fill="#c8372d"/>
      <text x="330" y="92" textAnchor="middle" fill="#faf8f3" fontSize="9" fontWeight="600">VSCU / OSCU</text>
      <text x="330" y="104" textAnchor="middle" fill="#faf8f3" fontSize="8">API integration</text>

      <line x1="100" y1="35" x2="50" y2="35" stroke="#141311" strokeWidth="1.5"/>
      <line x1="50" y1="35" x2="50" y2="70" stroke="#141311" strokeWidth="1.5"/>
      <text x="77" y="30" textAnchor="middle" fill="#6b6759" fontSize="9">No</text>

      <polygon points="50,74 130,94 50,114 50,94" stroke="#b07a00" strokeWidth="1.5" fill="#fffbf0" transform=""/>
      <text x="50" y="92" textAnchor="middle" fill="#7a5500" fontSize="8" fontWeight="700">Monthly</text>
      <text x="50" y="102" textAnchor="middle" fill="#7a5500" fontSize="8" fontWeight="700">invoices?</text>

      <text x="14" y="78" fill="#6b6759" fontSize="9">&lt; 50</text>
      <line x1="14" y1="80" x2="14" y2="116" stroke="#6b6759" strokeWidth="1" strokeDasharray="2,2"/>

      <text x="55" y="120" fill="#6b6759" fontSize="9">50–500</text>
      <line x1="50" y1="114" x2="50" y2="126" stroke="#141311" strokeWidth="1.5" markerEnd="url(#ar2)"/>

      <text x="88" y="78" fill="#6b6759" fontSize="9">&gt; 500</text>
      <line x1="88" y1="80" x2="88" y2="116" stroke="#6b6759" strokeWidth="1" strokeDasharray="2,2"/>

      <rect x="5" y="120" width="18" height="2" fill="#141311"/>
      <rect x="88" y="120" width="18" height="2" fill="#141311"/>

      <line x1="14" y1="118" x2="14" y2="132" stroke="#141311" strokeWidth="1.5" markerEnd="url(#ar2)"/>
      <line x1="88" y1="118" x2="88" y2="132" stroke="#141311" strokeWidth="1.5" markerEnd="url(#ar2)"/>

      <rect x="0" y="138" width="28" height="28" rx="4" fill="#c8372d"/>
      <text x="14" y="151" textAnchor="middle" fill="#faf8f3" fontSize="7" fontWeight="600">Lite</text>
      <text x="14" y="160" textAnchor="middle" fill="#faf8f3" fontSize="6">web</text>

      <rect x="36" y="138" width="28" height="28" rx="4" fill="#c8372d"/>
      <text x="50" y="151" textAnchor="middle" fill="#faf8f3" fontSize="7" fontWeight="600">Client</text>
      <text x="50" y="160" textAnchor="middle" fill="#faf8f3" fontSize="6">desk</text>

      <rect x="72" y="138" width="28" height="28" rx="4" fill="#c8372d"/>
      <text x="86" y="151" textAnchor="middle" fill="#faf8f3" fontSize="7" fontWeight="600">Trader</text>
      <text x="86" y="160" textAnchor="middle" fill="#faf8f3" fontSize="6">cstms</text>

      <text x="130" y="100" fill="#6b6759" fontSize="8">Lite: Free web-based</text>
      <text x="130" y="112" fill="#6b6759" fontSize="8">Client: Windows desktop</text>
      <text x="130" y="124" fill="#6b6759" fontSize="8">Trader: Customs-linked</text>

      <line x1="50" y1="116" x2="50" y2="126" stroke="#141311" strokeWidth="1.5"/>
    </svg>
  )
}

export function ETIMSOnboardingFlow() {
  return (
    <svg viewBox="0 0 360 420" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="eTIMS onboarding process flowchart - 5 steps from iTax registration to issuing your first invoice">
      <defs>
        <marker id="ar3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#141311"/>
        </marker>
      </defs>

      <rect x="85" y="10" width="190" height="32" rx="16" fill="#1b2a3b"/>
      <text x="180" y="30" textAnchor="middle" fill="#faf8f3" fontSize="11" fontWeight="600">eTIMS Onboarding</text>

      <line x1="180" y1="42" x2="180" y2="65" stroke="#141311" strokeWidth="1.5" markerEnd="url(#ar3)"/>

      <rect x="90" y="70" width="180" height="36" rx="5" fill="#c8372d"/>
      <text x="180" y="87" textAnchor="middle" fill="#faf8f3" fontSize="10" fontWeight="600">Step 1: Choose solution</text>
      <text x="180" y="99" textAnchor="middle" fill="#faf8f3" fontSize="8">Lite / Client / Trader / VSCU</text>

      <line x1="180" y1="106" x2="180" y2="130" stroke="#141311" strokeWidth="1.5" markerEnd="url(#ar3)"/>

      <rect x="90" y="135" width="180" height="36" rx="5" fill="#c8372d"/>
      <text x="180" y="152" textAnchor="middle" fill="#faf8f3" fontSize="10" fontWeight="600">Step 2: Register on iTax</text>
      <text x="180" y="164" textAnchor="middle" fill="#faf8f3" fontSize="8">Returns → eTIMS → submit</text>

      <line x1="180" y1="171" x2="180" y2="195" stroke="#141311" strokeWidth="1.5" markerEnd="url(#ar3)"/>

      <rect x="85" y="200" width="190" height="36" rx="5" fill="#c8372d"/>
      <text x="180" y="217" textAnchor="middle" fill="#faf8f3" fontSize="10" fontWeight="600">Step 3: KRA approves</text>
      <text x="180" y="229" textAnchor="middle" fill="#faf8f3" fontSize="8">1–3 working days</text>

      <line x1="180" y1="236" x2="180" y2="260" stroke="#141311" strokeWidth="1.5" markerEnd="url(#ar3)"/>

      <rect x="70" y="265" width="220" height="36" rx="5" fill="#c8372d"/>
      <text x="180" y="282" textAnchor="middle" fill="#faf8f3" fontSize="10" fontWeight="600">Step 4: Set up account</text>
      <text x="180" y="294" textAnchor="middle" fill="#faf8f3" fontSize="8">etims.kra.go.ke → products → customers</text>

      <line x1="180" y1="301" x2="180" y2="325" stroke="#141311" strokeWidth="1.5" markerEnd="url(#ar3)"/>

      <rect x="85" y="330" width="190" height="32" rx="16" fill="#1b2a3b"/>
      <text x="180" y="350" textAnchor="middle" fill="#faf8f3" fontSize="11" fontWeight="600">Issue first invoice</text>
    </svg>
  )
}

export function TCCProcessFlow() {
  return (
    <svg viewBox="0 0 360 460" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tax Compliance Certificate application process flowchart - decision tree from returns status through ledger check to TCC issued">
      <defs>
        <marker id="ar4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#141311"/>
        </marker>
        <marker id="ar4g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#6b6759"/>
        </marker>
      </defs>

      <rect x="85" y="10" width="190" height="32" rx="16" fill="#1b2a3b"/>
      <text x="180" y="30" textAnchor="middle" fill="#faf8f3" fontSize="11" fontWeight="600">TCC Application</text>

      <line x1="180" y1="42" x2="180" y2="64" stroke="#141311" strokeWidth="1.5" markerEnd="url(#ar4)"/>

      <polygon points="180,68 260,90 180,112 100,90" fill="#fffbf0" stroke="#b07a00" strokeWidth="1.5"/>
      <text x="180" y="86" textAnchor="middle" fill="#7a5500" fontSize="9" fontWeight="700">All returns</text>
      <text x="180" y="98" textAnchor="middle" fill="#7a5500" fontSize="9" fontWeight="700">filed?</text>

      <line x1="100" y1="90" x2="60" y2="90" stroke="#6b6759" strokeWidth="1.5"/>
      <line x1="60" y1="90" x2="60" y2="130" stroke="#6b6759" strokeWidth="1.5" markerEnd="url(#ar4g)"/>
      <text x="83" y="84" textAnchor="middle" fill="#6b6759" fontSize="9">No</text>

      <rect x="15" y="136" width="90" height="40" rx="5" fill="#c8372d"/>
      <text x="60" y="154" textAnchor="middle" fill="#faf8f3" fontSize="9" fontWeight="600">File outstanding</text>
      <text x="60" y="166" textAnchor="middle" fill="#faf8f3" fontSize="9">returns</text>

      <line x1="60" y1="176" x2="60" y2="210" stroke="#6b6759" strokeWidth="1.5"/>
      <line x1="60" y1="210" x2="180" y2="210" stroke="#6b6759" strokeWidth="1.5" strokeDasharray="3,2"/>
      <line x1="180" y1="112" x2="180" y2="210" stroke="#6b6759" strokeWidth="1.5" strokeDasharray="3,2"/>
      <polygon points="177,208 183,216 189,208" fill="#6b6759"/>

      <text x="195" y="206" fill="#6b6759" fontSize="9">Yes</text>

      <polygon points="180,214 260,236 180,258 100,236" fill="#fffbf0" stroke="#b07a00" strokeWidth="1.5"/>
      <text x="180" y="232" textAnchor="middle" fill="#7a5500" fontSize="9" fontWeight="700">Ledger</text>
      <text x="180" y="244" textAnchor="middle" fill="#7a5500" fontSize="9" fontWeight="700">clear?</text>

      <line x1="100" y1="236" x2="60" y2="236" stroke="#6b6759" strokeWidth="1.5"/>
      <line x1="60" y1="236" x2="60" y2="280" stroke="#6b6759" strokeWidth="1.5" markerEnd="url(#ar4g)"/>
      <text x="83" y="230" textAnchor="middle" fill="#6b6759" fontSize="9">No</text>

      <rect x="10" y="286" width="100" height="40" rx="5" fill="#c8372d"/>
      <text x="60" y="304" textAnchor="middle" fill="#faf8f3" fontSize="9" fontWeight="600">Pay outstanding</text>
      <text x="60" y="316" textAnchor="middle" fill="#faf8f3" fontSize="9">tax</text>

      <line x1="60" y1="326" x2="60" y2="356" stroke="#6b6759" strokeWidth="1.5"/>
      <line x1="60" y1="356" x2="180" y2="356" stroke="#6b6759" strokeWidth="1.5" strokeDasharray="3,2"/>
      <line x1="180" y1="258" x2="180" y2="356" stroke="#6b6759" strokeWidth="1.5" strokeDasharray="3,2"/>
      <polygon points="177,354 183,362 189,354" fill="#6b6759"/>

      <text x="196" y="352" fill="#6b6759" fontSize="9">Yes</text>

      <rect x="100" y="362" width="160" height="34" rx="5" fill="#c8372d"/>
      <text x="180" y="383" textAnchor="middle" fill="#faf8f3" fontSize="10" fontWeight="600">Apply for TCC on iTax</text>

      <line x1="180" y1="396" x2="180" y2="418" stroke="#141311" strokeWidth="1.5" markerEnd="url(#ar4)"/>

      <rect x="100" y="424" width="160" height="32" rx="16" fill="#1b2a3b"/>
      <text x="180" y="444" textAnchor="middle" fill="#faf8f3" fontSize="10" fontWeight="600">TCC Issued</text>
    </svg>
  )
}

export function AmnestyEligibilityFlow() {
  return (
    <svg viewBox="0 0 360 480" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="KRA tax amnesty 2026 eligibility flowchart - three paths to qualify for the penalty and interest waiver">
      <defs>
        <marker id="ar5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#141311"/>
        </marker>
        <marker id="ar5g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#6b6759"/>
        </marker>
      </defs>

      <rect x="65" y="10" width="230" height="32" rx="16" fill="#1b2a3b"/>
      <text x="180" y="30" textAnchor="middle" fill="#faf8f3" fontSize="11" fontWeight="600">Amnesty Eligibility Check</text>

      <line x1="180" y1="42" x2="180" y2="66" stroke="#141311" strokeWidth="1.5" markerEnd="url(#ar5)"/>

      <polygon points="180,70 260,92 180,114 100,92" fill="#fffbf0" stroke="#b07a00" strokeWidth="1.5"/>
      <text x="180" y="88" textAnchor="middle" fill="#7a5500" fontSize="9" fontWeight="700">Pre-2026 tax</text>
      <text x="180" y="100" textAnchor="middle" fill="#7a5500" fontSize="9" fontWeight="700">debt?</text>

      <line x1="100" y1="92" x2="60" y2="92" stroke="#6b6759" strokeWidth="1.5"/>
      <line x1="60" y1="92" x2="60" y2="130" stroke="#6b6759" strokeWidth="1.5" markerEnd="url(#ar5g)"/>
      <text x="83" y="86" textAnchor="middle" fill="#6b6759" fontSize="9">No</text>

      <rect x="10" y="136" width="100" height="32" rx="4" fill="#6b6759"/>
      <text x="60" y="156" textAnchor="middle" fill="#faf8f3" fontSize="10" fontWeight="600">Not eligible</text>

      <line x1="180" y1="114" x2="180" y2="138" stroke="#141311" strokeWidth="1.5"/>
      <text x="190" y="128" fill="#6b6759" fontSize="9">Yes</text>

      <polygon points="180,142 260,164 180,186 100,164" fill="#fffbf0" stroke="#b07a00" strokeWidth="1.5"/>
      <text x="180" y="160" textAnchor="middle" fill="#7a5500" fontSize="9" fontWeight="700">Principal</text>
      <text x="180" y="172" textAnchor="middle" fill="#7a5500" fontSize="9" fontWeight="700">paid?</text>

      <line x1="260" y1="164" x2="300" y2="164" stroke="#6b6759" strokeWidth="1.5"/>
      <line x1="300" y1="164" x2="300" y2="220" stroke="#6b6759" strokeWidth="1.5" markerEnd="url(#ar5g)"/>
      <text x="283" y="158" textAnchor="middle" fill="#6b6759" fontSize="9">Yes</text>

      <rect x="245" y="226" width="110" height="36" rx="18" fill="#1b6b3a"/>
      <text x="300" y="242" textAnchor="middle" fill="#faf8f3" fontSize="9" fontWeight="600">Automatic</text>
      <text x="300" y="254" textAnchor="middle" fill="#faf8f3" fontSize="9">waiver</text>

      <line x1="180" y1="186" x2="180" y2="220" stroke="#141311" strokeWidth="1.5"/>
      <text x="190" y="208" fill="#6b6759" fontSize="9">No</text>

      <polygon points="180,224 260,246 180,268 100,246" fill="#fffbf0" stroke="#b07a00" strokeWidth="1.5"/>
      <text x="180" y="240" textAnchor="middle" fill="#7a5500" fontSize="8" fontWeight="700">Only late filing</text>
      <text x="180" y="252" textAnchor="middle" fill="#7a5500" fontSize="8" fontWeight="700">penalties?</text>

      <line x1="260" y1="246" x2="300" y2="246" stroke="#6b6759" strokeWidth="1.5"/>
      <line x1="300" y1="246" x2="300" y2="270" stroke="#6b6759" strokeWidth="1.5" markerEnd="url(#ar5g)"/>

      <rect x="250" y="276" width="100" height="36" rx="18" fill="#1b6b3a"/>
      <text x="300" y="294" textAnchor="middle" fill="#faf8f3" fontSize="9" fontWeight="600">File returns</text>
      <text x="300" y="306" textAnchor="middle" fill="#faf8f3" fontSize="9">→ waiver</text>

      <line x1="100" y1="246" x2="60" y2="246" stroke="#6b6759" strokeWidth="1.5"/>
      <text x="83" y="240" textAnchor="middle" fill="#6b6759" fontSize="9">No</text>

      <rect x="5" y="270" width="110" height="36" rx="5" fill="#c8372d"/>
      <text x="60" y="286" textAnchor="middle" fill="#faf8f3" fontSize="9" fontWeight="600">Pay principal</text>
      <text x="60" y="298" textAnchor="middle" fill="#faf8f3" fontSize="9">by Dec 31</text>

      <line x1="5" y1="288" x2="5" y2="340" stroke="#6b6759" strokeWidth="1"/>
      <line x1="5" y1="340" x2="180" y2="340" stroke="#6b6759" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="110" y1="306" x2="110" y2="370" stroke="#6b6759" strokeWidth="1"/>
      <line x1="110" y1="370" x2="180" y2="370" stroke="#6b6759" strokeWidth="1" strokeDasharray="3,2"/>

      <rect x="5" y="344" width="110" height="36" rx="5" fill="#c8372d"/>
      <text x="60" y="360" textAnchor="middle" fill="#faf8f3" fontSize="9" fontWeight="600">Payment plan</text>
      <text x="60" y="372" textAnchor="middle" fill="#faf8f3" fontSize="9">on iTax</text>

      <line x1="60" y1="380" x2="60" y2="410" stroke="#141311" strokeWidth="1.5"/>
      <line x1="60" y1="410" x2="180" y2="410" stroke="#141311" strokeWidth="1.5" markerEnd="url(#ar5)"/>

      <rect x="105" y="380" width="150" height="32" rx="5" fill="#c8372d"/>
      <text x="180" y="400" textAnchor="middle" fill="#faf8f3" fontSize="10" fontWeight="600">Lump sum payment</text>

      <rect x="110" y="416" width="140" height="32" rx="16" fill="#1b2a3b"/>
      <text x="180" y="436" textAnchor="middle" fill="#faf8f3" fontSize="10" fontWeight="600">Waiver applied</text>
    </svg>
  )
}
