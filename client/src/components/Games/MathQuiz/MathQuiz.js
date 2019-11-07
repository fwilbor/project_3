import React, { Component } from "react";
import NavBar from "../../NavBar";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Card from "./components/Card";
import StartButton from "./components/StartButton";
import ResetButton from "./components/ResetButton";
import math from "./jsonfiles/math.json";
import Timer from "../../Timer/Timer";
import "./MathQuiz.css";
import axios from "axios";

class MathQuiz extends Component {
  state = {
    game: false,
    math,
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

  componentDidUpdate() {}

  resetGame = () => {
    this.setState({
      game: false,
      math,
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
      .get("/api/game/name/Math Quiz")
      .then(res => {
        this.setState({ gameInfo: res.data });
      })
      .catch(err => {
        // console.log(err);
      });
  }

  shuffle() {
    math.sort(function(a, b) {
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
    for (let i = 1; i < math.length; i++) {
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
        // console.log(err);
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
          .then(postData => {})
          .catch(err => {
            // console.log(err);
          });
      })
      .catch(err => {
        // console.log(err);
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
          <ResetButton resetClick={this.resetGame} />
          <h3 className="cardHeader" id="mathcardHeader">
            Correct Guesses: {this.state.correctGuesses}&nbsp;| Total Guesses:{" "}
            {this.state.totalGuesses}
            <br />
            {this.state.game ? (
              <>
                &nbsp; Timer:&nbsp;
                <Timer time={this.state.time} />
              </>
            ) : (
              ""
            )}
          </h3>
          {this.state.totalGuesses === math.length ? (
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
