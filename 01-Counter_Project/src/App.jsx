import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter , setCounter]= useState(0)

  const addValue = () => {
    if ( counter < 20){
      setCounter(counter + 1)
    }
else (
  alert("Not going beyond 20")
)
  }

  
  const removeValue = () => {
    if( counter > 0 ){
      setCounter(counter-1);
    } else {
     alert( "not going below 0 " )
    }
  
  }

  return (
    <>
 <h1> Chai Or React </h1>
 <h1> Counter value : {counter} </h1>

 <button
 onClick={addValue}>Add Value</button>
 <br/>
 <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
