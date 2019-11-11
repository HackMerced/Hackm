import React from "react";
import FAQ from "../../component/FAQ/FAQ.jsx";
import AboutUs from "../../component/About-Us/AboutUs";
import Title from "../../component/Title/Title";
import Schedule from "../../component/Schedule/Schedule";
import Sponsors from "../../component/Sponsors/sponsors-logos";

import "./home.css"; // import css for this page

class Home extends React.Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Title />
          <Schedule />
          <FAQ />
          <AboutUs />
          <Sponsors />
        </React.Fragment>
      </div>
    );
  }
}
export default Home;
