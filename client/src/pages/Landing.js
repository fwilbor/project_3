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

  componentDidUpdate() {
    console.log(this.state.user);
  }

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
        <div className="landing-page sidebar-collapse">
          <div className="page-header header-filter" data-parallax="true">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="title">JBot</h1>
                  <h3 className="subtitle ml-5">
                    <em>A monitored educational gaming experience</em>
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
                      Once you’ve talked to your kids about expectations, it’s
                      time to put some safeguards in place to help prevent
                      overages before they occur.
                    </h2>
                    <h5 className="description">
                      <p className="pull-left">JBot allows you to: </p>
                      <ul className="pull-left">
                        <li>
                          <p> Set up notifications for data usage.</p>
                          <p>
                            Some plans let you set a notification for when
                            you’re approaching your data limit but still have
                            enough data left for basic use. If you can do this
                            on a per person basis, even better. It’s a good
                            reminder to your child to be more mindful about his
                            or her mobile use.
                          </p>
                        </li>
                        <li>
                          <p>Set limits.</p>
                          <p>
                            Some J-Bot plans let you turn off data access for a
                            specific line once it has hit a specified limit.
                            This option prevents the rest of the family from
                            being penalized for someone else’s usage.
                          </p>
                        </li>
                        <li>
                          <p>See how your child’s data is being used.</p>
                          <p>
                            You can see how your child is spending his or her
                            time on the internet, such as browsing the web or
                            streaming videos. This information can help you
                            discuss safe internet usage with your child.
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
