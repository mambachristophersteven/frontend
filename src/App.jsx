import './App.css';

function App() {  
  const clicked= ()=>{
    let text = document.getElementById("text")
    let vanish = document.getElementById("vanish")
    document.body.style.backgroundColor = "blue"
    text.innerHTML = 'clicked';
    vanish.style.visibility = "hidden";
  }
  const showButton= ()=>{
    let vanish = document.getElementById("vanish")
    vanish.style.visibility = "visible";
  }
  return (
    <div className="App">
      <h1 id='text'>new one</h1>
      <button onClick={clicked}>click me</button>
      <button id='vanish'>test</button>
      <button onClick={showButton}>test</button>
    </div>
  );
}

export default App;
