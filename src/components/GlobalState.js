import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = { cart: [] };

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const addToCart = (product) => {
    alert(`${product.name} added to cart`)
    dispatch({ type: "ADD_ITEM", payload: product });
  };
  
  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        addToCart,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
