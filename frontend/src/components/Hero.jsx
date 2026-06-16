import React from 'react';
import logo from '../assets/logo.png';

function Hero() {
  return (
    <header className="hero">
      <img src={logo} alt="Logo" />

      <h1>ONE STOP MART</h1>

      <p>All your daily needs in ONE STOP!</p>

      <a href="#trending" className="hero-btn">
        View Trending Items
      </a>
    </header>
  );
}

export default Hero;