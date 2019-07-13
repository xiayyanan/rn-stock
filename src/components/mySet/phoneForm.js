import React, { Component } from "react";
import { Button } from "antd-mobile";
import { InputText } from "@/components/inputText/inputText";
import Countdown from "@/components/login/countdown";

class PhoneForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identity:require('../../static/images/identity.png'),
            genderValue: '',
            birthdayValue: ''
        }
    }
    render() {
        return (
            <form>
                <ul className="form-list">
                    <li className="item">
                        <InputText
                            placeholder="请输入手机号码"
                            title="手机号码"
                        >
                        </InputText>
                    </li>
                    <li className="item">
                        <InputText
                            placeholder="请输入短信验证码"
                            title="验证码"
                        >
                            <Countdown data-after={true} />
                        </InputText>
                    </li>
                </ul>
                <div className="send-button">
                    <Button className={`send-btn`} activeClassName="send-btn-active">保存</Button>
                </div>
            </form>
        );
    }
}

export default PhoneForm;
