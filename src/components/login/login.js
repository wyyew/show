// application's entry
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Form, Icon, Input, Button, Row, Col, Checkbox, message } from 'antd';
const FormItem = Form.Item;
import 'antd/dist/antd.css';
import './login.css';

class NormalLoginForm extends Component {
  constructor(props) {
        super(props)
    }
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  handleSubmit(e) {
    e.preventDefault();

    this.props.form.resetFields()
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
  }
  // handleSubmit(e) {
  //   e.preventDefault();
  //   console.log('Received values of form: ');
  //   // this.props.form.validateFields((err, values) => {
  //   //   if (!err) {
  //   //     console.log('Received values of form: ', values);
  //   //     // post('http://localhost:8080/login', values)
  //   //     // .then((res) => {
  //   //     //   if(res){
  //   //     //     message.info('登录成功！');
  //   //     //   //  this.context.router.push('/');//单页面
  //   //     //    window.location.href='/';
  //   //     // } else {
  //   //     //   message.info('登录失败！');
  //   //     // }
  //   //     // })
  //   //   }
  //   // });
  // }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="loginwrap">
        <h2>欢迎登录</h2>
      <Form horizontal onSubmit={this.handleSubmit.bind(this)} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="请输入用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="请输入密码" />
          )}
        </FormItem>
        <FormItem
          // {...formItemLayout}
          // label="Captcha"
          // extra="We must make sure that your are a human."
        >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: '请输入验证码' }],
              })(
                <Input size="large" addonBefore={<Icon type="lock" />} placeholder="请输入验证码" />
              )}
            </Col>
            <Col span={12}>
              <Button size="large">获取验证码</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住密码</Checkbox>
          )}
          <a className="login-form-forgot">忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          <a>没有账号？立即注册</a>
        </FormItem>
      </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;
