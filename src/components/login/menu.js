import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
class Menu extends Component {
  render() {
    const link1 = this.props.menulink[0];
    const link2 = this.props.menulink[1];
    return (
      <div className="login-menu">
        <NavLink to={link1.pagePath}>{link1.name}</NavLink>
        <span className="line">|</span>
        <NavLink to={link2.pagePath}>{link2.name}</NavLink>
      </div>
    );
  }
}
export default Menu;
