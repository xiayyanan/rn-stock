import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Stock extends Component {
  render() {
    return (
      <ul className="optional-stock">
        {this.props.stockData.map((item, index) => (
          <li className="item" key={index}>
            <NavLink to={item.pagePath} className="tap">
              <div className="stock">
                <p className="name">
                  <span className="stocks">{item.code.substring(0, 2)}</span>
                  <span>{item.name}</span>
                </p>
                <p className="code">{item.code}</p>
              </div>
              <div className={item.quotesp > 0 ? "price red" : "price green"}>
                {item.price}
              </div>
              <div
                className={item.quotesp > 0 ? "quotesp red" : "quotesp green"}
              >
                {item.quotesp}%
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }
}

export default Stock;
