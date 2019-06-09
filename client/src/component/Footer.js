import React from 'react';

function Footer() {
  return (
  	<div className="App-footer" id="Footer">
	  	<div className="container">
		  	<div className="social">
			  	<a href="mailto:general@hackmerced.com?subject=HackMerced Questions&amp;body=Dear HackMerced,">
			  		<i className="fa fa-envelope"></i>
			  	</a>
			  	<a href="https://www.facebook.com/hackmerced/" target="_blank" rel="noopener noreferrer">
			  		<i className="fa fa-facebook-square"></i>
			  	</a>
			  	<a href="https://www.instagram.com/hackmerced/">
			  		<i className="fa fa-instagram"></i>
			  	</a>
			  	<a href="https://slack.com">
			  		<i className="fa fa-slack"></i>
			  	</a>
			  	<a href="https://github.com/HackMerced">
			  		<i className="fa fa-github"></i>
			  	</a>
			  	<a href="https://devpost.com">
			  		<i className="fa fa-code"></i>
			  	</a>
		  	</div>
		  	<div className="credits"> <span className="copyright">© 2020 HackMerced. All Rights Reserved.</span></div>
	  	</div>
  	</div>
  );
}

export default Footer;

