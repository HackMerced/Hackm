import React from 'react';
import './login.css';
import { Link } from 'react-router-dom' //Links Library from React Router

function Login() {
  return (
  	<div className="App-login" id="Login">   {/* This code basically puts "This is the login screen" in big words*/}
	  	<div className="container">			 {/* Along with tester links at the bottom to each respective dash */}
		  	<div className="login">
		  	<h1>This is the login screen</h1>   {/* Big words of "this is the login screen" in middle of page */}
		  	</div>
		  	<div className = "links">
		  	<span>
		  		<Link to = '/login/app'>Applicant</Link>   {/* React Router link to Applicants Dash */}
		  		<a>&nbsp;&nbsp;</a>
		  		<Link to = '/login/vol'>Volunteer</Link>   {/* React Router link to Volunteers Dash */}
		  		<a>&nbsp;&nbsp;</a>
		  		<Link to = '/login/judge'>Judge</Link> 	   {/* React Router link to Judges Dash */}
		  		<a>&nbsp;&nbsp;</a>
		  		<Link to = '/login/admin'>Admin</Link>	   {/* React Router link to Admins Dash */}
		  	</span>
		  	</div>
	  	</div>
  	</div>
  );
}
export default Login;


