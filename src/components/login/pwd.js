import React, { Component } from "react";
import { Button } from "antd-mobile";
import {InputText} from "@/components/inputText/inputText";
class Pwd extends Component {

  render() {
    return (
      <div id="Phone">
        <form className="login-form">
          <ul className="login-input">
            <li className="item">
              <InputText placeholder="帐号/手机号/邮箱"></InputText>
            </li>
            <li className="item">
              <InputText placeholder="请输入密码"></InputText>
            </li>
          </ul>
          <div className="btn-box">
            <Button className={`login-btn ${this.props.isAgree === false ? "login-btn-disabled" : ""}`} activeClassName="login-btn-active">
              登录
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Pwd;
