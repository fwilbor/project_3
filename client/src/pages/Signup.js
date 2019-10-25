import React, { Component } from "react";
import "../assets/css/material-kit.min.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "../firebase";
import axios from "axios";
import SignupForm from "../components/Form/SignupForm";
import SigninForm from "../components/Form/SigninForm";
import NavBar from "../components/NavBar";
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
      <>
      <NavBar/>
      <div className="page-header header-filter">
        <div className="container">
          <div className="row">
            <h2>We're glad you're here. </h2>
            </div>
            <div className="row">
              {(!this.state.isLoggingIn && !this.state.isSigningUp) &&
                <div className="options">
                  <h3>Choose an option:</h3>
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
            <div className="row">
            {/* {(this.state.isLoggingIn || this.state.isSigningUp) &&
              <button className="btn btn-gray m-auto" onClick={() => {this.setState({isLoggingIn: false, isSigningUp: false})}}>
                Go Back
              </button>
            } */}
            {this.state.isLoggingIn &&
              <button className="btn btn-white m-auto" onClick={() => {this.setState({isLoggingIn: false, isSigningUp: true})}}>
                Or Create an Account
              </button>
            }{this.state.isSigningUp &&
              <button className="btn btn-white m-auto" onClick={() => {this.setState({isLoggingIn: true, isSigningUp: false})}}>
                Or Sign In
              </button>
            }
            </div>
        </div>
      </div>
      </>
    );
  }
}

export default SignUp;
