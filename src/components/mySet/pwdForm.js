import React, { Component } from "react";
import { Button } from "antd-mobile";
import { InputText } from "@/components/inputText/inputText";

class pwdForm extends Component {
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
                            placeholder="请输入旧密码"
                            title="旧 密 码"
                        >
                        </InputText>
                    </li>
                    <li className="item">
                        <InputText
                            placeholder="请输入新密码"
                            title="新 密 码"
                        >
                        </InputText>
                    </li>
                    <li className="item">
                        <InputText
                            placeholder="请再次输入密码"
                            title="确认密码"
                        >
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

export default pwdForm;
