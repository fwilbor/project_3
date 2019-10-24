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
  signOut = () => {
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
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                {/* TODO: Update Icons and Links*/}
                <i className="material-icons">apps</i> About
              </a>
              <div className="dropdown-menu dropdown-with-icons">
                <a href="/" className="dropdown-item">
                  <i className="material-icons">layers</i> Our Philosophy
                </a>
                <a href="/" className="dropdown-item">
                  <i className="material-icons">line_style</i> About Us
                </a>
                <a href="/" className="dropdown-item">
                  <i className="material-icons">content_paste</i> COOPA
                  Documentation
                </a>
              </div>
            </li>

            <li className="dropdown nav-item">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                <i className="material-icons">view_day</i> Parents
              </a>
              <div className="dropdown-menu dropdown-with-icons">
                <Link to="./parent" className="dropdown-item">
                  <i className="material-icons">dns</i> Parent Dashboard
                </Link>
                <Link to="/" className="dropdown-item">
                  <i className="material-icons">dns</i> Sign Out
                </Link>
              </div>
            </li>
            <li className="dropdown nav-item">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                <i className="material-icons">view_day</i> Kids
              </a>
              <div className="dropdown-menu dropdown-with-icons">
                <a href="../sections.html#headers" className="dropdown-item">
                  <i className="material-icons">dns</i> Kids Dashboard
                </a>
              </div>
            </li>
            {/* TODO:Switch to conditional display */}
            <li className="button-container nav-item iframe-extern">
              <Link className="btn  btn-rose   btn-round btn-block" to="/signup">
                Sign Up/Sign In
              </Link>
            </li>
            <li className="button-container nav-item iframe-extern">
              <Link className="btn  btn-gray   btn-round btn-block" to="/signup">
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
