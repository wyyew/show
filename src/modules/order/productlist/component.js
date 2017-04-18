import React from 'react'
import { Table, Icon, Popconfirm, Button, Row, Col, Input, InputNumber, Switch, Radio, } from 'antd';
import { PropTypes } from 'prop-types';
const Search = Input.Search;
const ButtonGroup = Button.Group;
//
// const DataTable = ({ data, columns, states }) => {
//   return (
//   <Table footer={states} dataSource={data} columns={columns} />
//   )
// }

// export default DataTable

const ProductList = ({ onDelete, products, onDeleteAll }) => {
  const footer = () => {
    return (
      <div>
      <Row>
      <Col span={19}>
      <Search
      placeholder="输入商品名称 / 编码"
       name="add_input_name"
      style={{ width: 200 }}
      onSearch={value => console.log(value)}
    />
      <InputNumber min={1} max={10} defaultValue={3} />
      {/* <Button type="primary" icon="plus-square-o" size="default">Download</Button>
      <Button type="primary" icon="shopping-cart" size="default">从购物车选</Button>
      <Button type="primary" icon="star-o"  size="default">从收藏夹选</Button>*/}
      <ButtonGroup>
       <Button icon="shopping-cart" />
       <Button icon="star-o" />
     </ButtonGroup>
    </Col>
    <Col span={3}>
        <div>合计：<span>¥1200.00</span></div>
    </Col>
    <Col span={2}>
          <Popconfirm title="Delete?" onConfirm={() => onDeleteAll()}>
            <Button>清空</Button>
          </Popconfirm>
    </Col>
      </Row>
      <Row>
      <Col span={18}><a href="#"><Icon type="plus" /><span>新增收货信息</span></a></Col>
      </Row>
      </div>
    )
  }

  const columns = [
    {
    title: '商品编码',
    dataIndex: 'cproductidcode',
    key: 'cproductidcode',
    render: text => <a href="#">{text}</a>,
    }, {
      title: '商品名称',
      dataIndex: 'cproductidname',
      key: 'cproductidname',
    }, {
      title: '规格',
      dataIndex: 'materialspec',
      key: 'materialspec',
    },{
      title:'价格',
      dataIndex:'nqtorigtaxnetprc',
      key:'nqtorigtaxnetprc'
    },{
      title:'订货数量',
      dataIndex:'nodunitnum',
      key:'nodunitnum'
    },{
      title:'报价数量',
      dataIndex:'nqtunitnum',
      key:'nqtunitnum'
    },{
      title:'库存',
      dataIndex:'nnabnum',
      key:'nnabnum'
    },{
      title:'金额',
      dataIndex:'norigtaxmny',
      key:'norigtaxmny'
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.key)}>
            <Button>删除</Button>
          </Popconfirm>
        );
      }
    }
  ];

  return (
    <Table
      footer={footer}
      dataSource={products}
      columns={columns}
    />
  );
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;
