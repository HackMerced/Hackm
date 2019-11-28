import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCode} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faGithub, faSlack} from '@fortawesome/free-brands-svg-icons';
import './footer.css'

const Footer = () => {
  return (
  	<article className="App-footer" id="Footer"> 
	  	<section className="Footer-container"> {/* container with social icon and ownership */}
		  	<nav className="Footer-social"> {/* social icon section */}
			  	<a href="mailto:general@hackmerced.com?subject=HackMerced Questions&amp;body=Dear HackMerced," style={{ color: '#0000' }}> {/* mail to hackmerced email */}
			  		<FontAwesomeIcon icon={faEnvelope} className="fa"/> {/* email icon */}
			  	</a>
			  	<a href="https://www.facebook.com/hackmerced/" target="_blank" rel="noopener noreferrer" style={{ color: '#0000' }}> {/* goes to HackMerced fb */}
					<FontAwesomeIcon icon={faFacebook} className="fa"/> {/* fb icon */}
			  	</a>
			  	<a href="https://www.instagram.com/hackmerced/" style={{ color: '#0000' }}> {/* goes to HackMerced IG*/}
			  		<FontAwesomeIcon icon={faInstagram} className="fa"/> {/* instagram icon */}
			  	</a>
			  	<a href="https://www.google.com" style={{ color: '#0000' }}> {/* we haven't created a HackMerced Slack so this is temporary */}
			  		<FontAwesomeIcon icon={faSlack} className="fa"/> {/* slack icon */}
			  	</a>
			  	<a href="https://github.com/HackMerced" style={{ color: '#0000' }}> {/* link to HackMerced github repo since we are opensource */}
			  		<FontAwesomeIcon icon={faGithub} className="fa"/>
			  	</a>
			  	<a href="https://devpost.com/hackathons?utf8=%E2%9C%93&search=HackMerced&challenge_type=all&sort_by=Recently+Added" style={{ color: '#0000' }}> {/* we don't have a HackMerced V devpost link up yet so this is temporary */}
			  		<FontAwesomeIcon icon={faCode} className="fa"/> {/* Font Awesome didn't have a DevPost icon so this is closest thing */}
			  	</a>
		  	</nav>
		  	</section>
		  	<section className="credits"> <span className="copyright">© 2020 HackMerced. All Rights Reserved.</span></section> {/* Copyright for HackMerced */}
  	</article>
  );
}
export default Footer;
