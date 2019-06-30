import React from 'react';
import { Link } from 'react-router-dom' //Links Library from React Router
import './navBar.css'
import logo from './logo.png';
/* This Nav bar is super rough its not nearly as close to the draft sketched by the design team */


class NavigationBar extends React.Component {
    render() {
        return(
            <article className="App-nav" id="Navigation-Bar">
                <nav className = "nav-link">
                    <a href = "/">
                        <img class="HackMerced-logo" src={logo} title= "HackMerced" alt="Hack Merced"/> {/* HackMerced icon goes to home page */}
                    </a>
                </nav>
                <nav className = "nav-link">
                    <Link className= "style-link" to='/event' title= "Events Page">Events</Link> {/* React Router link to Events on home page */}
                </nav>
                <nav className = "nav-link">
                    <Link className= "style-link" to='/#tracks' title= "Tracks">Tracks</Link> {/* I have no idea what "Tracks" is supposed to be */}
                </nav>
                <nav className = "nav-link">
                    <Link className= "style-link" to='/#schedule' title= "HackMerced Schedule">Schedule</Link> {/* RR link to Our Hackathon Schedule of home page */}
                </nav>
                    <nav className = "nav-link">
                    <Link className= "style-link" to='/#faq' title= "Frequently Asked Questions">FAQ</Link> {/* RR link to FAQ of home page */}
                </nav>
                <nav className = "nav-link">
                    <Link className= "style-link" to='/signup' title= "Join Us!">Registration</Link> {/* RR Link to Registration */}
                </nav>
                <nav className = "nav-link">
                    <Link className= "style-link" to='/login' title= "Team Dashboard">Team</Link> {/* RR link to login page */}
                </nav>
                <nav className = "nav-link">  
                    <Link className= "style-link" to='/#sponsors' title= "Our Sponsors <3">Sponsors</Link> {/* RR link to sponsers section of home page */}
                </nav>
            </article>
        )
    }
}

export default NavigationBar;