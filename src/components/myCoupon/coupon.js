import React, { Component } from 'react';
class Coupon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expiredImg: require('../../static/images/expired.png')
        }
    }
    render() {
        const coupon = this.props.coupon;
        const state = this.state;
        return (
            <ul className="myCoupon">
                {
                    coupon.map((item, index) => (
                        <li className={`item ${item.expired ? 'fail' : ''}`} key={index}>
                            <div className="content">
                                <p className="bt">{item.name}</p>
                                <p className="limit">{item.limit}</p>
                                <p className="time">{item.time}</p>
                            </div>
                            <div className="value">
                                {item.expired === true && <img className="status" src={state.expiredImg} alt='' />}
                                <p className="money">
                                    <span className="unit">¥</span>
                                    <span>{item.values}</span>
                                </p>
                            </div>
                        </li>
                    ))
                }

            </ul>
        )
    }
}

export default Coupon;