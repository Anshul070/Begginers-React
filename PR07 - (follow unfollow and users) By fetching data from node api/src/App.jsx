import { useState } from 'react'
import Navbar from './components/Navbar'
import RouteHandler from './utils/RouteHandler'

function App() {

  return (
    <div className='w-full'>
      <Navbar />
      <RouteHandler />
    </div>
  )
}

export default App
