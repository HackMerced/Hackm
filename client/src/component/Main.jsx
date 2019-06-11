import React from 'react'
import { Switch, Route } from 'react-router-dom' //Switch and Route Library
import Home from '../pages/home/home.jsx'
import SignUp from '../pages/signUp/signUp.jsx'	//link to Sign Up page
import loginRoute from '../pages/login/loginRoute.jsx' //link to Router for login

function Main() {
  return (
      <div>
        <Switch>   {/* Switch Statement through each route */}
            <Route exact path = '/' component = {Home}/>   {/* Home route as default destination */}
            <Route path = '/signUp' component = {SignUp}/>  {/* SignUp route as localhost:3000/signUp */}
            <Route path = '/login' component = {loginRoute}/>   {/* Login Router as localhost:3000/login */}
        </Switch>
      </div>
      );
}

export default Main; //rending Main webpage
