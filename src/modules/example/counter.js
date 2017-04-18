import React, { Component } from 'react';
import PropTypes from 'prop-types'

function Content(props) {
  return <p>Content组件的props.value：{props.value} </p>;
}

Content.propTypes = {
  value: PropTypes.number.isRequired
};

export default class Counter extends Component {
  constructor(props){
    super(props);
    this.state = { value: 0 };
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ value: this.state.value + 1})}>增加</button>
        <pre>{this.state.value}</pre>
        <Content value={this.state.value}></Content>
      </div>
    )
  }
}
