import React, { Component } from "react";
import "../App.css";
import "../assets/css/material-kit.min.css";
// import NavBar from "../components/NavBar";
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "../firebase";
import Link from "react-router-dom/Link";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

class ChooseExperience extends Component {
  componentDidMount() {
    this.checkIfSignedIn();
  }

  checkIfSignedIn = () => {
    auth.onAuthStateChanged(fbUser => {
      fbUser
        ? console.log("You are signed in")
        : this.props.history.push("/sign-in");
    });
  };
  render() {
    return (
      <>
        <div className="experience-page sidebar-collapse">
          <div className="page-header header-filter" data-parallax="true">
            <div className="container">
              <div className="row">
                <div className="col m-auto center">
                  <h1 className="title">Choose Your Experience</h1>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="main main-raised">
            <div className="row">
              <div className="col-lg-6 col-1of2">
                <div className="col-inner">
                  <Link to="/parent">
                    <button type="button" className="btn btn-outline-white">
                      I am a parent
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-2of2">
                <div className="col-inner">
                  <Link to="/child">
                    <button type="button" className="btn btn-outline-white">
                      I am a child
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ChooseExperience;
