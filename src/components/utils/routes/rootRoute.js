// import { Router, Route, IndexRoute } from 'react-router';
// //Component
// import Head from '../components/header/header'
// import Foot from '../components/footer/footer'
// // pages
// import Page1 from '../../components/component1/index';
// import Cont from '../order/componentcontent'
// import Login from '../login/exlogin'
// import Example from '../example/example'
// import NotFound from '../notfound/notfound';
//
// const rootRoute = {
//   path: '/',
//   indexRoute: {
//     getComponent(nextState, cb) {
//       require.ensure([], (require) => {
//         cb(null, require('components/layer/HomePage'))
//       }, 'HomePage')
//     },
//   },
//   getComponent(nextState, cb) {
//     require.ensure([], (require) => {
//       cb(null, require('components/Main'))
//     }, 'Main')
//   },
//   childRoutes: [
//     require('./routes/baidu'),
//     require('./routes/404'),
//     require('./routes/redirect')
//   ]
// }
