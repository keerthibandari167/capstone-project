let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart ✔");
}

// DISPLAY CART (only cart page)
function displayCart() {
    let container = document.getElementById("cartItems");
    let totalBox = document.getElementById("total");

    if (!container) return;

    container.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        container.innerHTML += `
        <div class="card">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button onclick="removeItem(${index})">Remove</button>
        </div>
        `;
    });

    if (totalBox) {
        totalBox.innerText = "Total: ₹" + total;
    }
}

// REMOVE ITEM
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// AUTO LOAD CART
displayCart();