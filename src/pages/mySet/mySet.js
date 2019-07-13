import React, { Component } from 'react';
import Header from '@/components/header/header';
import Set from '@/components/mySet/set';

import './mySet.less';
class MySet extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            <div id="MySEet">
                <Header name="设置"></Header>
                <div className="rnui-content">
                    <Set></Set>
                </div>
            </div>
        )
    }
}
export default MySet;