// application's entry

import React, { Component } from 'react';
import { render } from 'react-dom';
import '../../common/css/common.scss';

// pages
/*import Page1 from '../components/page1/index';
import Page2 from '../components/page2/index';
import Page3 from '../components/page3/index';*/

class Detail extends Component {
  render() {
    return (
      <div>
        <div className="header">
          注册页面
        </div>
      </div>
    );
  }
}

render((
 <Detail />
), document.getElementById('register'));
