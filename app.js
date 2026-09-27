// Product Catalog Data
const products = [
    {
        id: 1,
        title: "Apex Wireless ANC Headphones",
        category: "electronics",
        price: 299.00,
        desc: "Immersive high-fidelity audio with industry-leading hybrid active noise cancellation and 40-hour battery life.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>'
    },
    {
        id: 2,
        title: "Zenith Minimalist Chronograph",
        category: "lifestyle",
        price: 185.00,
        desc: "Precision Swiss quartz movement housed in a sleek brushed titanium case with genuine Italian leather strap.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>'
    },
    {
        id: 3,
        title: "KnitTech Merino Wool Pullover",
        category: "fashion",
        price: 120.00,
        desc: "Ultra-soft, temperature-regulating Merino wool sweater designed for seamless transition from office to evening.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H5v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10h1.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>'
    },
    {
        id: 4,
        title: "Luminary Smart Desk Lamp",
        category: "electronics",
        price: 89.00,
        desc: "Customizable color temperature and brightness levels with built-in fast wireless charging pad in base.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2v1"></path><path d="M12 6a6 6 0 0 0-6 6c0 2 1 3 2 4h8c1-1 2-2 2-4a6 6 0 0 0-6-6z"></path></svg>'
    },
    {
        id: 5,
        title: "Nomad Leather Weekend Duffel",
        category: "fashion",
        price: 340.00,
        desc: "Handcrafted full-grain leather travel bag with reinforced brass hardware and dedicated laptop compartment.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>'
    },
    {
        id: 6,
        title: "Quantum Ergonomic Water Bottle",
        category: "lifestyle",
        price: 45.00,
        desc: "Double-wall vacuum insulated stainless steel bottle keeps beverages ice-cold for 24 hours.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 2h4v2h-4z"></path><path d="M14 4v3.28a2 2 0 0 1-.58 1.41L11 11.14V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-8.86l-2.42-2.43A2 2 0 0 1 14 7.28V4z"></path></svg>'
    },
    {
        id: 7,
        title: "Pulse Pro Mechanical Keyboard",
        category: "electronics",
        price: 155.00,
        desc: "Hot-swappable custom switches, RGB backlighting, and aircraft-grade aluminum chassis for ultimate tactile feedback.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><line x1="6" y1="8" x2="6" y2="8"></line><line x1="10" y1="8" x2="10" y2="8"></line><line x1="14" y1="8" x2="14" y2="8"></line><line x1="18" y1="8" x2="18" y2="8"></line><line x1="6" y1="12" x2="6" y2="12"></line><line x1="10" y1="12" x2="10" y2="12"></line><line x1="14" y1="12" x2="14" y2="12"></line><line x1="18" y1="12" x2="18" y2="12"></line><line x1="6" y1="16" x2="12" y2="16"></line></svg>'
    },
    {
        id: 8,
        title: "Vanguard Titanium Sunglasses",
        category: "fashion",
        price: 210.00,
        desc: "Polarized UV400 lenses in ultra-lightweight Japanese titanium frames for uncompromising clarity and comfort.",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12h5l3 5h4l3-5h5"></path><path d="M6.5 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"></path><path d="M17.5 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"></path></svg>'
    }
];

// App State
let cart = [];
let currentCategory = 'all';
let searchQuery = '';

// DOM Elements
const productGrid = document.getElementById('productGrid');
const cartBtn = document.getElementById('cartBtn');
const closeCart = document.getElementById('closeCart');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsContainer = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartBadge = document.getElementById('cartBadge');
const searchInput = document.getElementById('searchInput');
const categoryFilters = document.getElementById('categoryFilters');

// Modals
const productModal = document.getElementById('productModal');
const closeProductModal = document.getElementById('closeProductModal');
const productDetailContent = document.getElementById('productDetailContent');

const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutModal = document.getElementById('closeCheckoutModal');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutTotal = document.getElementById('checkoutTotal');
const cardDetailsContainer = document.getElementById('cardDetailsContainer');

const authModal = document.getElementById('authModal');
const authBtn = document.getElementById('authBtn');
const closeAuthModal = document.getElementById('closeAuthModal');
const authTabs = document.querySelectorAll('.auth-tab');
const authForm = document.getElementById('authForm');
const authSubmitBtn = document.getElementById('authSubmitBtn');
const signupField = document.querySelector('.signup-field');

