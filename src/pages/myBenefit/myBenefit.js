import React, { Component } from 'react';
import Header from '@/components/header/header';
import Benefit from '@/components/myBenefit/benefit';
import BenefitList from '@/components/myBenefit/benefitList';
import './myBenefit.less';
class MyBenefit extends Component {
    constructor(props){
        super(props);
        this.state={
            benefit:{
                money:1137.68,
                yesterday:17.96,
                account:[
                    {
                        name:"可提现金额",
                        value:960.21
                    },
                    {
                        name:"冻结金额",
                        value:177.47
                    }
                ]
            },
            benefitList:[
                {
                    name:"累计交易日",
                    value:"16",
                    unit:"天"
                },
                {
                    name:"平均收益率",
                    value:"5.32",
                    unit:"%"
                },
                {
                    name:"近一周收益",
                    value:"10.72"
                },
                {
                    name:"近一月收益",
                    value:"105.74"
                }
            ]
        }
    }
    render() {
        return (
            <div id="MyBenefit">
                <Header name="我的业绩" isRed={true}></Header>
                <div className="rnui-content">
                    <Benefit benefit={this.state.benefit}></Benefit>
                    <BenefitList benefitList={this.state.benefitList}></BenefitList>
                </div>
            </div>
        )
    }
}
export default MyBenefit;