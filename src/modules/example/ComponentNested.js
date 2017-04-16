import React, { Component } from 'react';

class GenderSelect extends Component {
  render() {
    return (
      <select onChange={this.props.handleChange}>
          <option value="">请选择</option>
          <option value="0">女</option>
          <option value="1">男</option>
      </select>
    )
  }
}

export default  class SignupForm extends Component {
    constructor(props) {
      super(props);
      this.state = {name:'', password:'', gender:''};
    }
    handleChange = (name, event) => {
      let newState = {};
      newState[name] = event.target.value;
      this.setState(newState);
    }
    handleSelect = (event) => {
      this.setState({gender: event.target.value});
    }
    render() {
      console.log(this.state);
      return (
          <form>
            <input type="text" placeholder="请输入用户名" onChange={this.handleChange.bind(this, 'name')}/>
            <input type="password" placeholder="请输入密码" onChange={this.handleChange.bind(this, 'password')}/>
            <GenderSelect handleChange={this.handleSelect}></GenderSelect>
          </form>
      )
    }
  }
