import React, {Component} from 'react';

const AppVar = (props) => {
    return(
    <div>
        <h2>Menggunakan Variabel</h2>
        <h2>Nama  : {props.namaSiswa}</h2>
        <h2>Absen : {props.absenSiswa}</h2> 
    </div>
    );
}

export default AppVar;