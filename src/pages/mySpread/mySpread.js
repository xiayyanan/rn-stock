import React, { Component } from 'react';
import Header from '@/components/header/header';
import Spread from '@/components/mySpread/spread';
import Rule from '@/components/mySpread/rule';
import './mySpread.less';
class MySpread extends Component {
    render() {
        return (
            <div id="mySpread">
                <Header name="推广赚钱" isNoline={true}></Header>
                <div className="rnui-content">
                    <Spread></Spread>
                    <Rule></Rule>
                </div>
            </div>
        )
    }
}
export default MySpread;