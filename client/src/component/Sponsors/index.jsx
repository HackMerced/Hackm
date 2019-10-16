import React from 'react';
import './index.css';
import ASUCM from "../../assests/asucm_logo.png";
import password from "../../assests/1password.png";
import DigitalOcean from "../../assests/DO_Logo_Vertical_White.png";
import sketch from "../../assests/sketch-logo-dark-transparent@2x.png";
import roche from "../../assests/Roche_Logo.svg"
//inserted image by moving from file to file

class Sponsors extends React.Component {
    render() {
        return( 
            <div className = "Sponsors" id= "Sponsors">
                 <div class="container">
                 <section class="sponsoring">
                <div class="rows">
                <font size = "6" color ="white"> 
              <p class = "right"> SPONSORS </p>
                </font>

            <div class = "top">
                <div class="ASUCM"> 
                
             <p><a href= "https://asucm.ucmerced.edu/" >
                <img className="asucm" src={ASUCM} alt="ASUCM" /> 
                 </a> </p>
                 </div>


                <div class="digitalocean">
            <p><a href = "https://digitalocean.com/">
                 <img className = "digitalocean" src={DigitalOcean} alt="digitalocean" /> 
            </a></p>
            </div>
                 </div>

            <div class= "sketch">
            <p><a href = "https://www.sketch.com/">
                 <img className = "sketch" src = {sketch} alt="sketch" />
            </a></p>
            </div>

            <div class= "password">
            <p><a href= "https://1password.com/" >
                <img className= "password" src = {password} alt="password"/>
                </a></p>
                </div>

            <div class= "roche">
             <p><a href = "https://roche.com/" >
                 <img className = "roche" src= {roche} alt="roche"/> 
                 </a></p>
                 </div>
                         </div>
                     </section>
                 </div>
             </div>       
        )              
    }
}

export default Sponsors;