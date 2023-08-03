import './App.css';



function App() {  
  const clicked= ()=>{
    document.body.classList.toggle('dark-mode');
   
  }
  
  return (
    <div className="container">
      <h1 id='text' className='text'>new one</h1>
      <button onClick={clicked}>click me</button>
    </div>
  );
}

export default App;
