import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import { Link } from 'react-router'
import './notfound.css'

export default class NotFound extends React.Component {
  render() {
    return (
      <Layout>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div id="react-content">
        <div data-reactroot="" id="page-404">
          <section>
            <h1>404</h1>
            <p>你要找的页面不存在<a href="/">返回首页</a></p>
          </section>
        </div>
        </div>
        </Content>
      </Layout>
    )
  }
}
