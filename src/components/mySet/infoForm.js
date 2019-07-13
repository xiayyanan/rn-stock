import React, { Component } from "react";
import { Button } from "antd-mobile";
import { InputText } from "@/components/inputText/inputText";
import { ActionSheet, DatePicker } from 'antd-mobile';
function formatDate(date) {
    /* eslint no-confusing-arrow: 0 */
    const pad = n => n < 10 ? `0${n}` : n;
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    //const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    return `${dateStr}`;
  }
class InfoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderValue: '',
            birthdayValue:''
        }
    }
    showGender = (e) => {
        e.nativeEvent.stopImmediatePropagation();
        const gender = ['男', '女', '取消'];
        ActionSheet.showActionSheetWithOptions({
            options: gender,
            cancelButtonIndex: gender.length - 1,
            maskClosable: true
        },
            (buttonIndex) => {
                if (buttonIndex !== gender.length - 1) {
                    this.setState({
                        genderValue: gender[buttonIndex]
                    });
                }
            }
        )
    }
    render() {
        return (
            <form>
                <ul className="form-list">
                    <li className="item">
                        <InputText
                            placeholder="请输入用户昵称"
                            title="昵称"
                            value="melody16688"
                        >
                        </InputText>
                    </li>
                    <li className="item">
                        <InputText
                            placeholder="请选择性别"
                            value={this.state.genderValue}
                            title="性别"
                            isRead={true}
                            isSelect={true}
                            isClear={false}
                            onClick={(e) => { this.showGender(e) }}
                        >
                        </InputText>
                    </li>
                    <li className="item">
                        <DatePicker
                            mode="date"
                            title="选择生日"
                            extra="Optional"
                            value={this.state.date}
                            onChange={date => this.setState({ birthdayValue:formatDate(date)})}
                        >
                            <InputText
                                placeholder="请选择日期"
                                title="生日"
                                isRead={true}
                                isSelect={true}
                                isClear={false}
                                value={this.state.birthdayValue}
                            >
                            </InputText>
                        </DatePicker>
                    </li>
                </ul>
                <div className="send-button">
                    <Button className={`send-btn`} activeClassName="send-btn-active">保存</Button>
                </div>
            </form>
        );
    }
}

export default InfoForm;
