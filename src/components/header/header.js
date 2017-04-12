import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
const { Header } = Layout;

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
        <Menu.Item key="1">首页</Menu.Item>
        <Menu.Item key="2">商品中心</Menu.Item>
        <Menu.Item key="3">订单中心</Menu.Item>
        <Menu.Item key="4">渠道中心</Menu.Item>
        <Menu.Item key="5">要货计划</Menu.Item>
        <Menu.Item key="6">公告中心</Menu.Item>
        <Menu.Item key="7">账户中心</Menu.Item>
        <Menu.Item key="8">对账中心</Menu.Item>
      </Menu>
      </div>
    </Header>
  )
}

export default Head
