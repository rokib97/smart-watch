import PropTypes from "prop-types";

const CheckoutModal = ({
  cartItems,
  closeModal,
  continueShopping,
  checkout,
}) => {
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-3/4 max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>

        {cartItems.length > 0 ? (
          <div>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left">Item</th>
                  <th className="py-2 px-4">Color</th>
                  <th className="py-2 px-4">Size</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2 px-4 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                      <span>{item.title}</span>
                    </td>
                    <td className="py-2 px-4">{item.color}</td>
                    <td className="py-2 px-4">{item.size}</td>
                    <td className="py-2 px-4">{item.quantity}</td>
                    <td className="py-2 px-4">
                      ${(item.quantity * item.price).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr className="border-t font-semibold">
                  <td className="py-2 px-4 text-left">Total</td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4">{totalQuantity}</td>
                  <td className="py-2 px-4">${totalPrice.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>

            {/* Action Buttons */}
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={continueShopping}
                className="px-6 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-black"
              >
                Continue Shopping
              </button>
              <button
                onClick={checkout}
                className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white"
              >
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">Your cart is empty!</div>
        )}
      </div>
    </div>
  );
};

CheckoutModal.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  closeModal: PropTypes.func.isRequired,
  continueShopping: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired,
};
export default CheckoutModal;
