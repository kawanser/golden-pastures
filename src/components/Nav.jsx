import React from 'react'
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";

const Nav = () => {
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
        </ul>
      </div>
    </nav>
  );
}

export default Nav