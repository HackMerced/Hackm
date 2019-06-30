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
		  	</section>
	  	</div>
	  );
	}
}

export default Login;