import React, { Component } from 'react';
import Header from '@/components/header/header';
import InfoForm from '@/components/mySet/infoForm';
import './mySet.less';
class MyInfo extends Component {
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
            <div id="MyInfo">
                <Header name="基本资料"></Header>
                <div className="rnui-content">
                    <InfoForm></InfoForm>
                </div>
            </div>
        )
    }
}
export default MyInfo;