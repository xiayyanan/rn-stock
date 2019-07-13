import React, { Component } from "react";
class Title extends Component {
  render() {
    return (
      <ul className="optional-title">
        <li className="item">股票名称</li>
        <li className="item">当前价</li>
        <li className="item">涨跌幅</li>
      </ul>
    );
  }
}

export default Title;
