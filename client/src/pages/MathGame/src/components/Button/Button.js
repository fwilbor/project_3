import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <div className="container">
      {props.answers.map(answer => (
        <button className="btn btn-primary" key={answer} value={answer} onClick={() => props.testClick(answer, props.correctAnswer)}>
        {answer}
        {console.log()}
      </button>
      ))}
    </div>
  );
};

export default Button;
