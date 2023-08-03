import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const clicked= ()=>{
    let text = document.getElementById("text")
    let vanish = document.getElementById("vanish")
    document.body.style.backgroundColor = "blue"
    text.innerHTML = 'clicked';
    vanish.style.display = "none";
  }
  return (
    <div className="App">
      <h1 id='text'>new one</h1>
      <button onClick={clicked}>click me</button>
      <button id='vanish'>test</button>
    </div>
  );
}

export default App;
