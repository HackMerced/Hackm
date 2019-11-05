import React from 'react';
import Footer from './component//Footer/Footer.jsx';
import Main from './component/Main/Main.jsx'
import NavigationBar from './component/Header/Navigation-Bar.jsx'
const App = () => {
  return (
    <React.Fragment> 		{/* This allows children, and removal of unnecessary <div> wrapper */}
      <NavigationBar />

      <Main /> 		{/* Link to React Router */}
      <Footer />	{/* Link to Footer.js */}
    </React.Fragment>
  );
}

export default App;
