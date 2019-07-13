import React, { Component } from "react";
import { Button } from "antd-mobile";
import {InputText} from "@/components/inputText/inputText";
class BankForm extends Component {
  render() {
    return (
      <div id="Phone">
        <form className="login-form bank-form">
          <ul className="login-input">
            <li className="item">
              <InputText
                name="phone"
                placeholder="请输入银行卡号"
                type="number"
                title="卡号"
              >
              </InputText>
            </li>
          </ul>
          <div className="btn-box">
            <Button className={`login-btn ${this.props.isAgree === false ? "login-btn-disabled" : ""}`} activeClassName="login-btn-active">
              提交
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default BankForm;
