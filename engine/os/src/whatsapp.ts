/* ------------------------------------------------------------------ */
/* SmartVAT Client layer - WhatsApp messaging surface.                  */
/*                                                                      */
/* WhatsApp outbound/inbound is modeled as a message bus that an        */
/* operator (Meta WhatsApp Cloud API, Twilio, or a local test driver)   */
/* plugs into. No vendor SDK is hard-depended so the emails/portal can  */
/* be exercised offline and in tests.                                   */
/* ------------------------------------------------------------------ */

export interface WaMessage {
  /** Recipient; the E.164 number without + (e.g. 254712345678). */
  to: string
  /** Localized text (plain content). */
  body: string
  /** The client the message is scoped to. */
  clientId: string
}

export interface WaSendResult {
  messageId: string
  to: string
  sentAt: string
}

/** Outcome of a message send attempt. */
export interface WaTranscriptMin {
  messageId: string
  to: string
  delivered: boolean
}

/** Port: what an operator must implement to send WhatsApp. */
export interface Messenger {
  send(msg: WaMessage): Promise<WaSendResult>
}

/**
 * Deterministic, offline messenger used in tests and local dev. It returns a
 * synthetic message id and records the send so a transcript can be asserted.
 */
export function createInMemoryMessenger(store: WaTranscriptMin[] = []): Messenger {
  return {
    async send(msg: WaMessage): Promise<WaSendResult> {
      const result: WaSendResult = {
        messageId: `msg_${msg.clientId}_${msg.to}_${Date.now().toString(36)}`,
        to: msg.to,
        sentAt: new Date().toISOString(),
      }
      store.push({ messageId: result.messageId, to: msg.to, delivered: true })
      return result
    },
  }
}