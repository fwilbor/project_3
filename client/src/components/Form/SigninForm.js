import React from "react";

function SigninForm(props) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
      <h3>Sign In</h3>
      <form className="form" method="" action="">
        <div className="card card-login card-hidden">
          <div className="card-body ">
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
                  onChange={props.handleInputChange}
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
                  onChange={props.handleInputChange}
                />
              </div>
            </span>
          </div>
          <div className="card-footer justify-content-center">
            <button
              className="yep btn btn-rose btn-link btn-lg"
              disabled={(!props.canSubmit)}
              onClick={props.handleInputSignIn}
            >
              Let&#39;s Go
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SigninForm;
