import React from "react";
import "./sponsors-logos.css";
import ASUCM from "../../assets/images/asucm_logo.png";
import password from "../../assets/images/1password.png";
import DigitalOcean from "../../assets/images/DigitalOcean_logo.svg.png";
import sketch from "../../assets/images/Sketch.png";
import roche from "../../assets/images/Roche_Logo.svg";
import balsamiq from "../../assets/images/balsamiq-logo-noborder-print.png";
import stickeryou from "../../assets/images/stickeryou_logo.png";
import jetbrains from "../../assets/images/jetbrains.png";
import makeschool from "../../assets/images/makeschool_logo.png";
import mlh from "../../assets/images/mlh-logo-color.png";
//inserted images by moving from file to file

class Sponsors extends React.Component {
  render() {
    return (
      <article className="App-Sponsors" id="Sponsors">
        <div className="sponsoring">
          {/*sponsoring section*/}
          <font size="6" color="#997080">
            {/* title of Sponsors*/}
            <p class="Sponsor-right"> SPONSORS </p>
          </font>
          <br></br>
          <div className="Sponsor-row">
            {/*made a row for the display*/}
            <div className="column">
              {" "}
              {/*named it column instead of top*/}
              <a href="https://asucm.ucmerced.edu/">
                {" "}
                {/*goes to ASUCM site*/}
                <img className="asucm" src={ASUCM} alt="ASUCM" />{" "}
                {/*ASUCM logo and link*/}
              </a>
            </div>
            <div className="Sponsor-top">
              <a href="https://digitalocean.com/">
                {" "}
                {/*goes to digital ocean site*/}
                <img
                  className="digitalocean"
                  src={DigitalOcean}
                  alt="Digital Ocean"
                />{" "}
                {/*Digital Ocean logo and link*/}
              </a>
            </div>
            <div className="Sponsor-top">
              <a href="https://roche.com/">
                {" "}
                {/*goes to roche site*/}
                <img className="roche" src={roche} alt="Roche" />{" "}
                {/*Roche logo and link*/}
              </a>
            </div>
          </div>
          <div className="Sponsor-2row">
            {" "}
            {/*bottom row for the display*/}
            <div className="Sponsor-middle">
              <div className="password">
                <a href="https://1password.com/">
                  {" "}
                  {/*goes to 1 password site*/}
                  <img
                    className="password"
                    src={password}
                    alt="1Password"
                  />{" "}
                  {/*1 paswword logo and link*/}
                </a>
              </div>

              <div className="Sponsor-middle">
                <a href="https://www.makeschool.com/">
                  <img
                    className="makeschool"
                    src={makeschool}
                    alt="Make School"
                  />
                </a>
              </div>
              <div className="Sponsor-middle">
                <a href="https://www.stickeryou.com/">
                  <img
                    className="stickeryou"
                    src={stickeryou}
                    alt="Sticker You"
                  />
                </a>
              </div>
            </div>
            <div className="Sponsor-3row">
              <div className="Sponsor-bottom">
                <a href="https://www.sketch.com/">
                  {" "}
                  {/*goes to sketch site*/}
                  <img className="sketch" src={sketch} alt="Sketch" />{" "}
                  {/*Sketch logo and link*/}
                </a>
              </div>

              <div className="Sponsor-bottom">
                <a href="https://balsamiq.com/">
                  <img className="balsamiq" src={balsamiq} alt="Balsamiq" />
                </a>
              </div>

              <div className="Sponsor-bottom">
                <a href="https://www.jetbrains.com/">
                  <img className="jetbrains" src={jetbrains} alt="Jetbrains" />
                </a>
              </div>
            </div>
            <div className="Sponsor-mlh">
              <a href="https://mlh.io/">
                <img className="mlh" src={mlh} alt="Major League Hacking" />
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Sponsors;
