import React from 'react';
import logo from '../assets/logo.png';

function Hero() {
  return (
    <header className="hero">
      <span className="hero-eyebrow">Quality &nbsp;·&nbsp; Trust &nbsp;·&nbsp; Convenience</span>

      <img src={logo} alt="Logo" />

      <h1>ONE STOP MART</h1>

      <p>Everyday essentials, curated with care — all your daily needs in one stop.</p>

      <a href="#trending" className="hero-btn">
        View Trending Items
      </a>
    </header>
  );
}

export default Hero;