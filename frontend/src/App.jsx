import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trending from './components/Trending';
import Contact from './components/Contact';
import MoreProducts from './components/MoreProducts';
import CartPage from './components/CartPage'; 

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, selectedSize) => {
    const newItem = {
      cartId: Date.now(),
      id: product.id,
      title: product.title,
      img: product.img,
      size: selectedSize.size,
      price: selectedSize.price,
      numericPrice: parseInt(selectedSize.price.replace(/[^\d]/g, '')) 
    };
    setCartItems([...cartItems, newItem]);
    alert(`${product.title} (${selectedSize.size}) added to cart!`);
  };

  const removeFromCart = (cartId) => {
    setCartItems(cartItems.filter(item => item.cartId !== cartId));
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />
      
      <Routes>
        <Route path="/" element={
          <>
            <div id="home"><Hero /></div>
            
            <section id="about" className="about-section">
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

            <div id="trending">
              <Trending addToCart={addToCart} />
            </div>
          </>
        } />

        <Route path="/more-products" element={<MoreProducts addToCart={addToCart} />} />
        
        <Route path="/contact" element={<Contact />} />

        <Route path="/cartpage" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>

      <footer>
        © {new Date().getFullYear()} ONE STOP MART — All Rights Reserved
      </footer>
    </Router>
  );
}

export default App;