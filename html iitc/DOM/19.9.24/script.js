const addButtons = document.querySelectorAll(".add");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const emptyCartImage = document.querySelector(".container-2 img");
const cartDesc = document.getElementById("cartDesc");
const confirmOrderButton = document.getElementById("confirmOrderButton");

let cart = {};

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.product;

    cart[productName] = cart[productName] || { count: 0 };
    cart[productName].count += 1;

    updateButtonStyle(button, cart[productName].count);
    updateCart();
  });
});

function updateButtonStyle(button, count) {
  if (count > 0) {
    button.style.backgroundColor = "red";
    button.style.color = "white";
    button.textContent = "(+)";
  } else {
    button.style.backgroundColor = "";
    button.style.color = "";
    button.textContent = "Add to cart";
  }
}

function updateCart() {
  cartItems.innerHTML = "";
  let totalCount = 0;

  for (let product in cart) {
    totalCount += cart[product].count;

    const li = document.createElement("li");
    li.classList.add("cart-item");

    const productName = document.createElement("span");
    productName.classList.add("product-name");
    productName.textContent = `${product} x${cart[product].count}`;

    const productPrice = document.createElement("span");
    productPrice.classList.add("product-price");
    productPrice.textContent = `$${(
      getPrice(product) * cart[product].count
    ).toFixed(2)}`;

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "x";
    removeButton.addEventListener("click", () => {
      removeFromCart(product);
    });

    li.appendChild(productName);
    li.appendChild(productPrice);
    li.appendChild(removeButton);
    cartItems.appendChild(li);
  }

  cartCount.textContent = totalCount;
  emptyCartImage.style.display = totalCount === 0 ? "block" : "none";
  cartDesc.style.display = totalCount === 0 ? "none" : "block";
  confirmOrderButton.style.display = totalCount > 0 ? "block" : "none";
}

function removeFromCart(productName) {
  if (cart[productName]) {
    cart[productName].count -= 1;
    if (cart[productName].count === 0) {
      delete cart[productName];
    }
    updateCart();

    const button = Array.from(addButtons).find(
      (btn) => btn.dataset.product === productName
    );
    updateButtonStyle(button, cart[productName] ? cart[productName].count : 0);
  }
}

const orderConfirmation = document.getElementById("orderConfirmation");
const orderItems = document.getElementById("orderItems");
const totalPriceDisplay = document.getElementById("totalPrice");

document.querySelector(".close").addEventListener("click", () => {
  orderConfirmation.style.display = "none";
});

confirmOrderButton.addEventListener("click", () => {
  orderItems.innerHTML = "";
  let totalPrice = 0;

  for (let product in cart) {
    const price = getPrice(product);
    totalPrice += price * cart[product].count;

    const li = document.createElement("li");
    li.textContent = `${product} x${cart[product].count}`;

    const priceSpan = document.createElement("span");
    priceSpan.classList.add("product-price");
    priceSpan.textContent = `$${(price * cart[product].count).toFixed(2)}`;
    li.appendChild(priceSpan);

    orderItems.appendChild(li);
  }

  totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
  orderConfirmation.style.display = "block";
});

function getPrice(productName) {
  const prices = {
    Waffle: 6.5,
    "Creme Brulee": 7.0,
    Macaron: 8.0,
    Tiramisu: 5.5,
    Baklava: 4.0,
    Pie: 5.0,
    Cake: 4.5,
    Brownie: 5.5,
    "Panna Cotta": 6.5,
  };
  return prices[productName] || 0;
}
