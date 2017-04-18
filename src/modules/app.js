// application's entry
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

import '../common/css/common.scss';
//Component
import Head from '../components/header/header'
import Foot from '../components/footer/footer'

// pages
import Page1 from '../components/component1/index';
import Cont from './order/componentcontent'
import Login from './login/exlogin'
import Example from './example/example'
import NotFound from './notfound/notfound';
//store
import store from '../components/utils/store'



class Application extends Component {
  render() {
    return (
      <div>
        <Head />
          {this.props.children}
        <Foot />
      </div>
    );
  }
}

console.log(store.getState())

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Application}>
        <IndexRoute component={Page1}/>
        <Route path="counter" component={Cont}/>
        <Route path="examples(/:name)" component={Example} />
      </Route>
      <Route path="login" component={Login} />
      <Route path="/404" component={NotFound} />
      <Redirect from='*' to='/404' />
    </Router>
  </Provider>
), document.getElementById('app'));
