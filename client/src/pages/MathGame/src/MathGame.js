import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Card from "./components/Card";
import StartButton from "./components/StartButton";
import math from "./jsonfiles/math.json";
import "./MathGame.css";

let correctGuesses = 0;
let usersHighScore = 0;
let totalGuesses = 0;

class MathGame extends Component {
  state = {
    game: false,
    math,
    correctGuesses,
    usersHighScore,
    correctClicked: false,
    disabled: false,
    display: false,
    displayQuestions: [true]
  };

  componentDidUpdate() {
    console.log("Answer was clicked " + this.state.correctClicked);
    console.log("Was this question disabled: " + this.state.disabled);
  }

  componentDidMount() {
    this.startClicked();
    console.log(math);
    this.mappingDisplayQuestions();
  }

  startClicked() {
    console.log("Page was loaded up");
    math.sort(function(a, b) {
      return 0.5 - Math.random();
    });
  }

  startGame = () => {
    this.setState({ game: true });
  };

  testClicked = (clicked, answer) => {
    if (clicked === answer) {
      correctGuesses++;
      totalGuesses++;
      this.setCorrectClicked(true);
      this.setState({ disabled: true });
      if (correctGuesses > usersHighScore) {
        usersHighScore = correctGuesses;
        this.setState({ usersHighScore });
      }
    } else if (clicked !== answer) {
      totalGuesses++;
      this.setCorrectClicked(false);
      this.setState({ disabled: true });
    }
    this.changeDisplayedQuestion();
  };

  changeDisplayedQuestion = () => {
    let array = this.state.displayQuestions;
    let indexToMakeTrue;
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        indexToMakeTrue = i + 1;
        array[i] = false;
      } else {
        array[i] = false;
      }
    }
    array[indexToMakeTrue] = true;
    this.setState({ displayQuestions: array });
  };

  setCorrectClicked = bool => {
    this.setState({ correctClicked: bool });
  };

  mappingDisplayQuestions = () => {
    for (let i = 1; i < math.length; i++) {
      this.state.displayQuestions.push(false);
    }
    console.log(this.state.displayQuestions);
  };

  render() {
    return (
      <Wrapper>
        <div className="jumbotron">
          <Header>J-BOT Math!</Header>
          <h3 className="cardHeader">
            Correct Guesses: {correctGuesses}
            <br />
            Total Guesses: {totalGuesses}
            <br />
            High Score: {usersHighScore}
          </h3>
          {!this.state.game ? (
            <StartButton startClick={this.startGame} />
          ) : (
            <div className="container">
              <div className="row">
                {this.state.displayQuestions.map((bool, i) => {
                  if (bool === true) {
                    return (
                      <Card
                        id={math[i].id}
                        key={math[i].id}
                        question={math[i].question}
                        answers={math[i].answers}
                        correctAnswer={math[i].correctAnswer}
                        testClick={this.testClicked}
                        clicked={`${math[i].clicked}`}
                      />
                    );
                  }
                  return true;
                })}
              </div>
            </div>
          )}
        </div>
      </Wrapper>
    );
  }
}

export default MathGame;
