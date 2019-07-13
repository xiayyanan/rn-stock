import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Bulls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bullsData: [
        {
          name: "159****3816",
          avatar: require('../../static/images/avatar/avatar-1.jpg'),
          profit: "1,262,840",
          pagePath: "/buy"
        },
        {
          name: "零***名度",
          avatar: require('../../static/images/avatar/avatar-2.jpg'),
          profit: "953,549",
          pagePath: "/buy"
        },
        {
          name: "快***大师",
          avatar: require('../../static/images/avatar/avatar-3.jpg'),
          profit: "898,983",
          pagePath: "/buy"
        }
      ]
    }
  }
  render() {
    return (
      <div className="bulls">
        <div className="bulls-title">
          <h2 className="name">牛人榜</h2>
          <p className="dsp">权威解析 大牛的点买之道</p>
        </div>
        <ul className="bulls-list">
          <li className="item title">
            <span className="number-text">排名</span>
            <span className="avatar-text">头像</span>
            <span className="name">用户名</span>
            <span className="profit">累计收益</span>
            <span className="btn-box">操作</span>
          </li>
          {
            this.state.bullsData.map((item, index) => (
              <li className="item" key={index}>
                <span className="number">{parseInt(index+1)}</span>
                <img src={item.avatar} className="avatar" alt="" />
                <span className="name">{item.name}</span>
                <span className="profit">{item.profit}元</span>
                <div className="btn-box">
                  <NavLink to={item.pagePath} className="btn">跟买</NavLink>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Bulls;