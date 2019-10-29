import React from "react";
import "./MultiplyButton.css";

const Button = props => {
  return (
    <div className="container">
      {props.answers.map(answer => (
        <button id="multiplygamebuttons" className="btn btn-primary" key={answer} value={answer} onClick={() => props.testClick(answer, props.correctAnswer)}>
        {answer}
        {console.log()}
      </button>
      ))}
    </div>
  );
};

export default Button;
