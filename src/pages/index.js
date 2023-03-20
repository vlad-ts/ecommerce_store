import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = () => (
  <div>
    <HeroBanner />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {["product-1", "product-2"].map((product) => (
        <Product product={product} />
      ))}
    </div>

    <FooterBanner />
  </div>
);

export default Home;
