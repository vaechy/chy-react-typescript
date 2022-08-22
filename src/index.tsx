import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import RouterIndex from '@/router';
ReactDom.render(
  <React.StrictMode>
    <HashRouter>
      {/* <App /> */}
      <RouterIndex />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
