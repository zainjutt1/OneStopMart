import React from 'react';
import logo from '../assets/logo.png';
import usePageTransition from '../hooks/usePageTransition';

function Hero() {
  const visible = usePageTransition();

  return (
    <header
      className="hero"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
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
