import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  //Updating the number of the items in the basket
  const [{ basket }, dispatch] = useStateValue();

  console.log("Basket>>> ", basket);

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#127775;</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
