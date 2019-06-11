import React from 'react'
import logo from '../../logo.svg';
import './home.css'; //import css for this page
function Home() {   {/* This page is the exact same page as the original example */}
  return (
    <div className="Home">
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
    </div>
    );
}

export default Home;