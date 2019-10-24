import React, { Component } from "react";
import "../assets/css/material-kit.min.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "../firebase";
import axios from "axios";
// import { BrowserHistory } from "react-history";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

class SignUp extends Component {
  state = {
    user: "",
    name: "",
    email: "",
    password: ""
  };

  componentDidMount() {
    this.checkIfSignedIn();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleInputSignUp = event => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(result => {
        axios
          .post("/api/user", this.state)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(e => {
        console.log(e.message);
      });
  };
  handleInputSignIn = event => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(result => {
        console.log(result);
      })
      .catch(e => {
        console.log(e.message);
      });
  };

  checkIfSignedIn = () => {
    auth.onAuthStateChanged(fbUser => {
      if (fbUser) {
        console.log(fbUser.email);
        // console.log(state);
        this.setState({ user: fbUser.email });
      } else {
        console.log("You are not signed in");
      }
    });
  };

  render() {
    return (
      <div className="page-header header-filter">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
              <h3>Create An Account</h3>
              <form className="form" method="" action="">
                <div className="card card-login card-hidden">
                  <div className="card-body ">
                    <span className="bmd-form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">face</i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name..."
                          name="name"
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </span>
                    <span className="bmd-form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">email</i>
                          </span>
                        </div>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email..."
                          name="email"
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </span>
                    <span className="bmd-form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">lock_outline</i>
                          </span>
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password..."
                          name="password"
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </span>
                  </div>
                  <div class="card-footer justify-content-center">
                    <a
                      href="/"
                      class="btn btn-rose btn-link btn-lg"
                      onClick={this.handleInputSignUp}
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </form>
            </div>

            {/* TODO: Switch to conditional display */}
            <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
              <h3>Sign In</h3>
              <form className="form" method="" action="">
                <div className="card card-login card-hidden">
                  <div className="card-body ">
                    <span className="bmd-form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">email</i>
                          </span>
                        </div>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email..."
                          name="email"
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </span>
                    <span className="bmd-form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">lock_outline</i>
                          </span>
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password..."
                          name="password"
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </span>
                  </div>
                  <div class="card-footer justify-content-center">
                    <a
                      href="/"
                      class="btn btn-rose btn-link btn-lg"
                      onClick={this.handleInputSignIn}
                    >
                      Sign In
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
