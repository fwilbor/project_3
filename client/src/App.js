import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "./firebase";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";


firebase.initializeApp(config);


class App extends Component {
  state = {
    user: ""
  };

  componentDidMount() {
    const auth = firebase.auth();

    // const promise = auth.createUserWithEmailAndPassword(
    //   "tcutlip08@gmail.com",
    //   "wizkik101"
    // );

    // promise
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(e => {
    //     console.log(e.message);
    //   });

    auth.onAuthStateChanged(function(fbUser) {
      if (fbUser) {
        console.log(fbUser.email);
      }
    });
  }
  render() {
    return (
      <Router>
        <>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
