import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import lifebuoy from '../assets/lifeboy.jpeg';
import lux from '../assets/lux.jpeg';
import vital from '../assets/vital.jpeg';
import ketchup from '../assets/ketchup.jpeg';

const products = [
  { 
    id: 1, title: "Lifebuoy Shampoo", img: lifebuoy, 
    details: [
      { size: "Small (175ml)", price: "Rs. 250" },
      { size: "Medium (350ml)", price: "Rs. 480" },
      { size: "Large (700ml)", price: "Rs. 900" }
    ]
  },
  { 
    id: 2, title: "Lux Beauty Soap", img: lux,
    details: [
      { size: "85g", price: "Rs. 120" },
      { size: "110g", price: "Rs. 160" },
      { size: "150g", price: "Rs. 210" }
    ]
  },
  { 
    id: 3, title: "Vital Tea", img: vital,
    details: [
      { size: "95g", price: "Rs. 230" },
      { size: "190g", price: "Rs. 450" },
      { size: "450g", price: "Rs. 950" }
    ]
  },
  { 
    id: 4, title: "Tomato Ketchup", img: ketchup,
    details: [
      { size: "250g", price: "Rs. 180" },
      { size: "500g", price: "Rs. 340" },
      { size: "1kg", price: "Rs. 650" }
    ]
  }
];

function Trending({ addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div id="trending" className="product-section">
      <h2>Trending Products</h2>
      
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.img} alt={product.title} style={{ width: '100%', height: '180px', objectFit: 'contain' }} />
            <h3>{product.title}</h3>
            
            {selectedProduct === product.id ? (
              <div className="size-details">
                {product.details.map((d, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', borderBottom: '1px solid #2a2d35', paddingBottom: '5px' }}>
                    <p style={{ margin: 0, color: '#f4f1ea' }}><strong style={{ color: '#9a958a', fontWeight: 400 }}>{d.size}:</strong> {d.price}</p>
                    <button 
                      onClick={() => addToCart(product, d)}
                      style={{ 
                        padding: '5px 14px', 
                        backgroundColor: 'transparent', 
                        color: '#e8c873', 
                        border: '1px solid #c9a648', 
                        borderRadius: '2px', 
                        cursor: 'pointer',
                        fontSize: '11px',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase'
                      }}
                    >
                      Add
                    </button>
                  </div>
                ))}
                <button className="close-btn" onClick={() => setSelectedProduct(null)} style={{ marginTop: '10px' }}>Back</button>
              </div>
            ) : (
              <button onClick={() => setSelectedProduct(product.id)}>View Details</button>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link 
          to="/more-products" 
          className="submit-btn" 
          style={{ textDecoration: 'none', padding: '12px 40px', display: 'inline-block' }}
        >
          See More Products
        </Link>
      </div>
      
    </div>
  );
}

export default Trending;