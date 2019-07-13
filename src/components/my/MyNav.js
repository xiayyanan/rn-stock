import React, { Component } from 'react';
import NavItem from './NavItem'
class MyNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItem: [
                {
                    name: "交易记录",
                    pagePath: '/myRunning'
                },
                {
                    name: "更多设置",
                    pagePath: '/mySet'
                },
                {
                    name: "我的客服",
                    pagePath: '/myServices'
                }
            ]
        }
    }
    render() {
        const state = this.state;
        return (
            <ul className="my-nav">
                {
                    state.navItem.map((item, index) => (
                        <li className="item" key={index}>
                            <NavItem name={item.name} pagePath={item.pagePath}></NavItem>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
export default MyNav;