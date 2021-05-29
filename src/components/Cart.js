import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";
import "./Cart.css";
import {CartItem} from './CartItem.js';

export const Cart = () => {
  const { cart } = useContext(GlobalContext);
  let totalPrice = 0;
  let sorted = [].concat(cart);
  if (cart.length > 0) {
    for (let i = 0; i < sorted.length; i += 1) {
      totalPrice += sorted[i].price;
    }
    totalPrice = parseFloat(totalPrice).toFixed(2);
    sorted.sort((a, b) => a.price - b.price);
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <div className="cartContainer">
        {cart.length > 0 ? (
          <div className="cart-wrapper">
            {sorted.map((product, index) => (
              <CartItem key={index} product={product}/>
            ))}
            <p className="totalPrice">{"Total Price: $" + totalPrice}</p>
          </div>
        ) : (
          <h2 className="no-items">No items in your shopping cart!</h2>
        )}
      </div>
    </div>
  );
};
