import React, { Component } from 'react';
class HotLine extends Component {
    render() {
        return (
            <div className="hotline">
                <span>客服热线：</span>
                <a href="tel:400-6666-8888" className="red">400-6666-8888</a>
                <span className="space"></span>
                <span>周一至周六：08:00~18:00</span>
            </div>
        )
    }
}
export default HotLine;