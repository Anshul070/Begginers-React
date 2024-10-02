import React from 'react'
import Navbar from './components/Navbar'
import RouteHandler from './utils/RouteHandler'
import SideBar from './components/SideBar'

const App = () => {
  return (
    <div className='w-full h-screen overflow-x-hidden scrollbar-hide bg-white smooth-scroll'>
      <Navbar />
      <SideBar />
    </div>
  )
}

export default App