const PRODUCTS = [
  {
    id: "mute-hoodie",
    name: "Mute Hoodie",
    price: 168,
    category: "wear",
    image: "images/hoodie.jpg",
    tag: "Organic cotton",
    blurb: "Navy GOTS fleece, brushed inside, tagless at the neck. The quiet layer.",
    material: "100% GOTS organic cotton fleece, navy yarn.",
    care: "Cold wash, hang dry, repair before replace.",
    mind: "Soft interior and dropped shoulders lower sensory load on long days.",
  },
  {
    id: "still-tee",
    name: "Still Tee",
    price: 75,
    category: "wear",
    image: "images/tee.jpg",
    tag: "Heavyweight",
    blurb: "Boxy regenerative cotton in undyed white. Weight enough to feel held.",
    material: "Heavyweight regenerative cotton, undyed.",
    care: "Cold wash, hang dry. It only gets softer.",
    mind: "A clean white field for the nervous system. Nothing itches, nothing shouts.",
  },
  {
    id: "quiet-hour-trousers",
    name: "Quiet Hour Trousers",
    price: 178,
    category: "wear",
    image: "images/trousers.jpg",
    tag: "Organic twill",
    blurb: "Charcoal drawstring trousers with deep pockets, named for ten unhurried minutes.",
    material: "Organic cotton twill in charcoal.",
    care: "Cold wash, hang dry. Marks are part of the cloth.",
    mind: "A reminder, in the pocket, to keep one quiet hour each day.",
  },
  {
    id: "dawn-overshirt",
    name: "Dawn Overshirt",
    price: 198,
    category: "wear",
    image: "images/shirt.jpg",
    tag: "Linen",
    blurb: "Oatmeal European flax, enzyme washed. Wear it open or closed.",
    material: "100% European flax linen, rain-fed, undyed oatmeal.",
    care: "Wash cold, hang in shade. Linen likes being lived in.",
    mind: "Breathable cloth for mornings when the body needs air more than armour.",
  },
  {
    id: "rest-jacket",
    name: "Rest Jacket",
    price: 265,
    category: "wear",
    image: "images/jacket.jpg",
    tag: "Hemp",
    blurb: "Navy hemp-cotton chore coat. Arrives a little stiff. Becomes a favourite.",
    material: "55% hemp, 45% organic cotton. Horn buttons.",
    care: "Spot clean, cold wash rare. We mend this for life.",
    mind: "A layer you put between yourself and a loud street.",
  },
  {
    id: "soft-path-cardigan",
    name: "Soft Path Cardigan",
    price: 188,
    category: "rest",
    image: "images/cardigan.jpg",
    tag: "Knit",
    blurb: "Undyed organic cotton knit. Buttons you can undo without looking.",
    material: "Organic cotton knit, cream of the fibre.",
    care: "Cold wash, dry flat. Fold, do not rush.",
    mind: "Knit that holds without gripping. For reading, waiting, recovering.",
  },
  {
    id: "harbour-dress",
    name: "Harbour Dress",
    price: 210,
    category: "wear",
    image: "images/dress.jpg",
    tag: "Linen",
    blurb: "Navy linen midi, round neck, ease through the ribs. Air through the day.",
    material: "100% European flax linen, navy.",
    care: "Wash cold, hang in shade. Crease is character.",
    mind: "A dress that does not cinch. Space to breathe in public.",
  },
  {
    id: "ground-henley",
    name: "Ground Henley",
    price: 98,
    category: "wear",
    image: "images/henley.jpg",
    tag: "Organic cotton",
    blurb: "Oat long-sleeve henley, three buttons, a collar that sits still.",
    material: "Organic cotton jersey, oat undyed mix.",
    care: "Cold wash, hang dry.",
    mind: "The second skin for days you want fewer decisions.",
  },
  {
    id: "low-tide-shorts",
    name: "Low Tide Shorts",
    price: 88,
    category: "wear",
    image: "images/shorts.jpg",
    tag: "Twill",
    blurb: "Undyed organic twill shorts, drawstring, pockets that actually hold.",
    material: "Organic cotton twill, undyed.",
    care: "Cold wash, hang dry.",
    mind: "Bare calves, slower pace. A short walk counts as a silent action.",
  },
  {
    id: "breath-set",
    name: "Breath Set",
    price: 228,
    category: "rest",
    image: "images/lounge.jpg",
    tag: "Lounge",
    blurb: "Oat lounge set for the hour the day is too much. Top and wide pant.",
    material: "Organic cotton jersey, oat undyed mix.",
    care: "Cold wash, hang dry. Softer every week.",
    mind: "Clothes for sitting with the breath, not performing rest.",
  },
];

