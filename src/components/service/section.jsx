import React from "react";
// import fast from "../../essets/img/fast & free.svg";
// import support from "../../essets/img/support.svg";
// import guarantee from "../../essets/img/guarantee.svg";


export default class Section extends React.Component {
  render() {
    return (
        <div className="section">
          <img src={this.props.photo} alt="" />
          <div className="description">
            <span>{this.props.title}</span>
            <p>{this.props.about}</p>
          </div>
        </div>
    );
  }
}
