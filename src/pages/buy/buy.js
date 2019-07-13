import React, { Component } from 'react';
import Header from '../../components/header/header';
import TabBar from '../../components/tabBar/tabBar';
import Menu from '../../components/buy/menu';
import Stock from '../../components/buy/stock';
import Buys from '../../components/buy/buys';
import Order from '../../components/buy/order';
import api from '@/http/api';
import './buy.less';

class Buy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stockData: {},
      balance: (454740).toFixed(2),
      payAmount:(0.00).toFixed(2),
      buysTimes: 10,
      buysData:[]
    }
    this.getStock = this.getStock.bind(this);
    this.setBuysData = this.setBuysData.bind(this);
    this.getPayAmount = this.getPayAmount.bind(this);
  }

  getPayAmount(value){
    let _self=this;
    setTimeout(()=> {
      _self.setState({
        payAmount:value.toFixed(2)
      })
    },100);
    
  }

  setBuysData() {
    let _self=this;
    [1, 2, 3, 5, 10, 20, 30, 50].forEach((item, index) => {
      _self.state.buysData.push({
        active:index===0?true:false,
        amount: item,
        time: "T+1|D",
        eprofit: item * 0.5 * 10000,
        funds_buy: Math.round(index * 0.1 * 10000 + 900),
        funds_rate: 97.66,
        estop: [-Math.round(item * 0.1 * 10000), -Math.round((item * 0.1 + item * 0.1 / 3) * 10000), -Math.round((item * 0.1 + item * 0.1 * 0.7) * 10000)],
        security: [Math.round(item * 0.125 * 10000), Math.round((item * 1 / 6) * 10000), Math.round((item * 0.2) * 10000)],
        delay_condition: [-Math.round(item * (0.125 - 0.06) * 10000), -Math.round(item * (1 / 6 - 0.06) * 10000), -Math.round(item * (0.2 - 0.06) * 10000)],
        cost: 45 * item,
        delay_money: 18 * item
      })
    });
  }

  getStock() {
    let _self = this;
    //ml_sh600036
    api.get('sinaApi/list=sh600036')
      .then(function (response) {
        let str = response.data;
        let arr = str.split('"')[1].split(",");
        let quotes = parseFloat(arr[3]) - parseFloat(arr[2]);
        let isQuotes = quotes > 0 ? true : false;
        _self.setState({
          stockData: {
            "name": arr[0],
            "number": "sh600036",
            "price": parseFloat(arr[3]).toFixed(2),
            "quotes": quotes.toFixed(2),
            "quotesp": ((quotes / parseFloat(arr[2])) * 100).toFixed(2),
            "isQuotes": isQuotes
          }
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  componentDidMount() {
    document.body.style.background = "#ffffff";
    document.querySelector('.rnui-content').style.background = "#ffffff";
    this.getStock();
    this.setBuysData();
    this.timer = setInterval(() => { this.getStock(); }, 1000);
  }
  componentWillUnmount() {
    document.body.removeAttribute("style");
    document.querySelector('.rnui-content').removeAttribute("style");
    clearTimeout(this.timer)
  }
  render() {
    return (
      <div id="Buy">
        <Header name="点买" isRed={true}></Header>
        <TabBar></TabBar>
        <Menu></Menu>
        <Order payAmount={this.state.payAmount} balance={this.state.balance}></Order>
        <div className="rnui-content">
          <Stock stockData={this.state.stockData}></Stock>
          <Buys getPayAmount = {value => this.getPayAmount(value)} buysData={this.state.buysData} buysTimes={this.state.buysTimes}></Buys>
        </div>
      </div>
    );
  }
}

export default Buy;