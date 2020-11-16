import React, {Component} from 'react';


class AppClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            nama: "Azizah Elvia Shofiyah Salsabila",
            absen: 2
        }
    }

    render(){
        return(
            <div>
                <h3>Ini menggunakan class</h3>
                <h3>Nama Siswa: {this.state.nama}</h3>
                <h3>absen Siswa: {this.state.absen}</h3>
            </div>
        );
    }
}

export default AppClass;