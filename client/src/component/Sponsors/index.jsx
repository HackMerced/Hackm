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
            <div>
                <font size = "7" color ="white"> 
              <p class = "right"> SPONSORS </p>
                </font>
             <p><a href= "https://asucm.ucmerced.edu/" >
                <img className="asucm" src={ASUCM} /> 
                 </a> </p>
            
            <p><a href = "https://digitalocean.com/">
                 <img className = "digitalocean" src={DigitalOcean}/> 
            </a></p>

            <p><a href = "https://www.sketch.com/">
                 <img className = "sketch" src = {sketch}/>
            </a></p>

            <p><a href= "https://1password.com/" >
                <img className= "password" src = {password}/>
                </a></p>

             <p><a href = "https://roche.com/" >
                 <img className = "roche" src= {roche}/> 
                 </a></p>

                
            </div>
           

        )
    }
}

export default Sponsors;