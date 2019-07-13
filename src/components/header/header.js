import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import './header.less';
class Header extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  static defaultProps = {
    isBack: true
  }

  goBack() {
    const history = createBrowserHistory();
    history.goBack();
  }

  render() {
    return (
      <div className={`rnui-header ${this.props.isRed === true ? "rnui-header-red" : ' '} ${this.props.isTransparency === true ? "rnui-header-transparency" : ' '} ${this.props.isNoline === true ? "rnui-header-noline" : ' '}`}>
        {this.props.name !== undefined && <h1 className="rnui-header-title">{this.props.name}</h1>}
        {this.props.isBack === true && <span onClick={this.goBack} className="rnui-header-back"></span>}
        {this.props.children}
      </div>
    );
  }
}

export default Header;
