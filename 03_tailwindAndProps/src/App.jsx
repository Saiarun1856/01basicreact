import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 rounded-xl mb-4'>tailwind test</h1>
      <Card username = 'Ashley'/>
      <Card username = 'chai aur code'/>

    </>
  )
}

export default App
