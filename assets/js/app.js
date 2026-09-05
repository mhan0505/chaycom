/**
 * CHÁY CƠM - E-COMMERCE APPLICATION (WOOCOMMERCE ENGINE SIMULATOR)
 * Features:
 * - 6 Product Catalog with Variants & Categories
 * - Shopping Cart with LocalStorage Persistence
 * - Mini-Cart Slide-out Drawer
 * - Full Cart & Checkout with COD Method
 * - Order Confirmation Screen
 * - Single Product Modal / Quick View
 * - SPA Tab Router (Home, Shop, About, Quality, Contact, Cart, Checkout, ThankYou)
 */

// 1. DATA CATALOG (6 SẢN PHẨM CHUẨN KẾ HOẠCH)
const PRODUCTS = [
  {
    id: 'com-chay-cha-bong-sot-mam',
    name: 'Cơm Cháy Chà Bông Sốt Mắm Cay Ngọt (Đặc Biệt)',
    category: 'bestseller',
    categoryName: 'Bán chạy',
    price: 65000,
    regularPrice: 85000,
    onSale: true,
    rating: 5,
    reviewsCount: 48,
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&auto=format&fit=crop&q=80',
    shortDesc: 'Cơm cháy ép chảo dày dặn vàng óng, giòn rụm, đẫm sốt mắm ớt cay ngọt kẹo sánh và ngập tràn chà bông heo tươi tơi xốp.',
    fullDesc: 'Sản phẩm chủ lực (Flagship) của CHÁY CƠM. Hạt nếp cái hoa vàng được ép chảo gang thủ công, chiên dầu mới 100% vàng ươm giòn tan. Lớp sốt nước mắm cá cơm Phú Quốc đậm đà kẹo sánh quyện cùng ớt tươi cay the, rải kín mặt bằng chà bông thịt heo nóng hổi ngọt thịt.',
    hasVariants: true,
    variants: [
      { name: 'Hộp 250g (Ăn vặt gia đình)', price: 65000 },
      { name: 'Túi Zip 500g (Tiết kiệm)', price: 120000 }
    ],
    sku: 'CC-CB-01'
  },
  {
    id: 'com-chay-ga-la-chanh',
    name: 'Cơm Cháy Gà Lá Chanh Cay Nồng',
    category: 'spicy',
    categoryName: 'Cay nồng',
    price: 55000,
    regularPrice: 65000,
    onSale: true,
    rating: 5,
    reviewsCount: 32,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
    shortDesc: 'Sự hòa quyện bùng nổ giữa cơm cháy giòn rụm và khô gà xé cay thơm nức mùi lá chanh sấy, kích thích vị giác cực độ.',
    fullDesc: 'Khô gà lá chanh cay xé sợi óng vàng kết hợp cùng cơm cháy giòn tan. Mùi thơm đặc trưng của lá chanh tươi sấy nhiệt giúp cân bằng vị cay the, là món ăn vặt lý tưởng cho dân văn phòng và các buổi tụ tập bạn bè.',
    hasVariants: false,
    sku: 'CC-GLC-02'
  },
  {
    id: 'com-chay-rong-bien',
    name: 'Cơm Cháy Rong Biển Sốt Tỏi (Ăn Chay)',
    category: 'vegetarian',
    categoryName: 'Ăn chay',
    price: 50000,
    regularPrice: 50000,
    onSale: false,
    rating: 4.8,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&auto=format&fit=crop&q=80',
    shortDesc: 'Miếng cơm cháy giòn tan kết hợp rong biển Hàn Quốc thơm bùi và sốt mắm tỏi ớt chay đậm đà, thanh nhẹ ít calo.',
    fullDesc: 'Dành riêng cho khách hàng ăn chay hoặc thích hương vị thanh nhẹ. Rong biển mè rang giòn thơm bọc bên ngoài lớp cơm cháy, sốt mắm chay nấu từ đậu nành lên men và tỏi ớt thơm lừng.',
    hasVariants: false,
    sku: 'CC-RB-03'
  },
  {
    id: 'com-chay-mo-hanh',
    name: 'Cơm Cháy Mỡ Hành Tép Sấy Sài Gòn',
    category: 'snack',
    categoryName: 'Ăn vặt',
    price: 45000,
    regularPrice: 50000,
    onSale: true,
    rating: 4.9,
    reviewsCount: 27,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80',
    shortDesc: 'Hương vị đường phố đặc trưng: cơm cháy giòn rụm rưới mỡ hành thơm ngậy, rắc tép sấy đỏ au vị ngọt tự nhiên mê hoặc.',
    fullDesc: 'Tái hiện nguyên vẹn phong vị ẩm thực đường phố Sài Gòn xưa. Mỡ hành lá xanh mướt phi thơm cùng tép đồng sấy ngọt thịt, vị béo ngậy giòn bùi ăn mãi không ngấy.',
    hasVariants: false,
    sku: 'CC-MH-04'
  },
  {
    id: 'com-chay-pho-mai',
    name: 'Cơm Cháy Chà Bông Phô Mai Lắc',
    category: 'snack',
    categoryName: 'Ăn vặt',
    price: 70000,
    regularPrice: 70000,
    onSale: false,
    rating: 4.9,
    reviewsCount: 15,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&auto=format&fit=crop&q=80',
    shortDesc: 'Phiên bản hiện đại: chà bông thịt heo kết hợp bột phô mai béo ngậy, ngọt mặn lạ miệng ăn hoài không ngán.',
    fullDesc: 'Sự đột phá đầy cuốn hút dành cho giới trẻ: bột phô mai Cheddar béo ngậy được lắc đều bám chặt vào từng sợi chà bông tơi xốp và miếng cơm cháy giòn rụm.',
    hasVariants: false,
    sku: 'CC-PM-05'
  },
  {
    id: 'set-qua-tang',
    name: 'Set Quà Tặng "Vị Quê Hương" (Hộp 4 Vị Cao Cấp)',
    category: 'gift',
    categoryName: 'Quà biếu',
    price: 230000,
    regularPrice: 280000,
    onSale: true,
    rating: 5,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b5ab8?w=600&auto=format&fit=crop&q=80',
    shortDesc: 'Hộp quà sang trọng gồm 4 vị best-seller đóng hộp cao cấp kèm thiệp, món quà biếu ý nghĩa đậm đà bản sắc ẩm thực Việt.',
    fullDesc: 'Hộp quà biếu thiết kế bằng giấy kraft thủ công cao cấp in họa tiết hoa sen truyền thống. Bao gồm 4 hộp cơm cháy: Chà Bông Sốt Mắm, Gà Lá Chanh, Mỡ Hành Tép Sấy và Rong Biển Chay, gửi trọn ân tình đến người thân và đối tác.',
    hasVariants: false,
    sku: 'CC-GIFT-06'
  }
];

