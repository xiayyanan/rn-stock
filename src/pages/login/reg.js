import React, { Component } from "react";
import Header from "@/components/header/header";
import Regs from "@/components/login/regs";
import Menu from "@/components/login/menu";
import Protocol from "@/components/login/protocol";
import Titles from "@/components/login/titles";
import "./login.less";
class Reg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: require("../../static/images/login-logo.png"),
      isAgree: true,
      menulink: [
        {
          name: "短信登录",
          pagePath: "/login"
        },
        {
          name: "密码登录",
          pagePath: "/loginpwd"
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
      <div id="Reg">
        <Header isNoline={true} />
        <div className="rnui-content">
          <Titles text="注册牛钱策帐号"></Titles>
          <Regs isAgree={this.state.isAgree} />
          <Menu menulink={this.state.menulink}></Menu>
          <Protocol text="注册" getAgree={this.getAgree.bind(this)}></Protocol>
        </div>
      </div>
    );
  }
}

export default Reg;
