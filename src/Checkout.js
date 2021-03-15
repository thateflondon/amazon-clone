import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon music banner"
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout__right"></div>
    </div>
  );
}

export default Checkout;
