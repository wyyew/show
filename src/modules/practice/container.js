import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from './component';

// export default class App extends Component {
//   handleIncrement = () => {
//     store.dispatch({type:'INCREMENT'})
//   }
//   handleDecrement = () => {
//     store.dispatch({type:'DECREMENT'})
//   }
//   render(){
//     let stateValue = store.getState();
//     return (
//       <Counter value={stateValue} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
//     )
//   }
// }

export default connect(
  state => ({value: state}),
  dispatch => ({
    onIncrement: () => dispatch({type:'INCREMENT'}),
    onDecrement: () => dispatch({type:'DECREMENT'})
  })
)(Counter)
