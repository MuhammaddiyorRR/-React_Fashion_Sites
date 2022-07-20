import React from "react";
import See from "../see_all/see_all"
// import logo from "../../essets/img/Group 954.png";

import star from "../../essets/img/star.svg";
import heart from "../../essets/img/heart.svg";
import removal from "../../essets/img/[removal.png";
import removal1 from "../../essets/img/[removal (1).png";
// import "./navbar.scss";

export default class Trending extends React.Component {
  render() {
    return (
      <>
        <See title="Trending This Month" />

        <div className="empire-boxes">
          <div className="box">
            <span>Empire Waist Dress</span>
            <p>
              The dress gathers under the bust at the slimmest part of the torso
            </p>
            <div className="price">
              <div className="top">
                <span>4.9</span> <img src={star} alt="" /> <p>50+ Reviews</p>
              </div>
              <div className="bottom">
                <span>$12.00</span>
                <p>$15.00</p>
              </div>
              <div className="btn">
                <a href="#/">Buy Now</a>
                <div className="heart">
                  <img src={heart} alt="" />
                </div>
              </div>
            </div>
            <img className="girl" src={removal} alt="" />
          </div>

          <div className="box">
            <span>Empire Waist Dress</span>
            <p>
              The dress gathers under the bust at the slimmest part of the torso
            </p>
            <div className="price">
              <div className="top">
                <span>4.9</span> <img src={star} alt="" /> <p>50+ Reviews</p>
              </div>
              <div className="bottom">
                <span>$12.00</span>
                <p>$15.00</p>
              </div>
              <div className="btn">
                <a href="#/">Buy Now</a>
                <div className="heart">
                  <img src={heart} alt="" />
                </div>
              </div>
            </div>
            <img className="girl" src={removal1} alt="" />
          </div>
        </div>
      </>
    );
  }
}











