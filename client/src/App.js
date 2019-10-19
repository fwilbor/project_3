import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";


function App() {
  return (
    <Router>
      <>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup}/>
        </Switch>
      </>
    </Router>
  );
}

export default App;
