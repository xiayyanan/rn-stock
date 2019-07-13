import React, { Component } from 'react';
class MemberTitle extends Component {
    render() {
        return (
            <div className="member-title">
                <div className="name">会员名</div>
                <div className="time">注册时间</div>
                <div className="award">佣金奖励</div>
            </div>
        )
    }
}
export default MemberTitle;