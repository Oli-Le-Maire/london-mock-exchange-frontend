import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./Home"
import Dashboard from "./Dashboard"

export default class App extends Component {
constructor() {
  super();

  this.state = {
    loggedInStatus: 'NOT_LOGGED_IN',
    user: {}
  }
  this.handleLogin = this.handleLogin.bind(this);
}

  handleLogin(data) {
    this.setState({
      loggedInStatus: "Logged in",
      user: data
    })
  }

render() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={"/"}
            render={props => (
              <Home
                {...props}
                handleLogin={this.handleLogin}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />
          <Route
            exact
            path={"/dashboard"}
            render={props => (
              <Dashboard
                {...props}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}


