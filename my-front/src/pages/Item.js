// src/pages/Products.js
import React, { useState } from "react";
// import { Productdetails } from '../Data/ProductData';
import Card from "../pages/Card";
import "./Item.css";

const Item = () => {
  const [message, setMessage] = useState("");

  const handleAddToCart = (product) => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = savedCart.findIndex((item) => item.id === product.id);

    if (itemIndex === -1) {
      product.quantity = 1;
      savedCart.push(product);
      setMessage("Item added to cart successfully!");
    } else {
      savedCart[itemIndex].quantity += 1;
      setMessage("Item quantity updated in cart.");
    }

    localStorage.setItem("cart", JSON.stringify(savedCart));

    // Notify the Navbar of the cart count update
    window.dispatchEvent(new Event("storage"));

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="products">
      {Productdetails.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          description={product.description}
          img={product.img}
          price={product.price}
          onAddToCart={() => handleAddToCart(product)}
        />
      ))}

      {message && <div className="centered-message">{message}</div>}
    </div>
  );
};

export default Item;
