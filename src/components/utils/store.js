import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
//reducers
import reducers from '../../common/js/reducers/index';
import products from '../../modules/order/productlist/reducer';
import counter from '../../modules/example/connect/reducer'
const rootReducer = combineReducers({
    products,
    reducers,
    counter
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
 export default createStore(rootReducer, initState, applyMiddleware(thunk));
