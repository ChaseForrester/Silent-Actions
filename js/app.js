const PRODUCTS = [
  {
    id: "m-printed",
    name: "Printed Tee",
    price: 49,
    gender: "mens",
    group: "tees",
    style: "printed",
    category: "street",
    image: "images/m-printed.jpg",
    tag: "Men's / Unisex",
    flags: ["new"],
    blurb: "Navy Fairtrade cotton with a tonal mute mark. The print that stays quiet.",
    material: "180gsm Fairtrade organic cotton.",
    care: "Cold wash inside out, hang dry.",
    mind: "A small mark. A reminder to drop the volume.",
  },
  {
    id: "m-round",
    name: "Round Neck Tee",
    price: 42,
    gender: "mens",
    group: "tees",
    style: "round-neck",
    category: "street",
    image: "images/m-round.jpg",
    tag: "Men's / Unisex",
    flags: ["bestseller"],
    blurb: "The everyday navy crew. Cut to move from gym to street.",
    material: "180gsm Fairtrade organic cotton.",
    care: "Cold wash, hang dry.",
    mind: "One less decision in the morning.",
  },
  {
    id: "m-vneck",
    name: "V-Neck Tee",
    price: 42,
    gender: "mens",
    group: "tees",
    style: "v-neck",
    category: "street",
    image: "images/m-vneck.jpg",
    tag: "Men's / Unisex",
    flags: [],
    blurb: "Navy v-neck, same weight as the round neck, more air at the collar.",
    material: "180gsm Fairtrade organic cotton.",
    care: "Cold wash, hang dry.",
    mind: "Open at the throat. Easier to breathe.",
  },
  {
    id: "m-long",
    name: "Long Sleeve Tee",
    price: 55,
    gender: "mens",
    group: "tees",
    style: "long-sleeve",
    category: "street",
    image: "images/m-long.jpg",
    tag: "Men's / Unisex",
    flags: [],
    blurb: "Navy long sleeve for the pits, the commute, and the cool-down.",
    material: "180gsm Fairtrade organic cotton.",
    care: "Cold wash, hang dry.",
    mind: "Cover the arms. Keep the head clear.",
  },
  {
    id: "m-polo",
    name: "Polo Shirt",
    price: 58,
    gender: "mens",
    group: "polos",
    style: "polo",
    category: "street",
    image: "images/m-polo.jpg",
    tag: "Men's / Unisex",
    flags: ["new"],
    blurb: "Navy pique polo. Two buttons. Works at the club and off the track.",
    material: "Fairtrade organic cotton pique.",
    care: "Cold wash, hang dry.",
    mind: "Smart enough for the meeting. Soft enough for the drive home.",
  },
  {
    id: "m-crew",
    name: "Crew Neck",
    price: 89,
    gender: "mens",
    group: "crew-hoodies",
    style: "crew",
    category: "street",
    image: "images/m-crew.jpg",
    tag: "Men's / Unisex",
    flags: ["bestseller"],
    blurb: "Navy crew sweatshirt. Rib cuffs. The layer between session and street.",
    material: "Organic cotton fleece, recycled poly blend.",
    care: "Cold wash, hang dry.",
    mind: "Warmth without the hood. For when you still want to see.",
  },
  {
    id: "w-printed",
    name: "Women's Printed Tee",
    price: 49,
    gender: "womens",
    group: "tees",
    style: "printed",
    category: "street",
    image: "images/w-printed.jpg",
    tag: "Women's",
    flags: ["new"],
    blurb: "Fitted navy tee with a tonal mute mark. Fairtrade cotton.",
    material: "160gsm Fairtrade organic cotton, women's cut.",
    care: "Cold wash inside out, hang dry.",
    mind: "A quiet print. No slogan shouting from the chest.",
  },
  {
    id: "w-round",
    name: "Women's Round Neck Tee",
    price: 42,
    gender: "womens",
    group: "tees",
    style: "round-neck",
    category: "street",
    image: "images/w-round.jpg",
    tag: "Women's",
    flags: ["bestseller"],
    blurb: "Fitted navy crew. The one you live in.",
    material: "160gsm Fairtrade organic cotton, women's cut.",
    care: "Cold wash, hang dry.",
    mind: "Simple. Soft. Ready for the floor or the street.",
  },
  {
    id: "w-vneck",
    name: "Women's V-Neck Tee",
    price: 42,
    gender: "womens",
    group: "tees",
    style: "v-neck",
    category: "street",
    image: "images/w-vneck.jpg",
    tag: "Women's",
    flags: [],
    blurb: "Fitted navy v-neck. Same cloth as the round neck.",
    material: "160gsm Fairtrade organic cotton, women's cut.",
    care: "Cold wash, hang dry.",
    mind: "A little more air. A little less noise.",
  },
  {
    id: "w-long",
    name: "Women's Long Sleeve Tee",
    price: 55,
    gender: "womens",
    group: "tees",
    style: "long-sleeve",
    category: "street",
    image: "images/w-long.jpg",
    tag: "Women's",
    flags: [],
    blurb: "Fitted navy long sleeve. Layer it under the hoodie or wear it alone.",
    material: "160gsm Fairtrade organic cotton, women's cut.",
    care: "Cold wash, hang dry.",
    mind: "Sleeves as a boundary. Useful on loud days.",
  },
  {
    id: "w-singlet",
    name: "Women's Singlet",
    price: 38,
    gender: "womens",
    group: "singlets",
    style: "singlet",
    category: "gym",
    image: "images/w-singlet.jpg",
    tag: "Women's",
    flags: ["new"],
    blurb: "Navy racer-back singlet. Gym, ride, heat.",
    material: "Lightweight Fairtrade organic cotton jersey.",
    care: "Cold wash, hang dry.",
    mind: "Shoulders free. Breath in. Then work.",
  },
  {
    id: "w-crew",
    name: "Women's Crew Neck",
    price: 89,
    gender: "womens",
    group: "crew-hoodies",
    style: "crew",
    category: "street",
    image: "images/w-crew.jpg",
    tag: "Women's",
    flags: [],
    blurb: "Navy crew, relaxed women's fit. After the session, before the street.",
    material: "Organic cotton fleece, recycled poly blend.",
    care: "Cold wash, hang dry.",
    mind: "Soft armour for the cool-down.",
  },
  {
    id: "w-hoodie",
    name: "Women's Hoodie",
    price: 148,
    gender: "womens",
    group: "crew-hoodies",
    style: "hoodie",
    category: "street",
    image: "images/w-hoodie.jpg",
    tag: "Women's",
    flags: ["bestseller"],
    blurb: "Navy pullover hoodie, women's relaxed cut. Hood up when the day is too much.",
    material: "Organic cotton fleece with recycled poly in the hood.",
    care: "Cold wash, hang dry.",
    mind: "The mute button you can wear.",
  },
  {
    id: "bundle-mens",
    name: "Men's Essentials Bundle",
    price: 169,
    gender: "mens",
    group: "bundles",
    style: "bundle",
    category: "street",
    image: "images/hoodie.jpg",
    tag: "Bundle",
    flags: ["bundle", "new"],
    blurb: "Round neck tee plus Pit Hoodie. Save $21. One bag, two layers.",
    material: "Fairtrade cotton tee and organic fleece hoodie.",
    care: "Cold wash, hang dry.",
    mind: "Less choice. More doing.",
  },
  {
    id: "bundle-womens",
    name: "Women's Essentials Bundle",
    price: 165,
    gender: "womens",
    group: "bundles",
    style: "bundle",
    category: "street",
    image: "images/w-hoodie.jpg",
    tag: "Bundle",
    flags: ["bundle", "new"],
    blurb: "Singlet plus women's hoodie. Save $21. Gym to street in one hit.",
    material: "Fairtrade cotton singlet and organic fleece hoodie.",
    care: "Cold wash, hang dry.",
    mind: "Two pieces. One decision. Then train.",
  },
  {
    id: "mute-jersey",
    name: "Mute Jersey",
    price: 129,
    gender: "unisex",
    group: "mx",
    category: "mx",
    image: "images/jersey.jpg",
    tag: "Motocross",
    flags: ["new"],
    blurb: "Recycled poly mesh MX jersey. Vents heat. Stays quiet in the roost.",
    material: "Recycled polyester mesh, moisture-wicking, taped seams.",
    care: "Cold wash, hang dry. Knock the dirt off first.",
    mind: "Pre-gate box breathing lives in this kit. Four in, four hold, four out.",
  },
  {
    id: "gate-pants",
    name: "Gate Pants",
    price: 189,
    gender: "unisex",
    group: "mx",
    category: "mx",
    image: "images/mx-pants.jpg",
    tag: "Motocross",
    blurb: "Stretch riding pants with reinforced knees. Built for the whoops and the walk back.",
    material: "Stretch polyester-spandex with 600D overlays at the knee.",
    care: "Cold wash inside out. Hang dry.",
    mind: "The work nobody sees is the lap you still ride when the head is loud.",
  },
  {
    id: "pit-hoodie",
    name: "Pit Hoodie",
    price: 148,
    gender: "mens",
    group: "crew-hoodies",
    style: "hoodie",
    category: "mx",
    image: "images/hoodie.jpg",
    tag: "Men's / Unisex",
    flags: ["bestseller"],
    blurb: "Heavy navy pullover for the van, the gate, and the night after.",
    material: "Organic cotton fleece with recycled poly fill in the hood.",
    care: "Cold wash, hang dry.",
    mind: "Hood up. Phone down. Ten minutes before you load the bike.",
  },
  {
    id: "grind-tee",
    name: "Grind Tee",
    price: 65,
    gender: "unisex",
    group: "gym",
    category: "gym",
    flags: ["bestseller"],
    image: "images/tee.jpg",
    tag: "Gym",
    blurb: "Navy training tee. Wicks sweat. Does not cling when the set gets ugly.",
    material: "Recycled polyester-cotton performance knit.",
    care: "Cold wash, hang dry.",
    mind: "One more set is a silent action. So is walking out when you are done.",
  },
  {
    id: "lift-shorts",
    name: "Lift Shorts",
    price: 72,
    gender: "unisex",
    group: "gym",
    category: "gym",
    image: "images/shorts.jpg",
    tag: "Gym",
    blurb: "7-inch training shorts, split hem, drawstring that stays tied.",
    material: "Four-way stretch recycled poly, lined brief.",
    care: "Cold wash, hang dry.",
    mind: "Room to squat, hinge, and breathe. Nothing rides up when you drop in.",
  },
  {
    id: "set-joggers",
    name: "Set Joggers",
    price: 98,
    gender: "unisex",
    group: "gym",
    category: "gym",
    image: "images/joggers.jpg",
    tag: "Gym",
    blurb: "Tapered navy joggers. Zip pocket for the key. Cuff that stays put.",
    material: "Brushed performance fleece, recycled content.",
    care: "Cold wash, hang dry.",
    mind: "Warm-up, cool-down, walk home. Recovery is still the session.",
  },
  {
    id: "cut-tank",
    name: "Cut Tank",
    price: 58,
    gender: "unisex",
    group: "gym",
    category: "gym",
    image: "images/tank.jpg",
    tag: "Gym",
    blurb: "Dropped-armhole tank. Air through the work. Navy, no graphics.",
    material: "Lightweight recycled poly jersey.",
    care: "Cold wash, hang dry.",
    mind: "Shoulders free. Jaw unclenched. Lift with the breath, not the noise.",
  },
  {
    id: "block-tee",
    name: "Block Tee",
    price: 75,
    gender: "unisex",
    group: "tees",
    style: "round-neck",
    category: "street",
    image: "images/street-tee.jpg",
    tag: "Street",
    blurb: "Oversized heavyweight white tee. Boxy. The one you throw on after the track.",
    material: "240gsm organic cotton, undyed white.",
    care: "Cold wash, hang dry.",
    mind: "Street kit that does not perform. Just sits right after a long day.",
  },
  {
    id: "night-cargo",
    name: "Night Cargo",
    price: 158,
    gender: "unisex",
    group: "street",
    category: "street",
    image: "images/cargos.jpg",
    tag: "Street",
    blurb: "Navy technical cargos. Pockets for keys, wraps, and nothing extra.",
    material: "Recycled nylon-cotton blend, articulated knee.",
    care: "Cold wash, hang dry.",
    mind: "Move from gym to street without changing who you are in them.",
  },
  {
    id: "silent-bomber",
    name: "Silent Bomber",
    price: 195,
    gender: "unisex",
    group: "street",
    category: "street",
    image: "images/bomber.jpg",
    tag: "Street",
    blurb: "Navy bomber, rib collar, clean zip. Track dust optional.",
    material: "Recycled nylon shell, organic cotton lining.",
    care: "Spot clean, cold wash rare.",
    mind: "The layer between the session and the world. Zip it when you need quiet.",
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

function certLogos(extraClass = "") {
  return `
    <div class="cert-logos ${extraClass}">
      <img src="images/certs/fairtrade.png" alt="Fairtrade">
      <img src="images/certs/bcorp.png" alt="Certified B Corporation">
      <img src="images/certs/social-traders.png" alt="Social Traders Certified Social Enterprise">
    </div>
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

function shopNavHTML() {
  return `
    <div class="shop-nav">
      <div>
        <p class="shop-nav-head">Men's / Unisex</p>
        <p class="shop-nav-sub">T-shirts</p>
        <a href="shop.html?dept=mens&amp;cat=tees&amp;style=printed">Printed</a>
        <a href="shop.html?dept=mens&amp;cat=tees&amp;style=round-neck">Round neck</a>
        <a href="shop.html?dept=mens&amp;cat=tees&amp;style=v-neck">V-neck</a>
        <a href="shop.html?dept=mens&amp;cat=tees&amp;style=long-sleeve">Long sleeve</a>
        <a class="shop-nav-sublink" href="shop.html?dept=mens&amp;cat=polos">Polo shirts</a>
        <a class="shop-nav-sublink" href="shop.html?dept=mens&amp;cat=crew-hoodies">Crew necks &amp; hoodies</a>
        <a href="size-guide.html">Size guide</a>
        <a href="shop.html?dept=new">New in stock</a>
        <a href="shop.html?dept=bestsellers">Bestsellers</a>
        <a href="shop.html?dept=bundles">Bundle deals</a>
      </div>
      <div>
        <p class="shop-nav-head">Women's</p>
        <p class="shop-nav-sub">T-shirts</p>
        <a href="shop.html?dept=womens&amp;cat=tees&amp;style=printed">Printed</a>
        <a href="shop.html?dept=womens&amp;cat=tees&amp;style=round-neck">Round neck</a>
        <a href="shop.html?dept=womens&amp;cat=tees&amp;style=v-neck">V-neck</a>
        <a href="shop.html?dept=womens&amp;cat=tees&amp;style=long-sleeve">Long sleeve</a>
        <a class="shop-nav-sublink" href="shop.html?dept=womens&amp;cat=singlets">Singlets</a>
        <a class="shop-nav-sublink" href="shop.html?dept=womens&amp;cat=crew-hoodies">Crew necks &amp; hoodies</a>
      </div>
    </div>
  `;
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
          <div class="has-mega">
            <a href="shop.html" ${PAGE === "shop" || PAGE === "product" ? 'aria-current="page"' : ""}>Shop</a>
            <div class="mega">${shopNavHTML()}</div>
          </div>
          <a href="mind.html" ${PAGE === "mind" ? 'aria-current="page"' : ""}>Mind</a>
          <a href="story.html" ${PAGE === "story" ? 'aria-current="page"' : ""}>Story</a>
          <a href="size-guide.html" ${PAGE === "size" ? 'aria-current="page"' : ""}>Size guide</a>
        </nav>
        <div class="header-actions">
          <span class="slogan-chip">Mute the ping</span>
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
      ${shopNavHTML()}
      <a href="mind.html">Mind</a>
      <a href="story.html">Story</a>
      <a href="size-guide.html">Size guide</a>
      <a href="cart.html">Bag</a>
      <p class="eyebrow">Mute the ping. Keep the work.</p>
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
            Mute the ping. Keep the work. Motocross, gym, and streetwear in organic cotton and recycled fibre.
          </p>
          <p style="font-family:var(--font-serif);font-size:1.45rem;margin:4px 0 12px">Be better Do better</p>
          <form class="newsletter" data-newsletter>
            <input type="email" name="email" placeholder="Your email" required>
            <button class="btn btn-light" type="submit">Join</button>
          </form>
        </div>
        <div class="footer-col">
          <p class="eyebrow">Shop</p>
          <a href="shop.html">The collection</a>
          <a href="shop.html?dept=mens">Men's / Unisex</a>
          <a href="shop.html?dept=womens">Women's</a>
          <a href="shop.html?dept=bundles">Bundle deals</a>
          <a href="size-guide.html">Size guide</a>
          <a href="cart.html">Bag &amp; checkout</a>
        </div>
        <div class="footer-col">
          <p class="eyebrow">Practice</p>
          <a href="mind.html">The mental game</a>
          <a href="mind.html#breath">Four breaths</a>
          <a href="story.html">The three lanes</a>
          <a href="story.html#repair">Repair</a>
        </div>
        <div class="footer-col">
          <p class="eyebrow">Pay over time</p>
          <p>Split your order with Afterpay or Zip Pay. Four payments, no interest, on orders that pass their checks.</p>
          <div class="pay-row" style="margin-top:12px">${payLogos()}</div>
        </div>
      </div>
      <div class="container cert-footer">
        <p class="eyebrow">Certified</p>
        ${certLogos("cert-logos-on-dark")}
      </div>
      <div class="container legal">
        <span>© ${new Date().getFullYear()} Silent Actions. Made in small batches.</span>
        <span>Fairtrade · B Corp · Social Traders · Afterpay and Zip Pay at checkout.</span>
      </div>
    </footer>
  `;
}

function productCard(product, index = 0) {
  const tilts = [-2.8, 2.2, -1.4, 3, -2, 1.6, -3.2, 2.6];
  const tilt = tilts[index % tilts.length];
  const pill = product.flags?.includes("new") ? "New" : product.flags?.includes("bestseller") ? "Bestseller" : product.flags?.includes("bundle") ? "Bundle" : product.tag;
  return `
    <a class="product-card" href="product.html?id=${product.id}" style="--tilt:${tilt}deg;--delay:${index * 70}ms">
      <span class="pin" aria-hidden="true"></span>
      <div class="media">
        <span class="pill">${pill}</span>
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="polaroid-caption">
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

function shopQuery() {
  return new URLSearchParams(location.search);
}

function shopTitle(params) {
  const dept = params.get("dept");
  const cat = params.get("cat");
  const style = params.get("style");
  if (dept === "new") return "New in stock";
  if (dept === "bestsellers") return "Bestsellers";
  if (dept === "bundles") return "Bundle deals";
  const who = dept === "womens" ? "Women's" : dept === "mens" ? "Men's / Unisex" : "";
  const styles = {
    printed: "Printed t-shirts",
    "round-neck": "Round neck t-shirts",
    "v-neck": "V-neck t-shirts",
    "long-sleeve": "Long sleeve t-shirts",
  };
  const cats = {
    tees: "T-shirts",
    polos: "Polo shirts",
    singlets: "Singlets",
    "crew-hoodies": "Crew necks & hoodies",
  };
  if (style && styles[style]) return `${who} ${styles[style]}`.trim();
  if (cat && cats[cat]) return `${who} ${cats[cat]}`.trim();
  if (who) return who;
  return "The collection";
}

function filterProducts(params) {
  const dept = params.get("dept") || "all";
  const cat = params.get("cat");
  const style = params.get("style");
  const lane = params.get("lane");
  return PRODUCTS.filter((p) => {
    if (lane) return p.category === lane;
    if (dept === "all") return true;
    if (dept === "new") return p.flags?.includes("new");
    if (dept === "bestsellers") return p.flags?.includes("bestseller");
    if (dept === "bundles") return p.group === "bundles";
    if (dept === "mens") {
      const apparel = ["tees", "polos", "crew-hoodies", "bundles"];
      if (p.gender !== "mens" && p.gender !== "unisex") return false;
      if (!cat && !style && p.gender === "unisex" && !apparel.includes(p.group)) return false;
      if (cat && p.group !== cat) return false;
      if (style && p.style !== style) return false;
      return true;
    }
    if (dept === "womens") {
      if (p.gender !== "womens") return false;
      if (cat && p.group !== cat) return false;
      if (style && p.style !== style) return false;
      return true;
    }
    return true;
  });
}

function renderShop() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;
  const params = shopQuery();
  const list = filterProducts(params);
  const title = document.querySelector("[data-shop-title]");
  const lede = document.querySelector("[data-shop-lede]");
  if (title) title.textContent = shopTitle(params);
  if (lede) {
    lede.textContent = list.length
      ? `${list.length} piece${list.length === 1 ? "" : "s"}. Recycled and Fairtrade fibres. Afterpay and Zip Pay on every order.`
      : "Nothing in this lane yet.";
  }
  const nav = document.querySelector("[data-shop-nav]");
  if (nav) nav.innerHTML = shopNavHTML();
  grid.innerHTML = list.map((p, i) => productCard(p, i)).join("");
}

function selectedSize() {
  const pressed = document.querySelector(".size-row button[aria-pressed='true']");
  return pressed ? pressed.dataset.size : "M";
}

function renderProductPage() {
  const root = document.querySelector("[data-product]");
  if (!root) return;
  const id = new URLSearchParams(location.search).get("id") || "mute-jersey";
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
      <p class="pay-note" style="margin-top:14px"><a href="size-guide.html" style="text-decoration:underline;text-underline-offset:3px">Size guide</a></p>
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
  const ids = ["m-printed", "w-singlet", "m-polo", "pit-hoodie", "w-hoodie"];
  grid.innerHTML = ids
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean)
    .map((p, i) => productCard(p, i))
    .join("");
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

function initMotion() {
  const nodes = document.querySelectorAll(".product-card, .reveal, .split > img, .band img");
  nodes.forEach((el, i) => {
    el.classList.add("will-reveal");
    if (!el.style.getPropertyValue("--delay")) el.style.setProperty("--delay", `${(i % 8) * 70}ms`);
  });
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  nodes.forEach((el) => io.observe(el));
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
  initMotion();

  document.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      const lane = btn.dataset.filter;
      const url = new URL(location.href);
      if (lane === "all") url.searchParams.delete("lane");
      else url.searchParams.set("lane", lane);
      history.replaceState({}, "", url);
      renderShop();
      initMotion();
    });
  });
}

document.addEventListener("DOMContentLoaded", mount);
