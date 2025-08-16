import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]= useState(15)
 // let counter = 58
  const addValue = ()=>{
      if(counter <20){
    console.log("clicked", counter);
    counter =counter + 1;
    setCounter(counter)
    }
    
  }
  
  const removeValue = ()=> {
    if(counter >0){
    console.log("clicked", counter);
    counter = counter -1;
    setCounter(counter);
    }
    else{
      setCounter===0;
    }

 } 
  return (
    <>
      <h1>chai or react</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addValue}>add value {counter}</button>
      <br/>
      <button
      onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
