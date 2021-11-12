import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Map from './map.js';


function App() {
  let [map44, map44변경] = useState([0, 1, 2, 3])

  return (
    <div className="App">
      <Map map44={map44}></Map>
    </div>
  );
}

export default App;
