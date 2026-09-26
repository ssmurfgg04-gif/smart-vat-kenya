"use client"

import { useState } from "react"
import { ThumbsUp, ThumbsDown, ChatsCircle } from "@phosphor-icons/react/dist/ssr"
import { waDirect } from "@/src/lib/whatsapp"
import { track } from "@/src/lib/analytics"

interface HelpfulWidgetProps {
  /** Where the widget sits, for analytics segmentation. */
  context: string
}

// "Was this helpful?" loop. A thumbs-down opens a direct line to WhatsApp
// with the page context pre-filled - real product intelligence, not vibes.
export function HelpfulWidget({ context }: HelpfulWidgetProps) {
  const [vote, setVote] = useState<"up" | "down" | null>(null)
  const [note, setNote] = useState("")

  function handleVote(v: "up" | "down") {
    setVote(v)
    track("helpful_vote", { vote: v, context })
  }

  // Guarded for Astro prerender: location exists only in the browser.
  const complaint =
    typeof location !== "undefined"
      ? encodeURIComponent(`Hi Smart VAT Kenya, I was on ${location.pathname} and I'm still stuck. ${note}`.trim())
      : ""

  return (
    <div className="border border-hairline rounded-lg p-4 bg-canvas-alt">
      {vote === null ? (
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-[0.82rem] font-medium text-ink">Was this helpful?</p>
          <button onClick={() => handleVote("up")} className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-ink-muted hover:text-ink border border-hairline hover:border-ink-muted px-3 py-1.5 rounded-full transition-colors">
            <ThumbsUp size={13} aria-hidden="true" /> Yes, solved it
          </button>
          <button onClick={() => handleVote("down")} className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-ink-muted hover:text-ink border border-hairline hover:border-ink-muted px-3 py-1.5 rounded-full transition-colors">
            <ThumbsDown size={13} aria-hidden="true" /> Still stuck
          </button>
        </div>
      ) : vote === "up" ? (
        <p className="text-[0.82rem] text-ink flex items-center gap-2">
          <ThumbsUp size={14} weight="fill" className="text-emerald-600" aria-hidden="true" />
          Great - glad this sorted it. If a colleague needs this, the share button above sends it in one tap.
        </p>
      ) : (
        <div className="space-y-3">
          <p className="text-[0.82rem] font-medium text-ink flex items-center gap-2">
            <ThumbsDown size={14} weight="fill" className="text-amber-600" aria-hidden="true" />
            Sorry about that. Tell us where you got stuck and a human will help you directly:
          </p>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={2}
            placeholder="e.g. The iTax field kept rejecting my PIN..."
            className="w-full text-[0.82rem] text-ink bg-canvas border border-hairline rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand resize-none"
          />
          <a
            href={`https://wa.me/254705467108?text=${complaint}`}
            target="_blank"
            rel="noopener noreferrer"
            data-track="wa-cta"
            data-cta-type="helpful-stuck"
            className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#0e6d5c] text-white text-[0.8rem] font-semibold px-4 py-2.5 rounded-md transition-colors"
          >
            <ChatsCircle size={14} weight="fill" aria-hidden="true" /> Get unstuck on WhatsApp
          </a>
        </div>
      )}
    </div>
  )
}
