/** Minimal TTL cache — used for OAuth tokens and hot checker responses. */

export interface CacheOptions {
  /** Time-to-live in ms. */
  ttlMs: number
  /** Monotonic now() for deterministic tests. Defaults to Date.now(). */
  now?: () => number
}

interface Entry<T> {
  value: T
  expiresAt: number
}

export class TtlCache<T> {
  private readonly store = new Map<string, Entry<T>>()
  private readonly ttlMs: number
  private readonly now: () => number

  constructor(opts: CacheOptions) {
    this.ttlMs = opts.ttlMs
    this.now = opts.now ?? (() => Date.now())
  }

  get(key: string): T | undefined {
    const e = this.store.get(key)
    if (!e) return undefined
    if (this.now() >= e.expiresAt) {
      this.store.delete(key)
      return undefined
    }
    return e.value
  }

  set(key: string, value: T): void {
    this.store.set(key, { value, expiresAt: this.now() + this.ttlMs })
  }

  /** get-or-set with a producer. */
  async getOrSet(
    key: string,
    producer: () => Promise<T>,
    ttlMs?: number,
  ): Promise<T> {
    if (ttlMs === undefined) {
      const hit = this.get(key)
      if (hit !== undefined) return hit
    }
    const value = await producer()
    if (ttlMs === undefined) this.set(key, value)
    else {
      const e = this.store.get(key)
      this.store.set(key, { value, expiresAt: this.now() + (ttlMs ?? this.ttlMs) })
      void e
    }
    return value
  }

  delete(key: string): void {
    this.store.delete(key)
  }

  clear(): void {
    this.store.clear()
  }

  get size(): number {
    return this.store.size
  }
}