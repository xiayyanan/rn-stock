import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
class NavItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTouch: false
        }
    }
    static defaultProps = {
        isArrow: true
    }

    onAddGrey = index => {
        this.setState({
            isTouch: true
        });
    };
    onRemoveGrey() {
        this.setState({
            isTouch: false
        });
    };

    render() {
        const props = this.props;
        const state = this.state;
        return (
            <div
                className={`nav-item  
                ${state.isTouch === true ? "active" : ''}`}
                onTouchStart={this.onAddGrey.bind(this)}
                onTouchEnd={this.onRemoveGrey.bind(this)}>
                <NavLink to={props.pagePath} className="tap">
                    <div className="name">{props.name}</div>
                    {props.isArrow&&<i className="arrow"></i>}
                </NavLink>
            </div>
        )
    }
}
export default NavItem;