// 2. STATE MANAGEMENT
let cart = JSON.parse(localStorage.getItem('CHAYCOM_CART')) || [];
let activeCategory = 'all';
let currentProductInModal = null;
let selectedVariant = null;

// Currency Formatter
function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount).replace('₫', 'đ');
}

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  renderProductGrid(PRODUCTS, 'product-grid-container');
  renderProductGrid(PRODUCTS.slice(0, 4), 'bestsellers-grid-container');
  updateCartBadge();
  setupEventListeners();

  // Load route from hash if exists
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    navigateTo(hash);
  } else {
    navigateTo('home');
  }
});

// 4. EVENT LISTENERS
function setupEventListeners() {
  // Mobile Nav Toggle
  const menuBtn = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  // Cart Drawer open/close
  document.getElementById('cartTriggerBtn').addEventListener('click', openCartDrawer);
  document.getElementById('closeCartDrawer').addEventListener('click', closeCartDrawer);
  document.getElementById('cartDrawerOverlay').addEventListener('click', closeCartDrawer);

  // Category Filter Buttons
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.getAttribute('data-cat');
      filterProductsByCategory(cat);
    });
  });

  // Modal Close
  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  document.getElementById('productModalBackdrop').addEventListener('click', (e) => {
    if (e.target.id === 'productModalBackdrop') closeModal();
  });

  // Checkout Form Submit
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  }

  // Contact Form Submit
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Cảm ơn bạn! CHÁY CƠM đã nhận được tin nhắn và sẽ gọi lại sớm.');
      contactForm.reset();
    });
  }
}

