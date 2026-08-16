import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [length , setLength] = useState(8);
  const [numall , setNumall] = useState(false);
  const [ch , setCh] = useState(false);
  const [pass , setPass] = useState("");
  
  const passgen = ()=>{
      let pass = "";
      let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
      if(numall)
      {
        str += "1234567890";
      }
      if(ch)
      {
        str+= "!@#$%^&*()<>?{}"
      }
      for(let i=0 ; i<length ;i++)
      {
        const index = Math.floor(Math.random() * str.length);
        pass = pass+str[index];
      }
      setPass(pass)

  }

  const copyRef = useRef("");

  const copyItem = ()=>{
    window.navigator.clipboard.writeText(copyRef.current.value);
    copyRef.current.select();
    alert("Password copied")
  }

  useEffect(()=>{
    passgen();
  },[length, numall , ch])
  

  return(
    <>
    <div className = "rounded-3xl border-5 border-white bg-gray-500 text-orange-600">
      <div className="text-white text-4xl p-4 m-5">Password generator</div>
      <div className = "flex ">
        <input type="text" ref={copyRef} placeholder="Your Password appears here" value={pass} className="bg-white p-2 mb-10 ml-10 w-full" readOnly ></input>
        <button className="bg-blue-500 max-h-10 text-white border-3 border-black p-2 mr-10" onClick={copyItem}>copy</button>
      </div>
      <div className="flex">
        <input id="len" type="range" value={length} min="0" max="100" className="ml-8 mr-5" onChange={(e)=>setLength(e.target.value)}></input>
        <label htmlFor='len'>Length : {length}</label>
        <input id="numid" type="checkbox" value={numall} className="ml-8 mr-5" onChange={(e)=>setNumall(e.target.checked)}></input>
        <label htmlFor='numid'>Numbers</label>
        <input id="charid" type="checkbox" value={ch} className="ml-8 mr-5" onChange={(e)=>setCh(e.target.checked)}></input>
        <label htmlFor='charid'>Characters</label>
        
      </div>
    </div>
    </>
  )
}

export default App
