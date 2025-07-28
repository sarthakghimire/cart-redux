import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="product-card"
        style={{
          border: "1px solid black",
          margin: "10px",
          padding: "20px",
          width: "40%",
          borderRadius: "5px",
        }}
      >
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
