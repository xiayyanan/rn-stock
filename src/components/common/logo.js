import React, { Component } from 'react';
import styles from './logo.module.less';
class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: require('../../static/images/logo-white.png'),
        }
    }
    render() {
        return (
            <div className={`${styles.logo} ${this.props.isCenter === true ? styles.logoCenter : ' '}`}>
                <img src={this.state.logo} alt=""></img>
            </div>
        )
    }
}
export default Logo;