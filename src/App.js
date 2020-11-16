import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return(
    <div>
      <h4>Ini menggunakan function</h4>
      <h4>Nama saya, {props.nama}</h4>
      <h4>Nomor absen {props.absen}</h4>
    </div>
  );
}

export default App;
