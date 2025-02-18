import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './DTApp';
import reportWebVitals from './reportWebVitals';
import DTApp from './DTApp';
const DTroot = ReactDOM.createRoot(document.getElementById('DTroot'));
DTroot.render(
  <React.StrictMode>
    <DTApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