// 5. RENDER PRODUCTS
function renderProductGrid(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = products.map(p => `
    <div class="woo-product-card" data-id="${p.id}">
      ${p.onSale ? `<span class="badge-onsale">Giảm Giá!</span>` : ''}
      <div class="product-thumb-wrap" onclick="openProductModal('${p.id}')">
        <img src="${p.image}" alt="${p.name}" class="product-thumb-img" loading="lazy">
      </div>
      <div class="product-content">
        <span class="product-cat-name">${p.categoryName}</span>
        <h3 class="product-name" onclick="openProductModal('${p.id}')">${p.name}</h3>
        <div class="star-rating">
          <span>★★★★★</span>
          <span class="rating-count">(${p.reviewsCount})</span>
        </div>
        <p class="product-short-desc">${p.shortDesc}</p>
        <div class="product-price-wrap">
          <span class="price-current">${formatVND(p.price)}</span>
          ${p.regularPrice > p.price ? `<span class="price-old">${formatVND(p.regularPrice)}</span>` : ''}
        </div>
        <div class="card-action-btns">
          <button class="btn-add-cart" onclick="handleCardAddToCart('${p.id}')">
            ${p.hasVariants ? 'Chọn Quy Cách' : 'Thêm Vào Giỏ'}
          </button>
          <button class="btn-quick-view" onclick="openProductModal('${p.id}')" title="Xem nhanh">
            👁
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProductsByCategory(cat) {
  if (cat === 'all') {
    renderProductGrid(PRODUCTS, 'product-grid-container');
  } else {
    const filtered = PRODUCTS.filter(p => p.category === cat);
    renderProductGrid(filtered, 'product-grid-container');
  }
}

// 6. PRODUCT MODAL & VARIANTS (PDP SIMULATION)
function openProductModal(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  currentProductInModal = p;
  selectedVariant = p.hasVariants ? p.variants[0] : null;

  document.getElementById('modalImg').src = p.image;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalCategory').textContent = p.categoryName;
  document.getElementById('modalSku').textContent = p.sku;
  document.getElementById('modalFullDesc').textContent = p.fullDesc;
  document.getElementById('modalQtyInput').value = 1;

  updateModalPrice();

  // Render Variants if any
  const variantWrap = document.getElementById('modalVariantSection');
  if (p.hasVariants) {
    variantWrap.style.display = 'block';
    variantWrap.innerHTML = `
      <label class="variant-label">Chọn Quy Cách / Dung Tích:</label>
      <div class="variant-options">
        ${p.variants.map((v, idx) => `
          <button class="variant-btn ${idx === 0 ? 'selected' : ''}" onclick="selectVariantByIndex(${idx}, this)">
            ${v.name} - ${formatVND(v.price)}
          </button>
        `).join('')}
      </div>
    `;
  } else {
    variantWrap.style.display = 'none';
  }

  document.getElementById('productModalBackdrop').classList.add('active');
}

function selectVariantByIndex(idx, btn) {
  document.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedVariant = currentProductInModal.variants[idx];
  updateModalPrice();
}

function updateModalPrice() {
  const priceDisplay = document.getElementById('modalPrice');
  const currentPrice = selectedVariant ? selectedVariant.price : currentProductInModal.price;
  priceDisplay.textContent = formatVND(currentPrice);
}

function changeModalQty(delta) {
  const input = document.getElementById('modalQtyInput');
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  input.value = val;
}

function closeModal() {
  document.getElementById('productModalBackdrop').classList.remove('active');
  currentProductInModal = null;
}

function addModalToCart() {
  if (!currentProductInModal) return;
  const qty = parseInt(document.getElementById('modalQtyInput').value) || 1;
  addToCart(currentProductInModal, selectedVariant, qty);
  closeModal();
  openCartDrawer();
}

function handleCardAddToCart(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;
  if (p.hasVariants) {
    openProductModal(productId);
  } else {
    addToCart(p, null, 1);
    openCartDrawer();
  }
}

// 7. CART ENGINE (LOCALSTORAGE)
function addToCart(product, variant, qty = 1) {
  const variantName = variant ? variant.name : 'Tiêu chuẩn';
  const price = variant ? variant.price : product.price;
  const cartKey = `${product.id}-${variantName}`;

  const existing = cart.find(item => item.key === cartKey);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      key: cartKey,
      id: product.id,
      name: product.name,
      variantName: variantName,
      price: price,
      image: product.image,
      qty: qty
    });
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  renderCartPage();
  showToast(`Đã thêm "${product.name}" vào giỏ hàng!`);
}

function updateCartItemQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(key);
  } else {
    saveCart();
    renderCartDrawer();
    renderCartPage();
    updateCartBadge();
  }
}

function removeFromCart(key) {
  cart = cart.filter(i => i.key !== key);
  saveCart();
  renderCartDrawer();
  renderCartPage();
  updateCartBadge();
  showToast('Đã xóa sản phẩm khỏi giỏ hàng.');
}

function saveCart() {
  localStorage.setItem('CHAYCOM_CART', JSON.stringify(cart));
}

function getCartSubtotal() {
  return cart.reduce((total, item) => total + (item.price * item.qty), 0);
}

function updateCartBadge() {
  const count = cart.reduce((total, item) => total + item.qty, 0);
  document.getElementById('headerCartCount').textContent = count;
}

// 8. MINI CART DRAWER
function openCartDrawer() {
  renderCartDrawer();
  document.getElementById('cartDrawer').classList.add('active');
  document.getElementById('cartDrawerOverlay').classList.add('active');
}

function closeCartDrawer() {
  document.getElementById('cartDrawer').classList.remove('active');
  document.getElementById('cartDrawerOverlay').classList.remove('active');
}

function renderCartDrawer() {
  const body = document.getElementById('drawerCartItems');
  const subtotalEl = document.getElementById('drawerSubtotal');

  if (cart.length === 0) {
    body.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: #888;">
        <p style="font-size: 40px; margin-bottom: 10px;">🛒</p>
        <p>Chưa có sản phẩm nào trong giỏ hàng.</p>
        <button class="woo-btn" style="margin-top: 15px; font-size: 13px;" onclick="closeCartDrawer(); navigateTo('shop');">Xem Cửa Hàng</button>
      </div>
    `;
    subtotalEl.textContent = '0đ';
    return;
  }

  body.innerHTML = cart.map(item => `
    <div class="drawer-item">
      <img src="${item.image}" alt="${item.name}" class="drawer-item-img">
      <div class="drawer-item-info">
        <h5>${item.name}</h5>
        <span style="font-size: 11px; color: #888;">${item.variantName}</span>
        <div class="drawer-item-price">${formatVND(item.price)} × ${item.qty}</div>
      </div>
      <button class="drawer-remove-btn" onclick="removeFromCart('${item.key}')" title="Xóa">✕</button>
    </div>
  `).join('');

  subtotalEl.textContent = formatVND(getCartSubtotal());
}

