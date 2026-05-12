import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(product, quantity) {
    if (quantity === 0) {
      return;
    }

    const existingProduct = cart.find((item) => item.name === product.name);

    if (existingProduct) {
      const updatedCart = cart.map((item) => {
        if (item.name === product.name) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }

        return item;
      });

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity,
        },
      ]);
    }
  }

  function removeFromCart(productName) {
    const filteredCart = cart.filter((item) => item.name !== productName);

    setCart(filteredCart);
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
