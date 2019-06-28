import React from 'react'
import logo from '../../logo.svg';
import './home.css'; //import css for this page

const Home = () => {   {/* This page is the exact same page as the original example */}
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
    </article>
    );
}
export default Home;