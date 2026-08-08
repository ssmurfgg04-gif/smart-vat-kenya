async function test() {
  try {
    const res = await fetch("https://api.prembly.com/verification/ke/tax/pin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin: "A008006333J" })
    });
    console.log("Status:", res.status);
    const text = await res.text();
    console.log("Body:", text);
  } catch (e) {
    console.error("Error:", e.message);
  }
}
test();
