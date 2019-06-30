import React from 'react';
import './login.css';
import { Link } from 'react-router-dom' //Links Library from React Router

class Login extends React.Component { 
	render() {
	  return (
	  	<div className="App-login">   {/* This code basically puts "This is the login screen" in big words*/}
		  	<section className="container">			 {/* Along with tester links at the bottom to each respective dash */}
			  	<article className="login">
			  		<h1>This is the login screen</h1>   {/* Big words of "this is the login screen" in middle of page */}
			  	</article>
			  	<nav className = "link">
			  		<Link to = '/applicant'>Applicant</Link>   {/* React Router link to Applicants Dash */}
			  	</nav>
			  	<nav className = "link">
			  		<Link to = '/volunteer'>Volunteer</Link>   {/* React Router link to Volunteers Dash */}
			  	</nav>
			  	<nav className = "link">
			  		<Link to = '/judge'>Judge</Link> 	   {/* React Router link to Judges Dash */}
			  	</nav>
			  	<nav className = "link">
			  		<Link to = '/admin'>Admin</Link>	   {/* React Router link to Admins Dash */}
			  	</nav>
		  	</section>
	  	</div>
	  );
	}
}
export default Login;