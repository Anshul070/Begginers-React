import React from 'react';
import Banned from './components/Banned';
import Array from './components/Array';
import Objinarr from './components/Objinarr';


function App() {
  return (
    <div className='bg-zinc-800 h-screen w-screen  gap-10 p-5'>
      <Banned />
      <Array />
      <Objinarr />
    </div>
  )
}

export default App
