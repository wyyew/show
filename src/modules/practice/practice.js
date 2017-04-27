import React, { Component } from 'react';
import { render } from 'react-dom';
import App from  './container';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import contReducer from './reducer';
export const store = createStore(contReducer);

// function counRender() {
//   render(<App />, document.getElementById('prictice'))
// }
// counRender()
// store.subscribe(counRender);

render(
  <Provider store={store}>
      <App />
  </Provider>,
   document.getElementById('prictice')
)
