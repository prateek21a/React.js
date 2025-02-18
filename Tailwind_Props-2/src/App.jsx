import { useState } from 'react'
import './App.css'
import Card from './Components/card'

function App() {

  return (
    <>
<h1 className='mb-4 bg-yellow-500 text-red text-center text-2xl p-4'>Chai Or React</h1>
      <Card username="JohnDoe" />

    </>
  )
}

export default App
