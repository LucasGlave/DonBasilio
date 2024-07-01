import React from "react";
import "./products.scss";

function IndividualProduct({ nombre, img, precio }) {
  return (
    <div className="productContainer">
      
      <p className="productName">{nombre}</p>
      <img src={img} className="productImg" />
      <p className="productPrice">${precio}</p>
    </div>
  );
}

export default IndividualProduct;
