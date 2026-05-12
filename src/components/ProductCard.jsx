import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ imgPath, name, price }) => {
  const [count, setCount] = useState(0);
  const { addToCart } = useCart();
  const [notification, setNotification] = useState("");

  function handleCart() {
    if (count === 0) return;

    addToCart(
      {
        imgPath,
        name,
        price,
      },
      count,
    );

    setNotification(`Added to cart`);

    setCount(0);

    setTimeout(() => {
      setNotification("");
    }, 2000);
  }

  function handleAdd() {
    setCount(count + 1);
  }

  function handleMinus() {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  }

  return (
    <div id="product-card">
      {notification && <div className="toast">{notification}</div>}
      <div className="product-contents">
        <img src={imgPath} alt={`Image of ${name}`} />
        <div className="details">
          <div className="text-area">
            <p>{name}</p>
            <h4>${price}</h4>
          </div>
          <div className="flex gap-[8px]">
            <button className="cart-btn" onClick={handleCart}>
              <ShoppingCart />
            </button>

            <div className="quantity">
              <button onClick={handleMinus}>-</button>

              <span>{count}</span>

              <button onClick={handleAdd}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;
