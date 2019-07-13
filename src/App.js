import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './router/index';
import store from './redux/store/store';
import './static/css/reset.less';
import './static/iconfont/iconfont.css';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router></Router>
      </Provider>
    );
  }
}
export default App;
