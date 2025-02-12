let cart = [];
let totalPrice = 0;

// Add product to cart
function addToCart(product, price) {
    cart.push({ product, price });
    totalPrice += price;
    alert(product + " added to cart!");
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("totalPrice", totalPrice);
}

// Load cart data on checkout page
if (window.location.pathname.includes("checkout.html")) {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    totalPrice = parseFloat(localStorage.getItem("totalPrice")) || 0;

    let cartItemsDiv = document.getElementById("cart-items");
    cart.forEach(item => {
        let p = document.createElement("p");
        p.textContent = `${item.product} - $${item.price}`;
        cartItemsDiv.appendChild(p);
    });

    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
    document.getElementById("amount").value = totalPrice.toFixed(2);
}

// Payment Simulation
document.getElementById("payment-form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Payment Successful! Thank you for your order.");
    localStorage.clear();
    window.location.href = "index.html";
});
