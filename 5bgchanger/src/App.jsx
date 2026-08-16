import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [colour , setColour] = useState("bg-white")
  function changeBg(colorScheme){
    setColour(colorScheme);
  }
  useEffect(() => {
    const timer = setTimeout(()=>{
       alert("Color is changed . so UseEffect run")
    },50)
    return ()=> clearTimeout(timer);
  },[colour]) ;

  
  return(
    <>
    <div className= {`${colour} min-h-screen w-full`}>
      <div className = 'rounded-3xl border-4 bg-white fixed bottom-0'>
        <button onClick={() => changeBg("bg-white ")} className = "bg-white border-2 rounded-2xl p-4 m-4 cursor-pointer">White</button>
        <button onClick={() => changeBg("bg-red-500 ")} className = "bg-red-500 border-2 text-white rounded-2xl p-4 m-4 cursor-pointer">Red</button>
        <button onClick={() => changeBg("bg-blue-500 ")} className = "bg-blue-500 border-2 text-white rounded-2xl p-4 m-4 cursor-pointer">Blue</button>
        <button onClick={() => changeBg("bg-amber-500 ")} className = "bg-amber-500 text-white border-2 rounded-2xl p-4 m-4 cursor-pointer">Amber</button>
        <button onClick={() => changeBg("bg-violet-400 ")} className = "bg-violet-400 text-white border-2 rounded-2xl p-4 m-4 cursor-pointer">Violet</button>
        <button onClick={() => changeBg("bg-pink-400 ")} className = "bg-pink-400 text-white border-2 rounded-2xl p-4 m-4 cursor-pointer">Pink</button>
      </div>
    </div>
    </>
  )
  
}

export default App
