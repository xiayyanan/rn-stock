import React, { Component } from 'react';
import Header from '../../components/header/header';
import Funds from '@/components/myFunds/funds';
import { Button } from 'antd-mobile';
import {withRouter } from 'react-router';
import './myFunds.less';
class MyFunds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            funds: 2.74
        }
    }

    toPath = (path) => {
        this.props.history.push(path)
    }

    componentDidMount() {
        document.body.style.background = "#ffffff";
        document.querySelector(".rnui-content").style.background = "#ffffff";
    }

    componentWillUnmount() {
        document.body.removeAttribute("style");
        document.querySelector(".rnui-content").removeAttribute("style");
    }
    render() {
        return (
            <div id="MyFunds">
                <Header name="账户资产" isNoline={true}></Header>
                <div className="rnui-content">
                    <Funds funds={this.state.funds}></Funds>
                    <div className="my-funds-button">
                        <div className="btn-box">
                            <Button type="warning" onClick={() => { this.toPath('/recharge') }}>充值</Button>
                        </div>
                        <div className="btn-box">
                            <Button onClick={() => { this.toPath('/withdraw') }}>提现</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(MyFunds);

