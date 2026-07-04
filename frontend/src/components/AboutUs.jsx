import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import usePageTransition from '../hooks/usePageTransition';

const stats = [
  { number: '5,000+', label: 'Happy Customers' },
  { number: '200+',   label: 'Products Available' },
  { number: '3',      label: 'Years of Trust' },
  { number: '100%',   label: 'Quality Assured' },
];

const values = [
  {
    icon: '🏆',
    title: 'Premium Quality',
    desc: 'Every product on our shelves passes strict quality checks. We only stock trusted, well-known brands that our customers rely on every day.',
  },
  {
    icon: '🚚',
    title: 'Fast Delivery',
    desc: 'We understand your time is precious. Our logistics network ensures your order reaches your doorstep quickly and safely.',
  },
  {
    icon: '💰',
    title: 'Best Prices',
    desc: 'We negotiate directly with suppliers to bring you the most competitive prices — no middlemen, no markups.',
  },
  {
    icon: '🤝',
    title: 'Customer First',
    desc: 'Our support team is always ready to help. Whether it\'s a query or a concern, we resolve it with care and speed.',
  },
  {
    icon: '🌿',
    title: 'Trusted Brands',
    desc: 'From global household names to local favourites, we curate a selection that balances quality, price, and everyday value.',
  },
  {
    icon: '🔒',
    title: 'Secure Shopping',
    desc: 'Your personal and payment information is always protected. Shop with confidence knowing your data is safe with us.',
  },
];

