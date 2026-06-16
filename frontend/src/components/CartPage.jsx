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
        "http://localhost:5000/api/orders",
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
        backgroundColor: "#f9fafb",
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
              padding: "50px",
              background: "white",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>🛒</div>

            <h3>Your cart is empty!</h3>

            <p style={{ color: "#666", marginBottom: "20px" }}>
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
                    padding: "15px",
                    marginBottom: "15px",
                    textAlign: "left",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                      marginRight: "20px",
                    }}
                  />

                  <div style={{ flex: "1" }}>
                    <h4 style={{ margin: "0 0 5px 0" }}>{item.title}</h4>

                    <p style={{ fontSize: "13px", color: "#666", margin: "0" }}>
                      Size: {item.size}
                    </p>

                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#2563eb",
                        margin: "5px 0 0 0",
                      }}
                    >
                      {item.price}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.cartId)}
                    style={{
                      backgroundColor: "#fee2e2",
                      color: "#ef4444",
                      padding: "8px 12px",
                      fontSize: "12px",
                      border: "none",
                      borderRadius: "8px",
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
                background: "white",
                padding: "25px",
                borderRadius: "15px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                position: "sticky",
                top: "100px",
              }}
            >
              <h3
                style={{
                  borderBottom: "1px solid #eee",
                  paddingBottom: "15px",
                }}
              >
                Order Summary
              </h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "20px 0",
                }}
              >
                <span>Subtotal ({cartItems.length} items)</span>
                <span>Rs. {totalAmount}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px 0",
                  color: "#10b981",
                  fontWeight: "bold",
                }}
              >
                <span>Delivery</span>
                <span>FREE</span>
              </div>

              <div
                style={{
                  borderTop: "2px solid #eee",
                  marginTop: "20px",
                  paddingTop: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Total
                </span>

                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    color: "#111827",
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
                  marginTop: "15px",
                  color: "#666",
                  fontSize: "14px",
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