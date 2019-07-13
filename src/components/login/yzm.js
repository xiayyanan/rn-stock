import React, { Component } from "react";
import { Button } from "antd-mobile";
import {InputText} from "@/components/inputText/inputText";
import Countdown from "@/components/login/countdown";
class Yzm extends Component {
  render() {
    return (
      <div id="Phone">
        <div className="phone-tips">已经发送短信验证码至18257139808</div>
        <form className="login-form">
          <ul className="login-input">
            <li className="item">
              <InputText placeholder="短信验证码" type="number">
                <Countdown data-after={true} />
              </InputText>
            </li>
          </ul>
          <div className="btn-box">
            <Button className="login-btn" activeClassName="login-btn-active">
              下一步
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Yzm;
