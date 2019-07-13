import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import Sideslip from '@/components/sideslip';
const { sideslipShow } = Sideslip;
class Order extends Component {
  openDetail(id) {
    let contentText = this.props.stockData.map((item, index) => {
      if (index === id) {
        return <div className="sell-detail" key={index}>
          <div className="item">
            <span className="name">交易本金</span>
            <span className="dsp">{item.amount}万元</span>
          </div>
          <div className="item">
            <span className="name">交易数量</span>
            <span className="dsp">{item.shares}股</span>
          </div>
          <div className="item">
            <span className="name">成交时间</span>
            <span className="dsp">{item.buy_time}</span>
          </div>
          <div className="item">
            <span className="name">卖出时间</span>
            <span className="dsp">{item.buy_time}</span>
          </div>
          <div className="item">
            <span className="name">买入价格</span>
            <span className="dsp">{item.buy_price}</span>
          </div>
          <div className="item">
            <span className="name">卖出价格</span>
            <span className="dsp">{item.now_price}</span>
          </div>
          <div className="item">
            <span className="name">交易盈亏</span>
            <span className="dsp">{item.loss}</span>
          </div>
          <div className="item">
            <span className="name">履约保证金</span>
            <span className="dsp">{item.security}</span>
          </div>
        </div>
      }
      return false;
    })
    sideslipShow({ contentText: contentText, title: "交易明细"})
  }

  render() {
    return (
      <ul className="settle-order">
        {
          this.props.stockData.map((item, index) => (
            <li className="item" key={index}>
              <div className="info">
                <span className="time">{item.buy_time}</span>
                <span className="number">单号：{item.number}</span>
              </div>
              <div className="hd">
                <div className="stock">
                  <p className="name">{item.name}</p>
                  <p className="code">{item.code}</p>
                </div>
                <div className="counts">
                  <p className="price">交易盈亏：<b className={item.loss > 0 ? "red" : "green"}>{item.loss}</b>元</p>
                  <p className="price">盈利分配：<b className={item.loss > 0 ? "red" : "green"}>{item.loss > 0 ? item.loss : '0.00'}</b>元</p>
                  <p className="amount">金额：{item.amount}万 {item.shares}股(可用)</p>
                </div>
                <div className="btn-box">
                  <Button className="btns" onClick={this.openDetail.bind(this, index)}>查看详情</Button>
                </div>
              </div>

            </li>
          ))
        }
      </ul>
    );
  }
}

export default Order;
