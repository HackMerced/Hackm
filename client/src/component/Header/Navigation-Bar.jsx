import React,{Component} from 'react';
//here's my comment *thumbs up
class NavigaionBar extends React.Component {
    render() {
        return(
            <div className="App-navigation-bar" id="Navigation-Bar">
                <div className="nav-container">
                    <a href = "/" target="_blank">HACKMERCED</a>
                        <i className="HackMerced icon"></i>{/*HackMerced icon*/}

                    <a href = "event-page" target="_blank">EVENT</a>

                    <a href = "tracks-page" target="_blank">TRACKS</a>

                    <a href = "schedule-page" target="_blank">SCHEDULE</a>

                    <a href = "faq-page" target="_blank">FAQ</a>

                    <a href = "signup" target="_blank">REGISTRATION</a>

                    <a href = "login" target="_blank">TEAM</a>
                        
                    <a href = "sponsors-page" target="_blank">SPONSORS</a>

                </div>
            </div>
        )
    }
}

export default NavigaionBar;