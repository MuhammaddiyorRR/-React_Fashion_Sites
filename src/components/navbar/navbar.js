import React from "react";
import logo from "../../essets/img/Group 954.png";
import icon from "../../essets/img/11.svg";
import search from "../../essets/img/search.svg";
import person from "../../essets/img/person.svg";
import like from "../../essets/img/like.svg";
import shop from "../../essets/img/shop.svg";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="nav">
        <img src={logo} alt="" />
        <ul>
          <li>
            Products <img src={icon} alt="" />
          </li>
          <li>
            Shop <img src={icon} alt="" />
          </li>
          <li>
            Collection <img src={icon} alt="" />
          </li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <div className="icons">
          <img src={search} alt="" />
          <img src={person} alt="" />
          <img src={like} alt="" />
          <img src={shop} alt="" />
        </div>
      </div>
    );
  }
}
