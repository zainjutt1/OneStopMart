import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <h1>ONE STOP MART</h1>

      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span style={menuOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}}></span>
        <span style={menuOpen ? { opacity: 0 } : {}}></span>
        <span style={menuOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}}></span>
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="/#home" onClick={closeMenu}>Home</a></li>
        <li><a href="/#about" onClick={closeMenu}>About</a></li>
        <li><a href="/#trending" onClick={closeMenu}>Trending</a></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        <li className="cart-link-wrapper">
          <Link to="/cartpage" className="cart-icon" onClick={closeMenu}>
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
