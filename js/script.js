let cartCount = 0;
let cartItems = [];
const productImageBase = "./images/";
const productTitle = "Classy Modern Smart Watch";

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

  // Change the image based on selected color
  if (colors.includes(color)) {
    productImage.src = productImageBase + color + ".png";
  } else {
    productImage.src = productImageBase + "purple.png";
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
    const selectedColor =
      document
        .querySelector("button.bg-purple-500.border-purple-600")
        ?.id.split("-")[0] || "purple";
    const selectedSize =
      document
        .querySelector("button.border-purple-600:not(.w-6)")
        ?.innerText.split(" ")[0] || "M";

    // Add the item to cart with dynamic image and color
    cartItems.push({
      image: `${selectedColor}.png`,
      title: productTitle,
      color: selectedColor,
      size: selectedSize,
      quantity,
      price: 79,
    });
  }
}

// Open cart modal
function openCartModal() {
  const cartModal = document.getElementById("cart-modal");
  const cartItemsContainer = document.getElementById("cart-items");

  cartItemsContainer.innerHTML = ""; // Clear previous cart items

  let totalPrice = 0;
  let totalQuantity = 0;
  cartItems.forEach((item) => {
    const row = document.createElement("tr");
    row.classList.add("border-b");
    row.innerHTML = `
        <td class="py-2 px-4">
          <div class="flex items-center space-x-2">
            <img src="${productImageBase + item.image}" alt="${
      item.title
    }" class="w-12 h-12 object-cover rounded-md" />
            <span class="font-semibold">${item.title}</span>
          </div>
        </td>
        <td class="py-2 px-4">${item.color}</td>
        <td class="py-2 px-4">${item.size}</td>
        <td class="py-2 px-4">${item.quantity}</td>
        <td class="py-2 px-4">$${(item.price * item.quantity).toFixed(2)}</td>
      `;
    cartItemsContainer.appendChild(row);

    totalPrice += item.price * item.quantity;
    totalQuantity += item.quantity;
  });
  const totalRow = document.createElement("tr");
  totalRow.classList.add("border-t", "font-bold");
  totalRow.innerHTML = `
      <td class="py-2 px-4" colspan="3">Total</td> 
      <td class="py-2 px-4">${totalQuantity}</td>
      <td class="py-2 px-4">$${totalPrice.toFixed(2)}</td>
    `;
  cartItemsContainer.appendChild(totalRow);

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

// Proceed to checkout
function checkout() {
  alert("Proceeding to checkout...");
}
