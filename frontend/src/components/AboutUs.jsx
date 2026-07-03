import React from 'react';
import usePageTransition from '../hooks/usePageTransition';

function AboutUs() {
  const visible = usePageTransition();

  return (
    <section
      className="about-section"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <div className="about-content">
        <h2>About Us</h2>
        <div className="about-divider"></div>
        <p>
          Welcome to <strong>One Stop Mart</strong> ,your trusted destination for
          quality household products. Our goal is to make shopping simple, fast, and affordable.
          Whether you visit our physical store or shop online, we guarantee quality products,
          trusted brands, and excellent customer service every time.
          We are dedicated to bringing convenience right to your doorstep.
        </p>
        <div className="about-features">
          <span className="feature-tag">- Quality Products</span>
          <span className="feature-tag">- Fast Delivery</span>
          <span className="feature-tag">- Best Prices</span>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
