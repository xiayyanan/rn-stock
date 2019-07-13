import React, { Component } from 'react';
import Header from '@/components/header/header';
import Running from '@/components/myRunning/running'
import './myRunning.less';
class MyRunning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            runningData: [
                {
                    month: "2018年09月",
                    counts: "提现 491.82 收入 698.44",
                    listData: [{
                        type: 0,
                        name: "提现-到支付宝(182**9808)",
                        values: "-400.00",
                        time: "09月22日 11:30"
                    },
                    {
                        type: 1,
                        name: "获得佣金-分享好友(为**爱)",
                        values: "+20.00",
                        time: "09月22日 11:30"
                    },
                    {
                        type: 2,
                        name: "购买商品",
                        values: "-200.00",
                        time: "09月22日 11:30"
                    }
                    ]
                },
                {
                    month: "2018年10月",
                    counts: "提现 491.82 收入 698.44",
                    listData: [{
                        type: 0,
                        name: "提现-到支付宝(182**9808)",
                        values: "-400.00",
                        time: "10月22日 11:30"
                    },
                    {
                        type: 1,
                        name: "获得佣金-分享好友(为**爱)",
                        values: "+20.00",
                        time: "10月22日 11:30"
                    },
                    {
                        type: 2,
                        name: "购买商品",
                        values: "-200.00",
                        time: "10月22日 11:30"
                    }
                    ]
                },
                {
                    month: "2018年11月",
                    counts: "提现 491.82 收入 698.44",
                    listData: [{
                        type: 0,
                        name: "提现-到支付宝(182**9808)",
                        values: "-400.00",
                        time: "11月22日 11:30"
                    },
                    {
                        type: 1,
                        name: "获得佣金-分享好友(为**爱)",
                        values: "+20.00",
                        time: "11月22日 11:30"
                    },
                    {
                        type: 2,
                        name: "购买商品",
                        values: "-200.00",
                        time: "11月22日 11:30"
                    }
                    ]
                },
                {
                    month: "2018年12月",
                    counts: "提现 491.82 收入 698.44",
                    listData: [{
                        type: 0,
                        name: "提现-到支付宝(182**9808)",
                        values: "-400.00",
                        time: "12月22日 11:30"
                    },
                    {
                        type: 1,
                        name: "获得佣金-分享好友(为**爱)",
                        values: "+20.00",
                        time: "12月22日 11:30"
                    },
                    {
                        type: 2,
                        name: "购买商品",
                        values: "-200.00",
                        time: "12月22日 11:30"
                    }
                    ]
                },
                {
                    month: "2019年01月",
                    counts: "提现 491.82 收入 698.44",
                    listData: [{
                        type: 0,
                        name: "提现-到支付宝(182**9808)",
                        values: "-400.00",
                        time: "01月22日 11:30"
                    },
                    {
                        type: 1,
                        name: "获得佣金-分享好友(为**爱)",
                        values: "+20.00",
                        time: "01月22日 11:30"
                    },
                    {
                        type: 2,
                        name: "购买商品",
                        values: "-200.00",
                        time: "01月22日 11:30"
                    }
                    ]
                }
            ]
        }
    }
    render() {
        return (
            <div id="MyRunning">
                <Header name="交易记录" isNoline={true}></Header>
                <div className="rnui-content">
                    <Running runningData={this.state.runningData}></Running>
                </div>
            </div>
        )
    }
}
export default MyRunning;