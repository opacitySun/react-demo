import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from './store';
import BasicRoute from './router';

ReactDom.render(
    <Provider store={Store}>
        <BasicRoute />
    </Provider>
, document.getElementById('root'));

// 判断该浏览器支不支持 serviceWorker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('service-worker registed')
      })
      .catch(error => {
        console.log('service-worker registed error')
      })
  })
}
