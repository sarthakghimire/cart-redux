import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Checkout from "./Checkout";

const Home = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ProductList />
        <Cart />
      </div>
      <div>
        <Checkout />
      </div>
    </>
  );
};

export default Home;
