import React, { useState, useEffect } from "react";
import { Card } from "./Card.js";
import './Product.css'

export const Product = () => {
  // List of products
  var products = [
    {
      name: "yogurt",
      lactoseFree: false,
      nutFree: true,
      organic: false,
      price: 4,
    },
    {
      name: "almond",
      lactoseFree: true,
      nutFree: false,
      organic: true,
      price: 2.35,
    },
    {
      name: "granola",
      lactoseFree: true,
      nutFree: false,
      organic: false,
      price: 10.0,
    },
    {
      name: "salmon",
      lactoseFree: true,
      nutFree: true,
      organic: false,
      price: 1.0,
    },

    //Duplicates start here
    {
      name: "yogurt2",
      lactoseFree: false,
      nutFree: true,
      organic: false,
      price: 4,
    },
    {
      name: "almond2",
      lactoseFree: true,
      nutFree: false,
      organic: true,
      price: 2.35,
    },
    {
      name: "granola2",
      lactoseFree: true,
      nutFree: false,
      organic: false,
      price: 10.0,
    },
    {
      name: "salmon2",
      lactoseFree: true,
      nutFree: true,
      organic: false,
      price: 1.0,
    },
    //Row 3 duplicates
    {
      name: "yogurt3",
      lactoseFree: false,
      nutFree: true,
      organic: false,
      price: 4,
    },
    {
      name: "almond3",
      lactoseFree: true,
      nutFree: false,
      organic: true,
      price: 2.35,
    },
    {
      name: "granola3",
      lactoseFree: true,
      nutFree: false,
      organic: false,
      price: 10.0,
    },
    {
      name: "salmon3",
      lactoseFree: true,
      nutFree: true,
      organic: false,
      price: 1.0,
    },
  ];

  // State to track products and for filtering
  const [prods, setProds] = useState(products);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Filter products based on user preferences
    var lactose = JSON.parse(sessionStorage.getItem("lactoseFree"));
    var nuts = JSON.parse(sessionStorage.getItem("nutFree"));
    var organic = JSON.parse(sessionStorage.getItem("organic"));
    let product_names = [];

    for (let i = 0; i < products.length; i += 1) {
      if (lactose === false && nuts === false && organic === false) {
        product_names.push(products[i]);
      }
      if (lactose === true && products[i].lactoseFree === true) {
        product_names.push(products[i]);
      }
      if (nuts === true && products[i].nutFree === true) {
        product_names.push(products[i]);
      }
      if (organic === true && products[i].organic === true) {
        product_names.push(products[i]);
      }
    }
    let sorted = product_names;
    product_names.sort((a, b) => a.price - b.price);
    setProds(sorted);
  }, []); // Empty array for second parameter means only run on mount and unmount. Without empty array useEffect runs in an infinite loop

  return (
    <div className="prod_container">
      <h1>Products</h1>
      <div className="prod_wrapper">
        {prods.map((item, i) => (
          <ul key={i} className="prod_ul">
            <Card product={item} />
          </ul>
        ))}
      </div>
    </div>
  );
};
