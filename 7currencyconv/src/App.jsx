import { useState } from 'react';
import './App.css'
import InputBox from './components/InputBox'


function App() {
  return(
    <>
    <InputBox currency={["usd" , "inr" , "eur" , "bdt" , "bob" , "czk"]} />
    </>
  )
}

export default App
