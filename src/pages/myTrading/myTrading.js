import React, { Component } from 'react';
import Header from '@/components/header/header';
import Trading from '@/components/myTrading/trading';
import TradingTitle from '@/components/myTrading/tradingTitle';
import './myTrading.less';
class MyTrading extends Component {
    render() {
        return (
            <div id="myTrading">
                <Header name="我的交易" isRed={true}></Header>
                <TradingTitle></TradingTitle>
                <div className="rnui-content">
                    <Trading></Trading>
                </div>
            </div>
        )
    }
}
export default MyTrading;