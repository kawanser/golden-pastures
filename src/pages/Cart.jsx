import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <>
      <Nav />

      <main id="cart-page">
        <h1>Cart</h1>
        <div className="working-area">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img
                    src={item.imgPath}
                    alt={item.name}
                    className="cart-image"
                  />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>

                    <p>Quantity: {item.quantity}</p>

                    <p>${item.price * item.quantity}</p>

                    <button onClick={() => removeFromCart(item.name)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <p className="total">Total: ${totalPrice.toFixed(2)}</p>
      </main>

      <Footer />
    </>
  );
};

export default Cart;
