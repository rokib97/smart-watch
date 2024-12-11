let cartCount = 0;
let cartItems = [];
const productImageBase = "./images/"; // Path to your product images
const productTitle = "Classy Modern Smart Watch"; // The product title

// Change the main image based on color
function changeThumbnailColor(color) {
  const productImage = document.getElementById("product-image");
  const colors = ["purple", "teal", "cyan", "gray"];

  colors.forEach((c) => {
    const button = document.getElementById(`${c}-color`);
    if (color === c) {
      button.classList.add("border-purple-600");
    } else {
      button.classList.remove("border-purple-600");
    }
  });

  switch (color) {
    case "purple":
      productImage.src = productImageBase + "purple.png";
      break;
    case "teal":
      productImage.src = productImageBase + "teal.png";
      break;
    case "cyan":
      productImage.src = productImageBase + "cyan.png";
      break;
    case "gray":
      productImage.src = productImageBase + "gray.png";
      break;
  }
}

// Select wrist size
function selectWristSize(size) {
  const sizes = ["S", "M", "L", "XL"];

  sizes.forEach((s) => {
    const button = document.getElementById(`size-${s}`);
    if (size === s) {
      button.classList.add("border-purple-600");
    } else {
      button.classList.remove("border-purple-600");
    }
  });
}

// Update the quantity
function updateQuantity(amount) {
  const quantityElement = document.getElementById("quantity");
  let quantity = parseInt(quantityElement.innerText);
  quantity = Math.max(0, quantity + amount);
  quantityElement.innerText = quantity;
}

// Add item to cart
function addToCart() {
  const quantity = parseInt(document.getElementById("quantity").innerText);
  if (quantity > 0) {
    cartCount += quantity;
    document.getElementById("cart-count").innerText = cartCount;
    document.getElementById("checkout-container").classList.remove("hidden");

    // Get selected color
    const selectedColor =
      document.querySelector("button.border-purple-600")?.style
        .backgroundColor || "Other";

    const size =
      document.querySelector("button.border-purple-600")?.innerText[0] || "M"; // Get selected size

    cartItems.push({
      image: "purple.png",
      title: productTitle,
      color: selectedColor,
      size,
      quantity,
      price: 79,
    });
  }
}

// Open cart modal
function openCartModal() {
  const cartModal = document.getElementById("cart-modal");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartTotalQuantity = document.getElementById("cart-total-quantity");

  cartItemsContainer.innerHTML = ""; // Clear previous cart items

  let totalPrice = 0;
  let totalQuantity = 0;
  cartItems.forEach((item) => {
    const row = document.createElement("tr");
    row.classList.add("border-b");
    row.innerHTML = `<td class="py-2 px-4">
        <div class="flex items-center space-x-2">
          <img src="${productImageBase + item.image}" alt="${
      item.title
    }" class="w-12 h-12 object-cover rounded-md" />
          <span class="font-semibold">${item.title}</span>
        </div>
      </td>
      <td class="py-2 px-4">
        <div class="w-6 h-6 rounded-full" style="background-color:${
          item.color
        }"></div>
      </td>
      <td class="py-2 px-4">${item.size}</td>
      <td class="py-2 px-4">${item.quantity}</td>
      <td class="py-2 px-4">$${(item.price * item.quantity).toFixed(2)}</td>`;
    cartItemsContainer.appendChild(row);
    totalPrice += item.price * item.quantity;
    totalQuantity += item.quantity;
  });

  cartTotal.innerText = `$${totalPrice.toFixed(2)}`;
  cartTotalQuantity.innerText = totalQuantity;

  cartModal.classList.remove("hidden");
}

// Close cart modal
function closeCartModal() {
  const cartModal = document.getElementById("cart-modal");
  cartModal.classList.add("hidden");
}

// Continue shopping (just close the modal)
function continueShopping() {
  closeCartModal();
}

// Proceed to checkout (you can define the checkout action here)
function checkout() {
  alert("Proceeding to checkout...");
}
