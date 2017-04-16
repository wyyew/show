import React, { Component } from 'react';
import { Link } from 'react-router'
import './index.scss';

export default class Page1 extends Component {
  render() {
    return (
      <div className="page1">
      <ul>
        <li><Link to="counter">Counter</Link></li>
        <li><Link to="examples">examples</Link></li>
      </ul>
      </div>

    );
  }
}
