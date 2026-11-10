/**
 * Daily Redeem - Modern Single Page Web Application
 * Apple HIG-inspired Minimalist Light Mode Experience
 */

const APPS_DATA = [
  {
    id: "google-play",
    name: "Google Play Store",
    category: "Gift Card & Apps",
    icon: "assets/icons/google-play.svg",
    officialRedeemUrl: "https://play.google.com/redeem",
    hasPin: false,
    codes: [
      { code: "3VK9-8LMN-2PQ7-WXYZ", value: "₹500 Google Play Balance", status: "Verified Active", verifiedTime: "5m ago" },
      { code: "7DX4-9BKL-1MN8-99PR", value: "₹250 Google Play Balance", status: "Verified Active", verifiedTime: "12m ago" },
      { code: "4TR8-55JK-22MN-AA88", value: "₹100 Google Play Balance", status: "Verified Active", verifiedTime: "25m ago" },
      { code: "8PL2-99XZ-44BC-77QQ", value: "₹50 Google Play Balance", status: "Verified Active", verifiedTime: "1h ago" }
    ]
  },
  {
    id: "amazon",
    name: "Amazon Pay",
    category: "Shopping & Balance",
    icon: "assets/icons/amazon.svg",
    officialRedeemUrl: "https://www.amazon.in/gc/redeem",
    hasPin: false,
    codes: [
      { code: "AMZ-9942-8841-KLP0", value: "₹500 Amazon Gift Voucher", status: "Verified Active", verifiedTime: "8m ago" },
      { code: "AMZ-7712-4402-QZX8", value: "₹200 Amazon Pay Balance", status: "Verified Active", verifiedTime: "19m ago" },
      { code: "AMZ-1108-5529-VBN3", value: "₹100 Amazon Voucher", status: "Verified Active", verifiedTime: "42m ago" }
    ]
  },
  {
    id: "flipkart",
    name: "Flipkart",
    category: "Gift Card & Vouchers",
    icon: "assets/icons/flipkart.png",
    officialRedeemUrl: "https://www.flipkart.com/account/giftcard",
    hasPin: true,
    codes: [
      { code: "FKGV-8829-1920-5541", pin: "482019", value: "₹500 Flipkart Gift Card", status: "Verified Active", verifiedTime: "10m ago" },
      { code: "FKGV-3391-7729-1104", pin: "904128", value: "₹250 Flipkart Gift Card", status: "Verified Active", verifiedTime: "28m ago" },
      { code: "FKGV-6612-4481-9920", pin: "318940", value: "₹100 Flipkart Gift Card", status: "Verified Active", verifiedTime: "55m ago" }
    ]
  },
  {
    id: "pubg",
    name: "PUBG Mobile",
    category: "Gaming UC & Crates",
    icon: "assets/icons/pubg.webp",
    officialRedeemUrl: "https://www.pubgmobile.com/redeem",
    hasPin: false,
    codes: [
      { code: "PUBG-660UC-GIFT-991A", value: "660 UC Royale Voucher", status: "Verified Active", verifiedTime: "3m ago" },
      { code: "PUBG-SKIN-MYTHIC-44X8", value: "Glacier Weapon Crate", status: "Verified Active", verifiedTime: "14m ago" },
      { code: "PUBG-300UC-PROMO-77B2", value: "300 UC Instant Topup", status: "Verified Active", verifiedTime: "35m ago" }
    ]
  },
  {
    id: "bgmi",
    name: "BGMI",
    category: "Battlegrounds Mobile India",
    icon: "assets/icons/bgmi.webp",
    officialRedeemUrl: "https://www.battlegroundsmobileindia.com/redeem",
    hasPin: false,
    codes: [
      { code: "BGMI-385UC-PASS-882B", value: "385 UC Royal Pass Code", status: "Verified Active", verifiedTime: "4m ago" },
      { code: "BGMI-CRATE-COUPON-291K", value: "5x Classic Crate Coupons", status: "Verified Active", verifiedTime: "18m ago" },
      { code: "BGMI-720UC-BONUS-993A", value: "720 UC Bonus Pack", status: "Verified Active", verifiedTime: "40m ago" }
    ]
  },
  {
    id: "freefire",
    name: "Free Fire",
    category: "Diamonds & Bundles",
    icon: "assets/icons/freefire.png",
    officialRedeemUrl: "https://reward.ff.garena.com",
    hasPin: false,
    codes: [
      { code: "FF9M-2GF1-4CB8", value: "520 Diamonds Top-Up", status: "Verified Active", verifiedTime: "2m ago" },
      { code: "FFAC-2YXE-6RF2", value: "Evolution Gun Skin Voucher", status: "Verified Active", verifiedTime: "11m ago" },
      { code: "FFCO-8BS5-JW2D", value: "Alok Character Bundle", status: "Verified Active", verifiedTime: "30m ago" }
    ]
  },
  {
    id: "expressvpn",
    name: "ExpressVPN",
    category: "High-Speed Privacy VPN",
    icon: "assets/icons/expressvpn.png",
    officialRedeemUrl: "https://www.expressvpn.com/redeem",
    hasPin: false,
    codes: [
      { code: "EXPV-30DAY-TRIAL-8829", value: "30 Days Free VIP Key", status: "Verified Active", verifiedTime: "7m ago" },
      { code: "EXPV-PROMO-SECURE-9912", value: "7 Days Ultra Access Key", status: "Verified Active", verifiedTime: "24m ago" }
    ]
  },
  {
    id: "nordvpn",
    name: "NordVPN",
    category: "Cybersecurity & VPN",
    icon: "assets/icons/nordvpn.png",
    officialRedeemUrl: "https://my.nordaccount.com/activate",
    hasPin: false,
    codes: [
      { code: "NORD-ACTV-9938-1120-X821", value: "1 Month Standard License", status: "Verified Active", verifiedTime: "9m ago" },
      { code: "NORD-PLUS-4481-9923-Z110", value: "NordVPN Plus Trial Key", status: "Verified Active", verifiedTime: "27m ago" }
    ]
  },
  {
    id: "cyberghost",
    name: "CyberGhost",
    category: "Streaming & Privacy VPN",
    icon: "assets/icons/cyberghost.png",
    officialRedeemUrl: "https://my.cyberghostvpn.com/en_US/login",
    hasPin: false,
    codes: [
      { code: "CGST-PREM-8821-4402", value: "Premium 1-Month Pass", status: "Verified Active", verifiedTime: "15m ago" },
      { code: "CGST-FREE-14DAY-7719", value: "14 Days Unlimited Key", status: "Verified Active", verifiedTime: "50m ago" }
    ]
  },
  {
    id: "youtube",
    name: "YouTube",
    category: "Premium & Music",
    icon: "assets/icons/youtube.svg",
    officialRedeemUrl: "https://www.youtube.com/redeem",
    hasPin: false,
    codes: [
      { code: "YTP-3MONTH-TRIAL-9921", value: "3 Months YouTube Premium", status: "Verified Active", verifiedTime: "6m ago" },
      { code: "YTP-SUB-FAMILY-8812", value: "1 Month Premium Pass", status: "Verified Active", verifiedTime: "22m ago" }
    ]
  }
];

