import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, hashHistory} from 'react-router';


ReactDOM.render(
 <Router history={hashHistory}>
     <App/>
 </Router>,
  document.getElementById('root')
);
