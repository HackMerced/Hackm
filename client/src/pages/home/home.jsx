import React from 'react'
import logo from '../../logo.svg';
import './home.css'; //import css for this page
import Title from '../../component/Title/Title.jsx'

class Home extends React.Component {   // This page is the exact same page as the original example
  render() {
    return (
      <div>
      <React.Fragment>
        <Title />
      </React.Fragment>
      </div>
      );
  }
}
export default Home;