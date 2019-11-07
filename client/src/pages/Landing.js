import React, { Component } from "react";
import "../App.css";
import "../assets/css/material-kit.min.css";
import NavBar from "../components/NavBar";
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "../firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

class Landing extends Component {
  componentDidMount() {
    this.checkIfSignedIn();
  }

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
        <div className="landing-page sidebar-collapse">
          <div className="page-header header-filter" data-parallax="true">
            <div className="container under-nav">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="title">J-BOT</h1>
                  <h3 className="subtitle ml-5">
                    <em>A Monitored - Online - Learning - Environment</em>
                  </h3>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="main main-raised">
            <div className="container">
              <div className="section text-center">
                <div className="row">
                  <div className="col-md-8 ml-auto mr-auto">
                    <h2 className="title">
                      J-BOT is a Safe, Fun, COPPA (Child Online Privacy
                      Protection Act) compliant Learning Application for kids
                      under the age of 12. Designed for parents to monitor their
                      child's online learning, J-BOT gives parents ease of mind
                      by tracking their time and progress online.
                    </h2>
                    <h5 className="description">
                      <p className="pull-left">JBot allows you to: </p>
                      <ul className="pull-left">
                        <li>
                          <p>
                            {" "}
                            Supervise, manage, and protect your child’s learning
                            in a Monitored Online Learning Environment (M.O.L.E)
                          </p>
                          <p>
                            J-BOT has a flexible screen time management tool
                            that makes it easy for parents to keep time spent
                            online structured and monitored.
                          </p>
                        </li>
                        {/*<li>
                          <p>Set limits.</p>
                          <p>
                            J-BOT lets you turn off data access for a
                            specific game once it has hit a specified limit.
                          </p>
                        </li>*/}
                        <li>
                          <p>
                            Meaningful, up-to-date tracking on your child's
                            progress.
                          </p>
                          <p>
                            Stay connected with your child’s progress with
                            J-BOT's real time up to date progress reports in
                            your Parental Dashboard. See progress improvements,
                            skill completions, and time logged in all in one
                            place.
                          </p>
                        </li>
                      </ul>
                    </h5>
                  </div>
                </div>
                <div className="features">
                  <div className="row">
                    {/* <div className="col-md-4"> */}
                    {/* Centered this feature until we add additional features */}
                    <div className="col">
                      <div className="info">
                        <div className="icon icon-success">
                          <i className="material-icons">verified_user</i>
                        </div>
                        <h4 className="info-title">Verified Users</h4>
                        <p></p>
                      </div>
                    </div>
                    {/* TODO: Update the features section!!! */}
                    {/* <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="material-icons">chat</i>
                    </div>
                    <h4 className="info-title">Free Chat</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div> */}
                    {/* <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="material-icons">fingerprint</i>
                    </div>
                    <h4 className="info-title">Fingerprint</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Landing;
