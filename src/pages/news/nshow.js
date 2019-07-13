import React, { Component } from 'react';
import Header from '@/components/header/header';

import './news.less'
import '@/http/mock.js';
class Nshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: []
    }
    const id = parseInt(this.props.location.search.split('=')[1]);
    this.$api({
      method: 'post',
      url: '/news'
    }).then((response) => {
      let data = response.data.news.newsData.filter(function (item, index) {
        return (index === id);
      })[0];
      this.setState({
        newsData: data
      })
    }).catch(function (error) {
      console.log(error);
    })

  }

  componentDidMount() {
    document.body.style.background = "#ffffff";
    document.querySelector(".rnui-content").style.background = "#ffffff";
  }

  componentWillUnmount() {
    document.body.removeAttribute("style");
    document.querySelector(".rnui-content").removeAttribute("style");
  }
  render() {
    const newsData = this.state.newsData;
    return (
      <div id="Nshow">
        <Header name="新闻详情" isNoline={true}></Header>
        <div className="rnui-content">
          <div className="newsShow">
            <div className="newsShowHd">
              <h1 className="title">{newsData.title}</h1>
              <p className="info">
                <span>{newsData.time}</span>
                <span className="space">阅读：{newsData.view}</span>
              </p>
            </div>
            <div className="newsContent" dangerouslySetInnerHTML={{ __html: newsData.content }}></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Nshow;