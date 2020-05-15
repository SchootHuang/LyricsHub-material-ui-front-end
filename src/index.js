import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import HomePage from "views/HomePage/HomePage.js";
import SingerPage from "views/SingerPage/SingerPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/component-page" component={Components} />
      <Route path="/singer-page" component={SingerPage} /> 
      <Route path="/game-page" component={GamePage} /> 

      {/* <Route path="/home-page" component={HomePage} /> */}

      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
