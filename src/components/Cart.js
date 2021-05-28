import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";
import "./Cart.css"

export const Cart = () => {
  const { cart } = useContext(GlobalContext);
  let totalPrice = 0;
  let sorted = [].concat(cart);
  if(cart.length > 0) {
    for (let i = 0; i < sorted.length; i += 1) {
        totalPrice+=sorted[i].price
    }
    sorted.sort((a, b) => a.price - b.price);
  }

  return (
    <div className="cartContainer">
      <h1>Your Cart</h1>
      <div className="cart-wrapper">
      {cart.length > 0 ? (
          <div className="movie-grid">
            {sorted.map((product, i) => (
              <p key={i}>{product.name + " $" + product.price}</p>
            ))}
            <p className="totalPrice">{'Total Price: ' + '$' + totalPrice}</p>
          </div>
        ) : (
          <h2 className="no-items">No items in your shopping cart!</h2>
        )}
      </div>
    </div>
  );
};
