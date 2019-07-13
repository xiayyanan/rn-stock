import React, { Component } from 'react';
import Header from '@/components/header/header';
import Member from '@/components/myMember/member';
import MemberTitle from '@/components/myMember/memberTitle';

import './myMember.less';
class MyMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberData: [
                {
                    avatar: require('../../static/images/avatar/avatar-1.jpg'),
                    name: "159****3816",
                    time: "2017.12.30 15:30",
                    award: 6426.41
                },
                {
                    avatar: require('../../static/images/avatar/avatar-2.jpg'),
                    name: "零***名度",
                    time: "2017.12.30 15:30",
                    award: 1270.11
                },
                {
                    avatar: require('../../static/images/avatar/avatar-3.jpg'),
                    name: "快***大师",
                    time: "2017.12.30 15:30",
                    award: 1270.11
                },
                {
                    avatar: require('../../static/images/avatar/avatar-4.jpg'),
                    name: "开心****就好",
                    time: "2017.12.30 15:30",
                    award: 1270.11
                },
                {
                    avatar: require('../../static/images/avatar/avatar-5.jpg'),
                    name: "138****2172",
                    time: "2017.12.30 15:30",
                    award: 1270.11
                },
                {
                    avatar: require('../../static/images/avatar/avatar-6.jpg'),
                    name: "潘****12",
                    time: "2017.12.30 15:30",
                    award: 6426.41
                },
                {
                    avatar: require('../../static/images/avatar/avatar-7.jpg'),
                    name: "你不**0741",
                    time: "2017.12.30 15:30",
                    award: 1270.11
                },
                {
                    avatar: require('../../static/images/avatar/avatar-8.jpg'),
                    name: "简单**快乐",
                    time: "2017.12.30 15:30",
                    award: 1270.11
                },
                {
                    avatar: require('../../static/images/avatar/avatar-9.jpg'),
                    name: "182****9808",
                    time: "2017.12.30 15:30",
                    award: 1270.11
                },
                {
                    avatar: require('../../static/images/avatar/avatar-10.jpg'),
                    name: "零碎***梦",
                    time: "2017.12.30 15:30",
                    award: 1270.11
                }
            ]
        }
    }
    render() {
        return (
            <div id="myMember">
                <Header name="我的会员" isRed={true}></Header>
                <MemberTitle></MemberTitle>
                <div className="rnui-content">
                    <Member memberData={this.state.memberData}></Member>
                </div>
            </div>
        )
    }
}
export default MyMember;