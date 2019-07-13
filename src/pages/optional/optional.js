import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Header from "@/components/header/header";
import TabBar from "@/components/tabBar/tabBar";
import Quotes from "@/components/index/quotes";
import Stock from "@/components/optional/stock";
import Title from "@/components/optional/title";
import "./optional.less";
import api from "@/http/api";
class Optional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockData: []
    };
    this.getStock = this.getStock.bind(this);
  }
  getStock() {
    let _self = this;
    let stock_code = [
      "sh600036",
      "sh600050",
      "sh601288",
      "sz000036",
      "sh601939",
      "sz000800",
      "sh600519",
      "sz000411",
      "sz000425",
      "sz000030"
    ];
    //ml_sh600036
    api
      .get("sinaApi/list=" + stock_code.join())
      .then(function(response) {
        let arr = response.data.split(";");
        let arrm = [];
        arr.pop();
        arr.forEach((item, index) => {
          let arrs = item.split('"')[1].split(",");
          let quotes = parseFloat(arrs[3]) - parseFloat(arrs[2]);
          arrm.push({
            name: arrs[0],
            code: stock_code[index],
            price: parseFloat(arrs[3]).toFixed(2),
            quotesp: ((quotes / parseFloat(arrs[2])) * 100).toFixed(2),
            pagePath: "/buy"
          });
        });
        _self.setState({
          stockData: arrm
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  componentDidMount() {
    this.getStock();
    this.timer = setInterval(() => {
      this.getStock();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div id="Optional">
        <Header name="自选" isRed={true}>
          <NavLink to="/search" className="rnui-header-search" />
        </Header>
        <TabBar />
        <div className="rnui-content">
          <div className="optional-quotes">
            <Quotes />
          </div>
          <Title />
          <Stock stockData={this.state.stockData} />
        </div>
      </div>
    );
  }
}

export default Optional;
