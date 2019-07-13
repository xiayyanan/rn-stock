import React, { Component } from 'react';
import Header from '@/components/header/header';
import Bank from '@/components/myBank/bank';
import BankAdd from '@/components/myBank/bankAdd';
import './myBank.less';
class MyBank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bankData: [
                {
                    name: "工商银行",
                    types:"储蓄卡",
                    logo: require('../../static/images/bank/gsyh.png'),
                    number: '**** 4277',
                    limit: "每日支付限额50000元"
                },
                {
                    name: "兴业银行",
                    types:"储蓄卡",
                    logo: require('../../static/images/bank/xyyh.png'),
                    number: '**** 2213',
                    limit: "每日支付限额50000元"
                }
            ]
        }
    }
    render() {
        return (
            <div id="MyBank">
                <Header name="我的银卡"></Header>
                <div className="rnui-content">
                    <Bank bankData={this.state.bankData}></Bank>
                    <BankAdd></BankAdd>
                </div>
            </div>
        )
    }
}
export default MyBank;