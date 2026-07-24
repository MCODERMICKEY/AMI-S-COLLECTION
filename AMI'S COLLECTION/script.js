/* =========================================================
   AMI'S COLLECTION — script.js
   Powers: search, hamburger menu, "Shop by" filter panel
   (categories, occasion, price range, condition), catalogue
   rendering, and the Call / WhatsApp actions.
   ========================================================= */

// ---- Business contact (used for both Call and WhatsApp) ----
const BUSINESS_PHONE_INTL = "233537541183"; // Ghana intl format for tel/wa.me (0500639478 -> +233 500639478)

// ---- Catalogue data -----------------------------------------------------
// Swap `swatch` for a real product photo later: replace the .product-media
// rendering in renderProducts() with an <img src="photos/yourdress.jpg">.
const PRODUCTS = [
  { id: "p1", name: "Black Floral Print Fitted Maxi Skirt", category: "Skirts", occasion: "Casual", price: 170, condition: "On Sale", image: "Photos/P1.jpg", colors: [{ name: "White Floral", hex: "#e8e6dc" }], description: "A fitted, floor-length ribbed skirt in white with a bold black floral silhouette print. High-waisted with a flattering mermaid-style flare toward the hem for graceful movement. A sleek, elegant piece for brunch, evening events, or a polished everyday statement look.", sizes: ["S", "M", "L", "XL"] },
  { id: "p2", name: "Pleated Rose Print Maxi Skirt", category: "Skirts", occasion: "Casual", price: 300, condition: "New", image: "Photos/P2.jpg", colors: [{ name: "Ivory Floral", hex: "#ede4c8" }], description: "A dreamy full-length pleated skirt in soft ivory, covered in a romantic pink rose print with green foliage detailing. Finished with a tie-waist bow for a defined silhouette. The accordion pleats add beautiful movement — a striking piece for garden events, photoshoots, or a standout casual look.", sizes: ["S", "M", "L", "XL"] },
  { id: "p3", name: "Sleeveless Floral Collared Fit-and-Flare Dress", category: "Dresses", occasion: "Casual", price: 250, condition: "New", image: "Photos/P3.jpg", colors: [{ name: "White Floral", hex: "#f2ede0" }], description: "A sleeveless button-front dress in crisp white, featuring a pointed collar and a vibrant floral print along the waist and hem. Fitted through the bodice with a flared, twirl-worthy skirt and a tie-belt waist. A fresh, feminine pick for brunch, garden parties, or a summer day out.", sizes: ["S", "M", "L", "XL"] },
  { id: "p4", name: "Plaid Peter Pan Collar Pencil Dress", category: "Dresses", occasion: "Corporate", price: 300, condition: "New", image: "Photos/P4.jpg", colors: [{ name: "Grey Plaid", hex: "#c9c2b8" }], description: "A refined pencil dress in a grey plaid tweed-style fabric, finished with a contrasting navy Peter Pan collar and matching cuffs. Fitted through the bodice and hips for a polished silhouette with short sleeves. A smart, elegant choice for the office, business meetings, or a formal daytime event.", sizes: ["S", "M", "L", "XL"] },
  { id: "p5", name: "Leopard & Rose Print Bodycon Midi Dress", category: "Dresses", occasion: "Party", price: 170, condition: "New", image: "Photos/P5.jpg", colors: [{ name: "Leopard Rose", hex: "#8a5a2e" }], description: "A bold bodycon midi dress featuring a leopard print layered with vivid red rose blooms. One-shoulder cap sleeve design with a fitted, curve-hugging silhouette that falls to a flattering midi length. A statement piece for parties, dinner dates, or any night you want to turn heads.", sizes: ["S", "M", "L", "XL"] },
  { id: "p6", name: "Floral Print Slit Hem Maxi Dress", category: "Dresses", occasion: "Casual", price: 300, condition: "New", image: "Photos/P6.jpg", colors: [{ name: "Brown Floral", hex: "#8a6a3c" }], description: "A flowing summer maxi dress in a warm brown-and-white floral digital print, with a waist-cinching silhouette and a dramatic thigh-high slit hem. Short sleeves and a lightweight fabric make it an easy pick for beach vacations or warm-weather occasions.", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "p7", name: "Bohemian Print Bodycon Maxi Dress", category: "Dresses", occasion: "Casual", price: 250, condition: "New", image: "Photos/P7.jpg", colors: [{ name: "Pink", hex: "#e6b8a2" }, { name: "Royal Blue", hex: "#2f4d7a" }, { name: "Teal", hex: "#3d6b6b" }], description: "A striking fitted maxi dress in a bold blue-and-white bohemian print with a decorative side slit. Sleeveless silhouette with a flattering bodycon fit through the torso and hips, finishing at a floor-sweeping length. An eye-catching pick for vacation, brunch, or dressed-up casual outings.", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "p8", name: "Daisy Print Cami Pajama Set", category: "Sleepwear", occasion: "Loungewear", price: 130, condition: "New", image: "Photos/P8.jpg", colors: [{ name: "Bright Yellow", hex: "#e8d98a" }, { name: "Green", hex: "#a9c98c" }, { name: "Blue", hex: "#aecde0" }, { name: "Purple", hex: "#c9b7dd" }, { name: "Pink", hex: "#eec6c6" }], description: "A cute cami and shorts pajama set with a sweet daisy print, featuring a scalloped-hem tank top and matching ruffle-trim shorts. Soft, lightweight fabric that's breathable and comfortable for everyday sleep or lounging at home.", sizes: ["S", "M", "L", "XL"] },
  { id: "p9", name: "V-Neck Halter Top & Skirt 2pc Set", category: "Sets", occasion: "Party", price: 250, condition: "New", image: "Photos/P9.jpg", colors: [{ name: "Apricot", hex: "#e6cba8" }, { name: "Sage Green", hex: "#8fa787" }], description: "An elegant two-piece set featuring a fitted V-neck halter top paired with a sleek, floor-length column skirt with a side slit. Made from a smooth stretch fabric that skims the body for a polished, going-out silhouette. A striking choice for evening events, dinner dates, or a night out.", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "p10", name: "Lace Trim Strawberry Print Triangle Bra Set", category: "Lingerie", occasion: "Intimate", price: 130, condition: "New", image: "Photos/P10.jpg", colors: [{ name: "White", hex: "#f5f2ee" }], description: "A soft ribbed bra and thong set in white with a sweet strawberry print, finished with delicate lace trim along the triangle cups. Thin adjustable straps for a comfortable, true-to-size fit — a cute, lightweight everyday intimates set.", sizes: ["S", "M", "L", "XL"] },
  { id: "p11", name: "Teal & Gold Abstract Bodycon Dress", category: "Dresses", occasion: "Party", price: 300, condition: "New", image: "Photos/P11.jpg", description: "A striking bodycon dress in a bold teal, gold, and black abstract print. Featuring an off-shoulder neckline with balloon long sleeves and a fitted, curve-hugging silhouette that falls to a flattering midi length. Made from a stretch fabric for a smooth, comfortable fit. A head-turning pick for parties, dinner dates, or any occasion where you want to stand out.", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "p12", name: "Strawberry Lace Trim Bra Set", category: "Lingerie", occasion: "Intimate", price: 80, condition: "New", image: "Photos/P12.jpg", description: "A soft, comfortable bra and thong set in a delicate striped fabric with a sweet strawberry print. Finished with lace trim along the triangle cups for a feminine touch, with adjustable straps for a customized fit. A lightweight, everyday intimates set that's as comfortable as it is pretty.", sizes: ["S", "M", "L", "XL"] },
  { id: "p13", name: "Black Lace Strappy Underwire Bra", category: "Lingerie", occasion: "Intimate", price: 130, condition: "New", image: "Photos/P13.jpg",  description: "An elegant black lace bra with a floral pattern, underwire support, and delicate crisscross strappy detailing at the back. Designed for gentle bust gathering and an elevated, sultry silhouette. A statement piece for special occasions or everyday confidence under your outfit.", sizes: ["34B", "34C", "36B", "36C", "36D", "38B"] },
  { id: "p14", name: "White Lace Push-Up Bra with Back Detail", category: "Lingerie", occasion: "Intimate", price: 130, condition: "New", image: "Photos/P14.jpg",  colors: [{ name: "Black", hex: "#000000" }, { name: "White", hex: "#d3e5df" }], description: "A breathable push-up bra in soft white lace, featuring a delicate scalloped trim and a pretty crisscross back design. Lightly padded for shape and lift while staying comfortable for all-day wear. A versatile, feminine everyday piece.", sizes: ["32A", "32B", "34B", "34C", "36B", "36C"] },
  { id: "p15", name: "Ribbon-Tie Ruffle Pajama Set", category: "Sleepwear", occasion: "Loungewear", price: 150, condition: "New", image: "Photos/P15.jpg", description: "A sweet two-piece pajama set in soft white with pink lace trim and ribbon-tie detailing down the front. Includes a cami top and matching ruffle-hem shorts, both made from a lightweight, breathable fabric. Comfortable for lounging at home or as a cute overnight set.", sizes: ["S", "M", "L", "XL"] },
  { id: "p16", name: "Wireless Push-Up Lace Bandeau Bralette", category: "Lingerie", occasion: "Intimate", price: 130, condition: "New", image: "Photos/P16.jpg", colors: [{ name: "Black", hex: "#1c1c1c" }, { name: "Light Beige", hex: "#d9b99b" }], description: "A wireless, strapless bandeau bralette in soft stretch lace with a delicate crochet-style trim along the top edge. Front clasp closure for an easy, adjustable fit, with light push-up padding for shape and lift. A comfortable, versatile piece that works well under both everyday and going-out looks.", sizes: ["S", "M", "L", "XL"] },
  { id: "p17", name: "Ruffle Trim Ribbon-Tie Cami & Shorts Set", category: "Sleepwear", occasion: "Loungewear", price: 160, condition: "New", image: "Photos/P17.jpg", colors: [{ name: "White", hex: "#f2f0ec" }], description: "A soft, ribbed two-piece set in a delicate solid tone, featuring a wireless cami top with adjustable straps and a ribbon-tie front, paired with matching ruffle-trim shorts with a tie detail. Lightweight and stretchy for a comfortable, true-to-size fit — perfect for lounging or sleepwear.", sizes: ["S", "M", "L"] },
  { id: "p18", name: "Halter Neck Floral Pleated Fit-and-Flare Dress", category: "Dresses", occasion: "Party", price: 230, condition: "New", image: "Photos/P18.jpg", colors: [{ name: "Pink Floral", hex: "#f0c3cf" }, { name: "Sea Blue", hex: "#5162de" }], description: "A romantic pink halter-neck dress with a floral print through the bodice and pleated hem. Fitted through the waist with a tie-belt sash and a flirty, flared pleated skirt that adds movement. A pretty, feminine pick for parties, date nights, or a special celebration.", sizes: ["S", "M", "L", "XL"] },
  { id: "p19", name: "Halter Neck Floral Pleated Maxi Dress", category: "Dresses", occasion: "Party", price: 250, condition: "New", image: "Photos/P19.jpg", colors: [{ name: "Pink", hex: "#f2c6d3" }, { name: "Blue", hex: "#a8c4dd" }, { name: "Green", hex: "#a8c9a0" }, { name: "Yellow", hex: "#eddc9c" }], description: "An elegant floor-length pleated maxi dress with a halter neckline and floral print through the bodice and hem. Cinched at the waist with a tie-belt sash for a defined silhouette, with soft accordion pleats that flow beautifully. A show-stopping choice for weddings, galas, or any special occasion.", sizes: ["S", "M", "L", "XL"] },
];

