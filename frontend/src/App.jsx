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

  const clearCart = () => setCartItems([]);

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />

      <Routes>
        <Route path="/" element={
          <>
            <div id="home"><Hero /></div>

            {/* ── FEATURES STRIP ── */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              borderTop: '1px solid var(--line)',
              borderBottom: '1px solid var(--line)',
              background: 'var(--bg-surface)',
            }}>
              {[
                { icon: '🚚', title: 'Free Delivery',    sub: 'On all orders' },
                { icon: '✅', title: 'Quality Assured',  sub: 'Trusted brands only' },
                { icon: '💰', title: 'Best Prices',      sub: 'No hidden charges' },
                { icon: '🔒', title: 'Secure Checkout',  sub: 'Safe & encrypted' },
              ].map((f, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '28px 32px',
                  borderRight: i < 3 ? '1px solid var(--line)' : 'none',
                }}>
                  <span style={{ fontSize: '1.8rem' }}>{f.icon}</span>
                  <div>
                    <div style={{ color: 'var(--ivory)', fontWeight: 500, fontSize: '0.9rem' }}>{f.title}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '2px' }}>{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div id="trending">
              <Trending addToCart={addToCart} />
            </div>

            {/* ── WHY CHOOSE US STRIP ── */}
            <div style={{
              background: 'var(--bg-surface)',
              borderTop: '1px solid var(--line)',
              padding: '80px 28px',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px', fontWeight: 500 }}>
                Why One Stop Mart
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--ivory)', marginBottom: '12px' }}>
                The Smarter Way to Shop
              </h2>
              <div style={{ width: '50px', height: '2px', background: 'var(--gold)', margin: '0 auto 50px' }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '1100px', margin: '0 auto' }}>
                {[
                  { n: '01', t: 'Curated Selection',   d: 'Every product hand-picked for quality and value.' },
                  { n: '02', t: 'Transparent Pricing',  d: 'No surprises — what you see is what you pay.' },
                  { n: '03', t: 'Fast Fulfilment',      d: 'Orders processed and dispatched same day.' },
                  { n: '04', t: 'Easy Returns',         d: 'Hassle-free return policy — your satisfaction guaranteed.' },
                ].map((c, i) => (
                  <div key={i} style={{
                    background: 'var(--bg-base)',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    padding: '36px 24px',
                    textAlign: 'left',
                    transition: 'border-color 0.3s, transform 0.3s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,166,72,0.5)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'rgba(201,166,72,0.3)', marginBottom: '16px', fontWeight: 700 }}>{c.n}</div>
                    <h3 style={{ color: 'var(--ivory)', fontWeight: 500, marginBottom: '10px', fontSize: '0.95rem' }}>{c.t}</h3>
                    <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.8, fontWeight: 300 }}>{c.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── NEWSLETTER / CTA BANNER ── */}
            <div style={{
              background: 'linear-gradient(135deg, #15171c 0%, #1c1f26 100%)',
              borderTop: '1px solid var(--line)',
              padding: '80px 20px',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px', fontWeight: 500 }}>
                Explore More
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--ivory)', marginBottom: '16px' }}>
                200+ Products Waiting for You
              </h2>
              <p style={{ color: 'var(--muted)', fontWeight: 300, maxWidth: '440px', margin: '0 auto 36px', lineHeight: 1.8 }}>
                From daily essentials to household staples — everything you need, all in one place.
              </p>
              <a
                href="/more-products"
                style={{
                  display: 'inline-block', padding: '15px 44px',
                  background: 'var(--gold)', color: '#0c0d10',
                  textDecoration: 'none', fontSize: '13px',
                  letterSpacing: '2px', textTransform: 'uppercase',
                  fontWeight: 600, borderRadius: '2px',
                  border: '1px solid var(--gold)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.target.style.background = 'var(--gold-bright)'; e.target.style.boxShadow = '0 10px 25px rgba(201,166,72,0.3)'; }}
                onMouseLeave={e => { e.target.style.background = 'var(--gold)'; e.target.style.boxShadow = 'none'; }}
              >
                View All Products
              </a>
            </div>
          </>
        } />

        <Route path="/about"         element={<AboutUs />} />
        <Route path="/more-products" element={<MoreProducts addToCart={addToCart} />} />
        <Route path="/contact"       element={<Contact />} />
        <Route path="/cartpage"      element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />} />
      </Routes>

      <footer style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--line)', padding: '50px 28px 30px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--ivory)', marginBottom: '14px', fontSize: '1.2rem' }}>
              <span style={{ color: 'var(--gold)' }}>O</span>NE STOP MART
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.8, fontWeight: 300 }}>
              Your trusted destination for quality household products at honest prices.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--ivory)', marginBottom: '14px', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Quick Links</h4>
            {[['/', 'Home'], ['/about', 'About Us'], ['/more-products', 'Products'], ['/contact', 'Contact']].map(([href, label]) => (
              <div key={href} style={{ marginBottom: '10px' }}>
                <a href={href} style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.3s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold-bright)'}
                  onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                >{label}</a>
              </div>
            ))}
          </div>
          <div>
            <h4 style={{ color: 'var(--ivory)', marginBottom: '14px', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Contact</h4>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 2, fontWeight: 300 }}>
              📍 Adda Khui, Sahiwal, Pakistan<br />
              📞 +92 301 555 0001<br />
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--ivory)', marginBottom: '14px', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Hours</h4>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 2, fontWeight: 300 }}>
              Mon – Sun: 8am – 7pm<br />
              Friday: 8am – 12pm<br />
              Online Orders: 8AM- 7PM (Working Days)
            </p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '24px', textAlign: 'center', color: 'var(--muted)', fontSize: '13px', letterSpacing: '0.5px' }}>
          © {new Date().getFullYear()} ONE STOP MART — All Rights Reserved
        </div>
      </footer>
    </Router>
  );
}

export default App;
