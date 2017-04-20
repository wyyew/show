import React, { Component } from 'react';
import { render } from 'react-dom';
import App, { store } from  './container';

function counRender() {
  render(<App />, document.getElementById('prictice'))
}
counRender()
store.subscribe(counRender);
