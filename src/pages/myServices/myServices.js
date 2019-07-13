import React, { Component } from 'react';
import Header from '@/components/header/header';
import { NavItem } from '@/components/common/navItem';
import './myServices.less'
class MyServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kefxPath: require('../../static/images/icon-kfrx.png'),
            qqPath: require('../../static/images/icon-qq.png'),
            weixinPath: require('../../static/images/icon-weixin.png'),
            ewm:require('../../static/images/ewm.png')
        }
    }
    render() {
        return (
            <div id="MyServices">
                <Header name="我的客服"></Header>
                <div className="rnui-content">
                    <ul className="set-nav">
                        <li className="item">
                            <NavItem
                                pagePath="tel:4008799892"
                                name="客服热线"
                                dsp="4008799892"
                                iconPath={this.state.kefxPath}
                            ></NavItem>
                        </li>
                        <li className="item">
                            <NavItem
                                pagePath="/"
                                name="QQ咨询"
                                dsp="去咨询"
                                iconPath={this.state.qqPath}
                            ></NavItem>
                        </li>
                        <li className="item">
                            <NavItem
                                pagePath="/"
                                name="微信客服号：niuqianh"
                                dsp="复制微信号"
                                isNoline={true}
                                iconPath={this.state.weixinPath}
                            ></NavItem>
                        </li>
                    </ul>
                    <div className="tencent_tas">
                        <p className="title">微信公众号：牛钱花平台</p>
                        <div className="imgbox">
                            <img src={this.state.ewm} alt=''></img>
                        </div>
                        <div className="dsp red">
                            <p>扫一扫或搜索添加关注公众号</p>
                            <p>了解更多赚钱策略</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MyServices;