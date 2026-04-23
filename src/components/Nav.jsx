import React from 'react'
import { navLinks } from "../../constants/index";

const Nav = () => {
  return (
    <nav>
      <div>
        <a href="#home" className="">
          <img src="/images/icon-gold.png" alt="Golden Pasture logo" />
          <p>Golden Pasture</p>
        </a>
      </div>
      <ul>{navLinks.map((link) =>
          <li key={link.id}>
          <a href={`#${link.id}`}>{link.title}</a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav