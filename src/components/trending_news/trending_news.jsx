import React from "react";
import girls from "../../essets/img/blissful-curly-girl-light-vintage-dress-looking-down-while-posing-adorable-sister 1.png";
import readMore from "../../essets/img/read more.svg";
import group10 from "../../essets/img/Mask Group (10).png";
import group11 from "../../essets/img/Mask Group (11).png";

export default class Trending_news extends React.Component {
  render() {
    return (
      <>
        <div className="trending-news">
          <div className="left">
            <img src={girls} alt="" />
            <div className="fashion">
              <div className="text">
                <span>Casual fashion style</span>
                <p>
                  The dress gathers under the bust at the slimmest part of the
                  torso
                </p>
                <div className="btn">
                  <a href="#/">
                    Read More <img src={readMore} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="top">
              <img src={group10} alt="" />
              <div className="text">
                <span>New Casual fashion style</span>
                <p>
                  The dress gathers under the bust at the slimmest part of the
                  torso
                </p>
                <div className="btn">
                  <a href="#/">
                    Read More <img src={readMore} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bottom">
              <img src={group11} alt="" />
              <div className="text">
                <span>New Casual fashion style</span>
                <p>
                  The dress gathers under the bust at the slimmest part of the
                  torso
                </p>
                <div className="btn">
                  <a href="#/">
                    Read More <img src={readMore} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
