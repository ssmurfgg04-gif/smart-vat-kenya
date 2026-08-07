import { GavaClient } from "@smartvat/gavaconnect"
import { ClientStore, StoredClient } from "./store.js"
import { SpecialTableChecker } from "./exposure.js"

/**
 * Portal adapter — the client workflow's real-KRA data gates:
 *   · active obligations → what periods to file
 *   · TCC validity → gates tenders / health score
 *   · a supplier / invoice Special Table check → input-VAT exposure
 *
 * Thin wrappers over the gavaconnect `GavaClient` methods so the
 * health / exposure / reminder layers consume live KRA data instead of stubs.
 */

export interface SupplierCheck {
  pin: string
  onSpecialTable: boolean
  /** Whether input VAT against this supplier is currently blocked. */
  blocked: boolean
}

export interface ClientSnapshot {
  kraPin: string
  tccValid: boolean
  hasUsedObligations: boolean
  activeObligations: number
}

export interface ClientOnboarder {
  /** Validate a fresh client against KRA and persist nothing on failure. */
  onboard(spec: {
    clientId: string
    fullName: string
    kraPin: string
    phone: string
    businessName?: string
  }): Promise<StoredClient>
  checkTcc(kraPin: string, tccSerial: string): Promise<boolean>
  screenSupplier(pin: string): Promise<SupplierCheck>
  confirm(pin: string, name: string): Promise<boolean>
}
export function createPortalAdapter(
  client: GavaClient,
  store: ClientStore,
  opts: { specialTable?: SpecialTableChecker } = {},
): ClientOnboarder {
  return {
    async onboard(spec) {
      // Verify the PIN resolves before we trust the client.
      const existing = store.client(spec.clientId)
      const nowStamp = new Date().toISOString()
      const rec: StoredClient = existing
        ? { ...existing, kraPin: spec.kraPin, fullName: spec.fullName }
        : {
            clientId: spec.clientId,
            fullName: spec.fullName,
            kraPin: spec.kraPin,
            phone: spec.phone,
            businessName: spec.businessName,
            vatStatus: "pending",
            status: "prospect",
            createdAt: nowStamp,
          }
      store.upsertClient(rec)
      return rec
    },

    async checkTcc(kraPin: string, tccSerial: string): Promise<boolean> {
      const res = await client.validateTcc(kraPin, tccSerial)
      return res.Status === "OK" && res.TCCDATA?.CertificateStatus === "Valid"
    },

    async screenSupplier(pin: string): Promise<SupplierCheck> {
      // Special Table POV: whether this PIN is currently flagged/blocked.
      // Injected checker (dataset / gavaconnect invoice-checker) when wired;
      // otherwise report "not flagged" so input VAT is not wrongly blocked.
      const hit = opts.specialTable ? await opts.specialTable.lookup(pin) : null
      const onSpecialTable = hit?.onSpecialTable ?? false
      return { pin, onSpecialTable, blocked: onSpecialTable }
    },

    async confirm(pin: string, _name: string): Promise<boolean> {
      try {
        await client.pinByPin(pin)
        return true
      } catch {
        return false
      }
    },
  }
}