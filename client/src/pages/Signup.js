import React, { Component } from "react";
import "../assets/css/material-kit.min.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "../firebase";
import axios from "axios";
import SignupForm from "../components/Form/SignupForm";
import SigninForm from "../components/Form/SigninForm";
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
    password: "",
    isSigningUp: false,
    isLoggingIn: false
  };

  componentDidMount() {
    this.checkIfSignedIn();
  }

  optionSelect = (option) => {
    if(option === "signUp"){
      this.setState(
        {isSigningUp: true,
        isLoggingIn: false});
    }else{
      this.setState({
        isLoggingIn: true,
      isSigningUp: false});
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleInputSubmit = event => {
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

  checkIfSignedIn = () => {
    auth.onAuthStateChanged(function(fbUser) {
      if (fbUser) {
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
            <h3>We're glad you're here. Choose an option:</h3>
            </div>
            <div className="row">
              {(!this.state.isLoggingIn && !this.state.isSigningUp) &&
                <div className="options">
                  <button className="btn btn-link" onClick={() => this.optionSelect('signUp')}>
                    Sign Up
                  </button>
                  <span> Or </span>
                <button className="btn btn-link" onClick={() => this.optionSelect('signIn')}>
                    Sign In
                  </button>
                </div>
              }
          </div>
          <div className="row">
            {this.state.isSigningUp && 
              <SignupForm/>
            }
            {this.state.isLoggingIn && 
              <SigninForm/>
            }
            </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
