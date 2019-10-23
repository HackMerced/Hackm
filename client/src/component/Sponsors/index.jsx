import React from 'react';
import './sponsors-logos.css';
import ASUCM from "../../assests/asucm_logo.png";
import password from "../../assests/1password.png";
import DigitalOcean from "../../assests/DO_Logo_Vertical_White.png";
import sketch from "../../assests/sketch-logo-dark-transparent@2x.png";
import roche from "../../assests/Roche_Logo.svg"
//inserted image by moving from file to file

class Sponsors extends React.Component {
    render() {
        return( 
            <article className = "App-Sponsors" id= "Sponsors">
                 <div className="sponsoring">
                <font size = "6" color ="white"> 
              <p class = "right"> SPONSORS </p>
                </font>

            <div class = "row">
                <div className="column">
             <a href= "https://asucm.ucmerced.edu/" >
                <img className="asucm" src={ASUCM} alt="ASUCM" /> 
                 </a> 
                 </div>
            <div className = "column">
            <p><a href = "https://digitalocean.com/">
                 <img className = "digitalocean" src={DigitalOcean} alt="Digital Ocean" /> 
            </a></p>
            </div>

            <div className = "column">
             <a href = "https://roche.com/" >
                 <img className = "roche" src= {roche} alt="Roche"/> 
                 </a>
                 </div>
            </div>

            <div className = "bottom">
                <div className= "password">
            <a href= "https://1password.com/" >
                <img className= "password" src = {password} alt="1Password"/>
                </a>
                </div>
            
                <div className= "bottom">
            <a href = "https://www.sketch.com/">
                 <img className = "sketch" src = {sketch} alt="Sketch" />
            </a>
                         </div>
                    </div>       
                </div>
             </article>
        )              
    }
}

export default Sponsors;