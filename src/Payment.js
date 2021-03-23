import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  //capture the errors
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    //communicate with stripe
  };

  const handleChange = (e) => {
    //communicate with stripe
    //listen for change in the CardElement and display any errors as the customer types card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
          {/**Link back to the basket */}
        </h1>
        {/**Payment section - delivery adress */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="payment__adress">
            <p>{user?.email}</p>
            <p>455K Autoroute du TurFu</p>
            <p>FrenchTech Mogul, FR</p>
          </div>
        </div>

        {/**Payment section - review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {/**Products in the Basket here */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/**Payment section - payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/**Stripe */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
