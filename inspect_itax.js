process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function inspectItaxForm() {
  try {
    const res = await fetch("https://itax.kra.go.ke/KRA-Portal/pinChecker.htm", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
    });
    console.log("Status:", res.status);
    const html = await res.text();
    
    // Look for form actions, inputs, and captcha fields
    const formMatch = html.match(/<form[^>]*action="([^"]*)"[^>]*>([\s\S]*?)<\/form>/i);
    if (formMatch) {
      console.log("Form Action:", formMatch[1]);
      const inputs = [...formMatch[2].matchAll(/<input[^>]*name="([^"]*)"[^>]*value="?([^">]*)"?/gi)];
      console.log("Inputs found:");
      inputs.forEach(i => console.log(`  - ${i[1]} = ${i[2]}`));
    } else {
      console.log("No form tag found in HTML. Checking script/iframe tags...");
    }

    // Check if captcha or security arithmetic is present
    if (html.includes("captcha") || html.includes("Captcha") || html.includes("Arithmetic")) {
      console.log("Captcha/Arithmetic challenge detected on page!");
    } else {
      console.log("No obvious captcha detected on initial load!");
    }

  } catch (err) {
    console.error("Error fetching iTax page:", err.message);
  }
}

inspectItaxForm();
