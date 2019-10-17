
/*
</body>

function changingImg(){
    document.getElementbyId("y").src="./images/test2.png"
}
*/

import React from 'react';
//import './banner.css'
//import banner from './banner.png';

class DayBanner extends React.Component {
    render() {
        return(
            <article className="App-banner">
             <h1> i</h1>
                {/*
              <a id="mlh-trust-badge" 
                 style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000" 
                 href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=white" 
                 target="_blank">
                   */}  
                     <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-white.svg" 
                          alt="Major League Hacking 2020 Hackathon Season"
                          ></img>          
            </article>
        )
    }
}

export default DayBanner;