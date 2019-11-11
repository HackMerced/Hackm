import React from 'react'
import logo from '../../logo.svg';
import FAQ from '../../component/FAQ/FAQ.jsx';
import './home.css'; //import css for this page
import AboutUs from '../../component/About-Us/AboutUs.jsx'
import Title from '../../component/Title/Title.jsx'
import Sponsors from '../../component/Sponsors/sponsors-logos';



class Home extends React.Component {
  // This page is the exact same page as the original example
  render() {
    return (
      <div>
        <React.Fragment>    {/* This allows children, and removal of unnecessary <div> wrapper */}
          <Title />
          <Schedule />
          <FAQ />
          <AboutUs />
          <Sponsors/>
      </React.Fragment>
      </div>
      );
  }
}
export default Home;
