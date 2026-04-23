import React from 'react'
import { navLinks } from "../../constants";

const Nav = () => {
  return (
    <nav>
      <div>
        <a href="#about" className="">
          <img src="/images/icon-gold.png" alt="Golden Pasture logo" />
        </a>
        <ul>{navLinks.map((link) =>
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Nav