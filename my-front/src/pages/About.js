// src/pages/About.js
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src="../Images/About.png" alt="Women's Clothing 1" />
        <img src="../Images/About1.png" alt="Women's Clothing 2" />
      </div>
      <div className="about-content">
        <h1>About Shoppers Shop</h1>
        <p>
          Welcome to Shoppers Shop, your ultimate destination for the latest in women's fashion. At Shoppers Shop, we pride ourselves on offering a curated collection of stylish and high-quality clothing that caters to every woman's unique taste and preference.
        </p>
        <p>
          Our collection features everything from chic casual wear to elegant evening attire, ensuring that you find the perfect outfit for any occasion. We are dedicated to providing you with pieces that not only make you look fabulous but also feel comfortable.
        </p>
        <p>
          Explore our diverse range of fashion-forward clothing and discover your new favorite pieces. We are committed to bringing you the best in women's fashion, with new arrivals and trends added regularly.
        </p>
        <p>
          Should you need any assistance or have questions, our customer service team is always here to help. Thank you for choosing Shoppers Shop to elevate your wardrobe.
        </p>
      </div>
      <div className="about-image">
        <img src="../Images/About3.png" alt="Women's Clothing 3" />
        <img src="../Images/About4.png" alt="Women's Clothing 4" />
      </div>
    </div>
  );
}

export default About;
