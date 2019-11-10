import React from 'react'
import logo from '../../logo.svg';
import './home.css'; //import css for this page
import Title from '../../component/Title/Title.jsx'
import Schedule from "../../component/Schedule/Schedule.jsx";

class Home extends React.Component {
  // This page is the exact same page as the original example
  render() {
    return (
        <React.Fragment>    {/* This allows children, and removal of unnecessary <div> wrapper */}
          <Title />
        <Schedule />
      </React.Fragment>
    )
  }
}
export default Home;
