import React, { Component } from "react";
import { Toast } from 'antd-mobile';
class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: null
    };
  }

  static defaultProps = {
    isNodata: false,
    titles: '以下为历史查询记录'
  }
  onAddGrey = index => {
    this.setState({
      currentIndex: index
    });
  };
  onRemoveGrey() {
    this.setState({
      currentIndex: null
    });
  };
  successToast() {
    Toast.success('已加入自选', 1);
  };

  render() {
    return (
      <div className="search-stock">
        {this.props.isNodata === true && <h1 className="search-stock-nodata">暂无数据</h1>}
        {this.props.isNodata === false && <h1 className="search-stock-title">{this.props.titles}</h1>}
        {this.props.isNodata === false && <ul className="search-stock-list">
          {this.props.stockData.map((item, index) => (
            <li
              className={
                this.state.currentIndex === index ? "item active" : "item"
              }
              key={index}
              onTouchStart={this.onAddGrey.bind(this, index)}
              onTouchEnd={this.onRemoveGrey.bind(this)}
            >
              <div className="name">{item.name}</div>
              <div className="code">{item.code}</div>
              <div className="btn-box">
                <div onTouchStart={this.successToast} className="add" />
              </div>
            </li>
          ))}
        </ul>}
      </div>
    );
  }
}

export default Stock;