const CATEGORIES = [...new Set(PRODUCTS.map((p) => p.category))];
const OCCASIONS = [...new Set(PRODUCTS.map((p) => p.occasion))];
const CONDITIONS = [...new Set(PRODUCTS.map((p) => p.condition))];

// ---- Filter state ---------------------------------------------------------
const state = {
  categories: new Set(),
  occasions: new Set(),
  conditions: new Set(),
  priceMin: 100,
  priceMax: 1000,
  search: "",
};

// ---- Helpers ---------------------------------------------------------------
function formatGHS(amount) {
  return "GHS " + amount.toLocaleString("en-GH");
}

function buildWhatsAppLink(message) {
  return `https://wa.me/${BUSINESS_PHONE_INTL}?text=${encodeURIComponent(message)}`;
}

function orderMessageFor(product, size, color) {
  return (
    `Hello Ami's Collection! 👋\n` +
    `I'd like to order this item:\n\n` +
    `👗 Item: ${product.name}\n` +
    `🏷️ Category: ${product.category}\n` +
    (color ? `🎨 Color: ${color}\n` : ``) +
    (size ? `📏 Size: ${size}\n` : ``) +
    `💰 Price: ${formatGHS(product.price)}\n\n` +
    `Please confirm availability and delivery details. Thank you!`
  );
}

