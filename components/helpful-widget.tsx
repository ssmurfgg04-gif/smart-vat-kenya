import { useState } from "react"
import { ThumbsUp, ThumbsDown } from "@phosphor-icons/react/dist/ssr"
import { track } from "@/src/lib/analytics"

interface HelpfulWidgetProps {
  /** Where the widget sits, for analytics segmentation. */
  context: string
}

export function HelpfulWidget({ context }: HelpfulWidgetProps) {
  const [vote, setVote] = useState<"up" | "down" | null>(null)

  function handleVote(value: "up" | "down") {
    setVote(value)
    track("helpful_vote", { vote: value, context })
  }

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
          Great - glad this sorted it. Share the guide with a colleague who may find it useful.
        </p>
      ) : (
        <div className="space-y-3">
          <p className="text-[0.82rem] font-medium text-ink flex items-center gap-2">
            <ThumbsDown size={14} weight="fill" className="text-amber-600" aria-hidden="true" />
            Sorry about that. Tell us where you got stuck and a human will help you directly:
          </p>
          <a
            href="mailto:info@smartvatkenya.co.ke?subject=I%20need%20help%20with%20a%20KRA%20issue"
            className="inline-flex items-center gap-2 border border-hairline text-ink text-[0.8rem] font-semibold px-4 py-2.5 rounded-md hover:border-brand transition-colors"
          >
            Email our team
          </a>
        </div>
      )}
    </div>
  )
}