// Fallback icon generator for resilience
function getFallbackIconSvg(initial) {
  return "data:image/svg+xml;utf8," + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="22" fill="#E5E5EA"/>
      <text x="50%" y="54%" font-family="-apple-system, sans-serif" font-size="40" font-weight="600" fill="#1D1D1F" text-anchor="middle" dominant-baseline="middle">${initial}</text>
    </svg>
  `);
}

// Toast Notification Manager
let toastTimeout = null;
function showAppleToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  container.innerHTML = `
    <div class="apple-toast">
      <svg class="toast-check-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      <span>${message}</span>
    </div>
  `;

  // Provide tactile vibration if supported
  if (navigator.vibrate) {
    try { navigator.vibrate(25); } catch (e) {}
  }

  const toastEl = container.querySelector(".apple-toast");
  requestAnimationFrame(() => {
    toastEl.classList.add("visible");
  });

  toastTimeout = setTimeout(() => {
    if (toastEl) {
      toastEl.classList.remove("visible");
      setTimeout(() => {
        container.innerHTML = "";
      }, 300);
    }
  }, 2200);
}

// Resilient Clipboard Copy
function copyToClipboard(text, successMessage = "Code copied to clipboard!") {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showAppleToast(successMessage);
    }).catch(() => {
      fallbackCopy(text, successMessage);
    });
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  textArea.style.top = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    const successful = document.execCommand("copy");
    if (successful) {
      showAppleToast(successMessage);
    } else {
      prompt("Copy code manually:", text);
    }
  } catch (err) {
    prompt("Copy code manually:", text);
  }
  document.body.removeChild(textArea);
}

// Router & State Management
function navigateToApp(appId) {
  window.location.hash = `app=${appId}`;
}

function navigateHome() {
  window.location.hash = "";
}

function handleRoute() {
  const hash = window.location.hash.replace(/^#/, "");
  const params = new URLSearchParams(hash);
  const appId = params.get("app");

  const viewApps = document.getElementById("view-apps");
  const viewRedeem = document.getElementById("view-redeem");

  if (!viewApps || !viewRedeem) return;

  window.scrollTo({ top: 0, behavior: "instant" });

  if (appId) {
    const app = APPS_DATA.find(a => a.id === appId);
    if (app) {
      renderRedeemView(app);
      viewApps.classList.remove("active");
      viewRedeem.classList.add("active");
      return;
    }
  }

  // Default to App list
  renderAppList();
  viewRedeem.classList.remove("active");
  viewApps.classList.add("active");
}

// Render Application Selection View
function renderAppList() {
  const grid = document.getElementById("apps-grid");
  if (!grid) return;

  grid.innerHTML = APPS_DATA.map(app => {
    const initial = app.name.charAt(0);
    return `
      <div class="app-card" onclick="navigateToApp('${app.id}')" role="button" tabindex="0" aria-label="Open ${app.name} Redeem Codes">
        <div class="app-card-icon-wrap">
          <img 
            src="${app.icon}" 
            alt="${app.name}" 
            class="app-icon" 
            loading="lazy" 
            onerror="this.onerror=null; this.src='${getFallbackIconSvg(initial)}';"
          />
        </div>
        <div class="app-card-info">
          <div class="app-card-name">${app.name}</div>
          <div class="app-card-sub">${app.category}</div>
        </div>
        <div class="app-card-chevron">
          <svg viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg" width="9" height="14">
            <path d="M1.5 1.5L7 7L1.5 12.5" stroke="#C7C7CC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    `;
  }).join("");
}

