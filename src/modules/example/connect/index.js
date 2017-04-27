import React, { Component } from 'react';
import { creatStore } from 'redux';
import { connect } from 'react-redux';
import Counter from './component';
import * as ActionCreatores from './action';

export default connect(
  state => ({counter: state.counter}),
  ActionCreatores
)(Counter);
