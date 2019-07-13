import React, { Component } from "react";
import { Button, Picker, Toast } from "antd-mobile";
import {InputText} from "@/components/inputText/inputText";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginHandler } from '../../redux/actions/loginActions';
class Phone extends Component {
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
      countryValue: ["+86"],
      isPhone: false,
      phoneValue: ''
    };
  }

  onChangeCountry = value => {
    this.setState({
      countryValue: value
    });
  };

  onSend = () => {
    let regPhone = /^1[34578]\d{9}$/;
    if (regPhone.test(this.state.phoneValue)) {
      this.setState({
        isPhone: true
      })
      let posts=this.props.posts.user;
      posts.isLogin=true;
      this.props.loginHandler(posts);
    }
    else {
      Toast.fail("手机号码格式不正确")
    }
  }

  onChange(e, value) {
    let name = e.target.name;
    switch (name) {
      case "phone":
        this.setState({
          phoneValue: value
        })
        break;
      default: return null;
    }
  }

  render() {
    if (this.state.isPhone) {
      return <Redirect push to='/my' />;
    }
    return (
      <div id="Phone">
        <form className="login-form">
          <ul className="login-input">
            <li className="item">
              <InputText
                name="phone"
                placeholder="请输入手机号"
                type="number"
                onChange={this.onChange.bind(this)}>
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
            <Button onClick={this.onSend.bind(this)} className={`login-btn ${this.props.isAgree === false ? "login-btn-disabled" : ""}`} activeClassName="login-btn-active">
              下一步
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

Phone.propTypes = {
  loginHandler: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  ...state
})
export default connect(mapStateToProps, { loginHandler })(Phone);
//export default Phone;
