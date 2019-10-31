import React, { Component }  from "react";
import { Link } from "react-router-dom";

class SignupForm extends Component {
  state = {
    accepted: false
  }

  toggleAccepted = () => {
    let accept = !this.state.accepted;
    this.setState({ accepted: accept }, () => {
      console.log("accepted: " + this.state.accepted);
    });
  };

  shouldButtonBeDisabled = () => {
    if(this.state.accepted && this.props.canSubmit){
      return false;
    }
    return true;
  }

  render() {
  return (
    <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
      <h3>Create An Account</h3>
      <form className="form" method="" action="">
        <div className="card card-login card-hidden">
          <div className="card-body ">
            <span className="bmd-form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="material-icons">face</i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name..."
                  name="username"
                  onChange={this.props.handleInputChange}
                />
              </div>
            </span>
            <span className="bmd-form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="material-icons">email</i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email..."
                  name="email"
                  onChange={this.props.handleInputChange}
                />
              </div>
            </span>
            <span className="bmd-form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="material-icons">lock_outline</i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password..."
                  name="password"
                  onChange={this.props.handleInputChange}
                />
              </div>
            </span>
            <span className="bmd-form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group">
                    <span>
                      <input id="coppa" 
                          type="checkbox" 
                          aria-label="Checkbox for accepting terms"
                          onChange={this.toggleAccepted}
                          />
                    </span>
                    <span htmlFor="coppa">&nbsp; Check here to accept the <Link to="/COPPA"> Terms</Link></span>
                  </span>
                </div>
              </div>
            </span>
          </div>
          <div className="card-footer justify-content-center">
            <button
              className="btn btn-rose btn-link btn-lg"
              disabled={this.shouldButtonBeDisabled()}
              onClick={this.props.handleInputSignUp}
            >
              Let&#39;s Go
            </button>
          </div>
        </div>
      </form> 
    </div>
  );
}
}

export default SignupForm;
