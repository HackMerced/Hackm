import React from 'react';
//here's my comment *thumbs up
function NavigaionBar() {
    return(
        <div className="App-navigation-bar" id="Navigation-Bar">
            <div className="nav-container">
                <a href = "home-page" target="_blank">HACKMERCED</a>
                    <i className="HackMerced icon"></i>{/*HackMerced icon*/}

                <a href = "event-page" target="_blank">EVENT</a>

                <a href = "tracks-page" target="_blank">TRACKS</a>

                <a href = "schedule-page" target="_blank">SCHEDULE</a>

                <a href = "faq-page" target="_blank">FAQ</a>

                <a href = "registration-page" target="_blank">REGISTRATION</a>

                <a href = "team-page" target="_blank">TEAM</a>
                    
                <a href = "sponsors-page" target="_blank">SPONSORS</a>

            </div>
        </div>
    )
}

export default NavigaionBar;