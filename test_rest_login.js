process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function checkRestEndpoints() {
  const email = "ssmurfgg04@gmail.com";
  const password = "Kimi#5454";

  const endpoints = [
    "/api/login",
    "/api/v1/login",
    "/auth/login",
    "/login",
    "/api/auth/signin"
  ];

  const payload = { email, password };

  for (const endpoint of endpoints) {
    console.log(`\nTesting REST endpoint: ${endpoint}`);
    try {
      const res = await fetch(`https://developer.go.ke${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      console.log(`  Status: ${res.status}`);
      if (res.ok) {
        const text = await res.text();
        console.log(`  Response: ${text.substring(0, 100)}...`);
      }
    } catch (e) {
      console.log(`  Error: ${e.message}`);
    }
  }
}

checkRestEndpoints();
