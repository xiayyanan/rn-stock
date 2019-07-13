import React, { Component } from "react";
class Titles extends Component {
  render() {
    return (
      <div className="login-title">{this.props.text}</div>
    );
  }
}
export default Titles;