const successModal = document.getElementById('successModal');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');
const orderIdSpan = document.getElementById('orderId');

// Initialize Store
function initStore() {
    renderProducts();
    setupEventListeners();
}

// Render Products
function renderProducts() {
    productGrid.innerHTML = '';
    
    const filtered = products.filter(p => {
        const matchesCategory = currentCategory === 'all' || p.category === currentCategory;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              p.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        productGrid.innerHTML = `<p class="empty-cart" style="grid-column: 1/-1;">No products found matching your search.</p>`;
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-wrapper" onclick="openProductDetail(${p.id})">
                ${p.icon}
            </div>
            <div class="product-info">
                <span class="product-category">${p.category}</span>
                <h4 class="product-title" onclick="openProductDetail(${p.id})">${p.title}</h4>
                <p class="product-desc">${p.desc}</p>
                <div class="product-footer">
                    <span class="product-price">$${p.price.toFixed(2)}</span>
                    <button class="add-cart-btn" onclick="addToCart(${p.id})">Add to Cart</button>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Cart Functions
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
    updateCartUI();
    openCartDrawer();
}

function updateCartQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    
    item.qty += change;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    cartBadge.textContent = totalCount;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="empty-cart">Your cart is currently empty.</p>`;
        cartFooter.style.display = 'none';
        return;
    }
    
    cartFooter.style.display = 'block';
    cartItemsContainer.innerHTML = '';
    
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.qty;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-img">${item.icon}</div>
            <div class="cart-item-details">
                <span class="cart-item-title">${item.title}</span>
                <span class="cart-item-price">$${item.price.toFixed(2)}</span>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(div);
    });
    
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    checkoutTotal.textContent = `$${subtotal.toFixed(2)}`;
}

// Drawer Controls
function openCartDrawer() {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
}

function closeCartDrawer() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
}

// Product Detail Modal
function openProductDetail(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;
    
    productDetailContent.innerHTML = `
        <div class="detail-img-box">${p.icon}</div>
        <div class="detail-info">
            <span class="product-category">${p.category}</span>
            <h2 class="detail-title">${p.title}</h2>
            <div class="detail-price">$${p.price.toFixed(2)}</div>
            <p class="detail-desc">${p.desc}</p>
            <button class="btn primary-btn full-width" onclick="addToCart(${p.id}); closeModals();">Add to Cart</button>
        </div>
    `;
    productModal.classList.add('active');
}

// Event Listeners Setup
function setupEventListeners() {
    cartBtn.addEventListener('click', openCartDrawer);
    closeCart.addEventListener('click', closeCartDrawer);
    cartOverlay.addEventListener('click', closeCartDrawer);

    // Search
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });

    // Categories
    categoryFilters.addEventListener('click', (e) => {
        if (!e.target.classList.contains('cat-btn')) return;
        document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.dataset.category;
        renderProducts();
    });

    // Modals Close
    closeProductModal.addEventListener('click', () => productModal.classList.remove('active'));
    closeCheckoutModal.addEventListener('click', () => checkoutModal.classList.remove('active'));
    closeAuthModal.addEventListener('click', () => authModal.classList.remove('active'));

    // Checkout Flow
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return;
        closeCartDrawer();
        checkoutModal.classList.add('active');
    });

    // Payment Radio Switcher
    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'card') {
                cardDetailsContainer.style.display = 'block';
            } else {
                cardDetailsContainer.style.display = 'none';
            }
        });
    });

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        checkoutModal.classList.remove('active');
        orderIdSpan.textContent = Math.floor(10000 + Math.random() * 90000);
        successModal.classList.add('active');
        cart = [];
        updateCartUI();
    });

    continueShoppingBtn.addEventListener('click', () => {
        successModal.classList.remove('active');
    });

    // Auth Flow
    authBtn.addEventListener('click', () => authModal.classList.add('active'));

    authTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            authTabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            const mode = e.target.dataset.tab;
            if (mode === 'signup') {
                signupField.style.display = 'block';
                authSubmitBtn.textContent = 'Create Account';
            } else {
                signupField.style.display = 'none';
                authSubmitBtn.textContent = 'Sign In';
            }
        });
    });

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Authentication successful!');
        authModal.classList.remove('active');
    });
}

function closeModals() {
    productModal.classList.remove('active');
    checkoutModal.classList.remove('active');
    authModal.classList.remove('active');
}

// Run on load
document.addEventListener('DOMContentLoaded', initStore);
