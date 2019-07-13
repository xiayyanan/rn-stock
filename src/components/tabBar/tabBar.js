import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './tabBar.less';
class TabBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPath: '/',
      tabList: [
        {
          name: "首页",
          iconPath: require('../../static/images/tabBar-1.png'),
          iconPathSelected: require('../../static/images/tabBar-1-active.png'),
          pagePath: "/"
        },
        {
          name: "点买",
          iconPath: require('../../static/images/tabBar-2.png'),
          iconPathSelected: require('../../static/images/tabBar-2-active.png'),
          pagePath: "/buy"
        },
        {
          name: "自选",
          iconPath: require('../../static/images/tabBar-3.png'),
          iconPathSelected: require('../../static/images/tabBar-3-active.png'),
          pagePath: "/optional"
        },
        {
          name: "我的",
          iconPath: require('../../static/images/tabBar-4.png'),
          iconPathSelected: require('../../static/images/tabBar-4-active.png'),
          pagePath: "/my"
        }
      ]
    }
  }

  componentDidMount() {
    const history = createBrowserHistory();
    this.setState({
      currentPath: history.location.pathname
    });
  }

  render() {
    return (
      <div className="rnui-footer">
        <div className="tabBar">
          {
            this.state.tabList.map((item, index) => (
              <div className={item.pagePath === this.state.currentPath ? 'item active' : 'item'} key={index}>
                <NavLink to={item.pagePath} className="tap">
                  <img src={item.pagePath === this.state.currentPath ? item.iconPathSelected : item.iconPath} className="img-icon" alt="" />
                  <p className="name">{item.name}</p>
                </NavLink>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default TabBar;
