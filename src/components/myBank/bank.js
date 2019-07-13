import React, { Component } from 'react';
class Bank extends Component {
    render() {
        const bankData = this.props.bankData;
        return (
            <ul className="bank">
                {
                    bankData.map((item, index) => (
                        <li className="item" key={index}>
                            <div className="info">
                                <div className="logo-img">
                                    <img src={item.logo} alt=""></img>
                                </div>
                                <div className="text">
                                    <p className="name">{item.name}</p>
                                    <p className="types">{item.types}</p>
                                </div>
                                <div className="number">{item.number}</div>
                            </div>
                            <div className="opns">
                                <div className="dsp">{item.limit}</div>
                                <div className="del">删除</div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
export default Bank;