import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavItem } from '@/components/common/navItem';
import { loginHandler } from '../../redux/actions/loginActions';
import { ActionSheet } from 'antd-mobile';

class Set extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultAvatar: require("../../static/images/default-avatar.png")
        }
    }
    onExit = () => {
        let posts = this.props.posts.user;
        posts.isLogin = false;
        this.props.loginHandler(posts);
    }

    showActionSheet = () => {
        const BUTTONS = ['拍照', '从相册选择', '取消'];
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: BUTTONS.length - 1,
            maskClosable: true
        })
    }


    render() {
        return (
            <div id="mySet">
                <ul className="set-nav">
                    <li className="item" onClick={this.showActionSheet}>
                        <NavItem
                            name="头像"
                            avatar={this.props.userAvatar}
                        ></NavItem>
                    </li>
                    <li className="item">
                        <NavItem
                            pagePath="/myInfo"
                            name="基本资料"
                            dsp="设置"
                        ></NavItem>
                    </li>

                    <li className="item">
                        <NavItem
                            pagePath="/myAuth"
                            name="实名认证"
                            dsp="已认证"
                        ></NavItem>
                    </li>

                    <li className="item">
                        <NavItem
                            pagePath="/myPhone"
                            name="手机绑定"
                            dsp="182****9808"
                        ></NavItem>
                    </li>

                    <li className="item">
                        <NavItem
                            pagePath="/myPwd"
                            name="修改密码"
                            dsp="修改"
                            isNoline={true}
                        ></NavItem>
                    </li>
                </ul>

                <ul className="set-nav mt10">
                    <li className="item">
                        <NavItem
                            pagePath="/about"
                            name="关于我们"
                        ></NavItem>
                    </li>
                    <li className="item">
                        <NavItem
                            pagePath="/help"
                            name="帮助中心"
                        ></NavItem>
                    </li>
                    <li className="item">
                        <NavItem
                            name="当前版本"
                            dsp="V0.1.0"
                            isNoline={true}
                        ></NavItem>
                    </li>
                </ul>
                <ul className="set-nav mt10">
                    <li className="item exit" onClick={() => { this.onExit() }}>
                        <NavItem
                            name="退出登录"
                            isArrow={false}
                            isNoline={true}
                        ></NavItem>
                    </li>
                </ul>
            </div >
        )
    }
}
const mapStateToProps = state => ({
    ...state,
    userAvatar: state.posts.user.avatar,
    token: state.posts.isLogin
})
export default connect(mapStateToProps, { loginHandler })(Set);