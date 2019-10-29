import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/material-kit.min.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "../firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

class NavBar extends Component {
  state = {
    isSignedIn: false
  };

  componentDidMount() {
    this.checkIfSignedIn();
  }

  checkIfSignedIn = () => {
    auth.onAuthStateChanged(fbUser => {
      fbUser
        ? this.setState({ isSignedIn: true })
        : this.setState({ isSignedIn: false });
    });
  };

  signOut = () => {
    console.log("sign out");
    firebase.auth().signOut();
  };
  render() {
    return (
      <nav
        className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg "
        color-on-scroll="100"
        id="sectionsNav"
      >
        <div className="container">
          <div className="navbar-translate">
            <Link className="navbar-brand" to="/">
              <b>JBOT</b>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="dropdown nav-item">
                <Link
                  to="/"
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <i className="material-icons">apps</i> About
                </Link>
                <div className="dropdown-menu dropdown-with-icons">
                  <Link to="/about/philosophy" className="dropdown-item">
                    <i className="material-icons">emoji_objects</i> Our
                    Philosophy
                  </Link>
                  <Link to="/COPPA" className="dropdown-item">
                    <i className="material-icons">content_paste</i> COPPA
                    Documentation
                  </Link>
                  <Link to="/about/us" className="dropdown-item">
                    <i className="material-icons">group</i> About Us
                  </Link>
                </div>
              </li>

              <li className="dropdown nav-item">
                <Link
                  to="/"
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <i className="material-icons">view_day</i> Parents
                </Link>
                <div className="dropdown-menu dropdown-with-icons">
                  <Link to="/parent" className="dropdown-item">
                    <i className="material-icons">dns</i> Parent Dashboard
                  </Link>
                </div>
              </li>
              <li className="dropdown nav-item">
                <Link
                  to="/"
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <i className="material-icons">view_day</i> Kids
                </Link>
                <div className="dropdown-menu dropdown-with-icons">
                  <Link to="/child" className="dropdown-item">
                    <i className="material-icons">dns</i> Kids Dashboard
                  </Link>
                </div>
              </li>

              <li className="button-container nav-item iframe-extern">
                {this.state.isSignedIn ? (
                  <Link
                    className="btn btn-gray btn-round btn-block"
                    to="/"
                    onClick={this.signOut}
                  >
                    Sign Out{" "}
                  </Link>
                ) : (
                  <Link
                    className="btn btn-rose btn-round btn-block"
                    to="/sign-up"
                  >
                    Sign Up/Sign In
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
