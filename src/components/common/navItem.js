import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './navItem.less';
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
                className={`navItem
                ${props.isNoline === true ? "navItemNoline" : ''}
                ${state.isTouch === true ? "active" : ''}`}
                onTouchStart={this.onAddGrey.bind(this)}
                onTouchEnd={this.onRemoveGrey.bind(this)}>
                <NavLink 
                    to={props.pagePath ? props.pagePath : 'null'}
                    className="navItemTap"
                    onClick={(e)=>{!props.pagePath&&e.preventDefault();}}
                    >
                    {props.iconPath && <div className="navItemIcon"><img src={props.iconPath} alt=''></img></div>}
                    {props.name && <div className="navItemTitle">{props.name}</div>}
                    {props.dsp && <div className="navItemDsp">{props.dsp}</div>}
                    {props.avatar && <div className="navItemAvatar" ><img src={props.avatar}  alt='' ></img></div>}
                    {props.isArrow && <i className="arrow"></i>}
                </NavLink>
            </div>
        )
    }
}
export { NavItem };