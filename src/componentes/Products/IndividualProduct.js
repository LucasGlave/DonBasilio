import React from "react";
import "./products.scss";

function IndividualProduct({ nombre, img, precio }) {
  return (
    <div className="productContainer">
      <img src={img} className="productImg" />
      <div className="content">
        <p className="productName">{nombre}</p>
        <p className="productPrice">${precio}</p>
      </div>
    </div>
  );
}

export default IndividualProduct;
