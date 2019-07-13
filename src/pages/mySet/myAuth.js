import React, { Component } from 'react';
import Header from '@/components/header/header';
import AuthForm from '@/components/mySet/authForm';
import './mySet.less';
class MyAuth extends Component {
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
            <div id="MyAuth">
                <Header name="实名认证"></Header>
                <div className="rnui-content">
                    <AuthForm></AuthForm>
                </div>
            </div>
        )
    }
}
export default MyAuth;