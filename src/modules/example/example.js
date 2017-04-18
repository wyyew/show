import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router';
import './example.css';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import TestThis from './TestThis';
import SignupForm from './ComponentNested';
import Counter from './counter';
import TestCompThis from './TestCompThis'
import MessageList from './MessageList';
import TestConnect from './connect'

export default class Example extends Component {
  render() {
    // console.log(this.props);
    const compos = {
      nested: <SignupForm />,
      thisfor: <TestThis />,
      counter: <Counter />,
      message:<MessageList />,
    TestCompThis:<TestCompThis />,
  connect: <TestConnect />
    }
    const name = this.props.params.name;

    return (
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
            <SubMenu key="sub1" title={<span><Icon type="notification" />state&props&context</span>}>
              <Menu.Item key="1"><Link to="/examples/counter">state&props</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/examples/message">props&context</Link></Menu.Item>
            </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />嵌套</span>}>
                <Menu.Item key="3"><Link to="/examples/nested">nested</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="user" />this指向</span>}>
                <Menu.Item key="4"><Link to="/examples/thisfor">this</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/examples/TestCompThis">组件中的this</Link></Menu.Item>
                </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="user" />React-redux</span>}>
                <Menu.Item key="6"><Link to="/examples/connect">connect</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              {name ? compos[name] : <TestThis />}
            </Content>
          </Layout>
        </Layout>
    )
  }
};
