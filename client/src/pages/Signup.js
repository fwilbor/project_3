import React, { Component } from "react";
import "../assets/css/material-kit.min.css";

class Signup extends Component {
  render() {
    return (
      <div className="page-header header-filter">
      <div className="container">
        <div className="row">
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
                      <input type="text" className="form-control" placeholder="Name..."/>
                    </div>
                  </span>
                  <span className="bmd-form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="material-icons">email</i>
                        </span>
                      </div>
                      <input type="email" className="form-control" placeholder="Email..."/>
                    </div>
                  </span>
                  <span className="bmd-form-group">
                  <div className="input-group">
                  <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="material-icons">lock_outline</i>
                      </span>
                    </div>
                    <input type="password" className="form-control" placeholder="Password..."/>
                  </div>
                  </span>
                </div>
                <div class="card-footer justify-content-center">
                <a href="/" class="btn btn-rose btn-link btn-lg">Lets Go</a>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Signup;
