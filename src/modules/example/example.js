import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router';
import './example.css';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import TestThis from './TestThis';
import SignupForm from './ComponentNested';

export default class Example extends Component {
  render() {
    console.log(this.props);
    const compos = {
      nested: <SignupForm />,
      thisfor: <TestThis />
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
              <SubMenu key="sub1" title={<span><Icon type="user" />this指向</span>}>
                <Menu.Item key="1"><Link to="/examples/thisfor">this</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />嵌套</span>}>
                <Menu.Item key="5"><Link to="/examples/nested">nested</Link></Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
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
