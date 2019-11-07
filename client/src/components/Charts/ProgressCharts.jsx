import React from "react";
import axios from "axios";
import NavBar from "../NavBar";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import PanelHeader from "../PanelHeader/PanelHeader";

class ProgressCharts extends React.Component {
  state = {
    user: "",
    gamesArray: {
      math: [0],
      add: [0],
      sub: [0],
      multi: [0],
      div: [0],
      unknowGame: [0]
    },
    highScoreArray: [0],
    allTimeScoreArray: [0]
  };

  componentDidMount() {
    this.getUserInfo();
  }

  componentDidUpdate() {}

  getUserInfo() {
    axios
      .get(`/api/user/${this.props.match.params.id}`)
      .then(user => {
        this.setState({ user: user.data });
        this.organizeGamesByName(user.data.history);
      })
      .catch(err => {
        // console.log(err);
      });
  }

  highScoresByGame(data) {
    let highScore = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].score > highScore) {
        highScore = data[i].score;
      }
    }
    return highScore;
  }

  organizeGamesByName(data) {
    let math = [0];
    let add = [0];
    let sub = [0];
    let multi = [0];
    let div = [0];
    let unknowGame = [0];
    for (let i = 0; i < data.length; i++) {
      if (data[i].game.name === "Math Quiz") {
        math.unshift(data[i]);
      } else if (data[i].game.name === "Add Quiz") {
        add.unshift(data[i]);
      } else if (data[i].game.name === "Subtract Quiz") {
        sub.unshift(data[i]);
      } else if (data[i].game.name === "Multiply Quiz") {
        multi.unshift(data[i]);
      } else if (data[i].game.name === "Divide Quiz") {
        div.unshift(data[i]);
      } else {
        unknowGame.unshift(data[i]);
      }
    }
    this.setState(
      {
        gamesArray: {
          math,
          add,
          sub,
          multi,
          div,
          unknowGame
        }
      },
      () => {
        let mathHS = this.highScoresByGame(this.state.gamesArray.math);
        let addHS = this.highScoresByGame(this.state.gamesArray.add);
        let subHS = this.highScoresByGame(this.state.gamesArray.sub);
        let multiHS = this.highScoresByGame(this.state.gamesArray.multi);
        let divHS = this.highScoresByGame(this.state.gamesArray.div);

        this.setState({
          highScoreArray: [mathHS, addHS, subHS, multiHS, divHS]
        });
        this.allTimeScore();
      }
    );
  }

  allTimeScore() {
    var mathAllTime =
      (this.state.gamesArray.math[0].score /
        this.state.gamesArray.math[0].time) *
      100;
    var addAllTime =
      (this.state.gamesArray.add[0].score / this.state.gamesArray.add[0].time) *
      100;
    var subAllTime =
      (this.state.gamesArray.sub[0].score / this.state.gamesArray.sub[0].time) *
      100;
    var multiAllTime =
      (this.state.gamesArray.multi[0].score /
        this.state.gamesArray.multi[0].time) *
      100;
    var divAllTime =
      (this.state.gamesArray.div[0].score / this.state.gamesArray.div[0].time) *
      100;
    var allScores =
      mathAllTime + addAllTime + subAllTime + multiAllTime + divAllTime;
    this.setState({
      allTimeScoreArray: [
        mathAllTime,
        addAllTime,
        subAllTime,
        multiAllTime,
        divAllTime
      ]
    });
  }

  render() {
    // ##############################
    // // // Function that converts a hex color number to a RGB color number
    // #############################
    function hexToRGB(hex, alpha) {
      var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
      if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
      } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
      }
    }
    // ##############################
    // // // Dashboard view - Panel chart Total times per day for the month
    // #############################
    const dashboardPanelChart = {
      data: canvas => {
        const ctx = canvas.getContext("2d");
        // panel chart line color below
        var chartColor = "#FFFFFF";
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, "#80b6f4");
        gradientStroke.addColorStop(1, chartColor);
        var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");
        return {
          ///////// X-axis
          // labels are days of the month //below
          labels: [
            "Day 1",
            "Day 2",
            "Day 3",
            "Day 4",
            "Day 5",
            "Day 6",
            "Day 7",
            "Day 8",
            "Day 9",
            "Day 10",
            "Day 11",
            "Day 12",
            "Day 13",
            "Day 14",
            "Day 16",
            "Day 17",
            "Day 18",
            "Day 19",
            "Day 20",
            "Day 21",
            "Day 22",
            "Day 23",
            "Day 24",
            "Day 25",
            "Day 26",
            "Day 27",
            "Day 28",
            "Day 29",
            "Day 30"
          ],
          datasets: [
            {
              //Data time in minutes logged in total //below
              label: "Minutes",
              borderColor: chartColor,
              pointBorderColor: chartColor,
              pointBackgroundColor: "#2c2c2c",
              pointHoverBackgroundColor: "#2c2c2c",
              pointHoverBorderColor: chartColor,
              pointBorderWidth: 1,
              pointHoverRadius: 7,
              pointHoverBorderWidth: 2,
              pointRadius: 5,
              fill: true,
              backgroundColor: gradientFill,
              borderWidth: 2,
              ////// Y-axis //below
              data: [
                50,
                150,
                100,
                190,
                130,
                90,
                150,
                160,
                120,
                140,
                190,
                95,
                50,
                150,
                100,
                190,
                130,
                90,
                150,
                160,
                120,
                140,
                190,
                95,
                150,
                160,
                120,
                140,
                190,
                95
              ]
            }
          ]
        };
      },
      options: {
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 0,
            bottom: 0
          }
        },
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "#fff",
          titleFontColor: "#333",
          bodyFontColor: "#666",
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        legend: {
          position: "bottom",
          fillStyle: "#FFF",
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,0.4)",
                fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                drawTicks: true,
                drawBorder: false,
                display: true,
                color: "rgba(255,255,255,0.1)",
                zeroLineColor: "transparent"
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
                color: "rgba(255,255,255,0.1)"
              },
              ticks: {
                padding: 10,
                fontColor: "rgba(255,255,255,0.4)",
                fontStyle: "bold"
              }
            }
          ]
        }
      }
    };
    // ##############################
    // // // Dashboard view - High Scores
    // #############################
    const dashboardHighScores = {
      data: canvas => {
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, hexToRGB("#008000", 0.6));
        return {
          labels: [
            "MathQuiz",
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division"
          ],
          datasets: [
            {
              label: "High Score",
              /////////////////////////////////////////////////////////////////
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)"
              ],
              pointBorderColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)"
              ],
              pointBackgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)"
              ],
              /////////////////////////////////////////////////////////////////
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              fill: true,
              borderWidth: 1,
              //user high score for each game
              //   Math/ Add/ Sub/ Multi/ Div
              data: this.state.highScoreArray
            }
          ]
        };
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          bodySpacing: 4,
          mode: "nearest",
          intersect: 0,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        responsive: 1,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                zeroLineColor: "transparent",
                drawBorder: false
              }
            }
          ],
          xAxes: [
            {
              display: 0,
              ticks: {
                display: false
              },
              gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
              }
            }
          ]
        },
        layout: {
          padding: { left: 20, right: 0, top: 15, bottom: 15 }
        }
      }
    };
    // ##############################
    // // // Dashboard view - All Products - Card
    // ############################################################################################################
    const dashboardTimesPerGame = {
      data: canvas => {
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, hexToRGB("#008000", 0.6));
        return {
          labels: [
            "MathQuiz",
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division"
          ],
          datasets: [
            {
              label: "Seconds finished",
              /////////////////////////////////////////////////////////////////
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)"
              ],
              pointBorderColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)"
              ],
              pointBackgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)"
              ],
              /////////////////////////////////////////////////////////////////
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              fill: true,
              borderWidth: 1,
              //user high score for each game
              //   Math/ Add/ Sub/ Multi/ Div
              data: [
                this.state.gamesArray.math[0].time,
                this.state.gamesArray.add[0].time,
                this.state.gamesArray.sub[0].time,
                this.state.gamesArray.multi[0].time,
                this.state.gamesArray.div[0].time
              ]
            }
          ]
        };
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          bodySpacing: 4,
          mode: "nearest",
          intersect: 0,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        responsive: 1,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                zeroLineColor: "transparent",
                drawBorder: false
              }
            }
          ],
          xAxes: [
            {
              display: 0,
              ticks: {
                display: false
              },
              gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
              }
            }
          ]
        },
        layout: {
          padding: { left: 20, right: 0, top: 15, bottom: 15 }
        }
      }
    };
    // ######################################################################################################
    // // // Dashboard view - Bar Chart - Card
    // #############################
    const dashboardLastScoresPerGame = {
      data: canvas => {
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
        return {
          labels: [
            "MathQuiz",
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division"
          ],
          datasets: [
            {
              label: "Last Score",
              //////////////////////////////////////////////////////
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)"
              ],
              pointBorderColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)"
              ],
              pointBackgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)"
              ],
              //////////////////////////////////////////////////////
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              fill: true,
              borderWidth: 1,
              //user high score for each game
              //   Math/ Add/ Sub/ Multi/ Div
              data: [
                this.state.gamesArray.math[0].score,
                this.state.gamesArray.add[0].score,
                this.state.gamesArray.sub[0].score,
                this.state.gamesArray.multi[0].score,
                this.state.gamesArray.div[0].score
              ]
            }
          ]
        };
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          bodySpacing: 4,
          mode: "nearest",
          intersect: 0,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        responsive: 1,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                zeroLineColor: "transparent",
                drawBorder: false
              }
            }
          ],
          xAxes: [
            {
              display: 0,
              ticks: {
                display: false
              },
              gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
              }
            }
          ]
        },
        layout: {
          padding: { left: 20, right: 0, top: 15, bottom: 15 }
        }
      }
    };
    return (
      <>
        <NavBar />
        <PanelHeader
          size="lg"
          content={
            <Line
              data={dashboardPanelChart.data}
              options={dashboardPanelChart.options}
            />
          }
        />

        <div className="content">
          <Row>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">High Scores</h5>
                  <CardTitle tag="h4">High Scores Per Game</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={dashboardHighScores.data}
                      options={dashboardHighScores.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons" /> High Scores
                  </div>
                </CardFooter>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Finished Times</h5>
                  <CardTitle tag="h4">Total Times Per Game</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={dashboardTimesPerGame.data}
                      options={dashboardTimesPerGame.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons" /> Game Times
                  </div>
                </CardFooter>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Last Scores</h5>
                  <CardTitle tag="h4">Last Scores Per Game</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={dashboardLastScoresPerGame.data}
                      options={dashboardLastScoresPerGame.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons" /> Current Score Board
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default ProgressCharts;
