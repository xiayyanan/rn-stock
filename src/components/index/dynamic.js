import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { SegmentedControl } from 'antd-mobile';
class Dynamic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dynamicData: [
        {
          stockName: "招商银行",
          stockCode: "600036.SH",
          user: "159****3816",
          time: "1分钟前",
          price: 25.69,
          quotes: 0.47,
          quotesp: 1.86,
          pagePath: "/buy"
        },
        {
          stockName: "中油资本",
          stockCode: "000617.SZ",
          user: "138****2172",
          time: "10分钟前",
          price: 10.35,
          quotes: 0.07,
          quotesp: 0.68,
          pagePath: "/buy"
        },
        {
          stockName: "华大基因",
          stockCode: "300676.SZ",
          user: "开心****就好",
          time: "17分钟前",
          price: 61.71,
          quotes: 0.18,
          quotesp: 1.81,
          pagePath: "/buy"
        },
        {
          stockName: "宜华健康",
          stockCode: "000150.SZ",
          user: "潘****12",
          time: "21分钟前",
          price: 13.98,
          quotes: 13.98,
          quotesp: 1.30,
          pagePath: "/buy"
        },
        {
          stockName: "东方通信",
          stockCode: "600776.SH",
          user: "你不**0741",
          time: "1小时前",
          price: 15.74,
          quotes: -0.04,
          quotesp: -0.26,
          pagePath: "/buy"
        }
      ],

      dynamicData2: [
        {
          stockName: "创元科技",
          stockCode: "000551.SZ",
          user: "135****2471",
          time: "1分钟前",
          price: 6.030,
          quotes: 0.03,
          quotesp: 0.50,
          pagePath: "/buy"
        },
        {
          stockName: "物产中大",
          stockCode: "000617.SH",
          user: "惊鸿***溜",
          time: "7分钟前",
          price: 4.890,
          quotes: 0.10,
          quotesp: 2.09,
          pagePath: "/buy"
        },
        {
          stockName: "长航凤凰",
          stockCode: "000520.SZ",
          user: "182****9808",
          time: "19分钟前",
          price: 4.890,
          quotes: -0.20,
          quotesp: -3.07,
          pagePath: "/buy"
        },
        {
          stockName: "安凯客车",
          stockCode: "000868.SZ",
          user: "凛冬****歇",
          time: "2小时前",
          price: 3.950,
          quotes: 0.04,
          quotesp: 1.02,
          pagePath: "/buy"
        },
        {
          stockName: "恩捷股份",
          stockCode: "002812.SH",
          user: "拼命****郎",
          time: "3小时前",
          price: 48.800,
          quotes: -1.75,
          quotesp: -3.46,
          pagePath: "/buy"
        }
      ],

      currentDynamic: [],
      selectedIndex: 0,
    }
  }

  onChangeDynamic = (e) => {
    if (e.nativeEvent.selectedSegmentIndex === 0) {
      this.setState({ currentDynamic: this.state.dynamicData })
    }
    else {
      this.setState({ currentDynamic: this.state.dynamicData2 })
    }
  }

  componentDidMount() {
    this.setState({ currentDynamic: this.state.dynamicData })
  }

  render() {
    return (
      <div className="dynamic">
        <div className="dynamic-title">
          <h2 className="name">交易动态</h2>
          <SegmentedControl
            onChange={this.onChangeDynamic}
            values={['最新买入', '最新获利']}
            tintColor={'#fd0626'}
            style={{ height: '.48rem' }}
          />
        </div>
        <ul className="dynamic-list">
          {
            this.state.currentDynamic.map((item, index) => (
              <li className="item" key={index}>
                <div className="stock">
                  <p className="btext">{item.stockName}</p>
                  <p className="stext">{item.stockCode}</p>
                </div>
                <div className="user">
                  <p className="btext">{item.user}</p>
                  <p className="stext">{item.time}</p>
                </div>
                <div className="price">
                  <p className={item.quotes > 0 ? "btext red" : "btext green"}>{item.price}</p>
                  <p className="stext">
                    <span className={item.quotes > 0 ? "red" : "green"}>{item.quotes}</span>
                    <span className={item.quotes > 0 ? "spacep red" : "spacep green"}>{item.quotesp}%</span>
                  </p>
                </div>
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

export default Dynamic;