import React from "react";
import Button from "../Button/Button";
import "./Card.css";

const Card = props => {
  return (
    <div className="container">
      <div className="card" clicked={props.clicked}>
        {props.question}
        <Button answers={props.answers} correctAnswer={props.correctAnswer} testClick={props.testClick} />
      </div>
    </div>
  );
};

export default Card;
