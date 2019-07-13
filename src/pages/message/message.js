import React, { Component } from 'react';
import Header from '@/components/header/header';
import '@/http/mock.js';
import './message.less'
class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageData: []
        }
        this.$api({
            method: 'post',
            url: '/message'
        }).then((response) => {
            let data = response.data.message.messageData;
            this.setState({
                messageData: data
            })
        }).catch(function (error) {
            console.log(error);
        })

    }

    render() {
        const messageData = this.state.messageData;
        return (
            <div id="Message">
                <Header name="消息通知" isNoline={true}></Header>
                <div className="rnui-content">
                    <ul className="message-list">
                        {
                            messageData.map((item, index) => (
                                <li className="item" key={index}>
                                    <div className="tap">
                                        <div className="content">
                                            <h2 className="name">{item.name}</h2>
                                            <div className="dsp">{item.dsp}</div>
                                            <p className="date">{item.time}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
export default Message;