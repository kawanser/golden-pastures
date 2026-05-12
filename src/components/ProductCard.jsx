import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ imgPath, name, price }) => {
  const [count, setCount] = useState(0);
  const { addToCart } = useCart();

  function handleAdd() {
    setCount(count + 1);
  }

  function handleMinus() {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  }

  function handleCart() {
    addToCart(
      {
        imgPath,
        name,
        price,
      },
      count,
    );

    setCount(0);
  }

  return (
    <div id="product-card">
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
