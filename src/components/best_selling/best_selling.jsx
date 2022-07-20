import React from "react";
import See from "../see_all/see_all";
import Card from "../product/product";
import Mask4 from "../../essets/img/Mask Group (4).png";
import Mask5 from "../../essets/img/Mask Group (5).png";
import Mask6 from "../../essets/img/Mask Group (6).png";
import Mask7 from "../../essets/img/Mask Group (7).png";

export default class Best_selling extends React.Component {
  render() {
    return (
      <>
        <See title="Best Selling Items" />
        <div className="new-arrival">
          <Card photo={Mask4} />
          <Card photo={Mask5} />
          <Card photo={Mask6} />
          <Card photo={Mask7} />
        </div>
      </>
    );
  }
}
