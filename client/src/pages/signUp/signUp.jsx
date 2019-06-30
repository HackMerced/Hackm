import React from 'react';
import './signUp.css';   {/* css for this file */}

class SignUp extends React.Component {
	render() {
	  return (
	  	<div className="App-sign-up">   {/* this code just puts the words "Sign Up" */}
		  	<section className="container">				 {/* in the middle of the page */}
			  	<article className="signup">
			  	<h1>Sign Up</h1>
			  	</article>
		  	</section>
	  	</div>
	  );
	}
}

export default SignUp;