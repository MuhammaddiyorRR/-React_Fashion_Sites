import React from "react";
import See from "../see_all/see_all";
import Card from "../product/product";
import Mask4 from "../../essets/img/Mask Group (4).png";
import Mask5 from "../../essets/img/Mask Group (5).png";
import Mask6 from "../../essets/img/Mask Group (6).png";
import Mask7 from "../../essets/img/Mask Group (7).png";
import Mask9 from "../../essets/img/Mask Group (9).png";
import blouse from "../../essets/img/lady-blouse-with-flounces-red-beret-is-looking-elegant-shiny-pink-dress 1.png";
import fashionable from "../../essets/img/fashionable-model-stylish-hat-red-coat-boots-posing-white-wall-studio 1.png";
import portrait from "../../essets/img/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing 1.png";

export default class Featured extends React.Component {
  render() {
    return (
      <>
        <See title="Our Featured Products" />
        <div className="new-arrival">
          <Card photo={Mask4} />
          <Card photo={Mask5} />
          <Card photo={Mask6} />
          <Card photo={Mask7} />
          <Card photo={Mask9} />
          <Card photo={blouse} />
          <Card photo={fashionable} />
          <Card photo={portrait} />
        </div>
      </>
    );
  }
}
