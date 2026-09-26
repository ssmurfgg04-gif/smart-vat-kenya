import { Messenger, WaMessage, WaSendResult } from "./whatsapp.js"
import { HttpTransport, createFetchTransport } from "./transport.js"

/**
 * WhatsApp Cloud API transport (Meta). A real `Messenger` implementation that
 * POSTs to the WhatsApp Graph API `messages` endpoint. Credentials are injected;
 * the HTTP I/O goes through the injectable `HttpTransport` so it is testable
 * offline.
 */

export interface WhatsAppTransportConfig {
  /** Meta sender phone-number id (e.g. "10511223344"). */
  from: string
  accessToken: string
  apiVersion?: string
  baseUrl?: string
  transport?: HttpTransport
}

const DEFAULT_HOST = "https://graph.facebook.com"

export function createWhatsAppMessenger(cfg: WhatsAppTransportConfig): Messenger {
  const base = cfg.baseUrl ?? `${DEFAULT_HOST}/${cfg.apiVersion ?? "v19.0"}`
  const http = cfg.transport ?? defaultFetch()
  return {
    async send(msg: WaMessage): Promise<WaSendResult> {
      const to = msg.to.replace(/^\+/, "")
      const res = await http.request({
        url: `${base}/${cfg.from}/messages`,
        method: "POST",
        headers: { Authorization: `Bearer ${cfg.accessToken}` },
        body: {
          messaging_product: "whatsapp",
          to,
          type: "text",
          text: { body: msg.body },
        },
      })
      if (res.status !== 200) {
        throw new WhatsAppError(`WhatsApp request failed (${res.status})`, res.status, res.body)
      }
      const id = (res.body as { messages?: Array<{ id?: string }> })?.messages?.[0]?.id
      return { messageId: id ?? `wa_${Date.now().toString(36)}`, to, sentAt: new Date().toISOString() }
    },
  }
}

/** Active transport: real fetch when none is injected. */
export function defaultFetch(): HttpTransport {
  return createFetchTransport()
}

export class WhatsAppError extends Error {
  constructor(
    message: string,
    readonly status?: number,
    readonly body?: unknown,
  ) {
    super(message)
    this.name = "WhatsAppError"
  }
}