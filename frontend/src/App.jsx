import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trending from './components/Trending';
import Contact from './components/Contact';
import MoreProducts from './components/MoreProducts';
import CartPage from './components/CartPage';
import AboutUs from './components/AboutUs';

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

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />

      <Routes>
        <Route path="/" element={
          <>
            <div id="home"><Hero /></div>
            <div id="trending">
              <Trending addToCart={addToCart} />
            </div>
          </>
        } />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/more-products" element={<MoreProducts addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cartpage" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />} />
      </Routes>

      <footer>
        © {new Date().getFullYear()} ONE STOP MART — All Rights Reserved
      </footer>
    </Router>
  );
}

export default App;
