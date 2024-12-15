// JavaScript: script.js

let cart = [];
const cartCount = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add to Cart Function
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const productElement = button.parentElement;
        const productName = productElement.getAttribute('data-name');
        const productPrice = Number(productElement.getAttribute('data-price'));
        const quantity = Number(document.getElementById(`quantity-${index + 1}`).value);

        // Calculate total price for the item
        const totalPrice = productPrice * quantity;

        // Add product to cart
        cart.push({ name: productName, price: productPrice, quantity: quantity, total: totalPrice });
        updateCartCount();
        alert(`${quantity} ${productName}(s) added to your cart!`);
    });
});

// Update Cart Count
function updateCartCount() {
    cartCount.textContent = cart.length;
}



// Get elements
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

// Toggle the sidebar visibility when the hamburger menu is clicked
hamburger.addEventListener("click", () => {
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px"; // Close sidebar
    } else {
        sidebar.style.left = "0px"; // Open sidebar
    }
});
