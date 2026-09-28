#!/usr/bin/env node
/**
 * Wikidata item creation — SmartVAT Kenya (playbook Loop 5, docs/backlink-playbook.md)
 *
 * Creates the SmartVAT Kenya entity with EXACTLY the playbook's claims — no more,
 * no puffery. Run ONCE. Idempotent-ish: refuses to run if an item with the same
 * official website already exists (checks P856 via SPDX search first).
 *
 * Credentials (Wikidata bot password — Special:BotPasswords):
 *   export WIKIDATA_USERNAME="SmartvatkenyaBot"
 *   export WIKIDATA_BOT_PASS="xxxxxxxxxxxxxxxxxxxxxxxx"
 *   node scripts/wikidata-create.mjs
 *
 * After success:
 *   1. Copy the printed Q-ID.
 *   2. Add "https://www.wikidata.org/wiki/<QID>" to `sameAs` in
 *      src/layouts/BaseLayout.astro (one line) and redeploy.
 */
const API = "https://www.wikidata.org/w/api.php"
const UA = "SmartVAT-Kenya-entity-bot/1.0 (https://smartvatkenya.co.ke; contact: info@smartvatkenya.co.ke)"

const USER = process.env.WIKIDATA_USERNAME
const PASS = process.env.WIKIDATA_BOT_PASS
if (!USER || !PASS) {
  console.error("Set WIKIDATA_USERNAME and WIKIDATA_BOT_PASS (create at Special:BotPasswords, grant 'Create, edit, and move pages' + 'High-volume editing').")
  process.exit(1)
}

const post = (params) =>
  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": UA },
    body: new URLSearchParams({ format: "json", ...params }),
  }).then((r) => r.json())

// 0. Collision guard — never create a duplicate.
const dupe = await fetch(
  `${API}?action=wbsearchentities&search=${encodeURIComponent("https://smartvatkenya.co.ke")}&language=en&type=item&format=json&limit=5`,
  { headers: { "User-Agent": UA } }
).then((r) => r.json())
if (dupe.search?.length) {
  console.error("An item matching our website already exists — refusing to duplicate:", dupe.search.map((s) => `${s.id} ${s.label}`).join(" | "))
  process.exit(1)
}

// 1. Login (bot password via clientlogin).
const login = await post({
  action: "clientlogin",
  username: USER,
  password: PASS,
  loginreturnurl: "https://www.wikidata.org/",
  remember: "1",
})
if (login?.clientlogin?.status !== "PASS") {
  console.error("Login failed:", JSON.stringify(login?.clientlogin || login, null, 2))
  process.exit(1)
}
console.log("Login OK as", login.clientlogin.username)

// 2. CSRF token.
const { query } = await post({ action: "query", meta: "tokens", type: "csrf" })
const token = query.tokens.csrftoken

// 3. The item — exactly the playbook's claims, nothing else.
const data = {
  labels: { en: "SmartVAT Kenya", sw: "SmartVAT Kenya" },
  descriptions: {
    en: "Kenyan tax technology firm; publishes smartvatkenya.co.ke, a VAT and eTIMS guidance, calculators and developer tools resource",
  },
  aliases: { en: ["Smart VAT Kenya"] },
  claims: {
    P31: [{ // instance of: business
      mainsnak: { snaktype: "value", property: "P31", datavalue: { value: { "entity-type": "item", "numeric-id": 4830453 }, type: "wikibase-entityid" } },
    }],
    P452: [{ // industry: tax consulting
      mainsnak: { snaktype: "value", property: "P452", datavalue: { value: { "entity-type": "item", "numeric-id": 169606 }, type: "wikibase-entityid" } },
    }],
    P17: [{ // country: Kenya
      mainsnak: { snaktype: "value", property: "P17", datavalue: { value: { "entity-type": "item", "numeric-id": 114 }, type: "wikibase-entityid" } },
    }],
    P159: [{ // headquarters location: Nairobi
      mainsnak: { snaktype: "value", property: "P159", datavalue: { value: { "entity-type": "item", "numeric-id": 3870 }, type: "wikibase-entityid" } },
    }],
    P856: [{ // official website
      mainsnak: { snaktype: "value", property: "P856", datavalue: { value: "https://smartvatkenya.co.ke", type: "string" } },
    }],
    P973: [{ // described at URL
      mainsnak: { snaktype: "value", property: "P973", datavalue: { value: "https://smartvatkenya.co.ke/about/", type: "string" } },
    }],
    P1448: [{ // official name
      mainsnak: { snaktype: "value", property: "P1448", datavalue: { value: { text: "Smart VAT Kenya Limited", language: "en" }, type: "monolingualtext" } },
    }],
  },
}

const res = await post({ action: "wbeditentities", new: "item", data: JSON.stringify(data), token, bot: "1" })
if (res.success) {
  const qid = res.entity.id
  console.log("CREATED:", `https://www.wikidata.org/wiki/${qid}`)
  console.log(`Next: add "${`https://www.wikidata.org/wiki/${qid}`}" to sameAs in src/layouts/BaseLayout.astro, then redeploy.`)
} else {
  console.error("Creation failed:", JSON.stringify(res, null, 2))
  process.exit(1)
}
