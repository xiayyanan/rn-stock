import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Routers from "./routers";
class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    // store.subscribe(() => {
    //   console.log(store.getState())
    // });
  }
  render() {
    let token = this.props.token;
    return (
      <HashRouter>
        <Switch>
          {Routers.map((item, index) => {
            return <Route
              exact
              key={index}
              name={item.name}
              path={item.path}
              render={
                (props) => (
                  !item.auth ? (<item.component {...props} />) :
                    (
                      !token ?
                        <Redirect to={{ pathname: "/login", state: { from: props.location } }} /> :
                        <item.component {...props} />
                    ))
              }
            />
          })}
        </Switch>
      </HashRouter>
    );
  }
}
const mapStateToProps = state => ({
  token: state.posts.user.isLogin
})
export default connect(mapStateToProps)(Router);