const SIZES = ["XS", "S", "M", "L", "XL"];
const CART_KEY = "silent-actions-cart";
const PAGE = document.body.dataset.page;

function money(n) {
  return `$${n.toFixed(2)}`;
}

function payLogos(extraClass = "") {
  return `
    <span class="pay-logos ${extraClass}">
      <img src="images/pay/afterpay.png" alt="Afterpay">
      <img src="images/pay/zip-pay.png" alt="Zip Pay">
    </span>
  `;
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function setCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateBagCount();
}

function cartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function cartTotal() {
  return getCart().reduce((sum, item) => {
    const product = PRODUCTS.find((p) => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

function addToCart(id, size = "M", qty = 1) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === id && item.size === size);
  if (existing) existing.qty += qty;
  else cart.push({ id, size, qty });
  setCart(cart);
  toast("Added to bag");
}

function updateQty(id, size, qty) {
  const cart = getCart()
    .map((item) => (item.id === id && item.size === size ? { ...item, qty } : item))
    .filter((item) => item.qty > 0);
  setCart(cart);
  renderCartPage();
}

function toast(message) {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2200);
}

function updateBagCount() {
  document.querySelectorAll("[data-bag-count]").forEach((el) => {
    const n = cartCount();
    el.textContent = n;
    el.hidden = n === 0;
  });
}

function headerHTML() {
  return `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="index.html">
          <img src="images/logo.png" alt="Silent Actions">
          <span class="brand-name">Silent Actions</span>
        </a>
        <nav class="nav-links" aria-label="Primary">
          <a href="shop.html" ${PAGE === "shop" || PAGE === "product" ? 'aria-current="page"' : ""}>Shop</a>
          <a href="mind.html" ${PAGE === "mind" ? 'aria-current="page"' : ""}>Mind</a>
          <a href="story.html" ${PAGE === "story" ? 'aria-current="page"' : ""}>Story</a>
        </nav>
        <div class="header-actions">
          <span class="slogan-chip">Be better Do better</span>
          <a class="icon-btn" href="cart.html" aria-label="Bag">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8a3 3 0 0 1 6 0"/>
            </svg>
            <span class="bag-count" data-bag-count hidden>0</span>
          </a>
          <button class="menu-toggle" aria-label="Open menu" data-menu-toggle>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
    <nav class="mobile-nav" data-mobile-nav>
      <a href="index.html">Home</a>
      <a href="shop.html">Shop</a>
      <a href="mind.html">Mind</a>
      <a href="story.html">Story</a>
      <a href="cart.html">Bag</a>
      <p class="eyebrow">Be better Do better</p>
    </nav>
  `;
}

function footerHTML() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <img class="footer-logo" src="images/logo-on-white.png" alt="Silent Actions">
          <div class="footer-brand">Silent Actions</div>
          <p class="footer-blurb">
            Ecological clothing for a quieter mind. Small batches, honest fibres, and one silent action at a time.
          </p>
          <p style="font-family:var(--font-serif);font-style:italic;font-size:1.45rem;margin:4px 0 12px">Be better Do better</p>
          <form class="newsletter" data-newsletter>
            <input type="email" name="email" placeholder="Your email" required>
            <button class="btn btn-light" type="submit">Join</button>
          </form>
        </div>
        <div class="footer-col">
          <p class="eyebrow">Shop</p>
          <a href="shop.html">The collection</a>
          <a href="product.html?id=mute-hoodie">Mute Hoodie</a>
          <a href="product.html?id=breath-set">Breath Set</a>
          <a href="cart.html">Bag &amp; checkout</a>
        </div>
        <div class="footer-col">
          <p class="eyebrow">Practice</p>
          <a href="mind.html">The Quiet Hour</a>
          <a href="mind.html#breath">Four breaths</a>
          <a href="story.html">Materials</a>
          <a href="story.html#repair">Repair for life</a>
        </div>
        <div class="footer-col">
          <p class="eyebrow">Pay over time</p>
          <p>Split your order with Afterpay or Zip Pay. Four payments, no interest, on orders that pass their checks.</p>
          <div class="pay-row" style="margin-top:12px">${payLogos()}</div>
        </div>
      </div>
      <div class="container legal">
        <span>© ${new Date().getFullYear()} Silent Actions. Made in small batches.</span>
        <span>Afterpay and Zip Pay available at checkout.</span>
      </div>
    </footer>
  `;
}

function productCard(product) {
  return `
    <a class="product-card" href="product.html?id=${product.id}">
      <div class="media">
        <span class="pill">${product.tag}</span>
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div>
        <h3>${product.name}</h3>
        <div class="price-row">
          <span>${money(product.price)}</span>
          <span class="bnpl">or 4 × ${money(product.price / 4)}</span>
          ${payLogos("pay-logos-sm")}
        </div>
      </div>
    </a>
  `;
}

function renderShop(filter = "all") {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;
  const list = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);
  grid.innerHTML = list.map(productCard).join("");
}

function selectedSize() {
  const pressed = document.querySelector(".size-row button[aria-pressed='true']");
  return pressed ? pressed.dataset.size : "M";
}

function renderProductPage() {
  const root = document.querySelector("[data-product]");
  if (!root) return;
  const id = new URLSearchParams(location.search).get("id") || "mute-hoodie";
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  document.title = `${product.name} — Silent Actions`;
  root.innerHTML = `
    <div class="product-gallery">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-info">
      <span class="eyebrow">${product.tag}</span>
      <h1>${product.name}</h1>
      <p class="lede">${product.blurb}</p>
      <p style="margin:18px 0 8px;font-size:1.4rem">${money(product.price)}</p>
      <p class="bnpl">4 interest-free payments of ${money(product.price / 4)}</p>
      <div class="pay-row" style="margin-top:12px">${payLogos()}</div>
      ${product.sized === false ? "" : `
      <p class="eyebrow" style="margin-top:28px">Size</p>
      <div class="size-row">
        ${SIZES.map((s) => `<button type="button" data-size="${s}" aria-pressed="${s === "M"}">${s}</button>`).join("")}
      </div>`}
      <button class="btn btn-dark btn-full" data-add>Add to bag</button>
      <div class="product-meta">
        <details open>
          <summary>Cloth &amp; planet</summary>
          <p>${product.material}</p>
        </details>
        <details>
          <summary>Mind</summary>
          <p>${product.mind}</p>
        </details>
        <details>
          <summary>Care</summary>
          <p>${product.care}</p>
        </details>
      </div>
    </div>
  `;
  root.querySelectorAll(".size-row button").forEach((btn) => {
    btn.addEventListener("click", () => {
      root.querySelectorAll(".size-row button").forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
    });
  });
  root.querySelector("[data-add]").addEventListener("click", () => {
    addToCart(product.id, product.sized === false ? "One size" : selectedSize());
  });
}

function renderFeatured() {
  const grid = document.querySelector("[data-featured]");
  if (!grid) return;
  grid.innerHTML = PRODUCTS.slice(0, 5).map(productCard).join("");
}

function renderCartPage() {
  const root = document.querySelector("[data-cart]");
  if (!root) return;
  const cart = getCart();
  if (!cart.length) {
    root.innerHTML = `
      <div class="empty">
        <p class="eyebrow">Bag</p>
        <h1 style="font-size:clamp(2.6rem,6vw,4.5rem);margin:10px 0 16px">Your bag is quiet.</h1>
        <a class="btn btn-dark" href="shop.html">Shop the collection</a>
      </div>
    `;
    return;
  }

  const total = cartTotal();
  const installment = total / 4;
  const items = cart.map((item) => {
    const product = PRODUCTS.find((p) => p.id === item.id);
    if (!product) return "";
    return `
      <article class="cart-item">
        <img src="${product.image}" alt="">
        <div>
          <h3>${product.name}</h3>
          <p class="pay-note">Size ${item.size}</p>
          <div class="qty">
            <button type="button" data-qty="${item.id}" data-size="${item.size}" data-delta="-1">−</button>
            <span>${item.qty}</span>
            <button type="button" data-qty="${item.id}" data-size="${item.size}" data-delta="1">+</button>
          </div>
        </div>
        <div class="price">${money(product.price * item.qty)}</div>
      </article>
    `;
  }).join("");

  const today = new Date();
  const dates = [0, 14, 28, 42].map((days) => {
    const d = new Date(today);
    d.setDate(d.getDate() + days);
    return d.toLocaleDateString("en-AU", { day: "numeric", month: "short" });
  });

  root.innerHTML = `
    <div>
      <p class="eyebrow">Bag</p>
      <h1 style="font-size:clamp(2.4rem,5vw,3.8rem);margin:8px 0 24px">Checkout in your own time.</h1>
      ${items}
    </div>
    <aside class="summary">
      <h2 style="font-size:1.8rem;margin-bottom:8px">Order</h2>
      <div class="summary-row"><span>Subtotal</span><span>${money(total)}</span></div>
      <div class="summary-row"><span>Shipping</span><span>Complimentary</span></div>
      <div class="summary-row"><strong>Total</strong><strong>${money(total)}</strong></div>
      <p class="pay-note" style="margin-top:12px">Pay in full, or split with Afterpay or Zip Pay.</p>
      <form class="pay-choice" data-checkout>
        <label>
          <input type="radio" name="pay" value="card" required>
          <span>Card</span>
          <span class="pay-badge pay-card">Pay now</span>
        </label>
        <label>
          <input type="radio" name="pay" value="afterpay">
          <span>Afterpay — 4 × ${money(installment)}</span>
          <img src="images/pay/afterpay.png" alt="Afterpay">
        </label>
        <label>
          <input type="radio" name="pay" value="zip">
          <span>Zip Pay — 4 × ${money(installment)}</span>
          <img src="images/pay/zip-pay.png" alt="Zip Pay">
        </label>
        <div class="schedule" data-schedule>
          ${dates.map((d, i) => `<div><strong>${i === 0 ? "Today" : d}</strong><br>${money(installment)}</div>`).join("")}
        </div>
        <div class="form-grid">
          <input name="name" placeholder="Full name" required>
          <input type="email" name="email" placeholder="Email" required>
          <input name="address" placeholder="Street address" required>
          <input name="city" placeholder="City" required>
          <input name="postcode" placeholder="Postcode" required>
        </div>
        <button class="btn btn-dark btn-full" type="submit" style="margin-top:16px">Place order</button>
        <p class="pay-note">Demo checkout — no payment is taken. Afterpay and Zip Pay would complete their own approval at this step.</p>
      </form>
    </aside>
  `;

  root.querySelectorAll("[data-qty]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = getCart().find((c) => c.id === btn.dataset.qty && c.size === btn.dataset.size);
      if (!item) return;
      updateQty(item.id, item.size, item.qty + Number(btn.dataset.delta));
    });
  });

  const form = root.querySelector("[data-checkout]");
  const schedule = root.querySelector("[data-schedule]");
  form.pay.forEach((input) => {
    input.addEventListener("change", () => {
      schedule.style.display = input.value === "card" ? "none" : "grid";
    });
  });
  schedule.style.display = "none";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const method = form.pay.value;
    const methodLabel = method === "afterpay" ? "Afterpay" : method === "zip" ? "Zip Pay" : "card";
    const order = "SA" + Math.floor(100000 + Math.random() * 900000);
    setCart([]);
    root.innerHTML = `
      <div class="confirm" style="grid-column:1/-1">
        <p class="eyebrow">Order ${order}</p>
        <h1 style="font-size:clamp(2.8rem,7vw,5rem);margin:12px 0">Be better. Do better.</h1>
        <p class="lede" style="margin:0 auto 24px">Thank you. Your order is in, paid with ${methodLabel}. A Quiet Hour prompt arrives with the parcel.</p>
        <a class="btn btn-dark" href="mind.html">Begin the quiet hour</a>
      </div>
    `;
  });
}

function initBreath() {
  const orb = document.querySelector("[data-orb]");
  const phase = document.querySelector("[data-phase]");
  const toggle = document.querySelector("[data-breath-toggle]");
  if (!orb || !phase || !toggle) return;

  const cycle = [
    { name: "Inhale", className: "inhale", ms: 4000 },
    { name: "Hold", className: "hold", ms: 4000 },
    { name: "Exhale", className: "exhale", ms: 4000 },
    { name: "Rest", className: "rest", ms: 4000 },
  ];
  let running = false;
  let timer;
  let index = 0;

  function step() {
    const current = cycle[index];
    orb.className = "orb " + current.className;
    phase.textContent = current.name;
    timer = setTimeout(() => {
      index = (index + 1) % cycle.length;
      if (running) step();
    }, current.ms);
  }

  toggle.addEventListener("click", () => {
    running = !running;
    toggle.textContent = running ? "Pause" : "Begin";
    if (running) step();
    else {
      clearTimeout(timer);
      phase.textContent = "Ready";
      orb.className = "orb";
      index = 0;
    }
  });
}

function mount() {
  const headerMount = document.querySelector("[data-header]");
  const footerMount = document.querySelector("[data-footer]");
  if (headerMount) headerMount.outerHTML = headerHTML();
  if (footerMount) footerMount.outerHTML = footerHTML();

  document.querySelector("[data-menu-toggle]")?.addEventListener("click", () => {
    document.querySelector("[data-mobile-nav]")?.classList.toggle("open");
  });

  document.querySelector("[data-newsletter]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    event.target.reset();
    toast("Welcome to the quiet list");
  });

  renderFeatured();
  renderShop();
  renderProductPage();
  renderCartPage();
  initBreath();
  updateBagCount();

  document.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      renderShop(btn.dataset.filter);
    });
  });
}

document.addEventListener("DOMContentLoaded", mount);
