import React, { Component } from 'react';
import Header from '@/components/header/header';
import { ListItem } from '@/components/common/listItem';
import '@/http/mock.js';
import './help.less'
class Rule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ruleData: []
    }
    this.$api({
      method: 'post',
      url: '/rule'
    }).then((response) => {
      let data = response.data.rule.ruleData;
      this.setState({
        ruleData: data
      })
    }).catch(function (error) {
      console.log(error);
    })

  }

  render() {
    return (
      <div id="Help">
        <Header name="点买规则" isNoline={true}></Header>
        <div className="rnui-content">
          <ul className="helpList">
            {
              this.state.ruleData.map((item) => (
                <li className="item" key={item.id}>
                  <ListItem
                    name={item.name}
                    pagePath={item.pagePath}>

                  </ListItem>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}
export default Rule;