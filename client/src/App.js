import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
