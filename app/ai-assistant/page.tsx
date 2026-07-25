"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, PaperPlaneTilt, Spinner, Robot, WarningCircle } from "@phosphor-icons/react"

interface Message {
  role: "user" | "assistant"
  content: string
}

const sampleQuestions = [
  "What is the VAT registration threshold in Kenya?",
  "What happens if I file my VAT return late?",
  "How do I calculate 16% VAT from a price?",
  "What documents do I need for VAT registration?",
]

export default function AiAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm Smart VAT Kenya's AI assistant. Ask me anything about KRA VAT compliance, registration, filing, penalties, or eTIMS requirements for Kenyan businesses.",
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    const q = input.trim()
    if (!q || loading) return
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: q }])
    setLoading(true)

    try {
      const res = await fetch("/api/ai-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q }),
      })
      const data = await res.json()
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I'm having trouble connecting. Please try again or reach out via WhatsApp." },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-canvas min-h-[100dvh] flex flex-col">
      <div className="bg-canvas-dark px-6 lg:px-10 py-5">
        <div className="max-w-[1400px] mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[0.78rem] text-canvas/60 hover:text-canvas transition-colors mb-3"
          >
            <ArrowLeft size={13} aria-hidden="true" />
            Back to home
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center">
              <Robot size={20} className="text-brand" weight="fill" />
            </div>
            <div>
              <h1 className="font-display text-[clamp(1.1rem,2vw,1.5rem)] font-semibold text-canvas tracking-tight">
                AI VAT Assistant
              </h1>
              <p className="text-[0.78rem] text-canvas/55">Powered by GPT — answers about Kenya VAT</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full px-6 lg:px-10 py-8">
        <div className="flex-1 space-y-5 overflow-y-auto mb-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-xl px-5 py-3 text-[0.88rem] leading-relaxed ${
                  msg.role === "user"
                    ? "bg-ink text-canvas rounded-br-sm"
                    : "bg-canvas-dark text-canvas/90 rounded-bl-sm"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-canvas-dark rounded-xl rounded-bl-sm px-5 py-3 flex items-center gap-2 text-[0.82rem] text-canvas/60">
                <Spinner size={15} className="animate-spin" />
                Thinking...
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {messages.length === 1 && (
          <div className="mb-4">
            <p className="text-[0.72rem] text-ink-muted mb-3 font-mono uppercase tracking-wider">
              Try asking
            </p>
            <div className="flex flex-wrap gap-2">
              {sampleQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    setInput(q)
                  }}
                  className="text-[0.8rem] text-ink-muted border border-hairline rounded-full px-4 py-1.5 hover:border-brand/30 hover:text-brand transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="border border-hairline rounded-xl px-4 py-3 flex items-center gap-3 bg-canvas-dark/50">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about VAT registration, penalties, filing..."
            className="flex-1 bg-transparent text-[0.88rem] text-ink placeholder:text-ink-muted outline-none"
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-canvas disabled:opacity-40 hover:bg-brand/90 transition-colors shrink-0"
          >
            {loading ? <Spinner size={15} className="animate-spin" /> : <PaperPlaneTilt size={15} weight="fill" />}
          </button>
        </div>

        <p className="text-[0.68rem] text-ink-muted mt-3 text-center">
          This assistant provides general guidance based on public KRA information. For specific cases,{" "}
          <a
            href="https://wa.me/254721725958?text=Hi%2C%20I%20have%20a%20question%20about%20VAT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline underline-offset-2"
          >
            speak to our team on WhatsApp
          </a>
          .
        </p>
      </div>
    </div>
  )
}
