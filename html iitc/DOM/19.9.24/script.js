const addButtons = document.querySelectorAll(".add");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const emptyCartImage = document.querySelector(".container-2 img");
const cartDesc = document.getElementById("cartDesc");
const orderConfirmation = document.getElementById("orderConfirmation");
const orderItems = document.getElementById("orderItems");

let cart = {};

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.product;

    // Update cart
    if (cart[productName]) {
      cart[productName].count += 1;
    } else {
      cart[productName] = { count: 1 };
    }

    // Change button style
    button.style.backgroundColor = "red";
    button.textContent = "−";
    button.dataset.action = "remove"; // Set action to remove
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = ""; // Clear existing items
  let totalCount = 0;
  let totalPrice = 0; // Initialize total price

  for (let product in cart) {
    totalCount += cart[product].count;

    const li = document.createElement("li");
    li.textContent = `${product} x${cart[product].count}`;

    // Calculate the price
    const pricePerItem = getPrice(product);
    totalPrice += pricePerItem * cart[product].count;

    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "x";
    removeButton.style.marginLeft = "25px";
    removeButton.addEventListener("click", () => {
      removeFromCart(product);
    });

    li.appendChild(removeButton);
    cartItems.appendChild(li);
  }

  cartCount.textContent = totalCount;

  // Show or hide the empty cart image and cart description
  if (totalCount === 0) {
    emptyCartImage.style.display = "block"; // Show empty cart image
    cartDesc.style.display = "none"; // Hide cart description
  } else {
    emptyCartImage.style.display = "none"; // Hide empty cart image
    cartDesc.style.display = "block"; // Show cart description
    showConfirmButton(totalPrice); // Pass totalPrice to showConfirmButton
  }
}

function getPrice(productName) {
  switch (productName) {
    case "Waffle":
      return 6.5;
    case "creme":
      return 7.0;
    case "macaron":
      return 8.0;
    case "tiramisu":
      return 5.5;
    case "baklava":
      return 4.0;
    case "pie":
      return 5.0;
    case "cake":
      return 4.5;
    case "brownie":
      return 5.5;
    case "panna":
      return 6.5;
    default:
      return 0; // Default case
  }
}

function showConfirmButton(totalPrice) {
  let confirmOrderButton = document.getElementById("confirmOrder");

  if (!confirmOrderButton) {
    confirmOrderButton = document.createElement("button");
    confirmOrderButton.id = "confirmOrder";
    confirmOrderButton.textContent = "Confirm Order";
    document.querySelector(".container-2").appendChild(confirmOrderButton);

    confirmOrderButton.addEventListener("click", () => {
      orderItems.innerHTML = ""; // Clear previous items
      for (let product in cart) {
        const li = document.createElement("li");
        li.textContent = `${product} x${cart[product].count}`;
        orderItems.appendChild(li);
      }

      document.getElementById(
        "totalPrice"
      ).textContent = `$${totalPrice.toFixed(2)}`; // Display total price
      orderConfirmation.style.display = "block"; // Show the modal
    });
  }
}

function removeFromCart(productName) {
  if (cart[productName]) {
    cart[productName].count -= 1; // Decrement count
    if (cart[productName].count === 0) {
      delete cart[productName]; // Remove item if count is 0
    }
    updateCart(); // Update the cart display
  }
}

// Close modal functionality
document.getElementById("closeModal").addEventListener("click", () => {
  orderConfirmation.style.display = "none"; // Hide the modal
});
