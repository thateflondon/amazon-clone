import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>29,99</strong>
        </p>
        <div className="product__rating">
          <p>&#127775;</p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
        alt="the lean startup book image"
      />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
