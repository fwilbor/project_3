import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import COPPA from "./pages/COPPA";
import ParentDashboard from "./pages/ParentDashboard";
import ChildDashboard from "./pages/ChildDashboard";
import MathQuiz from "./components/Games/MathQuiz/MathQuiz";
import About from "./components/Menu/About";
import Philosophy from "./components/Menu/Philosophy";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/COPPA" component={COPPA} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/parent" component={ParentDashboard} />
        <Route exact path="/child" component={ChildDashboard} />
        <Route exact path="/about/us" component={About} />
        <Route exact path="/about/philosophy" component={Philosophy} />
        <Route exact path="/:id/mathQuiz" component={MathQuiz} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
