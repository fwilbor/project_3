import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import COPPA from "./pages/COPPA";
import ParentDashboard from "./pages/ParentDashboard";
import MathGame from "./pages/MathGame/src/MathGame";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/mathGame" component={MathGame} />
        <Route exact path="/COPPA" component={COPPA} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/parent" component={ParentDashboard} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
