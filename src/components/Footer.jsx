import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id='footer'>
      <hr />
      <div className="grouping">
        <div className="details">
          <div className="resources">
            <h6> Resources </h6>
            <Link to="/products">
              <p>Products</p>
            </Link>
            <Link to="/contact">
              <p>Delivery</p>
            </Link>
          </div>
          <div className="contact-us">
            <h6>Contact Us</h6>
            <p>
              For all inquiries, please contact
              <br></br>goldenpasture@gmail.com or visit
              our Contact Us page.
            </p>
          </div>
        </div>
        <p>© 2026 Golden Pasture, Inc. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer