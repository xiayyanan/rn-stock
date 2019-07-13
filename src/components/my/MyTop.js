import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
class MyTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultAvatar:require("../../static/images/default-avatar.png"),
            countsMenu: [
                {
                    name: "账户资产",
                    value: 2.74,
                    pagePath: "/myFunds"
                },
                {
                    name: "代金券",
                    value: 10,
                    pagePath: "/myCoupon"
                },
                {
                    name: "我的会员",
                    value: 2466,
                    pagePath: "/myMember"
                }
            ],

            navMenu: [
                {
                    name: "我的业绩",
                    imgPath: require("../../static/images/userNav-1.png"),
                    pagePath: "/myBenefit"
                },
                {
                    name: "我的交易",
                    imgPath: require("../../static/images/userNav-2.png"),
                    pagePath: "/myTrading"
                },
                {
                    name: "推广赚钱",
                    imgPath: require("../../static/images/userNav-3.png"),
                    pagePath: "/mySpread"
                },
                {
                    name: "银行卡",
                    imgPath: require("../../static/images/userNav-4.png"),
                    pagePath: "/myBank"
                }
            ]
        }
    }
    render() {
        return (
            <div className="my-top-bg clearfix">
                <div className="my-top">

                    <div className="my-info">
                        <div className="avatar">
                            <img src={this.props.userAvatar?this.props.userAvatar:this.state.defaultAvatar} alt=''></img>
                        </div>
                        <div className="info">
                            <p className="name">Hi,{this.props.userName}</p>
                            <div className="ident">
                                <NavLink to="/myAuth" className={`labels ${this.props.userAuth === true ? "yes" : 'arrow'}`}>
                                    {this.props.userAuth ? '已认证' : "未实名"}
                                </NavLink>
                            </div>
                        </div>
                        <NavLink to="/myInfo" className="goset">设置</NavLink>
                    </div>

                    <ul className="my-counts">
                        {
                            this.state.countsMenu.map((item, index) => (
                                <li className="item" key={index}>
                                    <NavLink to={item.pagePath} className="tap">
                                        <p className="value">{item.value}</p>
                                        <p className="name">{item.name}</p>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <ul className="user-nav">
                    {
                        this.state.navMenu.map((item, index) => (
                            <li className="item" key={index}>
                                <NavLink to={item.pagePath} className="tap">
                                    <img className="img-icon" src={item.imgPath} alt=''></img>
                                    <p className="name">{item.name}</p>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>

            </div>
        );
    }
}
const mapStateToProps = state => ({
    userName: state.posts.user.name,
    userAvatar: state.posts.user.avatar,
    userAuth: state.posts.user.isAuth
})
export default connect(mapStateToProps)(MyTop);