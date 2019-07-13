import React, { Component } from 'react';
import './inputText.less';
class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClear: false,
      inputValue: ''
    }
    this.onBlur = this.onBlur.bind(this);
    this.timer = null;
  }
  static defaultProps = {
    type: 'text',
    isClear: true
  }

  handleChange = (e) => {
    const { onChange } = this.props;
    let val = e.target.value;
    onChange && onChange(e, val);
    this.setState({
      inputValue: val,
      isClear: val.length > 0 ? true : false
    });
  }

  clearInput = () => {
    this.setState({
      isClear: false,
      inputValue: ''
    });
    this.InputRef.focus();
  }

  onBlur = () => {
    this.timer = setTimeout(() => {
      this.setState({
        isClear: false
      });
    }, 100)
  }

  onFocus = (event) => {
    this.setState({
      isClear: true
    });
    event.nativeEvent.stopImmediatePropagation();
  }

  componentDidMount() {
    if (this.props.value) {
      this.setState({
        inputValue: this.props.value
      })
    }
    document.addEventListener('click', this.onBlur);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.onBlur);
    clearTimeout(this.timer);
    this.setState = (state, callback) => {
      return;
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value) {
      this.setState({
        inputValue: nextProps.value
      })
    }
  }

  render() {
    const childrens = this.props.children;
    this.isArray = false;
    if (childrens instanceof Array) {
      this.isArray = true;
    }
    return (
      <div className="cit-item">
        {
          (childrens && this.isArray === false && childrens.props['data-before'] === true) && childrens
        }
        {
          (childrens && this.isArray) && childrens.map((item) => (
            item.props['data-before'] === true && item
          ))
        }
        {
          this.props.title && <div className="cit-item-title">{this.props.title}</div>
        }
        <div className="cit-input-box" onClick={this.props.onClick}>
          <input
            className="cit-text"
            readOnly={this.props.isRead ? true : false}
            type={this.props.type}
            name={this.props.name}
            onChange={this.handleChange.bind(this)}
            onBlur={(e) => this.onBlur(e)}
            onClick={(e) => this.onFocus(e)}
            value={this.state.inputValue}
            ref={InputRef => this.InputRef = InputRef}
            placeholder={this.props.placeholder}>
          </input>
          {this.props.isSelect === true && <div className="cit-text-select"></div>}
        </div>
        {(this.state.isClear === true && this.props.isClear === true && this.state.inputValue.length > 0) && <div className="cit-text-clear" onClick={this.clearInput.bind(this)}></div>}
        {
          (childrens && this.isArray === false && childrens.props['data-after'] === true) && childrens
        }
        {
          (childrens && this.isArray) && childrens.map((item) => (
            item.props['data-after'] === true && item
          ))
        }
      </div>
    )
  }
}
export { InputText };
