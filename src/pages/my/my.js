import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Header from '../../components/header/header';
import TabBar from '../../components/tabBar/tabBar';
import Logo from '@/components/common/logo';
import MyTop from '@/components/my/MyTop';
import MyNav from '@/components/my/MyNav';
import HotLine from '@/components/my/HotLine';
import './my.less'
class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    //let userName = this.props.userName;
    return (
      <div id="My">
        <Header isTransparency={true}>
          <Logo isCenter={true}></Logo>
          <NavLink to='/message' className="h-message"></NavLink>
        </Header>
        <TabBar></TabBar>
        <div className="rnui-content">
          <MyTop></MyTop>
          <MyNav></MyNav>
          <HotLine></HotLine>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userName: state.posts.user.name
})
export default connect(mapStateToProps)(My);