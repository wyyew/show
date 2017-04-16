// application's entry

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import reducers from '../common/js/reducers/index';
import '../common/css/common.scss';
//Component
import Head from '../components/header/header'
import Foot from '../components/footer/footer'

// pages
import Page1 from '../components/component1/index';
import Cont from './order/componentcontent'
import Login from './login/exlogin'
import Example from './example/example'
//reducers
import products from './order/productlist/reducer'
const rootReducer = combineReducers({
    products,
    reducers
});
const initState = {products:[{
 key: '1',
 cproductidcode: 'John Brown',
 cproductidname: 32,
 materialspec: 'New York No. 1 Lake Park',
 nqtorigtaxnetprc:'¥240',
 nodunitnum: 'John Brown',
 nqtunitnum: 32,
 nnabnum: 'New York No. 1 Lake Park',
 norigtaxmny:'¥240',
}, {
 key: '2',
 cproductidcode: 'Jim Green',
 cproductidname: 42,
 materialspec: 'London No. 1 Lake Park',
 nqtorigtaxnetprc:'¥240',
 nodunitnum: 'John Brown',
 nqtunitnum: 32,
 nnabnum: 'New York No. 1 Lake Park',
 norigtaxmny:'¥240',
}, {
 key: '3',
 cproductidcode: 'Joe Black',
 cproductidname: 32,
 materialspec: 'Sidney No. 1 Lake Park',
 nqtorigtaxnetprc:'¥240',
 nodunitnum: 'John Brown',
 nqtunitnum: 32,
 nnabnum: 'New York No. 1 Lake Park',
 norigtaxmny:'¥240',
}]};


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
};
const store = createStore(rootReducer, initState, applyMiddleware(thunk));

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
    </Router>
  </Provider>
), document.getElementById('app'));
