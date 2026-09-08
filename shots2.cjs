const { chromium } = require('playwright');
(async () => {
  const name = process.argv[2] || 'home';
  const path = process.argv[3] || '/';
  const width = parseInt(process.argv[4] || '375');
  const height = parseInt(process.argv[5] || '812');
  const only = process.argv[6] ? process.argv[6].split(',').map(Number) : null;
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto('http://localhost:8931' + path, { waitUntil: 'load', timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(2000);
  const fullH = await page.evaluate(() => document.body.scrollHeight);
  const slices = Math.ceil(fullH / height);
  console.log('page height', fullH, 'slices', slices);
  for (let i = 0; i < slices; i++) {
    if (only && !only.includes(i)) continue;
    await page.evaluate((y) => window.scrollTo(0, y), i * height);
    await page.waitForTimeout(350);
    await page.screenshot({ path: `shots/${name}-${width}-s${i}.png` });
    console.log('saved', `shots/${name}-${width}-s${i}.png`);
  }
  await browser.close();
})();
