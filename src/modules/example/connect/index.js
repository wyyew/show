import React, { Component } from 'react';
import { creatStore } from 'redux';
import { connect } from 'react-redux';
import Counter from './component';
import counter from './reducer';
import * as ActionCreatores from './action';

import '../reduxThunk'

export default connect(
  state => ({counter: state.counter}),
  ActionCreatores
)(Counter);
