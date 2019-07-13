import React, { Component } from 'react';
class Position extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionData: [
        {
          name: "持仓递延费",
          value: 800
        },
        {
          name: "持仓盈利",
          value: -800
        }
      ]
    }
  }

  render() {
    return (
      <div className="sell-count">
        {
          this.state.positionData.map((item, index) => (
            <div className="item" key={index}>
              <p className="name">{item.name}</p>
              <p className="value red">{item.value}</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Position;