// 9. CART PAGE VIEW
function renderCartPage() {
  const container = document.getElementById('cartTableBody');
  const cartTotals = document.getElementById('cartPageTotals');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 40px; color: #888;">
          Giỏ hàng của bạn hiện đang trống.
          <br><br>
          <button class="woo-btn" onclick="navigateTo('shop')">Quay Lại Cửa Hàng</button>
        </td>
      </tr>
    `;
    if (cartTotals) cartTotals.textContent = '0đ';
    return;
  }

  container.innerHTML = cart.map(item => `
    <tr>
      <td style="padding: 12px 0;">
        <button class="drawer-remove-btn" onclick="removeFromCart('${item.key}')">✕</button>
      </td>
      <td>
        <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; border-radius: 4px; object-fit: cover;">
      </td>
      <td>
        <strong>${item.name}</strong><br>
        <small style="color: #777;">${item.variantName}</small>
      </td>
      <td>${formatVND(item.price)}</td>
      <td>
        <div class="qty-stepper" style="display: inline-flex;">
          <button class="qty-btn" onclick="updateCartItemQty('${item.key}', -1)">-</button>
          <input type="text" class="qty-input" value="${item.qty}" readonly>
          <button class="qty-btn" onclick="updateCartItemQty('${item.key}', 1)">+</button>
        </div>
      </td>
      <td><strong>${formatVND(item.price * item.qty)}</strong></td>
    </tr>
  `).join('');

  if (cartTotals) {
    const sub = getCartSubtotal();
    cartTotals.textContent = formatVND(sub);
    document.getElementById('cartGrandTotal').textContent = formatVND(sub);
  }
}

// 10. CHECKOUT & COD PROCESSOR
function renderCheckoutPage() {
  const listEl = document.getElementById('checkoutReviewItems');
  const subtotalEl = document.getElementById('checkoutSubtotal');
  const totalEl = document.getElementById('checkoutGrandTotal');

  if (cart.length === 0) {
    listEl.innerHTML = `<tr><td colspan="2">Giỏ hàng rỗng. Vui lòng thêm sản phẩm trước khi thanh toán.</td></tr>`;
    subtotalEl.textContent = '0đ';
    totalEl.textContent = '0đ';
    return;
  }

  listEl.innerHTML = cart.map(item => `
    <tr>
      <td>${item.name} (${item.variantName}) × <strong>${item.qty}</strong></td>
      <td style="text-align: right; font-weight: 600;">${formatVND(item.price * item.qty)}</td>
    </tr>
  `).join('');

  const sub = getCartSubtotal();
  subtotalEl.textContent = formatVND(sub);
  totalEl.textContent = formatVND(sub);
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  if (cart.length === 0) {
    alert('Giỏ hàng của bạn đang trống!');
    return;
  }

  const name = document.getElementById('billingName').value;
  const phone = document.getElementById('billingPhone').value;
  const address = document.getElementById('billingAddress').value;
  const note = document.getElementById('billingNote').value;

  const orderId = '#CC-' + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const dateStr = now.toLocaleDateString('vi-VN') + ' ' + now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

  // Populate Thank you screen
  document.getElementById('thankOrderId').textContent = orderId;
  document.getElementById('thankDate').textContent = dateStr;
  document.getElementById('thankTotal').textContent = formatVND(getCartSubtotal());
  document.getElementById('thankPaymentMethod').textContent = 'Thanh toán khi nhận hàng (COD)';
  document.getElementById('thankCustomerDetails').textContent = `${name} | ${phone} - ${address}`;

  // Clear Cart
  cart = [];
  saveCart();
  updateCartBadge();

  // Navigate to Thankyou
  navigateTo('thankyou');
}

// 11. SPA ROUTING
function navigateTo(pageId) {
  // Hide all pages
  document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));

  // Highlight Nav
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-target') === pageId) {
      link.classList.add('active');
    }
  });

  // Show target page
  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Hook specific renderers
  if (pageId === 'cart') renderCartPage();
  if (pageId === 'checkout') renderCheckoutPage();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 12. TOAST NOTIFICATION
function showToast(message) {
  const toast = document.getElementById('toastNotice');
  toast.textContent = message;
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 2800);
}
