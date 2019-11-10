import React from 'react'
import logo from '../../logo.svg';
import FAQ from '../../component/FAQ/FAQ.jsx';
import './home.css'; //import css for this page
import Title from '../../component/Title/Title.jsx'


class Home extends React.Component {   // This page is the exact same page as the original example
  render() {
    return (
      <article className="Home">
        <React.Fragment>    {/* This allows children, and removal of unnecessary <div> wrapper */}
          <Title />
            <FAQ />
      </React.Fragment>
      </article>
      );
  }
}
export default Home;