import { LlmPort, LlmAnswer, Rule } from "./intel.js"
import { HttpTransport, createFetchTransport } from "./transport.js"

/**
 * Remote LLM provider, OpenAI-compatible (OpenAI, Azure, Together, Ollama,
 * local vLLM...). Sends the retrieved rule context as the system message so the
 * answer is grounded in the KB. Fallback behaviour is intentionally the same as
 * `localFallbackLlm` - retrieve first, this completes the loop.
 */

export interface RemoteLlmConfig {
  apiKey: string
  model: string
  baseUrl?: string
  temperature?: number
  maxTokens?: number
  transport?: HttpTransport
}

const DEFAULT_BASE = "https://api.openai.com/v1"

export function createRemoteLlm(cfg: RemoteLlmConfig): LlmPort {
  const base = cfg.baseUrl ?? DEFAULT_BASE
  const http = cfg.transport ?? createFetchTransport()

  return {
    async complete(query: string, context: Rule[]): Promise<LlmAnswer> {
      const system = [
        "You are the SmartVAT KRA compliance assistant.",
        "Answer using ONLY the supplied KRA rules.",
        "If the rules don't answer the question, say so and suggest a general next step.",
      ].join("\n")
      const rulesText = context.map((r, i) => `[${i + 1}] ${r.title} -- ${r.body}`).join("\n")

      const res = await http.request({
        url: `${base}/chat/completions`,
        method: "POST",
        headers: { Authorization: `Bearer ${cfg.apiKey}` },
        body: {
          model: cfg.model,
          temperature: cfg.temperature ?? 0.2,
          max_tokens: cfg.maxTokens ?? 400,
          messages: [
            { role: "system", content: system },
            { role: "system", content: `Relevant KRA rules:\n${rulesText || "none matched"}` },
            { role: "user", content: query },
          ],
        },
      })
      if (res.status !== 200) throw new RemoteLlmError(`LLM request failed (${res.status})`, res.status, res.body)
      const content = (res.body as { choices?: Array<{ message?: { content?: string } }> })?.choices?.[0]?.message?.content
      if (!content) throw new RemoteLlmError("LLM returned no content", res.status, res.body)
      return { text: content, source: context.map((r) => r.id) }
    },
  }
}

export class RemoteLlmError extends Error {
  constructor(
    message: string,
    readonly status?: number,
    readonly body?: unknown,
  ) {
    super(message)
    this.name = "RemoteLlmError"
  }
}