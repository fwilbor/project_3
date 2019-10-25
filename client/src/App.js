import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import ParentDashboard from "./pages/ParentDashboard";
import ChildDashboard from "./pages/ChildDashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/parent" component={ParentDashboard} />
        <Route exact path="/child" component={ChildDashboard} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
