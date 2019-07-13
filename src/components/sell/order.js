import React, { Component } from 'react';
import { Modal, Button } from 'antd-mobile';
import Sideslip from '@/components/sideslip';
const { sideslipShow } = Sideslip;
const alert = Modal.alert;
const prompt = Modal.prompt;
class Order extends Component {
  openDetail(id) {
    let contentText = this.props.stockData.map((item, index) => {
      if (index === id) {
        return <div className="sell-detail" key={index}>
          <div className="item">
            <span className="name">买入时间</span>
            <span className="dsp">{item.buy_time}</span>
          </div>
          <div className="item">
            <span className="name">交易单号</span>
            <span className="dsp">{item.number}</span>
          </div>
          <div className="item">
            <span className="name">保证金</span>
            <span className="dsp">{item.security}</span>
          </div>
          <div className="item">
            <span className="name">递延费</span>
            <span className="dsp">{item.delay_money}</span>
          </div>
          <div className="item">
            <span className="name">止损线</span>
            <span className="dsp">{item.estop}</span>
          </div>
          <div className="item">
            <span className="name">递延天数</span>
            <span className="dsp">{item.delay_day}</span>
          </div>
        </div>
      }
      return false;
    })
    sideslipShow({ contentText: contentText, title: "查看详情" })
  }

  render() {
    return (
      <ul className="sell-order">
        {
          this.props.stockData.map((item, index) => (
            <li className="item" key={index}>
              <div className="hd">
                <div className="stock">
                  <p className="name">{item.name}</p>
                  <p className="code">{item.code}</p>
                </div>
                <div className="counts">
                  <p className="price">买入价：{item.buy_price}元</p>
                  <p className="price">当前价：{item.now_price}元</p>
                  <p className="amount">金额：{item.amount}万 {item.shares}股(可用)</p>
                </div>
                <div className={item.loss > 0 ? "loss red" : "loss green"}>{item.loss}</div>
              </div>
              <div className="btn-box">
                <Button className="btns" onClick={this.openDetail.bind(this, index)}>查看详情</Button>
                <Button className="btns" onClick={() =>
                  alert('卖出', '确定卖出吗？', [
                    { text: '取消', onPress: () => console.log('cancel') },
                    { text: '确定', onPress: () => console.log('ok') },
                  ])
                }>卖出</Button>
                <Button className="btns" onClick={() => prompt('追加保证金', '请输入金额', [
                  { text: '取消', onPress: () => console.log('cancel') },
                  { text: '确定', onPress: () => console.log('ok') },
                ], 'default', null, ['请输入'])}>追加保证金</Button>
              </div>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Order;
