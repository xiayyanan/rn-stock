import React,{Component} from 'react';
class TradingTitle extends Component{
    render(){
        return(
            <div className="trading-title">
                <div className="item">股票名称</div>
                <div className="item">持股状态</div>
                <div className="item">当前价格</div>
                <div className="item">当跌幅</div>
            </div>
        )
    }
}
export default TradingTitle;