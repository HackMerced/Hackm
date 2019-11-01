import React from 'react';
import './sponsors-logos.css';
import ASUCM from "../../assests/asucm_logo.png";
import password from "../../assests/dotcom white mono.png";
import DigitalOcean from "../../assests/DO_Logo_Vertical_White.png";
import sketch from "../../assests/sketch-logo-dark-transparent@2x.png";
import roche from "../../assests/Roche_Logo.svg";
import balsamiq from "../../assests/balsamiq-logo-noborder-print.png";
import stickeryou from "../../assests/stickeryou_logo.png";
import jetbrains from "../../assests/jetbrains.png";
import makeschool from "../../assests/makeschool_logo.png";
//inserted images by moving from file to file

class Sponsors extends React.Component {
    render() {
        return( 
            <article className = "App-Sponsors" id= "Sponsors">
                 <div className="sponsoring"> {/*sponsoring section*/}
                <font size = "6" color ="white" > {/* title of Sponsors*/}
              <p class = "right"> SPONSORS </p>
                </font>

            <div className = "row"> {/*made a row for the display*/}
                <div className="column"> {/*named it column instead of top*/}
             <a href= "https://asucm.ucmerced.edu/" > {/*goes to ASUCM site*/}
                <img className="asucm" src={ASUCM} alt="ASUCM" /> {/*ASUCM logo and link*/}
                 </a> 
                 </div>
            <div className = "top">
            <p><a href = "https://digitalocean.com/"> {/*goes to digital ocean site*/}
                 <img className = "digitalocean" src={DigitalOcean} alt="Digital Ocean" /> {/*Digital Ocean logo and link*/}
            </a></p>
            </div>

            <div className = "top">
             <a href = "https://roche.com/" > {/*goes to roche site*/}
                 <img className = "roche" src= {roche} alt="Roche"/> {/*Roche logo and link*/}
                 </a>
                 </div>
            </div>

            <div className = "2row"> {/*bottom row for the display*/}
                <div className= "password">
            <a href= "https://1password.com/" > {/*goes to 1 password site*/}
                <img className= "password" src = {password} alt="1Password"/> {/*1 paswword logo and link*/}
                </a>
                
                <div className = "middle">
                    <a href = "https://www.makeschool.com/">
                        <img className = "makeschool" src = {makeschool} alt = "Make School" />
                    </a>
                </div>
                <div className = "middle">
                    <a href = "https://www.stickeryou.com/">
                        <img className = "stickeryou" src = {stickeryou} alt = "Sticker You" />
                    </a>
                </div>
                </div>
            
                <div className= "3row">
            <a href = "https://www.sketch.com/"> {/*goes to sketch site*/}
                 <img className = "sketch" src = {sketch} alt="Sketch" /> {/*Sketch logo and link*/}
            </a>
               
                 <div className = "bottom">
                <a href = "https://balsamiq.com/">
                        <img className = "balsamiq" src = {balsamiq} alt= "Balsamiq" />
            </a>
                    </div>
              
                <div className = "bottom">
                    <a href = "https://www.jetbrains.com/">
                        <img className = "jetbrains" src = {jetbrains} alt = "Jetbrains" />
                    </a>
                </div>
                </div>
                      
                    </div>       
                </div>
             </article>
        )              
    }
}

export default Sponsors;