// Render Redeem Codes View
function renderRedeemView(app) {
  const container = document.getElementById("view-redeem");
  if (!container) return;

  const initial = app.name.charAt(0);

  const codesHtml = app.codes.map(item => {
    return `
      <div class="code-card" onclick="copyToClipboard('${item.code}', 'Code copied to clipboard!')" role="button" tabindex="0" aria-label="Tap to copy code ${item.code}">
        <div class="code-card-header">
          <div class="code-card-reward">${item.value}</div>
        </div>

        <div class="code-box-wrapper">
          <span class="code-string">${item.code}</span>
        </div>

        ${item.pin ? `
          <div class="pin-box-wrapper" onclick="event.stopPropagation(); copyToClipboard('${item.pin}', 'PIN copied to clipboard!')" role="button" tabindex="0" aria-label="Tap to copy PIN ${item.pin}">
            <span class="pin-label">PIN:</span>
            <span class="code-string pin-string">${item.pin}</span>
          </div>
        ` : ""}
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <header class="detail-top-nav">
      <button class="btn-back" onclick="navigateHome()" aria-label="Go Back">
        <svg viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="10" height="16">
          <path d="M8.5 1.5L2 8L8.5 14.5" stroke="#0071E3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Apps</span>
      </button>
    </header>

    <div class="detail-app-hero">
      <div class="detail-icon-wrap">
        <img 
          src="${app.icon}" 
          alt="${app.name}" 
          class="detail-app-icon" 
          onerror="this.onerror=null; this.src='${getFallbackIconSvg(initial)}';"
        />
      </div>
      <h1 class="detail-app-name">${app.name}</h1>
      <a href="${app.officialRedeemUrl}" target="_blank" rel="noopener noreferrer" class="detail-official-link">
        <span>Official Redeem Page</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
    </div>

    <main class="codes-list-container">
      ${codesHtml}
    </main>
  `;
}

// Lifecycle listeners
window.addEventListener("DOMContentLoaded", handleRoute);
window.addEventListener("hashchange", handleRoute);

// Keyboard accessibility for cards
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && document.activeElement && document.activeElement.classList.contains("app-card")) {
    document.activeElement.click();
  }
});
