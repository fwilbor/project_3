import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../assets/css/material-kit.min.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "../firebase";
import axios from "axios";
import SignupForm from "../components/Form/SignupForm";
import SigninForm from "../components/Form/SigninForm";
import NavBar from "../components/NavBar";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    isSigningUp: false,
    isLoggingIn: false,
    canSubmit: false
  };

  componentDidMount() {
    this.checkIfSignedIn();
  }

  optionSelect = option => {
    if (option === "signUp") {
      this.setState({ isSigningUp: true, isLoggingIn: false });
    } else {
      this.setState({
        isLoggingIn: true,
        isSigningUp: false
      });
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleInputSignUp = event => {
    event.preventDefault();
    console.log("sign up");

    if(!this.state.email || !this.state.password){
      alert(`You must enter a valid email and password`);
    } else {
        this.setState({canSubmit: true});

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
      }
  };

  handleInputSignIn = event => {
    event.preventDefault();
    console.log("sign in");

    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(result => {
        console.log("Successfully Logged In");
      })
      .catch(e => {
        console.log(e.message);
      });
  };

  checkIfSignedIn = () => {
    auth.onAuthStateChanged(fbUser => {
      fbUser
        ? this.props.history.push("/child")
        : console.log("You are not signed in");
    });
  };

  render() {
    return (
      <>
        <NavBar />
        <div className="page-header header-filter">
          <div className="container">
            <div className="row">
              <h3>We're glad you're here. Choose an option:</h3>
            </div>
            <div className="row">
              {!this.state.isLoggingIn && !this.state.isSigningUp && (
                <div className="options">
                  <button
                    className="btn btn-link"
                    onClick={() => this.optionSelect("signUp")}
                  >
                    Sign Up
                  </button>
                  <span> Or </span>
                  <button
                    className="btn btn-link"
                    onClick={() => this.optionSelect("signIn")}
                  >
                    Sign In 
                  </button>
                </div>
              )}
            </div>
            <div className="row">
              {this.state.isSigningUp && (
                <SignupForm
                  handleInputSignUp={this.handleInputSignUp}
                  handleInputChange={this.handleInputChange}
                  canSubmit={this.state.canSubmit}
                />
              )}
              {this.state.isLoggingIn && (
                <SigninForm
                  handleInputSignIn={this.handleInputSignIn}
                  handleInputChange={this.handleInputChange}
                />
              )}
            </div>
            <div className="row">
              {this.state.isLoggingIn && (
                <button
                  className="btn btn-gray m-auto"
                  onClick={() => {
                    this.setState({ isLoggingIn: false, isSigningUp: true });
                  }}
                >
                  Or Sign Up
                </button>
              )}
              {this.state.isSigningUp && (
                <button
                  className="btn btn-gray m-auto"
                  onClick={() => {
                    this.setState({ isLoggingIn: true, isSigningUp: false });
                  }}
                >
                  Or Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
