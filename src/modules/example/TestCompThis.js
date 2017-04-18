import React from 'react'

const suffix = "被调用，this指向:";

export default class TestCompThis extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(`componentDidMount${suffix}`, this);
  }
  componentWillReceiveProps(nextProps) {
    console.log(`componentWillReceiveProps${suffix}`, this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`shouldComponentUpdate${suffix}`, this);
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(`componentDidUpdate${suffix}`, this);
  }
  componentWillUnmount() {
    console.log(`componentWillUnmount${suffix}`, this);
  }
  handler() {
    console.log(`handler${suffix}`, this);
  }

  render() {
    console.log(`render${suffix}`, this);
    this.handler();
    window.handler = this.handler;
    window.handler();
    return (
      <div>
        <h1 onClick={this.handler}>测试组件里的this指向 </h1>
        </div>
    )
  }
}
