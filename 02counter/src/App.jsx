import './App.css'
import { useState } from 'react'
function App() {
  let [counter,setCounter] = useState(15)
  const increase = ()=>{
    if(counter < 20){
    counter = counter+1
    setCounter(counter)
    }
  }
  const decrease = ()=>{
     if(counter>0){
      counter = counter -1
      setCounter(counter)
     } 
   } 
  return (
    <>
      <h1>chai aur code</h1>
      <h2>counter value:{counter}</h2>

      <button onClick={increase}>Add Value</button>
      <br/>
      <button onClick={decrease}>remove value</button>
    </>
  )
}
export default App
