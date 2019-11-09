import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import COPPA from "./pages/COPPA";
import ParentDashboard from "./pages/ParentDashboard";
import ChildDashboard from "./pages/ChildDashboard";
import MathQuiz from "./components/Games/MathQuiz/MathQuiz";
import AddQuiz from "./components/Games/AddQuiz/AddQuiz";
import SubQuiz from "./components/Games/SubtractQuiz/SubtractQuiz";
import MultiQuiz from "./components/Games/MultiplyQuiz/MultiplyQuiz";
import DivQuiz from "./components/Games/DivideQuiz/DivideQuiz";
import About from "./components/Menu/About";
import Timer from "./components/Timer/Timer";
import Philosophy from "./components/Menu/Philosophy";
import ProgressCharts from "./components/Charts/ProgressCharts";
import KidsProgressCharts from "./components/Charts/KidsProgressCharts";
import ChooseExperience from "./pages/ChooseExperience";
import Error404 from "./pages/NoMatch";
import GameInfo from "./components/Menu/GameInfo";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/COPPA" component={COPPA} />
        <Route path="/(sign-up|sign-in)" component={SignUp} />
        <Route exact path="/choose-experience" component={ChooseExperience} />
        <Route exact path="/parent/:id" component={ProgressCharts} />
        <Route exact path="/parent" component={ParentDashboard} />
        <Route exact path="/child/:id" component={KidsProgressCharts} />
        <Route exact path="/child" component={ChildDashboard} />
        <Route exact path="/about/us" component={About} />
        <Route exact path="/about/philosophy" component={Philosophy} />
        <Route exact path="/about/game-info" component={GameInfo} />
        <Route exact path="/:id/mathQuiz" component={MathQuiz} />
        <Route exact path="/:id/addQuiz" component={AddQuiz} />
        <Route exact path="/:id/subQuiz" component={SubQuiz} />
        <Route exact path="/:id/multiQuiz" component={MultiQuiz} />
        <Route exact path="/:id/divQuiz" component={DivQuiz} />
        <Route exact path="/test/timer" component={Timer} />
        <Route exact path="/" component={Landing} />
        <Route exact path="*" component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
