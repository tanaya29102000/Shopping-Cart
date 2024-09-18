import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Shop.css';
import { FaHeart } from 'react-icons/fa';

// Import images
import productImage1 from '../pages/image/C1.jpg';
import productImage2 from '../pages/image/C.jpg';
import productImage3 from '../pages/image/C2.jpg';
import productImage4 from '../pages/image/C4.jpg';
import productImage5 from '../pages/image/C5.jpg';
import productImage6 from '../pages/image/C6.jpg';
import productImage7 from '../pages/image/C7.jpg';
import productImage8 from '../pages/image/C8.jpg';
import productImage9 from '../pages/image/C9.jpg';
import productImage10 from '../pages/image/C10.jpg';
import productImage11 from '../pages/image/C11.jpg';
import productImage12 from '../pages/image/C12.jpg';
import productImage13 from '../pages/image/C13.jpg';
import productImage14 from '../pages/image/C14.jpg';
import productImage15 from '../pages/image/C15.jpg';
import productImage16 from '../pages/image/C16.jpg';



function Shop({ products, addToCart, addToWishlist, isLoggedIn }) {
  const navigate = useNavigate(); // Initialize useNavigate
  const [cartMessage, setCartMessage] = useState(''); // State for cart message
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleAddToCart = (product) => {
    if (isLoggedIn) {
      addToCart(product); // Add product to cart if logged in
      setCartMessage(`${product.name} has been added to your cart!`);

      // Navigate to the Cart page after 1 second
      setTimeout(() => {
        setCartMessage('');
        navigate('/cart');
      }, 1000);
    } else {
      navigate('/login'); // Redirect to login if not logged in
    }
  };

  const handleAddToWishlist = (product) => {
    if (isLoggedIn) {
      addToWishlist(product); // Add product to wishlist if logged in
      setCartMessage(`${product.name} has been added to your Wishlist!`);

      // Navigate to the Wishlist page after 1 second
      setTimeout(() => {
        setCartMessage('');
        navigate('/wishlist');
      }, 1000);
    } else {
      navigate('/login'); // Redirect to login if not logged in
    }
  };

  // Example products with imported images
  const updatedProducts = [
    { id: 1, name: 'Product 1', price: 2449.99, image: productImage1 },
    { id: 2, name: 'Product 2', price: 339.99, image: productImage2 },
    { id: 3, name: 'Product 3', price: 2392.99, image: productImage3 },
    { id: 4, name: 'Product 4', price: 1397.99, image: productImage4 },
    { id: 5, name: 'Product 5', price: 1389.99, image: productImage5 },
    { id: 6, name: 'Product 6', price: 1309.99, image: productImage6 },
    { id: 7, name: 'Product 7', price: 3919.99, image: productImage7 },
    { id: 8, name: 'Product 8', price: 3269.99, image: productImage8 },
    { id: 9, name: 'Product 9', price: 4439.99, image: productImage9 },
    { id: 10, name: 'Product 10', price: 1439.99, image: productImage10 },
    { id: 11, name: 'Product 11', price: 1739.99, image: productImage11},
    { id: 12, name: 'Product 12', price: 2039.99, image: productImage12 },
    { id: 13, name: 'Product 13', price: 1439.99, image: productImage13 },
    { id: 14, name: 'Product 14', price: 1409.99, image: productImage14 },
    { id: 15, name: 'Product 15', price: 1039.99, image: productImage15 },
    { id: 16, name: 'Product 16', price: 1039.99, image: productImage16 },


    // Add more products as needed
  ];

  return (
    <div className="shop-container">
      <h1>Shop Our Products</h1>
      {cartMessage && <div className="cart-message">{cartMessage}</div>}
      <div className="product-grid">
        {updatedProducts.map((product) => (
          <div 
            key={product.id} 
            className="product-card"
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <img src={product.image} alt={product.name} />
            {hoveredProductId === product.id && (
              <div className="wishlist-icon" onClick={() => handleAddToWishlist(product)}>
                <FaHeart size={24} />
              </div>
            )}
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
