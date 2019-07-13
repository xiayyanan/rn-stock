import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { withRouter } from 'react-router';
class BankAdd extends Component {
    toPath = (path) => {
        this.props.history.push(path)
    }
    render() {
        return (
            <div className="myBankAdd">
                <Button onClick={() => { this.toPath('/myBankAdd') }}>
                    <span className="iconfont icon-p-atten"></span>
                    <span>添加银行卡</span>
                </Button>
            </div>
        )
    }
}
export default withRouter(BankAdd);