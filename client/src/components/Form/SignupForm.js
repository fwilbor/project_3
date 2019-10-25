import React, { Component } from 'react';

class SignupForm extends Component {
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
                          name="name"
                          onChange={this.handleInputChange}
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
                          onChange={this.handleInputChange}
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
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </span>
                  </div>
                  <div className="card-footer justify-content-center">
                    <a
                      href="/"
                      className="btn btn-rose btn-link btn-lg"
                      onClick={this.handleInputSubmit}
                    >
                      Lets Go
                    </a>
                  </div>
                </div>
              </form>
            </div>
        );
    }
}

export default SignupForm;