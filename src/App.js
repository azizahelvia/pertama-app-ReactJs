import logo from './logo.svg';
import './App.css';

function App() {
  let namaSiswa = 'Azizah Elvia Shofiyah Salsabila';
  let absenSiswa = 2;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Nama: {namaSiswa}</h1>
        <h2>Absen: {absenSiswa}</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
