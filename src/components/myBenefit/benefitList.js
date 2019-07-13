import React, { Component } from 'react'
class BenefitList extends Component {
    render() {
        const benefitList = this.props.benefitList;
        return (
            <ul className="benefitList">
                {
                    benefitList.map((item, index) => (
                        <li className="item" key={index}>
                            <div className="name">{item.name}</div>
                            <div className="value red">{item.value}</div>
                            {item.unit&&<div className="unit">{item.unit}</div>}
                        </li>
                    ))
                }
            </ul>
        )
    }
}
export default BenefitList;