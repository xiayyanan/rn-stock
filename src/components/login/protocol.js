import React, { Component } from "react";
import { Checkbox } from 'antd-mobile';
import { NavLink } from 'react-router-dom';
const AgreeItem = Checkbox.AgreeItem;
class Protocol extends Component {
  onAgree = (e) => {
    this.props.getAgree(e.target.checked)
  }
  render() {
    const link1 = {
      name: "用户协议",
      pagePath: "/protocol"
    }
    const link2 = {
      name: "隐私政策",
      pagePath: "/privacy"
    }
    return (
      <div className="login-protocol">
        <AgreeItem defaultChecked onChange={e => this.onAgree(e)}></AgreeItem>
        <div className="text-box">
          <span>{this.props.text}</span>
          <span>即表示同意牛钱策帐号</span>
          <NavLink to={link1.pagePath}>{link1.name}</NavLink>
          <span> 和 </span>
          <NavLink to={link2.pagePath}>{link2.name}</NavLink>
        </div>
      </div>
    );
  }
}
export default Protocol;
