import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: "/",
      menuData: [
        {
          name: "点买区",
          pagePath: "/buy"
        },
        {
          name: "点卖区",
          pagePath: "/sell"
        },
        {
          name: "结算区",
          pagePath: "/settle"
        }
      ]
    };
  }

  componentDidMount() {
    const history = createBrowserHistory();
    this.setState({
      currentPath: history.location.pathname
    });
  }

  render() {
    return (
      <div className="buy-menu">
        {this.state.menuData.map((item, index) => (
          <div
            className={
              item.pagePath === this.state.currentPath ? "item active" : "item"
            }
            key={index}
          >
            <NavLink to={item.pagePath} className="tap">
              {item.name}
            </NavLink>
          </div>
        ))}
      </div>
    );
  }
}

export default Menu;
