import React, { Component } from 'react';
import Header from '@/components/header/header';
import { ListItem } from '@/components/common/listItem';
import '@/http/mock.js';
import './help.less'
class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpData: []
    }
    this.$api({
      method: 'post',
      url: '/help'
    }).then((response) => {
      let data = response.data.help.helpData;
      this.setState({
        helpData: data
      })
    }).catch(function (error) {
      console.log(error);
    })

  }

  render() {
    return (
      <div id="Help">
        <Header name="帮助中心" isNoline={true}></Header>
        <div className="rnui-content">
          <ul className="helpList">
            {
              this.state.helpData.map((item) => (
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
export default Help;