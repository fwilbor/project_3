import React, { Component } from "react";
import "../App.css";
import "../assets/css/material-kit.min.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "../firebase";
import Link from "react-router-dom/Link";
import SignupModal from "../components/Modals/SignupModal";
import axios from "axios";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

class ChooseExperience extends Component {
  state = {
    openModal: false,
    user: "",
    additionalPW: false,
    guardian: ""
  };

  componentDidMount() {
    this.checkIfSignedIn();
  }

  componentDidUpdate() {}

  checkIfSignedIn = () => {
    auth.onAuthStateChanged(fbUser => {
      fbUser
        ? this.getUserInfo(fbUser.email)
        : this.props.history.push("/sign-in");
    });
  };

  getUserInfo(userEmail) {
    axios
      .get("/api/user/email/" + userEmail)
      .then(res => {
        this.setState({ user: res.data });
      })
      .catch(err => {
        // console.log(err);
      });
  }

  openModal = () => {
    this.setState({ additionalPW: !this.state.additionalPW });
    this.setState({ openModal: !this.state.openModal });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

    // console.log(name + ": " + value);
  };

  handleInputSignIn = event => {
    event.preventDefault();
    if (this.state.user.guardian === this.state.guardian) {
      this.props.history.push("/parent");
    } else {
      // User input wrong guardian password
      // console.log("None shall PAASSSSS!!!");
      setTimeout(() => {
        this.openModal();
      }, 1000);
    }
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
              <div className="col-md-6 col-1of2">
                <div className="col-inner">
                  {/* <Link to="/parent">
                            <button type="button" className="btn btn-outline-white">
                                I am a parent
                            </button>
                            </Link> */}
                  <button
                    type="button"
                    className="btn btn-outline-white"
                    onClick={this.openModal}
                  >
                    I am a parent
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-2of2">
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
        {this.state.additionalPW && (
          <SignupModal
            title="Additional Info Needed"
            message="Please enter your guardian password."
            fx={this.openModal}
            input={!this.additionalPW}
            handleInputChange={this.handleInputChange}
            btnText="Enter"
            submit={this.handleInputSignIn}
          />
        )}
      </>
    );
  }
}

export default ChooseExperience;
