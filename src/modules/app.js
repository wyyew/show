// application's entry

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import reducers from '../common/js/reducers/index';
import '../common/css/common.scss';
//Component
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// pages
import Page1 from '../components/component1/index';
import Page2 from '../components/component2/index';
import Page3 from '../components/component3/index';

class Application extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <AppBar
            title="ecp-portal-static"
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        </MuiThemeProvider>
        <NavList />
      </div>
    );
  }
};
class NavList extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to="page1">page1</Link>
          <Link to="page2">page2</Link>
          <Link to="page3">page3</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
};
const store = createStore(reducers, {}, applyMiddleware(thunk));

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={NavList}>
        <IndexRoute component={Page1}/>
        <Route path="page1" component={Page1}></Route>
        <Route path="page2" component={Page2}></Route>
        <Route path="page3" component={Page3}></Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
