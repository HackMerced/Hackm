import React from 'react';
import './App.css';
import Footer from './component/Footer.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './component/Main.jsx'
//import signUp from './pages/signUp/signUp.jsx'
//import adminDash from './pages/adminDash/admin.jsx'


function App() {
  return (
    <div>
      <Main /> {/* Link to React Router */}
      <Footer /> {/* Link to Footer.js */}
    
    </div>
  );
}

export default App;