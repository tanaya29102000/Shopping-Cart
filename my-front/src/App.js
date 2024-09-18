import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import Navbar from './pages/Navbar';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Footer from './pages/Footer';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
  };

  const navigateToLogin = () => {
    window.location.href = '/login';
  };

  const navigateToSignup = () => {
    window.location.href = '/signup';
  };

  const products = [
    { id: 1, name: 'Product 1', price: 100, image: '/images/products/product1.jpg' },
    { id: 2, name: 'Product 2', price: 150, image: '/images/products/product2.jpg' },
    { id: 3, name: 'Product 3', price: 200, image: '/images/products/product3.jpg' },
    { id: 4, name: 'Product 4', price: 250, image: '/images/products/product4.jpg' },
    { id: 5, name: 'Product 5', price: 300, image: '/images/products/product5.jpg' },
    { id: 6, name: 'Product 6', price: 100, image: '/images/products/product6.jpg' },
    { id: 7, name: 'Product 7', price: 150, image: '/images/products/product7.jpg' },
    { id: 8, name: 'Product 8', price: 200, image: '/images/products/product8.jpg' },
    { id: 9, name: 'Product 9', price: 250, image: '/images/products/product9.jpg' },
    { id: 10, name: 'Product 10', price: 300, image: '/images/products/product10.jpg' },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter(item => item !== itemToRemove));
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter((product) => product.id !== productId));
  };

  return (
    <Router>
      <div className="app">
        <Navbar user={user} cartItemsCount={cartItems.length} wishlist={wishlist} />
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} products={products} addToCart={addToCart} addToWishlist={addToWishlist} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop isLoggedIn={isLoggedIn} products={products} addToCart={addToCart} addToWishlist={addToWishlist} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />} />
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} setUser={setUser} navigateToSignup={navigateToSignup} />} />
          <Route path="/signup" element={<SignUp navigateToLogin={navigateToLogin} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
