import React, { Component } from "react";
import { Button, Picker } from "antd-mobile";
import {InputText} from "@/components/inputText/inputText";
class Reg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [
        {
          value: "+86",
          label: "中国 +86"
        },
        {
          value: "+852",
          label: "中国香港 +852"
        },
        {
          value: "+853",
          label: "中国澳门 +853"
        },
        {
          value: "+886",
          label: "中国台湾 +886"
        }
      ],
      countryValue: ["+86"]
    };
  }

  onChangeCountry = value => {
    this.setState({
      countryValue: value
    });
  };

  render() {
    return (
      <div id="Phone">
        <form className="login-form">
          <ul className="login-input">
            <li className="item">
              <InputText placeholder="请输入手机号码" type="number">
                <div className="country" data-before={true}>
                  <Picker
                    data={this.state.country}
                    cols={1}
                    value={this.state.countryValue}
                    onChange={this.onChangeCountry.bind(this)}
                  >
                    <div className="value">{this.state.countryValue}</div>
                  </Picker>
                </div>
              </InputText>
            </li>
          </ul>
          <div className="btn-box">
            <Button className={`login-btn ${this.props.isAgree === false ? "login-btn-disabled" : ""}`} activeClassName="login-btn-active">
              立即注册
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Reg;
