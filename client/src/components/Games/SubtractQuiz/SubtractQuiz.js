import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Card from "./components/Card";
import NavBar from "../../NavBar";
import StartButton from "./components/StartButton";
import subtract from "./jsonfiles/subtract.json";
import "./SubtractQuiz.css";
import axios from "axios";

let correctGuesses = 0;
let usersHighScore = 0;
let totalGuesses = 0;

class SubtractQuiz extends Component {
  state = {
    game: false,
    subtract,
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
      .get("/api/game/name/Subtract Quiz")
      .then(res => {
        this.setState({ gameInfo: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  startClicked() {
    subtract.sort(function(a, b) {
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
    for (let i = 1; i < subtract.length; i++) {
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
        <div className="jumbotron" id="subtractjumbotron">
          <Header id="subtractHeader">J-BOT Subtraction!</Header>
          <h3 className="cardHeader" id="subtractcardHeader">
            Correct Guesses: {correctGuesses}
            <br />
            Total Guesses: {totalGuesses}
            <br />
            High Score: {usersHighScore}
          </h3>
          {totalGuesses === subtract.length ? (
            this.endGame()
          ) : !this.state.game ? (
            <StartButton startClick={this.startGame} />
          ) : (
            <div className="container">
              <div className="row" id="subtractrow">
                {this.state.displayQuestions.map((bool, i) => {
                  if (bool === true) {
                    return (
                      <Card
                        id={subtract[i].id}
                        key={subtract[i].id}
                        question={subtract[i].question}
                        answers={subtract[i].answers}
                        correctAnswer={subtract[i].correctAnswer}
                        testClick={this.testClicked}
                        clicked={`${subtract[i].clicked}`}
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

export default SubtractQuiz;
