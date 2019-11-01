import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Card from "./components/Card";
import NavBar from "../../NavBar";
import StartButton from "./components/StartButton";
import multiply from "./jsonfiles/multiply.json";
import "./MultiplyQuiz.css";
import axios from "axios";

let correctGuesses = 0;
let usersHighScore = 0;
let totalGuesses = 0;

class MultiplyQuiz extends Component {
  state = {
    game: false,
    multiply,
    correctGuesses,
    usersHighScore,
    correctClicked: false,
    disabled: false,
    display: false,
    displayQuestions: [true],
    gameInfo: ""
  };

  componentDidMount() {
    this.startClicked();
    this.mappingDisplayQuestions();
    this.getGameInfo();
  }

  getGameInfo() {
    axios
      .get("/api/game/name/Multiply Quiz")
      .then(res => {
        this.setState({ gameInfo: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  startClicked() {
    multiply.sort(function(a, b) {
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
    for (let i = 1; i < multiply.length; i++) {
      this.state.displayQuestions.push(false);
    }
  };

  sendHighScore() {
    console.log(this.state.gameInfo);
    axios
      .post("/api/history", {
        date: new Date(Date.now()),
        score: this.state.usersHighScore,
        game: this.state.gameInfo
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
        <div className="jumbotron" id="multiplyjumbotron">
          <Header id="multiplyHeader">J-BOT Multiplication!</Header>
          <h3 className="cardHeader" id="multiplycardHeader">
            Correct Guesses: {correctGuesses}
            <br />
            Total Guesses: {totalGuesses}
            <br />
            High Score: {usersHighScore}
          </h3>
          {totalGuesses === multiply.length ? (
            this.endGame()
          ) : !this.state.game ? (
            <StartButton startClick={this.startGame} />
          ) : (
            <div className="container">
              <div className="row" id="multiplyrow">
                {this.state.displayQuestions.map((bool, i) => {
                  if (bool === true) {
                    return (
                      <Card
                        id={multiply[i].id}
                        key={multiply[i].id}
                        question={multiply[i].question}
                        answers={multiply[i].answers}
                        correctAnswer={multiply[i].correctAnswer}
                        testClick={this.testClicked}
                        clicked={`${multiply[i].clicked}`}
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

export default MultiplyQuiz;
