import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/home/home.jsx'
import SignUp from '../pages/signUp/signUp.jsx'
import loginRoute from '../pages/login/loginRoute.jsx'

function Main() {
  return (
      <main>
        <Switch>
            <Route exact path = '/' component = {Home}/>
            <Route path = '/signUp' component = {SignUp}/>
            <Route path = '/login' component = {loginRoute}/>
        </Switch>
      </main>
      );
}

export default Main;
