import React, { Component } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import axios from "axios";
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "../firebase";
import ConfirmModal from "../components/Modals/ConfirmModal";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

const title = {
  marginTop: "3em"
};

class ParentDashboard extends Component {
  state = {
    user: "",
    openModal: false,
    deleteConfirm: false,
    modalMsg: ""
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
      .then(userInfo => {
        this.setState({ user: userInfo.data });
      })
      .catch(err => {
        // console.log(err);
      });
  }

  promptConfirm() {
    this.setState({
      openModal: true,
      modalMsg: "Doing this will delete all of the scores saved on this account"
    });
  }

  clearAccountInfo() {
    if (this.state.deleteConfirm) {
      axios
        .put(`/api/user/${this.state.user._id}`, { history: [] })
        .then(res => {
          this.setState({ deleteConfirm: false });
        })
        .catch(err => {
          // console.log(err);
        });
    }
  }

  confirmModal = () => {
    this.setState(
      { openModal: !this.state.openModal, deleteConfirm: true },
      () => this.clearAccountInfo()
    );
  };

  cancelModal = () => {
    this.setState({ openModal: !this.state.openModal });
  };

  render() {
    return (
      <div>
        <NavBar />
        {/* TODO: Update this page to show relevant content. Supporting components for parent view should be added to this page. */}
        <div className="features-5">
          <div className="col-md-8 ml-auto mr-auto text-center">
            <h2 className="title" style={title}>
              Your life will be much easier
            </h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="info">
                  <div className="icon">
                    <i className="material-icons">code</i>
                  </div>
                  <Link to="#" onClick={() => this.promptConfirm()}>
                    <h4 className="info-title">Clear Account Information</h4>
                  </Link>
                  <p>This will clear all of your account information.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="info">
                  <div className="icon">
                    <i className="material-icons">format_paint</i>
                  </div>
                  <Link to={`/parent/${this.state.user._id}`}>
                    <h4 className="info-title">Reports</h4>
                  </Link>
                  <p>
                    See what games your child has played. Track their time and
                    progress.
                  </p>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="info">
                  <div className="icon">
                    <i className="material-icons">dashboard</i>
                  </div>
                  <h4 className="info-title">Game Info</h4>
                  <p>
                    Get more information about the games and how they help your
                    child learn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.openModal && (
          <ConfirmModal
            title="Are you sure?"
            message={this.state.modalMsg}
            confirm={this.confirmModal}
            cancel={this.cancelModal}
            btnText="Confirm"
          />
        )}
      </div>
    );
  }
}

export default ParentDashboard;
