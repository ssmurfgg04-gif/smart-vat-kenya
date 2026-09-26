"use client"

import { useState } from "react"
import { ShareNetwork, Copy, Check, ChatsCircle } from "@phosphor-icons/react/dist/ssr"
import { waShare } from "@/src/lib/whatsapp"
import { track } from "@/src/lib/analytics"

interface ShareResultProps {
  /** Result summary shared as the WhatsApp/copy message. */
  resultText: string
  /** Compact style fits inside calculator result panels. */
  compact?: boolean
}

// "Share my result" layer: WhatsApp + copy link. The result is something
// worth sending to an accountant or business partner - the viral loop.
export function ShareResult({ resultText, compact = false }: ShareResultProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    const url = location.origin + location.pathname
    const full = `${resultText}\n${url}\nCalculated with SmartVAT Kenya`
    try {
      await navigator.clipboard.writeText(full)
    } catch {
      const ta = document.createElement("textarea")
      ta.value = full
      document.body.appendChild(ta)
      ta.select()
      document.execCommand("copy")
      ta.remove()
    }
    setCopied(true)
    track("copy_result", { tool: resultText.slice(0, 40) })
    setTimeout(() => setCopied(false), 2200)
  }

  function handleShare() {
    track("share_result", { via: "whatsapp" })
    const url = location.origin + location.pathname
    window.open(
      waShare(`${resultText}\n${url}\nCalculated with SmartVAT Kenya`),
      "_blank",
      "noopener,noreferrer",
    )
  }

  async function handleNative() {
    track("share_result", { via: "native" })
    const url = location.origin + location.pathname
    if (navigator.share) {
      try {
        await navigator.share({ title: "My SmartVAT Kenya result", text: resultText, url })
        return
      } catch {
        /* user dismissed */
      }
    }
    handleShare()
  }

  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-muted">Share result</span>
        <button onClick={handleShare} className="inline-flex items-center gap-1.5 bg-[#128C7E] hover:bg-[#0e6d5c] text-white text-[0.72rem] font-semibold px-3 py-1.5 rounded-full transition-colors active:scale-[0.98]">
          <ChatsCircle size={12} weight="fill" aria-hidden="true" /> WhatsApp
        </button>
        <button onClick={handleCopy} className="inline-flex items-center gap-1.5 border border-hairline text-ink-muted hover:text-ink hover:border-ink-muted text-[0.72rem] font-medium px-3 py-1.5 rounded-full transition-colors active:scale-[0.98]">
          {copied ? <Check size={12} weight="bold" aria-hidden="true" /> : <Copy size={12} aria-hidden="true" />}
          {copied ? "Copied" : "Copy result"}
        </button>
      </div>
    )
  }

  return (
    <div className="border border-hairline rounded-lg p-4 bg-canvas-alt">
      <p className="flex items-center gap-2 text-[0.82rem] font-semibold text-ink mb-3">
        <ShareNetwork size={14} weight="duotone" className="text-brand" aria-hidden="true" />
        Found this useful? Send it to your accountant or business partner
      </p>
      <div className="flex flex-wrap gap-2">
        <button onClick={handleShare} className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#0e6d5c] text-white text-[0.8rem] font-semibold px-4 py-2.5 rounded-md transition-colors active:scale-[0.98]">
          <ChatsCircle size={14} weight="fill" aria-hidden="true" /> Share on WhatsApp
        </button>
        <button onClick={handleNative} className="inline-flex items-center gap-2 border border-hairline text-ink text-[0.8rem] font-medium px-4 py-2.5 rounded-md hover:border-ink-muted transition-colors active:scale-[0.98]">
          <ShareNetwork size={14} aria-hidden="true" /> More options
        </button>
        <button onClick={handleCopy} className="inline-flex items-center gap-2 border border-hairline text-ink-muted hover:text-ink hover:border-ink-muted text-[0.8rem] font-medium px-4 py-2.5 rounded-md transition-colors active:scale-[0.98]">
          {copied ? <Check size={14} weight="bold" aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
          {copied ? "Copied to clipboard" : "Copy result + link"}
        </button>
      </div>
      <p className="text-[0.7rem] text-ink-muted mt-2.5">No sign-up, nothing stored - the message opens in your own WhatsApp.</p>
    </div>
  )
}
