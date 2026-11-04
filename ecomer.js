// Products Data (Translated to English)
const products = [

    { id: 1, name: 'Modern Smart Watch', price: 3500, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80' },
    { id: 2, name: 'Wireless Headphones', price: 2200, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80' },
    { id: 3, name: 'Sport Sneakers', price: 4000, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80' },
    { id: 4, name: 'Travel Backpack', price: 1800, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80' },
    { id: 5, name: 'PC', price: 50000, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80' },
    { id: 6, name: 'Mobile', price: 20000, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80' }
   

];
let cart = [];

// Render Products
const productListEl = document.getElementById('product-list');

function displayProducts() {
    productListEl.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productListEl.appendChild(card);
    });
}

// Add Product to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Update Cart UI
function updateCart() {
    const cartCountEl = document.getElementById('cart-count');
    const cartItemsEl = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');

    cartCountEl.textContent = cart.length;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceEl.textContent = '0';
        return;
    }

    cartItemsEl.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const itemRow = document.createElement('div');
        itemRow.classList.add('cart-item-row');
        itemRow.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
        `;
        cartItemsEl.appendChild(itemRow);
    });

    totalPriceEl.textContent = total;
}

// Checkout Process
document.getElementById('checkout-btn').addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Please add items to your cart first!');
        return;
    }
    alert('Purchase completed successfully! Thank you.');
    cart = [];
    updateCart();
} );

// Display products on page load
displayProducts();