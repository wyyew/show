import React from 'react';
import { Layout,  Breadcrumb } from 'antd';
const { Content } = Layout;
import OrderForm from './OrderForm'

const Cont = () => {
  return (
  <Content style={{ padding: '0 100px' }}>
    <Breadcrumb style={{ margin: '12px 0' }}>
      <Breadcrumb.Item>订单</Breadcrumb.Item>
      <Breadcrumb.Item>2  确认订单信息</Breadcrumb.Item>
    </Breadcrumb>
    <div style={{ background: '#fff', minHeight: 280 }}>
      <OrderForm />
    </div>
  </Content>
  )
}

export default Cont
