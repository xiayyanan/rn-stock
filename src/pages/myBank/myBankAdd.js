import React, { Component } from 'react';
import Header from '@/components/header/header';
import BankForm from '@/components/myBank/bankForm';
import './myBankAdd.less';
class MyBankAdd extends Component {
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
            <div id="MyBankAdd">
                <Header name="添加银行卡" isNoline={true}></Header>
                <div className="rnui-content">
                    <BankForm></BankForm>
                </div>
            </div>
        )
    }
}
export default MyBankAdd;