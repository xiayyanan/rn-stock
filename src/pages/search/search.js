import { SearchBar } from "antd-mobile";
import React, { Component } from "react";
import Header from "@/components/header/header";
import Stock from "@/components/search/stock";
import "./search.less";
import api from "@/http/api";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockData: [],
      isNodata: false,
      titles: "以下为历史查询记录"
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
    api
      .get("sinaApi/list=" + stock_code.join())
      .then(function(response) {
        let arr = response.data.split(";");
        let arrm = [];
        arr.pop();
        arr.forEach((item, index) => {
          let arrs = item.split('"')[1].split(",");
          arrm.push({
            name: arrs[0],
            code: stock_code[index]
          });
        });
        _self.setState({
          stockData: arrm,
          isNodata: false,
          titles: "以下为历史查询记录"
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  searchStock = str => {
    if (str.length <= 0) {
      this.getStock();
      return false;
    }
    let _self = this;
    let type = "type=111";
    let key = "key=" + str;
    let name = "name=suggestdata";
    let args = [type, key, name];
    api
      .get("sinasApi/" + args.join("&"))
      .then(function(response) {
        let arr = response.data
          .split("=")[1]
          .split('"')[1]
          .split(";");
        let arrm = [];
        if (arr.length <= 1) {
          _self.setState({
            stockData: arrm,
            isNodata: true,
            isTitle: false
          });
          return false;
        }
        arr.forEach(item => {
          let arrs = item.split(",");
          if (arrs[3].length === 8) {
            arrm.push({
              name: arrs[0],
              code: arrs[3]
            });
          }
        });
        _self.setState({
          stockData: arrm,
          isNodata: false,
          titles: "以下为查询记录"
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  onChange = value => {
    this.searchStock(value);
  };

  componentDidMount() {
    this.getStock();
  }

  render() {
    return (
      <div id="Search">
        <Header name="选择股票" isRed={true} />
        <div className="rnui-content">
          <SearchBar
            placeholder="输入股票代码/名称/拼音"
            onChange={this.onChange}
            ref={ref => (this.manualFocusInst = ref)}
            showCancelButton
          />
          <Stock
            isNodata={this.state.isNodata}
            titles={this.state.titles}
            stockData={this.state.stockData}
          />
        </div>
      </div>
    );
  }
}

export default Search;
