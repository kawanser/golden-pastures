import React from 'react'
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from 'lucide-react';

const Nav = () => {
  const { totalItems } = useCart();
  return (
    <nav>
      <div id="about">
        <Link to="/about">
          <img src="/images/icon-gold.png" alt="Golden Pasture logo" />
        </Link>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
          <Link to="/cart" className="cart-icon">
            <ShoppingCart />

            <span className="cart-count">{totalItems}</span>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav