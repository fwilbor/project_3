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
          time: Math.floor((Date.now() - this.state.start) / 100)
        }),
      100
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
      <span id="timer" value={`${this.state.time * 0.1}`}>
        {`${Math.floor(this.state.time * 0.1)}`}s
      </span>
    );
  }
}

export default Timer;
