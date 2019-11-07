import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import axios from "axios";
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "../firebase";
// import MathQuiz from "../components/Games/MathQuiz/MathQuiz";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

class ChildDashboard extends Component {
  state = {
    user: "",
    game: ""
  };

  componentDidMount() {
    this.checkIfSignedIn();
  }

  componentDidUpdate() {
    this.checkIfSignedIn();
  }

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

  setGame = gameName => {
    this.setState({ game: gameName });
  };

  render() {
    const Game = this.state.game;
    return (
      <div className="child-dash">
        <NavBar />
        <div className="features-3 mt-2">
          <div className="container">
            <div className="row under-nav">
              <div className="col-md-4">
                <div className="mascot-container mt-5">
                  <img
                    src="./assets/img/sections/iphone.png"
                    alt="placeholder"
                  />
                  {/*<img src={require('../assets/img/JBOTPlaceHolder.png')} alt="mascot" /> */}
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
                        <li
                          data-target="#carouselExampleCaptions"
                          data-slide-to="4"
                        ></li>
                      </ol>
                      <div className="carousel-inner">
                        <Link
                          to={`${this.state.user._id}/mathQuiz`}
                          className="carousel-item active high-contrast"
                        >
                          <img
                            src={require("../assets/img/mathGame.jpg")}
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
                          className="carousel-item "
                        >
                          <img
                            src={require("../assets/img/643x0w-addition.jpg")}
                            className="carouselImg"
                            alt="game"
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>Add-tastic!</h5>
                            <p>It's time to add it all up!</p>
                          </div>
                        </Link>
                        <Link
                          to={`${this.state.user._id}/subQuiz`}
                          className="carousel-item"
                        >
                          <img
                            src={require("../assets/img/mathematics-sub.jpg")}
                            className="carouselImg"
                            alt="game"
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>Subtractify</h5>
                            <p>Subtractify for the next high score!</p>
                          </div>
                        </Link>
                        <Link
                          to={`${this.state.user._id}/multiQuiz`}
                          className="carousel-item"
                        >
                          <img
                            src={require("../assets/img/kids-multiplication-table-800x442.jpg")}
                            className="carouselImg"
                            alt="game"
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>Multiples of Fun</h5>
                            <p>Multiplicity of Multiples</p>
                          </div>
                        </Link>
                        <Link
                          to={`${this.state.user._id}/divQuiz`}
                          className="carousel-item"
                        >
                          <img
                            src={require("../assets/img/4-square-div.jpg")}
                            className="carouselImg"
                            alt="game"
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>Divide and Conquer</h5>
                            <p>Division Control</p>
                          </div>
                        </Link>
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

                  {this.state.game && (
                    <div className="bd-example">
                      <div className="playingField">
                        <Game />
                      </div>
                    </div>
                  )}
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="row">
                      <div className="info info-horizontal">
                        <div className="icon">
                          <i className="material-icons">videogame_asset</i>
                        </div>
                        <div className="description">
                          <h4 className="info-title">All Games</h4>
                        </div>
                        <div className="game-list">
                          <ul>
                            <li>
                              <Link to={`${this.state.user._id}/mathQuiz`}>
                                Math Game
                              </Link>
                            </li>
                            <li>
                              <Link to={`${this.state.user._id}/addQuiz`}>
                                Add-tastic!
                              </Link>
                            </li>
                            <li>
                              <Link to={`${this.state.user._id}/subQuiz`}>
                                Subtractify
                              </Link>
                            </li>
                            <li>
                              <Link to={`${this.state.user._id}/multiQuiz`}>
                                Multiples of Fun
                              </Link>
                            </li>
                            <li>
                              <Link to={`${this.state.user._id}/DivQuiz`}>
                                Divide and Conquer
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-8">
                    <div className="row">
                      <div className="info info-horizontal">
                        <div className="icon">
                          <i className="material-icons">poll</i>
                        </div>
                        <div className="description">
                          <h4 className="info-title">Stats</h4>
                          <p className="child-text">
                            Check your gaming history and stats.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChildDashboard;
