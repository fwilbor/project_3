import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: 0,
    isOn: false,
    start: 0
  };

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    });

    this.timer = setInterval(
      () =>
        this.setState({
          time: Math.floor((Date.now() - this.state.start) / 1000)
        }),
      1000
    );
  }

  stopTimer() {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }

  resetTimer() {
    this.setState({ time: 0, isOn: false });
  }

  render() {
    return (
      <span id="timer" value={`${this.state.time}`}>
        {`${this.state.time}`}s
      </span>
    );
  }
}

export default Timer;
