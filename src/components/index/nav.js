import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      idxNav:[
        {
          name:"A股点买",
          iconPath:require('../../static/images/idxNav-1.png'),
          pagePath:"/buy"
        },
        {
          name:"点买规则",
          iconPath:require('../../static/images/idxNav-2.png'),
          pagePath:"/rule"
        },
        {
          name:"股市资讯",
          iconPath:require('../../static/images/idxNav-3.png'),
          pagePath:"/news"
        },
        {
          name:"推广赚钱",
          iconPath:require('../../static/images/idxNav-4.png'),
          pagePath:"/mySpread"
        }
      ]
    }
  }
  render() {
    return (
      <ul className="idxNav">
        {
          this.state.idxNav.map((item,index)=>(
            <li className="item" key={index}>
              <NavLink to={item.pagePath} className="tap">
                <img src={item.iconPath} className="img-icon" alt="" />
                <p className="name">{item.name}</p>
              </NavLink>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Nav;