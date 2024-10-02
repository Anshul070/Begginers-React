import { useState } from 'react'
import Slideshow from './components/Slideshow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Slideshow />
    </>
  )
}

export default App
