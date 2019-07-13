import React, { Component } from 'react';
class Stock extends Component {
  render() {
    return (
      <div className="buy-stock">
        <div className="bs-left">
          <p className="name">{this.props.stockData.name}</p>
          <p className="number">{this.props.stockData.number}</p>
        </div>
        <div className={this.props.stockData.isQuotes ? 'bs-right red' : 'bs-right green'}>
          <p className="price">
            <span>{this.props.stockData.price}</span>
            <span className="arrow"></span>
          </p>
          <p className="quotes">
            <span>{this.props.stockData.quotes}</span>
            <span className="spacep"></span>
            <span>{this.props.stockData.quotesp}%</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Stock;
