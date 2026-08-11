import { createCipheriv, createDecipheriv, randomBytes, createHash } from "node:crypto"

/**
 * Secret handling for eTIMS OSCU.
 *
 * The cmcKey (communication key) is issued once and never rotated. Losing it
 * means timsupport@kra.go.ke de-registration. We therefore:
 *   - encrypt at rest with AES-256-GCM (master key from env MASTER_ENC_KEY)
 *   - never log it (the redacting logger treats `cmcKey` as secret)
 *   - expose a plaintext only for the duration of a call, in memory
 */

export function encryptSecret(plaintext: string, masterKeyHex: string): string {
  const key = Buffer.from(masterKeyHex, "hex")
  if (key.length !== 32) throw new Error("MASTER_ENC_KEY must be 32 bytes as hex")
  const iv = randomBytes(12)
  const cipher = createCipheriv("aes-256-gcm", key, iv)
  const enc = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()])
  const tag = cipher.getAuthTag()
  return `${iv.toString("hex")}:${tag.toString("hex")}:${enc.toString("hex")}`
}

export function decryptSecret(payload: string, masterKeyHex: string): string {
  const key = Buffer.from(masterKeyHex, "hex")
  if (key.length !== 32) throw new Error("MASTER_ENC_KEY must be 32 bytes as hex")
  const [ivHex, tagHex, dataHex] = payload.split(":")
  if (!ivHex || !tagHex || !dataHex) throw new Error("Malformed encrypted secret")
  const decipher = createDecipheriv("aes-256-gcm", key, Buffer.from(ivHex, "hex"))
  decipher.setAuthTag(Buffer.from(tagHex, "hex"))
  return Buffer.concat([
    decipher.update(Buffer.from(dataHex, "hex")),
    decipher.final(),
  ]).toString("utf8")
}

/**
 * OSCU payload signature per KRA OSCU spec: the data is AES-256-encrypted using
 * the cmcKey as the key material, then the payload envelope carries the result.
 *
 * NOTE: KRA's OSCU spec v2.0 defines the exact envelope field names and key
 * derivation. The implementation below follows the widely-documented pattern
 * (cmcKey = 32-byte key). Before going live, diff against your approved
 * sandbox app's Postman collection — field names have changed before.
 */
export interface OscuEnvelope {
  data: string
  signature: string
}

export function signAndEncryptOscuPayload(
  payload: object,
  cmcKey: string,
): OscuEnvelope {
  const json = JSON.stringify(payload)
  const key = Buffer.from(cmcKey, "hex")
  if (key.length !== 32) throw new Error("cmcKey must be 32 bytes as hex for OSCU AES-256")
  const iv = randomBytes(16)
  const cipher = createCipheriv("aes-256-cbc", key, iv)
  const enc = Buffer.concat([cipher.update(json, "utf8"), cipher.final()])
  const data = `${iv.toString("hex")}${enc.toString("hex")}`
  const signature = createHash("sha256").update(data).digest("hex")
  return { data, signature }
}

export function decryptOscuEnvelope(envelope: OscuEnvelope, cmcKey: string): string {
  const key = Buffer.from(cmcKey, "hex")
  const iv = Buffer.from(envelope.data.slice(0, 32), "hex")
  const ciphertext = Buffer.from(envelope.data.slice(32), "hex")
  const decipher = createDecipheriv("aes-256-cbc", key, iv)
  return Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString("utf8")
}