function generalInquiryMessage() {
  return "Hello Ami's Collection! I'd like to know more about your ladies wear collection.";
}

function showToast(text) {
  const toast = document.getElementById("toast");
  toast.textContent = text;
  toast.classList.add("show");
  window.clearTimeout(showToast._t);
  showToast._t = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

// ---- Product filtering + rendering -----------------------------------------
function matchesFilters(p) {
  const catOk = state.categories.size === 0 || state.categories.has(p.category);
  const occOk = state.occasions.size === 0 || state.occasions.has(p.occasion);
  const condOk = state.conditions.size === 0 || state.conditions.has(p.condition);
  const priceOk = p.price >= state.priceMin && p.price <= state.priceMax;
  const searchOk = state.search === "" || p.name.toLowerCase().includes(state.search);
  return catOk && occOk && condOk && priceOk && searchOk;
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const list = PRODUCTS.filter(matchesFilters);

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <strong>No pieces match yet</strong>
        Try clearing a filter or search term — new stock drops often.
      </div>`;
    return;
  }

  grid.innerHTML = list
    .map(
      (p) => `
      <article class="product-card" data-id="${p.id}">
        <div class="product-media"${p.image ? "" : ` style="background:${p.swatch}"`}>
          ${p.image ? `<img class="product-photo" src="${p.image}" alt="${p.name}" loading="lazy" />` : ""}
          <span class="tag">${p.condition}</span>
          ${p.image ? "" : `<span class="fig">${p.name}</span>`}
        </div>
        <div class="product-body">
          <div class="product-price">${formatGHS(p.price)}</div>
          <div class="product-desc">${p.category} · ${p.occasion} wear</div>
          <div class="product-actions">
            <a class="icon-action call" href="tel:+${BUSINESS_PHONE_INTL}" aria-label="Call about ${p.name}" title="Call">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
            <button class="icon-action whatsapp" type="button" data-id="${p.id}" aria-label="WhatsApp about ${p.name}" title="WhatsApp">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 4c-4.9 0-8.9 3.98-8.9 8.87 0 1.56.41 3.08 1.2 4.42L3 21l3.85-1.01a8.9 8.9 0 0 0 4.2 1.07h.01c4.9 0 8.9-3.98 8.9-8.87a8.8 8.8 0 0 0-2.36-6.87zM12.06 19.4a7.4 7.4 0 0 1-3.77-1.03l-.27-.16-2.8.74.75-2.72-.18-.28a7.36 7.36 0 0 1-1.13-3.93c0-4.08 3.33-7.4 7.42-7.4 1.98 0 3.84.77 5.24 2.17a7.34 7.34 0 0 1 2.17 5.24c0 4.08-3.33 7.37-7.43 7.37zm4.07-5.53c-.22-.11-1.32-.65-1.53-.73-.2-.07-.35-.11-.5.11-.15.22-.58.73-.71.88-.13.15-.26.17-.48.06-.22-.11-.94-.35-1.79-1.11-.66-.59-1.11-1.32-1.24-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.43c-.15 0-.39.06-.59.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.57 2.4 3.81 3.36.53.23.95.37 1.27.47.53.17 1.02.15 1.4.09.43-.06 1.32-.54 1.5-1.06.19-.52.19-.96.13-1.06-.06-.09-.2-.15-.42-.26z"/></svg>
            </button>
          </div>
        </div>
      </article>`
    )
    .join("");

  grid.querySelectorAll(".icon-action.whatsapp").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const product = PRODUCTS.find((p) => p.id === btn.dataset.id);
      if (!product) return;

      // if the item has sizes and/or colors, open the detail panel so the
      // customer picks them before the WhatsApp message goes out
      const needsSize = product.sizes && product.sizes.length;
      const needsColor = product.colors && product.colors.length;
      if (needsSize || needsColor) {
        openProductDetail(product);
        showToast(
          needsSize && needsColor
            ? "Please select a color and size to continue"
            : needsColor
            ? "Please select a color to continue"
            : "Please select a size to continue"
        );
        return;
      }

      const link = buildWhatsAppLink(orderMessageFor(product));
      showToast(`Opening WhatsApp with "${product.name}" details…`);
      window.open(link, "_blank", "noopener");
    });
  });

  // the call icon is a plain <a href="tel:...">, just keep it from also
  // opening the detail panel when tapped
  grid.querySelectorAll(".icon-action.call").forEach((link) => {
    link.addEventListener("click", (e) => e.stopPropagation());
  });

  // tapping anywhere else on the card opens the "read more" detail panel
  grid.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => {
      const product = PRODUCTS.find((p) => p.id === card.dataset.id);
      if (product) openProductDetail(product);
    });
  });
}

// ---- Product detail panel ("read more") ------------------------------------
function openProductDetail(product) {
  const overlay = document.getElementById("productOverlay");
  const media = document.getElementById("detailMedia");
  const name = document.getElementById("detailName");
  const price = document.getElementById("detailPrice");
  const tags = document.getElementById("detailTags");
  const desc = document.getElementById("detailDesc");
  const sizeWrap = document.getElementById("detailSizeWrap");
  const sizeList = document.getElementById("detailSizes");
  const colorWrap = document.getElementById("detailColorWrap");
  const colorList = document.getElementById("detailColors");
  const colorReadout = document.getElementById("colorReadout");
  const callLink = document.getElementById("detailCall");
  const waBtn = document.getElementById("detailWhatsapp");

  media.style.background = product.image ? "none" : product.swatch;
  media.innerHTML = product.image
    ? `<img class="product-photo" src="${product.image}" alt="${product.name}" />`
    : `<span class="fig">${product.name}</span>`;

  name.textContent = product.name;
  price.textContent = formatGHS(product.price);
  tags.innerHTML = `
    <span class="detail-chip">${product.category}</span>
    <span class="detail-chip">${product.occasion}</span>
    <span class="detail-chip detail-chip-condition">${product.condition}</span>`;
  desc.textContent = product.description || "A beautiful piece from Ami's Collection, made with quality fabric and finished for everyday elegance.";

  // ---- size picker ----
  let selectedSize = null;
  if (product.sizes && product.sizes.length) {
    sizeWrap.style.display = "block";
    sizeList.innerHTML = product.sizes
      .map((s) => `<button type="button" class="size-swatch" data-size="${s}">${s}</button>`)
      .join("");
    sizeList.querySelectorAll(".size-swatch").forEach((btn) => {
      btn.addEventListener("click", () => {
        sizeList.querySelectorAll(".size-swatch").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        selectedSize = btn.dataset.size;
      });
    });
  } else {
    sizeWrap.style.display = "none";
  }

  // ---- color picker ----
  let selectedColor = null;
  if (product.colors && product.colors.length) {
    colorWrap.style.display = "block";
    colorReadout.textContent = "";
    colorList.innerHTML = product.colors
      .map(
        (c) =>
          `<button type="button" class="color-swatch" data-color="${c.name}" style="background:${c.hex}" aria-label="${c.name}" title="${c.name}"></button>`
      )
      .join("");
    colorList.querySelectorAll(".color-swatch").forEach((btn) => {
      btn.addEventListener("click", () => {
        colorList.querySelectorAll(".color-swatch").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        selectedColor = btn.dataset.color;
        colorReadout.textContent = `Selected: ${selectedColor}`;
      });
    });
  } else {
    colorWrap.style.display = "none";
  }

  callLink.href = `tel:+${BUSINESS_PHONE_INTL}`;
  waBtn.onclick = () => {
    if (product.sizes && product.sizes.length && !selectedSize) {
      showToast("Please select a size first");
      return;
    }
    if (product.colors && product.colors.length && !selectedColor) {
      showToast("Please select a color first");
      return;
    }
    const link = buildWhatsAppLink(orderMessageFor(product, selectedSize, selectedColor));
    window.open(link, "_blank", "noopener");
  };

  overlay.classList.add("open");
}

// ---- Filter panel: checkbox groups -----------------------------------------
function renderCheckGroup(containerId, options, stateSet) {
  const container = document.getElementById(containerId);
  container.innerHTML = options
    .map(
      (opt, i) => `
      <label class="check-item">
        <input type="checkbox" id="${containerId}-${i}" value="${opt}" />
        <span class="box"></span>
        <span class="label">${opt}</span>
      </label>`
    )
    .join("");

  container.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) stateSet.add(input.value);
      else stateSet.delete(input.value);
    });
  });
}

// ---- Price range dual slider -----------------------------------------------
function initPriceSlider() {
  const min = document.getElementById("priceMin");
  const max = document.getElementById("priceMax");
  const fill = document.getElementById("rangeFill");
  const readout = document.getElementById("priceReadout");
  const bounds = { lo: Number(min.min), hi: Number(min.max) };

  function update() {
    let lo = Number(min.value);
    let hi = Number(max.value);
    if (lo > hi - 10) {
      // keep a minimum gap so both thumbs stay usable
      if (this === min) { lo = hi - 10; min.value = lo; }
      else { hi = lo + 10; max.value = hi; }
    }
    const loPct = ((lo - bounds.lo) / (bounds.hi - bounds.lo)) * 100;
    const hiPct = ((hi - bounds.lo) / (bounds.hi - bounds.lo)) * 100;
    fill.style.left = loPct + "%";
    fill.style.width = hiPct - loPct + "%";
    readout.textContent = `GHS ${lo} – GHS ${hi}`;
    state.priceMin = lo;
    state.priceMax = hi;
  }

  min.addEventListener("input", update);
  max.addEventListener("input", update);
  update();
}

// ---- Theme toggle (the sun/moon icon in the menu panel) --------------------
function initThemeToggle() {
  const btn = document.getElementById("themeToggle");
  const sunIcon = document.getElementById("themeIconSun");
  const moonIcon = document.getElementById("themeIconMoon");
  if (!btn) return;

  function applyState(isLight) {
    document.body.classList.toggle("light-theme", isLight);
    btn.setAttribute("aria-pressed", String(isLight));
    // sun icon = "tap to go light", moon icon = "tap to go dark"
    sunIcon.style.display = isLight ? "none" : "block";
    moonIcon.style.display = isLight ? "block" : "none";
  }

  // reflect whatever the early inline script in <body> already applied
  applyState(document.body.classList.contains("light-theme"));

  btn.addEventListener("click", () => {
    const isLight = !document.body.classList.contains("light-theme");
    applyState(isLight);
    try {
      localStorage.setItem("amis-theme", isLight ? "light" : "dark");
    } catch (e) {
      /* storage unavailable — theme still works for this session */
    }
    showToast(isLight ? "Light background on" : "Dark background on");
  });
}

// ---- Panels: open/close ------------------------------------------------------
function wirePanel(overlayId, openTriggerIds, closeTriggerIds) {
  const overlay = document.getElementById(overlayId);
  openTriggerIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", () => overlay.classList.add("open"));
  });
  closeTriggerIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", () => overlay.classList.remove("open"));
  });
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("open");
  });
}

// ---- Init -------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();

  renderCheckGroup("categoryChecks", CATEGORIES, state.categories);
  renderCheckGroup("occasionChecks", OCCASIONS, state.occasions);
  renderCheckGroup("conditionChecks", CONDITIONS, state.conditions);
  initPriceSlider();

  wirePanel("menuOverlay", ["menuToggle"], ["menuClose"]);
  wirePanel("filterOverlay", ["filtersToggle"], ["filterClose"]);
  wirePanel("productOverlay", [], ["detailClose"]);
  initThemeToggle();

  // menu links close the menu after navigating
  document.querySelectorAll(".menu-link-close").forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("menuOverlay").classList.remove("open");
    });
  });

  // "Support" link in the menu opens WhatsApp instead of just scrolling
  const supportLink = document.querySelector('.menu-link-close[href="#contact"]');
  if (supportLink) {
    supportLink.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("menuOverlay").classList.remove("open");
      window.open(buildWhatsAppLink(generalInquiryMessage()), "_blank", "noopener");
    });
  }

  // "Catalog" pill in topbar scrolls to the grid
  document.getElementById("scrollToCatalog").addEventListener("click", () => {
    document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
  });

  // search toggle + live filtering
  const searchToggle = document.getElementById("searchToggle");
  const searchBar = document.getElementById("searchBar");
  const searchInput = document.getElementById("searchInput");
  searchToggle.addEventListener("click", () => {
    searchBar.classList.toggle("open");
    if (searchBar.classList.contains("open")) searchInput.focus();
  });
  searchInput.addEventListener("input", () => {
    state.search = searchInput.value.trim().toLowerCase();
    renderProducts();
  });

  // filter panel actions
  document.getElementById("filterApply").addEventListener("click", () => {
    renderProducts();
    document.getElementById("filterOverlay").classList.remove("open");
    document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("filterReset").addEventListener("click", () => {
    state.categories.clear();
    state.occasions.clear();
    state.conditions.clear();
    document.querySelectorAll('.check-item input[type="checkbox"]').forEach((cb) => (cb.checked = false));
    document.getElementById("priceMin").value = 100;
    document.getElementById("priceMax").value = 1000;
    document.getElementById("priceMin").dispatchEvent(new Event("input"));
    renderProducts();
  });

  // general (non-product) WhatsApp entry point — sticky mobile bar
  const stickyWhatsapp = document.getElementById("stickyWhatsapp");
  if (stickyWhatsapp) {
    stickyWhatsapp.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(buildWhatsAppLink(generalInquiryMessage()), "_blank", "noopener");
    });
  }
});
