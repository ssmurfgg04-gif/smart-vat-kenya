import { NextRequest, NextResponse } from "next/server"

const GEMINI_API_KEY = process.env.GEMINI_API_KEY

const SYSTEM_PROMPT = `You are a helpful AI assistant for Smart VAT Kenya, a service that helps Kenyan SMEs with KRA VAT compliance. Answer questions about:

- VAT registration in Kenya (threshold: KES 5 million, fee: KES 5,000, takes 1-3 working days)
- Monthly VAT filing (deadline: 20th of month, fee: KES 3,500/month)
- KRA penalties (KES 10,000 + 5% of tax due + 1%/month interest)
- VAT rate (16% standard, zero-rated for exports/food/medical, exempt for financial services/education/rent)
- eTIMS requirements
- KRA iTax portal (itax.kra.go.ke)
- M-PESA Paybill 572572 for VAT payments
- Penalty waiver applications (KES 4,000)

Be concise, use Kenyan context (KES, M-PESA, KRA, iTax), and suggest contacting their WhatsApp (+254 721 725 958) for personalized help.

If asked about anything outside Kenyan VAT, politely redirect. Keep answers under 150 words.`

async function queryGemini(message: string): Promise<string> {
  if (!GEMINI_API_KEY) throw new Error("GEMINI_API_KEY not configured")

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: `${SYSTEM_PROMPT}\n\nUser question: ${message}` }],
          },
        ],
        generationConfig: { temperature: 0.3, maxOutputTokens: 300 },
      }),
    }
  )

  if (!res.ok) throw new Error(`Gemini API error: ${res.status}`)

  const data = await res.json()
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm not sure about that. Please contact our team on WhatsApp for accurate advice."
}

const fallbackReplies: Record<string, string> = {
  threshold: "The VAT registration threshold in Kenya is KES 5 million in annual taxable turnover. If your business exceeds this, registration is mandatory. Below this threshold, voluntary registration is optional.",
  penalty: "Late VAT filing in Kenya attracts: (1) KES 10,000 fixed penalty, (2) 5% of the tax due, (3) 1% interest per month. We can help apply for a penalty waiver for KES 4,000.",
  calculate: "To calculate 16% VAT in Kenya:\n- VAT-inclusive price ÷ 1.16 = exclusive price\n- Exclusive price × 0.16 = VAT amount\n- Exclusive price × 1.16 = VAT-inclusive total\nTry our free calculator at /tools.",
  documents: "For KRA VAT registration you need: KRA PIN, national ID or passport, business registration certificate (if registered), bank account details, and proof of business address.",
}

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()
    if (!message?.trim()) {
      return NextResponse.json({ reply: "Please ask a question about Kenya VAT." })
    }

    const q = message.toLowerCase()

    if (GEMINI_API_KEY) {
      const reply = await queryGemini(message)
      return NextResponse.json({ reply })
    }

    if (q.includes("threshold") || q.includes("5 million") || q.includes("when to register")) {
      return NextResponse.json({ reply: fallbackReplies.threshold })
    }
    if (q.includes("penalty") || q.includes("late") || q.includes("waiver")) {
      return NextResponse.json({ reply: fallbackReplies.penalty })
    }
    if (q.includes("calculat") || q.includes("16%") || q.includes("formula")) {
      return NextResponse.json({ reply: fallbackReplies.calculate })
    }
    if (q.includes("document") || q.includes("requirement") || q.includes("need")) {
      return NextResponse.json({ reply: fallbackReplies.documents })
    }

    return NextResponse.json({
      reply: "I'm here to help with Kenya VAT questions. Try asking about registration, filing, penalties, or calculation. For personalized help, reach out on WhatsApp at +254 721 725 958.",
    })
  } catch {
    return NextResponse.json({
      reply: "Sorry, I'm having trouble right now. Please reach out via WhatsApp at +254 721 725 958 for immediate assistance.",
    })
  }
}
