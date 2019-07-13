import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from '@/components/header/header';
import { NavLink } from 'react-router-dom';
import { PullToRefresh, ListView } from 'antd-mobile';
import '@/http/mock.js';
import './news.less'

const NUM_ROWS = 20;
let pageIndex = 0;
function genData(pIndex = 0) {
  const dataArr = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
  }
  return dataArr;
}
class News extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      data: [],
      refreshing: true,
      isLoading: true,
      height: document.documentElement.clientHeight,
      useBodyScroll: false,
    };
  }

  componentDidUpdate() {
    if (this.state.useBodyScroll) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  componentDidMount() {
    this.$api({
      method: 'post',
      url: '/news'
    }).then((response) => {
      let data = response.data.news.newsData;
      this.setState({
        data: data
      })
    }).catch(function (error) {
      console.log(error);
    })

    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(genData()),
        height: hei,
        refreshing: false,
        isLoading: false,
      });
    }, 1500);
  }

  onRefresh = () => {
    this.setState({ refreshing: true, isLoading: true });
    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        refreshing: false,
        isLoading: false,
      });
    }, 600);
  };

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = [...this.rData, ...genData(++pageIndex)];
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  };




  render() {
    const { data } = this.state;
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#f7f8fa',
          height: 8,
        }}
      />
    );
    let index = data.length - 1;
    
    //console.log(obj);
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <li className="item" key={index}>
          <NavLink to={{
            pathname: obj.pagePath,
            search: '?id=' + index
          }} className="tap">
            <h4 className="name">{obj.title}</h4>
            <div className="thumb">
              {
                obj.thumb.map((thumb, index) => (
                  <div className="imgbox" key={index}>
                    <img src={thumb} alt='' />
                  </div>))
              }
            </div>
            <p className="info">
              <span>{obj.time}</span>
              <span className="space">阅读：{obj.view}万+</span>
            </p>
          </NavLink>
        </li>
      )
    }

    return (
      <div id="News">
        <Header name="股市资讯" isNoline={true}></Header>
        <div className="rnui-content">
          <ul className="newsList">
            {
              <ListView
                key={this.state.useBodyScroll ? '0' : '1'}
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                //renderHeader={() => <span>Pull to refresh</span>}
                renderFooter={() => (<div style={{ padding: 10, textAlign: 'center' }}>
                  {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderRow={row}
                renderSeparator={separator}
                useBodyScroll={this.state.useBodyScroll}
                style={this.state.useBodyScroll ? {} : {
                  height: this.state.height
                }}
                pullToRefresh={<PullToRefresh
                  refreshing={this.state.refreshing}
                  onRefresh={this.onRefresh}
                />}
                onEndReached={this.onEndReached}
                pageSize={1}
              />
            }
          </ul>

          {/* <ul className="newsList">
            {
              this.state.newsData.map((item,index) => (
                <li className="item" key={index}>
                  <NavLink to={{
                    pathname: item.pagePath,
                    search: '?id='+index
                  }} className="tap">
                    <h4 className="name">{item.title}</h4>
                    <div className="thumb">
                      {
                        item.thumb.map((thumb, index) => (
                          <div className="imgbox"  key={index}>
                            <img src={thumb} alt='' />
                          </div>))
                      }
                    </div>
                    <p className="info">
                      <span>{item.time}</span>
                      <span className="space">阅读：{item.view}万+</span>
                    </p>
                  </NavLink>

                </li>
              ))
            }
          </ul> */}

        </div>
      </div>
    );
  }
}
export default News;