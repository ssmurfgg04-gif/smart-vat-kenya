import { test } from "node:test"
import assert from "node:assert/strict"
import {
  buildKnowledgeBase,
  retrieve,
  TaxAssistant,
  evaluateRetrieval,
  DEFAULT_RULES,
} from "../intel.js"
import { LlmAnswer, LlmPort, Rule } from "../intel.js"
import { GoldenItem } from "../intel.js"

test("retrieve ranks the late-filing rule above that query", () => {
  const got = retrieve("What is the late filing penalty?", DEFAULT_RULES, 3)
  assert.ok(got.length > 0)
  assert.equal(got[0]!.id, "late-vat-filing-penalty")
})

test("retrieve surfaces the amnesty rule for amnesty queries", () => {
  const got = retrieve("can I get a waiver on my 2026 penalties?", DEFAULT_RULES, 3)
  assert.ok(got.some((r) => r.id === "amnesty-2026"))
})

test("retrieve returns nothing for unrelated queries", () => {
  assert.deepEqual(retrieve("how is the weather today?", DEFAULT_RULES, 3).map((r) => r.id), [])
})

test("buildKnowledgeBase appends custom rules", () => {
  const extra = [{ id: "custom", title: "Custom", keywords: ["x"], body: "y" }]
  assert.equal(buildKnowledgeBase(extra).length, DEFAULT_RULES.length + 1)
})

test("TaxAssistant fallback cites the retrieved rule ids", async () => {
  const assistant = new TaxAssistant()
  const answer = await assistant.ask("late filing")
  assert.ok(answer.source.length >= 1)
  assert.ok(answer.source.includes("late-vat-filing-penalty"))
})

test("TaxAssistant uses an injected LLM port", async () => {
  let receivedContext: string[] = []
  const fake: LlmPort = {
    async complete(_query: string, context: Rule[]): Promise<LlmAnswer> {
      receivedContext = context.map((r) => r.id)
      return { text: "custom", source: context.map((r) => r.id) }
    },
  }
  const assistant = new TaxAssistant({ llm: fake, topK: 2 })
  const answer = await assistant.ask("amnesty 2026 waiver")
  assert.equal(answer.text, "custom")
  assert.ok(receivedContext.length >= 1)
  assert.ok(receivedContext.includes("amnesty-2026"))
})

test("evaluateRetrieval reports recall over a golden set", () => {
  const golden: GoldenItem[] = [
    { query: "late filing penalty amount", expected: ["late-vat-filing-penalty"] },
    { query: "amnesty waiver 2026", expected: ["amnesty-2026"] },
    { query: "iTax special table suppliers", expected: ["special-table"] },
  ]
  const report = evaluateRetrieval(golden, DEFAULT_RULES, 3)
  assert.equal(report.recallAtK, 1)
  assert.equal(report.precision, 1)
  assert.equal(report.failures.length, 0)
})