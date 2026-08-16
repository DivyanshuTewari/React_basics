import { useState , useEffect } from "react";
import currencyRate from "../hooks/customhook";

function InputBox({ currency = [] }) {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  function onAmountChange(e) {
    setAmount(Number(e.target.value));
  }
  function onFromCurrencyChange(e) {
    setFromCurrency(e.target.value);
  }
  function onToCurrencyChange(e) {
    setToCurrency(e.target.value);
  }
  
  const data = currencyRate(fromCurrency);
  const Swap =() =>{    
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }
  const convert = () => {
      
       if(data && data[toCurrency]){
        setConvertedAmount(amount * Number(data[toCurrency]));
       }
    }


  return (
    <>
      <div className="bg-gray-400 border-3 rounded-xl p-8">
        <div className="bg-white flex">
          <label htmlFor="inputfrom" className="text-gray-500 mr-10 ml-10">From</label>
          <input id="inputfrom" type="number" placeholder="Enter value" value={amount} className="bg-white w-100 p-4 m-4 ml-10" onChange={(e)=>onAmountChange(e)}></input>
          <div className="ml-40">
            <h4 className="text-gray-500">Currency Type</h4>
            <select className="bg-white w-20 p-4 m-4" value={fromCurrency} onChange={(e)=>onFromCurrencyChange(e)}>
              {currency.map((item) => (<option key={item} value={item}>{item}</option>))}
            </select>
          </div>
        </div>


        <button className="bg-blue-500 text-white rounded-2xl border-2 p-4 m-4" onClick={Swap}>Swap</button>
        
        
        <div className="bg-white flex">
          <label htmlFor="inputfrom" className="text-gray-500 mr-10 ml-14">To</label>
          <input id="inputfrom" type="number" placeholder="Enter value" className="bg-white w-100 p-4 m-4 ml-10" value={convertedAmount} readOnly></input>
          <div className="ml-40">
            <h4 className="text-gray-500">Currency Type</h4>
            <select className="bg-white w-20 p-4 m-4" value={toCurrency} onChange={(e)=>onToCurrencyChange(e)}>
              {currency.map((item) => (<option key={item} value={item}>{item}</option>))}
            </select>
          </div>
        </div>
        <button className="w-90 rounded-2xl border-2 p-4 m-4 bg-blue-500 text-white p-4" onClick={convert}>Convert {fromCurrency} to {toCurrency}</button>
      </div>
    </>
  )
}

export default InputBox