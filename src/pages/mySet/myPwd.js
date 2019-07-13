import React, { Component } from 'react';
import Header from '@/components/header/header';
import PwdForm from '@/components/mySet/pwdForm';
import './mySet.less';
class MyPwd extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        document.body.style.background = "#ffffff";
        document.querySelector(".rnui-content").style.background = "#ffffff";
    }

    componentWillUnmount() {
        document.body.removeAttribute("style");
        document.querySelector(".rnui-content").removeAttribute("style");
    }

    render() {
        return (
            <div id="MyPwd">
                <Header name="修改密码"></Header>
                <div className="rnui-content">
                    <PwdForm></PwdForm>
                </div>
            </div>
        )
    }
}
export default MyPwd;