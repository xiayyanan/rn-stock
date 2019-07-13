import React, { Component } from 'react';
class Buys extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amountIndex: 0,
      estopIndex: 0
    }
    this.changeAmount = this.changeAmount.bind(this);
    this.changeEstop = this.changeEstop.bind(this);

  }
  changeAmount(i) {
    this.setState({
      amountIndex: i,
      estopIndex: 0
    })
    setTimeout(() => { this.setPayAmount() }, 10);
  }
  changeEstop(i) {
    this.setState({
      estopIndex: i
    })
    setTimeout(() => { this.setPayAmount() }, 10);
  }

  setPayAmount() {
    let value = 0;
    let _self = this;
    this.props.buysData.forEach((item, index) => {
      if (index === _self.state.amountIndex) {
        value = item.cost + item.security[_self.state.estopIndex];
      }
    })
    _self.props.getPayAmount(value);
  }
  componentDidMount() {
    setTimeout(() => { this.setPayAmount() }, 10);
  }

  render() {
    return (
      <div className="buys">
        <div className="buysTit">
          <h2 className="name">点买金额</h2>
          <div className="times red">今天还可以点买<span className="num">{this.props.buysTimes}</span>次</div>
        </div>
        <ul className="buysAmount">
          {
            this.props.buysData.map((item, index) => (
              <li className={index === this.state.amountIndex ? "item active" : "item"} key={index} onClick={this.changeAmount.bind(this, index)}>
                <span className="tap">{item.amount}万</span>
              </li>
            ))
          }
        </ul>

        {
          this.props.buysData.map((item, index) => (
            index === this.state.amountIndex &&
            <div key={index}>
              <div className="buysItem">
                <span className="name">资金使用率</span>
                <div className="text">
                  可买入<span className="red">{item.funds_buy}</span>股，资金利用率<span className="red">{item.funds_rate}%</span>
                </div>
              </div>
              <div className="buysItem">
                <span className="name">持 仓 时 间</span>
                <div className="text"><span className="red">{item.time}</span></div>
              </div>
              <div className="buysItem">
                <span className="name">触 发 止 盈</span>
                <div className="text"><span className="red">{item.eprofit}</span></div>
              </div>
              <div className="buysItem">
                <span className="name">触 发 止 损</span>
              </div>
              <ul className="buysAmount">
                {
                  item.estop.map((itemsub, indexb) => (
                    <li className={indexb === this.state.estopIndex ? "item active" : "item"} key={indexb} onClick={this.changeEstop.bind(this, indexb)}>
                      <span className="tap">{itemsub}</span>
                    </li>
                  ))
                }
              </ul>
              <div className="buysItem">
                <span className="name">交易综合费</span>
                <div className="text"><span className="red">{item.cost}</span>元（含前两个交易日的费用）</div>
              </div>
              <div className="buysItem">
                <span className="name">履约保证金</span>
                <div className="text"><span className="red">{item.security[this.state.estopIndex]}</span>元</div>
              </div>
              <div className="buysItem">
                <span className="name">递 延 条 件</span>
                <div className="text">浮动盈亏大于<span className="red">{item.delay_condition[this.state.estopIndex]}</span></div>
              </div>
              <div className="buysItem">
                <span className="name">递 延 费 用</span>
                <div className="text"><span className="red">{item.delay_money}</span>元/天</div>
              </div>
            </div>
          ))
        }

      </div>
    );
  }
}

export default Buys;
