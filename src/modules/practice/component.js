import React, { Component } from 'react';
import { Button } from 'antd';

// export default class Counter extends Component {
//   render() {
//     console.log(this.props)
//     return
const Counter = ({ value, onIncrement,onDecrement }) =>(
      <div>
        <h1>计数器次数是：{value}</h1>
        <Button onClick={onIncrement}>+1</Button>
        <Button onClick={onDecrement}>-1</Button>
      </div>
    )
export default Counter;
