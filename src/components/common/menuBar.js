import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './menuBar.less';
class MenuBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPath: '',
        }
    }

    static defaultProps = {
        isFix: true
    }

    componentDidMount() {
        const history = createBrowserHistory();
        this.setState({
            currentPath: history.location.pathname
        });
    }

    render() {
        const menuData = this.props.menuData;
        return (
            <ul className={`menu-bar ${this.props.isFix === true ? 'active' : ' '}`}>
                {
                    menuData.map((item, index) => (
                        <li className={`item ${item.pagePath === this.state.currentPath ? 'active' : ''}`} key={index}>
                            <NavLink to={item.pagePath} className='tap'>{item.name}</NavLink>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
export default MenuBar;