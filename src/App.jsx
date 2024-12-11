import { useState } from "react";
import CheckoutModal from "./components/CheckoutModal";
import ProductDetails from "./components/ProductDetails";
import ProductImage from "./components/ProductImage";

const App = () => {
  const [color, setColor] = useState("purple");
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add product to the cart
  const addToCart = () => {
    if (quantity > 0) {
      const newItem = {
        title: "Classy Modern Smart Watch",
        color,
        size,
        quantity,
        price: 79,
        image: `/images/${color}.png`,
      };
      setCartItems((prevItems) => [...prevItems, newItem]);
    }
  };

  // Open the checkout modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close the checkout modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const continueShopping = () => {
    setIsModalOpen(false);
  };

  const checkout = () => {
    alert("Proceeding to checkout...");
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row items-stretch gap-6">
          <ProductImage color={color} />
          <ProductDetails
            color={color}
            setColor={setColor}
            size={size}
            setSize={setSize}
            quantity={quantity}
            setQuantity={setQuantity}
            addToCart={addToCart}
          />
        </div>
        <div className="mt-16 flex justify-center relative">
          {cartItems.length > 0 && (
            <button
              className="px-6 py-2 rounded-lg shadow-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 flex items-center gap-2"
              onClick={openModal}
            >
              Checkout
              <span className="bg-white text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}{" "}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Checkout Modal */}
      {isModalOpen && (
        <CheckoutModal
          cartItems={cartItems}
          closeModal={closeModal}
          continueShopping={continueShopping}
          checkout={checkout}
        />
      )}
    </div>
  );
};

export default App;