function AboutUs() {
  const visible = usePageTransition();

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-base)',
        minHeight: '100vh',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >

      {/* ── HERO BANNER ── */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #0c0d10 0%, #15171c 50%, #0c0d10 100%)',
        borderBottom: '1px solid var(--line)',
        padding: '100px 20px 80px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* glow */}
        <div style={{
          position: 'absolute', top: '-80px', left: '50%',
          transform: 'translateX(-50%)',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(201,166,72,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <img
          src={logo}
          alt="One Stop Mart"
          style={{
            width: '110px', height: '110px',
            borderRadius: '50%',
            border: '2px solid var(--gold)',
            objectFit: 'cover',
            marginBottom: '28px',
            boxShadow: '0 0 40px rgba(201,166,72,0.3)',
          }}
        />

        <p style={{
          fontSize: '12px', letterSpacing: '4px',
          textTransform: 'uppercase', color: 'var(--gold-bright)',
          marginBottom: '16px', fontWeight: 500,
        }}>
          Our Story
        </p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
          fontWeight: 700, color: 'var(--ivory)',
          marginBottom: '22px', lineHeight: 1.15,
        }}>
          About One Stop Mart
        </h1>

        <div style={{
          width: '60px', height: '2px',
          background: 'var(--gold)',
          margin: '0 auto 28px',
        }} />

        <p style={{
          color: 'var(--muted)', fontSize: '1.08rem',
          fontWeight: 300, lineHeight: 1.85,
          maxWidth: '620px', margin: '0 auto 36px',
        }}>
          Founded with a simple belief — that every household deserves access to quality products at honest prices.
          <strong style={{ color: 'var(--gold-bright)', fontWeight: 600 }}> One Stop Mart</strong> is your neighbourhood store,
          now at your fingertips.
        </p>

        <Link
          to="/more-products"
          style={{
            display: 'inline-block',
            padding: '14px 38px',
            border: '1px solid var(--gold)',
            color: 'var(--gold-bright)',
            textDecoration: 'none',
            fontSize: '13px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: 500,
            borderRadius: '2px',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => { e.target.style.background = 'var(--gold)'; e.target.style.color = '#0c0d10'; }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--gold-bright)'; }}
        >
          Shop Now
        </Link>
      </div>

      {/* ── STATS ROW ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        borderBottom: '1px solid var(--line)',
        borderTop: '1px solid var(--line)',
      }}>
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              padding: '44px 20px',
              textAlign: 'center',
              borderRight: i < stats.length - 1 ? '1px solid var(--line)' : 'none',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity 0.6s ease ${0.15 + i * 0.1}s, transform 0.6s ease ${0.15 + i * 0.1}s`,
            }}
          >
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.4rem', fontWeight: 700,
              color: 'var(--gold-bright)', marginBottom: '8px',
            }}>
              {s.number}
            </div>
            <div style={{
              fontSize: '13px', color: 'var(--muted)',
              letterSpacing: '0.5px', textTransform: 'uppercase',
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── MISSION SECTION ── */}
      <div style={{
        maxWidth: '900px', margin: '0 auto',
        padding: '90px 28px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
      }}
        className="about-two-col"
      >
        <div>
          <p style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px', fontWeight: 500 }}>
            Who We Are
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--ivory)', marginBottom: '20px', lineHeight: 1.3 }}>
            More Than Just a Store
          </h2>
          <div style={{ width: '50px', height: '2px', background: 'var(--gold)', marginBottom: '24px' }} />
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontWeight: 300, marginBottom: '18px' }}>
            One Stop Mart began as a small neighbourhood shop in Lahore, built on the foundation of trust, quality, and community. Over the years, we've grown into a full-service retail destination — but our values remain the same.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontWeight: 300 }}>
            We believe shopping should be effortless. That's why we've taken the One Stop Mart experience online — so you can browse, choose, and order from the comfort of your home, with the same reliability you expect from us in person.
          </p>
        </div>

        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--line)',
          borderTop: '2px solid var(--gold)',
          borderRadius: '6px',
          padding: '40px 36px',
        }}>
          <p style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px', fontWeight: 500 }}>
            Our Mission
          </p>
          <p style={{ color: 'var(--ivory)', fontSize: '1.1rem', fontFamily: 'var(--font-display)', lineHeight: 1.7, marginBottom: '28px', fontStyle: 'italic' }}>
            "To make quality household products accessible to every family — at honest prices, delivered with care."
          </p>
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '24px' }}>
            <p style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px', fontWeight: 500 }}>
              Our Vision
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, fontSize: '0.95rem' }}>
              To become Pakistan's most trusted online grocery and household products destination — where every customer feels valued, every product meets expectations, and every delivery exceeds them.
            </p>
          </div>
        </div>
      </div>

      {/* ── VALUES GRID ── */}
      <div style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        padding: '90px 28px',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px', fontWeight: 500 }}>
          What We Stand For
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--ivory)', marginBottom: '12px' }}>
          Our Core Values
        </h2>
        <div style={{ width: '50px', height: '2px', background: 'var(--gold)', margin: '0 auto 54px' }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {values.map((v, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg-base)',
                border: '1px solid var(--line)',
                borderRadius: '6px',
                padding: '36px 28px',
                textAlign: 'left',
                transition: 'border-color 0.3s, transform 0.3s',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${0.2 + i * 0.08}s, transform 0.5s ease ${0.2 + i * 0.08}s`,
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,166,72,0.5)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '18px' }}>{v.icon}</div>
              <h3 style={{ color: 'var(--ivory)', fontWeight: 500, marginBottom: '12px', fontSize: '1rem' }}>{v.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA STRIP ── */}
      <div style={{
        padding: '90px 20px',
        textAlign: 'center',
        background: 'var(--bg-base)',
      }}>
        <p style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px', fontWeight: 500 }}>
          Ready to Shop?
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--ivory)', marginBottom: '16px' }}>
          Quality Products, Delivered to Your Door
        </h2>
        <p style={{ color: 'var(--muted)', fontWeight: 300, maxWidth: '480px', margin: '0 auto 36px', lineHeight: 1.8 }}>
          Browse our full catalogue and experience the One Stop Mart difference — trusted brands, honest prices, fast delivery.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/more-products"
            style={{
              display: 'inline-block', padding: '14px 38px',
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
            Browse Products
          </Link>
          <Link
            to="/contact"
            style={{
              display: 'inline-block', padding: '14px 38px',
              background: 'transparent', color: 'var(--gold-bright)',
              textDecoration: 'none', fontSize: '13px',
              letterSpacing: '2px', textTransform: 'uppercase',
              fontWeight: 500, borderRadius: '2px',
              border: '1px solid var(--gold)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.target.style.background = 'var(--gold)'; e.target.style.color = '#0c0d10'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--gold-bright)'; }}
          >
            Contact Us
          </Link>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
