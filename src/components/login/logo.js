import React, { Component } from "react";
class Logo extends Component {
  render() {
    return (
      <div className="login-logo">
        <img src={this.props.src} alt="" />
      </div>
    );
  }
}
export default Logo;
