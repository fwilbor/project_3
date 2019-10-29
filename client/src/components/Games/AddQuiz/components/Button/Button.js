import React from "react";
import "./AddButton.css";

const Button = props => {
  return (
    <div className="container">
      {props.answers.map(answer => (
        <button id="addgamebuttons" className="btn btn-primary" key={answer} value={answer} onClick={() => props.testClick(answer, props.correctAnswer)}>
        {answer}
        {console.log()}
      </button>
      ))}
    </div>
  );
};

export default Button;
