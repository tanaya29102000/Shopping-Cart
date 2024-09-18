import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import './Navbar.css';


function Navbar({ cartItemsCount,wishlist ,user }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Link to="/" className="logo-text">SHOPPERS STOP</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="navbar-cart">

      <div className="navbar-actions">
        {user ? (<> <span>Welcome ${user.name}</span> </> ) : (<Link to="/login">Login</Link>)}
      </div>
      <Link to="/wishlist">
          <FaHeart size={24} />
          {wishlist.length > 0 && <span className="icon-badge">{wishlist.length}</span>}
        </Link>
        <Link to="/cart">
          <FaShoppingCart size={24} />
          {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;