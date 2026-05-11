import React from "react";
import Nav from "./../components/Nav";
import Footer from "./../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../../constants";

const Products = () => {
  return (
    <>
      <Nav />
      <main id="products">
        <h1>PRODUCTS</h1>
        <div id="product-area">
          {products.map(({ imgPath, name, price }, index) => (
            <ProductCard
              key={index}
              imgPath={imgPath}
              name={name}
              price={price}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
