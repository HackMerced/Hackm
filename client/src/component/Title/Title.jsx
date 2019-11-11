import React from 'react';
import './Title.css';
import polaroid from './polaroid.png'; // with import
import PopUp from './PopUp.jsx';
import axios from 'axios';

class Title extends React.Component {
    render() {
        return (
            <article className="App-title" id="Title">
            <link href="https://fonts.googleapis.com/css?family=Dosis:300&display=swap" rel="stylesheet"></link>
                <section className="title-title">
                    {/* Headers */}
                    <h2>hack'm</h2>
                    <h4>december 7, 2019</h4>
                    {/* popup button trigger */}
                </section>
                <img className="title-image" src={polaroid} alt="Italian Trulli"></img>
                <PopUp />
            </article>
        )
      }
   }


export default Title;