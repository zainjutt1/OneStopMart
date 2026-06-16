import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1>ONE STOP MART</h1>
      <ul className="nav-links">
        <li><a href="/#home">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#trending">Trending</a></li>
        <li><Link to="/contact">Contact</Link></li> 
        <li className="cart-link-wrapper">
          <Link to="/cartpage" className="cart-icon">
            🛒 
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;