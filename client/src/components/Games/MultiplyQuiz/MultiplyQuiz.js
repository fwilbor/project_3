import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Card from "./components/Card";
import NavBar from "../../NavBar";
import StartButton from "./components/StartButton";
import ResetButton from "./components/ResetButton";
import multiply from "./jsonfiles/multiply.json";
import Timer from "../../Timer/Timer";
import "./MultiplyQuiz.css";
import axios from "axios";

class MultiplyQuiz extends Component {
  state = {
    game: false,
    multiply,
    correctGuesses: 0,
    usersHighScore: 0,
    totalGuesses: 0,
    correctClicked: false,
    disabled: false,
    display: false,
    displayQuestions: [true],
    gameInfo: ""
  };

  componentDidMount() {
    this.getGameInfo();
  }

  componentDidUpdate() {
    // console.log(this.state.displayQuestions);
  }

  resetGame = () => {
    this.setState({
      game: false,
      multiply,
      correctGuesses: 0,
      usersHighScore: 0,
      totalGuesses: 0,
      correctClicked: false,
      disabled: false,
      display: false,
      displayQuestions: [true]
    });
  };

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

  shuffle() {
    multiply.sort(function(a, b) {
      return 0.5 - Math.random();
    });
  }

  startGame = () => {
    this.shuffle();
    this.mappingDisplayQuestions();
    this.setState({ game: true });
  };

  testClicked = (clicked, answer) => {
    if (clicked === answer) {
      let newState = this.state;
      newState.correctGuesses++;
      newState.totalGuesses++;
      newState.correctClicked = true;
      newState.disabled = true;

      if (newState.correctGuesses > newState.usersHighScore) {
        newState.usersHighScore = newState.correctGuesses;
      }
      this.setState(newState);
    } else if (clicked !== answer) {
      let newState = this.state;
      newState.totalGuesses++;
      newState.correctClicked = false;
      newState.disabled = true;
      this.setState(newState);
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
    // if (this.state.displayQuestions.length < 20) {
    for (let i = 1; i < multiply.length; i++) {
      this.state.displayQuestions.push(false);
    }
    // }
  };

  sendHighScore() {
    axios
      .post("/api/history", {
        date: new Date(Date.now()),
        time: parseInt(document.getElementById("timer").getAttribute("value")),
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
            console.log(postData.data);
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
          <ResetButton resetClick={this.resetGame} />
          <h3 className="cardHeader" id="multiplycardHeader">
            Correct Guesses: {this.state.correctGuesses}&nbsp;| Total Guesses:{" "}
            {this.state.totalGuesses}
            <br />
            High Score: {this.state.usersHighScore}
            {this.state.game ? (
              <>
                &nbsp;| Timer:&nbsp;
                <Timer time={this.state.time} />
              </>
            ) : (
              ""
            )}
          </h3>
          {this.state.totalGuesses === multiply.length ? (
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
