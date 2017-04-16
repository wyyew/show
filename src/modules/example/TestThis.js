import React from 'react';

const suffix = '被调用，this指向：';

export default class TestThis extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)
  }
  componentDidMount() {
    console.log(`componentDidMount${suffix}`, this)
  }
  componentWillReceiveProps() {
    console.log(`componentWillReceiveProps${suffix}`, this)
  }
  shoudComponentUpdate() {
    console.log(`shoudComponentUpdate${suffix}`, this);
    return true;
  }
  componentDidUpdate() {
    console.log(`componentDidUpdate${suffix}`, this);
  }
  componentWillUnmount() {
    console.log(`componentWillUnmount${suffix}`, this)
  }
  handler() {
    console.log(`handle${suffix}`, this)
  }

  render() {
    console.log( `render${suffix}`, this);
    this.handler();
    window.handler = this.handler;
    window.handler();
    return (
      <div>
        <h1 onClick={this.handler}>测试this指向</h1>
        <p></p>
      </div>
    )
  }
}
