import React from "react";
import Mailing from "../Mailing-List";

import "./Title.css";
import polaroid from "../../assets/images/polaroid.png";

class Title extends React.Component {
  render() {
    return (
      <article className="App-title" id="Title">
        <section className="title-title">
          {/* Headers */}
          <h2>HACK'M</h2>
          <h4>December 7, 2019</h4>
          <Mailing />
          {/* popup button trigger */}
        </section>
        <img className="title-image" src={polaroid} alt="Italian Trulli"></img>
      </article>
    );
  }
}

export default Title;
