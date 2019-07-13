import React, { Component } from "react";
class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yzm: "获取验证码",
      second: 60
    };
  }

  onGetyzm = () => {
    let second = this.state.second;
    this.timer = null;
    let countdown = () => {
      if (second > 0) {
        this.setState({
          yzm: second + "s",
          second: second--
        });
      } else {
        clearInterval(this.timer);
        this.setState({
          second: 60,
          yzm: "获取验证码"
        });
      }
    };
    countdown();
    this.timer = setInterval(() => {
      countdown();
    }, 1000);
  }

  componentWillUnmount = () => {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className="get-yzm" onClick={this.onGetyzm.bind(this)}>
        {this.state.yzm}
      </div>
    );
  }
}
export default Countdown;
