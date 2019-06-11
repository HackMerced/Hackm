import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer.js'; 
import NavigationBar from './component/Navigation-Bar.js'; 
import 'font-awesome/css/font-awesome.min.css'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
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
      </header>
      <Footer /> {/* Link to Footer.js */}
    </div>  
  );
}

export default App;
