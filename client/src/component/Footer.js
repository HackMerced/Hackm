import React from 'react';

function Footer() {
  return (
  	<div className="App-footer" id="Footer"> 
	  	<div className="container"> {/* container with social icon and ownership */}
		  	<div className="social"> {/* social icon section */}
			  	<a href="mailto:general@hackmerced.com?subject=HackMerced Questions&amp;body=Dear HackMerced," style={{ color: '#0000' }}> {/* mail to hackmerced email */}
			  		<i className="fa fa-envelope"></i> {/* email icon */}
			  	</a>
			  	<a href="https://www.facebook.com/hackmerced/" target="_blank" rel="noopener noreferrer" style={{ color: '#0000' }}> {/* goes to HackMerced fb */}
			  		<i className="fa fa-facebook-square"></i> {/* fb icon */}
			  	</a>
			  	<a href="https://www.instagram.com/hackmerced/" style={{ color: '#0000' }}> {/* goes to HackMerced IG*/}
			  		<i className="fa fa-instagram"></i> {/* instagram icon */}
			  	</a>
			  	<a href="#" style={{ color: '#0000' }}> {/* we haven't created a HackMerced Slack so this is temporary */}
			  		<i className="fa fa-slack"></i> {/* slack icon */}
			  	</a>
			  	<a href="https://github.com/HackMerced" style={{ color: '#0000' }}> {/* link to HackMerced github repo since we are opensource */}
			  		<i className="fa fa-github"></i>
			  	</a>
			  	<a href="https://devpost.com/hackathons?utf8=%E2%9C%93&search=HackMerced&challenge_type=all&sort_by=Recently+Added" style={{ color: '#0000' }}> {/* we don't have a HackMerced V devpost link up yet so this is temporary */}
			  		<i className="fa fa-code"></i> {/* Font Awesome didn't have a DevPost icon so this is closest thing */}
			  	</a>
		  	</div>
		  	<div className="credits"> <span className="copyright">© 2020 HackMerced. All Rights Reserved.</span></div> {/* Copyright for HackMerced */}
	  	</div>
  	</div>
  );
}
// export the Footer
export default Footer;

