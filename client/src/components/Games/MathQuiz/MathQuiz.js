import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Card from "./components/Card";
import NavBar from "../../NavBar";
import StartButton from "./components/StartButton";
import math from "./jsonfiles/math.json";
import "./MathQuiz.css";
import axios from "axios";

let correctGuesses = 0;
let usersHighScore = 0;
let totalGuesses = 0;

class MathQuiz extends Component {
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

  componentDidMount() {
    this.startClicked();
    this.mappingDisplayQuestions();
  }

  startClicked() {
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
  };

  sendHighScore() {
    axios
      .post("/api/history", {
        date: new Date(Date.now()),
        score: this.state.usersHighScore
      })
      .then(histRes => {
        this.updateHistory(histRes.data._id);
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateHistory(id) {
    axios
      .get(`/api/user/${this.props.match.params.id}`)
      .then(preData => {
        let updateArr = preData.data.history;
        updateArr.push(id);
        axios
          .put(`/api/user/${this.props.match.params.id}`, {
            history: updateArr
          })
          .then(postData => {
            console.log(postData);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  endGame() {
    this.sendHighScore();
  }

  render() {
    return (
      <Wrapper>
        <NavBar />
        <div className="jumbotron" id="mathjumbotron">
          <Header id="mathHeader">J-BOT Math!</Header>
          <h3 className="cardHeader" id="mathcardHeader">
            Correct Guesses: {correctGuesses}
            <br />
            Total Guesses: {totalGuesses}
            <br />
            High Score: {usersHighScore}
          </h3>
          {totalGuesses === math.length ? (
            this.endGame()
          ) : !this.state.game ? (
            <StartButton startClick={this.startGame} />
          ) : (
            <div className="container">
              <div className="row" id="mathrow">
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

export default MathQuiz;
