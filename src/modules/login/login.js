// application's entry
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layout, Row, Col } from 'antd';
import WrappedNormalLoginForm from '../../components/login/login';
import Footer from '../../components/footer/footer.js';
import './login.css';
// render((<WrappedNormalLoginForm />), document.getElementById('login'));
render(
  <div>
    <Row type="flex" justify="center">
      <Col span={17}>
        <div className="login_panel">
          <div className="login_red">
            <header className="login_copname"></header>
            <Row type="flex" justify="center">
            <Col span="24">
              <WrappedNormalLoginForm />
            </Col>
            </Row>
            <div className="login_into">
                <p>如果您还没有Yonyou在线商城的账号您可以通过以下方式获取您的账号</p>
                <p className="login_into_con"><span>联系电话: 010-62435701</span><span>E-mail: webmaster@yonyou.com</span></p>
              </div>
          </div>
        </div>
          <Footer />

      </Col>
    </Row>
 </div>, document.getElementById('login')
)
