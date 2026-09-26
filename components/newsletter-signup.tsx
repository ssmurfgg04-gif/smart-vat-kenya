"use client"

import { useState } from "react"
import type { FormEvent } from "react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    const form = e.target as HTMLFormElement
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true))
  }

  if (submitted) {
    return (
      <div className="border border-brand/30 bg-brand-muted rounded-lg p-6 text-center">
        <p className="font-semibold text-ink text-[0.95rem]">You're subscribed!</p>
        <p className="text-[0.85rem] text-ink-muted mt-1">We'll send Kenya VAT updates and deadline reminders straight to your inbox.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="newsletter"
      className="border border-hairline rounded-lg p-6"
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <p className="font-display text-[1rem] font-semibold text-ink mb-1">Get VAT Deadline Reminders</p>
      <p className="text-[0.83rem] text-ink-muted mb-4 leading-relaxed">
        Monthly email reminders before the 20th KRA deadline, plus new guide alerts and Kenya VAT updates.
      </p>
      <div className="flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 min-w-0 px-3 py-2.5 text-[0.88rem] border border-hairline rounded-md bg-canvas text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/30"
        />
        <button
          type="submit"
          className="shrink-0 bg-brand text-canvas font-semibold text-[0.85rem] px-4 py-2.5 rounded-md hover:bg-brand-hover transition-colors"
        >
          Subscribe
        </button>
      </div>
      <p className="text-[0.72rem] text-ink-muted/80 mt-2">No spam. Unsubscribe anytime.</p>
    </form>
  )
}
