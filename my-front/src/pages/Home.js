import React, { useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { FaHeart } from "react-icons/fa";

const carouselImages = [
  "../Images/P1.jpg",
  "../Images/P2.jpg",
  "../Images/P3.jpg",
  "../Images/P4.jpg",
  "../Images/P5.jpg",
  "../Images/P6.jpg",



];

const featuredBrands = [
  "../Images/F (1).png",
  "../Images/F (2).png",
  "../Images/F (3).png",
  "../Images/F (4).png",
];

function Home({ products, addToCart, addToWishlist, isLoggedIn }) {
  const navigate = useNavigate();
  const [cartMessage, setCartMessage] = useState(""); // State for cart message
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleShopNow = () => {
    navigate("/shop");
  };

  const handleAddToCart = (product) => {
    if (isLoggedIn) {
      addToCart(product); // Add product to cart if logged in
      setCartMessage(`${product.name} has been added to your cart!`);

      // Navigate to the Cart page after 2 seconds
      setTimeout(() => {
        setCartMessage("");
        navigate("/cart");
      }, 1000);
      navigate("/cart"); // Navigate to the Cart page after adding to cart
    } else {
      navigate("/login"); // Redirect to login if not logged in
    }
  };

  const handleAddToWishlist = (product) => {
    if (isLoggedIn) {
      addToWishlist(product); // Add product to wishlist if logged in
      setCartMessage(`${product.name} has been added to your Wishlist!`);

      // Navigate to the Wishlist page after 2 seconds
      setTimeout(() => {
        setCartMessage("");
        navigate("/wishlist");
      }, 1000);
      navigate("/wishlist"); // Navigate to the Wishlist page after adding to wishlist
    } else {
      navigate("/login"); // Redirect to login if not logged in
    }
  };

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Slide every 2 seconds
    pauseOnHover: true, // Pause sliding when hovering over the carousel
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="carousel-container">
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
          <div className="hero-text">
            <h1>Welcome to Shopping Website</h1>
            <p>Your one-stop shop for all your needs.</p>
            <button className="shop-now-btn" onClick={handleShopNow}>
              Shop Now
            </button>
          </div>
        </div>
      </header>

      <section className="featured-brands">
        <h2>Featured Brands</h2>
        <div className="brands-grid">
          {featuredBrands.map((brand, index) => (
            <div key={index} className="brand-card">
              <img src={brand} alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
