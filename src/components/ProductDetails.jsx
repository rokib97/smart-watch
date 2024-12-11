import PropTypes from "prop-types";
const ProductDetails = ({
  color,
  setColor,
  size,
  setSize,
  quantity,
  setQuantity,
  addToCart,
}) => {
  const sizes = ["S", "M", "L", "XL"];
  const colors = ["purple", "teal", "cyan", "gray"];

  return (
    <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between">
      <h1 className="text-2xl font-bold text-gray-800">
        Classy Modern Smart Watch
      </h1>
      <div className="flex items-center mt-2">
        <div className="text-yellow-400">★★★★☆</div>
        <span className="ml-2 text-sm text-gray-600">(2 Reviews)</span>
      </div>
      <div className="mt-4">
        <span className="text-gray-400 line-through text-lg">$99.00</span>
        <span className="text-purple-600 text-2xl font-bold">$79.00</span>
      </div>
      <p className="mt-4 text-gray-600 text-sm">
        I must explain to you how all this mistaken idea of denouncing pleasure
        and praising pain was born...
      </p>
      <div className="mt-4">
        <span className="text-sm font-semibold text-gray-700">Band Color</span>
        <div className="flex items-center mt-1 space-x-2">
          {colors.map((c) => (
            <button
              key={c}
              className={`w-6 h-6 rounded-full ${
                c === color
                  ? "border-4 border-purple-600"
                  : "border-2 border-gray-300"
              }`}
              style={{ backgroundColor: c }}
              onClick={() => setColor(c)}
            />
          ))}
        </div>
      </div>
      <div className="mt-2">
        <span className="text-sm font-semibold text-gray-700">Wrist Size</span>
        <div className="grid grid-cols-4 gap-2 mt-2">
          {sizes.map((s) => (
            <button
              key={s}
              className={`px-4 py-2 border ${
                s === size ? "border-purple-600" : "border-gray-300"
              } rounded-lg text-sm hover:bg-gray-100`}
              onClick={() => setSize(s)}
            >
              {s} ${69 + sizes.indexOf(s) * 10}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
            onClick={() => setQuantity(Math.max(0, quantity - 1))}
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <button
          className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
ProductDetails.propTypes = {
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  setSize: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.object),
};

export default ProductDetails;
