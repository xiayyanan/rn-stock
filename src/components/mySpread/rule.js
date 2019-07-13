import React, { Component } from 'react';
class Rule extends Component {
    render() {
        return (
            <div className="spreadItem mt10">
                <div className="title">
                    <span className="name">奖励制度</span>
                </div>
                <div className="content">
                    <p className="fwb">1. 推荐奖</p>
                    <p>需求：按推荐关系结算，默认可拿伞下3代的奖金，可手动添加n代的奖金，每个级别对应的代数结算比例可单独设置。</p>
                    <p className="fwb mt10">2. 对碰奖（管理图）</p>
                    <p >需求：小区业绩按比例进行对碰（1.对碰比例可设置），适用于双轨制度（其它轨数的制度不可选择此奖金），每个级别的奖金结算比例可单独设置。</p>
                    <p className="fwb mt10">3. 层碰奖（管理图）</p>
                    <p>需求：每一层的奖金只能结算一次，每个级别的结算比例和可拿奖的最大层数可单独设置。结算方式分两种，供用户选择；</p>
                    <p>第一种：按左右区第一单或第n单的报单业绩进行对碰；</p>
                    <p>第二种：按左右区的总业绩的小区进行对碰结算。</p>
                </div>
            </div>
        )
    }
}
export default Rule;