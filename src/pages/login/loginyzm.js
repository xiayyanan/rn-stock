import React, { Component } from "react";
import Header from "@/components/header/header";
import Yzm from "@/components/login/yzm";
import "./login.less";
class Loginyzm extends Component {
  componentDidMount() {
    document.body.style.background = "#ffffff";
    document.querySelector(".rnui-content").style.background = "#ffffff";
  }

  componentWillUnmount() {
    document.body.removeAttribute("style");
    document.querySelector(".rnui-content").removeAttribute("style");
  }

  render() {
    return (
      <div id="Login">
        <Header isNoline={true} />
        <div className="rnui-content">
          <Yzm></Yzm>
        </div>
      </div>
    );
  }
}

export default Loginyzm;
