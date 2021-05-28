import React, { useState, useEffect } from "react";
import { Card } from "./Card.js";

export const Product = () => {
  // List of products
  var products = [
    {
      name: "yogurt",
      hasLactose: true,
      hasNuts: false,
      price: 2.5,
    },
    {
      name: "almond",
      hasLactose: false,
      hasNuts: true,
      price: 2.35,
    },
    {
      name: "granola",
      hasLactose: false,
      hasNuts: true,
      price: 10.0,
    },
    {
      name: "salmon",
      hasLactose: false,
      hasNuts: false,
      price: 20.0,
    },
  ];

  // State to track products and for filtering
  const [prods, setProds] = useState(products);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Filter products based on user preferences
    var lactose = JSON.parse(sessionStorage.getItem("lactose"));
    var nuts = JSON.parse(sessionStorage.getItem("nuts"));
    var organic = JSON.parse(sessionStorage.getItem("organic"));
    console.log(lactose, nuts, organic);
    let product_names = [];

    for (let i = 0; i < products.length; i += 1) {
      if (lactose === false && nuts === false && organic === false) {
        product_names = products;
        break;
      }
      if (lactose === true && products[i].hasLactose === true) {
        console.log("here");
        product_names.push(products[i]);
      }
      if (nuts === true && products[i].hasNuts === true) {
        console.log("there");
        product_names.push(products[i]);
      }
    }
    console.log("this: " + JSON.stringify({ product_names }));
    setProds(product_names);
  }, []); // Empty array for second parameter means only run on mount and unmount. Without empty array useEffect runs in an infinite loop

  return (
    <div>
      <h1>Product</h1>
      {prods.map((item, i) => (
        // <ul key={i}>
        //   <li>{item.name}</li>
        //   <li>{item.price}</li>
        // </ul>
        <ul key={i}>
          <Card product={item} />
        </ul>
      ))}
    </div>
  );
};
