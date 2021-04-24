import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Routes from './routes';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root')
);

// reportWebVitals(console.log);
reportWebVitals();
// https://bit.ly/CRA-vitals;