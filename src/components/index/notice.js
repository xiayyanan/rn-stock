import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel, WingBlank } from 'antd-mobile';
class Notice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noticeData: [
        {
          title: "刚刚定了!股市正全面进入4.0时代,散户出路或将明确!",
          pagePath: "/nshow",
          date:"01-20"
        },
        {
          title: "中金公司:海外投资者对中国股市的关注度或明显升温",
          pagePath: "/nshow",
          date:"01-11"
        },
        {
          title: "本周股市三大猜想及应对策略:券商股持续强势?",
          pagePath: "/nshow",
          date:"01-09"
        },
        {
          title: "外媒:美联储释暂缓升息强烈信号 股市大幅提振",
          pagePath: "/nshow",
          date:"01-07"
        },
        {
          title: "亚洲股市全线走高 日经涨幅迅速扩大至3% ",
          pagePath: "/nshow",
          date:"01-06"
        }
      ]
    }
  }
  render() {
    return (
      <div className="notice">
        <span className="bts">公告</span>
        <WingBlank>
          <Carousel className="noticeScroll"
            vertical
            dots={false}
            dragging={false}
            swiping={false}
            autoplay
            infinite
          >
            {
              this.state.noticeData.map((item, index) => (
                <div className="item" key={index}>
                  <NavLink to={item.pagePath} className="tap">
                    <span className="title">{item.title}</span>
                    <span className="date">{item.date}</span>
                  </NavLink>
                </div>
              ))
            }
          </Carousel>
        </WingBlank>
      </div>
    );
  }
}

export default Notice;