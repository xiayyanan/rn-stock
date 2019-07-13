import React, { Component } from "react";
import { Button } from "antd-mobile";
import { InputText } from "@/components/inputText/inputText";

class AuthForm extends Component {
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
                            placeholder="请输入真实姓名"
                            title="姓 名"
                        >
                        </InputText>
                    </li>
                    <li className="item">
                        <InputText
                            placeholder="请输入身份证号"
                            title="身份证"
                        >
                        </InputText>
                    </li>
                </ul>
                <div className="identity">
                    <div className="title">
                        <span>身份证正反照片</span>
                        <span className="red">待上传</span>
                    </div>
                    <ul className="uplist">
                        <li className="item">
                            <img src={this.state.identity} alt='' />
                        </li>
                        <li className="item">
                            <span className="upbtn"></span>
                            <p className="text">上传身份证反面</p>
                        </li>
                    </ul>
                </div>
                <div className="send-button">
                    <Button className={`send-btn`} activeClassName="send-btn-active">保存</Button>
                </div>
            </form>
        );
    }
}

export default AuthForm;
