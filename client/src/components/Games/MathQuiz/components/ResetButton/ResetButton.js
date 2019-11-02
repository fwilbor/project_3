import React from "react";
import "./ResetButton.css";

const ResetButton = props => {
    return (
      <div className="container">
        <button
          type="button"
          id="reset"
          className="btn btn-primary btn-lg btn-block"
          onClick={() => props.resetClick()}
        >
          Click Here To Reset
        </button>
      </div>
    );
}

export default ResetButton;
