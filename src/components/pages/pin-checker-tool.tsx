import { useState } from "react"
import { ArrowRight, CheckCircle, ShieldCheck, MagnifyingGlass, Warning } from "@phosphor-icons/react/dist/ssr"
import { FACTS } from "@/src/lib/vat-facts"

const WA_BASE = "https://wa.me/254717344440"

export default function PinCheckerTool() {
  const [pin, setPin] = useState("")
  const [result, setResult] = useState<{ checked: boolean; valid: boolean; type?: string; message?: string } | null>(null)

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault()
    const cleaned = pin.trim().toUpperCase()
    const regex = /^[A|P][0-9]{9}[A-Z]$/
    
    if (!cleaned) {
      setResult(null)
      return
    }

    const isValid = regex.test(cleaned)
    const type = cleaned.startsWith("A") ? "Individual / Sole Proprietor" : cleaned.startsWith("P") ? "Corporate / Company" : "Unknown"

    setResult({
      checked: true,
      valid: isValid,
      type: isValid ? type : undefined,
      message: isValid 
        ? `Valid KRA PIN format detected (${type}). Ready for iTax filing & eTIMS onboarding.` 
        : `Invalid PIN format. KRA PINs must start with A or P followed by 9 digits and a letter (e.g. A000000001Z).`
    })
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <span className="font-mono text-[0.65rem] uppercase tracking-widest bg-brand/10 text-brand px-3 py-1 rounded-sm mb-4 inline-block">
          Free KRA Tool
        </span>
        <h1 className="font-display text-3xl lg:text-4xl font-semibold text-ink tracking-tight mb-4">
          Instant KRA PIN Format & Status Checker
        </h1>
        <p className="text-ink-muted text-base max-w-xl mx-auto leading-relaxed">
          Verify any Kenyan individual or corporate KRA PIN instantly. Ensure supplier and client PINs are valid before issuing eTIMS invoices or claiming input VAT.
        </p>
        <p className="font-mono text-[0.7rem] text-brand mt-4">
          Last verified {new Date(FACTS.lastVerified).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} against KRA guidance
        </p>
      </div>

      <div className="bg-canvas border border-hairline rounded-xl p-8 shadow-sm mb-12">
        <form onSubmit={handleCheck} className="space-y-6">
          <div>
            <label htmlFor="pin-input" className="block text-sm font-medium text-ink mb-2">
              Enter KRA PIN (e.g. A000000001Z or P051234567Y)
            </label>
            <div className="relative">
              <input
                id="pin-input"
                type="text"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="e.g. A008006333J"
                className="w-full bg-canvas-alt border border-hairline rounded-lg px-4 py-3.5 text-ink font-mono text-lg uppercase focus:outline-none focus:border-brand transition-colors"
                maxLength={11}
              />
                <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-brand text-canvas font-semibold px-6 rounded-md hover:bg-brand-hover transition-colors flex items-center gap-2 text-sm"
              >
                <MagnifyingGlass size={16} weight="bold" /> Check PIN
              </button>
            </div>
          </div>
        </form>

        {result && (
          <div className={`mt-8 p-6 rounded-lg border ${result.valid ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800'}`}>
            <div className="flex items-start gap-3">
              {result.valid ? (
                <CheckCircle size={22} weight="fill" className="text-green-600 shrink-0 mt-0.5" />
              ) : (
                <Warning size={22} weight="fill" className="text-red-600 shrink-0 mt-0.5" />
              )}
              <div>
                <p className={`font-semibold text-base ${result.valid ? 'text-green-900 dark:text-green-300' : 'text-red-900 dark:text-red-300'}`}>
                  {result.valid ? 'PIN Format Valid' : 'Invalid PIN Format'}
                </p>
                <p className={`text-sm mt-1 leading-relaxed ${result.valid ? 'text-green-700 dark:text-green-200' : 'text-red-700 dark:text-red-200'}`}>
                  {result.message}
                </p>
              </div>
            </div>

            {result.valid && (
              <div className="mt-6 pt-6 border-t border-green-200 dark:border-green-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-green-800 dark:text-green-300">
                  Need a live verification (Active status check & TCC lookup) via our KRA-registered agent portal?
                </p>
                <a
                  href={`${WA_BASE}?text=Hi%2C%20I%20want%20to%20verify%20live%20status%20for%20KRA%20PIN%3A%20${encodeURIComponent(pin.trim().toUpperCase())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-fill shrink-0 inline-flex items-center gap-2 bg-brand text-canvas text-xs font-semibold px-4 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
                >
                  Verify Live on WhatsApp <ArrowRight size={13} weight="bold" />
                </a>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="border border-hairline rounded-xl p-6 bg-canvas-alt text-sm text-ink-muted leading-relaxed space-y-3">
        <p className="font-semibold text-ink">Why KRA PIN verification matters:</p>
        <p>
          Under KRA's 2026 validation engine, claiming input VAT on invoices from suppliers with unverified or inactive PINs results in automatic claim rejection. Always check format and live status before booking B2B expenses.
        </p>
      </div>
    </div>
  )
}