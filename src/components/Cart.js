import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";

export const Cart = () => {
  const { cart } = useContext(GlobalContext);
//   let myData2 = [];
//   if(cart.length > 0) {
//     const myData = [].concat(cart)
//     for (let i = 0; i < myData.length; i += 1) {
//         console.log(myData[i].name)
//     }
//     myData2 = myData;
//   }
//   console.log(myData2);

  return (
    <div>
      <h1>Cart</h1>
      <div className="cart-wrapper">
      {cart.length > 0 ? (
          <div className="movie-grid">
            {cart.map((product, i) => (
              <p key={i}>{product.name} {product.price}</p>
            ))}
          </div>
        ) : (
          <h2 className="no-items">No items in your shopping cart!</h2>
        )}
      </div>
    </div>
  );
};
