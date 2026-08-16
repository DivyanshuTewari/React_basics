import { useState } from 'react'
import './App.css'

function App() {
  const [counter , setCounter] = useState(10);
  function increaseCounter (){
    if(counter < 20)
    {
      setCounter(counter+1)
    }
  }
  function decreaseCounter (){
    if(counter > 0)
    {
      setCounter(counter-1)
    }
  }
  return(
    <>
        <h1>Divyanshu Tewari</h1>
        <h3>Counter :{counter} </h3>
        <button onClick = {increaseCounter} >Increase : {counter}</button>
        <button onClick = {decreaseCounter} >Decrease : {counter}</button>
    </>
  )
}

export default App
