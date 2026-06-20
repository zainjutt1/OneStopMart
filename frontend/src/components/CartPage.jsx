import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CartPage({ cartItems, removeFromCart }) {
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + Number(item.numericPrice || 0),
    0
  );

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    try {
      const orderData = {
        items: cartItems,
        totalAmount: totalAmount,
      };

      const response = await axios.post(
        "https://onestopmart-production.up.railway.app",
        orderData
      );

      console.log(response.data);
      alert("Order Placed Successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to place order");
    }
  };

  return (
    <div
      className="product-section"
      style={{
        paddingTop: "120px",
        minHeight: "90vh",
        backgroundColor: "#0c0d10",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px" }}>
        <h2 style={{ textAlign: "left", marginBottom: "10px" }}>
          Shopping Cart
        </h2>

        <div className="product-divider" style={{ margin: "0 0 30px 0" }} />

        {cartItems.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 30px",
              background: "#15171c",
              borderRadius: "6px",
              border: "1px solid #2a2d35",
            }}
          >
            <div style={{ fontSize: "46px", marginBottom: "20px", opacity: 0.7 }}>🛒</div>

            <h3 style={{ color: "#f4f1ea", fontWeight: 500, marginBottom: "10px" }}>
              Your cart is empty
            </h3>

            <p style={{ color: "#9a958a", marginBottom: "28px", fontWeight: 300 }}>
              Looks like you haven't added anything to your cart yet.
            </p>

            <Link
              to="/more-products"
              className="submit-btn"
              style={{
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 350px",
              gap: "30px",
              alignItems: "start",
            }}
            className="cart-grid"
          >
            <div className="cart-items-container">
              {cartItems.map((item) => (
                <div
                  key={item.cartId}
                  className="card"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    minHeight: "auto",
                    padding: "18px",
                    marginBottom: "16px",
                    textAlign: "left",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "75px",
                      height: "75px",
                      objectFit: "contain",
                      marginRight: "20px",
                      marginBottom: 0,
                    }}
                  />

                  <div style={{ flex: "1" }}>
                    <h4 style={{ margin: "0 0 6px 0", color: "#f4f1ea", fontWeight: 500 }}>{item.title}</h4>

                    <p style={{ fontSize: "13px", color: "#9a958a", margin: "0" }}>
                      Size: {item.size}
                    </p>

                    <p
                      style={{
                        fontWeight: "600",
                        color: "#e8c873",
                        margin: "8px 0 0 0",
                      }}
                    >
                      {item.price}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.cartId)}
                    style={{
                      backgroundColor: "transparent",
                      color: "#e0654f",
                      padding: "8px 14px",
                      fontSize: "11px",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      border: "1px solid #e0654f",
                      borderRadius: "2px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "#15171c",
                padding: "28px",
                borderRadius: "6px",
                border: "1px solid #2a2d35",
                borderTop: "2px solid #c9a648",
                position: "sticky",
                top: "100px",
              }}
            >
              <h3
                style={{
                  borderBottom: "1px solid #2a2d35",
                  paddingBottom: "16px",
                  color: "#f4f1ea",
                  fontWeight: 500,
                }}
              >
                Order Summary
              </h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "20px 0",
                  color: "#9a958a",
                  fontSize: "14px",
                }}
              >
                <span>Subtotal ({cartItems.length} items)</span>
                <span style={{ color: "#f4f1ea" }}>Rs. {totalAmount}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px 0",
                  color: "#4caf7d",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                <span>Delivery</span>
                <span>FREE</span>
              </div>

              <div
                style={{
                  borderTop: "1px solid #2a2d35",
                  marginTop: "20px",
                  paddingTop: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "600", fontSize: "1.1rem", color: "#f4f1ea" }}>
                  Total
                </span>

                <span
                  style={{
                    fontWeight: "700",
                    fontSize: "1.2rem",
                    color: "#e8c873",
                  }}
                >
                  Rs. {totalAmount}
                </span>
              </div>

              <button
                className="submit-btn"
                style={{ width: "100%", marginTop: "30px" }}
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>

              <Link
                to="/more-products"
                style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: "16px",
                  color: "#9a958a",
                  fontSize: "13px",
                  textDecoration: "none",
                }}
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
