import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
