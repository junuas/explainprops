import { useState } from 'react';
import './App.css';
import Child from"./components/Child"

function App() {
const [inputPar, setInputPar]= useState('')
const[clickPar, setClickPar]=useState([])
const changeHandlerParent = (childInput)=>{
  setInputPar(childInput)
}
const clickHandlerParent=(childClick)=>{
setClickPar(childClick)
}
  return (
    <div className="App">
      <header className="App-header">
        <h2>props practice</h2>
        {clickPar.map(itemPar=><p>{itemPar}</p>)}
 <Child onAdd={changeHandlerParent} onAddClick={clickHandlerParent}/>
      </header>
    </div>
  );
}

export default App;
