import React from "react";
import { products } from "./dataProducts.js";
import IndividualProduct from "./IndividualProduct";
import Reveal from "../Reveal.js";
import "./products.scss";

function Products() {
  return (
    <div className="productsContainer">
      <Reveal>
        <h2>PRODUCTOS</h2>
      </Reveal>
      <div className="individualContainer">
        {products.map((producto, index) => (
          <IndividualProduct
            nombre={producto.nombre}
            img={producto.img}
            precio={producto.precio}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
