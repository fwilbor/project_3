import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
import ParentDashboard from "./pages/ParentDashboard";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/sign-up" component={Signup} />
          <Route exact path="/parent" component={ParentDashboard}/>
          <Route exact path="/" component={Landing} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
