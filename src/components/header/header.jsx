import React from "react";
import girl from "../../essets/img/Group 933.png";

export default class Header extends React.Component {
  render() {
    return (
      
<div class="header">
        <div className="info">
            <div className="header-title">
                <span>New Arrival</span>
            </div>
            <h1>New Fashion Collection
                Trends in 2022</h1>
            <p>Whether you're in the mood for fashion tricks, outfit ideas, industry news, celebrity street style, simply want to know latest styles.</p>
            <div className="btn">
                <a href="#/">Shop Now</a>
            </div>
        </div>
        <div className="img">
            <img src={girl} alt=""/>
        </div>
    </div>
    );
  }
}


