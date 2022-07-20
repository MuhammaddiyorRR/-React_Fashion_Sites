import React, { Component } from "react";
import stars from "../../essets/img/stars.svg";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.photo} alt="" />
        <div className="center">
          <div className="top">
            <img src={stars} alt="" />
            <p>50+ Reviews</p>
          </div>
          <span>Handstich Cotton High Quality Un-Stitched Salwar Kamiz</span>
          <div className="bottom">
            <span>$12.00</span>
            <p>$15.00</p>
          </div>
          <a href="#/">Add To Cart</a>
        </div>
      </div>
    );
  }
}
