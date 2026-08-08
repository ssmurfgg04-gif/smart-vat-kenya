process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function testSignIn(payloadObj) {
  const signInQuery = `
    mutation SignIn($data: String!) {
      signIn(data: $data) {
        status
        message
        token
      }
    }
  `;

  try {
    const res = await fetch("https://developer.go.ke/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: signInQuery,
        variables: { data: JSON.stringify(payloadObj) }
      })
    });
    const json = await res.json();
    return json;
  } catch (err) {
    return { error: err.message };
  }
}

async function run() {
  const email = "ssmurfgg04@gmail.com";
  const password = "Kimi#5454";

  const payloads = [
    { email, password },
    { emailAddress: email, password },
    { email_address: email, password },
    { EmailAddress: email, Password: password },
    { Email: email, Password: password },
    { username: email, password },
    { Username: email, Password: password }
  ];

  for (const payload of payloads) {
    console.log(`Testing payload: ${JSON.stringify(payload)}`);
    const result = await testSignIn(payload);
    
    if (result.errors) {
      console.log(`  Error: ${result.errors[0].message.split('\n')[0]}`);
    } else if (result.data && result.data.signIn) {
      console.log(`  Success! Status: ${result.data.signIn.status}, Message: ${result.data.signIn.message}`);
      if (result.data.signIn.token) {
        console.log(`  Token: ${result.data.signIn.token.substring(0, 20)}...`);
        return; // Stop on success
      }
    } else {
      console.log(`  Unknown result: ${JSON.stringify(result)}`);
    }
  }
}

run();
