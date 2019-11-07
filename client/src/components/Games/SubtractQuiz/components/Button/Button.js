import React from "react";
import "./SubtractButton.css";

const Button = props => {
  return (
    <div className="container">
      {props.answers.map(answer => (
        <button id="subtractgamebuttons" className="btn btn-primary" key={answer} value={answer} onClick={() => props.testClick(answer, props.correctAnswer)}>
        {answer}
      </button>
      ))}
    </div>
  );
};

export default Button;
