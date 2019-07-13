import React, { Component } from 'react';
import Header from '@/components/header/header';
import PhoneForm from '@/components/mySet/phoneForm';
import './mySet.less';
class MyPhone extends Component {
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
            <div id="MyPhone">
                <Header name="手机绑定"></Header>
                <div className="rnui-content">
                    <PhoneForm></PhoneForm>
                </div>
            </div>
        )
    }
}
export default MyPhone;