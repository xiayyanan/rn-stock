import React, { Component } from 'react';
class Member extends Component {
    render(){
        const memberData=this.props.memberData;
        return(
            <ul className="member">
                {
                    memberData.map((item,index)=>(
                        <li className="item" key={index}>
                            <img src={item.avatar} alt='' className="avatar"></img>
                            <div className="name">{item.name}</div>
                            <div className="time">{item.time}</div>
                            <div className="award">{item.award}</div>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
export default Member;
