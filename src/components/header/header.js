import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router';
const { Header } = Layout;
import './header.css'

const Head = () => {
  return(
    <Header>
      <div className="logo" />
      <div className="self-bar">
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['3']}
      >
        <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
        <Menu.Item key="2">商品中心</Menu.Item>
        <Menu.Item key="3"><Link to="counter">订单中心</Link></Menu.Item>
        <Menu.Item key="4">渠道中心</Menu.Item>
        <Menu.Item key="5">要货计划</Menu.Item>
        <Menu.Item key="6">公告中心</Menu.Item>
        <Menu.Item key="7"><Link to="login">账户中心</Link></Menu.Item>
        <Menu.Item key="8">对账中心</Menu.Item>
      </Menu>
      </div>
    </Header>
  )
}

export default Head
