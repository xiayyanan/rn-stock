import React, { Component } from 'react';
class Spread extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ewm: require('../../static/images/ewm.png')
        }
    }
    render() {
        return (
            <div className="spread">
                <div className="title red">代理招募中，期待你的加入！</div>
                <div className="bt c2">保存下面二维码发送给朋友</div>
                <div className="ewm"><img src={this.state.ewm} alt=''></img></div>
                <div className="code">我的邀请码：<b className="red">UJRXVS</b></div>
                <button className="btn btn-outlined">邀请好友</button>
            </div>
        )
    }
}
export default Spread;