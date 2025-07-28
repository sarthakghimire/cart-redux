import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  // Step 1: Access cart items from Redux store
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Step 2: Calculate total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ border: "1px solid", width: "50%" }}>
      <h2>Checkout</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} × {item.quantity} = ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button>Proceed to Payment</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
