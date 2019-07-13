import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './listItem.less';
class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTouch: false
        }
    }
    static defaultProps = {
        isArrow: true
    }

    onAddGrey = () => {
        this.setState({
            isTouch: true
        });
    };
    onRemoveGrey = () => {
        this.setState({
            isTouch: false
        });
    };

    render() {
        const props = this.props;
        const state = this.state;
        return (
            <div
                className={`list-item  
                ${state.isTouch === true ? "active" : ''}`}
                onTouchStart={this.onAddGrey.bind(this)}
                onTouchEnd={this.onRemoveGrey.bind(this)}>
                <NavLink to={props.pagePath} className="list-item-tap">
                    <div className="list-item-name">{props.name}</div>
                    {props.isArrow && <i className="arrow"></i>}
                </NavLink>
            </div>
        )
    }
}
export {ListItem};