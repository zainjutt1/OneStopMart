import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import pepsiImg from '../assets/pepsi.jpg';
import tapalImg from '../assets/tapal.jpg';
import surfImg from '../assets/excel.jpg';
import olpersImg from '../assets/olpers.jpg';
import dettolImg from '../assets/dettol.jpg';
import knorrImg from '../assets/knorr.jpg';
import tangImg from '../assets/tang.jpg';
import headImg from '../assets/h&s.jpg';
import sensodyneImg from '../assets/Sensodyne.png';
import arielImg from '../assets/Ariel.jpg';
import miloImg from '../assets/Milo.jpg';
import shieldImg from '../assets/Toothbrush.jpg';

const extraProducts = [
  { id: 101, title: "Pepsi Cold Drink", img: pepsiImg, details: [{size: "500ml", price: "Rs. 100"}, {size: "1.5L", price: "Rs. 190"}, {size: "2.25L", price: "Rs. 250"}] },
  { id: 102, title: "Tapal Danedar Tea", img: tapalImg, details: [{size: "95g", price: "Rs. 210"}, {size: "190g", price: "Rs. 410"}, {size: "450g", price: "Rs. 950"}] },
  { id: 103, title: "Surf Excel Powder", img: surfImg, details: [{size: "500g", price: "Rs. 320"}, {size: "1kg", price: "Rs. 600"}, {size: "2kg", price: "Rs. 1150"}] },
  { id: 104, title: "Olpers Milk", img: olpersImg, details: [{size: "250ml", price: "Rs. 75"}, {size: "1L", price: "Rs. 280"}, {size: "1.5L", price: "Rs. 410"}] },
  { id: 105, title: "Dettol Anti-Septic Soap", img: dettolImg, details: [{size: "70g", price: "Rs. 90"}, {size: "110g", price: "Rs. 150"}, {size: "150g", price: "Rs. 200"}] },
  { id: 106, title: "Knorr Noodles", img: knorrImg, details: [{size: "Single Pack", price: "Rs. 50"}, {size: "Pack of 6", price: "Rs. 290"}, {size: "Family Pack", price: "Rs. 550"}] },
  { id: 107, title: "Tang Orange", img: tangImg, details: [{size: "375g", price: "Rs. 350"}, {size: "750g", price: "Rs. 680"}, {size: "1.5kg", price: "Rs. 1250"}] },
  { id: 108, title: "Head & Shoulders", img: headImg, details: [{size: "180ml", price: "Rs. 300"}, {size: "360ml", price: "Rs. 550"}, {size: "650ml", price: "Rs. 950"}] },
  { id: 109, title: "Sensodyne Toothpaste", img: sensodyneImg, details: [{size: "50g", price: "Rs. 180"}, {size: "100g", price: "Rs. 320"}, {size: "150g", price: "Rs. 450"}] },
  { id: 110, title: "Ariel Washing Powder", img: arielImg, details: [{size: "500g", price: "Rs. 350"}, {size: "1kg", price: "Rs. 680"}, {size: "2kg", price: "Rs. 1300"}] },
  { id: 111, title: "Milo Chocolate Drink", img: miloImg, details: [{size: "180ml", price: "Rs. 80"}, {size: "Pack of 6", price: "Rs. 450"}, {size: "400g Tin", price: "Rs. 900"}] },
  { id: 112, title: "Shield Toothbrush", img: shieldImg, details: [{size: "Soft", price: "Rs. 110"}, {size: "Medium", price: "Rs. 120"}, {size: "Hard", price: "Rs. 120"}] },
];


function MoreProducts({ addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="product-section" style={{paddingTop: '110px', backgroundColor: '#0c0d10', minHeight: '100vh'}}>
      <h2>All Products</h2>
      <div className="product-divider"></div>
      
      <div className="product-grid">
        {extraProducts.map((product) => (
          <div key={product.id} className="card">
            <img src={product.img} alt={product.title} style={{ width: '100%', height: '180px', objectFit: 'contain' }} />
            <h3>{product.title}</h3>
            
            {selectedProduct === product.id ? (
              <div className="size-details">
                {product.details.map((d, i) => (
                  <div key={i} className="size-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <p style={{ margin: 0, color: '#f4f1ea' }}><strong style={{ color: '#9a958a', fontWeight: 400 }}>{d.size}:</strong> {d.price}</p>
                    <button 
                      className="add-to-cart-btn" 
                      style={{ padding: '5px 14px', background: 'transparent', color: '#e8c873', border: '1px solid #c9a648', borderRadius: '2px', cursor: 'pointer', fontSize: '11px', letterSpacing: '0.5px', textTransform: 'uppercase' }}
                      onClick={() => addToCart(product, d)}
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
      
      <div style={{textAlign: 'center', padding: '40px'}}>
         <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
}

export default MoreProducts;