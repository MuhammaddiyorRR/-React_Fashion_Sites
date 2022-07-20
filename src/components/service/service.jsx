import React from "react";
import Section from "./section";
// import logo from "../../essets/img/Group 954.png";
import fast from "../../essets/img/fast & free.svg";
import support from "../../essets/img/support.svg";
import guarantee from "../../essets/img/guarantee.svg";
// import like from "../../essets/img/like.svg";
// import shop from "../../essets/img/shop.svg";
// import "./navbar.scss";

export default class Service extends React.Component {
  render() {
    return (
      <div className="service">
        <Section
          photo={fast}
          title="Fast & Free Delivery"
          about="Free delivery for all orders over $140"
        />
        <Section
          photo={support}
          title="24/7 Customer Support"
          about="friendly 24/7 customer support"
        />
        <Section
          photo={guarantee}
          title="Money Back Guarantee"
          about="We return money within 30 days"
        />

        {/* //   <div className="section">
      //     <img src={fast} alt="" />
      //     <div className="description">
      //       <span>Fast & Free Delivery</span>
      //       <p>Free delivery for all orders over $140</p>
      //     </div>
      //   </div>
      //   <div className="section">
      //     <img src={support} alt="" />
      //     <div className="description">
      //       <span>24/7 Customer Support</span>
      //       <p>friendly 24/7 customer support</p>
      //     </div>
      //   </div>
      //   <div className="section">
      //     <img src={guarantee} alt="" />
      //     <div className="description">
      //       <span>Money Back Guarantee</span>
      //       <p>We return money within 30 days</p>
      //     </div>
      //   </div> */}
      </div>
    );
  }
}

