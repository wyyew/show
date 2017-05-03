import "babel-polyfill"
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containerApp'
import configureStore from './configureStore'
import rootSaga from './sagas'

const store = configureStore();
console.log(store);
const states = store.getState();
console.log(states);
store.runSaga(rootSaga)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('asnc')
)
