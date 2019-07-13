import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './sideslip.less';
class Sideslip extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      isOpen: false,
      dirCname: 'sideslipBottom'
    }
    this.getDirection = this.getDirection.bind(this);
    this.onClose = this.onClose.bind(this);
  }
  static defaultProps = {
    direction: 'bottom',
    isHeader: true,
    rmovetime: 350
  }

  getDirection(type) {
    switch (type) {
      case 'left':
        return 'sideslipLeft'
      case 'right':
        return 'sideslipRight'
      case 'top':
        return 'sideslipTop'
      default:
        return 'sideslipBottom'
    }
  }
  componentDidMount() {
    this.setState({
      isShow: true
    })
    setTimeout(() => {
      this.setState({
        isOpen: true
      })
    }, 100)
  }
  onClose() {
    const { rmovetime, removeDom } = this.props;
    this.setState({
      isOpen: false
    })
    setTimeout(() => {
      this.setState({
        isShow: false
      });
      removeDom();
    }, rmovetime)
  }

  render() {
    const { contentText,domStyle,bgStyle} = this.props
    return (
      this.state.isShow === true &&
      <div className="sideslipBox">
        <div className={['sideslip', this.state.dirCname, this.state.isOpen === true ? 'active' : ''].join(' ')} style={domStyle}>
          {
            this.props.isHeader === true &&
            <div className="sideslipHeader">
              <h1 className="title">{this.props.title}</h1>
              <span className="close" onClick={this.onClose}></span>
            </div>
          }
          <div className="sideslipScroll">{contentText}</div>
        </div>
        <div className={this.state.isOpen === true ? 'sideslipBg active' : 'sideslipBg'} style={bgStyle} onClick={this.onClose}></div>
      </div>
    );
  }
}

function opens(params) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  document.body.style.height = "100%";
  document.body.style.overflow = "hidden";
  ReactDOM.render(<Sideslip
    {...params}
    removeDom={() => {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
      document.body.removeAttribute('style');
    }}
  />, div)
}
export default {
  sideslipShow(params) {
    opens({ ...params })
  }
}
