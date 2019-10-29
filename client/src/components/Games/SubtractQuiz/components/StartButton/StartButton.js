import React from "react";
import "./StartButton.css";

const StartButton = props => {
  return (
    <div className="container">
      <button
        type="button"
        id="start"
        className="btn btn-primary btn-lg btn-block"
        onClick={() => props.startClick()}>Click Here To Start</button>
    </div>
  );
};

export default StartButton;
