/**
 * HTTP transport - a tiny port so external SaaS transports (WhatsApp Cloud,
 * M-PESA Daraja, an LLM provider) can be exercised offline and mocked in tests.
 * The real Node implementation uses fetch; tests inject a fake.
 */

export interface HttpRequest {
  url: string
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
  headers?: Record<string, string>
  body?: unknown
}

export interface HttpResponse {
  status: number
  body: unknown
}

export interface HttpTransport {
  request(req: HttpRequest): Promise<HttpResponse>
}

/** Real transport using global fetch (Node 18+). Keeps byte handling local. */
export function createFetchTransport(fetchImpl: typeof fetch = globalThis.fetch): HttpTransport {
  return {
    async request(req) {
      const res = await fetchImpl(req.url, {
        method: req.method,
        headers: {
          "Content-Type": "application/json",
          ...(req.headers ?? {}),
        },
        body: req.body === undefined ? undefined : JSON.stringify(req.body),
      })
      const text = await res.text()
      let body: unknown = text
      try {
        body = text ? JSON.parse(text) : undefined
      } catch {
        body = text
      }
      return { status: res.status, body }
    },
  }
}

/** A recorded request, exactly as the transport performed it. */
export interface RecordedCall {
  url: string
  method: string
  headers?: Record<string, string>
  body?: unknown
}

/** A scripted fake for tests; routes URL shapes to canned responses. */
export function createScriptedTransport(
  script: Array<{ url: string; status?: number; body: unknown }>,
  calls: RecordedCall[] = [],
): HttpTransport {
  return {
    async request(req) {
      calls.push({ url: req.url, method: req.method, headers: req.headers, body: req.body })
      const hit = script.find((r) => req.url.includes(r.url))
      if (!hit) return { status: 404, body: { error: "no scripted route" } }
      return { status: hit.status ?? 200, body: hit.body }
    },
  }
}