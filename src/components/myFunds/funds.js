import React,{Component} from 'react';
class Funds extends Component{
    render(){
        return(
            <div className="funds">
                <p className="title">账户余额(元)</p>
                <p className="value">{this.props.funds}</p>
            </div>
        )
    }
}
export default Funds;