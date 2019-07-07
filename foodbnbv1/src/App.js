import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Jobpost from "./pages/chef/jobpost";
import Orders from "./pages/chef/orders";
import Profile from "./pages/chef/profile";
import SignUp from "./pages/chef/signup"
import Search from "./pages/customer/search";
import Status from "./pages/customer/status";
import SignIn from "./pages/landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/chef/jobpost" component={Jobpost} />
        <Route exact path="/chef/orders" component={Orders} />
        <Route exact path="/chef/profile" component={Profile} />
        <Route exact path="/chef/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={Search} />
        <Route exact path="/customer/status" component={Status} />
      </Switch>
    </Router>
  );
}

export default App;
