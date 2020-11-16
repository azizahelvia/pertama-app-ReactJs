import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppClass from './AppClass';
import reportWebVitals from './reportWebVitals';
import AppVar from './AppVar';

ReactDOM.render(
  <React.StrictMode>
    <App nama="Azizah Elvia Shofiyah Salsabila" absen= "2" />
    <AppClass />
    <AppVar namaSiswa="Azizah Elvia Shofiyah Salsabila" absenSiswa="2"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
