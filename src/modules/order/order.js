import React from 'react';
import { render } from 'react-dom';
import { Layout } from 'antd';
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import products from './productlist/reducer'
import Head from '.. /../components/header/header'
import Foot from '../../components/footer/footer'
import Cont from './componentcontent'
1
const mountNode = document.getElementById('order');
const rootReducer = combineReducers({
    products
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


let store = createStore(rootReducer, initState)
console.log(store.getState());
render(
  <Provider store={store}>
  <Layout className="layout">
    <Head />
    <Cont />
    <Foot />
  </Layout>
  </Provider>
, mountNode);
