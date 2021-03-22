import React, { Component } from 'react';
import Login from "./Login/login"
import Home from "./Home/home"
import Lost from "./LostArticle/lost"
import Task from "./Task/task"
import Me from "./Me/me"
import { HashRouter as Router, Route } from "react-router-dom";
import { createHashHistory } from "history";

const myHistory = createHashHistory();
export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Router history={myHistory}>

          <Route exact={true} path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/Task' component={Task} />
          <Route path='/Lost' component={Lost} />
          <Route path='/Me' component={Me} />
          
        </Router>
      </>
     
     
    )
  }
}

