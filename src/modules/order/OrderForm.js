import React, { Component } from 'react'
import {
  Form, Select, Input, InputNumber, Switch, Radio,
  Slider, Button, Upload, Tooltip, Icon, Collapse, Layout, Row, Col, DatePicker  } from 'antd';
const Panel = Collapse.Panel;

import MyUpload from '../../components/upload/upload'
import Products from './productlist/container'
// import ColPanel from '../../../components/panel'

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const ButtonGroup = Button.Group;

//表格用数据
const tableRowNum = 10;


// let dataLen = dataTable.length
const Search = Input.Search;

class Demo extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 2},
      wrapperCol: { span: 6 },
    };
    console.log(this.props.form)
    return (
      <div>
      <Row type="flex" justify="center">
      <Col span={24}  className="orderform">
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="销售组织："
        >
          <span className="ant-form-text">长沙分公司</span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="客户："
        >
          <span className="ant-form-text">达利园</span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="运输方式： "
          hasFeedback
        >
          {getFieldDecorator('ctransporttypeid', {
            rules: [
              { required: true, message: '请选择运输方式!' },
            ],
          })(
            <Select placeholder="请选择运输方式">
              <Option value="0001XX10000000000D15">铁路运输</Option>
              <Option value="0001XX10000000000D16">公路运输</Option>
              <Option value="0001XX10000000000D17">航空运输</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="结算方式： "
          hasFeedback
        >
          {getFieldDecorator('cbalancetypeid', {
            rules: [
              { required: true, message: '请选择运结算方式!' },
            ],
          })(
            <Select placeholder="请选择结算方式">
              <Option value="0001Z0100000000000XZ">现金</Option>
              <Option value="0001Z0100000000000Y0">现金支票</Option>
              <Option value="0001Z0100000000000Y1">转账支票</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
         {...formItemLayout}
         label="发票抬头： "
         hasFeedback
       >
         {getFieldDecorator('vinvoicename', {
           rules: [{ required: true, message: '请输入发票抬头!', whitespace: true }],
         })(
           <Input />
         )}
       </FormItem>
       <FormItem
        {...formItemLayout}
        label="备注： "
        hasFeedback
      >
        {getFieldDecorator('vinvoicename', {
          rules: [{ required: true, message: '请输入备注!', whitespace: true }],
        })(
          <Input />
        )}
      </FormItem>
      <Row>
      <Col span={2}>
        <label>上传附件：</label>
      </Col>
      <Col span={6}>
        <MyUpload />
      </Col>
      </Row>
      <Collapse bordered={top} defaultActiveKey={['1']}>
        <Panel header="收货信息1" key="1">
        <Row>
          <Col span={10}>
          <FormItem
           labelCol={{ span: 4}}
           wrapperCol={{ span: 15 }}
           label="收获地址： "
           hasFeedback
         >
           {getFieldDecorator('creceiveaddrid_name', {
             rules: [{ required: true, message: '', whitespace: true }],
           })(
             <Input />
           )}
         </FormItem>
         </Col>
         <Col span={6}><a href="#"><Icon type="plus" /><span>添加收货地址</span></a></Col>
         </Row>
         <FormItem
          {...formItemLayout}
          label="收获地区： "
          hasFeedback
        >
          {getFieldDecorator('creceiveareaid_name', {
            rules: [
              { required: true, message: '请选择收获地区!' },
            ],
          })(
            <Select placeholder="请选择收获地区">
              <Option value="请选择">请选择</Option>
              <Option value="1001XX100000000002MR">华北</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="期望到货日期："
        >
          {getFieldDecorator('dreceivedate', {
            rules: [{ type: 'object', required: true, message: '请选择日期!' }],
          })(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="商品清单："
        >
          <span className="ant-form-text">3</span>
        </FormItem>
        <Products products={this.props.products}  />
      </Panel>
      </Collapse>
      <Row>
        <Col span={6}>
          <FormItem
            {...formItemLayout}
            label="商品总清单（种）："
            labelCol={{span:12}}
          >
            <span className="ant-form-text">3</span>
          </FormItem>
        </Col>
        <Col span={6} offset={4}>
          <FormItem
            {...formItemLayout}
            label="合计金额："
            labelCol={{span:12}}
          >
            <span className="ant-form-text">￥4200.00</span>
          </FormItem>
        </Col>
        <Col span={8} style={{textAlign:'right'}}>
          <FormItem
              wrapperCol={{ span: 18, offset: 1 }}
            >
            <Button type="primary" htmlType="submit" >暂存</Button>
            <Button style={{ marginLeft: 8 }} type="primary" htmlType="submit">确定</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>取消</Button>
          </FormItem>
        </Col>
      </Row>
      </Form>
      </Col>
      </Row>
      </div>
    );
  }
}

const OrderForm = Form.create()(Demo);

export default OrderForm

// ReactDOM.render(<FormLayoutDemo />, mountNode);
