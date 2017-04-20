import React, { Component } from 'react';
import Counter from './component';

import { createStore } from 'redux';
export const store = createStore(contReducer);

import contReducer from './reducer';

export default class App extends Component {
  handleIncrement = () => {
    store.dispatch({type:'INCREMENT'})
  }
  handleDecrement = () => {
    store.dispatch({type:'DECREMENT'})
  }
  render(){
    let stateValue = store.getState();
    return (
      <Counter value={stateValue} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
    )
  }
}
