import React from 'react';
import ReactDOM from 'react-dom';
//import root app
import App from './containers/App';
import {ConnectedRouter} from 'connected-react-router'
import history from './utils/history'

import reportWebVitals from './reportWebVitals';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  // <ConnectedRouter history={history}>
    <App/>,
  // </ConnectedRouter>,
  MOUNT_NODE
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
