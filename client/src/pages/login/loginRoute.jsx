import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './login/login.jsx'
import Admin from './adminDash/admin.jsx'
import App from './applicantDash/applicant.jsx'
import Judge from './judgingDash/judging.jsx'
import Vol from './volDash/volDash.jsx'

function LoginRoute() {
    return (
        <Switch>
            <Route exact path = '/login' component = {Login}/>
            <Route exact path = '/login/app' component = {App}/>
            <Route exact path = '/login/vol' component = {Vol}/>
            <Route exact path = '/login/judge' component = {Judge}/>
            <Route exact path = '/login/admin' component = {Admin}/>
        </Switch>
    );
}
export default LoginRoute;
