const { chromium } = require('playwright');
const { spawn } = require('child_process');
const targets = [['deadlines2','/tax-deadlines/',0],['status2','/kra-status/',0],['krahelp2','/kra-help/',0],['updates2','/kra-updates/',1]];
(async () => {
  const server = spawn('npx', ['http-server', 'dist', '-p', '8938', '-s'], { stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 2500));
  const browser = await chromium.launch();
  for (const [name, path, slice] of targets) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto('http://localhost:8938' + path, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(1500);
    await page.evaluate(y => window.scrollTo(0, y), slice * 900);
    await page.waitForTimeout(400);
    await page.screenshot({ path: `shots/${name}.png` });
    await page.close();
  }
  await browser.close(); server.kill(); console.log('done');
})();
