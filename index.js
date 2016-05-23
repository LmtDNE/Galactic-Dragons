import React, { Component } from 'react'
import { render } from 'react-dom'
import Test from './public/Components/test'
import CreateAccountScreen from './public/Components/register'
import Profile from './public/Components/profile'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

const Home = React.createClass({
  render() {
    return (
      <div>This component will have the landing page components nested in here!</div>
      );
  }})

const Register = React.createClass({
  render() {
    return (
      <div>
        <div>This component will have the registration page components nested in here!</div>
        <CreateAccountScreen />
      </div>
      );
  }})

const Login = React.createClass({
  render() {
    return (
      <div>
        <div>This component will have the Login page components nested in here!</div>
      </div>
      );
  }})

const ProfileUser = React.createClass({
  render() {
    return (
      <div>
        <Profile/>
      </div>
      );
  }})

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Galactic Dragons FTW!!!</h1>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="register" component={Register} />
      <Route path="login" component={Login} />
      <Route path="profile" component={Profile} />
    </Route>
  </Router>
), document.getElementById('app'))