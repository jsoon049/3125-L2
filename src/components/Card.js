import React, {useContext} from "react";
import { GlobalContext } from "./GlobalState";

export const Card = ({ product }) => {
  const { addToCart} = useContext(GlobalContext);

  return (
    <div className="product-card">
      <p className="prodName">{product.name}</p>
      <p className="prodPrice">{product.price}</p>
      <button className="btn" onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
};
