import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div
        style={{
          border: "1px solid black",
          width: "50%",
          padding: "4px",
          marginRight: "5px",
          marginBottom: "5px",
        }}
      >
        <h1>Cart</h1>
        <p>Your cart is empty 🛒</p>
      </div>
    );
  }

  return (
    <div style={{ border: "1px solid black", width: "50%" }}>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <strong>{item.title}</strong>
            </div>
            <div>Quantity: {item.quantity}</div>
            <div>Price: ${item.price.toFixed(2)}</div>
            <div>Subtotal: ${(item.price * item.quantity).toFixed(2)}</div>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default Cart;
