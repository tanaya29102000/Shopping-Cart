// src/pages/Card.js
import React from 'react';
import './Card.css'; 

const Card = ({ title, description, img, price, onAddToCart }) => {
  return (
    <div className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-price">${price}</p>
        <button className="add-to-cart-btn" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;