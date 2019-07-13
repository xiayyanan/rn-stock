import React, { Component } from 'react';
class Running extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeData: [
                {
                    imgicon: require("../../static/images/zjmx-tixian.png")
                },
                {
                    imgicon: require("../../static/images/zjmx-yongjin.png")
                },
                {
                    imgicon: require("../../static/images/zjmx-gmsp.png")
                }
            ]
        }
    }
    render() {
        const runningData = this.props.runningData;
        const typeData = this.state.typeData;
        return (
            <ul className="myRunning">
                {
                    runningData.map((item, index) => (
                        <li className="item" key={index}>
                            <div className="running-time">
                                <p className="date">{item.month}</p>
                                <p className="info">{item.counts}</p>
                            </div>
                            <ul className="running-list">
                                {
                                    item.listData.map((itemsub,indexb) => (
                                        <li className="itemsub" key={indexb}> 
                                            <div className="flag"><img src={typeData[itemsub.type].imgicon} alt='' /></div>
                                            <div className="content">
                                                <p className="hd">
                                                    <span className="name">{itemsub.name}</span>
                                                    <span className={`value ${itemsub.type === 1 ? "red" : ""}`}>{itemsub.values}</span>
                                                </p>
                                                <p className="time">{itemsub.time}</p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
export default Running;