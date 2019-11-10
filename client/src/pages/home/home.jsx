import React from 'react'
import logo from '../../logo.svg';
import FAQ from '../../component/FAQ/FAQ.jsx';
import './home.css'; //import css for this page


class Home extends React.Component {   // This page is the exact same page as the original example
  render() {
    return (
      <article className="Home">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
            <FAQ />
          </div>
      </article>
      );
  }
}
export default Home;