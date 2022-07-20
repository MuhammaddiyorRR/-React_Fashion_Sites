import React, { Component } from "react";
import arrow from "../../essets/img/arrow.svg";
import arrow1 from "../../essets/img/arrow (1).svg";

export default class See extends Component {
  render() {
    return (
      <div className="flex">
        <span>{this.props.title}</span>
        <div className="see_all">
          <span>See All Products</span>
          <div className="arrows">
            <div className="box">
              <img src={arrow} alt="" />
            </div>
            <div className="box">
              <img src={arrow1} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

