import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '@/components/header/header';
import TabBar from '@/components/tabBar/tabBar';
import Logo from '@/components/common/logo';
import Nav from '@/components/index/nav';
import Quotes from '@/components/index/quotes';
import Top from '@/components/index/top';
import Notice from '@/components/index/notice';
import Bulls from '@/components/index/bulls';
import Dynamic from '@/components/index/dynamic';
import './index.less';
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div id="Index">
        <Header isBack={false} isRed={true}>
          <Logo></Logo>
          <NavLink to='/saoma' className="h-saoma"></NavLink>
        </Header>
        <TabBar></TabBar>
        <div className="rnui-content">
          <Top></Top>
          <div className="idx-base">
            <Quotes></Quotes>
            <Nav></Nav>
            <Notice></Notice>
          </div>
          <Bulls></Bulls>
          <Dynamic></Dynamic>
        </div>
      </div>
    );
  }
}

export default Index;