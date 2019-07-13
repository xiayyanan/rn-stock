import React, { Component } from 'react';
import Header from '@/components/header/header';
import Coupon from '@/components/myCoupon/coupon'
import MenuBar from '@/components/common/menuBar'
import './myCoupon.less';
class MyCoupon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            couponData: [
                {
                    name: "新人注册",
                    values: "20",
                    limit: "限定使用比例：0.80%",
                    time: "2017.04.01 - 2017.04.15",
                    received: false
                },
                {
                    name: "认证升级",
                    values: "30",
                    limit: "限定使用比例：0.80%",
                    time: "2017.04.01 - 2017.04.15",
                    received: false
                },
                {
                    name: "注册有礼",
                    values: "50",
                    limit: "限定使用比例：0.80%",
                    time: "2017.04.01 - 2017.04.15",
                    received: false
                },
                {
                    name: "持仓获利",
                    values: "100",
                    limit: "限定使用比例：0.80%",
                    time: "2017.04.01 - 2017.04.15",
                    received: false,
                    expired: true
                },
                {
                    name: "牛人榜",
                    values: "200",
                    limit: "限定使用比例：0.80%",
                    time: "2017.04.01 - 2017.04.15",
                    received: false
                }
            ],
            menuData: [
                {
                    name: "未使用",
                    pagePath: "/myCoupon"
                },
                {
                    name: "已使用",
                    pagePath: "/myCoupon2"
                },
                {
                    name: "已过期",
                    pagePath: "/myCoupon3"
                }
            ]
        }
    }
    render() {
        return (
            <div id="myCoupon">
                <Header name="代金券" isNoline={true}></Header>
                <MenuBar menuData={this.state.menuData}></MenuBar>
                <div className="rnui-content">
                    <Coupon coupon={this.state.couponData}></Coupon>
                </div>
            </div>
        )
    }
}

export default MyCoupon;