import React from "react";
import products from "./../data/product";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
