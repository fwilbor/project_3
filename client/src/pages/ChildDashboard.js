import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import axios from "axios";
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "../firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

class ChildDashboard extends Component {
  state = {
    user: ""
  };

  componentDidMount() {
    this.checkIfSignedIn();
  }

  componentDidUpdate() {
    console.log(this.state.user);
  }

  checkIfSignedIn = () => {
    auth.onAuthStateChanged(fbUser => {
      fbUser
        ? this.getUserInfo(fbUser.email)
        : this.props.history.push("/sign-up");
    });
  };

  getUserInfo(userEmail) {
    axios
      .get("/api/user/email/" + userEmail)
      .then(res => {
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="features-3 mt-2">
          <div className="row">
            <div className="col-md-4">
              <div className="phone-container">
                <div>Placeholder Image</div>
                <img src="./assets/img/sections/iphone.png" alt="placeholder" />
                {/* <img src={require('../assets/img/JBOT4.jpg')} alt="placeholder" /> */}
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <h3 className="child-header">Pick A Game!</h3>
                <div className="bd-example">
                  <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to="2"
                      ></li>
                      <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to="3"
                      ></li>
                    </ol>
                    <div className="carousel-inner">
                      <Link
                        to={`${this.state.user._id}/mathQuiz`}
                        className="carousel-item active high-contrast"
                      >
                        <img
                          src={require('../assets/img/mathGame.jpg')}
                          className="carouselImg"
                          alt="game"
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Math Game</h5>
                          <p>Are you an arithmetic boss?</p>
                        </div>
                      </Link>
                      <Link 
                        to={`${this.state.user._id}/addQuiz`}
                        className="carousel-item ">
                        <img
                          src="../assets/img/bg0.jpg"
                          className="carouselImg"
                          alt="game"
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Add-tastic!</h5>
                          <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                          </p>
                        </div>
                      </Link>
                      <div className="carousel-item">
                        <img
                          src="../assets/img/dg2.jpg"
                          className="carouselImg"
                          alt="game"
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Second slide label</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          src="../assets/img/dg6.jpg"
                          className="carouselImg"
                          alt="game"
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Third slide label</h5>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                          </p>
                        </div>
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleCaptions"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleCaptions"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="row">
                  <div className="info info-horizontal">
                    <div className="icon">
                      <i className="material-icons">poll</i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Stats</h4>
                      <p className="child-text">Check your gaming history and stats.</p>
                    </div>
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

export default ChildDashboard;
