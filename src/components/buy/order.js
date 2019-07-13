import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: '/',
    }
  }

  render() {
    return (
      <div className="buy-order">
        <div className="texts">
          <p className="amount">支付金额：<span className="red">¥{this.props.payAmount}</span></p>
          <p className="balance">可用余额：¥{this.props.balance}</p>
        </div>
        <div className="btn-box">
          <NavLink to="order" className="btn">点买</NavLink>
        </div>
      </div>
    );
  }
}

export default Order;
