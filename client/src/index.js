import React from 'react';
import ReactDOM from 'react-dom';
import { Route,  BrowserRouter, Redirect } from 'react-router-dom'
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
      <Redirect exact from="/" to="/login" />
      <Route path='/' component={ App } />
  </BrowserRouter>, document.getElementById('root')
);