import React from 'react';

const suffix = '被调用，this指向：';
export default class TestThis extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.handler = this.handler.bind(this);
  // }
  handler() {
    console.log(`handler${suffix}`, this);
    const p1 = new Promise((resolve, reject) => {resolve('成功！')});
    p1.then(value => {
      console.log(value);
      throw '哦，不！';
    }).catch(e => console.log(e))
  }
  render() {
    console.log(`render${suffix}`, this);
    return (
      <div>
        <h1 onClick={this.handler}>测试this指向</h1>
      </div>
    );
  }
}
