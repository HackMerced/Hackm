import React from 'react'
import { Switch, Route } from 'react-router-dom' //adds Switch and Route libraries to this file
import Login from './mainLogin/login.jsx' //links Login page
import Admin from './adminDash/admin.jsx' //links Admin Dashboard
import App from './applicantDash/applicant.jsx' //Links Applicants Dashboard
import Judge from './judgingDash/judging.jsx' //Links Judges Dashboard
import Vol from './volDash/volDash.jsx' //Links Volunteers Dashboard

const LoginRoute = () => {
    return (
        <Switch>
            <Route exact path = '/login' component = {Login}/>   {/* Login route as default localhost:3000/login */}
            <Route exact path = '/login/app' component = {App}/>  {/* Applicants dash route as localhost:3000/login/app */}
            <Route exact path = '/login/vol' component = {Vol}/>  {/* Volunteers dash route as localhost:3000/login/vol */}
            <Route exact path = '/login/judge' component = {Judge}/>   {/* Judging dash route as localhost:3000/login/judge */}
            <Route exact path = '/login/admin' component = {Admin}/>  {/* Admin dash route as localhost:3000/login/admin */}
        </Switch>
    );
}
export default LoginRoute;