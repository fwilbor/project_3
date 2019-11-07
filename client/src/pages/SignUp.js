import React, { Component } from "react";
import "../assets/css/material-kit.min.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "../firebase";
import axios from "axios";
import SignupForm from "../components/Form/SignupForm";
import SigninForm from "../components/Form/SigninForm";
import NavBar from "../components/NavBar";
import SignupModal from "../components/Modals/SignupModal";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    guardian: "",
    isSigningUp: false,
    isLoggingIn: false,
    canSubmit: false,
    openModal: false,
    modalMsg: ""
  };
  componentDidMount() {
    this.checkIfSignedIn();
  }

  componentDidUpdate() {
    // console.log(this.state);
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

    if (this.state.email.length > 3 && this.state.password.length > 3) {
      this.setState({ canSubmit: true });
    } else {
      this.setState({ canSubmit: false });
    }
    // console.log(name + ": " + value);
  };
  handleInputSignUp = event => {
    event.preventDefault();
    // console.log("sign up");
    if (!this.state.email || !this.state.password) {
      // Just in case the first catch misses bad data
      this.setState({ openModal: true });
      this.setState({ modalMsg: "You must enter a valid email and password" });
    } else {
      this.setState({ canSubmit: true });
      auth
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(result => {
          axios
            .post("/api/user", this.state)
            .then(res => {
              // console.log(res);
            })
            .catch(err => {
              // console.log(err);
            });
        })
        .catch(e => {
          // console.log(e.message);
          this.setState({openModal: true});
          this.setState({modalMsg: e.message});
        });
    }
  };
  handleInputSignIn = event => {
    event.preventDefault();
    // console.log("sign in");
    if (!this.state.email || !this.state.password) {
      // Just in case the first catch misses bad data
      this.setState({ openModal: true });
      this.setState({ modalMsg: "You must enter a valid email and password" });
    } else {
      this.setState({ canSubmit: true });
      auth
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(result => {
          // console.log("Successfully Logged In");
        })
        .catch(e => {
          // console.log(e.message);
          this.setState({openModal: true});
          this.setState({modalMsg: e.message});
        });
    }
  };

  openErrorModal = () => {
    this.setState({ openModal: !this.state.openModal });
  };

  checkIfSignedIn = () => {
    auth.onAuthStateChanged(fbUser => {
      fbUser
        ? this.props.history.push("/choose-experience")
        : console.log("You are not signed in");
    });
  };
  render() {
    return (
      <>
        <NavBar />

        <div className="experience-page sidebar-collapse">
          <div className="page-header header-filter">
            <div className="container">
              <div className="row under-nav">
                <div className="col m-auto center">
                  <h1 className="title">We're glad you're here</h1>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="main main-raised">
            <div className="container">
              <div className="section text-center">
                <div className="container">
                  {!this.state.isLoggingIn && !this.state.isSigningUp && (
                    <>
                      <h2 className="title">Choose an option:</h2>
                      <div className="options">
                        <button
                          className="btn btn-link"
                          onClick={() => this.optionSelect("signUp")}
                        >
                          Sign Up
                        </button>
                        <div> Or </div>
                        <button
                          className="btn btn-link"
                          onClick={() => this.optionSelect("signIn")}
                        >
                          Sign In
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <div className="row">
                  {this.state.isSigningUp && (
                    <SignupForm
                      handleInputSignUp={this.handleInputSignUp}
                      handleInputChange={this.handleInputChange}
                      guardian={this.state.guardian}
                      canSubmit={this.state.canSubmit}
                    />
                  )}
                  {this.state.isLoggingIn && (
                    <SigninForm
                      handleInputSignIn={this.handleInputSignIn}
                      handleInputChange={this.handleInputChange}
                      canSubmit={this.state.canSubmit}
                    />
                  )}
                </div>
                <div className="row">
                  {this.state.isLoggingIn && (
                    <button
                      className="btn btn-gray m-auto"
                      onClick={() => {
                        this.setState({
                          isLoggingIn: false,
                          isSigningUp: true
                        });
                      }}
                    >
                      Or Sign Up
                    </button>
                  )}
                  {this.state.isSigningUp && (
                    <button
                      className="btn btn-gray m-auto"
                      onClick={() => {
                        this.setState({
                          isLoggingIn: true,
                          isSigningUp: false
                        });
                      }}
                    >
                      Or Sign In
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.openModal && (
        <SignupModal 
            title = "Uh Oh..."
            message = {this.state.modalMsg}
            fx = {this.openErrorModal}
            btnText = "Ok"
        />
        )}
      </>
    );
  }
}
export default SignUp;
