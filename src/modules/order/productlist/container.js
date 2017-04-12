import React from 'react';
import { connect } from 'react-redux';
import ProductList from './component';
const Products = ({ dispatch, products }) => {
  function handleDelete(key) {
    dispatch({
      type: 'DELETE',
      key,
    });
  }
  function handleDeleteAll(){
    dispatch({
      type: 'DELETEALL'
    });
  }
  return (
    <div>
      <ProductList onDelete={handleDelete} products={products} onDeleteAll={handleDeleteAll} />
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);
