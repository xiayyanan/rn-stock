import React, { Component } from 'react';
import { SegmentedControl } from 'antd-mobile';
import Header from '../../components/header/header';
import Menu from '../../components/buy/menu';
import Order from '../../components/settle/order';
import api from '@/http/api';
import './settle.less';

class Settle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderData: [
        {
          amount: 1,
          shares: 1800,
          buy_time: "2019-01-9 14:17:21",
          number: "6644062644519045185",
          security: 1250,
          delay_money: 180,
          estop: -1000,
          delay_day: 9
        },
        {
          amount: 2,
          shares: 800,
          buy_time: "2019-01-21 10:48:23",
          number: "6647021331525141457",
          security: 1250,
          delay_money: 20,
          estop: -1000,
          delay_day: 1
        },
        {
          amount: 50,
          shares: 900,
          buy_time: "2019-01-21 11:23:14",
          number: "6648784686183088353",
          security: 100000,
          delay_money: 900,
          estop: -85000,
          delay_day: 1
        },
        {
          amount: 3,
          shares: 2500,
          buy_time: "2019-01-9 14:17:41",
          number: "6644062644519045265",
          security: 5001,
          delay_money: 540,
          estop: -3999,
          delay_day: 9
        },
        {
          amount: 1,
          shares: 900,
          buy_time: "2019-01-18 10:57:04",
          number: "6647021331525140801",
          security: 1250,
          delay_money: 40,
          estop: -1000,
          delay_day: 2
        },
        {
          amount: 3,
          shares: 2900,
          buy_time: "2019-01-16 09:21:17",
          number: "6647021331525159641",
          security: 6000,
          delay_money: 54,
          estop: -5100,
          delay_day: 1
        },
        {
          amount: 5,
          shares: 3900,
          buy_time: "2019-01-14 08:20:36",
          number: "6647021331525112756",
          security: 10000,
          delay_money: 90,
          estop: -7000,
          delay_day: 1
        },
        {
          amount: 10,
          shares: 4900,
          buy_time: "2019-01-11 21:30:41",
          number: "6647021331525136540",
          security: 20000,
          delay_money: 180,
          estop: -1700,
          delay_day: 1
        },
        {
          amount: 20,
          shares: 5900,
          buy_time: "2019-01-09 15:27:31",
          number: "6647021331525178259",
          security: 25000,
          delay_money: 360,
          estop: -20000,
          delay_day: 1
        },
        {
          amount: 30,
          shares: 6900,
          buy_time: "2019-01-07 21:59:06",
          number: "6647021331525117240",
          security: 37500,
          delay_money: 540,
          estop: -30000,
          delay_day: 1
        }
      ],
      stockData: [],
      currentOrder:[],
      selectedIndex: 0
    }
    this.getStock = this.getStock.bind(this);
  }

  getStock() {
    let _self = this;
    let stock_code = ["sh600036", "sh600050", "sh601288", "sz000036", "sh601939", "sz000800", "sh600519", "sz000411", "sz000425", "sz000030"];
    //ml_sh600036
    api.get('sinaApi/list=' + stock_code.join())
      .then(function (response) {
        let arr = response.data.split(";");
        let arrm = [];
        arr.pop();
        arr.forEach((item, index) => {
          let arrs = item.split('"')[1].split(",");
          arrm.push({
            name: arrs[0],
            code: stock_code[index],
            buy_price: parseFloat(arrs[2]).toFixed(2),
            now_price: parseFloat(arrs[3]).toFixed(2),
            loss: (_self.state.orderData[index].shares * (arrs[3] - arrs[2])).toFixed(2),
            amount: _self.state.orderData[index].amount,
            shares: _self.state.orderData[index].shares,
            buy_time: _self.state.orderData[index].buy_time,
            number: _self.state.orderData[index].number,
            security: _self.state.orderData[index].security,
            delay_money: _self.state.orderData[index].delay_money,
            estop: _self.state.orderData[index].estop,
            delay_day: _self.state.orderData[index].delay_day
          })
        })
        _self.setState({
          stockData: _self.state.selectedIndex===0?arrm:arrm.reverse()
        })
        
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  onChangeTime = (e) => {
    if (e.nativeEvent.selectedSegmentIndex === 0) {
      this.setState({
        selectedIndex: 0
      })
    }
    else {
      this.setState({
        selectedIndex: 1
      })
    }
    this.getStock();
  }

  componentDidMount() {
    this.getStock();
    this.timer = setInterval(() => { this.getStock() }, 1000);
    //this.state.timer = setInterval(() => { console.log(x++) }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div id="Settle">
        <Header name="结算" isRed={true}></Header>
        <Menu></Menu>
        <div className="rnui-content">
          <div className="segmented">
            <SegmentedControl
              onChange={this.onChangeTime}
              selectedIndex={this.state.selectedIndex}
              values={['最近7个交易日', '最近30个交易日']}
              tintColor={'#fd0626'}
              style={{ height: '.6rem' }}
            />
          </div>
          <Order stockData={this.state.stockData}></Order>
        </div>
      </div>
    );
  }
}

export default Settle;