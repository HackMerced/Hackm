import React from 'react'
import logo from '../../logo.svg';
import './home.css'; //import css for this page
import Title from '../../component/Title/Title.jsx'
import ContactUs from '../../component/contact-us/Contact-Us.jsx'

class Home extends React.Component {   // This page is the exact same page as the original example
  render() {
    return (
      <div>
      <article className="Home">
        <React.Fragment>    {/* This allows children, and removal of unnecessary <div> wrapper */}
          <Title />
      </React.Fragment>
      </article>
      <div>
        <ContactUs />
      </div>
      </div>
      );
  }
}
export default Home;