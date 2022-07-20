import React from "react";
import logo from "../../essets/img/logo.png";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="lists">
          <div className="list">
            <img src={logo} alt="" />
            <p>
              <i className="fa-solid fa-phone"></i> +123 4567 8901
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> info@example.com
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> View on Google Map
            </p>
          </div>
          <div className="list">
            <span>Company</span>
            <ul>
              <li>About Fashionsite</li>
              <li>Our Guarantees</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Careers</li>
              <li>Sitemap</li>
              <li>Why Shop with us</li>
            </ul>
          </div>
          <div className="list">
            <span>Our Top Categories</span>
            <ul>
              <li>Women’s Clothing</li>
              <li>Men’s Clothing</li>
              <li>Jewelry & Watches</li>
              <li>Buauty & Health</li>
              <li>Toy, Kids & Babies</li>
              <li>Bags & Shoes</li>
            </ul>
          </div>
          <div className="list">
            <span>Customer Service</span>
            <ul>
              <li>Sign in / Login</li>
              <li>Shipping & Delivery</li>
              <li>Return & Replacement</li>
              <li>Track Your Order</li>
              <li>Sell with us</li>
              <li>How To Buy</li>
            </ul>
          </div>
        </div>

        <p className="p">Copyright @ 2022 Fashionsite</p>
      </div>
    );
  }
}
