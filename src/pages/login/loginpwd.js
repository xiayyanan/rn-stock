import React, { Component } from "react";
import Header from "@/components/header/header";
import Pwd from "@/components/login/pwd";
import Logo from "@/components/login/logo";
import Menu from "@/components/login/menu";
import Protocol from "@/components/login/protocol";
import "./login.less";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: require("../../static/images/login-logo.png"),
      isAgree: true,
      menulink: [
        {
          name: "忘记密码",
          pagePath: "/forgot"
        },
        {
          name: "短信登录",
          pagePath: "/login"
        }
      ]
    };
  }
  getAgree(value) {
    this.setState({
      isAgree: value
    })
  }
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
          <Logo src={this.state.logo} />
          <Pwd isAgree={this.state.isAgree} />
          <Menu menulink={this.state.menulink}></Menu>
          <Protocol text="登录" getAgree={this.getAgree.bind(this)}></Protocol>
        </div>
      </div>
    );
  }
}

export default Login;
