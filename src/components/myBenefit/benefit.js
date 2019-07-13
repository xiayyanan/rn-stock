import React, { Component } from 'react';
class Benefit extends Component {
    render() {
        const benefit = this.props.benefit;
        return (
            <div className="benefit-bg">
                <div className="benefit">
                    <p className="title">总收益(元)</p>
                    <p className="money">{benefit.money}</p>
                    <div className="yesterday">
                        <div className="yesterday-bg">
                            <span>昨日收益</span>
                            <span className="value red">{benefit.yesterday}</span>
                            <span>元</span>
                        </div>
                    </div>
                    <ul className="account">
                        {
                            benefit.account.map((item, index) => (
                                <li className="item" key={index}>
                                    <p className="value red">{item.value}</p>
                                    <p className="name">{item.name}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Benefit;