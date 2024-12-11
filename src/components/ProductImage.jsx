import PropTypes from "prop-types";
const ProductImage = ({ color }) => {
  const colorMap = {
    purple: "/images/purple.png",
    teal: "/images/teal.png",
    cyan: "/images/cyan.png",
    gray: "/images/gray.png",
  };

  return (
    <div className="flex justify-center items-center md:w-1/2">
      <img
        src={colorMap[color]}
        alt="Smartwatch"
        className="h-full md:h-auto object-cover rounded-lg"
      />
    </div>
  );
};

ProductImage.propTypes = {
  color: PropTypes.oneOf(["purple", "teal", "cyan", "gray"]).isRequired,
};

export default ProductImage;
