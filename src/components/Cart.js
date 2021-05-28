import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";

export const Cart = () => {
  const { cart } = useContext(GlobalContext);

  return (
    <div>
      <h1>Cart</h1>
      <div className="cart-wrapper">
        {cart.map((product) => (
          <p>{product.name} {product.price}</p>
        ))}
      </div>
    </div>
  );
};
