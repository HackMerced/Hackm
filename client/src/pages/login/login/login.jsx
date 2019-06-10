import React from 'react';
import './login.css';
import { Link } from 'react-router-dom'

function Login() {
  return (
  	<div className="App-login" id="Login">
	  	<div className="container">
		  	<div className="login">
		  	<h1>This is the login screen</h1>
		  	</div>
		  	<div className = "links">
		  	<span>
		  		<Link to = '/login/app'>Applicant</Link>
		  		<a>&nbsp;&nbsp;</a>
		  		<Link to = '/login/vol'>Volunteer</Link>
		  		<a>&nbsp;&nbsp;</a>
		  		<Link to = '/login/judge'>Judge</Link>
		  		<a>&nbsp;&nbsp;</a>
		  		<Link to = '/login/admin'>Admin</Link>
		  	</span>
		  	</div>
	  	</div>
  	</div>
  );
}
export default Login;


