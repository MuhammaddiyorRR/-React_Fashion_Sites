import React from "react";
import See from "../see_all/see_all";
import Card from "../product/product";
import Mask from "../../essets/img/Mask Group.png";
import Mask1 from "../../essets/img/Mask Group (1).png";
import Mask2 from "../../essets/img/Mask Group (2).png";
import Mask3 from "../../essets/img/Mask Group (3).png";


export default class Arrival extends React.Component {
  render() {
    return (
      <>
        <See title="New Arrival" />
        <div className="new-arrival">
          <Card photo={Mask} />
          <Card photo={Mask1} />
          <Card photo={Mask2} />
          <Card photo={Mask3} />
        </div>
      </>
    );
  }
}
