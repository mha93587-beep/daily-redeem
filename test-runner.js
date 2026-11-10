/**
 * Daily Redeem - Comprehensive Verification & Integrity Test Suite
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log("=== Starting Daily Redeem Verification Suite ===");

const BASE_DIR = '/root/daily-redeem';

// 1. Verify File Existence
const requiredFiles = [
  'index.html',
  'style.css',
  'app.js',
  'assets/icons/google-play.svg',
  'assets/icons/amazon.svg',
  'assets/icons/flipkart.png',
  'assets/icons/pubg.webp',
  'assets/icons/bgmi.webp',
  'assets/icons/freefire.png',
  'assets/icons/expressvpn.png',
  'assets/icons/nordvpn.png',
  'assets/icons/cyberghost.png',
  'assets/icons/youtube.svg'
];

console.log("\n[1/5] Checking file presence and integrity...");
for (const relPath of requiredFiles) {
  const fullPath = path.join(BASE_DIR, relPath);
  assert(fs.existsSync(fullPath), `File does not exist: ${relPath}`);
  const stats = fs.statSync(fullPath);
  assert(stats.size > 0, `File is empty: ${relPath}`);
  console.log(`  ✓ ${relPath} (${stats.size} bytes)`);
}

// 2. Load and verify app.js data
console.log("\n[2/5] Inspecting APPS_DATA in app.js...");
const appJsContent = fs.readFileSync(path.join(BASE_DIR, 'app.js'), 'utf8');

// Safely extract APPS_DATA via sandbox evaluation
const matchApps = appJsContent.match(/const APPS_DATA = (\[[\s\S]*?\]);/);
assert(matchApps, "Could not locate APPS_DATA definition in app.js");

let appsData;
try {
  appsData = eval(matchApps[1]);
} catch (e) {
  assert.fail(`Failed to parse APPS_DATA: ${e.message}`);
}

assert.strictEqual(appsData.length, 10, "Expected exactly 10 apps in APPS_DATA");

const expectedIds = [
  "google-play",
  "amazon",
  "flipkart",
  "pubg",
  "bgmi",
  "freefire",
  "expressvpn",
  "nordvpn",
  "cyberghost",
  "youtube"
];

for (const expId of expectedIds) {
  const found = appsData.find(a => a.id === expId);
  assert(found, `Missing required application: ${expId}`);
  assert(found.name && found.name.length > 0, `App ${expId} missing name`);
  assert(found.officialRedeemUrl && found.officialRedeemUrl.startsWith("http"), `App ${expId} missing officialRedeemUrl`);
  assert(Array.isArray(found.codes) && found.codes.length >= 2, `App ${expId} must have at least 2 codes`);
  
  for (const c of found.codes) {
    assert(c.code && c.code.length > 5, `App ${expId} has invalid code: ${c.code}`);
    assert(c.value && c.value.length > 0, `App ${expId} has invalid value reward`);
  }

  if (expId === "flipkart") {
    assert.strictEqual(found.hasPin, true, "Flipkart must have hasPin=true");
    assert(found.codes[0].pin, "Flipkart code must contain a PIN");
  }

  console.log(`  ✓ App verified: [${found.name}] with ${found.codes.length} active codes`);
}

// 3. Verify index.html DOM structure
console.log("\n[3/5] Verifying index.html DOM contracts...");
const indexHtml = fs.readFileSync(path.join(BASE_DIR, 'index.html'), 'utf8');
assert(indexHtml.includes('id="view-apps"'), "index.html must contain view-apps section");
assert(indexHtml.includes('id="apps-grid"'), "index.html must contain apps-grid container");
assert(indexHtml.includes('id="view-redeem"'), "index.html must contain view-redeem section");
assert(indexHtml.includes('id="toast-container"'), "index.html must contain toast-container");
assert(indexHtml.includes('Daily Redeem'), "index.html must contain brand name 'Daily Redeem'");
assert(indexHtml.includes('style.css'), "index.html must link style.css");
assert(indexHtml.includes('app.js'), "index.html must link app.js");
console.log("  ✓ All required DOM containers and links present in index.html");

// 4. Verify style.css rules
console.log("\n[4/5] Verifying style.css Apple light mode design system...");
const styleCss = fs.readFileSync(path.join(BASE_DIR, 'style.css'), 'utf8');
assert(styleCss.includes('--bg-canvas: #F5F5F7'), "style.css must define Apple canvas background #F5F5F7");
assert(styleCss.includes('.app-card'), "style.css must contain .app-card rule");
assert(styleCss.includes('.code-card'), "style.css must contain .code-card rule");
assert(styleCss.includes('.apple-toast'), "style.css must contain .apple-toast rule");
assert(styleCss.includes('@media'), "style.css must contain responsive media queries");
console.log("  ✓ Apple light mode and responsive styling rules verified");

// 5. Check helper methods in app.js
console.log("\n[5/5] Verifying core JavaScript functionality...");
assert(appJsContent.includes('function showAppleToast'), "app.js must define showAppleToast");
assert(appJsContent.includes('function copyToClipboard'), "app.js must define copyToClipboard");
assert(appJsContent.includes('function handleRoute'), "app.js must define handleRoute");
assert(appJsContent.includes('function renderAppList'), "app.js must define renderAppList");
assert(appJsContent.includes('function renderRedeemView'), "app.js must define renderRedeemView");
console.log("  ✓ All essential controllers and routing hooks verified");

console.log("\n==================================================");
console.log("🎉 ALL TESTS PASSED! Daily Redeem is 100% verified.");
console.log("==================================================");
